import '../../styling/bottom.css';
import { useNavigate } from 'react-router-dom';

export function EmailButton(){
    const navigate = useNavigate();
    

    function emailNavigate(){
        navigate('/contact');
    }


    return(

        <div className="emailbutton">
            <button onClick = {emailNavigate}>Email Page</button> 
        </div>
        
    );
}

