import { API_URL } from "@/common/config";

export const APISettings = {
    token: '',
    headers: new Headers({
        'Accept': 'application/json'
    }),
    baseURL: API_URL,
}