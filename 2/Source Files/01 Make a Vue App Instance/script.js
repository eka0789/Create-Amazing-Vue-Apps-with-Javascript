const app = Vue.createApp({})
  .component("UserInput",
UserInputComponent)
  .directive("blur", BlurDirective)
  .use(LocalPlugin)