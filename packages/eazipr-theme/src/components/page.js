import React from 'react'
import { connect } from 'frontity'

const Page = ({ state, libraries }) => {
    const data = state.source.get(state.router.link)
    const page = state.source[data.type][data.id]

    const Html2React = libraries.html2react.Component

    return (
        <div className="container">
            <h2 dangerouslySetInnerHTML={{__html: page.title.rendered}}/>
            <Html2React html={page.content.rendered} />
        </div>
    )
}

export default connect(Page)