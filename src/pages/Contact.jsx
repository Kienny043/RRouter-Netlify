import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkedAlt } from 'react-icons/fa';

const Contacts = () => {
    return (
        <section className='bg-black text-white py-20 px-4' id='contact'>
            <div className='max-w-7xl mx-auto'>
                <h2 className='text-4xl font-bold text-center mb-16'>Contacts</h2>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-start'>
                    {/* Text Side */}
                    <div>
                        <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500 mb-6'>
                            Let's Talk
                        </h3>
                        <p className='mb-6 text-gray-300 leading-relaxed'>
                            I'm always open to exciting new projects, business partnerships, and collaborations.
                            If you have an idea or opportunity, feel free to reach out, and let's create something amazing together.
                        </p>
                        <ul className='space-y-4 text-sm sm:text-base'>
                            <li className='flex items-center'>
                                <FaEnvelope className='text-pink-400 mr-3' />
                                <a href="mailto:carabido.carlkien.dll@gmail.com" className='hover:underline'>
                                    carabido.carlkien.dll@gmail.com
                                </a>
                            </li>
                            <li className='flex items-center'>
                                <FaPhone className='text-pink-400 mr-3' />
                                <span>+63 969 259 6963</span>
                            </li>
                            <li className='flex items-center'>
                                <FaMapMarkedAlt className='text-pink-400 mr-3' />
                                <span>Brgy. Ilayang Iyam, Lucena City, Quezon, Philippines</span>
                            </li>
                        </ul>
                    </div>

                    {/* Form Side */}
                    <div className='w-full'>
                        <form className='space-y-6'>
                            <div>
                                <label htmlFor="name" className='block mb-2 font-medium text-sm'>Your Name</label>
                                <input
                                    type="text"
                                    className='w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-sm focus:outline-none focus:border-pink-400 transition-all'
                                    placeholder='Enter Your Name'
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className='block mb-2 font-medium text-sm'>Email</label>
                                <input
                                    type="email"
                                    className='w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-sm focus:outline-none focus:border-pink-400 transition-all'
                                    placeholder='Enter Your Email'
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className='block mb-2 font-medium text-sm'>Message</label>
                                <textarea
                                    className='w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-sm focus:outline-none focus:border-pink-400 transition-all resize-none'
                                    rows='5'
                                    placeholder='Enter Your Message'
                                />
                            </div>
                            <button
                                type="submit"
                                className='w-full md:w-auto bg-gradient-to-r from-pink-500 to-purple-800 text-white px-10 py-3 rounded-full font-semibold transition-transform transform hover:scale-105 duration-300'
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contacts;
