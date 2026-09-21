import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    vus: 20,
    duration: '1m',
};

export default function () {
    http.post('http://localhost:3000/cart/add', null, {
        tags: { name: 'cart' },
    });
    sleep(1);
}