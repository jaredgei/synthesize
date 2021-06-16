import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import 'static/css/ContactView.css';
import Button from 'components/Button';

const PAYMENT_LINKS = {
    'yesno': 'https://buy.stripe.com/cN215f9EGgnHcMg9AA',
    '300character': 'https://buy.stripe.com/5kAeW5eZ02wR7rWeUV'
};

export default class ContactView extends Component {
    constructor(props) {
        super(props);

        let product = '300character';
        if (this.props.location.search && this.props.location.search.indexOf('?product=' !== -1)) {
            product = this.props.location.search.slice(9, this.props.location.search.length);
        }

        this.state = {
            product,
            subject: '',
            company_name: '',
            content: '',
            context: '',
            email: '',
            is_submitting_form: false,
            has_submitted_form: false,
            has_hubspot_error: false,
            required_fields_missing: []
        };
    }

    onSubmit = () => {
        const {
            product,
            subject,
            company_name,
            content,
            context,
            email,
            is_submitting_form
        } = this.state;

        if (is_submitting_form) return;

        const required_fields_missing = [];
        if (!subject || subject.length === 0) required_fields_missing.push('subject');
        if (!content || content.length === 0) required_fields_missing.push('content');
        if (!email || email.length === 0) required_fields_missing.push('email');
        if (required_fields_missing.length > 0) return this.setState({required_fields_missing});

        return this.setState({is_submitting_form: true}, () => {
            return axios.post('https://api.hsforms.com/submissions/v3/integration/submit/20208978/9d570690-2622-4a46-87bc-9d6f8c9a078e', {fields: [
                {name: 'TICKET.product', value: product},
                {name: 'TICKET.subject', value: subject},
                {name: 'TICKET.company_name', value: company_name},
                {name: 'TICKET.content', value: content},
                {name: 'TICKET.context', value: context},
                {name: 'TICKET.email_address', value: email}
            ]})
                .then(() => {
                    if (product === 'other') return this.setState({has_hubspot_error: false, is_submitting_form: false, has_submitted_form: true, required_fields_missing});
                    window.location.href = PAYMENT_LINKS[product];
                })
                .catch(error => this.setState({has_hubspot_error: true, is_submitting_form: false}));
        });
    }

    render() {
        const {
            company_name,
            content,
            context,
            email,
            has_hubspot_error,
            has_submitted_form,
            is_submitting_form,
            product,
            required_fields_missing,
            subject
        } = this.state;

        if (has_submitted_form) {
            return (
                <div className='contactView'>
                    <div className='pageContainer'>
                        <div className='formContainer'>
                            <div className='thankYou'>
                                <span className='bold'>Thank you!</span> We have received your inquiry and will be in touch shortly.
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

        let button_text = 'Proceed to Payment';
        if (is_submitting_form) button_text = 'Submitting...';
        else if (product === 'other') button_text = 'Submit';

        let message_text = 'Message';
        if (product === 'yesno') message_text = 'Question Submission (One question per submission)';
        if (product === '300character') message_text = 'Question Submission';

        return (
            <div className='contactView'>
                <div className='pageContainer'>
                    <div className='formContainer'>
                        {required_fields_missing.length > 0 && <div className='errorContainer'>Please fill out all required fields.</div>}
                        {has_hubspot_error && <div className='errorContainer'>Something went wrong. Please try again later.</div>}
                        <div className='formEntry'>
                            <div className='formHeader required'>Product</div>
                            <div><select value={product} onChange={event => this.setState({product: event.target.value})}>
                                <option disabled={true} value=''>Please select a product...</option>
                                <option value='300character'>300-Character Guidance ($300)</option>
                                <option value='yesno'>Yes / No Guidance ($10)</option>
                                <option value='other'>Other Inquiry</option>
                            </select></div>
                        </div>
                        <div className={'formEntry' + (required_fields_missing.indexOf('subject') !== -1 ? ' error' : '')}>
                            <div className='formHeader required'>Full Name</div>
                            <div><input type='text' value={subject} onChange={event => this.setState({subject: event.target.value})} /></div>
                        </div>
                        <div className={'formEntry' + (required_fields_missing.indexOf('subject') !== -1 ? ' error' : '')}>
                            <div className='formHeader required'>Email Address</div>
                            <div><input type='text' value={email} onChange={event => this.setState({email: event.target.value})} /></div>
                        </div>
                        <div className='formEntry'>
                            <div className='formHeader'>Company Name</div>
                            <div><input type='text' value={company_name} onChange={event => this.setState({company_name: event.target.value})} /></div>
                        </div>
                        <div className={'formEntry' + (required_fields_missing.indexOf('content') !== -1 ? ' error' : '')}>
                            <div className='formHeader required'>{message_text}</div>
                            <div><textarea value={content} onChange={event => this.setState({content: event.target.value})} /></div>
                        </div>
                        {product !== 'other' && <div className='formEntry'>
                            <div className='formHeader'>Additional Context for Submission</div>
                            <div><textarea value={context} onChange={event => this.setState({context: event.target.value})} /></div>
                        </div>}
                        <Button text={button_text} onClick={this.onSubmit} />
                        {product !== 'other' && <div className='terms'>By clicking above, you agree to the <Link to='/terms'>Terms of Service and Privacy Policy</Link>.</div>}
                        {product !== 'other' && <div className='files'>Submit relevant files by email to <a href='mailto:info@synthesize.consulting'>info@synthesize.consulting</a>.</div>}
                    </div>
                </div>
            </div>
        );
    }
}
