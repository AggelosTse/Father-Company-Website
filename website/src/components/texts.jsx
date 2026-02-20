import '../styling/texts.css';
import '../styling/middle.css';

export function Name(){
    return <h1 className='companyName'>TSELIOSGAMES</h1>;
  }
  
export function CenterText(){
    return(
      <div className="center-wrapper">
        <b className='centerText'>ΣΤΟΧΟΣ ΜΑΣ Η ΨΥΧΑΓΩΓΙΑ ΣΑΣ</b>
        <b className='centerSubText'>Με πολλά χρόνια εμπειρίας στον χώρο.</b>
      </div>
    );
  }
  
export function ScrollText(){
    return <b className='scrollText'>ΕΛΑΤΕ ΝΑ ΣΥΝΕΡΓΑΣΤΟΥΜΕ:</b>;
  }

