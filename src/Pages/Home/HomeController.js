import React, {useState, useEffect, useRef} from 'react';
import HomeView from './HomeView'
import HomeModel from './HomeModel'
const HomeController = () => {
    //Inicalizando States
    const [count, setCount] = useState(0);
    //Inicializando Ref
    const homeModel = useRef(null);
    //Chamando o Effect ao montar o DOM
    useEffect(() => {
        //Inicializando o timeout
        const interval = setInterval(() => {
            //atualizando o contador
            setCount(count + 1)
        }, 1000);     
   
        return () => {
            //Limpando o interval ao sair do componente
            clearInterval(interval);
        };
    }, [])
    
    console.log(" Count " + count);

    return (
        //Chamando o View e passando o props count_info
        <HomeView handleSubmit="/search/${searchInput}" count_info={count}> 
            <div> Teste Info </div>
        </HomeView>
    )
}
export default HomeController;