import React from 'react'
import { connect } from 'frontity'

const Page = ({ state }) => {
    const data = state.source.get(state.router.link)
    const page = state.source[data.type][data.id]

    return (
        <div className="container">
            <h2 dangerouslySetInnerHTML={{__html: page.title.rendered}}/>
            <div dangerouslySetInnerHTML={{__html: page.content.rendered}}/>
        </div>
    )
}

export default connect(Page)