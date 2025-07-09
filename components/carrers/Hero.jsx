import './Hero.css';

export default function Hero() {
    return(
        <section className="career-hero">
            <div className="career-hero__content">
                
                <div className="career-hero__text">
                    <h1 style={{color:"#5a3816"}}>Grow Your Career with GIEO GITA</h1>
                    <p style={{color:"#5a3816"}}>
                        Join our mission to empower lives through the wisdom of the Bhagavad Gita.<br />
                        At GIEO GITA, we nurture talent, encourage growth, and inspire you to make a meaningful impact.
                    </p>
                </div>
              
                <div className="career-hero__image">
                    <img
                        src="\assets\images\Carrers\heroImage.jpg"
                        alt="Career Growth at GIEO GITA"
                        width={400}
                        height={300}
                        style={{ borderRadius: '12px', objectFit: 'cover', width: '100%', height: 'auto' }}
                    />
                </div>
            </div>
        </section>
    )
}