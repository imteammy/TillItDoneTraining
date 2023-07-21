import { PrismaClient, User } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

// export type User = {
//   id?: number;
//   firstname: string;
//   lastname: string;
//   username: string;
//   email: string;
//   password: string;
// };

export async function getUser(req: Request, res: Response): Promise<any> {
  try {
    const result =
      (await prisma.user.findMany({
        include: {
          products: {
            include: {
              Brand: true,
            },
          },
        },
        orderBy: {
          id: "asc",
        },
      })) ?? [];
    res.status(200).json({ users: result });
    return;
  } catch (error: any) {
    res.status(500).json({ error: error });
    return;
  }
}

export async function getUserId(req: Request, res: Response): Promise<any> {
  const { id } = req.body || req.params;
  if (isNaN(id) || !id) {
    return res.status(400).json({
      message:
        "Invalid id missing or invalid type of id, Expected 'number', but got  " +
        typeof id,
    });
  }
  try {
    const result =
      (await prisma.user.findFirst({
        where: {
          id: Number(id),
        },
        include: {
          products: {
            include: {
              Brand: true,
            },
          },
          profile: true,
        },
      })) ?? [];
    return result;
  } catch (error: any) {
    res.status(500).json({ error: error });
    return;
  }
}

export async function createUser(req: Request, res: Response): Promise<any> {
  const user: User = req.body;
  try {
    const result =
      (await prisma.user.create({
        data: {
          firstname: user?.firstname,
          lastname: user?.lastname,
          username: user?.username,
          email: user?.email,
          password: user?.password,
        },
      })) ?? [];
    res.status(200).json({
      message: "Create user successfully",
      data: result,
    });
    return;
  } catch (error: any) {
    if (error.code === "P2002") {
      res.status(500).json({
        code: "Exists",
        message: "Email already exist.",
      });
      return;
    }
    res.status(500).json({ error: error });
    return;
  }
}

export async function updateUser(req: Request, res: Response): Promise<any> {
  const user: User = req.body;
  try {
    const result =
      (await prisma.user.update({
        where: {
          id: Number(user?.id),
        },
        data: {
          firstname: user?.firstname,
          lastname: user?.lastname,
          username: user?.username,
          email: user?.email,
          password: user?.password,
        },
      })) ?? [];
    res.status(200).json({
      message: "Update user successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({ error: error });
  }
}

export async function deleteUser(req: Request, res: Response): Promise<any> {
  const { id } = req.body;
  if (!id || isNaN(id)) {
    res
      .status(400)
      .json({ message: "Invalid id is missing or is not type of number" });
  }
  try {
    const result =
      (await prisma.user.delete({
        where: {
          id: Number(id),
        },
      })) ?? [];
    res.status(200).json({
      message: "Delete user successfully",
      data: result,
    });
    return;
  } catch (error: any) {
    res.status(500).json({ error: error });
  }
}
