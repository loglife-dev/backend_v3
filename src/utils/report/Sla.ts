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

async function handleSla(addresses: any, collectHourEnd: any) {
    let sla = 0;

    const handleCollectHourEnd: any = format(new Date(2020, 1, 1, getHours(collectHourEnd), getMinutes(collectHourEnd)), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx")
    addresses.map(address => {
        if (address.step === 'DONE') {
            const handleDepartureTime: any = format(new Date(2020, 1, 1, getHours(address.departure_timestamp), getMinutes(address.departure_timestamp)), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx")
            const diffBetweenCollectHourEndAndDepartureTime = formatDistanceStrict(new Date(handleCollectHourEnd), new Date(handleDepartureTime), { unit: 'minute' })

            if (parseInt(diffBetweenCollectHourEndAndDepartureTime.split(" ")[0]) <= 60) {
                sla += 100
            } else {
                sla += 0
            }
        }

    })
    return `${sla / addresses.length}%`
}

export { handleSlaTransfer, handleSla }