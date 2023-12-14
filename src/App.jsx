import './App.css';
import { CartProvider } from './context/CartContext';
import MainRouter from './routes/MainRouter';

const App = () =>{

  return (
    <div>
        <CartProvider>
          <MainRouter/>
        </CartProvider>
    </div>
  );
};

export default App;
