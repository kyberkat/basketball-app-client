'use client'

import { data, ModelInterface,Game } from "@/seed/placeholder"
import {useState, useEffect} from 'react'

const GameFeed = () => {
    const [cards, setCards] = useState([])
    const [score, setScore] = useState('')

    useEffect(() => {
        refreshGameFeed(data)
    }, [])

    // // for refreshing consuming api
    // useEffect(() => {

    // }, [swr])

    const refreshGameFeed = (data:ModelInterface) => {
        const games = data.games
        const temp = [] as any

        const sortedGames = games.sort((a, b) => b.primaryKey - a.primaryKey)

        for (const game of sortedGames) {

            const typedGame:Game = game
            const title = `${typedGame.vs}`

            temp.push(
                <div key={game.primaryKey}>
                    <div className="py-[1px] bg-slate-500 rounded-full"></div>
                    <div className="flex text-xs">
                        <div className="flex-1 w-1/12">{typedGame.primaryKey}</div>
                        <div className="flex-1 min-w-[100px]">{title}</div>
                        <div className="flex-1 min-w-[100px]">{typedGame.date}</div>
                        <div className="flex-1">{typedGame.result}</div>
                        <div className="flex-1">{typedGame.score}</div>
                        <div className="flex-1">{typedGame.record}</div>
                    </div>
                </div>
            )
        }

        const score = games[0].record
        setCards(temp)
        setScore(score)
    }

    return (
        // 2 + 10 = 12 formula
        <div className="
            rounded-lg bg-white mt-4
            col-start-2 col-span-10 grid-cols-12
            grid gap-4 rounded-xl mb-12">
            <div className="col-span-full mt-4 text-center text-xl">Game Feed</div>
            <div className="col-span-full mt-4 text-center text-xl">{`2024 Season Score: ${score}`}</div>

            <div className="col-span-full flex flex-col gap-4 px-4">
                <div className="flex text-xs">
                    <div className="flex-1 w-1/12">ID</div>
                    <div className="flex-1 min-w-[100px]">At</div>
                    <div className="flex-1 min-w-[100px]">Date</div>
                    <div className="flex-1">Result</div>
                    <div className="flex-1">Score</div>
                    <div className="flex-1">record</div>
                </div>
                {cards.map((card) => card)}
            </div>

        </div>
    )
}

export default GameFeed