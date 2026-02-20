import '../styling/top.css';
import '../styling/middle.css';

export function Name(){
    return <h1 className='companyName'>TSELIOSGAMES</h1>;
  }
  
export function CenterText(){
    return(
      <div className="center-wrapper">
        <h2 className='centerText'>ΣΤΟΧΟΣ ΜΑΣ Η ΨΥΧΑΓΩΓΙΑ ΣΑΣ</h2>
        <h1 className='centerSubText'>Με πολλά χρόνια εμπειρίας στον χώρο.</h1>
      </div>
    );
  }
  
export function ScrollText(){
    return <h2 className='scrollText'>ΕΛΑΤΕ ΝΑ ΣΥΝΕΡΓΑΣΤΟΥΜΕ:</h2>;
  }


  
