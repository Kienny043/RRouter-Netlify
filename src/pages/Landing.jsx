import React from 'react'
import AngBida from '../assets/hero.png'
import { Link } from 'react-router-dom'

const Landing = () => {
    return (
        <div className='bg-black text-white text-center px-4 flex items-center justify-center min-h-[calc(100vh-128px)]'>

            <div>
                {/* Picture kuu */}
                <img
                    src={AngBida}
                    alt="Portrait of Carl Kien Carabido"
                    className='mx-auto mb-8 w-48 h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 rounded-full object-cover transform transition-transform duration-300 hover:scale-105'
                />
                {/* intro */}
                <h1 className='text-3xl md:text-4xl font-bold leading-tight'>
                    I'm{" "}
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-800'>
                        Carl Kien Carabido
                    </span>
                    , an Aspiring Full-Stack Developer
                </h1>

                <p className='mt-4 text-lg text-gray-300'>
                    I specialize in logical thinking and backend development.
                </p>
                {/* buttons */}
                <div className='mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center'>
                    <Link to="/contact" className='w-full sm:w-auto'>
                        <button className='w-full sm:w-auto bg-gradient-to-r from-pink-500 to-purple-800 text-white px-6 py-2 rounded-full transform transition-transform duration-300 hover:scale-105'>
                            Contact Me!
                        </button>
                    </Link>
                    <Link to="/projects" className='w-full sm:w-auto'>
                        <button className='w-full sm:w-auto bg-gradient-to-r from-pink-500 to-purple-800 text-white px-6 py-2 rounded-full transform transition-transform duration-300 hover:scale-105'>
                            Projects
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Landing
