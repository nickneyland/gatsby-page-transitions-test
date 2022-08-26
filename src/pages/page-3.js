import * as React from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink"

const PageThree = () => {
    return (
        <div>
            <h1>Page Three Content</h1>
            <AniLink cover
                to="/page-4"
                exit={{
                length: 1
                }}
                entry={{
                delay: 0.6
                }}
                bg="#529736"
            >
                <p>Go to page 4</p>
            </AniLink>

            <AniLink cover
                to="/page-2"
                exit={{
                length: 1
                }}
                entry={{
                delay: 0.6
                }}
                bg="#529736"
            >
                <p>Go back to page 2</p>
            </AniLink>
        </div>
    )
}

export default PageThree