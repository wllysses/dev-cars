import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Login } from '../pages/Login'
import { Register } from '../pages/Register'
import { Dashboard } from '../pages/Dashboard'
import { MyVehicles } from '../components/MyVehicles'
import { RegisterVehicle } from '../components/RegisterVehicle'
import { Details } from '../pages/Details'

export function AppRoutes() {

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/login" element={ <Login /> } />
                <Route path="/register" element={ <Register /> } />
                <Route path="/dashboard" element={ <Dashboard /> }>
                    <Route 
                        path="/dashboard/myVehicles"
                        element={ <MyVehicles /> }
                    />
                    <Route 
                        path="/dashboard/registerVehicle"
                        element={ <RegisterVehicle /> }
                    />
                </Route>
                <Route path="/details/:id" element={ <Details /> } />
            </Routes>
        </BrowserRouter>
    )
}
