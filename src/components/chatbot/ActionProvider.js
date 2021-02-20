class ActionProvider {
    constructor(createChatBotMessage, setStateFunc){
        this.createChatBotMessage = createChatBotMessage
        this.setStateFunc = setStateFunc
    }


greet = () =>{
    const message = this.createChatBotMessage("đây là sản phẩm bạn có thể tìm")
    this.addMessageToState(message)
}


addMessageToState = (message) => {
    this.setStateFunc((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };

}
export default ActionProvider