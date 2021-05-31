


// defining the SendPostRequest function
const SendPostRequest = async (method, url, data, headers) => {

    axios (
        {
            method,
            url,
            data,
            headers
        }
    ).then ((response) => {
        return response;
    }).catch ((error) => {
        return new Promise ((resolve, reject) => { reject (error); })
    })

}

export {
    SendPostRequest
}