import React from 'react'

const services = [
    { id: 1, title: "Frontend Development", description: "Building modern and responsive web interfaces using ReactJS and TailwindCSS." },
    { id: 2, title: "UI/UX Implementation", description: "Turning designs into clean and user-friendly interfaces with a focus on usability." },
    { id: 3, title: "Problem Solving", description: "Applying critical thinking to solve logical and technical challenges efficiently." },
    { id: 4, title: "Backend Integration", description: "Connecting frontend applications to backend services and APIs." },
    { id: 5, title: "Responsive Web Design", description: "Making sure websites look great and work smoothly across all devices." },
    { id: 6, title: "API Handling", description: "Fetching, sending, and managing data between client and server for dynamic web applications." }
]

const Services = () => {
    return (
        <div className="bg-black text-white py-20" id="services">
            <div className="max-w-screen-xl mx-auto px-6 md:px-16 lg:px-24">
                <h2 className="text-4xl font-bold text-center mb-12">My Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {services.map(service => (
                        <div
                            key={service.id}
                            className="bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-xl transform transition-transform duration-300 hover:scale-105"
                        >
                            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-700 mb-2">
                                {service.id < 10 ? `0${service.id}` : service.id}
                            </div>
                            <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-700 mb-2">
                                {service.title}
                            </h3>
                            <p className="text-gray-300 mb-4">{service.description}</p>
                            <a
                                href="#"
                                className="inline-block text-sm font-medium text-pink-400 hover:text-purple-400 transition-colors duration-200"
                            >
                                Read More →
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Services
