import { ATHLETICS_API_URl } from './endpoints';


export const get = async({ url }) => {
    const method = 'GET';
    return (
        await fetch(`${ATHLETICS_API_URl}${url}`, {
            method,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
        })
    ).json();
};