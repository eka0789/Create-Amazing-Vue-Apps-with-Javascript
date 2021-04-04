const app = Vue.createApp({})

app.component("header-component", {
  props: ["title"],
  template: `<h2>{{ title }}</h2>`  
})

app.mount("#component-props-div")