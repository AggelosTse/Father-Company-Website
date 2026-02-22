import '../styling/bottom.css';

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

