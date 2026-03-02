import Filter from '../Filter/Filter'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <Filter />
        <div className="header-content">
          <h1>Product Listing</h1>
        </div>
    </header>
  )
}

export default Header