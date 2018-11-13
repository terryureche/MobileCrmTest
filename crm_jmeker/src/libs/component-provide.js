/* global require */
const requireAll = (requireContext) => {
	let contexts = requireContext.keys().map(requireContext);
	
	//todo handle it later
	//for now we are using a hack 
	//to be able to run the code
	//it seems that functions are no allowed anymore
	//debugger;
	//contexts = contexts.filter(val => typeof val === "object");

	return contexts;
};

const requireComponents = () => {
  let components = requireAll(require.context("../components", true, /index\.js/));

  return components;
};

const loadComponents = () => {
  let components = requireComponents().map((e) => e.default());

  return components;
};

const provider = () => {
  let components = null;

  return {
    getAll: () => {
      if(!components) {
        components = loadComponents();
      }

      return components;
    },

    get: (name) => {
      if(!components) {
        components = loadComponents();
      }

      return components.find((e) => e.name == name) || false;
    }
  };
};

export default provider;
