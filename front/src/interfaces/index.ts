export interface CarProps {
    id: string
    name: string
    brand: string
    color: string
    img_url: string
    year: string
    price: string
    user_id?: string
    User: {
        first_name: string
        last_name: string
        phone: string
    }
}

export interface UserProps {
    id?: string
    first_name: string
    last_name: string
    email: string
    password: string
    confirm_password: string
}

export interface UserDataProps {
    userId: number
}