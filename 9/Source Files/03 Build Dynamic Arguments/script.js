const app = Vue.createApp({
  data() {
    return {
      location: "left"
    }
  }
})

app.directive("stick-element", {
  mounted(el, binding) {
    el.style.position = "fixed"
    
    const locationArgument = binding.arg || "bottom"

    el.style[locationArgument] = binding.value + "px"
  }
})

app.mount("#dynamic-arguments-div")