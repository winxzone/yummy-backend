import { Router } from "express";
import { Controller as SubscribeController } from "../controllers/subscribeController.js";
const router = new Router();

router.post("/", SubscribeController.create);
router.delete("/", SubscribeController.delete);
router.get("/", SubscribeController.get);

// export default router;
export { router as subscribeRouter };
