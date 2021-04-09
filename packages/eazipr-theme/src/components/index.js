import React from 'react'
import { connect, Head, styled, css } from 'frontity'
import Link from '@frontity/components/link'
import Switch from '@frontity/components/switch'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faWordpress, faBootstrap } from '@fortawesome/free-brands-svg-icons'
// import { faReact } from '@fortawesome/free-solid-svg-icons'
import Logo from '../assets/logo.png'
import List from './list'
import Page from './page'
import Post from './post'

const Root = ({ state }) => {
    const data = state.source.get(state.router.link)

    return (
        <>
            <Head>
                <title>EaziPr</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous"/>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>
            </Head>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand d-flex align-items-center flex-row" link="/">
                        <img src={Logo} height="76" className="p-1"/>
                        <span className="bg-light text-dark p-1 px-2">
                            <strong>EaziPr</strong>
                        </span>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" link="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" link="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" link="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="border py-2">
                <form className="container form-inline my-2 my-lg-0 d-flex flex-row align-items-center">
                    <input className="form-control mr-sm-2" type="search" placeholder="Cari artikel" aria-label="Search" style={{marginRight: '1rem'}}/>
                    <button className="btn btn-outline-dark my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
            
            <div className="container">
                <div className="row my-4">
                    <Switch>
                        <List when={data.isArchive}/>
                        <Post when={data.isPost}/>
                        <Page when={data.isPage}/>
                    </Switch>

                    <aside className="col-lg-4">
                        <div className="border rounded p-4 mb-4">
                            <div className="bg-dark mx-auto d-block text-center text-light" style={{width: '250px', height: '250px'}}>
                                Masih dalam tahap pengembangan
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
            <footer className="bg-dark text-light text-center p-4">
                <p>Technology that I use</p>
                <Technology className="mb-3">
                    <Link link="https://reactjs.org/" className="a">
                        <FontAwesomeIcon icon={faReact} size="lg" className="mx-2 icon text-light"/>
                    </Link>
                    <Link link="https://wordpress.org/" className="a">
                        <FontAwesomeIcon icon={faWordpress} size="lg" className="mx-2 icon text-light"/>
                    </Link>
                    <Link link="https://getbootstrap.com/" className="a">
                        <FontAwesomeIcon icon={faBootstrap} size="lg" className="mx-2 icon text-light"/>
                    </Link>
                </Technology>
                <hr/>
                Made with ❤️ by Muhamad Azizi
            </footer>
        </>
    )
}

export default connect(Root)

const Technology = styled.div`
    svg:hover {
        color: #6c757d!important;
    }
`