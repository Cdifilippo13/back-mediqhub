import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
	res.status(200).send({ status: 200, message: "hola mundo mediq" });
});

export default router;