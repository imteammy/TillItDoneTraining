import { Brand, PrismaClient, Product } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export async function GetProducts(req: Request, res: Response): Promise<any> {
  try {
    const products =
      (await prisma.product.findMany({
        include: {
          Brand: true,
          User: true,
        },
        orderBy: {
          createdAt: "asc",
        },
      })) ?? [];
    res.status(200).send({ products });
    return;
  } catch (error) {
    res.status(500).json({ error: error });
    return;
  }
}

export async function GetProductId(req: Request, res: Response): Promise<any> {
  const { id } = req.params;

  try {
    if (!id || typeof id !== "string")
      return res.status(400).json({
        message:
          `Invalid id is missing or invalid type of id, Expected "string" but got ' + ${typeof id}`
      });

    const product = await prisma.product.findFirst({
      where: {
        id: id,
      },
      include: {
        Brand: true,
        User: true,
      },
    });
    return res.status(200).json({ product });
  } catch (error: any) {
    return res.status(500).send({ error: error.message });
  }
}

export async function CreateProduct(req: Request, res: Response): Promise<any> {
  const { userId, product, brand } = req.body;

  try {
    if (!userId) return res.status(500).json("User id is required!");

    const Product = await prisma.product.create({
      data: {
        name: product?.name,
        description: product?.description,
        price: Number(product?.price),
        User: {
          connect: {
            id: userId,
          },
        },
      },
    });

    const Brand = await prisma.brand.create({
      data: {
        name: brand?.name,
        product: {
          connect: {
            id: Product.id,
          },
        },
      },
    });
    return res.status(200).json({ Product, Brand });
  } catch (error: any) {
    return res.status(500).json({ Error: error.message });
  }
}

export async function UpdateProduct(req: Request, res: Response): Promise<any> {
  const { product: Product, brand: Brand }: { product: Product; brand: Brand } =
    req.body;

  try {
    if (!Product.id) {
      res.status(500).json({
        error: "Product id is required",
      });
      res.end();
      return;
    }

    const productResult = prisma.product.update({
      where: {
        id: Product?.id,
      },
      data: {
        name: Product?.name,
        description: Product?.description,
        price: Number(Product?.price),
      },
    });
    const brandResult = prisma.brand.update({
      where: {
        id: Brand?.id,
      },
      data: {
        name: Brand?.name,
      },
    });
    const [product, brand] = await prisma.$transaction([
      productResult,
      brandResult,
    ]);
    res.json({
      message: "Product updated successfully",
      log: {
        product,
        brand,
      },
    });
    return;
  } catch (error: any) {
    if (error.code === "P2025") {
      return res
        .status(500)
        .json({ code: "NotFound", message: "Record to update not found." });
    }
    if (error.name === "PrismaClientValidationError") {
      return res.status(500).json({
        code: "Error",
        message:
          "Product or Brand id is missing or invalit type to validation.",
      });
    }
    return res.status(500).json({ error: error.message });
  }
}

export async function DeleteProduct(req: Request, res: Response): Promise<any> {
  const { id } = req.body;
  if (!id || typeof id !== "string") {
    res.status(500).json({
      code: "Error",
      message: `Product id is missing or invalit type to validation, Expected type is 'string'. Got '${+typeof id}'`,
    });
    return;
  }
  try {
    const result = await prisma.product.delete({
      where: {
        id: id,
      },
    });
    return res.status(200).json({
      message: "Product deleted successfully",
      log: result,
    });

  } catch (error: any) {
    if (error.code === "P2025") {
      res.status(500).json({
        message: "Record to delete does not exist.",
      });
    }
    return res.status(500).json({ error: error.message });

  }
}
