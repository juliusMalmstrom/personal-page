import "./App.css";
import Home from './components/Home';
import About from './components/About';
import Projects from "./components/Projects";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <main>
      <Routes>
        <Route path='/' component={Home} exact/>
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route component={Error} />
      </Routes>
    </main>
    
  );
}

export default App;
