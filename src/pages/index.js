import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query allContentfulBlogPost {
      allContentfulBlogPost {
        nodes {
          headerImage{
            file{
              url
            }
          }
          title
          body{
            content{
              content{
                value
              }
            }
          }
        }
      }
    }
  `)
  return(
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      {data.allContentfulBlogPost.nodes.map(({ headerImage, title, body }, index) => (
        <div key={index}>
          <h3>タイトル：{title}</h3>
          <img src={headerImage.file.url} alt="ヘッダー画像"/>
          <p>内容:{body.content[0].content[0].value}</p>
        </div>
      ))}
    </Layout>
  )
}
export default IndexPage
