import React, { useEffect, useState } from "react";

const AuthContext = React.createContext({
    isLoggedIn: false,
    loginHandler: (email, password) => {},
    logoutHandler: () => {}
});


export const AuthContextProvider = (props) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('isLoggedIn') === 'LOGGED_IN') {
        setIsLoggedIn(true)
        }
    }, [])

    const loginHandler = (email, password) => {
        localStorage.setItem('isLoggedIn', 'LOGGED_IN');
        setIsLoggedIn(true);
    };

    const logoutHandler = () => {
        setIsLoggedIn(false);
        localStorage.removeItem('isLoggedIn')
    };


    return (
        <AuthContext.Provider
            value={{isLoggedIn: isLoggedIn, loginHandler: loginHandler, logoutHandler: logoutHandler}}
        >
            {props.children}
        </AuthContext.Provider>
    )
}
export default AuthContext;