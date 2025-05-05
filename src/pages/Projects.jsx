import { useEffect, useState } from 'react';
import axios from 'axios';

const Projects = () => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true); // loading state

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                // Simulate a delay (e.g., 1.5 seconds)
                setTimeout(async () => {
                    const response = await axios.get('https://api.github.com/users/Kienny043/repos');
                    setRepos(response.data);
                    setLoading(false); // stop loading
                }, 1500);
            } catch (error) {
                console.error('Failed to fetch repos:', error);
                setLoading(false);
            }
        };

        fetchRepos();
    }, []);

    return (
        <div className="bg-black text-white py-20 min-h-[calc(100vh-128px)] flex items-center justify-center" id="projects">
            <div className="max-w-screen-xl mx-auto px-6 md:px-16 lg:px-24 w-full">
                <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>

                {loading ? (
                    <div className="flex justify-center items-center py-20">
                        <div className="w-12 h-12 border-4 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {repos.map((repo, index) => (
                            <div
                                key={repo.id}
                                className="bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-xl transform transition-transform duration-300 hover:scale-105"
                            >
                                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-500 mb-2 text-right">
                                    {index + 1 < 10 ? `0${index + 1}` : index + 1}
                                </div>
                                <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-500 truncate">
                                    {repo.name}
                                </h3>
                                <p className="text-gray-300 mt-2 text-sm min-h-[60px]">
                                    {repo.description || "No description provided."}
                                </p>
                                <div className="mt-4 flex flex-wrap gap-3">
                                    <a
                                        href={repo.html_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-1 bg-pink-600 text-sm rounded-full hover:bg-purple-700 transition-colors duration-300"
                                    >
                                        View Repo
                                    </a>
                                    {repo.homepage && (
                                        <a
                                            href={repo.homepage}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-4 py-1 bg-blue-500 text-sm rounded-full hover:bg-green-500 transition-colors duration-300"
                                        >
                                            View Site
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Projects;
