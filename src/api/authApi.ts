import { APIStatus } from "../types";

interface Credentials {
    username: string;
    password: string;
}

export const AuthApi = {
    login: async ({ username, password }: Credentials): Promise<APIStatus> => {
        try {
            // TODO: make a request to the server to login
            return APIStatus.Success;
        } catch (e) {
            return handleError(e);
        }
    },
    signUp: async ({ username, password }: Credentials): Promise<APIStatus> => {
        try {
            // TODO: make a request to the server to sign up
            return APIStatus.Success;
        } catch (e) {
            return handleError(e);
        }
    },
    logout: async (): Promise<APIStatus> => {
        try {
            // TODO: make a request to the server to logout
            return APIStatus.Success;
        } catch (e) {
            return handleError(e);
        }
    },
    getUserName: async (): Promise<string | APIStatus> => {
        try {
            // TODO: make a request to the server to get the username
            // return the username
            return 'username';
        } catch (e) {
            return handleError(e);
        }
    },
};

const handleError = async (e: unknown): Promise<APIStatus> => {
    // TODO: handle errors here, check status code and return the appropriate APIStatus
    return APIStatus.ServerError;
};