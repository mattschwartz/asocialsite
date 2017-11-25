import apisauce from 'apisauce'
import homeApi from './homeApi'

const BASE_URI = 'http://localhost:49878'

function create() {
    const api = apisauce.create({
        baseURL: BASE_URI,
        headers: {
            'Cache-Control': 'no-cache',
            'Accept': 'application/json'
        },
        timeout: 3 * 60 * 1000 // 3 minutes
    })

    return {
        ...homeApi(api)
    }
}

export const api = create()
