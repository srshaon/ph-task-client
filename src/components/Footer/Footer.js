import React from "react";
import { AiOutlineInstagram, AiOutlineYoutube } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { Container } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer__component mt-5 pt-4">
            <div className="footer_main py-5 mx-5">
                <div className="row">
                    <div className="col-md-3">
                        <div className="download-icons p-2 ms-5">
                            <h6 className="mb-3 footer-header"> Subscribe</h6>
                            <form>
                                <div className="mb-3">
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Enter Your Email..."
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary">
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="footer-menu p-2 ms-5">
                            <h6 className="mb-3 footer-header"> Menu </h6>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="#about"> About </a>
                                </li>
                                <li>
                                    <a href="#media"> Media </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="p-2">
                            <h6 className="mb-3 footer-header"> Contact Me </h6>

                            <p>Email: support@gmail.com.bd</p>
                            <p>Contact no: +8801711111111</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="social-icons float-md-end p-2 me-5">
                            <h6 className="mb-3 footer-header">Get in Touch</h6>
                            <a href="https://facebook.com" className="social_bg facebook-bg">
                                <FaFacebookF />
                            </a>
                            <a
                                href="https://iastagram.com"
                                className="social_bg instagram-bg"
                            >
                                <AiOutlineInstagram />
                            </a>
                            <a href="https://youtube.com" className="social_bg youtube-bg">
                                <AiOutlineYoutube />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <p className="text-center pt-3">&copy; 2023 All rights reserved.</p>
        </div>
    );
};

export default Footer;
