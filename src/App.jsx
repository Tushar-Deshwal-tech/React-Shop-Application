import './App.css';
import Header from '../components/Header';
import Landing_page from '../pages/Landing_page';
import Footer from '../components/Footer';

function App() {
  return (
    <div className="app-container">
      <header><Header /></header>
      <div className='landing-page'><Landing_page /></div>
      <footer><Footer /></footer>
    </div>
  )
}

export default App;
