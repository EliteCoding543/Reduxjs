import React from "react";
import { useSelector } from "react-redux";

const Image = () => {
  const data = useSelector((state) => state.card);

  return (
    <div>
        {data.data.map((item) => (
            <img key={item.id} src={item.images[0]}  />
        ))
        }
    </div>
  );
};

export default Image;