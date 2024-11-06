import axios from "axios"
import { cookies } from "next/headers"

export async function authenticate(email:string, password:string){

    try {
        const auth = process.env.AUTH
        if (!auth) { throw "no auth env"}


        const response = await axios.post(auth, {
            identifier: email,
            password: password
        })

        const {jwt}:{jwt: string | null} = response.data

        console.log("1. authenticated against api")
        return jwt
    } catch (e) {
        console.log("1. could not authenticate and get jwt token")
        return null
    }
}

export async function createSession(email:string, password:string){
    const jwt = await authenticate(email, password)


    if (jwt) {

        console.log('2. jwt token succesfully recieved, creating sesion...')
        const cookieStore = await cookies()
        const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)

        cookieStore.set('token', jwt, {
            httpOnly: true,
            secure: false,
            // secure: process.env.NODE_ENV === 'production' set to true for HTTPS
            expires: expiresAt,
            sameSite: 'lax',
            path: '/'
        } )

        return true
    } else {
        console.log("2. no jwt recieved, so no sessions created, verify credentials")
        return false
    }
}

export async function deleteSession() {
    try {
        const cookieStore = await cookies()
        cookieStore.delete('token')
        return true
    } catch (e) {
        console.error(e)
    }
}