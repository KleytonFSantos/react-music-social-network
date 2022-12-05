type Props = {
    error: string,
}

export const TextErrorForm = ({ error }: Props) : JSX.Element => {
    return (
        <div className="text-red-500 text-center py-4">{error}</div>
    )
}