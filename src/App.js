import logo from './logo.png';
import './App.css';

function App() {
  return (
    <>
      <div className='container'>
        <header className='header'>
          <div className='logo'>
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className='header-title'>AWS Practitioner</div>
          <h5>Team 4</h5>
        </header>
        <section className='content'>

        </section>
      </div>
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
