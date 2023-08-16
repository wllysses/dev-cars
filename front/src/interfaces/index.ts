export interface CarProps {
    id: string
    name: string
    brand: string
    color: string
    img_url: string
    year: string
    price: string
    user_id?: string
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
    id: number
    firstName: string
    lastName: string
    email: string
    createdAt: string
}