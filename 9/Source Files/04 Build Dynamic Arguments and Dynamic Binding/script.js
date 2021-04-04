const app = Vue.createApp({
  data() {
    return {
      location: "left",
      locationPadding: 100
    }
  }
})

app.directive("stick-element", {
  mounted(el, binding) {
    el.style.position = "fixed"
    const locationArgument = binding.arg || "bottom"
    el.style[locationArgument] = binding.value + "px"
  },
  updated(el, binding) {
    const locationArgument = binding.arg || "bottom"
    el.style[locationArgument] = binding.value + "px"
  }
})

app.mount("#dynamic-binding-div")