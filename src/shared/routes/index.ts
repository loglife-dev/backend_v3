import { Router } from "express";

import { hubRoutes } from "./hub.routes";

const router = Router();


router.use("/hub", hubRoutes);

export { router }