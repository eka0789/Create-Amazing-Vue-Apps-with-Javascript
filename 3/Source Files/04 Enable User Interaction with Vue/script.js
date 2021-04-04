const UserInteraction = {
  data() {
    return {
      text: "racecars"
    }
  },
  methods: {
    checkPalindrome() {
      this.text = this.text.split("").reverse().join("")
    }
  }
}

Vue.createApp(UserInteraction).mount("#textToReverse")