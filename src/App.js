import React from 'react'
import './App.css';


function Header(){
  return(
    <header>
      <h1>Pras's Webpage</h1>
    </header>
  )
}
function Main(){
  return(
    <section>
      <p>Learning React</p>
    </section>
  )
}
function Footer(){
  return(
    <footer>
      <h3>Byee</h3>
    </footer>
  )
}

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
