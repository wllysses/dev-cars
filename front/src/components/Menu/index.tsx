import { useState } from "react"
import { Link } from 'react-router-dom'

export function Menu() {

    const [isOpen, setIsOpen] = useState<boolean>(false)

    function handleOpenMenu() {
        setIsOpen(!isOpen)
    }

    return (
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512" className="cursor-pointer" onClick={handleOpenMenu}>
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="48" d="M88 152h336M88 256h336M88 360h336" />
            </svg>

            {
                isOpen ? (
                    <div className="max-w-md w-full bg-white shadow-2xl fixed top-0 right-0 p-4 h-screen animate-fade-left">
                        <div className="flex items-center justify-between">
                            <h2 className="font-bold text-18">Menu</h2>
                            <button className="text-18" onClick={handleOpenMenu}>x</button>
                        </div>
                        <div className="flex flex-col gap-2 mt-5">
                            <button className="bg-red-600 rounded text-white h-8 hover:bg-red-700">
                                <Link to="/login">
                                    Login
                                </Link>
                            </button>
                            <button className="bg-red-600 rounded text-white h-8 hover:bg-red-700">
                                <Link to="/register">
                                    Registrar
                                </Link>
                            </button>
                        </div>
                    </div>
                ) : null
            }
        </div>
    )
}
