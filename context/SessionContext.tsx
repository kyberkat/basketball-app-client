'use client'

import {createContext, useContext, useState, useEffect} from 'react'
import {useRouter} from 'next/navigation'

interface SessionContextProps {
    session: boolean | null,
    logout: () => void
    login: (value:any) => void
}

// sessionContext Provider value object | null when not initialized
export const SessionContext = createContext<SessionContextProps | null>(null)

// custom hook wrapper
// useContext returns the current context state, hook available to all children of SessionContext.Provider
export const useSession = () => {
    const context = useContext(SessionContext)
    if (!context) {
        throw new Error("context is null, useSession used Outside of SessionContext.Provider")
    }
    return context
}

export const SessionProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const [session, setSession] = useState<boolean | null>(null)


    useEffect(() => {
        if (typeof(window) === 'undefined') {
            console.log("rendering on server side") //never runs because useEffect mounted on the client side
        } else {
            console.log("mounted and rendered on clientside")
            // document.cookie = "state=guest;path=/" practice
        }
    }, [])

    // async handle context props
    const logout = async () => {
        try {
            const response = await fetch('/api/auth/logout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            if (response.ok) {
                setSession(null)
            } else {
                console.error("error logging out")
            }
        } catch (e) {
            console.error(e)
        }
    }

    const login = async (values:any) => {
        try {
            console.log(values)
            setSession(true)
        } catch (e) {
            console.error(e)
        }
    }

    return (
        // will persist as long it is the top level mounted element
        <SessionContext.Provider value={{session, logout, login}}>
            {session ? (<div className="text-center bg-green-300">session</div>) : (<div className="text-center bg-blue-200">guest</div>)}
            {children}
        </SessionContext.Provider>
        // For multiple contexts, changes in the outer context unmounts the inner context provider
    )
}

