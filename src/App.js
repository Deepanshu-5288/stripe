import './App.css';
import Hero from './Hero';
import Navbar from "./Navbar";
import {AppProvider} from "./context";
import Sidebar from './Sidebar';
import Submenu from "./Submenu";
function App() {
  return (
    <AppProvider>
    <Navbar />
    <Hero />
    <Sidebar />
    <Submenu />
    </AppProvider>
  );
}

export default App;
