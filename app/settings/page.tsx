'use client'

import { useEffect, useState } from 'react'
import useSWR from 'swr'

const Page = () => {
    const [players, setPlayers] = useState([])

    const fetcher = async (url:string) => {
        const reply = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include'
        })

        return reply.json()
    }

    // 5 second intervals
    const { data, error } = useSWR('http://localhost:1337/api/players', fetcher) 

    // will rerender every time swr returns data
    useEffect(() => {
        if (data) {
            console.log(players)
            setPlayers(data.data)
        }
    }, [data])

    console.log(data)
    if (!data && !error) {
        return <div>Loading...</div>
    }

    if (error) {
        console.log(error)
        return <div>Error fetching players,not authenticated</div>
    }

    return (
        <div>
            <h1>Players List</h1>
            <ul>
                {players?.map((player: any) => (
                    <li key={player.primaryKey}>{player.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default Page
