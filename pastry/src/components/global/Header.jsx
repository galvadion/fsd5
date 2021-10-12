import React from 'react'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'
import linkedIn from '../../assets/images/linkedin.png'
import rss from '../../assets/images/rss.png'
import logoInterno from '../../assets/images/logo.jpg'
import { Category } from './Header/Category'

export const Header = (props) => {

    let categories = ['Higiene', 'Comida', 'Artículo', 'Gato', 'Random']

    return (
        <header>

            <nav>
                <ul>
                    <li className="selected"><a href="#">Home</a></li>
                    <li><a href="#">Specials</a></li>
                    <li><a href="#">All Products</a></li>
                    <li><a href="#">Contact us</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="http://www.script-tutorials.com/creating-new-html5css3-single-page-layout-e-store/">Back To Tutorial</a></li>
                </ul>
            </nav>


            <div className="top_head">
                <div className="logo">
                    <a href="http://www.script-tutorials.com/">
                        <img src={logoInterno} title="E-Store template" alt="E-Store template" />
                    </a>
                </div>

                <section id="search">
                    <form action="#" onSubmit="return false;" method="get">
                        <input type="text" id="searchBar" value="Search.." name="search" />
                        <input type="submit" cartLine="Search" />
                    </form>

                    <ul id="social">
                        <li>
                            <a href="#" title="facebook" rel="external nofollow"><img alt="" src={facebook} /></a>
                        </li>
                        <li>
                            <a href="#" title="twitter" rel="external nofollow"><img alt="" src={twitter} /></a>
                        </li>
                        <li>
                            <a href="#" title="linkedin" rel="external nofollow"><img alt="" src={linkedIn} /></a>
                        </li>
                        <li>
                            <a href="#" title="rss" rel="external nofollow"><img alt="" src={rss} /></a>
                        </li>
                    </ul>
                </section>
            </div>

            <section id="submenu">
                <ul id="categories-holder">
                    {
                        categories.map(element => <Category filterBy={props.filterByCategory} name={element}></Category>)
                    }
                </ul>
            </section>

        </header>

    )
}