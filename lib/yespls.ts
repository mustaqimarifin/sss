import axios from 'axios';
export const yespls = (url) => axios.get(url).then((res) => res.data);
