const getParam = (param) => new URL(document.location).searchParams.get(param);

const genericFetch = async (url, msgErr = 'Failed to fetch', method = 'GET', headers = {}) => {
    try {
        const response = await fetch(url, { method, headers });
        return response.json()
    } catch (err) {
        document.querySelector("#msg-err").innerHTML = msgErr;
    }
}

export { getParam, genericFetch };