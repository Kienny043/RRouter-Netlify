import React from 'react';
import AkoItuu from '../assets/normal.png';

const About = () => {
    return (
        <section className="bg-black text-white px-6 py-20 min-h-[calc(100vh-128px)] flex items-center" id="about">
            {/* Content Container */}
            <div className="max-w-screen-xl mx-auto w-full">
                <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>

                <div className="flex flex-col md:flex-row items-center gap-10">
                    {/* Picture kuu */}
                    <img
                        src={AkoItuu}
                        alt="Portrait of Carl Kien Carabido"
                        className="w-64 h-80 object-cover rounded shadow-lg"
                    />
                    {/* Text about me */}
                    <div className="flex-1">
                        <p className="text-lg mb-8 text-gray-300">
                            I’m a second-year BSIT student at Dalubhasaan ng Lungsod ng Lucena, aspiring to become a full-stack developer who specializes in critical thinking and solving logical problems.
                        </p>

                        {/* Skill Bar para astig */}
                        <div className="space-y-5">
                            {[
                                { skill: 'ReactJS', width: 'w-10/12' },
                                { skill: 'TailwindCSS', width: 'w-8/12' },
                                { skill: 'Logical Thinking', width: 'w-11/12' },
                                { skill: 'Problem Solving', width: 'w-9/12' },
                            ].map(({ skill, width }) => (
                                <div key={skill} className="flex flex-col sm:flex-row sm:items-center">
                                    <span className="sm:w-2/12 text-sm mb-1 sm:mb-0">{skill}</span>
                                    <div className="flex-1 bg-gray-800 rounded-full h-2.5">
                                        <div
                                            className={`h-2.5 rounded-full bg-gradient-to-r from-pink-500 to-purple-800 transform transition-transform duration-300 hover:scale-105 ${width}`}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* 3 stats pang padami */}
                        <div className="mt-12 grid grid-cols-3 gap-6 text-center">
                            <div>
                                <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-800 text-transparent bg-clip-text">2</h3>
                                <p className="text-sm text-gray-400">Years Experience</p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-800 text-transparent bg-clip-text">∞</h3>
                                <p className="text-sm text-gray-400">Learning Passion</p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-800 text-transparent bg-clip-text">10+</h3>
                                <p className="text-sm text-gray-400">Projects</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
