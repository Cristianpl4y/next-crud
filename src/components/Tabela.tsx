import Cliente from '../core/Cliente'
import { IconeEdicao, IconeLixo } from './Icones'

interface TabelaProps {
    clientes:  Cliente[]
    clienteSelecionado?: (cliente: Cliente) => void
    clienteExcluido?: (cliente: Cliente) => void
}

export default function Tabela(props: TabelaProps){


    const exibirAcoes = props.clienteExcluido || props.clienteSelecionado

    
    function renderizarCabecalhoTabela(){
        return (
            <tr>
                <th className='text-left p-2'>Código</th>
                <th className='text-left p-2'>Nome</th>
                <th className='text-left p-2'>Idade</th>
                {exibirAcoes ? <th className='text-center'>Ações</th> : false } 
            </tr>   
        )
    }


    function renderizarDados(){
        return props.clientes?.map((cliente, i) => {
                return (
                    <tr key={cliente.id} className={`${i % 2 === 0 ? 'bg-slate-300': 'bg-slate-200'} `}>
                        <td className='text-left p-2'>{cliente.id}</td>
                        <td className='text-left p-2'>{cliente.nome}</td>
                        <td className='text-left p-2'>{cliente.idade}</td>
                        {exibirAcoes ? renderizarAcoes(cliente) : false }
                    </tr>
                )
        })
    }

    function renderizarAcoes(cliente: Cliente){
        return (
            <td className='flex justify-center items-center'>
                {props.clienteSelecionado ? (
                    <button onClick={() => props.clienteSelecionado?.(cliente)} className={`
                        flex justify-center items-center
                        text-green-600 rounded-full p-2 m-1
                        hover:bg-purple-50
                    `}>
                        {IconeEdicao}
                    </button>
                ) : false}
               
                {props.clienteExcluido ? (
                    <button onClick={() => props.clienteExcluido?.(cliente)} className={`
                        flex justify-center items-center
                        text-red-500 rounded-full p-2 m-1
                        hover:bg-purple-50
                    `}>
                        {IconeLixo}
                    </button>
                ) : false}
                
            </td>
        )
    }


    return (
        <div>
            <table className="w-full rounded-xl overflow-hidden">
                <thead className={`
                    bg-black
                    text-white
                `}>{renderizarCabecalhoTabela()}</thead>
                <tbody>{renderizarDados()}</tbody>
            </table>
        </div>
     
    )

}