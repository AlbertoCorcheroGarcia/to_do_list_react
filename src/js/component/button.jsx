import React, { Fragment } from 'react';
import List from "./list.jsx";
    // ya esta en list 
    const [tasksArray, setTasksArray] = useState([]);


    const deleteT = indexDelete => {
        tasksArray.splice(indexDelete, 1);
    };

    // deberia de meterlo en el list ???
    // me falta un puto map seguro al cual le paso el button y el index a borrar
    function onClickDelete (indexDelete){
        // onclick={llamo a la funcion(llamo al parametro)}
        onClick={deleteT(indexDelete)}
    }
        const Button = ()=> {
            return( 
                <button
                    onClick={() => onClickDelete(indexDelete)}>
                        Dar al boton 
                </button>
            )
        }
    
export default Button;

Button.propTypes = {
	option: PropTypes.element;
};
