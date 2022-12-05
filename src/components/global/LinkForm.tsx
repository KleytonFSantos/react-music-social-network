type Props = {
    link: string,
    text: string,
}

export const LinkForm = ({ link, text }:Props): JSX.Element => {
    return (
        <a
        href={link}
        className="text-xs text-blue-600 hover:underline"
    >
        { text }
    </a>
    )
} 