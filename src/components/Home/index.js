import React, {useState} from 'react';
import BigNumber from "bignumber.js";

import { Contract } from "@ethersproject/contracts";
import addresses from "../../contracts/contracts";
import abis from "../../contracts/abis";
import { Body, Button, Image } from "..";
import CurrentSupply from "./currentSupply";


function Teams ({provider}) {
  const [mintAmount, setAmount] = useState(1);

    function counter(increment)
    {
      var _mintAmount
  
      if (increment)
      {
        _mintAmount = mintAmount + 1
        setAmount(_mintAmount)
      }
      else{
        _mintAmount = mintAmount - 1
        setAmount(_mintAmount)
      }
    }
  
    async function mintNft() {
      const signer = provider.getSigner();
      const apeContract = new Contract(addresses.apes, abis.apes, signer);
      const resp = await apeContract.mint(mintAmount,{gasLimit: 300000*mintAmount,value: new BigNumber(500000000000000000).times(mintAmount).toString()})
      await resp.wait();
      window.location.reload();
    }

  return (
    <Body>
      <Image src="https://test-nft-api43.herokuapp.com/image/0.png"/>
      <CurrentSupply/>

      Whales to mint!

       <Button onClick={()=> counter(true)}>+</Button>
        <p>{mintAmount}</p>
        <Button onClick={()=> counter(false)}>-</Button>
        <p> Totally random generated </p>
        <Button onClick={() => mintNft()}> Mint in ! </Button>  
    </Body>
  );
};
  
export default Teams;