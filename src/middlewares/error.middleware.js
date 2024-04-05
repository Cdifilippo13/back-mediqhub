import config from '../config/config.js';

export const ErrorMiddleware = (err, req, res, next) => {
  const httpStatus = err.httpStatus || 500;
  let errorMessage =
    httpStatus === 500 && config.NODE_ENV != 'development'
      ? 'Unspected error has ocurred, please contact the administrator.'
      : err.message;

  if (config.NODE_ENV == 'development') {
    console.log(err);
  }

  return res
    .status(httpStatus)
    .send(new Response(httpStatus, errorMessage, null));
};