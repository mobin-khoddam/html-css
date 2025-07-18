import { Link } from 'react-router-dom'

const Challenges = () => {
    return (
        <article class="product">
            <h2 class="product-title">Converse Chuck Taylor All Star Low Top</h2>
            <img
                src="https://i.imgur.com/ZrTU3VK.jpeg"
                alt="Chuck Taylor All Star Shoe"
                height="250"
                width="250"
            />
            <p class="price"><strong>$65.00</strong></p>
            <p class="shipping">Free shipping</p>
            <p class="sale">Sale</p>

            <p class="product-description">
                Ready to dress up or down, these classic canvas Chucks are an everyday
                wardrobe staple.
            </p>
            <Link to="https://converse.com" target="_blank" class="more-info">More information &rarr;</Link>

            <div class="colors">
                <div class="color"></div>
                <div class="color color-blue"></div>
                <div class="color color-red"></div>
                <div class="color color-yellow"></div>
                <div class="color color-green"></div>
                <div class="color color-brown"></div>
            </div>

            <h3 class="details-title">Product details</h3>
            <ul class="details-list">
                <li>Lightweight, durable canvas sneaker</li>
                <li>Lightly padded footbed for added comfort</li>
                <li>Iconic Chuck Taylor ankle patch.</li>
            </ul>
            <button class="add-cart">Add to cart</button>
        </article>
    )
}

export default Challenges