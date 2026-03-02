import { useState } from "react"
import Product from "./Product"
import { useViewportColumns } from "../../hooks/useViewportColumns"
import { products } from "../../assets/data/productsData"
import "../../assets/styles/Products.css"

const INITIAL_ROWS = 5

interface ProductGridProps {
  columns?: number
}

function ProductGrid({ columns: maxColumns = 4 }: ProductGridProps) {
  const columns = useViewportColumns(maxColumns)
  const pageSize = columns * INITIAL_ROWS
  const [visibleCount, setVisibleCount] = useState(pageSize)
  const visibleProducts = products.slice(0, visibleCount)
  const hasMore = visibleCount < products.length

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + pageSize, products.length))
  }

  return (
    <main className="products-wrapper">
      <div className="products">
        {visibleProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      {hasMore && (
        <div className="products-load-more">
          <button type="button" className="products-load-more-btn" onClick={loadMore}>
            Load More
          </button>
        </div>
      )}
    </main>
  )
}

export default ProductGrid
