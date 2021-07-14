import React from 'react'
import styled from "styled-components"

import {BsSearch} from "react-icons/bs"
import {FaTimes} from "react-icons/fa"

import { useGlobaleContext } from '../context'

const Modal = () => {
    const {city , handleChange , handleSubmit , closeModal} = useGlobaleContext()
    return (
        <Wrapper id="modal">
            <button type="button" className="close" onClick={closeModal} > <FaTimes/> </button>
            <div className="content" >
                <h2>Search your city </h2>
                <form onSubmit={handleSubmit} >  
                    <input type="search" name="search" className="input-field" onChange={handleChange} value={city}  />
                    <button type="submit" className="submit btn" onSubmit={handleSubmit} > <BsSearch /> </button>
                </form>
            </div>
        </Wrapper>
    )
}

export default Modal

const Wrapper = styled.section`
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    z-index : 10;
    background-color: rgba(0,0,0,0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    animation: popup 0.5s ease-in-out;
    @keyframes popup {
        0%{
            opacity : 0;
        }100%{
            opacity : 1;
        }
    }
    @media (max-width : 695px){
        .submit{
            margin-top: 15px !important;
        }
    }
    .content {
        width: 80%;
        background-color: #FFF;
        text-align: center;
        padding: 50px;
        border-radius: 10px;
    }
    .content h2{
        margin-bottom: 15px;
        letter-spacing: 4px;
        text-transform: capitalize;
    }
    .close{
        position: absolute;
        top: 15px;
        right: 15px;
        background-color: #e63946;
        cursor: pointer;
        font-size: 20px;
        color: white;
        padding: 7px;
        border: none;
        border-radius: 5px;
        animation : poupout .5s linear;
    }
    form{
        margin-top: 15px;
        width: 100%;
    }
    form .input-field{
        width: 85%;
        padding: 12px 7px;
        font-size: 20px;
        letter-spacing: 3px;
        border: none;
        border-bottom: 1px solid #258;
        margin-right: 15px;
        outline: none;
    }
    form .submit{
        padding: 12px 12px;
        font-size: 20px;
    }
`