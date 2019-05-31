export interface Route {
    method: 'delete' | 'post' | 'get' | 'put';
    path: string;
    action: any;
};