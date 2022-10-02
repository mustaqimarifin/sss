import { createConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { markdownSchema } from 'sanity-plugin-markdown';
import schemaTypes from './lib/sanity/schemas/index';

export default createConfig({
  name: 'default',
  title: 'lee',
  projectId: process.env.SANITY_STUDIO_PROJECT_ID,
  dataset: 'production',
  plugins: [deskTool(), markdownSchema()],
  schema: {
    types: schemaTypes
    /*       {
        name: 'post',
        type: 'document',
        title: 'Post',
        fields: [
          {
            name: 'title',
            title: 'Title',
            type: 'string'
          },
          {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
              source: 'title'
            }
          },
          {
            name: 'content',
            title: 'Content',
            type: 'markdown'
          },
          {
            name: 'excerpt',
            title: 'Excerpt',
            type: 'string'
          },
          {
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
                  isHighlighted: true
                }
              },
              {
                name: 'alt',
                type: 'string',
                title: 'Alternative text',
                description: 'Important for SEO and accessiblity.',
                options: {
                  isHighlighted: true
                }
              }
            ]
          },
          {
            name: 'date',
            title: 'Date',
            type: 'datetime'
          },
          {
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'tag' } }]
          }
        ]
      },
      {
        name: 'tag',
        title: 'Tag',
        type: 'document',
        fields: [
          {
            name: 'title',
            title: 'Title',
            type: 'string'
          },
          {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
              source: 'title',
              maxLength: 96
            },
            validation: (Rule) => Rule.required()
          },
          {
            name: 'color',
            title: 'Color',
            type: 'string',
            description: 'Color of the category',
            options: {
              list: [
                { title: 'Green', value: 'green' },
                { title: 'Blue', value: 'blue' },
                { title: 'Purple', value: 'purple' },
                { title: 'Orange', value: 'orange' }
              ]
            }
          },
          {
            name: 'description',
            title: 'Description',
            type: 'text'
          }
        ]
      },

      {
        name: 'snippet',
        type: 'document',
        title: 'Snippet',
        fields: [
          {
            name: 'title',
            title: 'Title',
            type: 'string'
          },
          {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
              source: 'title'
            }
          },
          {
            name: 'content',
            title: 'Content',
            type: 'markdown'
          },
          {
            name: 'description',
            title: 'Description',
            type: 'string'
          },
          {
            name: 'logo',
            title: 'Logo',
            type: 'image'
          }
        ]
      } */
  }
});
