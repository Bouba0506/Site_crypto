import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query"
const createheads={
  'X-RapidAPI-Key': 'f3a94a2f1emsh6b885003724d986p147eecjsnb9bef290f6b8',
  'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}
const baseUrl='https://coinranking1.p.rapidapi.com/coins'
const createR=(url)=>({url,headers:createheads})

export const crypto=createApi({
  reducerPath:'crypto',
  baseQuery:fetchBaseQuery({baseUrl}),
  endpoints:(builder)=>({
    getCrypto:builder.query({
      query:()=> createR("/echanges")
    })
  })
})
export const{
  useGetCryptoQuery,
}=createApi;
