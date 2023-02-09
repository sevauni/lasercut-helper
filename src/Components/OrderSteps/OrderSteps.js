import './OrderSteps.scss'
import Accordion from 'react-bootstrap/Accordion';

const test = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
minim veniam, quis nostrud exercitation ullamco laboris nisi ut
aliquip ex ea commodo consequat. Duis aute irure dolor in
reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
culpa qui officia deserunt mollit anim id est laborum.`;




function OrderStepsQuoteEditing() {
    return (
        <div className='order-steps__quote-edit-step-1'>
            <h5>Order Summary:</h5>
            <span>Shipment date:</span>
            <span className='order-steps__quote-edit-step-1_right'>1337:</span>
            <span>2 parts / 6 pcs:</span>
            <span className='order-steps__quote-edit-step-1_right'>1337</span>
            <span>Shipping cost:S</span>
            <span className='order-steps__quote-edit-step-1_right'>1337</span>
            <div className='order-steps__quote-edit-step-1__promo '>

            </div>
            <h5>Order Summary:</h5>
            <span className='order-steps__quote-edit-step-1_right'>excl. VAT€ 78.24</span>
            <button>Procced</button>
            <button>Procced</button>

        </div>
    )
}





export default function OrderSteps() {
    return (
        <aside className="order-steps order-steps__card-holder quote-page-card-box">
            <div>
                <h5>ORDERSTEPS</h5>
            </div>
            <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Step 1 - Quote editing</Accordion.Header>
                    <Accordion.Body>
                        {OrderStepsQuoteEditing()}
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Step 2 - Certifications (optional)</Accordion.Header>
                    <Accordion.Body>
                        {test}
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Step 3 - Shipping</Accordion.Header>
                    <Accordion.Body>
                        {test}
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>Step 4 - Review & Payment</Accordion.Header>
                    <Accordion.Body>
                        {test}
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </aside>
    )
}
