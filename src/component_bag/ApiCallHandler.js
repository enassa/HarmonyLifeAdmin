import axios from 'axios';
class ApiCallHandler {
    static getRequest(url, config) {
        axios.get(url, {headers: config}).then((response) => {
            // console.log(response)
            return response;
        }).catch((error) => {})
    }
    static postRequest(url, data, config) {
        axios.get(url, data, {headers: config}).then((response) => {
            return response
        }).catch((error) => {
            return error;
        })
    }
    static putRequest(url, data, config) {
        axios.get(url, data, {headers: config}).then((response) => {
            return response
        }).catch((error) => {
            return error;
        })
    }
    static patchRequest(url, data, config) {
        axios.get(url, data, {headers: config}).then((response) => {
            return response
        }).catch((error) => {
            return error;
        })
    }
}
export default ApiCallHandler;
/**
   * @async
   * Used when getting data from a url
   * @param {String} URL
   * @param {String} method GET || POST
   * @param {object} data request body
   * @returns {Promise}
 */
