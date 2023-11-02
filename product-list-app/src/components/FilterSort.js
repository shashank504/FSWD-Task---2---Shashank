
import React from 'react';










const FilterSort = ({ handleFilter, handleSort }) => {
  return (
    <div className="filter-sort">
      <label>
        Filter by: 
        <select onChange={handleFilter}>
        {/* <option value="cat">Category 1</option>
          <option value="cat">Category 2</option> */}
        </select>
      </label>
      <label>
        Sort by:
        <select onChange={handleSort}>
          <option value="priceAsc">Price Low to High</option>
          <option value="priceDesc">Price High to Low</option>
        </select>
      </label>
    </div>
  );
};

export default FilterSort;
