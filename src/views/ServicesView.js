import React, { Component } from 'react';
import 'static/css/ServicesView.css';

export default class ServicesView extends Component {
    render() {
        return (
            <div className='servicesView'>
                <div className='products'>
                    <div className='product'>
                        <div className='highlight label'>Yes / No Guidance</div>
                        <div className='output'>Output: A “yes” or “no” response.</div>
                        <div className='description'>You may have a hypothesis you want to test or a quick question that could benefit from a second opinion. This option will help give you the confidence to move forward with a management consultant-verified direction or nudge you to reconsider your options.</div>
                        <div className='price'>$10 USD</div>
                    </div>
                    <div className='product'>
                        <div className='highlight label'>300-Character Guidance</div>
                        <div className='output'>Output: A ~300-character response.</div>
                        <div className='description'>The typical management consulting engagement involves dozens of pages of analyses, frameworks, stakeholder meetings, etc. However, the key takeaways can often be synthesized in a few sentences. If you’re looking for precise, actionable guidance without the expensive bells and whistles, this option is for you.</div>
                        <div className='price'>$300 USD</div>
                    </div>
                    <div className='product disabled'>
                        <div className='highlight label'>Ad Hoc Guidance</div>
                        <div className='output'>Output: May vary on service.</div>
                        <div className='description'>For clients looking for more traditional consulting services, prices may vary depending on your individual needs.</div>
                        <div className='price'>Contact for more details</div>
                    </div>
                </div>
                <div className='examples'>
                    <div className='highlight'>Examples</div>
                    <div className='description'>The following are illustrative examples of submissions and responses. Any similarities with existing businesses or individuals is coincidental.</div>
                    <div className='exampleSection'>
                        <div className='exampleSectionHeader'>300-Character Guidance</div>
                        <div className='exampleQuestions'>
                            <div className='questionContainer'>
                                <div className='question'>Q: How should our carbon offsets company think about where to expand globally?</div>
                                <div className='answer'>Only expand if it helps either A lower costs to operate or B enter a new market. As an early startup, A is minimal since better to have your operations local to your HQ. B may be attractive since EU now only accepts regional credits. But there are significant regulatory hurdles to qualify your nascent tech. Better to stay local in near-term and tap the voluntary carbon markets.</div>
                            </div>
                            <div className='questionContainer'>
                                <div className='question'>Q: Which type of prize should be used for a sweepstakes campaign to grow membership of our expert advice website for high school seniors?</div>
                                <div className='answer'>A specific product or service may narrow the relevant appeal/ audience for a prize; instead, a broad one is best. By creating a cash prize framed as a scholarship for personal growth, winners can spend on what is best for them: debt, education, professional outfits, etc. It creates consistent messaging with your company brand.</div>
                            </div>
                            <div className='questionContainer'>
                                <div className='question'>Q: How should I think about framing my experience to enter the management consulting industry when I only have a technical science / lab-based background?</div>
                                <div className='answer'>Relate your lab work to the business world - having a vision/ entrepreneurship, testing hypotheses, interpersonal conflict, pivoting with new data, measurable outcomes. Think of specific stories that demonstrate these that non-scientists can understand. Also, unless you want to be a content expert in your scientific field, important to have some light business experience prior to applying.</div>
                            </div>
                            <div className='questionContainer'>
                                <div className='question'>Q: How should my Thai restaurant think about our future strategy based on ongoing COVID-19 trends?</div>
                                <div className='answer'>Two major dining trends will likely emerge: increased A digital-enabled delivery and B desire to make up for missed human connection. B will likely be an intense but fleeting trend as restaurants reopen and people are comfortable with larger meetups. A will likely be more sustainable. If your restaurant already has a large takeout presence, would recommend cutting real-estate costs to be a takeout/ delivery focused service (see: ghost kitchen).</div>
                            </div>
                            <div className='questionContainer'>
                                <div className='question'>Q: My company is an early-stage digitally-enabled storage startup that helps connect people with space in their homes/ apartments with people looking for storage. Who should we target first to help get the idea off the ground and prove the concept?</div>
                                <div className='answer'>The moving-out undergrad student market. After a semester/year, students look for solutions to store their major dorm room items. This group of customers prefers digital-first products and values convenience + marketing can be highly targeted through flyers, student clubs, student reps, social media. However, the group is also price sensitive so ensure you are similar enough to competitors.</div>
                            </div>
                        </div>
                    </div>
                    <div className='exampleSection separated'>
                        <div className='exampleSectionHeader'>Yes/No Guidance</div>
                        <div className='exampleQuestions'>
                            <div className='questionContainer'>
                                <div className='question'>Q: Do you believe [company redacted] has significant growth potential and is worth exploring an acquisition?</div>
                                <div className='answer'>Yes</div>
                            </div>
                            <div className='questionContainer'>
                                <div className='question'>Q: Do you see the medical psychedelics industry following a similar growth curve as the Canadian recreational cannabis industry?</div>
                                <div className='answer'>No</div>
                            </div>
                            <div className='questionContainer'>
                                <div className='question'>Q: Do you see NFTs (non-fungible tokens) continuing to be relevant long-term?</div>
                                <div className='answer'>Yes</div>
                            </div>
                            <div className='questionContainer'>
                                <div className='question'>Q: Do you believe all companies should develop digital products using the agile methodology?</div>
                                <div className='answer'>No</div>
                            </div>
                            <div className='questionContainer'>
                                <div className='question'>Q: Is the best way to motivate my employees through a salary increase?</div>
                                <div className='answer'>No</div>
                            </div>
                            <div className='questionContainer'>
                                <div className='question'>Q: Can pineapple go on pizza?</div>
                                <div className='answer'>Yes</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
