import { Router } from "express";
import { hubRoutes } from "./hub.routes";
import { cityRoutes } from "./city.routes";

const router = Router();

router.use("/hub", hubRoutes);
router.use("/city", cityRoutes);

export { router }
