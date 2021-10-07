import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React,{useState,useEffect} from "react";
import PlacesAutocomplete,{geocodeByAddress, getLatLng} from "react-places-autocomplete";
import styled from "styled-components";
import tw from 'twin.macro'

const LocationContainer = styled.div`
    height: 3.5em;
    max-width:20em;
    box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
    ${tw`
        flex
        items-center
        rounded-md
        bg-white
        pt-1
        pb-1
        mr-4
        md:-mr-10
        ml-1
        md:pt-2
        md:pb-2
        -mt-36
        md:-mt-32
        z-10  
        absolute
    `}
`
const ItemContainer = styled.div`
    ${tw`
        flex
        m-4
        
    `}
`
const MapIcon = styled.span`
    ${tw`
        text-red-500
        fill-current
        text-lg
        md:text-base
        ml-5
        md:ml-5
        absolute
    `}
`
export function Location(){
    const [address, setAddress] = React.useState('');
    const handleSelect = async () => {};

    return(
        
        <LocationContainer>
            <MapIcon>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
            </MapIcon>
            <PlacesAutocomplete 
            value={address}
            onChange={setAddress}
            onSelect={handleSelect}>
                {({getInputProps, suggestions, getSuggestionItemProps, loading}) => (
                <div >
                    <input style={{width:'15em',outline:'none',textAlign:'center'}} 
                     {...getInputProps({placeholder: 'Pickup Location'})} />
                    <div>
                    {loading ? <div>...loading</div> : null}

                    {suggestions.map((suggestion) => {
                        console.log(suggestion)
                        return <div>{suggestion.description}</div>
                    })}
                    </div>
                </div>
                )}
            </PlacesAutocomplete>
        </LocationContainer>
        
    )
}