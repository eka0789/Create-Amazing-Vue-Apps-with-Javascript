const app = Vue.createApp({
  data() {
    return {
      value: 0
    }
  }
})

const appInstance = app.mount("#app")

console.log(appInstance.$data.value)

appInstance.value = 10000

console.log(appInstance.$data.value)

appInstance.$data.value = 5555

console.log(appInstance.value)