const app = Vue.createApp({
  data() {
    return {
      sampleString: "Hello "
    }
  },
  methods: {
    addToString() {
      this.sampleString += "Hello "
    }
  }
})

const componentInstance = app.mount("#app")

console.log(componentInstance.sampleString)

componentInstance.addToString()
componentInstance.addToString()
componentInstance.addToString()
componentInstance.addToString()

console.log(componentInstance.sampleString)