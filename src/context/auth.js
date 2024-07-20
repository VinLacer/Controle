import React, {useState, createContext} from "react";

export const AuthContext = createContext({});

function AuthProvider({children}){
    const [userInfo, setUserInfo] = useState(null);

    return(
        <AuthContext.Provider value={{userInfo, setUserInfo}}>
        {children}
        </AuthContext.Provider>

    )
}

export default AuthProvider;