import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className='bg-black text-white py-10'>
            <div className='max-w-7xl mx-auto px-6 md:px-12 lg:px-24'>
                {/* Top Info Section */}
                <div className='mb-8 text-center md:text-left'>
                    <h3 className='text-2xl font-bold mb-2'>Kienny</h3>
                    <p className='text-gray-400'>
                        Based in Lucena City, Philippines — available for remote work and collaborations worldwide.
                    </p>
                </div>

                {/* Divider */}
                <div className='border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center gap-6'>
                    {/* Copyright */}
                    <p className='text-gray-400 text-sm'>
                        &copy; {new Date().getFullYear()} All rights reserved.
                    </p>

                    {/* Social Icons */}
                    <div className='flex space-x-5 text-xl'>
                        <a
                            href="https://www.facebook.com/share/19nktxNqMo/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Facebook"
                            title="Facebook"
                            className='hover:text-pink-400 transition'
                        >
                            <FaFacebook />
                        </a>
                        <a
                            href="https://github.com/Kienny043"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GitHub"
                            title="GitHub"
                            className='hover:text-pink-400 transition'
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="https://x.com/CarabidoCa24503?t=wLTpovkpL59CliKq1SiSSQ&s=09"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Twitter"
                            title="Twitter"
                            className='hover:text-pink-400 transition'
                        >
                            <FaTwitter />
                        </a>
                        <a
                            href="https://www.instagram.com/crlknny?igsh=MWxrY3kzY3l6aXA5cA=="
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Instagram"
                            title="Instagram"
                            className='hover:text-pink-400 transition'
                        >
                            <FaInstagram />
                        </a>
                    </div>

                    {/* Footer Links */}
                    <div className='flex space-x-6 text-sm'>
                        <a href="#" className='text-gray-400 hover:text-white transition'>Privacy</a>
                        <a href="#" className='text-gray-400 hover:text-white transition'>Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
