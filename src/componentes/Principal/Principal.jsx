
import CustomizadoBotao from '../BotaoCustomizado/CustomizadoBotao';
import ListaProdutos from '../ListaProdutos/ListaProdutos';
import './Principal.css';


const Principal =() => {

 return (  
    
    <main>
      <CustomizadoBotao tipo='primario' onClick={() => {
        alert('Salvo com sucesso');
      }}>Salvar</CustomizadoBotao>

      <CustomizadoBotao tipo='secundario'  onClick={() => {
        alert('Deu Git com sucesso');
      }}>Git</CustomizadoBotao>

      <CustomizadoBotao  onClick={() => {
        alert('Cancelado com sucesso');
      }}>Cancelar</CustomizadoBotao>

      <ListaProdutos/>;

    </main>

 )
};


export default Principal;