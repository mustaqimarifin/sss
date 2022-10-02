/**
 * Minified by jsDelivr using Terser v5.9.0.
 * Original file: /npm/remark-gfm@3.0.1/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
import{gfm}from"micromark-extension-gfm";import{gfmFromMarkdown,gfmToMarkdown}from"mdast-util-gfm";export default function remarkGfm(o={}){const m=this.data();function r(o,r){(m[o]?m[o]:m[o]=[]).push(r)}r("micromarkExtensions",gfm(o)),r("fromMarkdownExtensions",gfmFromMarkdown()),r("toMarkdownExtensions",gfmToMarkdown(o))}
//# sourceMappingURL=/sm/26e6bd9abc9dee7dc52b9a3b1111021d353e2493ec77ab431f1aed5dd4ce783f.map