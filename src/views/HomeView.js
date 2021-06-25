import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'static/css/HomeView.css';
import Button from 'components/Button';
import Image from 'components/Image';

import brent_portrait from 'static/images/brent.png';
import logo_white from 'static/images/logo_white.svg';
import bank_icon from 'static/images/icons/bank.svg';
import chess_icon from 'static/images/icons/chess.svg';
import code_icon from 'static/images/icons/code.svg';
import gear_icon from 'static/images/icons/gear.svg';
import hand_icon from 'static/images/icons/hand.svg';
import magnifying_icon from 'static/images/icons/magnifying.svg';
import plus_icon from 'static/images/icons/plus.svg';
import rocket_icon from 'static/images/icons/rocket.svg';
import tree_icon from 'static/images/icons/tree.svg';

export default class HomeView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            browser_height: 0,
            browser_width: 0,
            animation_timer: 0
        };
    }

    componentDidMount() {
        window.addEventListener('resize', this.onWindowResize);
        this.setState({browser_height: window.innerHeight, browser_width: window.innerWidth});
        this.interval = setInterval(() => {
            if (this.state.animation_timer >= 10) return this.clearInterval();
            this.setState(prev_state => ({animation_timer: prev_state.animation_timer + 1}));
        }, 400); // tick at 400ms
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.onWindowResize);
    }

    clearInterval = () => {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
    }

    onWindowResize = () => {
        this.setState({browser_height: window.innerHeight, browser_width: window.innerWidth});
    }

    renderHexagons = () => {
        const num_rows = Math.ceil(Math.min(600, this.state.browser_height) / 165);
        const num_cols = Math.ceil(this.state.browser_width / 150);
        const hexagon_grid = [];
        for (let i = 0; i < num_rows + 2; i++) {
            const hexagon_row = [];
            for (let j = 0; j < num_cols + 2; j++) hexagon_row.push(<div key={`r${i}c${j}`} className='hexagon' />);
            hexagon_grid.push(<div className='hexagonRow' key={i}>{hexagon_row}</div>);
        }
        return <div className='hexagonGrid'>{hexagon_grid}</div>;
    }

    renderIconBlock = (description, icon) => {
        return (
            <div className='iconBlock'>
                <div className='iconImageContainer'><img src={icon} alt={description} /></div>
                <div className='iconDescription'>{description}</div>
            </div>
        );
    }

    render() {
        const { animation_timer } = this.state;

        return (
            <div className='homeView'>
                <div className='hero'>
                    <div className='hexagonsContainer'>{this.renderHexagons()}</div>
                    <div className={'content' + (animation_timer > 0 ? ' visible' : '')}>
                        <div className='text'>Top-level management</div>
                        <div className='text'>consulting in accessible</div>
                        <div className='text'>packages.</div>
                        <Button text='Get Started' uri='/services' is_inverted={true} />
                    </div>
                </div>
                <div className='about'>
                    <div className='flexImage'>
                        <div className='imageContainer'><Image src={brent_portrait} alt='A portrait of brent' /></div>
                        <div className='textContainer'>
                            <div className='highlight'>Hi. I'm Brent.</div>
                            <div className='paragraph'><span className='bold'>I’m a former Engagement Manager at McKinsey & Company</span> where I specialized in digital/analytics, product development, and sustainability. During my 5+ years there, I had the opportunity to work with many fantastic Fortune 500, public sector, and nonprofit clients on numerous projects.</div>
                            <div className='paragraph'>However, I found while working in management consulting that typically only the largest, most established corporations have the ability to access these services. It’s important to me that all people, businesses, and organizations can receive access to the same level of quality strategic guidance.</div>
                            <div className='paragraph'><span className='bold'>That's why I created synthesize.consulting</span> to help guide you through your questions, big and small, with bite-sized advice.</div>
                        </div>
                    </div>
                </div>
                <div className='experience'>
                    <div className='flexImage'>
                        <div className='textContainer'>
                            <div className='highlight'>A few highlights of my work include:</div>
                            <div className='paragraph'><span className='bold'>Creating a new CEO-led international water sustainability coalition with the potential to influence 1/3 of global withdrawals.</span> Specifically, I managed a working team that provided: impact quantification, recruitment strategy, governance model, impact lever summary, post-launch work plan, and executive communication.</div>
                            <div className='paragraph'><span className='bold'>Coaching Senior Product Owners of a multinational insurance company to adopt agile methodologies for two new digital products</span>, including: product ideation/vision, customer journey creation, persona development, MVP selection, customer feedback cadence, and operating model.</div>
                            <div className='paragraph'><span className='bold'>Achieving &gt;99% accuracy for document analysis automation for a leading investment bank to comply with federal regulatory requirements.</span> Specifically, I trained machine learning models, designed a rules engine, and managed a team of software engineers.</div>
                            <div className='paragraph'><span className='bold'>Authoring a <a href='https://www.mckinsey.com/business-functions/sustainability/our-insights/water-a-human-and-business-priority' target='_blank' rel='noopener noreferrer'>McKinsey Quarterly article on water stress</a> and a <a href='https://www.mckinsey.com/featured-insights/artificial-intelligence/ai-looks-north-bridging-canadas-corporate-artificial-intelligence-gap' target='_blank' rel='noopener noreferrer'>McKinsey white paper on artificial intelligence</a>.</span></div>
                            <div className='paragraph'><span className='bold'>I’ve also worked with multiple startups and founded two social ventures</span>, including an open-source zero-electricity structure that filters, cools, and dispenses water to help eliminate plastic waste. So far, we’ve saved over 60,000 plastic water bottles from being used.</div>
                            <div className='paragraph topSpace'>For more information about me, feel free to check out my <a href='https://www.linkedin.com/in/brentpacker/' target='_blank' rel='noopener noreferrer'>Linkedin</a> or send me an <Link to='/contact?product=other'>email</Link>.</div>
                        </div>
                    </div>
                </div>
                <div className='industries'>
                    <div className='industriesContent'>
                        <div className='highlight'>Industries and Functions</div>
                        <div className='paragraph'>Both B2B (business-to-business) and B2C (business-to-customer) consulting across multiple industries and functions are available.</div>
                        <div className='icons'>
                            {this.renderIconBlock('Strategy', chess_icon)}
                            {this.renderIconBlock('Operations', gear_icon)}
                            {this.renderIconBlock('Digital & Product', code_icon)}
                            {this.renderIconBlock('Sustainability', tree_icon)}
                            {this.renderIconBlock('Financial Services', bank_icon)}
                            {this.renderIconBlock('Due Diligence', magnifying_icon)}
                            {this.renderIconBlock('Startups', rocket_icon)}
                            {this.renderIconBlock('Nonprofits', hand_icon)}
                            {this.renderIconBlock('And More', plus_icon)}
                        </div>
                    </div>
                </div>
                <div className='purchase'>
                    <Image src={logo_white} alt='Synthesize Logo' />
                    <div className='purchaseText'>Ready to get started?</div>
                    <Button text={'Let\'s Go'} uri='/services' is_inverted={true} />
                </div>
            </div>
        );
    }
}
