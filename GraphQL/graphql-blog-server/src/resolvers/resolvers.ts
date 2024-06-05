import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

interface UserInfo {
  name: string;
  email: string;
  password: string;
}

export const resolvers = {
  Query: {
    users: async (parent: any, args: any, context: any) => {
      return await prisma.user.findMany();
    },
  },
  Mutation: {
    signup: async (parent: any, args: UserInfo, context: any) => {
      const isExist = await prisma.user.findFirst({
        where: { email: args.email },
      });

      if (isExist) {
        return { error: "User already exists", token: null };
      }

      const hashedPassword = await bcrypt.hash(args.password, 7);

      const newUser = await prisma.user.create({
        data: {
          name: args.name,
          email: args.email,
          password: hashedPassword,
        },
      });

      const token = jwt.sign({ userId: newUser.id }, "secretKey", {
        expiresIn: "15m",
      });

      return { token };
    },
    signin: async (
      parent: any,
      args: { email: string; password: string },
      context: any
    ) => {
      const user = await prisma.user.findFirst({
        where: { email: args.email },
      });

      if (!user) {
        return { error: "User Not Found!", token: null };
      }

      const isCorrectPassword = await bcrypt.compare(
        args.password,
        user?.password
      );

      if (!isCorrectPassword) {
        return { error: "Wrong Password!", token: null };
      }

      const token = jwt.sign({ userId: user.id }, "secretKey", {
        expiresIn: "15m",
      });

      return {
        error: null,
        token,
      };
    },
  },
};
