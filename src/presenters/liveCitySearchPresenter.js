import React from 'react';
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng
} from 'react-places-autocomplete';

export default
function CitySearch(props) {
    const [address, setAddress] = React.useState('');
    const [coordinates, setCoordinates] = React.useState({lat: null, lng: null});

    async function handleSelectACB(value) {
        const results = await geocodeByAddress(value);
        const latlng = await getLatLng(results[0]);
        setAddress(value);
        setCoordinates(latlng);
        props.onCityChange(value, latlng);
    }

    return (
        <div>
            <PlacesAutocomplete 
                value={address} 
                onChange={setAddress} 
                onSelect={handleSelectACB} 
                debounce={300}
            >
                {({getInputProps, suggestions, getSuggestionItemProps, loading}) => (
                    <div>
                        <input style={{marginBottom: "0"}} className='authentication__input' id='citySearchInput' {...getInputProps({placeholder: "Enter your location..."})}/>

                        <div className='authentication__container' id='citySearchContainer'>
                            {loading ? <div>...loading</div> : null}
                            {suggestions.map((suggestion) => {
                                const style = {
                                    backgroundColor: suggestion.active ? "#98D2E3" : "#FFFFFF",
                                    borderTop: "1px solid #e6e6e6",
                                }

                                return (
                                <div key={suggestion.placeId} {...getSuggestionItemProps(suggestion, { style })}>{suggestion.description}</div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </PlacesAutocomplete>
        </div>
    );
}