import { apiSlice } from "./apiSlice";

const API_URL = "recipe/auth"
const DISH_URL = "recipe/"

// whats reducerPath ?


export const UsersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder)=>(   {
        login: builder.mutation({

            query: (data)=> ({
                url: `${API_URL}`,
                method:'POST',
                body: data,
                
            })
        }),
        register: builder.mutation({
            query: (data)=>({
                url: `${API_URL}/register`,
                method: "POST",
                body :  data
            })
        }),
        logout: builder.mutation({
            query: () => ({
                url: `${API_URL}/logout`,
                method: "POST"
            })
        }),
        update: builder.mutation({
            query: (data) =>({
                method: "PUT",
                body: data,
                url: `${API_URL}/users/update`,
                invalidateTags: ['User'],
                
            })
        }),
        createDish: builder.mutation({
            query: (dish)=> ({
                url:`${DISH_URL}/create-dish`,
                method:"POST",
                body: dish,
            })
        })   
    })
    
})


export const {useLoginMutation, useLogoutMutation, useRegisterMutation, useUpdateMutation, useCreateDishMutation } = UsersApiSlice
