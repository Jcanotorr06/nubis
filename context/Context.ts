import { createContext, Dispatch, SetStateAction } from "react";
import { Tokens } from './../tokens/Tokens';
import { BigNumber } from 'ethers';

interface token{
    name: string
    address:string
    symbol:string
    decimals:number
    network:number
    img:string
    balance: BigNumber | undefined
}


interface context{
    fetched: boolean
    tokens: token[],
    error: string | null
}

interface activeContext{
    activeTokens: token[]
    setActiveTokens: Dispatch<SetStateAction<token[]>>
}

interface settings{
    slippage: number
    deadline: number
}

interface settingsContext{
    settings:settings
    setSettings: Dispatch<SetStateAction<settings>>
}


export const tokenContext = createContext<token[]>(Tokens)

export const activeTokenContext = createContext<activeContext>({activeTokens: [], setActiveTokens: () => {}})

export const settingsContext = createContext<settingsContext>({settings: {slippage: 1000, deadline: 60}, setSettings: () => {}})