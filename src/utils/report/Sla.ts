import { formatDistanceStrict, format, getHours, getMinutes } from 'date-fns'

async function handleSlaTransfer(service_type: string, realTimeAvailable: any, estimatedTimeAvailable: any) {
    if (service_type.toUpperCase() !== 'FRACIONADO') {
        return '-'
    }
    const handleRealTime: any = format(new Date(2020, 1, 1, getHours(realTimeAvailable), getMinutes(realTimeAvailable)), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx")
    const handleEstimatedTime: any = format(new Date(2020, 1, 1, getHours(estimatedTimeAvailable), getMinutes(estimatedTimeAvailable)), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx")
    const diffBetweenRealAndEstimatedTime = formatDistanceStrict(new Date(handleRealTime), new Date(handleEstimatedTime), { unit: 'minute' })

    if (parseInt(diffBetweenRealAndEstimatedTime.split(" ")[0]) <= 60) {
        return '100%'
    } else {
        return '0%'
    }

}

async function handleSla(addresses: any, collectHourEnd: any){
    
}


export { handleSlaTransfer, handleSla}