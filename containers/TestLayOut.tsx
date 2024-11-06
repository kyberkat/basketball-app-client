'use client'

import {useEffect, useState} from 'react'

const TestLayOut = () => {
    const [state, setState] = useState<React.ReactNode[]>([])

    useEffect(() => {
        renderTestLayOut(12)
    }, [])

    const renderTestLayOut = (n:number) => {
        const temp:React.ReactNode[] = []
        for (let i = 1; i <= n; i++) {
            if (i > n /2){
                temp.push(<div key={i} className="bg-blue-200">{i}</div>)
            } else {
                temp.push(<div key={i} className="bg-red-200">{i}</div>)
            }
        }
        setState(temp)
    }

    return (
        <div className="absolute inset-0 grid grid-cols-12 gap-x-4 max-h-screen h-screen overflow-auto -z-10">
            {state.map((col) => {
                return col
            })}
        </div>
    )
}

export default TestLayOut