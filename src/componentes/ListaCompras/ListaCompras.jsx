
import React from 'react';
import './ListaCompras.css';

const ListaCompras = () => {

    
    const [listaCompras, setListaCompras] = React.useState([]);// Estado para armazenar a lista de compras
    const [descricao, setDescricao] = React.useState('');// Estado para armazenar a descrição do item a ser adicionado

    // Função para adicionar um item à lista de compras
    const adicionarNalista = () => {

        // Verifica se o campo de descrição não está vazio
        if (descricao !== '') {
           
            listaCompras.push(descricao); // Adiciona a descrição à lista de compras
            setListaCompras([...listaCompras]);// Atualiza o estado da lista de compras com um novo array contendo os itens antigos e o novo item
            setDescricao(''); // Limpa o campo de descrição após adicionar o item à lista

        } else {
            
            alert('Campo Obrigatório!');// Exibe um alerta se o campo de descrição estiver vazio
        }
    }; 
    
    // Função para remover um item da lista de compras
    const removerDalista = (index) => {
        
        listaCompras.splice(index, 1);// Remove o item da lista com base no índice fornecido
        
        setListaCompras([...listaCompras]);// Atualiza o estado da lista de compras com um novo array contendo os itens restantes
    };

    return(
        <div>
            {/* Título da página */}
            <h1>Lista de Compras</h1>
            <br />
            
            <input type="text" placeholder='Descrição' value={descricao} onChange={(event) => setDescricao(event.target.value)} /> {/* Campo de entrada para a descrição do item */}
            <button onClick={adicionarNalista}>Adicionar</button>{/* Botão para adicionar um item à lista */}
            <br />
            <br />
            <br />

            {/* Lista de compras */}
            <ul>
                {/* Mapeia cada item da lista de compras para exibição */}
                {listaCompras.map((item, index) => {
                    return(
                        <li  key={index}>
                            {/* Exibe o item */}
                            {item}
                            {/* Botão para remover o item */}
                            <button onClick={() => removerDalista(index)}>Remover</button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default ListaCompras;
