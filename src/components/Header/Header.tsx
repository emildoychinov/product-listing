import { useCart } from '../../context/CartContext'
import Filter from '../Filter/Filter'
import '../../assets/styles/Header.css'

function Header() {
  const { count } = useCart()

  return (
    <header className="header">
      <Filter />
      <div className="header-content">
        <h1 className="header-title">Product Listing</h1>
        <div className="header-cart" aria-label={`${count} items in cart`}>
          <svg
            className="header-cart-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
          {count > 0 && (
            <span className="header-cart-badge">{count > 99 ? "99+" : count}</span>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header