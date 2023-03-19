import { useState } from "react";
import Cliente from "../core/Cliente";
import Botao from "./Botao";
import Entrada from "./Entrada";

interface FormularioProps {
    cliente: Cliente
    clienteMudou?: (cliente: Cliente) => void
    cancelado?: () => void
}

export default function Formulario(props: FormularioProps) {

    const id = props.cliente?.id
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0)

    return (
        <div>
            {id ? (
                <Entrada somenteLeitura texto="Código" valor={id} className="mb-4" />
            ) : false}
            <Entrada texto="Nome" valor={nome} valorMudou={setNome} className="mb-4" />
            <Entrada tipo="number" texto="Idade" valor={idade} valorMudou={setIdade} />
            <div className="flex justify-end mt-4">
                <Botao 
                    onClick={() => props.clienteMudou?.(new Cliente(id, nome, +idade))}
                    cor="blue" 
                    className="mr-2 bg-gradient-to-r from-blue-400 to-blue-700"
                >
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>
                <Botao 
                    onClick={props.cancelado} 
                    cor="gray" 
                    className="mr-2 bg-gradient-to-r from-gray-400 to-gray-700"
                >
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}