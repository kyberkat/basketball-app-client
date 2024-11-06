'use client'
import DropDown from '@/ui/dropdown'
import { useState } from 'react'
import Link from 'next/link'
import { useSession } from '@/context/SessionContext'
import { usePathname } from 'next/navigation'

const HeaderContainer = () => {
    const { session, logout } = useSession()
    const [isOpen, setIsOpen] = useState(false)

    const pathname = usePathname()

    const handleIsOpen = (liftState: boolean) => {
        setIsOpen(liftState)
        console.log(liftState)
    }

    const [resetKey, setResetKey] = useState(0)

    const handleReset = () => {
        setIsOpen(false)
        setResetKey(prevKey => prevKey + 1)
        if (session) {
            logout()
        }
    }

    return (
        <div className={`relative flex border-b w-full py-4 md:py-5 lg:py-6 ${isOpen ? 'bg-gray-200' : ''}`}>

            {/* drop down menu note. shown only on small screens */}
            <div className="flex flex-1 items-center z-20 sm:hidden">
                <div className="ml-5">
                    {/* prop drilling */}
                    <DropDown isOpen={isOpen} setIsOpen={setIsOpen} liftState={handleIsOpen} key={resetKey} />
                </div>
            </div>


            {/* nav flex tray */}
            <div className="hidden sm:flex items-center justify-end px-4 gap-4 z-20 sm:order-1 sm:flex-grow sm:w-auto border-t border-b">
                {/* swappable component? */}
                <div className={`${pathname === '/' ? 'bg-blue-200' : ''}`}><Link href="/">App</Link></div>
                <div className=""><Link href="/">Story</Link></div>
                {session ? (<div className=""><Link href="/settings">Settings</Link></div>) : '' }
                <div className=""><Link href="/readme">Readme</Link></div>
            </div>


            {/* logo */}
            <div className="flex flex-1 text-center items-center z-20 sm:order-0 sm:flex-none sm:w-1/3 sm:border-r sm:border-l sm:border-t sm:border-b sm:rounded-lg">
                {/* swappable component? */}
                <div className="flex w-full">
                    <Link href="/" className={`w-full ${isOpen ? 'text-white' : ''}`}>
                        Basketball Integrated App
                    </Link>
                </div>
            </div>


            {/* buttons */}
            <div className="flex flex-1 text-right justify-end items-center z-20 sm:order-2 sm:flex-none sm:border-t sm:border-b sm:border-r sm:rounded-lg">
                <div className="flex mr-4">
                    {session ? (
                        <div className="w-full">
                            <button onClick={handleReset}
                                className={
                                    `px-3 py-2 bg-blue-500 rounded-lg text-white
                            ${isOpen ? 'bg-neutral-800 border' : ''}`}>LogOut</button>
                        </div>

                    ) : (
                        <Link href='/login' className="w-full">
                            <button onClick={handleReset} className={`px-3 py-2 bg-blue-500 hover:opacity-[93%] rounded-lg text-white ${isOpen ? 'bg-neutral-800 border' : ''}`}>Sign In</button>
                        </Link>
                    )}
                </div>
            </div>

            {isOpen && (
                <div className="absolute inset-0 bg-neutral-800 z-10 pointer-events-none overflow-hidden no-scrollbar">
                </div>
            )}
        </div>
    )
}

export default HeaderContainer;