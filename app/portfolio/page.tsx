import { projects } from "../constants/constatnts";

export default function Page() {
    return (
        <section className="min-h-screen flex items-center py-20 mt-5">
            {/* Style Switcher */}
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-wrap gap-3 justify-center">
                    {/* Header */}
                    <div className="text-center mb-20 animate-fade-in">
                        {/* Section Label */}
                        <div className="inline-flex items-center gap-3 mb-4">
                            <div className="w-12 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
                            <span className="text-sm font-semibold text-purple-400 tracking-wider uppercase">
                                Portfolio
                            </span>
                            <div className="w-12 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
                        </div>

                        {/* Section Title */}
                        <h2 className="text-4xl lg:text-6xl font-light text-white mb-6">
                            Showcasing{" "}
                            <span className="font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 text-transparent bg-clip-text">
                                Selected Works
                            </span>
                        </h2>
                        
                        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mt-4 leading-relaxed">
                            Below are a few highlights that showcase my expertise and passion for
                            <span className="text-white font-medium"> delivering value through innovation</span>.
                        </p>
                    </div>


                    {/* Minimal Grid */}
                    <div className="space-y-12">
                        {projects.map((project, index) => (
                            <div
                                key={project.id}
                                className={`group flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center gap-12 cursor-pointer animate-fade-in`}
                            >
                                {/* Image */}
                                <div className="w-1/2 relative overflow-hidden">
                                    <div className="aspect-video rounded-lg overflow-hidden">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                                </div>

                                {/* Content */}
                                <div className="w-1/2">
                                    <div className="space-y-4">
                                        <span className="text-blue-400 text-sm font-mono">0{project.id}</span>
                                        <h3 className="text-4xl font-light text-white group-hover:text-blue-400 transition-colors duration-300">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-400 leading-relaxed">
                                            {project.description}
                                        </p>
                                        <div className="flex items-center gap-4">
                                            <span className="text-gray-500">{project.year}</span>
                                            <div className="w-12 h-px bg-gray-700 group-hover:bg-blue-500 group-hover:w-16 transition-all duration-300"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

