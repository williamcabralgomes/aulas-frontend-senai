
import CustomizadoBotao from '../BotaoCustomizado/CustomizadoBotao';
import './Principal.css';

const Principal =() => {

 return (  
    
    <main>
      <CustomizadoBotao tipo='primario'>Salvar</CustomizadoBotao>
      <CustomizadoBotao tipo='secundario'>Git</CustomizadoBotao>
      <CustomizadoBotao>Cancelar</CustomizadoBotao>

    </main>

 )
};


export default Principal;