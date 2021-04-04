Vue.createApp({
  data() {
    return {
      sampleObject: {
        title: "My Object",
        author: "Your Name",
        property: "Test property"
      }
    }
  }
}).mount("#object-values")