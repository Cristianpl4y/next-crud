interface BotaoProps {
    cor?: string
    className?: string
    children: any
    onClick? : () => void
}

export default function Botao(props: BotaoProps){ 
    return (
        <button onClick={props.onClick} className={`
            bg-gradient-to-r ${props.cor}
            text-white px-4 py-2 rounded-md 
            ${props.className}
        `}>
            {props.children}
        </button>
    )
}