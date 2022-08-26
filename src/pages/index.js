import * as React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const IndexPage = () => {
  return (
    <div>
      <h1>Page 1 Content</h1>
      <AniLink paintDrip
        to="/page-2"
        exit={{
          length: 1
        }}
        entry={{
          delay: 0.6
        }}
        hex="#529736"
      >
        Go to page 2
      </AniLink>
    </div>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
