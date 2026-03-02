import type {
  DummyJsonProductsResponse,
  ProductItem,
} from "../assets/data/productsData"
import { mapDummyJsonToProductItem } from "../assets/data/productsData"

const BASE = "https://dummyjson.com/products"

export async function fetchProducts(limit: number, skip: number): Promise<{
  products: ProductItem[]
  total: number
}> {
  const url = `${BASE}?limit=${limit}&skip=${skip}`
  const res = await fetch(url)
  if (!res.ok) throw new Error(`Failed to fetch products: ${res.status}`)
  const data: DummyJsonProductsResponse = await res.json()
  return {
    products: data.products.map(mapDummyJsonToProductItem),
    total: data.total,
  }
}
