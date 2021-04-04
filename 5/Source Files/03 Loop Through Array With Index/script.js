Vue.createApp({
  data() {
    return {
      items: [
        {content: "Hello"},
        {content: "Hi"},
        {content: "Hey"}
      ]
    }
  }
}).mount("#to-loop-list")