import illustration from '../../assets/undraw_electric_car_b-7-hl.svg'

export function Apresentation() {

    return (
        <div className="h-screen flex items-center justify-center flex-col gap-4">
            <img src={illustration} alt="Illustration Car" className="w-96 rounded-full" loading="lazy" />
            <h2 className="font-bold text-3xl">Bem-vindo ao DevCars.</h2>
        </div>
    )
}
