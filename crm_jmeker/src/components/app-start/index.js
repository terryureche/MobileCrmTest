const element = () => {
  return {
    name: "app-start",
    actions: require("./actions.js").default,
    element: require("./element.js").default,
    reducer: require("./reducer.js").default.bind(this)
  }
}

export default element;