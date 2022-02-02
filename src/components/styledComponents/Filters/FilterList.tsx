import React, { useState } from "react";
import classes from "./styledComponents/Filters/FilterList.module.css";
// import Filter from "./Filter";

interface FilterListProps {
  // isFiltered: boolean;
  checkFilter: (filterName: string) => void;
}

function FilterList({ checkFilter }: FilterListProps) {
  const [isFiltered, setFilter] = useState(false);

  function setChecked() {
    setFilter(!isFiltered);
  }

  return (
    <div className={classes.filterList}>
      {/* <Filter setFiltered={setChecked} name="Active" isFiltered={isFiltered} />
      <Filter
        setFiltered={setChecked}
        name="Completed"
        isFiltered={isFiltered}
      />
      <Filter setFiltered={setChecked} name="Reset" isFiltered={isFiltered} /> */}
    </div>
  );
}

export default FilterList;
