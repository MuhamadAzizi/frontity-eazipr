import React from 'react'
import { connect } from 'frontity'
import dayjs from 'dayjs'

const Post = ({ state }) => {
    const data = state.source.get(state.router.link)
    const post = state.source[data.type][data.id]
    const author = state.source.author[post.author]
    const date = dayjs(post.date).format('DD MMMM YYYY')

    return (
        <div className="col-lg-8">
            <article>
                <div className="bg-dark text-light p-2 rounded">
                    <h1 dangerouslySetInnerHTML={{__html: post.title.rendered}}/>
                </div>
                <hr/>
                <div dangerouslySetInnerHTML={{__html: post.content.rendered}}/>
                <div className="mb-2 mt-4">
                    <span>{author.name}</span> •
                    <span> {date}</span>
                </div>
                        {/* <div>
                            <span className="btn btn-primary py-1 mt-1">Python</span>
                            <span className="btn btn-secondary py-1 mt-1">Pemrograman</span>
                            <span className="btn btn-warning py-1 mt-1">Algoritma</span>
                        </div> */}
            </article>
                    {/* <hr className="my-4"/>
                    <form className="card p-4 mb-4">
                        <div className="form-group row my-2">
                            <label for="inputEmail" className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                                <input type="email" className="form-control" id="inputEmail" placeholder="Email">
                            </div>
                        </div>
                        <div className="form-group row my-2">
                            <label for="inputName" className="col-sm-2 col-form-label">Name</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="inputName" placeholder="Name">
                            </div>
                        </div>
                        <div className="form-group my-2">
                            <label for="formControlTextarea">Comment</label>
                            <textarea className="form-control my-2" id="formControlTextarea" rows="3"></textarea>
                        </div>
                        <div className="form-group row mt-4">
                            <div className="col-sm-10">
                                <button type="submit" className="btn btn-primary">Kirim</button>
                            </div>
                        </div>
                    </form> */}
        </div>
    )
}

export default connect(Post)