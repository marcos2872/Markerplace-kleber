// import PropTypes from 'prop-types';
import React from 'react';
// import React, { useEffect, useState } from 'react';
// import { ref, getDownloadURL, listAll } from 'firebase/storage';
// import { Image, P } from './styled';
// import { storage } from '../../services/firebase-config';

function Index(/* { obj } */) {
  // const [data, setData] = useState(null);

  // const objSetData = async (list) => {
  //   const objData = { ...obj, images: '' };
  //   // list.items.forEach((item) => {
  //   const url = await getDownloadURL(list.items[0]);
  //   objData.images = url;
  //   // });
  //   setData(objData);
  //   // console.log(url);
  // };

  // const getImageRef = async () => {
  //   const imagesListRef = ref(storage, `images/${obj.id}`);
  //   const list = await listAll(imagesListRef);
  //   objSetData(list);
  // };

  // useEffect(() => {
  //   getImageRef();
  // }, []);
  return (
    <div
      className="
        bg-slate-400
          w-80
          h-auto
          m-1
          p-1
          rounded
          flex
          flex-col
          items-center
        "
    >
      teste
      {/* {data && (
        <>
          <h2 className="bg-slate-400">Model: {data.model}</h2>
          {data.images && (
            <section
              className="
          bg-transparent
          flex
          overflow-x-scroll
          scroll-smooth
          w-72
          rounded
        "
            >
              {data.images.map((img) => (
                <Image key={img} src={img} />
              ))}
            </section>
          )}
          <h4 className="bg-slate-400">${data.price}</h4>
          <div
            className="
          bg-slate-400
            flex
            flex-wrap
            justify-center
            w-80
            gap-2
            p-2
        "
          >
            <P>{`Brand: ${data.brand}`}</P>
            <P>{`Exchange: ${data.description.exchange}`}</P>
            <P>{`Year: ${data.description.year}`}</P>
            <P>{`Fuel: ${data.description.fuel}`}</P>
            <P>{`Color: ${data.description.color}`}</P>
            <P>{`Bodywork: ${data.description.bodywork}`}</P>
            <P>{`Traction: ${data.description.traction}`}</P>
          </div>
          <span
            className="
            bg-slate-400
            flex
            flex-col
            flex-wrap
            w-80
            p-2
            gap-2
          "
          >
            <P className="w-36">about this vehicle:</P>
            <p
              className="
            flex
            bg-slate-400
            text-black
            rounded
            w-72
            "
            >
              {data.description.text}
            </p>
          </span>
        </>
      )} */}
    </div>
  );
}

// Index.propTypes = {
//   obj: PropTypes.shape({
//     model: PropTypes.string,
//     images: PropTypes.arrayOf(PropTypes.string),
//     price: PropTypes.number,
//     brand: PropTypes.string,
//     id: PropTypes.string,
//     description: PropTypes.shape({
//       exchange: PropTypes.string,
//       year: PropTypes.string,
//       fuel: PropTypes.string,
//       color: PropTypes.string,
//       bodywork: PropTypes.string,
//       traction: PropTypes.string,
//       text: PropTypes.string,
//     }),
//   }).isRequired,
// };

export default Index;
