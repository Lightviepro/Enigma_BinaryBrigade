import { createThirdwebClient, getContract } from "thirdweb";
import { sepolia } from "thirdweb/chains";

const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID;

export const client = createThirdwebClient({
    clientId: CLIENT_ID as string,
});

export const chain= sepolia;

export const CONTRACT_ADDRESS = ""; // add your contract address here

export const abi = [] as const; // add your contract abi here(u will find it in sources in deployed contract)
  

export const CONTRACT = getContract({
    address: CONTRACT_ADDRESS,
    abi: abi,
    client: client,
    chain: chain,
}); //Lets us create an instance of the contract which we can use in our app




