import React, {ReactNode, useState} from 'react';

export interface SearchProps {
    searchLat: any,
    searchLon: any,
    hasSearched: any,      
}

export interface FunctionsProps {
    searchLat: any,
    searchLon: any, 
    hasSearched: any,
    searchInputs: SearchProps[];
}

const defaultValues: FunctionsProps = {
    searchLat: 42.33,
    searchLon: -83.04, 
    hasSearched: false,
    searchInputs: []
}

export const SearchContext = React.createContext<FunctionsProps>(defaultValues);

export const SearchProvider = ({children}: {children: ReactNode}) => {
    const [searchLat] = useState<SearchProps>();
    const[searchLon] = useState<SearchProps>();
    const[hasSearched] = useState<SearchProps>();
    const[searchInputs] = useState<SearchProps[]>([{searchLat: 42.33, searchLon:-83.04, hasSearched: false}])

    return (
        <SearchContext.Provider 
        value={{
            searchInputs,
            searchLat,
            searchLon,
            hasSearched,
            
        }}>
       {children}
        </SearchContext.Provider>
    )


};