import { Router } from "express";
import { hubRoutes } from "./hub.routes";
import { cityRoutes } from "./city.routes";
import { customerRoutes } from "./customer.routes";
import { permissionRoutes } from "./permission.routes";
import { collectorRoutes } from "./collector.routes";
import { driverRoutes } from "./driver.routes";
const router = Router();

router.use("/hub", hubRoutes);
router.use("/city", cityRoutes);
router.use("/customer", customerRoutes);
router.use("/permission", permissionRoutes);
router.use("/collector", collectorRoutes);
router.use("/driver", driverRoutes)
export { router }
