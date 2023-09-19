import { Link, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import { z } from "zod"
import { zodResolver } from '@hookform/resolvers/zod'
import { api } from "../../services/api"
import { Header } from "../../components/Header"


export function Login() {

    const navigate = useNavigate()

    const userLoginSchema = z.object({
        email: z.string().nonempty('Preencha o campo.').email(),
        password: z.string().nonempty('Preencha o campo.').min(5, 'Mínimo 5 caracteres.')
    })

    type UserLoginSchema = z.infer<typeof userLoginSchema>

    const { register, handleSubmit, formState: { errors } } = useForm<UserLoginSchema>({
        resolver: zodResolver(userLoginSchema)
    })

    async function handleUserLogin(data: UserLoginSchema) {
        const fetchData = await api.post('/auth', { email: data.email, password: data.password })

        if(!fetchData.data.success) {
            return toast.error(fetchData.data.message)
        }

        toast.success(fetchData.data.message) //Pop-up de notificação
        localStorage.setItem('@USER_DATA', JSON.stringify(fetchData.data.user)) // Salva as informações do usuário no storage
        navigate('/dashboard') // Redireciona para a próxima rota
    }
    
    return (
        <>
            <Header />

            <main className="mt-32 pg-4 w-full flex flex-col items-center animate-myFade">
                <div className="max-w-xl w-full p-4">
                    <div className="flex flex-col">
                        <h4>Seja bem-vindo</h4>
                        <h2 className="font-bold text-3xl">Faça login na sua conta</h2>
                    </div>
                    <form className="w-full mt-10 flex flex-col gap-4" onSubmit={handleSubmit(handleUserLogin)}>
                        <div className="flex flex-col">
                            <label htmlFor="inputEmail">E-mail</label>
                            <input 
                                type="email" 
                                id="inputEmail" 
                                className="border rounded w-full p-2" 
                                placeholder="Insira seu e-mail"
                                { ...register('email') }
                            />
                            { errors.email && <span className="text-red-600 italic text-12 font-bold">{ errors.email.message }</span> }
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="inputPassword">Senha</label>
                            <input 
                                type="password" 
                                id="inputPassword" 
                                className="border rounded w-full p-2" 
                                placeholder="Insira sua senha"
                                { ...register('password') }
                            />
                            { errors.password && <span className="text-red-600 italic text-12 font-bold">{ errors.password.message }</span> }
                        </div>
                        <a href="#" className="text-right">Esqueceu sua senha?</a>
                        <button className="bg-red-600 p-2 rounded text-white hover:bg-red-700">Entrar</button>
                    </form>
                    <div className="mt-10 text-center">
                        <Link to="/register" className="hover:underline">Não possui cadastro? Cadastre-se agora mesmo!</Link>
                    </div>
                </div>
            </main>
        </>
    )
}