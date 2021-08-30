import { Router } from "express";
import { hubRoutes } from "./hub.routes";
import { cityRoutes } from "./city.routes";
import { customerRoutes } from "./customer.routes";

const router = Router();

router.use("/hub", hubRoutes);
router.use("/city", cityRoutes);
router.use("/customer", customerRoutes)

export { router }
