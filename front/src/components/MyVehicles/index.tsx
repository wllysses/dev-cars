import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import { CarProps, UserDataProps } from '../../interfaces'
import { Card } from '../Card'

export function MyVehicles() {

    const [cars, setCars] = useState<CarProps[]>([])

    const [userData] = useState(JSON.parse(localStorage.getItem('@USER_DATA') as string) as UserDataProps)

    useEffect(() => {
        api.get(`/cars/users/${userData.userId}`).then(resp => setCars(resp.data))
    }, [userData.userId])

    return (
        <div className="w-full flex flex-col gap-4 px-8 py-16">
            <h2 className="text-2xl font-bold">Meus veículos</h2>

            <div className="mt-5 w-full flex flex-wrap gap-4 items-center">
                { !cars.length && <span>Nenhum veículo cadastrado</span> }
                {
                    cars &&
                    cars.map((car) => (
                        <Card key={car.id} car={car} type="internal" />
                    ))
                }
            </div>
        </div>
    )
}
