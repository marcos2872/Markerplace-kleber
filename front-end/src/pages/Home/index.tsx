import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';

import Header from '../../components/Header';
import db from '../../services/firebase-config';
import VehicleCard from '../../components/VehicleCard';
import Div from './styled';
import Loading from '../../components/Loading/Index';

function Index() {
  const [vehicles, setVehicles] = useState<[]>([]);
  const [loading, setLoading] = useState(false);

  type dataType = {
    id: string;
    title: string;
    price: string;
    image: string;
  };

  useEffect(() => {
    const vehiclesCollection = collection(db, 'vehicles');
    const getVehicles = async () => {
      const response = await getDocs(vehiclesCollection);
      const data: any = response.docs.map((acc) => ({ ...acc.data() }));
      setVehicles(data);
      setLoading(true);
    };
    getVehicles();
  }, []);

  return (
    <div>
      <Header />
      {loading ? (
        <Div>
          {vehicles && vehicles.map((obj: dataType) => <VehicleCard obj={obj} key={obj.id} />)}
        </Div>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default Index;
