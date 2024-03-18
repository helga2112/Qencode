// eslint-disable-next-line @typescript-eslint/no-unused-vars
import axios, { AxiosError } from "axios"
import { useEffect, useState } from "react"

interface Responce  {
    data:  any | undefined
    isLoading: boolean
    isLoaded: boolean
    isLoadError: boolean
    errorMessage: string
}

export const useLoadData = (endpoint: string): Responce => {
    const [data, setData] = useState(undefined)
    const [isLoading, setIsLoading] = useState(true)
    const [isLoaded, setIsLoaded] = useState(false)
    const [isLoadError, setIsLoadError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')


    useEffect(()=> {
        const load = async() => {
        try{
            const resp = await axios.get(endpoint)
            setData(resp.data)
            setIsLoading(false)
            setIsLoaded(true)
    
        }catch(err){
            setIsLoading(false)
            if(axios.isAxiosError(err)){
                setErrorMessage((err as AxiosError).message)
            }
            setIsLoadError(true)
        }
    }

    load()
    },[])

   
    return {
        data,
        isLoading,
        isLoaded,
        isLoadError,
        errorMessage
    }
}