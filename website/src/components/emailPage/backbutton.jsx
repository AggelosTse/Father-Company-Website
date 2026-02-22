import { useNavigate } from 'react-router-dom';


export default function BackButton(){

    const navigate = useNavigate();
    
    function mainPageNavigate(){
        navigate('/');
    }
    return(
        <button onClick={mainPageNavigate}>
            Back
        </button>
    );
}

