import React, { useEffect, useState } from "react";
import { Contract } from "@ethersproject/contracts";
import addresses from "../../contracts/contracts";
import abis from "../../contracts/abis";
import { getDefaultProvider } from "@ethersproject/providers";

function CurrentSupply() {
    const [supply, setSupply] = useState('');
  
    useEffect(() => {
          getSupply();
    }, []);
  
    const getSupply = async () => {
        const provider = getDefaultProvider('rinkeby')
        const apeContract = new Contract(addresses.apes, abis.apes, provider);
        const userBalance = (await apeContract._tokenIdTracker()).toString();
        setSupply(userBalance);
        console.log(userBalance)
    };
  
    return (
      <p>{supply} / 500</p>
    );
  }

  export default CurrentSupply