'use client'

import { useState } from 'react'
import Link from 'next/link'

interface DropDownProps {
    isOpen: any,
    setIsOpen: any,
    liftState: (isOpen: boolean) => void
}

const DropDown: React.FC<DropDownProps> = ({isOpen, setIsOpen, liftState}) => {

    const toggleDropDown = (e:React.MouseEvent) => {
        e.stopPropagation
        // really important for lifting in one go
        // setIsOpen((prev:any) => {
        //     const newState = !prev
        //     console.log("child" + newState)
        //     liftState(newState) 
        //     return newState
        // })
        // //setIsOpen is async schedules, schedules but doesn't change variables yet
        // setIsOpen((prev) => !prev)
        // liftState(isOpen) // this is still false because state hasn't updated yet

        liftState(!isOpen)
    }

    return (
        <div className={`relative w-full inline-block sm:hidden text-left ${isOpen ? 'opacity-100' : ''}`}>
                <button
                    onClick={toggleDropDown}
                    className="flex flex-col justify-around items-center w-8 h-8"
                >
                    <div className={`w-full h-1 bg-black rounded transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2 bg-white' : ''}`}></div>
                    <div className={`w-full h-1 bg-black rounded transition-transform duration-300 ${isOpen ? 'hidden' : 'block'}`}></div>
                    <div className={`w-full h-1 bg-black rounded transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2 bg-white' : ''}`}></div>
                </button>

            <div
                className={
                    `absolute -left-5 w-screen h-screen
                    bg-blue-200 p-7
                    rounded-t-3xl rounded-b-xl
                    transition-opacity ease-in-out transform overflow-hidden no-scrollbar
                    ${isOpen ? 'translate-y-5 duration-1000' : 'hidden translate-y-5 duration-300'
                }`}
            >
                <div className="w-full">
                    <Link href="/">
                        <button className="flex w-full py-2 hover:text-blue-800" onClick={toggleDropDown}>App</button>
                    </Link>
                </div>
                <div className="w-full">
                    <Link href="/readme">
                        <button className="flex w-full py-2 hover:text-blue-800" onClick={toggleDropDown}>ReadMe</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default DropDown