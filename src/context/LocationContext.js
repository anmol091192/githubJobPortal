import React, { useState, useEffect, createContext } from 'react';

export const LocationContext = createContext();

export const LocationProvider = props => {
    // const [autoLocation, setAutoLocation] = useState({});


    // if (navigator.geolocation) {
    //     navigator.geolocation.watchPosition(function (position) {
    //         setAutoLocation({
    //             lat: position.coords.latitude,
    //             long: position.coords.longitude,
    //         });
    //     });
    // }
    

    return <LocationContext.Provider value="ohh">{props.chldren}</LocationContext.Provider>;

}