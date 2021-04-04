Vue.createApp({
  data() {
    return {
      catObject: {
        breed: "Tabby",
        hungry: true,
        lives: 2
      }
    }
  }
}).mount("#cat-list")