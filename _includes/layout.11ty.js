import { h } from "preact";

export default function (props) {
  const { content } = props;
  const layout = h(
    "html",
    null,
    h("body", null, `Make a change to this layout!\n${content}`)
  );
  return layout;
}
