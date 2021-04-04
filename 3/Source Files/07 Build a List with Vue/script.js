const List = {
  data() {
    return {
      listItems: [
        { item: "Study Vue course" },
        { item: "Learn React Native" },
        { item: "Study Angular" }
      ]
    }
  }
}

Vue.createApp(List).mount("#list")