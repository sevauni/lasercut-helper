import './CurrentItems.scss'

import ItemCard from '../ItemCard/ItemCard';




export default function CurrentItems() {
    return (
        <main className="current-items quote-page-card-box">
            <div>
                <h5>Order Items</h5>
            </div>
            <div>
            <ItemCard/>
            <ItemCard/>
                {/* <ItemCard></ItemCard>
                <ItemCard></ItemCard>
                <ItemCard></ItemCard> */}
            </div>
        </main>
    )
}
