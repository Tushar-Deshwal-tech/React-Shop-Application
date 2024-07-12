import './App.css';
import Header from '../components/Header';
import Landing_page from '../pages/Landing_page';


function App() {
  return (
    <div>
      <header><Header /></header>
      <div className='landing-page'><Landing_page /></div>
    </div>
  )
}

export default App