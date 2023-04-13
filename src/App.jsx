import './App.css';
import logo from './im.png';
function App() {
    return (
      <div className="main">
           <div class="header">
          
            <header className="App-header">
              <img src = {logo} className="App-logo" alt="finzlogo" />
              <button className="b1">HOME</button>
              </header>
              
        </div> 
       
        <div classNAme="heading">
            <h2>
            HOW CAN WE HELP YOU?
            </h2>
        </div>
         <br/>
       
        <div className="sub-main">
          
  
          <form className="formbox">
            <center>
              <label>
              
                 NAME:</label>
                <input type="text" />
              
  
              <br></br>
  
              <label>
                EMAIL ID:</label>
                <input type="text" />
              
  
              <br></br>
  
              <label>
                CUSTOMER ID:</label>
                <input type="text" />
              
              <br></br>
              <label>
                QUERIES/COMPLAINTS:</label>
                <input type="text" />
          
              <br></br>
              <button
                className="ui button blue"
                onClick={() =>
                  alert("Your response was submitted successfully !")
                }
              >
                SUBMIT
              </button>
            </center>
          </form>
        </div>
      </div>
    );
  }
  export default App;






