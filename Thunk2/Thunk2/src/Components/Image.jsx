import React from "react";
import { useSelector } from "react-redux";

const Image = () => {
  const data = useSelector((state) => state.card);

  return (
    <div className="grid gap-2 grid-cols-2 md:grid-cols-4 xl:grid-cols-6">
        {data.data.map((item) => (
            <img className="w-60 h-60 border" key={item.id} src={item.images[0]}  />
        ))
        }
    </div>
  );
};

export default Image;