import axios from 'axios';

export function getAllItems() {
    return axios.get('https://sitecorestatic.blob.core.windows.net/content-hub-blobs/wawa-menu-34058.json', 
    {headers: {'Access-Control-Allow-Origin': 'https://sitecore-kiosk-demo.herokuapp.com/'}});
}