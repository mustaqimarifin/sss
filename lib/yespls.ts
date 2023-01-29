import axios from 'axios';
export const yespls = (url: string) => axios.get(url).then((res) => res.data);
