function notFoundHandle(req, res) {
  res.error(`Cannot GET ${req.method} ${req.url}`, 404);
}

module.exports = notFoundHandle;
