import './App.css'


function Name(){
  return(
    <h1 className='companyName'>TSELIOSGAMES</h1>
  );
}

function CenterText(){
  return(
    <h2 className='centerText'> ΣΤΟΧΟΣ ΜΑΣ Η ΨΥΧΑΓΩΓΙΑ ΣΑΣ</h2>
  );
}
function App() {

  return (
    <div>
      <Name/>
      <CenterText/> 
      </div>
  );
}

export default App
