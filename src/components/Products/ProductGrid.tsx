import Product from "./Product"
import { useViewportColumns } from "../../hooks/useViewportColumns"
import { useProducts } from "../../hooks/useProducts"
import "../../assets/styles/Products.css"

const INITIAL_ROWS = 5

interface ProductGridProps {
  columns?: number
}

function ProductGrid({ columns: maxColumns = 4 }: ProductGridProps) {
  const columns = useViewportColumns(maxColumns)
  const pageSize = columns * INITIAL_ROWS
  const {
    products,
    loading,
    loadingMore,
    error,
    hasMore,
    loadMore,
  } = useProducts(pageSize)

  if (loading) {
    return (
      <main className="products-wrapper">
        <div className="products-loading" aria-live="polite">
          Loading products…
        </div>
      </main>
    )
  }

  if (error) {
    return (
      <main className="products-wrapper">
        <div className="products-error">
          <p>{error}</p>
        </div>
      </main>
    )
  }

  return (
    <main className="products-wrapper">
      <div className="products">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      {hasMore && (
        <div className="products-load-more">
          <button
            type="button"
            className="products-load-more-btn"
            onClick={loadMore}
            disabled={loadingMore}
          >
            {loadingMore ? "Loading…" : "Load More"}
          </button>
        </div>
      )}
    </main>
  )
}

export default ProductGrid
