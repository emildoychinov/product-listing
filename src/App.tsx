import './assets/styles/App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import ProductGrid from './components/Products/ProductGrid'
import { CartProvider } from './context/CartContext'
import { ToastProvider } from './context/ToastContext'

function App() {
  return (
    <CartProvider>
      <ToastProvider>
        <Header />
        <ProductGrid />
        <Footer />
      </ToastProvider>
    </CartProvider>
  )
}

export default App
