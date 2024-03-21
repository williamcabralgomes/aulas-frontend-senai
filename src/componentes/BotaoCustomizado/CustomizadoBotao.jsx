import './CustomizadoBotao.css';

const CustomizadoBotao =(props)=> { 
    const classes = ['botao-customizado'];

    switch(props.tipo){
         case 'primario':
            classes.push('botao-customizado-primario');
            break;

         case 'secundario':
            classes.push('botao-customizado-secundario');
            break;
    }
    
return(

    <button className={classes.join(' ')}>{props.children}</button>

 )
};

export default CustomizadoBotao;