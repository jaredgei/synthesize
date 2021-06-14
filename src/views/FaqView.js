import React, { Component } from 'react';
import 'static/css/FaqView.css';

export default class FaqView extends Component {
    render() {
        return (
            <div className='faqView'>
                <div className='questions'>
                    <div className='questionContainer'>
                        <div className='question'>In which topics are you an expert?</div>
                        <div className='answer'>
                            <div>I have direct experience working in the following topics / industries:</div>
                            <div className='topSpace'>Topics: digital strategy, go-to-market (GTM) strategy, analytics and machine learning strategy, product development, agile, organization/ operating models, sustainability, environmental social and governance (ESG), decarbonization, water, clean tech/ climate tech, corporate purpose, impact investing, COVID-19 strategy</div>
                            <div className='topSpace'>Industries: startups, nonprofits, financial services, banking, insurance, public sector, small business, mid-size enterprises</div>
                        </div>
                    </div>
                    <div className='questionContainer'>
                        <div className='question'>Can I ask questions in areas outside of your expertise?</div>
                        <div className='answer'>Yes. As necessary, I will engage my network of subject matter experts at no additional cost to you. This includes: venture capitalists, private equity professionals, medical professionals, urban planners, engineers, financial advisors, lawyers, former government officials, cybersecurity experts, social workers, and more.</div>
                    </div>
                    <div className='questionContainer'>
                        <div className='question'>What is the process if I submit a question you feel you cannot provide guidance at the highest quality?</div>
                        <div className='answer'>For each question submitted, I will do a preliminary review, both from my background and within my professional network’s expertise. If I don’t believe I can provide the best quality guidance, I will let you know and no fees will be charged.</div>
                    </div>
                    <div className='questionContainer'>
                        <div className='question'>How long will it take to receive a reply?</div>
                        <div className='answer'>Within 5 business days after payment is received.</div>
                    </div>
                    <div className='questionContainer'>
                        <div className='question'>What information is needed from me?</div>
                        <div className='answer'>To have the best quality response, please include all relevant information in your submission. You may be contacted for clarifications and/or additional info, if necessary.</div>
                    </div>
                    <div className='questionContainer'>
                        <div className='question'>Do you have any satisfaction guarantees on your work?</div>
                        <div className='answer'>Yes. It’s important to me that you’re receiving the highest quality advice, even if in bite-sized packages. If you’re not completely satisfied, I’ll refund your payment completely. However, constructive feedback will be required to help improve my services going forward. Please note that this guarantee is valid for only 300-Character Guidance and not for Yes/No or Ad Hoc Guidance. Refund requests must be submitted within 7 calendar days of response.</div>
                    </div>
                    <div className='questionContainer'>
                        <div className='question'>Do you provide discounts for wholesale services, e.g., a fixed price for a pack of 10 questions?</div>
                        <div className='answer'>Yes. Please contact me for more information.</div>
                    </div>
                    <div className='questionContainer'>
                        <div className='question'>Why 300 characters?</div>
                        <div className='answer'>After performing market research, my team and I found that 300 characters is the optimal amount of content to provide both a succinct and meaningful response to key questions.</div>
                    </div>
                    <div className='questionContainer'>
                        <div className='question'>Can I submit questions unrelated to business or typical management consulting topics?</div>
                        <div className='answer'>Go for it! Feel free to ask any question. Please note that I’m unable to provide guidance on certain topics for legal reasons including: medical advice, investment advice, legal advice, auditing/accounting advice, etc.</div>
                    </div>
                </div>
            </div>
        );
    }
}
