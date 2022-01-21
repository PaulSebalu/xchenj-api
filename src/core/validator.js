// eslint-disable-next-line consistent-return
const schemaValidator = async (req, res, next, schema) => {
  try {
    const values = await schema.validateAsync(
      { ...req.body },
      { abortEarly: false }
    );

    req.body = { ...values };

    next();
  } catch (error) {
    const formattedError = Object.assign(
      {},
      ...error.details.map((err) => ({
        [err.context.label]: err.message.replace(/"/g, ""),
      }))
    );
    return res.status(400).json({ error: formattedError });
  }
};

export default schemaValidator;
