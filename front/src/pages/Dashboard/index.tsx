import { useEffect, useState } from "react"
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom"
import { Apresentation } from "../../components/Apresentation"


export function Dashboard() {

    const location = useLocation()
    const navigate = useNavigate()
    
    function userLogout() {
        localStorage.removeItem('@token')
    }

    const [userData] = useState(JSON.parse(localStorage.getItem('@token')!))
    
    useEffect(() => {
        if(localStorage.getItem('@token') === null || localStorage.key(0) !== '@token') {
            navigate('/login')
            return
        }
    }, [])


    return (
        <div className="bg-zinc-300">
            <aside className="fixed top-0 left-0 max-w-290 h-screen w-full bg-white px-4 py-16 flex flex-col justify-between">
                <div className="flex flex-col">
                    <h2 className="text-36"><span className="font-bold">Dev</span>Cars</h2>
                    <h4>Bem-vindo(a), {userData && userData.firstName}</h4>

                    <nav className="mt-10 flex flex-col gap-2">
                        <Link to="/dashboard/myVehicles" className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4Z" /></svg>
                            Meus veículos
                        </Link>
                        <Link to="/dashboard/registerVehicle" className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32"><path fill="currentColor" d="M25 4.03c-.765 0-1.517.3-2.094.876L13 14.78l-.22.22l-.06.313l-.69 3.5l-.31 1.468l1.467-.31l3.5-.69l.313-.06l.22-.22l9.874-9.906A2.968 2.968 0 0 0 25 4.032zm0 1.94c.235 0 .464.12.688.343c.446.446.446.928 0 1.375L16 17.374l-1.72.344l.345-1.72l9.688-9.688c.223-.223.452-.343.687-.343zM4 8v20h20V14.812l-2 2V26H6V10h9.188l2-2H4z" /></svg>
                            Cadastrar veículo
                        </Link>
                    </nav>
                </div>
                <Link to="/" className="font-bold text-18" onClick={userLogout}>Sair</Link>
            </aside>
            <main className="ml-72 min-h-screen">
                { location.pathname === '/dashboard' ? <Apresentation /> : <Outlet /> }
            </main>
        </div>
    )
}
