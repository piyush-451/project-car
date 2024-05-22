import React, { useState } from "react";
import TokenContext from "./tokenContext";

const TokenContextProvider = ({children}) => {

    const [token,setToken] = useState(null);

    return (
        <TokenContext.Provider value={{token,setToken}}>
            {children}
        </TokenContext.Provider>
    )
}

export default TokenContextProvider;