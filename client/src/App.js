import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home'

function App() {

  return (
    <div>
      <Router>
        <div>
          <Route path="/" component={Home}/>
        </div>
      </Router>
    </div>
  );
}

export default App;
