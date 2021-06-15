import React, { Component } from 'react';
import 'static/css/Footer.css';
import Image from 'components/Image';

import angellist_icon from 'static/images/social/angellist.svg';
import twitter_icon from 'static/images/social/twitter.svg';
import facebook_icon from 'static/images/social/facebook.svg';
import linkedin_icon from 'static/images/social/linkedin.svg';

export default class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <div className='copyright'>&copy;2021 synthesize.consulting<span className='allRights'> All rights reserved.</span></div>
                <div className='socials'>
                    <a href='https://angel.co/company/synthesizeconsulting' target='_blank' rel='noopener noreferrer'><Image className='al' src={angellist_icon} alt='AngelList' /></a>
                    <a href='https://www.linkedin.com/company/synthesizeconsulting' target='_blank' rel='noopener noreferrer'><Image className='li' src={linkedin_icon} alt='LinkedIn' /></a>
                    <a href='https://twitter.com/SynthesizeC' target='_blank' rel='noopener noreferrer'><Image className='twitter' src={twitter_icon} alt='Twitter' /></a>
                    <a href='https://www.facebook.com/synthesizeconsulting' target='_blank' rel='noopener noreferrer'><Image className='fb' src={facebook_icon} alt='Facebook' /></a>
                </div>
            </div>
        );
    }
}
