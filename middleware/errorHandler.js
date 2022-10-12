module.exports = (err, req, res, next) => {
    if (err.status) {
      res.status(err.status).json({
        message: err.msg
      })
    } else if (err.type) {
      res.status(400).json({
        message: err.err
      })
    }
    else {
      res.status(500).json({
        message: 'Internal Server Error'
      })
      console.log(err)
    }
  }