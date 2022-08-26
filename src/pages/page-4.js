import * as React from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink"

const PageFour = () => {
    return (
        <div class="content">
            <h1>Page Four Content</h1>
            <AniLink cover
                to="/page-3"
                exit={{
                length: 1
                }}
                entry={{
                delay: 0.6
                }}
                bg="#529736"
            >
                <p>Go back to page 3</p>
            </AniLink>
        </div>
    )
}

export default PageFour