import { useState } from 'react'
import styles from './Card.module.css'
import { useEffect } from 'react'

function catTerror() {
    
    const [ filmes, setFilmes ] = useState([])

    useEffect(() => {
        const buscarFilmes = async () => {
            const response = await fetch('https://raw.githubusercontent.com/Caiottoob/API/main/terror.json')
            const data = await response.json()
            setFilmes(data)
        }
        buscarFilmes()
    }, [])
    
    return (
        <table>
            <thead>
                <tr>
                </tr>
            </thead>
            <tbody id="root">
                {
                    filmes.map( terror => (
                        <tr key={terror.id}>
                            <td>
                                <div>
                                    <nav><b>{terror.filme}</b></nav>
                                    <nav><b>Duracao: </b>{terror.duracao}</nav> 
                                    <nav><b>Diretor: </b>{terror.diretor}</nav>
                                    <nav><b>Idade: </b>{terror.classificacao_indicativa}</nav>
                                    <nav><b>Avaliação: </b>{terror.avaliacao_critica}</nav>
                                    <nav><b>Lançamento: </b>{terror.data_de_lancamento}</nav>
                                </div>
                                <div>
                                    <img src={terror.capa} />
                                </div>
                            </td>
                           
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default catTerror