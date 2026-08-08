import { api } from "../api";



export const healthApi = api.injectEndpoints({

    endpoints : (builder) => ({
        getHealth : builder.query<any,void>({
            query : () => '/health',
        })
    })
})



export const {useGetHealthQuery} = healthApi;