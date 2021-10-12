export const fetchData = (API, requestOptions, onSuccess, onFail) =>
    fetch(API, requestOptions).then(response => {
        if (response.status.toString().startsWith("20")) {
            if (response.status.toString() === "204")
                return response.text().then(onSuccess)
            return response.json().then(onSuccess)
        } else {
            return response.json().then(onFail)
        }
    }).catch(onFail);
