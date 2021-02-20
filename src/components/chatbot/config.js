import React from 'react'
import { createChatBotMessage } from "react-chatbot-kit";

const config = {
    botName: "AI",
    lang:"vietnamese",
    headerText: "Bạn đang chat với ",
    initialMessages: [createChatBotMessage(`Bạn cần tìm thông tin gì`)],
    widgets: [{
        widgetName: "overview",
        
    }]
}

export default config