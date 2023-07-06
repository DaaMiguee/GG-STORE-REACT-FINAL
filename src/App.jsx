import './App.css';
// import FooterComponent from './components/FooterComponent/FooterComponent';
import { CartProvider } from './context/CartContext';
import MainRouter from './routes/MainRouter';

const App = () =>{

  return (
    <div>

        <CartProvider>
          <MainRouter/>
        </CartProvider>
        {/* <footer>
          <FooterComponent/>
        </footer> */}
    </div>
  );
};

export default App;
