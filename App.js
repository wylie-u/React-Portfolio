import './App.css';
import SearchResultContainer from "./components/EmployeeContainer";
// import SearchResults from "./Components/SearchResults"


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <SearchResultContainer users={this.state.users} /> 
      </header>
    </div>
  );
}

export default App;
