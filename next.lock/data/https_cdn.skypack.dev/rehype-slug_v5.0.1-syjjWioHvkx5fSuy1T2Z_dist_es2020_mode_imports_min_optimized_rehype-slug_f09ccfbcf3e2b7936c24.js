import r from"/-/github-slugger@v1.4.0-sdQsxVVySvkQbMdGlC9I/dist=es2020,mode=imports,min/optimized/github-slugger.js";import{hasProperty as e}from"/-/hast-util-has-property@v2.0.0-Q0DVxVX7KLSFsbnCt6sz/dist=es2020,mode=imports,min/optimized/hast-util-has-property.js";import{headingRank as m}from"/-/hast-util-heading-rank@v2.1.0-0ZyqO4IN2ZzkkLCabE8I/dist=es2020,mode=imports,min/optimized/hast-util-heading-rank.js";import{toString as o}from"/-/hast-util-to-string@v2.0.0-IYBTaqehTIDfRm1I5a0N/dist=es2020,mode=imports,min/optimized/hast-util-to-string.js";import{visit as p}from"/-/unist-util-visit@v4.1.0-qOcQ5Jbmm7Q190cEDUP7/dist=es2020,mode=imports,min/optimized/unist-util-visit.js";const t=new r;function u(){return s=>{t.reset(),p(s,"element",i=>{m(i)&&i.properties&&!e(i,"id")&&(i.properties.id=t.slug(o(i)))})}}export default u;