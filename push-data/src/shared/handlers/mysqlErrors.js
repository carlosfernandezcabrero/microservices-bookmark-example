const handlerError = (error) => {
  let message
  let httpCode

  if (error.code === 'ER_DUP_ENTRY') {
    message = 'Duplicate entry'
    httpCode = 400
  } else {
    message = 'Internal server error'
    httpCode = 500
  }
  return { message, httpCode }
}

module.exports = {
  handlerError,
}
