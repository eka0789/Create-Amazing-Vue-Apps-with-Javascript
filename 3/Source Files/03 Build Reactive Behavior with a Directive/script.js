const ReactiveBehavior = {
  data() {
    return {
      onHoverText: "Reactive message"
    }
  }
}

Vue.createApp(ReactiveBehavior).mount("#to-hover-element")