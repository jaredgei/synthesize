import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'static/css/ServicesView.css';

export default class ServicesView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            char_open_example: '',
            char_question: '',
            char_answer: '',
            yesno_open_example: '',
            yesno_question: '',
            yesno_answer: ''
        };
    }

    renderHexagon(type, title, question, answer) {
        const is_open = this.state[`${type}_open_example`] === title;
        const new_state = {};
        new_state[`${type}_open_example`] = is_open ? '' : title;
        new_state[`${type}_question`] = is_open ? '' : question;
        new_state[`${type}_answer`] = is_open ? '' : answer;
        return (
            <div className={`hexagon ${type}` + (is_open ? ' open' : '')} onClick={() => this.setState(new_state)}>
                <div className='hexagonTitle'>{title}</div>
            </div>
        );
    }

    render() {
        return (
            <div className='servicesView'>
                <div className='products'>
                    <Link to='/contact?product=yesno' className='product'>
                        <div className='highlight label'>Yes / No Guidance</div>
                        <div className='output'>Output: A “yes” or “no” response.</div>
                        <div className='description'>You may have a hypothesis you want to test or a quick question that could benefit from a second opinion. This option will help give you the confidence to move forward with a management consultant-verified direction or nudge you to reconsider your options.</div>
                        <div className='price'>$10 USD</div>
                    </Link>
                    <Link to='/contact?product=300character' className='product'>
                        <div className='highlight label'>300-Character Guidance</div>
                        <div className='output'>Output: A ~300-character response.</div>
                        <div className='description'>The typical management consulting engagement involves dozens of pages of analyses, frameworks, stakeholder meetings, etc. However, the key takeaways can often be synthesized in a few sentences. If you’re looking for precise, actionable guidance without the expensive bells and whistles, this option is for you.</div>
                        <div className='price'>$300 USD</div>
                    </Link>
                    <Link to='/contact?product=other' className='product disabled'>
                        <div className='highlight label'>Ad Hoc Guidance</div>
                        <div className='output'>Output: May vary on service.</div>
                        <div className='description'>For clients looking for more traditional consulting services, prices may vary depending on your individual needs.</div>
                        <div className='price'>Contact for more details</div>
                    </Link>
                </div>
                <div className='examples'>
                    <div className='headers'>
                        <div className='highlight'>Examples</div>
                        <div className='description'>The following are illustrative examples of submissions and responses. Any similarities with existing businesses or individuals is coincidental.</div>
                    </div>
                    <div className='exampleSection'>
                        <div className='exampleTitle char'>300-Character Guidance</div>
                        <div className='hexagons'>
                            {this.renderHexagon('char', 'Corporate Strategy', 'How should our carbon offsets company think about where to expand globally?', 'Only expand if it helps either A lower costs to operate or B enter a new market. As an early startup, A is minimal since better to have your operations local to your HQ. B may be attractive since EU now only accepts regional credits. But there are significant regulatory hurdles to qualify your nascent tech. Better to stay local in near-term and tap the voluntary carbon markets.')}
                            {this.renderHexagon('char', 'Startup Growth', 'Which type of prize should be used for a sweepstakes campaign to grow membership of our expert advice website for high school seniors?', 'A specific product or service may narrow the relevant appeal/ audience for a prize; instead, a broad one is best. By creating a cash prize framed as a scholarship for personal growth, winners can spend on what is best for them: debt, education, professional outfits, etc. It creates consistent messaging with your company brand.')}
                            {this.renderHexagon('char', 'Career Advice', 'How should I think about framing my experience to enter the management consulting industry when I only have a technical science / lab-based background?', 'Relate your lab work to the business world - having a vision/ entrepreneurship, testing hypotheses, interpersonal conflict, pivoting with new data, measurable outcomes. Think of specific stories that demonstrate these that non-scientists can understand. Also, unless you want to be a content expert in your scientific field, important to have some light business experience prior to applying.')}
                            {this.renderHexagon('char', 'Small Business', 'How should my Thai restaurant think about our future strategy based on ongoing COVID-19 trends?', 'Two major dining trends will likely emerge: increased A digital-enabled delivery and B desire to make up for missed human connection. B will likely be an intense but fleeting trend as restaurants reopen and people are comfortable with larger meetups. A will likely be more sustainable. If your restaurant already has a large takeout presence, would recommend cutting real-estate costs to be a takeout/ delivery focused service (see: ghost kitchen).')}
                            {this.renderHexagon('char', 'Market Strategy', 'My company is an early-stage digitally-enabled storage startup that helps connect people with space in their homes/ apartments with people looking for storage. Who should we target first to help get the idea off the ground and prove the concept?', 'The moving-out undergrad student market. After a semester/year, students look for solutions to store their major dorm room items. This group of customers prefers digital-first products and values convenience + marketing can be highly targeted through flyers, student clubs, student reps, social media. However, the group is also price sensitive so ensure you are similar enough to competitors.')}
                        </div>
                        <div className={'textOverlay' + (this.state.char_open_example ? ' show' : '')}>
                            <div className='question'>Q: {this.state.char_question}</div>
                            <div className='answer'>{this.state.char_answer}</div>
                        </div>
                    </div>
                    <div className='exampleSection'>
                        <div className='exampleTitle yesno'>Yes / No Guidance</div>
                        <div className='hexagons'>
                            {this.renderHexagon('yesno', 'Acquisition Snapshot', 'Do you believe [company redacted] has significant growth potential and is worth exploring an acquisition?', 'Yes')}
                            {this.renderHexagon('yesno', 'Future Trends', 'Do you see NFTs (non-fungible tokens) continuing to be relevant long-term?', 'Yes')}
                            {this.renderHexagon('yesno', 'Operating Models', 'Do you believe all companies should develop digital products using the agile methodology?', 'No')}
                            {this.renderHexagon('yesno', 'Organization Advice', 'Is the best way to motivate my employees through a salary increase?', 'No')}
                            {this.renderHexagon('yesno', 'Personal Guidance', 'Can pineapple go on pizza?', 'Yes')}
                        </div>
                        <div className={'textOverlay' + (this.state.yesno_open_example ? ' show' : '')}>
                            <div className='question'>Q: {this.state.yesno_question}</div>
                            <div className='answer'>{this.state.yesno_answer}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
