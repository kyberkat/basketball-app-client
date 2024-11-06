'use client'

import { useState, useEffect } from "react"
import Link from "next/link"

const Card = ({ header, data, style }: any) => {
    const [bioEntries, setBioEntries] = useState([]) as any
    const [statEntries, setStatEntries] = useState([]) as any

    useEffect(() => {
        const bioPair = Object.entries(data.BioContent)
        const statPair = Object.entries(data.StatsContent)
        setBioEntries(bioPair)
        setStatEntries(statPair)
    }, [data])

    return (
        <Link href={`/players/${data.id}`} className={`
            relative overflow-hidden group
            p-4 bg-green-700 text-slate-100 rounded-3xl
            flex flex-col gap-4
            transition-transform transform duration-500 hover:scale-105
            ${style}
            `}>

            <div>
                {header}
            </div>

            <div>
                <div>{data.BioLabel}</div>
                <div className="p-[2px] bg-white"></div>
                <div className="flex items-center border">
                {
                    bioEntries.map(([name, value]:[string, any]) => (
                        <div key={name} className="flex-1 text-center">
                            <div>{name}</div>
                            <div>{value}</div>
                        </div>
                    ))
                }
                </div>
            </div>

            <div>
                <div>{data.StatsLabel}</div>
                <div className="p-[2px] bg-white"></div>
                <div className="flex items-center border">
                {
                    statEntries.map(([name, value]:[string, any]) => (
                        <div key={name} className="flex-1 text-center">
                            <div>{name}</div>
                            <div>{value}</div>
                        </div>
                    ))
                }
                </div>
            </div>

            <div>
              {/* <div>breaking records</div>  */}
            </div>

            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white opacity-0
                transition-transform duration-500 ease-in-out
                group-hover:translate-x-full group-hover:opacity-100" />
        </Link>
    )
}

export default Card