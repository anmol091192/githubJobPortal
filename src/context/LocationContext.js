import React, { useState, createContext } from 'react';

export const LocationContext = createContext();
export const LocationUpdate = createContext();
export const SelectedFilter = createContext();

export function LocationProvider({ children }) {

    const [autoLocation, setAutoLocation] = useState();
    const [ select, setSelect ] = useState("Full time");
    const [theme, setTheme] = useState({main:"dark"});

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.watchPosition(function (position) {
                setAutoLocation({
                    lat: position.coords.latitude,
                    long: position.coords.longitude,
                });
            });
        }
    }

    console.log(autoLocation)

    const data = {
        autoLocation,
        select,
        setSelect,
        getLocation,
        theme,
        setTheme
    };

    return (
        <LocationContext.Provider value={data}>
           
                    {children}
         
        </LocationContext.Provider>
    );


}

