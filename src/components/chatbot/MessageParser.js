class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.actionProvider = actionProvider
    }
    parse(message) {
      console.log(message);
      const lowercase = message.toLowerCase();
  
      if (lowercase.includes("iphone")) {
        this.actionProvider.greet();
      }

    }
}
    

export default MessageParser;