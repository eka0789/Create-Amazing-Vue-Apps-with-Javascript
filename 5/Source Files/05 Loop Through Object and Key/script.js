Vue.createApp({
  data() {
    return {
      dogObject: {
        breed: "Retriever",
        ageInYears: 5,
        owner: "No Owner"
      }
    }
  }
}).mount("#dog-list")