interface EntradaProps {
    tipo?: 'text' | 'number'
    texto: string
    valor: any
    somenteLitura?: boolean
    className?: string
    valorMudou?: (valor: any) => void
}

export default function Entrada(props: EntradaProps){
    return (
        <div className={`flex flex-col ${props.className}`}>
            <label className="mb-4 mt-2">
                {props.texto}
            </label>
            <input 
                className={`
                    border border-black rounded-lg 
                    focus:outline-none bg-gray-100 px-4 py-2
                    ${props.somenteLitura ? '' : 'focus: bg-white' }

                `}
                type={props.tipo ?? 'text'} 
                value={props.valor}
                readOnly={props.somenteLitura}
                onChange={e => props.valorMudou?.(e.target.value)}
            />

        </div>
    )
}