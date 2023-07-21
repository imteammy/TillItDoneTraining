export interface Product {
  id: string;
  image: string;
  banner: string;
  name: string;
  price: number;
  description: string;
  published: boolean;
  ownerId: number;
  createdAt: string;
  updatedAt: string;
  Brand?: Brand;
  User?: User;
}

export interface Brand {
  id?: number;
  image?: string;
  banner?: string;
  name: string | undefined;
  brandOwner?: string;
}

export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  firstname: string | null;
  lastname: string | null;
}

export interface Props {
  params: {
    id: string;
  };
}
