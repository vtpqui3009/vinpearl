import { Fragment } from "react";
import VinpearlCard from "./VinpearlCard";
import VINPEARL_POPULATION_DATA from "./VINPEARL_POPULATION_DATA.js";
const VinpearlPopulation = () => {
  return (
    <Fragment>
      <h1 className="text-3xl font-semibold my-4">Quần thể Vinpearl</h1>
      <div className="grid grid-cols-3 gap-10">
        {VINPEARL_POPULATION_DATA.map((data) => (
          <VinpearlCard key={data.id} vinpearlData={data} />
        ))}
      </div>
    </Fragment>
  );
};
export default VinpearlPopulation;
