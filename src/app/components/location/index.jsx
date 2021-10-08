import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React,{useState,useEffect} from "react";
import styled from "styled-components";
import tw from 'twin.macro'
import PlaceFinder from "./PlaceFinder";
import ReactSearchBox from 'react-search-box'
import './location.css'

const LocationContainer = styled.div`
    width: 21em;
    justify-content: center;
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
const Input = styled.input`
    width: 15em;
    text-align: center;
    height: 40px;
`
export function Location(){
    const [geoLocation, setGeoLocation] = useState({});
    const [geoError, setGeoError] = useState(null);
    const [searchResults, setSearchResults] = useState();

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
          (e) => {
            setGeoLocation(e.coords);
          },
          async (error) => {
            setGeoError(error);
          }
        );
      }, []);

      async function onSearchChange(query) {
        if (query.length > 0) {
          let placeFinder = new PlaceFinder("EGcQ960oLfy6ohNOa0WW2OZARbEUvS7n");
          let results = await placeFinder.getNearbyPlaces(
            query,
            geoLocation.latitude,
            geoLocation.longitude
          );
          setSearchResults(results);
          console.log(results);
        }
      }

    return(
        
            <LocationContainer>
            <div className='locationInput'>
            
            <ReactSearchBox
                
                placeholder="Pickup Location"
                matchedRecords={searchResults
                ?.map((result) => ({
                    key: result.id,
                    name: result?.address.municipalitySubdivision,
                    dist: result.dist,
                    value: `${result.address.municipalitySubdivision} | ${(
                    result.dist / 1000
                    ).toFixed(2)}km `
                }))
                .sort((a, b) => a.dist - b.dist)}
                data={searchResults
                ?.map((result) => ({
                    key: result.id,
                    name: result.address.municipality,
                    dist: result.dist,
                    position: result.position,
                    value: `${result.address.municipalitySubdivision}, ${result.address.countrySecondarySubdivision}, ${result.address.countrySubdivision}`
                }))
                .sort((a, b) => a.dist - b.dist)}
                onSelect={(place) => console.log(place)}
                autoFocus={true}
                onChange={(query) => onSearchChange(query)}
                fuseConfigs={{
                minMatchCharLength: 3,
                threshold: 2,
                distance: 1500000,
                sort: false
                }}
                keys={["name"]}
            />
            </div>
            </LocationContainer>
            
        
        
    )
}