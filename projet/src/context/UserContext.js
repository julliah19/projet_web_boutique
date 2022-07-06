import React, { createContext } from "react";

const UserContext = createContext({
    isAuthenticated : false,
    setIsAuthenticated: (auth) => {},
    username: "",
    setName: (name) => {}
});

export default UserContext;