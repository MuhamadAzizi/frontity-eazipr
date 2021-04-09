import React from 'react'
import { connect } from 'frontity'
import Link from '@frontity/components/link'
import FeaturedMedia from './featured-media'
import Truncate from 'react-truncate'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight, faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'

const List = ({ state, actions, libraries }) => {
    const data = state.source.get(state.router.link)

    const Html2React = libraries.html2react.Component

    return (
        <>
            <div className="col-lg-8">

                {data.items.map((item) => {
                    const post = state.source[item.type][item.id]

                    return (
                        <article className="d-flex mb-4" key={item.id}>
                            <FeaturedMedia id={post.featured_media}/>
                            <div className="d-flex flex-column mx-4 justify-content-between">
                                <h2 dangerouslySetInnerHTML={{__html: post.title.rendered}}/>
                                <Truncate lines={3} className="flex-grow-1">
                                    <Html2React html={post.excerpt.rendered}/>
                                </Truncate>
                                <Link link={post.link} className="btn btn-dark">Lihat Artikel</Link>
                            </div>
                        </article>
                    )
                })}
                
                <div className="d-flex flex-row-reverse" style={{marginRight: '24px'}}>
                {data.previous && (
                    <button className="btn btn-dark" onClick={() => {
                        actions.router.set(data.previous)
                    }}>
                        <FontAwesomeIcon icon={faArrowCircleLeft} size="lg"/> PREVIOUS
                    </button>
                )}
                {data.next && (
                    <button className="btn btn-dark" onClick={() => {
                        actions.router.set(data.next)
                    }}>
                        NEXT <FontAwesomeIcon icon={faArrowCircleRight} size="lg"/>
                    </button>
                )}
                </div>
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

export default connect(List)