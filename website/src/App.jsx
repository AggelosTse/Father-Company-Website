import './App.css'


function Name(){
  return(
    <h1 className='companyName'>TSELIOSGAMES</h1>
  );
}

function CenterText(){
  return(
    <div>
    <h2 className='centerText'> ΣΤΟΧΟΣ ΜΑΣ Η ΨΥΧΑΓΩΓΙΑ ΣΑΣ</h2>;
    <h1 className='centerSubText'>Με πολλα χρονια εμπειριας στον χωρο.</h1>;
    </div>
  );
}

function ScrollText(){
  return(
    <h2 className='scrollText'> ΕΛΑΤΕ ΝΑ ΣΥΝΕΡΓΑΣΤΟΥΜΕ:</h2>
  );
}
function App() {

  return (
    <div>
      <Name/>
      <CenterText/> 
      <ScrollText/>
      </div>



  );
}

export default App
