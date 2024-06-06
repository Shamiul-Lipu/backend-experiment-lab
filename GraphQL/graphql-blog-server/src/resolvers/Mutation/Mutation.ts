import { UserInfo } from "../resolvers";
import bcrypt from "bcrypt";
import { createToken } from "../../utils/jwtHelper";
import config from "../../config";

export const Mutation = {
  signup: async (parent: any, args: UserInfo, { prisma }: any) => {
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

    if (args.bio) {
      await prisma.profile.create({
        data: {
          bio: args.bio,
          userId: newUser.id,
        },
      });
    }

    const token = await createToken(
      { userId: newUser.id },
      config.jwt.secret as string
    );

    return { token };
  },
  signin: async (
    parent: any,
    args: { email: string; password: string },
    { prisma }: any
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

    const token = await createToken(
      { userId: user.id },
      config.jwt.secret as string
    );

    return {
      error: null,
      token,
    };
  },
};
