import { createContext, useState, useEffect, useContext } from "react";

const EntryContext = createContext();

export const EntryProvider = ({children}) => {

    const [entries, setEntries] = useState(() => {  // Load entries from localStorage only once (instead of using useEffect)

    
        const storedEntries = localStorage.getItem('entries');

        return storedEntries
        ? JSON.parse(storedEntries)
        : [];
        
});

    useEffect(() => {  //Save entries whenever they change
         localStorage.setItem('entries', JSON.stringify(entries));
        }, [entries]);

    const addEntry = (entry) => {
        const newEntry = {
            id: crypto.randomUUID(),
            ...entry,
        };

        setEntries((prevEntries) => [
            newEntry,
            ...prevEntries,
        ]);
    };

    return (
        <EntryContext.Provider 
            value= {{
                entries,
                addEntry,
            }}
            >
                {children}
            </EntryContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export function useEntry() {

    return useContext(EntryContext);
};