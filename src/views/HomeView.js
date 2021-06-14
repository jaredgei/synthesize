import React, { Component } from 'react';
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
                        <div className='text'>consulting at a fraction</div>
                        <div className='text'> of the cost.</div>
                        <Button text='Get Started' uri='/services' is_inverted={true} />
                    </div>
                </div>
                <div className='about'>
                    <div className='flexImage'>
                        <div className='imageContainer'><Image src={brent_portrait} alt='A portrait of brent' /></div>
                        <div className='textContainer'>
                            <div className='highlight'>Hi. I'm Brent.</div>
                            <div className='paragraph'>I spent over 5 years at McKinsey & Company where I led teams on strategy and operations for Fortune 500 companies, government agencies, and major nonprofits. I've also created and advised multiple startups and social enterprises.</div>
                            <div className='paragraph'>While working in management consulting, I noticed that typically only the largest, most established corporations have the ability to access these services. It's important to me that all people, businesses, and organizations can receive the same level of strategic guidance quality.</div>
                            <div className='paragraph'><span className='bold'>That's why I created synthesize.consulting</span> to help guide you through your questions, big and small, with bite-sized advice.</div>
                        </div>
                    </div>
                </div>
                <div className='industries'>
                    <div className='industriesContent'>
                        <div className='highlight'>Industries and Topics</div>
                        <div className='paragraph'>Both B2B (business-to-business) and B2C (business-to-customer) consulting across multiple industries and topics are available.</div>
                        <div className='icons'>
                            {this.renderIconBlock('Strategy', chess_icon)}
                            {this.renderIconBlock('Operations', gear_icon)}
                            {this.renderIconBlock('Digital & Product', code_icon)}
                            {this.renderIconBlock('Sustainability', tree_icon)}
                            {this.renderIconBlock('Financial Services', bank_icon)}
                            {this.renderIconBlock('Diligence', magnifying_icon)}
                            {this.renderIconBlock('Startups', rocket_icon)}
                            {this.renderIconBlock('Nonprofit', hand_icon)}
                            {this.renderIconBlock('And More', plus_icon)}
                        </div>
                    </div>
                </div>
                <div className='purchase'>
                    <Image src={logo_white} alt='Synthesize Logo' />
                    <div className='purchaseText'>Ready to get started?</div>
                    <Button text={'Let\'s Go'} uri='/contact' is_inverted={true} />
                </div>
            </div>
        );
    }
}
