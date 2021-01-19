import axios from 'axios';

export function getAllItems() {
    return axios.get('https://content-hub-cdn.azureedge.net/wawa-menu-34058.json');
}