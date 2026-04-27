import ModelDetail from "@/components/ModelDetail";
import React from "react";

const ModelsPage = async () => {
  const res = await fetch("http://localhost:8000/models", {
    next: { revalidate: 10 },
  });
  const models = await res.json();
  // console.log(models);
  return (
    <div>
      <h2>Models Page</h2>
      <div className="grid grid-cols-3 gap-5 p-5 ">
        {models.map((model) => (
          <ModelDetail key={model.id} model={model} />
        ))}
      </div>
    </div>
  );
};

export default ModelsPage;
