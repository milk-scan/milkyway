import moment from 'moment'

export const greetings = () => {
    const currentHour = +moment().format('HH')
    const morning = 6
    const noon = 12
    const night = 18
    const midnight = 0

    if(currentHour>= morning && currentHour<noon) return "Bom dia"
    if(currentHour>=noon && currentHour<night) return "Boa tarde"
    if(currentHour>=midnight && currentHour<morning) return "Boa madrugada"

    return "Boa noite"
}