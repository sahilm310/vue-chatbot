function randNum(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
const app = Vue.createApp({
    data() {
        return {
            replies: [
                "Hi, how are you?",
                "That's great!",
                "This is just dummy text, I'm not intelligent...",
                "How is your day going?",
            ],
            chatlog: [{ sender: "John", message: "Hi, how are you?", className: "chat--bot" }],
            inputText: "",
        }
    },
    computed: {
        buttonCaption(){
            if(this.inputText === ""){
                return "Enter";
            } else{
                return "Send";
            }
        }
    },
    methods: {
        addToChat(who, message, styleClass) {
            this.chatlog.push({
                sender: who,
                message: message,
                className: styleClass
            });
        },
        sendText() {
            this.addToChat("Me", this.inputText, "chat--me");
            this.inputText = '';
            const replyNum = randNum(0, this.replies.length);
            this.addToChat('John', this.replies[replyNum], "chat--bot");
        },
    }

})

app.mount('#app')