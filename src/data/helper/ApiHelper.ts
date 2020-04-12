
export default class ApiHelper {
    static async get(url:string, token:string, page: number) {
        let formatedUrl = formatUrl(url, page);
        return fetchRequest("GET", formatedUrl, token);
    }
}

const INITIAL_HEADERS = {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
};

function formatUrl(url:string, page: number){
    let urlParams = new URLSearchParams();
    urlParams.append('page', page.toString());
    
    return `${url}?${urlParams}`;
}

function createTokenHeaders(token:string) {
    return {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json"
    };
}
function createRequest(method:string, token:string, headers = INITIAL_HEADERS) {
    return {
        method,
        headers: token ? createTokenHeaders(token) : headers
    };
}

async function fetchRequest(method:string, url:string, token:string) {
    
    const fetchRequest = fetch(url, createRequest(method, token));
    return fetchRequest.then(response => handleErrors(response)).then(response => handleJSON(response));
}


async function handleErrors(response:Response) {
    if (response.ok) {
        return response;
    } else {
        throw response;
    }
}

async function handleJSON(response:Response) {
    
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.indexOf("application/json") !== -1) {
        return response.json();
    } else {
        return response;
    }
}
