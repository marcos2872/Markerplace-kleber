import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Image, Card, Title, Price, Description } from './styled';

function Index({ obj }: { obj: { id: string; title: string; price: string } }) {
  // type dataType = {
  //   id: string;
  //   title: string;
  //   price: string;
  //   image: string;
  // };
  // const [data, setData] = useState<dataType>();

  // const navigate = useNavigate();

  return (
    <Card>
      {/* {data && (
        <>
          <Image src={data.image} onClick={() => navigate(`/vehicle/${data.id}`)} />
          <Description>
            <Title onClick={() => navigate(`/vehicle/${data.id}`)}>{data.title}</Title>
            <Price>{`$${data.price}`}</Price>
          </Description>
        </>
      )} */}
    </Card>
  );
}

export default Index;
