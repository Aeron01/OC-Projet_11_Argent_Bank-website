import iconChat from "../../assets/img/icon-chat.webp"
import iconMoney from "../../assets/img/icon-money.webp"
import iconSecurity from "../../assets/img/icon-security.webp"

function Home() {
    return (
        <main>
            <section className="banner">
                <article className="banner__content">
                <h1 className="banner__subtitle">Welcom to Argent Bank !</h1>
                <br></br>
                <p className="banner__subtitle">No fees.</p>
                <p className="banner__subtitle">No minimum deposit.</p>
                <p className="banner__subtitle">High interest rates.</p>
                <br></br>
                <p className="banner__text">Open a savings account with Argent Bank today!</p>
                </article>
            </section>

            <section className="features">
                <div className="feature__item">
                    <img src={iconChat} alt="Chat Icon" className="feature__icon" />
                    <h2 className="feature__item-title">You are our #1 priority</h2>
                    <p className="feature__item-text">
                        Need to talk to a representative? You can get in touch through our
                        24/7 chat or through a phone call in less than 5 minutes.
                    </p>
                </div>

                <div className="feature__item">
                    <img
                        src={iconMoney}
                        alt="Chat Icon"
                        className="feature__icon"
                    />
                    <h2 className="feature__item-title">More savings means higher rates</h2>
                    <p className="feature__item-text">
                        The more you save with us, the higher your interest rate will be!
                    </p>
                </div>

                <div className="feature__item">
                    <img
                        src={iconSecurity}
                        alt="Chat Icon"
                        className="feature__icon"
                    />
                    <h2 className="feature__item-title">Security you can trust</h2>
                    <p className="feature__item-text">
                        We use top of the line encryption to make sure your data and money
                        is always safe.
                    </p>
                </div>
            </section>
        </main>
    )
}

export default Home