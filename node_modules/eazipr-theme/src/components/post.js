import React from 'react'
import { connect } from 'frontity'
import dayjs from 'dayjs'

const Post = ({ state, libraries }) => {
    const data = state.source.get(state.router.link)
    const post = state.source[data.type][data.id]
    const author = state.source.author[post.author]
    const date = dayjs(post.date).format('DD MMMM YYYY')

    const Html2React = libraries.html2react.Component

    return (
        <>
            <div className="col-lg-8">
                <article>
                    <div className="bg-dark text-light p-2 rounded">
                        <h1 dangerouslySetInnerHTML={{__html: post.title.rendered}}/>
                    </div>
                    <hr/>
                    <Html2React html={post.content.rendered}/>
                    <div className="mb-2 mt-4">
                        <span>{author.name}</span> •
                        <span> {date}</span>
                    </div>
                </article>
            </div>
            <aside className="col-lg-4">
                <div className="border rounded p-4 mb-4">
                    <div className="bg-dark mx-auto d-block text-center text-light" style={{width: '250px', height: '250px'}}>
                        Masih dalam tahap pengembangan
                    </div>
                </div>
            </aside>
        </>
    )
}

export default connect(Post)