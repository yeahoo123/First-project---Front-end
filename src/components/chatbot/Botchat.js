import React, { useState, useEffect } from 'react'
import Logo from './message.ico'
import './Botchat.css'
import Botchat from "react-chatbot-kit";
import config from './config'
import MessageParser from './MessageParser'
import ActionProvider from './ActionProvider'
function ChatbotContainer(){
    const [modal,setModel]= useState(true)
    
    return(
            <div className="card">
                <div className="botchat" style={{display: modal ? 'none' : 'block'}} >
                <Botchat
                    config={config}
                    messageParser={MessageParser}
                    actionProvider={ActionProvider}
                    headerText ={"Bạn đang chat với AI của shop"}
                    inputText={"a"}
                />
                    <p className="closebtn" onClick={()=>setModel(true)}>X</p>
                </div>
                <div className="icon-message" style={{display: modal ? 'block' : 'none'}}>
                    <img style={{width: "50px",height:'50px'}} src={Logo} alt="icon-message" onClick={()=>setModel(false)}/>
                </div>
            </div>
    )
}

export default ChatbotContainer
