const unknownEndpoint = (req, res) => {
  res.status(404).send({ error: "unknown endpoint" });
};

const errorHandler = (error, req, res, next) => {
  // this happens if we use a wrong form of id
  if (error.name === "CastError") {
    return res.status(400).send({ error: "malformatted id" });
  }
  // this happens if in our post request we dont give the proper values
  if (error.name === "ValidationError") {
    return res.status(400).json({ error: error.message });
  }
  next();
};

module.exports = { unknownEndpoint, errorHandler };
