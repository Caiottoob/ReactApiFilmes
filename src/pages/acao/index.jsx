import { useState } from 'react'
import { useEffect } from 'react'

function catAcao() {
    
    const [ filmes, setFilmes ] = useState([])

    useEffect(() => {
        const buscarFilmes = async () => {
            const response = await fetch('https://raw.githubusercontent.com/Caiottoob/API/main/acao.json')
            const data = await response.json()
            setFilmes(data)
        }
        buscarFilmes()
    }, [])
    
    return (
        <table>
            <tbody>
            {
                    filmes.map( acao => (
                        <tr key={acao.id}>
                            <td>
                                <div>
                                    <nav><b>{acao.filme}</b></nav>
                                    <nav><b>Duracao: </b>{acao.duracao}</nav> 
                                    <nav><b>Diretor: </b>{acao.diretor}</nav>
                                    <nav><b>Idade: </b>{acao.classificacao_indicativa}</nav>
                                    <nav><b>Avaliação: </b>{acao.avaliacao_critica}</nav>
                                    <nav><b>Lançamento: </b>{acao.data_de_lancamento}</nav>

                                </div>
                                <div>
                                    <img src={acao.capa} />
                                </div>
                            </td>
                           
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default catAcao