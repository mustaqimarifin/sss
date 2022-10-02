import {createConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'
import {markdownSchema} from 'sanity-plugin-markdown'

/* import VisionTool from '@sanity/vision'

export const sansVision = VisionTool(createConfig) */
export default createConfig({
  name: 'default',
  // title: 'XD',

  /*   projectId: '2yfdlvrk',
  dataset: 'production', */
  title: 'lee',
  projectId: import.meta.env.SANITY_STUDIO_PROJECT_ID,
  dataset: import.meta.env.SANITY_STUDIO_DATASET,

  plugins: [deskTool(), markdownSchema()],
  schema: {
    types: schemaTypes,
  },
})
