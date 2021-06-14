import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import 'static/css/Header.css';

import Button from 'components/Button';
import Image from 'components/Image';
import colors from 'static/util/colors';
import logo from 'static/images/header_logo.svg';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show_hamburger_menu: false,
            location: window.location.pathname
        };
    }

    componentDidUpdate() {
        // when page changes, close hamburger menu and scroll to top
        if (window.location.pathname === this.state.location) return;
        window.scrollTo(0, 0);
        this.setState({location: window.location.pathname, show_hamburger_menu: false});
    }

    render() {
        return (
            <div className='header'>
                <div className='headerLeft'>
                    <div className='hamburgerMenuButton' onClick={() => this.setState({show_hamburger_menu: true})}>
                        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill={colors.blueberry} d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"/></svg>
                    </div>
                    <Link className='headerLogo' to='/'><Image src={logo} alt='synthesize logo' /></Link>
                </div>
                <div className='headerRight'>
                    <Link className='headerLink' to='/'>Home</Link>
                    <Link className='headerLink' to='/services'>Services</Link>
                    <Link className='headerLink' to='/faq'>FAQ</Link>
                    <Button uri='/contact' text='Contact' size='small' />
                </div>
                <div className={'hamburgerMenu' + (this.state.show_hamburger_menu ? ' open' : '')}>
                    <div className='hamburgerMenuTop'>
                        <div className='close' onClick={() => this.setState({show_hamburger_menu: false})}>&times;</div>
                        <div className='headerLogo'><Image src={logo} alt='synthesize logo' /></div>
                    </div>
                    <div className='links'>
                        <Link className='menuLink' to='/'>Home</Link>
                        <Link className='menuLink' to='/services'>Services</Link>
                        <Link className='menuLink' to='/faq'>FAQ</Link>
                        <Link className='menuLink' to='/contact'>Contact</Link>
                    </div>
                </div>
            </div>
        );
    }
}
export default withRouter(Header);
