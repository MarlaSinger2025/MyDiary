import { createContext, useState, useContext } from "react";

const EntryContext = createContext();

export default function EntryProvider({children}) {

    const []
}

// eslint-disable-next-line react-refresh/only-export-components
export function useEntry() {
    return useContext(EntryContext);
}