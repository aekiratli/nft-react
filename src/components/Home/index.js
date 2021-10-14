import React from 'react';
import { Contract } from "@ethersproject/contracts";
import { getDefaultProvider } from "@ethersproject/providers";
import addresses from "../../contracts/contracts";
import abis from "../../contracts/abis";
import { Body, Button, Header, Image, Link } from "..";
import logo from "../../ethereumLogo.png";
async function ReadOnChainData() {
    const defaultProvider = getDefaultProvider('rinkeby');
    const ceaErc20 = new Contract(addresses.ceaErc20, abis.erc20, defaultProvider);
    const tokenBalance = await ceaErc20.balanceOf("0x3f8CB69d9c0ED01923F11c829BaE4D9a4CB6c82C");
    console.log({ tokenBalance: tokenBalance.toString() });
  }

const Teams = () => {
  return (
    <Body>
      Test
    </Body>
  );
};
  
export default Teams;