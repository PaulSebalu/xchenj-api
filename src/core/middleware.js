/* eslint-disable consistent-return */
import env from "dotenv";

env.config();

// eslint-disable-next-line import/prefer-default-export
export const excludeMethods = (req, res, next) => {
  // NOTE: Exclude TRACE and TRACK methods to avoid XST attacks.
  const allowedMethods = [
    "OPTIONS",
    "HEAD",
    "CONNECT",
    "GET",
    "POST",
    "PUT",
    "DELETE",
    "PATCH",
  ];

  if (!allowedMethods.includes(req.method)) {
    res.status(405).send({
      error: `The request HTTP method, ${req.method}, is not allowed.`,
    });
  }

  next();
};
