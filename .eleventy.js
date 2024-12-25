import { render } from "preact-render-to-string";

export default function (config) {
  config.addExtension("11ty.js", {
    getInstanceFromInputPath: async function (path) {
      const module = await import(path);
      return module.default;
    },
    compile: function (component) {
      return function (props) {
        return render(component(props));
      };
    },
    useJavaScriptImport: true,
  });
}
