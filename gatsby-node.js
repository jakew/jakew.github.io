/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node }) => {
  console.log(`Node created of type "${node.internal.type}"`)
}