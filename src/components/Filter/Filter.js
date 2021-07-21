import React from 'react';
import './Filter.css';


const Filter = ({valueState, filterByName}) => {
  return (
    <label className="label-filter">
        Filter
      <input type="text" className="input-filter" value={valueState} onChange={filterByName}/>
      
    </label>
  )
}

export default Filter;