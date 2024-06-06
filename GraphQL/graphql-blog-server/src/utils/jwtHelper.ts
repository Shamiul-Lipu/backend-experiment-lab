import jwt, { Secret } from "jsonwebtoken";

export const createToken = async (
  payload: { userId: number },
  secret: Secret
) => {
  const token = jwt.sign(payload, secret, { expiresIn: "1h" });
  return token;
};
