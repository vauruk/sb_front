export interface IHttpClientRequestParameters<T> {
    path: string;
    token: string | undefined;
    payload?: T;
}
