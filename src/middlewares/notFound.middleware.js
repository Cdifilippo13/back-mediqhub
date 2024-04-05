
export const NotFoundMiddleware = (req, res, next) =>
	res.status(404).send(new Response(404, "No encontrado"));