const app = Vue.createApp({})

app.directive("focus", {
  mounted(el) {
    el.focus()
  }
})

app.mount("#input-div")