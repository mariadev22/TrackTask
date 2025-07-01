import React from "react";
import Notes from "../../components/Notes";

const Home = () => {
  return (
    <div>
      <h1 className="text-3xl/tight sm:text-4xl/tight font-semibold py-4">
        Notas
      </h1>
      <Notes />
    </div>
  );
};

export default Home;
