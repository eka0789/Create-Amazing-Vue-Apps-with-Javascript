const app = Vue.createApp({
  data() {
    return {
      someValue: "Created"
    }
  },
  created() {
    console.log(this.someValue)
  }
})
