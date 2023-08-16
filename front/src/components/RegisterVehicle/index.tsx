import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { api } from '../../services/api'
import { UserDataProps } from '../../interfaces'

export function RegisterVehicle() {

    const [userData] = useState(JSON.parse(localStorage.getItem('@token') as string) as UserDataProps)

    const registerCarSchema = z.object({
        name: z.string().nonempty('Preencha o campo.'),
        brand: z.string().nonempty('Preencha o campo.'),
        year: z.string().nonempty('Preencha o campo.'),
        color: z.string().nonempty('Preencha o campo.'),
        img_url: z.string().nonempty('Preencha o campo.'),
        price: z.string().nonempty('Preencha o campo.')
    })

    type RegisterCarSchema = z.infer<typeof registerCarSchema>

    const { register, handleSubmit, formState: { errors } } = useForm<RegisterCarSchema>({
        resolver: zodResolver(registerCarSchema)
    })

    async function handleCarRegister(data: RegisterCarSchema) {
        const postCar = await api.post('/cars', { 
            user_id: userData.id,
            name: data.name,
            brand: data.brand,
            price: data.price,
            img_url: data.img_url,
            color: data.color,
            year: data.year
        })

        if(!postCar.data.success) {
            return toast.error(postCar.data.message)
        }

        toast.success(postCar.data.message)
    }

    return (
        <div className="w-full h-full flex flex-col gap-4 px-8 py-16">
            <h2 className="text-2xl font-bold">Cadastrar veículo</h2>

            <form className="flex flex-col gap-4" onSubmit={handleSubmit(handleCarRegister)}>
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col">
                        <label htmlFor="inputName">Nome</label>
                        <input 
                            type="text" 
                            id="inputName" 
                            className="border rounded p-2" 
                            placeholder="Nome do veículo"
                            { ...register('name') }
                        />
                        { errors.name && <span className="text-red-600 italic text-12 font-bold">{errors.name.message}</span> }
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="inputBrand">Marca</label>
                        <input 
                            type="text" 
                            id="inputBrand" 
                            className="border rounded p-2" 
                            placeholder="Marca do veículo"
                            { ...register('brand') }
                        />
                        { errors.brand && <span className="text-red-600 italic text-12 font-bold">{errors.brand.message}</span> }
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col">
                        <label htmlFor="inputYear">Ano</label>
                        <input 
                            type="text" 
                            id="inputYear" 
                            className="border rounded p-2" 
                            placeholder="Ano do veículo"
                            { ...register('year') }
                        />
                        { errors.year && <span className="text-red-600 italic text-12 font-bold">{errors.year.message}</span> }
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="inputColor">Cor</label>
                        <input 
                            type="text" 
                            id="inputColor" 
                            className="border rounded p-2" 
                            placeholder="Cor do veículo"
                            { ...register('color') }
                        />
                        { errors.color && <span className="text-red-600 italic text-12 font-bold">{errors.color.message}</span> }
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col">
                        <label htmlFor="inputImgUrl">Link da imagem</label>
                        <input
                            type="text" 
                            className="w-full border p-2 rounded"  
                            placeholder="Link da imagem" 
                            { ...register('img_url') }
                        />
                        { errors.img_url && <span className="text-red-600 italic text-12 font-bold">{errors.img_url.message}</span> }
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="inputPrice">Preço</label>
                        <input 
                            type="text" 
                            id="inputPrice" 
                            className="border rounded p-2" 
                            placeholder="Cor do veículo"
                            { ...register('price') }
                        />
                        { errors.color && <span className="text-red-600 italic text-12 font-bold">{errors.color.message}</span> }
                    </div>
                </div>
                <button type="submit" className="bg-red-600 p-2 rounded w-full text-white">Cadastrar meu veículo</button>
            </form>
        </div>
    )
}
