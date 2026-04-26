import React from "react";

const ModelDetail = ({ model }) => {
  return (
    <div className=" border p-5 rounded-2xl">
      <h1>Name: {model.title}</h1>
      <h5>Description: {model.description}</h5>
      <h5 className="text-pink-400 text-2xl font-bold">
        Price: ${model.price}
      </h5>
    </div>
  );
};

export default ModelDetail;
