
import { USERS_URL } from "../constant";
import { apiSlice } from "./apiSlice";

export const usersApiSlice=apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        login:builder.mutation({ //we user mutaion because we are just not fetchinf data we are authenticate we making post req 
            query:(data)=>({
                url:`${USERS_URL}/auth`,
                method:POST,
                body:data,
            }),
           
        }),

      
           
      

    })
})

export const {useLoginMutation}=usersApiSlice