import Layout from "../components/Layout"
import Tabela from "../components/Tabela"
import Botao from "../components/Botao"
import Formulario from "../components/Formulario"
import useClientes from "../hooks/useClientes"

export default function Home() {

  const { 
    cliente,
    clientes,
    novoCliente,
    salvarCliente,
    selecionarCliente,
    excluirCliente,
    tabelaVisivel,
    exibirTabela
  } = useClientes()

  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-cyan-600 via-sky-700 to-teal-500
    `}>
      
      <Layout titulo="Cadastro">
        { tabelaVisivel ? (
          <>
            <div className="flex justify-end">
              <Botao cor="from-green-400 to-green-700" className="mb-4" onClick={novoCliente}>Novo Cliente</Botao>
            </div>
            
            <Tabela clientes={clientes} clienteSelecionado={selecionarCliente} clienteExcluido={excluirCliente}></Tabela> 
          </>
        ):(
          <Formulario 
          cliente={cliente}
          clienteMudou={salvarCliente}
          cancelado={exibirTabela}
          ></Formulario>
        ) }
      </Layout>
    </div>
  )
}
