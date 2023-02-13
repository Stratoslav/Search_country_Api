import { Regions } from "./regions"
type Currencies = {
    name: string,
    code: string,
    symbol: string
}

// type Language = {

// }
export type Country = {
    name: string,
    nativeName: string,
    flag: string,
    flags: {
        svg: string,
        png: string,
    },
    region: Regions
    subregion: string,
    capital: string,
    population: number,
    topLevelDomain: string[],
    borders: string[],
    currencies: Currencies[]
    //  languages?: any[]
}
type Info = {
    title: string,
    description: string
}
export type CountryInfo = {
    img: string,
    name: string,
    info: Info[]
}