import React, { createContext, useEffect } from "react";

export const UserContext = createContext()

const UserProvider = ({ children }) =>
{
    const [user, setUser] = React.useState(null)
    const [token, setToken] = React.useState(null)
    const [loading, setLoading] = React.useState(false)

    useEffect()
}