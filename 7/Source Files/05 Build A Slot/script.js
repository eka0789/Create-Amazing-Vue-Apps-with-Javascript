const app = Vue.createApp({})

app.component("slot-component", {
  template: `
  <div>
    <p>This is my component.</p>
    <slot></slot>
  </div>`
})

app.mount("#slots-div")