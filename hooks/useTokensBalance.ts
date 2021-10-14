import { ERC20Interface, useContractCalls } from "@usedapp/core"
import { BigNumber } from "ethers"


interface token{
    name: string
    address:string
    symbol:string
    decimals:Number
    network:Number
    img:string
    balance:BigNumber | undefined
}

const useTokensBalance = (tokenList: token[], account?:string|null) => {
    //@ts-ignore
    let balances:BigNumber[] = useContractCalls(
        tokenList && account
        ? tokenList.map((token:token) => ({
            abi: ERC20Interface,
            address: token.address,
            method: 'balanceOf',
            args: [account]
        }))
        :[]
    )
    let tokens=tokenList
    tokens.map((token, i) => {
        token.balance = balances[i]
    })
    return(
        tokens
    )
}

export default useTokensBalance