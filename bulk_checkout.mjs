import fetch from 'node-fetch';

//before run this script chnage
//change file  /app/Http/Middleware/VerifyCsrfToken.php
//in cmsrs3 repo
//disable-csrf-token-in-laravel
//https://stackoverflow.com/questions/37806762/how-to-disable-csrf-token-in-laravel-and-why-we-have-to-disable-it


const url =  'http://127.0.0.1:8000/post/checkout';
//const endpoints = [url , url, url];
let endpoints = [];
for( let i=0; i<10; i++){
    endpoints.push( url );
}

//console.log(  endpoints );

const data = {
    '_token': 'QZu4Otv3ecTWdCpgaEgRozpYNSpi8zm4LvqzEmPY',
    'products': [
        {
            'id': 1,
            'qty': 15
        },
        {
            'id': 2,
            'qty': 25
        },
        {
            'id': 3,
            'qty': 25
        },
        {
            'id': 4,
            'qty': 25
        },
        {
            'id': 5,
            'qty': 25
        },
        {
            'id': 6,
            'qty': 25
        },
        {
            'id': 7,
            'qty': 25
        },
        {
            'id': 8,
            'qty': 25
        },
        {
            'id': 9,
            'qty': 25
        },
        {
            'id': 10,
            'qty': 25
        },
        {
            'id': 11,
            'qty': 25
        },
        {
            'id': 12,
            'qty': 25
        }
    ],
    'lang': 'en',
    'email': 'client@cmsrs.pl',
    'first_name': 'Jan',
    'last_name': 'Kowalski',
    'address': 'kolejowa 1 m 2',
    'country': 'Polska',
    'city': 'Warszawa',
    'telephone': '1234567123',
    'postcode': '03-456',
    'deliver': 'dpd_courier',
    'payment': 'cash'
};

//console.log( data );


async function run( endpoints, data  ) {
    try {
        const responses = await Promise.all(
            endpoints.map(async u => {
                const time = new Date();
                //console.log(time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());
                //console.log(time);

                const res = await fetch(u, {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: { 'Content-Type': 'application/json'}
                });
            })
        );
    } catch (error) {
        console.log(error);
    }
}

//console.log(endpoints );
run(endpoints, data  );
