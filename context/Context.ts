import axios from "axios";
import { createContext } from "react";

interface token{
    symbol:string
    address:string
    decimals:Number
    img:string
    network:Number
}

interface context{
    fetched: boolean
    tokens: token[],
    error: string | null
}

export const tokenContext = createContext<context>({fetched: false, tokens: [], error: null})