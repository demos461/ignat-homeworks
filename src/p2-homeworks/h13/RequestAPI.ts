import axios from "axios";

export const testRequest = (checked: boolean) => {
    return axios.post('https://neko-cafe-back.herokuapp.com/auth/test', {success: checked})
        .then((res) => res.data.errorText)
        .catch(error => {
            return error.response ? error.response.data.errorText : error.message
        })
}

