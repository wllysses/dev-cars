import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import { CarProps } from "../../interfaces";

export function Details() {

    const { id } = useParams()

    const [carDetail, setCarDetails] = useState({} as CarProps)

    useEffect(() => {
        api.get(`/cars/${id}`).then((resp) => setCarDetails(resp.data))
    }, [])

    return (
        <>
            <Header />

            <main className="container mx-auto mt-10 animate-myFade">
                <h2 className="text-36 font-semibold">Detalhes do veículo</h2>
                <div className="mt-10 w-full flex gap-4">
                    <img 
                        src={carDetail.img_url} 
                        alt={`Foto de ${carDetail.img_url}`} 
                        className="rounded max-w-xl"
                    />
                    <div className="w-1/2 flex flex-col gap-4">
                        <h2 className="font-bold text-3xl">{carDetail.name}</h2>
                        <h1 className="font-bold text-5xl">R${Number(carDetail.price).toFixed(3)}</h1>
                        <ul className="text-xl">
                            <li>Marca: {carDetail.brand}</li>
                            <li>Cor: {carDetail.color}</li>
                            <li>Ano: {carDetail.year}</li>
                        </ul>
                        <button disabled className="w-full p-2 bg-red-600 rounded text-white hover:bg-red-700">Falar com o vendedor</button>
                    </div>
                </div>
            </main>
        </>
    )
}
