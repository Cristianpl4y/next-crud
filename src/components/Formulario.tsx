import { useState } from "react";
import Cliente from "../core/Cliente";
import Botao from "./Botao";
import Entrada from "./Entrada";

interface FormularioProps {
    cliente: Cliente
    clienteMudou?: (cliente: Cliente) => void
    cancelado?: () => void
}

export default function Formulario(props: FormularioProps){
    const id = props.cliente?.id  // Optional chaining: se não tem cliente Id, padrão fica null.
    const [nome , setNome] = useState(props.cliente?.nome ?? '')
    const [idade , setIdade] = useState(props.cliente?.idade ?? 0)

    return (
        <div>
            { id ? (<Entrada className="mb-02" texto="Código" valor={id} somenteLitura />):false }
            <Entrada className="mb-02" texto="Nome" valor={nome} valorMudou={setNome} />
            <Entrada className="mb-02" texto="Idade" tipo="number" valor={idade} valorMudou={setIdade} />

            <div className="flex justify-end mt-7">
                <Botao cor="from-blue-400 to-blue-700" className="mr-2"  onClick={() => props.clienteMudou?.(new Cliente(nome, +idade, id))}>
                    { id ? 'Alterar': 'Salvar'}
                </Botao>
                <Botao cor="from-gray-400 to-gray-700" onClick={props.cancelado}>
                    Cancelar
                </Botao>
            </div>


        </div>
    )
}