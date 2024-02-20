# zoom-next-usage
Usage examples for zoom-next

```typescript
import { Zoom } from "zoom-next";
import ZoomArtifacts from './artifacts/Zoom4.json';

// init zoom library
const ZoomLibraryInstance = new Zoom();

// store call identifiers
const setupItem_identifiers: any = [];

// STEP 1 - setup the call
// add calls you want to make

// CALL 1
const balanceOfCall = ZoomLibraryInstance.addCall(
    ERC721,
    ["balanceOf(address)", [address]],
    "balanceOf(address) returns (uint256)" // THIS IS IMPORTANT, for structs / complex types use tuples
)
// store identifier
setupItem_identifiers.push(balanceOfCall);
// increment number of calls
setupCallNum++;

// CALL 2
const getTraitsCall = ZoomLibraryInstance.addCall(
    TraitRegistry,
    ["getTraits()", []],
    // "getTraits() returns (traitStruct[] memory)" 
    // !!! return types are important, as the decoder needs to know how to decode.. specify a tuple
    "getTraits() returns ((uint16,uint8,uint16,uint16,address,bool,string)[] memory)" 
)
// store identifier
setupItem_identifiers.push(getTraitsCall);
// increment number of calls
setupCallNum++;

// STEP 2 - get the message we send to the contract
let ZoomQueryBinary = ZoomLibraryInstance.getZoomCall();
let combinedResult = await ZoomContractInstance.combine( ZoomQueryBinary );
ZoomLibraryInstance.resultsToCache( combinedResult, ZoomQueryBinary );

// STEP 3 - decode results
const ownedNumberOfTokens = ZoomLibraryInstance.decodeCall(setupItem_identifiers[0]).toString();
const traits = ZoomLibraryInstance.decodeCall(setupItem_identifiers[1])[0];
```

see demo/ECTraits.ts for full example