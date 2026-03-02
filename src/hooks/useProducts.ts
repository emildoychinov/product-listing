import { useState, useCallback, useEffect } from "react"
import type { ProductItem } from "../assets/data/productsData"
import { fetchProducts } from "../api/productsApi"

export function useProducts(pageSize: number) {
  const [products, setProducts] = useState<ProductItem[]>([])
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [loadingMore, setLoadingMore] = useState(false)

  const loadPage = useCallback(
    async (skip: number, append: boolean) => {
      try {
        const { products: next, total: totalCount } = await fetchProducts(
          pageSize,
          skip
        )
        setTotal(totalCount)
        if (append) {
          setProducts((prev) => [...prev, ...next])
        } else {
          setProducts(next)
        }
      } catch (e) {
        setError(e instanceof Error ? e.message : "Failed to load products")
      }
    },
    [pageSize]
  )

  useEffect(() => {
    setLoading(true)
    setError(null)
    loadPage(0, false).finally(() => setLoading(false))
  }, [loadPage])

  const loadMore = useCallback(() => {
    if (products.length >= total || loadingMore) return
    setLoadingMore(true)
    loadPage(products.length, true).finally(() => setLoadingMore(false))
  }, [products.length, total, loadingMore, loadPage])

  const hasMore = products.length < total

  return {
    products,
    total,
    loading,
    loadingMore,
    error,
    hasMore,
    loadMore,
  }
}
