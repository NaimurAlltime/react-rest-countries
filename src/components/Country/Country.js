import React from 'react';
import './Country.css';

const Country = (props) => {
    const {name, area, region, population, flags} = props.country;
    // console.log(props.country);
    return (
        <div className='country-container'>
           <h2>Name: {name.common} </h2>
           <img src={flags.svg} alt="" />
           <h3>Area: {area} </h3>
           <h5>Region: {region} </h5> 
           <h4>Population: {population} </h4> 
        </div>
    );
};

export default Country;