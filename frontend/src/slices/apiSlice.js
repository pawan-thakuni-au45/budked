
import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
//fetfhBaseQuery is the function that allow us to make request to backend api 

import { BASE_URL } from '../constant'


const baseQuery=fetchBaseQuery({baseUrl:BASE_URL})

export const apiSlice=createApi({
    baseQuery,
    tagTypes:['Product','Order','User'],
    //by using this we dont have to do things manully like we dont have to fetch and use try catch block manully ,we can do all this through builder
     endpoints:(builder)=>({})
})

