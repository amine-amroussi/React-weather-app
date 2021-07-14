import React , {useContext , useState , useEffect} from 'react'
import axios from "axios"

const Context = React.createContext();

const getLocalStorage = () => {
    let city = localStorage.getItem("city")
    if (city) {
        console.log(city);
        return city
    }else{
        return "Nador"
    }
}

export const ContextProvider = ({children}) => {

    const [weathers , setWeathers] = useState([])
    const [error , setError] = useState({isError : false , msg : ""})
    const [isLoading , setIsLoading] = useState(false)
    const [city , setCity] = useState(getLocalStorage())
    const [isMoadlOpened , setIsMoadOpened] = useState(false)

    const handleChange = (e) => {
        setCity(e.target.value)
    }

    const openModal = ()=> {
        setIsMoadOpened(true)
    }

    const closeModal = () => {
        setIsMoadOpened(false)
    }

    const getWeathers = async (url) => {
        setIsLoading(true)
        try {
            const response = await axios.get(url)
            const weatherData = response.data
            setWeathers(weatherData)
            setError({isError :false , msg:""})
            setIsLoading(false)
        } catch (error) {
            setIsLoading(false)
            setError({isError : true , msg : "We can't find your location !!!"})
        }
    }

    useEffect(()=> {
        getWeathers(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
        // eslint-disable-next-line
    } , [])

    const handleSubmit = (e) => {
        e.preventDefault();
        getWeathers(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
        localStorage.setItem("city" , city)
        closeModal()
        setCity("")
    }

    return (

        <Context.Provider value={{
            city,
            weathers,
            isLoading,
            error,
            openModal,
            closeModal,
            isMoadlOpened,
            handleChange,
            handleSubmit
        }} >
            {children}
        </Context.Provider>
    )
}

export const useGlobaleContext = () => {
    return useContext(Context);
}