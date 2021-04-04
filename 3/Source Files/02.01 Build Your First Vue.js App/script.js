const YourFirstVueApp = {
  data() {
    return {
      text: "This is my first app."
    }
  }
}

Vue.createApp(YourFirstVueApp).mount("#firstVueApp")