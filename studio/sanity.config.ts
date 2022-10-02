import {createConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'
import {markdownSchema} from 'sanity-plugin-markdown'

export default createConfig({
  name: 'default',
  title: 'lee',

  projectId: '720o5jzr',
  dataset: 'production',

  plugins: [deskTool(), markdownSchema()],

  schema: {
    types: schemaTypes,
  },
})
