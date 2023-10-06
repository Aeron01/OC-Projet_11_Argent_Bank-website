import iconChat from "../../assets/img/icon-chat.png"
import iconMoney from "../../assets/img/icon-money.png"
import iconSecurity from "../../assets/img/icon-security.png"

function Home() {
    return (
        <main>
            <section className="hero">
                <article className="hero-content">
                <h1 className="sr-only">Promoted Content</h1>
                <p className="subtitle">No fees.</p>
                <p className="subtitle">No minimum deposit.</p>
                <p className="subtitle">High interest rates.</p>
                <p className="text">Open a savings account with Argent Bank today!</p>
                </article>
            </section>

            <section className="features">
                <div className="feature-item">
                    <img src={iconChat} alt="Chat Icon" className="feature-icon" />
                    <h2 className="feature-item-title">You are our #1 priority</h2>
                    <p>
                        Need to talk to a representative? You can get in touch through our
                        24/7 chat or through a phone call in less than 5 minutes.
                    </p>
                </div>

                <div className="feature-item">
                    <img
                        src={iconMoney}
                        alt="Chat Icon"
                        className="feature-icon"
                    />
                    <h2 className="feature-item-title">More savings means higher rates</h2>
                    <p>
                        The more you save with us, the higher your interest rate will be!
                    </p>
                </div>

                <div className="feature-item">
                    <img
                        src={iconSecurity}
                        alt="Chat Icon"
                        className="feature-icon"
                    />
                    <h2 className="feature-item-title">Security you can trust</h2>
                    <p>
                        We use top of the line encryption to make sure your data and money
                        is always safe.
                    </p>
                </div>
            </section>
        </main>
    )
}

export default Home