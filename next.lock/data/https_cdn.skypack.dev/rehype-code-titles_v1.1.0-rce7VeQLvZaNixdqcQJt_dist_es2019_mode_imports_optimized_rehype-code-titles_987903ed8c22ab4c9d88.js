import {visit} from "/-/unist-util-visit@v4.1.1-fdFLKlC2l6HBAPrM9vPj/dist=es2019,mode=imports/optimized/unist-util-visit.js";
function rehypeCodeTitles() {
  const visitor = (node, index, parent) => {
    if (!parent || node.tagName !== "pre") {
      return;
    }
    const pre = node;
    const code = Array.isArray(pre.children) ? pre.children[0] : pre.children;
    const className = code.properties.className || [];
    const updatedClassName = className.reduce((acc, cls) => {
      if (cls.includes(":")) {
        const [langClassName, title] = cls.split(":");
        parent.children.splice(index, 0, {
          children: [{type: "text", value: title}],
          properties: {className: ["rehype-code-title"]},
          tagName: "div",
          type: "element"
        });
        acc.push(langClassName);
        return acc;
      }
      if (cls.slice(0, 9) === "language-") {
        acc.push(cls);
        return acc;
      }
      return acc;
    }, []);
    pre.children = [{...code, properties: {className: updatedClassName}}];
  };
  return (tree) => visit(tree, "element", visitor);
}
export default rehypeCodeTitles;
