import { writable, readable, Writable } from 'svelte/store';

function get(key: string, def: any = "", parse: boolean = false): any {
    const value = localStorage.getItem(key);
    if (!parse) return value || def;
    if (value === null) return def;
    return JSON.parse(value);
}

const storedMode: string = get("mode", "light");
export const mode = writable(storedMode);
mode.subscribe((value) => {
    localStorage.setItem("mode", value)
});

const storedToken: string = get("token");
export const token = writable(storedToken);
token.subscribe((value) => {
    localStorage.setItem("token", value)
});


export const endpoint = readable("http://localhost:80");
export const cdn_endpoint = readable("http://localhost:80");


export const images: Writable<Array<string>> = writable([]);
export function fetch_images(endpoint: string, token: String) {
    fetch(`${endpoint}/list/imgs/${token}`).then((res) =>
        res.json().then(data => images.set(data))
    )
}



