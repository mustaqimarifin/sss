const coverImage = {
  name: 'coverImage',
  title: 'Cover Image',
  type: 'image',
  fields: [
    {
      name: 'caption',
      type: 'string',
      title: 'Image caption',
      description: 'Appears below image.',
      options: {
        isHighlighted: true,
      },
    },
    {
      name: 'alt',
      type: 'string',
      title: 'Alternative text',
      description: 'Important for SEO and accessiblity.',
      options: {
        isHighlighted: true,
      },
    },
  ],
  options: {
    hotspot: true,
  },
}

export default coverImage
