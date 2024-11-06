'use client'

import Card from '@/ui/card'
import { data, ModelInterface } from '@/seed/placeholder'
import { useEffect, useState } from 'react'

const Feed = () => {
    const [cards, setCards] = useState<React.ReactNode[]>([])

    // sm = medium and up
    // md = lg and up
    // lg = x-lg and up

    useEffect(() => {
        const model: ModelInterface = data
        // length changes based on scroll + 3
        refreshFeed(model, model.players.length)
    }, [])

    const refreshFeed = (model: ModelInterface, n: number) => {
        let temp = []

        for (let i = 0; i < n; i++) {
            const player = model.players[i]
            console.log(player)

            const dataProp = {
                id: player.primaryKey,
                BioLabel: 'Bio',
                BioContent: {
                    'Position': player.position,
                    'Age': player.age,
                    'Height': player.height,
                },
                StatsLabel: '2024 Stats',
                StatsContent: {
                    'FG%': player.pts,
                    '3P%': player.threepoints,
                    'Reb': player.rebounds,
                    'Blocks': player.blocks
                }
            }

            if (((i+ 1) % 2 === 0)) {
                temp.push(
                    <Card
                        key={i + 1}
                        header={player.name}
                        data={dataProp}
                        style={'col-span-full sm:col-span-5 lg:col-span-4'}
                    />)
            } else {
                temp.push(
                <Card
                    key={i + 1}
                    header={player.name}
                    data={dataProp}
                    style={'col-span-full sm:col-span-5 sm:col-start-1 lg:col-span-4'}
                />)
            }
        }
        console.log(temp)
        setCards(temp)
    }

    return (
        <div className="
            rounded-lg mt-4 text-center mb-12
            col-start-3 col-span-8 grid-cols-10
            sm:col-start-2 sm:col-span-10
            lg:col-start-1 lg:col-span-full lg:grid-cols-12
            grid gap-4">
            <div className="col-span-full mt-4 text-xl">NBA Finals Champions</div>
            {cards.map((card) => card)}
        </div>
    )
}

export default Feed