import axios, { AxiosRequestConfig } from 'axios';
import { IHttpClientRequestParameters } from './types';
import { Config } from '../config';

const optionsAuth = (token: string): AxiosRequestConfig => {
    return {
        baseURL: Config.apiURL,
        timeout: 30000,
        headers: {
            'Content-Type': 'application/json',
            Autorization: `Bearer ${token}`,
        },
    };
};
const optionsNoAuth = (): AxiosRequestConfig => {
    return {
        baseURL: Config.apiURL,
        timeout: 30000,
        headers: {
            'Content-Type': 'application/json',
        },
    };
};
/**
 * @author Vanderson de Moura Vauruk
 *
 */
export default class HttpClient {
    static post<T, U>(parameters: IHttpClientRequestParameters<T>): Promise<U> {
        return new Promise<U>((resolve, reject) => {
            const { path, payload, token } = parameters;
            const options: AxiosRequestConfig = token
                ? optionsAuth(token)
                : optionsNoAuth();

            axios
                .post(path, payload, options)
                .then((response: any) => {
                    resolve(response.data);
                })
                .catch((error: any) => reject(error));
        });
    }
    static get<T, U>(parameters: IHttpClientRequestParameters<T>): Promise<U> {
        return new Promise<U>((resolve, reject) => {
            const { path, token } = parameters;
            const options: AxiosRequestConfig = token
                ? optionsAuth(token)
                : optionsNoAuth();
            axios
                .get(path, options)
                .then((response: any) => {
                    resolve(response.data);
                })
                .catch((error: any) => reject(error));
        });
    }
}
