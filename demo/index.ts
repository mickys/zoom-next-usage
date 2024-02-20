import { Zoom } from "zoom-next";
import { ethers } from 'hardhat';
// const { ethers } = require("hardhat");

// import ERC721Artifacts from './artifacts/Limited721.json';
// import TraitRegistryArtifacts from './artifacts/ECRegistryV2.json';
// import ImplementerUint8Artifacts from './artifacts/ImplementerUint8.json';
// import ImplementerUint256Artifacts from './artifacts/ImplementerUint256.json';

async function main() {

    const accounts = await ethers.getSigners();
    console.log(accounts[0].address);


    
    
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });


    