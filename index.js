const BASE62 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

const shortToLong = new Map();

let counter = 1;

const BASE_URL = 'http://tinyurl/';

const longUrl = document.getElementById("input_link");

const result = document.getElementById("shortened_link");


function encode(){
    const url = longUrl.value;

    if(!url){
        result.textContent = "please enter a URL :P";
        return
    }

    const shortKey = convertToBase62(counter);
    counter++;

    shortToLong.set(shortKey, url);

    result.textContent = BASE_URL + shortKey;
}

function convertToBase62(num){
    let result_ = '';
    while(num > 0){
        const remainder = num% 62;
        result_ = BASE62[remainder] + result_;
        num = Math.floor(num/62);
    }
    return result_;
}