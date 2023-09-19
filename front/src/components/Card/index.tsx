import { CarProps } from "../../interfaces"
import { api } from "../../services/api"

interface Car {
    car: CarProps
    type?: string
}

export function Card (props: Car) {

    async function deleteCar(id: string) {
        const response = await api.delete(`cars/${id}`)
        return response.data;
    }

    return(
        <div className="relative max-w-290 w-full bg-white shadow-lg rounded-md">
            { props.type === 'internal' && <span className="absolute top-2 right-4 bg-zinc-50 h-6 w-6 rounded-full flex items-center justify-center cursor-pointer font-bold" title="Remover veículo" onClick={() => deleteCar(props.car.id)}>x</span> }
            <img
                src={props.car.img_url} 
                alt={`Foto de ${props.car.name}`} 
                className="rounded-t-md h-160 w-full"
                loading="lazy"
            />
            <div className="flex flex-col p-2">
                <h3 className="font-bold text-18">{props.car.name}</h3>
                <h4 className="text-zinc-400 text-12">{props.car.brand} | {props.car.color} | {props.car.year}</h4>
                <h3 className="font-semibold text-18">R${Number(props.car.price).toFixed(3)}</h3>
            </div>
        </div>
    )
}
