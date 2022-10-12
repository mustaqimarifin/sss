// @ts-nocheck
// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import author from './author'
import post from './post'
import tag from './tag'
import siteConfig from './siteConfig'
import blockContent from './blockContent'
import coverImage from './coverImage'
import social from './social'
import media from './media'
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    media, social, coverImage, author, post, blockContent, tag, siteConfig
  ]),
})
