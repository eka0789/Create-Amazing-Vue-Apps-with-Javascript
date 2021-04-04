const app = Vue.createApp({
  data() {
    return {
      valueToReturn: "Hello"
    }
  }
})

const appInstance = app.mount("#app")

console.log(appInstance.valueToReturn)

