import { Router } from "express";
import { ReportSlaController } from "../../../../modules/service/useCases/get/report/sla/reportSlaController";


const slaReportRoutes = Router();
const reportSla = new ReportSlaController();

slaReportRoutes.post("/", reportSla.handle)

export { slaReportRoutes }