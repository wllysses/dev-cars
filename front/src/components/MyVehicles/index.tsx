import { CarProps, UserDataProps } from '../../interfaces'
import { Card } from '../Card'
import { useEffect, useState } from 'react'
import { api } from '../../services/api'

export function MyVehicles() {

    const [userData] = useState(JSON.parse(localStorage.getItem('@token') as string) as UserDataProps)

    const [cars, setCars] = useState<CarProps[]>([])

    useEffect(() => {
        api.post('/cars/user' , { user_id: userData.id }).then(resp => setCars(resp.data))
    }, [])

    return (
        <div className="w-full flex flex-col gap-4 px-8 py-16">
            <h2 className="text-2xl font-bold">Meus veículos</h2>

            <div className="mt-5 w-full flex flex-wrap gap-4 items-center">
                { !cars.length && <span>Nenhum veículo cadastrado</span> }
                {
                    cars &&
                    cars.map((car) => (
                        <Card key={car.id} car={car}/>
                    ))
                }
            </div>
        </div>
    )
}
