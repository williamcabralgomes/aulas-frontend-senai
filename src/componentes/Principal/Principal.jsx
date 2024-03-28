
import React from 'react';
import CustomizadoBotao from '../BotaoCustomizado/CustomizadoBotao';
import ListaProdutos from '../ListaProdutos/ListaProdutos';
import BotaoContador from './BotaoContador';
import Formulario from '../Formulario/Formulario';
import './Principal.css';


const Principal =() => {

  const [exemplo,setExemplo]= React.useState('');

 return (  
    
    <main>
      <nav>

      <CustomizadoBotao tipo = 'primario' onClick={() => setExemplo ('listaProdutos')}>

        Lista de Produtos
        
        </CustomizadoBotao>

      <CustomizadoBotao tipo = 'secundario'  onClick={() => setExemplo ('botaoContador') }>
        
        Botão Contador
        
        </CustomizadoBotao>

        <CustomizadoBotao tipo = 'secundario'  onClick={() => setExemplo ('formulario') }>
        
        Formulario
        
        </CustomizadoBotao>

     {exemplo === 'listaProdutos' && <ListaProdutos/> }
    
     {exemplo === 'botaoContador' && <BotaoContador/>}

     {exemplo === 'formulario' && <Formulario/>}

     </nav>
    </main>

 )
};


export default Principal;