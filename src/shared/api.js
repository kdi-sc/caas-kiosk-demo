import axios from 'axios';

export function getAllItems() {
    return axios.get('https://content-hub-cdn.azureedge.net/wawa-menu-34058.json', 
    {headers: {"Access-Control-Allow-Origin": "https://sitecore-kiosk-demo.herokuapp.com/"}});
}