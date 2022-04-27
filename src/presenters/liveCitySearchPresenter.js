import React from 'react';
import AsyncSelect from "react-select/async"
import { getGeo } from "../source/geoSource.js";


export default
function CitySearch(props) {

    function loadOptionsACB(queryString) {
        if (!queryString) {
            return [];
        }
        return getGeo(queryString);
    }

    return (
        <div>
            <AsyncSelect 
                cacheOptions
                getOptionLabel={(e) => e.name + ', ' + e.country}
                getOptionValue={(e) => e.name}
                /*onInputChange={(value) => setQuery(value)}*/
                onChange={(value) => console.log('Value selected: ', value)/*props.setCity(value)*/}
                loadOptions={loadOptionsACB}
            />
        </div>
    );
}