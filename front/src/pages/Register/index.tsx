import { Link } from "react-router-dom"
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Header } from "../../components/Header"
import { ErrorMessage } from "../../components/ErrorMessage"
import { api } from "../../services/api"
import { toast } from "react-toastify"

export function Register() {

    const registerUserSchema = z.object({
        firstName: z.string().nonempty('Campo obrigatório.'),
        lastName: z.string().nonempty('Campo obrigatório.'),
        email: z.string().nonempty('Campo obrigatório.').email('Formato de e-mail inválido.'),
        phone: z.string().nonempty('Campo obrigatório'),
        password: z.string().nonempty('Campo obrigatório.').min(5, 'Mínimo 5 caracteres.'),
        confirmPassword: z.string().nonempty('Campo obrigatório.').min(5, 'Mínimo 5 caracteres.'),
        terms: z.literal(true, {
            errorMap: () => ({ message: 'Você precisa concordar com os termos.' })
        })
    }).refine((data) => data.password === data.confirmPassword, {
        path: ['confirmPassword'],
        message: 'As senhas precisam ser iguais.'
    })

    type RegisterUserSchema = z.infer<typeof registerUserSchema>

    const { register, handleSubmit, formState: { errors } } = useForm<RegisterUserSchema>({
        resolver: zodResolver(registerUserSchema)
    })

    const handleRegisterUser = async (data: RegisterUserSchema) => {
        const fetchData = await api.post('/users', 
            {   
                first_name: data.firstName, 
                last_name: data.lastName, 
                email: data.email,
                phone: data.phone,
                password: data.password, 
                confirm_password: data.confirmPassword 
            }
        )

        if(!fetchData.data.success) {
            toast.error(fetchData.data.message)
        }

        toast.success(fetchData.data.message)
    }
    
    return (
        <>
            <Header />

            <main className="mt-32 pg-4 w-full flex flex-col items-center animate-myFade">
                <div className="max-w-xl w-full p-4">
                    <div className="flex flex-col">
                        <h2 className="font-bold text-3xl">Crie já a sua conta</h2>
                        <h4>Preencha todas as informações</h4>
                    </div>

                    <form className="w-full mt-10 flex flex-col gap-4" onSubmit={handleSubmit(handleRegisterUser)}>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex flex-col">
                                <label htmlFor="inputFirstName">Nome</label>
                                <input 
                                    type="text" 
                                    id="inputFirstName" 
                                    className="border rounded p-2" 
                                    placeholder="Nome" 
                                    { ...register('firstName') }
                                />
                                { errors.firstName && <ErrorMessage message={errors.firstName.message} /> }
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="inputLastName">Sobrenome</label>
                                <input 
                                    type="text" 
                                    id="inputLastName" 
                                    className="border rounded p-2" 
                                    placeholder="Sobrenome"
                                    { ...register('lastName') }
                                />
                                { errors.lastName && <ErrorMessage message={errors.lastName.message} /> }
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex flex-col">
                                <label htmlFor="inputEmail">E-mail</label>
                                <input 
                                    type="email" 
                                    id="inputEmail" 
                                    className="w-full border rounded p-2" 
                                    placeholder="E-mail" 
                                    { ...register('email') }
                                />
                                { errors.email && <ErrorMessage message={errors.email.message} /> }
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="inputEmail">Telefone</label>
                                <input 
                                    type="tel" 
                                    id="inputPhone" 
                                    className="w-full border rounded p-2" 
                                    placeholder="Telefone" 
                                    { ...register('phone') }
                                />
                                { errors.phone && <ErrorMessage message={errors.phone.message} /> }
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex flex-col">
                                <label htmlFor="inputPassword">Senha</label>
                                <input 
                                    type="password" 
                                    id="inputPassword"
                                    className="border rounded p-2" 
                                    placeholder="Senha" 
                                    { ...register('password') }
                                />
                                { errors.password && <ErrorMessage message={errors.password.message} /> }
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="inputConfirmPassword">Confirmar senha</label>
                                <input 
                                    type="password" 
                                    id="inputConfirmPassword" 
                                    className="border rounded p-2" 
                                    placeholder="Confirmar senha" 
                                    { ...register('confirmPassword') }
                                />
                                { errors.confirmPassword && <ErrorMessage message={errors.confirmPassword.message} /> }
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <input 
                                type="checkbox" 
                                id="inputTerms" 
                                className="accent-red-600" 
                                { ...register('terms') }
                            />
                            <label htmlFor="inputTerms">Li e aceito os termos e condições</label>
                        </div>
                        { errors.terms && <ErrorMessage message={errors.terms.message} /> }
                        <button type="submit" className="w-full p-2 bg-red-600 rounded text-white hover:bg-red-700">Quero criar minha conta</button>
                    </form>

                    <div className="mt-10 text-center">
                        <Link to="/login" className="hover:underline">Já possui cadastro? Faça login!</Link>
                    </div>
                </div>
            </main>
        </>
    )
}