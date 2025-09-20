'use client';

import { ConnectButton } from "thirdweb/react";
import { chain, client } from "../utils/constants";

const Login : React.FC = () => {
    return (
        <div
            className="fixed top-4 right-4 z-50 flex items-center justify-end w-auto sm:top-6 sm:right-6"
        >
            <ConnectButton client={client} chain={chain} connectModal={{size: "wide"}} />
        </div>
    )
}

export default Login;
