import '../styling/bottom.css';

import { useNavigate } from 'react-router-dom';

export function EmailButton(){
    const navigate = useNavigate();
    

    function yo(){
        navigate('/contact');
    }


    return(

        <div className="emailbutton">
            <button onClick = {yo}>Click Me!</button> 
        </div>
        
    );
}

