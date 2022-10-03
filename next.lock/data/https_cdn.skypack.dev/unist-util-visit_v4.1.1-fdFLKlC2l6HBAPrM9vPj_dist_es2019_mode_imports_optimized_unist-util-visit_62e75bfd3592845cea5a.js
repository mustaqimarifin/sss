import {visitParents} from "/-/unist-util-visit-parents@v5.1.1-2NNGDcrWAHEaaypV3mAb/dist=es2019,mode=imports/optimized/unist-util-visit-parents.js";
export {CONTINUE, EXIT, SKIP} from "/-/unist-util-visit-parents@v5.1.1-2NNGDcrWAHEaaypV3mAb/dist=es2019,mode=imports/optimized/unist-util-visit-parents.js";
const visit = function(tree, test, visitor, reverse) {
  if (typeof test === "function" && typeof visitor !== "function") {
    reverse = visitor;
    visitor = test;
    test = null;
  }
  visitParents(tree, test, overload, reverse);
  function overload(node, parents) {
    const parent = parents[parents.length - 1];
    return visitor(node, parent ? parent.children.indexOf(node) : null, parent);
  }
};
export {visit};
export default null;
