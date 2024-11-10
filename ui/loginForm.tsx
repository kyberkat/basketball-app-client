'use client'

import { useSession } from "@/context/SessionContext"
import useForm from "@/lib/useForm"
import { useRouter } from "next/navigation"

const LoginForm = () => {
    const { values, onChange, resetForm } = useForm()
    const { session, login } = useSession()
    const router = useRouter()

    const test = process.env.NEXT_PUBLIC_TEST_ACCOUNT

    const onClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()

        try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: values.email,
                    password: values.password,
                })
            })
            if (response.ok) {
                if (test === 'true') {
                    login(values.email)

                    console.log(test)
                    router.push('/')
                    resetForm()
                } else {
                    login(values.email)
                    router.push('/')
                    resetForm()
                }
            } else {
                if (test === 'true') {
                    console.log(test)
                    login(values.email)
                    router.push('/')
                    resetForm()
                } else {
                    console.log("session not created")
                    resetForm()
                }
            }
        } catch (e) {
            console.log("error fetching auth route")
        }
    }

    return
    (
        session ? (<div></div>)
            : (
                <div className="lg:w-[300px] lg:mx-auto lg:mt-[100px]">
                    <form className="flex flex-col border p-4 rounded-xl gap-4">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email">Email</label>
                            <input
                                id="email" name="email" type="text"
                                onChange={onChange} value={values.email}
                                className="border-2 rounded border-blue-200 px-2 py-1
                                transition-border duration-300 ease-in-out
                                focus:bg-blue-200
                                focus:border-blue-500
                                focus:outline-none
                                focus:ring-1 focus:ring-blue-700"
                                maxLength={100} required
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="password">Password</label>
                            <input
                                id="password" name="password" type="password"
                                onChange={onChange} value={values.password}
                                className="border-2 rounded border-blue-200 px-2 py-1
                                transition-border duration-300 ease-in-out
                                focus:bg-blue-200
                                focus:border-blue-500
                                focus:outline-none
                                focus:ring-1 focus:ring-blue-700"
                                maxLength={100} required
                            />
                        </div>

                        <div className="flex">
                            <button className="w-full px-2 py-1 bg-blue-500 hover:bg-blue-400 rounded" onClick={onClick}>
                                Sign In
                            </button>
                        </div>
                    </form>
                </div>)
    )
}

export default LoginForm