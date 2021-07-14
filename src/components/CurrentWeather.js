import React  from 'react'
import styled from 'styled-components'

import Loading from './Loading'
import Modal from './Modal'
import Error from './Error'

import { useGlobaleContext } from '../context'
import moment from 'moment'

import {BsSearch} from "react-icons/bs"



const CurrentWeather = () => {

    const {weathers , isLoading , error , openModal , isMoadlOpened} = useGlobaleContext()
    let {dt , main , name , sys , weather} = weathers
    const icon = weather ? weather[0].icon : ""
    const desc = weather ? weather[0].description : ""

    const date = moment.unix(dt).format("MM/DD/YYYY hh:mm a")
    
    if (isLoading) {
        return <Loading />
    }
    return (
        <Wrapper className="hero">
            {isMoadlOpened && <Modal />}
            <header className="header" >
                <button className="btn" onClick={openModal} > <BsSearch /> </button>
                <h2 className="city" >{name}</h2>
            </header>
            <div className="date" >
                <h1>{date}</h1>
            </div>
            <div className="temp-info" >
                <h1 className="temp" >{main ? Math.floor(main.temp) : ""} C°</h1>
                <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="weather" className="icon" width="150" height="150" />
                <h2 className="temp-desc" >{desc}</h2>
            </div>
            <div className="weather-info" >
                <div>
                    <h4>Sunset</h4>
                    <span>{sys ? moment.unix(sys.sunset * 1000).format("hh:mm a") : ""}</span>
                </div>
                <div className="middle" >
                    <h4>Humidity</h4>
                    <span>{main ? main.humidity : ""} %</span>
                </div>
                <div>
                    <h4>Tempurature</h4>
                    <span>{`${main ? main.temp_min + "C° / " + main.temp_max + "C°" : '' }`}</span>
                </div>
            </div>
            {
                error.isError ? <Error /> : null
            }
        </Wrapper>
    )
}

export default CurrentWeather

const Wrapper = styled.section`
    width: 100%;
    height: 350px;

    @media (max-width : 960px){
        .city{
            font-size: 2rem !important;
        }
        .date{
            font-size: 1rem !important;
        }
    }

    @media (max-width : 830px){
        .weather-info div h4{
            font-size: 15px !important;
        }
    }

    @media (max-width : 550px){
        .weather-info{
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        .weather-info div{
            text-align: center;
            width: 100%;
        }
        .weather-info div.middle{
            border: none !important;
        }
    }

    .header{
        width: 85%;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px;
        margin: 20px;
        width: 100%;
    }
    .city{
        width: 62%;
        font-size: 2.5rem;
        font-weight: bold;
        color: #495057;
    }
    .btn{
        padding: 14px 12px;
        cursor: pointer;
        border: none;
        border-radius: 5px;
        background-color: #014f86;
        color: #FFF;
        font-size: 19px;
        font-weight: bold;
    }
    .date{
        text-align: center;
        text-transform: uppercase;
        letter-spacing: 5px;
        font-size: 1.5rem;
    }
    .temp-info{
        text-align: center;
        margin-top: 20px;
    }
    .temp{
        font-size: 5rem;
        letter-spacing: 3px;
    }
    .temp-desc{
        font-size: 2rem;
        font-weight: 300;
    }
    .icon{
        width: 100px;
        height: 100px;
    }
    .weather-info {
        width: 100%;
        display: flex;
        justify-content: center;
        text-align: center;
        margin-top: 50px;
        padding: 50px;
    }
    .weather-info div{
        width: 33%;
        margin: 15px 0;
        text-align: center;
        margin-left: 10px;
    }
    .weather-info div h4{
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 3px;
        margin-bottom: 10px;
        font-size: 18px;
    }
    .weather-info div span{
        font-size: 17px;
        text-transform: uppercase;
        letter-spacing: 3px;
    }
    .weather-info div.middle{
        border-right: 1px solid rgba(73, 80, 87, 0.5);;
        border-left: 1px solid rgba(73, 80, 87, 0.5);;
    }
    
`