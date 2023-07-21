import axios from "axios";
type Product = {
  name: string;
  image?: string;
  banner?: string;
  price: number;
  description?: string;
};
type Brand = {
  id?: number;
  name: string;
  image?: string;
  banner?: string;
  brandOwner?: string;
};

type ProductResponse = {
  products: {
    id: string;
    image?: string | null | undefined;
    banner?: string | null | undefined;
    name: string;
    price: number;
    description?: string | null | undefined;
    published: boolean;
    ownerId?: number;
    createdAt: string;
    updatedAt: string;
    brand: {
      id: number;
      name: string;
      image?: string | null | undefined;
      banner?: string | null | undefined;
      brandOwner: string;
    };
    user: {
      id: string;
      email: string;
      name: string;
    };
  };
};

export async function CreateProductAPI(
  userId: number,
  product: Product,
  brand: Brand
) {
  const props = { userId, product, brand };
  const response =
    (await axios.post("http://localhost:4000/api/products/create", props)) ??
    [];
  console.log(response.data);
  const results: ProductResponse[] = response.data;

  return results.map((e) => {
    return {
      id: e.products.id,
      image: e.products.image,
      banner: e.products.banner,
      name: e.products.name,
      price: e.products.price,
      description: e.products.description,
      published: e.products.published,
      ownerId: e.products.ownerId,
      createdAt: e.products.createdAt,
      updatedAt: e.products.updatedAt,
      brand: {
        id: e.products.brand.id,
        name: e.products.brand.name,
        image: e.products.brand.image,
        banner: e.products.brand.banner,
        brandOwner: e.products.brand.brandOwner,
      },
      user: {
        id: e.products.user.id,
        email: e.products.user.email,
        name: e.products.user.name,
      },
    };
  });
}

export type { Product, Brand, ProductResponse };
