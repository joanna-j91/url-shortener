const BASE62 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

const shortToLong = new Map();
const longToShort = new Map();

let counter = 1;

const BASE_URL = 'http://tinyurl/';

function encode(longUrl){
    const shortKey = convertToBase62(counter);
    counter ++;

    shortToLong.set(shortKey, longUrl);

    return BASE_URL + shortKey;
}

function convertToBase62(num){
    let result = '';
    while(num > 0){
        const remainder = num% 62;
        result = BASE62[remainder] + result;
        num = Math.floor(num/62);
    }
    return result;
}