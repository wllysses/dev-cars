import { useEffect, useState } from "react";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { api } from "../../services/api";
import { Link } from "react-router-dom";
import { CarProps } from "../../interfaces";

export function Home() {

    const [cars, setCars] = useState<CarProps[]>([])

    useEffect(() => {
        api.get('/cars').then(resp => setCars(resp.data))
    }, [])

    return (
        <>
            <Header />

            <main className="container mx-auto mt-10 animate-myFade">
                <div className="w-full">
                    <h2 className="text-3xl font-semibold">Veículos anunciados</h2>

                    <div className="mt-5 flex flex-wrap items-center gap-8 px-2">
                        {
                            cars &&
                            cars.map((car, index) => (
                                <Link key={index} to={`/details/${car.id}`} className="max-w-290 w-full">
                                    <Card
                                        car={car}
                                    />
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </main>
        </>
    )
}
