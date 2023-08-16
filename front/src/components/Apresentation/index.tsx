import illustration from '../../assets/undraw_electric_car_b7hl.png'

export function Apresentation() {

    return (
        <div className="h-screen flex items-center justify-center flex-col gap-4">
            <img src={illustration} alt="Illustration Car" className="w-96 rounded-full" />
            <h2 className="font-bold text-3xl">Bem-vindo ao dashboard!</h2>
        </div>
    )
}
