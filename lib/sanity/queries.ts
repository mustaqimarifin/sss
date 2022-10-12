import groq from 'groq';

const postFields = `
  _id,
  title,
  date,
  excerpt,
  "name" : author->name,
  "tags": tags[]->title,
  "caption" : coverImage.caption,
  "slug": slug.current
`;

export const indexQuery = groq`
*[_type == "post"] | order(priority desc, _updatedAt desc) {
  ${postFields}
}`;

export const pathquery = groq`
*[_type == "post"] { _id, title, date, "caption" : coverImage.caption,'slug': slug.current,
}
`;

export const postquery = groq`
*[_type == "post"] | order(_createdAt desc) {
  ...,
    "caption" : coverImage.caption,
  author->,
  tags[]->
}
`;

export const postQuery = groq` 
*[_type == "post" && slug.current == $slug] | order(_updatedAt desc) [0] {
    ...,
    ${postFields}
  }
`;

export const postSlugsQuery = groq`
*[_type == "post" && defined(slug.current)][].slug.current
`;

export const postBySlugQuery = groq`
*[_type == "post" && slug.current == $slug][0] {
  ${postFields}
}
`;

export const postUpdatedQuery = groq`*[_type == "post" && _id == $id].slug.current`;

const snippetFields = `
  _id,
  title,
  description,
  logo,
  "slug": slug.current,
`;

export const allSnippetsQuery = `
*[_type == "snippet"] | order(date desc, _updatedAt desc) {
  ${snippetFields}
}`;

export const snippetsQuery = `
{
  "snippet": *[_type == "snippet" && slug.current == $slug] | order(_updatedAt desc) [0] {
    content,
    ${snippetFields}
  }
}`;

export const snippetSlugsQuery = groq`
*[_type == "snippet" && defined(slug.current)][].slug.current
`;

export const snippetBySlugQuery = `
*[_type == "snippet" && slug.current == $slug][0] {
  ${snippetFields}
}
`;
