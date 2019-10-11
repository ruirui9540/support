import axios from "axios";
import VueCookies from 'vue-cookies';

let baseURL = '';
/*第一层if判断生产环境和开发环境*/
if (process.env.NODE_ENV === 'production') {
    /*第二层if，根据.env文件中的VUE_APP_FLAG判断是生产环境还是测试环境*/
    if (process.env.VUE_APP_TITLE === 'pro') {
        //production 生产环境
        axios.defaults.baseURL = 'http://api.xinggeyun.com';
    } else {
        //test 测试环境
        axios.defaults.baseURL = 'http://192.168.0.152:8102/test';
    }
} else {
    //dev 开发环境
    axios.defaults.baseURL = 'http://192.168.0.152:8102/dev';
}
console.log(axios.defaults.baseURL)
// if (location.host.indexOf('uniondrug.cn') > -1) {
//     baseURL = 'https://web-backend.uniondrug.cn';
// } else if (location.host.indexOf('uniondrug.net') > -1) {
//     baseURL = 'https://web-backend.uniondrug.net'
// } else if (location.host.indexOf('turboradio.cn') > -1) {
//     baseURL = 'https://web-backend.turboradio.cn'
// } else if (location.host.indexOf('localhost') > -1) {
//     baseURL = 'https://web-backend.turboradio.cn'
// } 

const post = (url, params) => {
    axios.defaults.withCredentials = true;
    axios.defaults.timeout = 60000;
    const Authorization = 'Authorization';
    axios.defaults.headers.common[Authorization] = 'Bearer ' + VueCookies.get('openId');
    return new Promise((resolve, reject) => {
        axios.post(url, params)
            .then((response) => {
                // 未登录拦截
                resolve(response.data);
            }, (err) => {
                reject(err);
            })
            .catch((error) => {
                reject(error);
            });
    });
};

const get = (url) => {
    axios.defaults.withCredentials = true;
    axios.defaults.timeout = 60000;
    const Authorization = 'Authorization';
    axios.defaults.headers.common[Authorization] = 'Bearer ' + VueCookies.get('openId');
    return new Promise((resolve, reject) => {
        axios.get(url)
            .then((response) => {
                resolve(response.data);
            }, (err) => {
                reject(err);
            })
            .catch((error) => {
                reject(error);
            });
    });
};

export default {
    post,
    get,
};