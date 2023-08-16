import { CarProps } from "../../interfaces"

interface Car {
    car: CarProps
}

export function Card (props: Car) {

    return(
        <div className="max-w-290 w-full bg-white shadow-lg rounded-md">
            <img 
                src={props.car.img_url} 
                alt={`Foto de ${props.car.name}`} 
                className="rounded-t-md h-160 w-full"
            />
            <div className="flex flex-col p-2">
                <h3 className="font-bold text-18">{props.car.name}</h3>
                <h4 className="text-zinc-400 text-12">{props.car.brand} | {props.car.color} | {props.car.year}</h4>
                <h3 className="font-semibold text-18">R${Number(props.car.price).toFixed(3)}</h3>
            </div>
        </div>
    )
}
