import { useState } from "react";

export default function useTabelaOuForm(){
    
    const [ visivel , setVisivel ] = useState<'tabela' | 'form'>('tabela')

    const exibirTabela = () => setVisivel('tabela')
    const exibirForm = () => setVisivel('form')
    
    return {
        formularioVisivel: visivel === 'form',
        tabelaVisivel: visivel === 'tabela',
        exibirTabela,
        exibirForm
    }
}