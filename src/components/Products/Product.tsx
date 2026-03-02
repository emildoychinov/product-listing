import type { ProductItem } from "../../assets/data/productsData"
import { useCart } from "../../context/CartContext"
import { useToast } from "../../context/ToastContext"
import "../../assets/styles/Products.css"

interface ProductProps {
  product: ProductItem
}

function Product({ product }: ProductProps) {
  const { addToCart } = useCart()
  const { showToast } = useToast()

  const handleAddToCart = () => {
    addToCart()
    showToast("Product added to cart.")
  }

  return (
    <article className="product">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-content">
        <h3 className="product-title">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-price-block">
          {product.discountedPrice != null ? (
            <>
              <span className="product-price product-price--original">
                ${product.price.toFixed(2)}
              </span>
              <span className="product-price product-price--discounted">
                ${product.discountedPrice.toFixed(2)}
              </span>
            </>
          ) : (
            <span className="product-price">${product.price.toFixed(2)}</span>
          )}
        </div>
        <div className="product-rating" aria-label={`Rating: ${product.rating} out of 5`}>
          {"★".repeat(Math.floor(product.rating))}
          {product.rating % 1 >= 0.5 ? "½" : ""}
          {"☆".repeat(5 - Math.ceil(product.rating))}
          <span className="product-rating-value">({product.rating})</span>
        </div>
        <button type="button" className="product-add-to-cart" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </article>
  )
}

export default Product
