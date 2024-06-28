import React from 'react';
import '../elements/help.css'

const Help = () => {
    return (
       <>
       <main className='main'>
        <section className="help_section">
            <div className="help_container">
                <h1 className='help_heading'>Help & FAQs</h1>
                <p className='unique'>Welcome to the Fireup the Grill Help page. Here you will find answers to our most frequently asked questions. If you need further assistance, please do not hesitate to contact us.</p>
                
                <div className="faq">
                    {/* <h2>Frequently Asked Questions</h2> */}
                    
                    <div className="faq-item">
                        <h3 className='help_heading'>How do I place an order?</h3>
                        <p className='help_para'>To place an order, browse our menu, add items to your cart, and proceed to checkout. Follow the on-screen instructions to complete your order.</p>
                    </div>
                    
                    <div className="faq-item">
                        <h3 className='help_heading'>What payment methods do you accept?</h3>
                        <p className='help_para'>We accept various payment methods including credit/debit cards, PayPal, and online bank transfers.</p>
                    </div>
                    
                    <div className="faq-item">
                        <h3 className='help_heading'>Can I modify my order after placing it?</h3>
                        <p className='help_para'>Yes, you can modify your order within 10 minutes of placing it by contacting our customer support.</p>
                    </div>
                    
                    <div className="faq-item">
                        <h3 className='help_heading'>What is your delivery area?</h3>
                        <p className='help_para'>We currently deliver within a 10-mile radius of our main kitchen. Please check our delivery area map for more details.</p>
                    </div>
                    
                    <div className="faq-item">
                        <h3 className='help_heading'>How can I track my order?</h3>
                        <p className='help_para'>Once your order is placed, you will receive a confirmation email with a tracking link. You can use this link to track the status of your order in real-time.</p>
                    </div>
                    
                    <div className="faq-item">
                        <h3 className='help_heading'>What is your refund policy?</h3>
                        <p className='help_para'>If you are not satisfied with your order, please contact our customer support within 24 hours for a refund or replacement.</p>
                    </div>
                </div>
                
                <h2 className='help_heading'>Contact Support</h2>
                <p className='help_para'>If you have any other questions or need further assistance, please reach out to our customer support team:</p>
                <ul className='help_support'>
                    <li>Email: support@fireupthegrill.com</li>
                    <li>Phone: 123-456-7890</li>
                    <li>Live Chat: Available 9 AM - 9 PM daily</li>
                </ul>
            </div>
        </section>
    </main>

       </>
    );
}

export default Help;
