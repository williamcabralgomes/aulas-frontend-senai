
import React from 'react';
import CustomizadoBotao from '../BotaoCustomizado/CustomizadoBotao';
import ListaProdutos from '../ListaProdutos/ListaProdutos';
import BotaoContador from './BotaoContador';
import Formulario from '../Formulario/Formulario';
import ListaCompras from '../ListaCompras/ListaCompras';
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

        <CustomizadoBotao tipo = 'secundario'  onClick={() => setExemplo ('listaCompras') }>
        
        Lista de Compras
        
        </CustomizadoBotao>

     {exemplo === 'listaProdutos' && <ListaProdutos/> }
    
     {exemplo === 'botaoContador' && <BotaoContador/>}

     {exemplo === 'formulario' && <Formulario/>}

     {exemplo === 'listaCompras' && <ListaCompras/>}

     </nav>
    </main>

 )
};


export default Principal;