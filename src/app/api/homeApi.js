export default function create(api) {
    const getServerTime = () => api.get('/api/test')

    return {
        getServerTime
    }
}
