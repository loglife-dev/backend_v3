import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetReportSlaUseCase } from "./ReportSlaUseCase";

class ReportSlaController {
    async handle(request: Request, response: Response): Promise<Response> {
    const { startFilter, endFilter } = request.body;
    const getReportSlaUseCase = container.resolve(GetReportSlaUseCase)

    const get = await getReportSlaUseCase.execute({
        startFilter,
        endFilter
    })
    return response.json(get)
    }
}

export { ReportSlaController }