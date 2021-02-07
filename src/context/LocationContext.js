import React, { useState, createContext } from 'react';

export const LocationContext = createContext();
export const LocationUpdate = createContext();
export const SelectedFilter = createContext();

export function LocationProvider({ children }) {

    const [ select, setSelect ] = useState("Full time");
    const [theme, setTheme] = useState({main:"dark"});

    const data = {
        select,
        setSelect,
        theme,
        setTheme
    };

    return (
        <LocationContext.Provider value={data}>
           
                    {children}
         
        </LocationContext.Provider>
    );


}

