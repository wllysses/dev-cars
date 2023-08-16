interface Props {
    message?: string
}

export function ErrorMessage({ message }: Props) {
    return (
        <span className="text-red-500 italic text-xs font-semibold">{message}</span>
    )
}