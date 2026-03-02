export interface ProductItem {
  id: string
  image: string
  name: string
  description: string
  price: number
  discountedPrice?: number
  rating: number
}

export interface DummyJsonProduct {
  id: number
  title: string
  description: string
  price: number
  discountPercentage: number
  rating: number
  thumbnail: string
  images?: string[]
}

export interface DummyJsonProductsResponse {
  products: DummyJsonProduct[]
  total: number
  skip: number
  limit: number
}

export function mapDummyJsonToProductItem(p: DummyJsonProduct): ProductItem {
  const discountedPrice =
    p.discountPercentage > 0
      ? Math.round(p.price * (1 - p.discountPercentage / 100) * 100) / 100
      : undefined
  const shortDescription =
    p.description.length > 100 ? p.description.slice(0, 97) + "..." : p.description
  return {
    id: String(p.id),
    image: p.thumbnail || p.images?.[0] || "",
    name: p.title,
    description: shortDescription,
    price: p.price,
    discountedPrice,
    rating: p.rating,
  }
}
