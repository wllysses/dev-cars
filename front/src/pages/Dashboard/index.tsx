import { useEffect, useState } from "react"
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom"
import { Apresentation } from "../../components/Apresentation"
import { PenSquare, User } from "lucide-react"


export function Dashboard() {

    const location = useLocation()
    const navigate = useNavigate()
    
    function userLogout() {
        localStorage.removeItem('@USER_DATA')
    }

    const [userData] = useState(JSON.parse(localStorage.getItem('@USER_DATA')!))
    
    useEffect(() => {
        if(localStorage.getItem('@USER_DATA') === null) {
            navigate('/login')
            return
        }
    }, [])


    return (
        <div className="bg-zinc-300">
            <aside className="fixed top-0 left-0 max-w-290 h-screen w-full bg-white px-4 py-16 flex flex-col justify-between">
                <div className="flex flex-col">
                    <h2 className="text-36"><span className="font-bold">Dev</span>Cars</h2>
                    <h4>Bem-vindo(a), {userData && userData.name}</h4>

                    <nav className="mt-10 flex flex-col gap-2">
                        <Link to="/dashboard/myVehicles" className="flex items-center gap-2">
                            <User />
                            Meus veículos
                        </Link>
                        <Link to="/dashboard/registerVehicle" className="flex items-center gap-2">
                            <PenSquare />
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
