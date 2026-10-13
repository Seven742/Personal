import './index.css'
import profile from "./assets/Profile.jpg";

const SocialLinks = () => {
    return (
        <div className="scene">
            <div className="blob b1" aria-hidden="true"></div>
            <div className="blob b2" aria-hidden="true"></div>

            <div className="card">
                <div className="avatar-wrap">
                    <img className="Pic" src={profile} alt="Profile photo" />
                    <div className="pulse"></div>
                </div>

                <h1>Contact Me</h1>
                <p className="handle">Seven • Creative</p>

                <div className="links">
                    {/* Facebook */}
                    <a
                        className="Link-btn fb"
                        href="https://www.facebook.com/share/17iWLdnQKQ/?mibextid=wwXIfr"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Facebook"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
                            <path
                                d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 4.99 3.66 9.12 8.44 9.93v-7.03H8.08V12.07h2.36V9.79c0-2.33 1.38-3.62 3.5-3.62 1.01 0 2.06.18 2.06.18v2.27h-1.16c-1.14 0-1.5.71-1.5 1.44v1.72h2.56l-.41 2.9h-2.15v7.03C18.34 21.19 22 17.06 22 12.07z"
                                fill="#ffffff"
                            />
                        </svg>
                        <span>Facebook</span>
                    </a>

                    {/* Instagram */}
                    <a
                        className="Link-btn ig"
                        href="https://www.instagram.com/kim.sean76"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Instagram"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
                            <rect
                                x="2"
                                y="2"
                                width="20"
                                height="20"
                                rx="5"
                                fill="none"
                                stroke="#ffffff"
                                strokeWidth="1.6"
                            />
                            <circle cx="12" cy="11.8" r="3" fill="#ffffff" />
                            <circle cx="17.2" cy="6.8" r="0.9" fill="#ffffff" />
                        </svg>
                        <span>Instagram</span>
                    </a>

                    {/* GitHub */}
                    <a
                        className="Link-btn gh"
                        href="https://github.com/Seven742"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.38 7.86 10.9.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.35-1.28-1.71-1.28-1.71-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.26-1.28-5.26-5.72 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .98-.31 3.2 1.18a11.04 11.04 0 0 1 2.92-.39c.99.01 1.99.13 2.93.39 2.21-1.49 3.19-1.18 3.19-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.83 1.19 3.09 0 4.45-2.71 5.42-5.29 5.7.41.36.77 1.08.77 2.18 0 1.58-.01 2.86-.01 3.25 0 .31.21.68.8.56C20.71 21.38 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z" />
                        </svg>
                        <span>GitHub</span>
                    </a>

                    {/* Telegram */}
                    <a
                        className="Link-btn tg"
                        href="https://t.me/Seven1572"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M21 4L3 10l5.5 2.5L11 20l2-5 6-10z" />
                        </svg>
                        <span>Telegram</span>
                    </a>
                </div>

                <footer className="note">Tap a link • Thanks You</footer>
            </div>
        </div>
    );
};

export default SocialLinks;
