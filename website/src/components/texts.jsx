import '../styling/top.css';
import '../styling/middle.css';

export function Name(){
    return (
    <div className='flexOne'>
      <h1 className='companyName'>TSELIOSGAMES</h1>
      <button className='language'>EN/GR </button> 
    </div>
    );
  }
  
export function CenterText(){
    return(
      <div className="wrapper">
        <b className='centerText'>ΣΤΟΧΟΣ ΜΑΣ Η ΨΥΧΑΓΩΓΙΑ ΣΑΣ</b>
        <b className='centerSubText'>Με πολλά χρόνια εμπειρίας στον χώρο.</b>
        <b className='scrollText'>ΕΛΑΤΕ ΝΑ ΣΥΝΕΡΓΑΣΤΟΥΜΕ:</b>;
      </div>
    );
  }

export function Language(){
  return(
    <div className='flexOne'>
      <button className='language'>EN/GR </button> 
    </div> 
    );
  }