import Link from "next/link";
import utilsStyles from "../../styles/Utils.module.scss";
import LogoMaker from "../LogoMaker";
import navbarStyles from "./Navbar.module.scss";


const Navbar = () => {
    return (
        <>
            <div className={navbarStyles.navigation_section}>
                <div className={navbarStyles.top_navbar_container}>
                    <div className={utilsStyles.container}>
                        <nav className={navbarStyles.navbar}>
                            <div className={navbarStyles.logo_section}>
                                <Link
                                    href={"/"}
                                >
                                    <a>
                                        <LogoMaker
                                            mainChar="V"
                                            name="askr"
                                        />
                                    </a>
                                </Link>
                            </div>

                            <ul className={`${navbarStyles.navigation_links} ${navbarStyles.link_container}`}>
                                <li>
                                    <Link href={"/"}>
                                        <a>About</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={"/"}>
                                        <a>Projects</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={"/"}>
                                        <a>Blog</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={"/"}>
                                        <a>Contact</a>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className={navbarStyles.bottom_navbar_container}>
                    <ul className={`${navbarStyles.link_container} ${navbarStyles.bottom_navigation_link}`}>
                        <li>
                            <a
                                href={"https://www.linkedin.com/in/vaskrneup/"}
                                target="_blank"
                            >
                                <i className="fab fa-linkedin" aria-hidden></i>
                            </a>
                        </li>
                        <li>
                            <a
                                href={"https://stackoverflow.com/users/10212936/vaskrneup"}
                                target="_blank"
                            >
                                <i className="fab fa-stack-overflow" aria-hidden></i>
                            </a>
                        </li>
                        <li>
                            <a
                                href={"https://github.com/vaskrneup"}
                                target="_blank"
                            >
                                <i className="fab fa-github" aria-hidden></i>
                            </a>
                        </li>
                        <li>
                            <a
                                href={"https://instagram.com/vaskrneup"}
                                target="_blank"
                            >
                                <i className="fab fa-instagram" aria-hidden></i>
                            </a>
                        </li>
                        <li>
                            <a
                                href={"https://twitter.com/vaskrneup/"}
                                target="_blank"
                            >
                                <i className="fab fa-twitter" aria-hidden></i>
                            </a>
                        </li>
                        <li>
                            <a
                                href={"mailto:bhaskar@vaskrneup.com"}
                                target="_blank"
                            >
                                <i className="far fa-envelope" aria-hidden></i>
                            </a>
                        </li>
                    </ul>
                    <div className={navbarStyles.hr}>&nbsp;</div>
                </div>
            </div>
        </>
    );
};


export default Navbar;