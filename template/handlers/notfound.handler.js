const notFoundHandler = (req, res, next) => {
  let error = new Error('Resource does not exist');
  error.status = 404;
  throw error;
};

export default notFoundHandler;
