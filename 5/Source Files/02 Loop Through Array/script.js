Vue.createApp({
  data() {
    return {
      items: [
        { content: "Item here"},
        { content: "Item there"}
      ]
    }
  }
}).mount("#to-loop-list")