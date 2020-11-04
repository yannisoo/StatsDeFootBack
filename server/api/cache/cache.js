var mcache = require('memory-cache');

 exports.cache = function (duration) {
  return (req, res, next) => {
    let key = '__express__' + req.originalUrl || req.url
    let cachedBody = mcache.get(key)
    if (cachedBody) {
      res.send(cachedBody)
      return
    } else {
      res.sendResponse = res.send
      res.send = (body) => {
        mcache.put(key, body, duration * 1000);
        res.sendResponse(body)
      }
      next()
    }
  }
}
  exports.clear = function () {
    return (req, res, next) => {
        mcache.clear()
        return res.status(200).send({ok: true});
    }
    }
