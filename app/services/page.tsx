
import { services } from "../constants/constatnts"

export default function Page() {
    return (
        <section className="min-h-screen flex items-center py-20 mt-5">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header - Centered */}
                <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
                    {/* Section Label */}
                    <div className="inline-flex items-center gap-3 mb-4">
                        <div className="w-12 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
                        <span className="text-sm font-semibold text-purple-400 tracking-wider uppercase">
                            Services
                        </span>
                        <div className="w-12 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
                    </div>

                    {/* Section Title */}
                    <h2 className="text-4xl lg:text-6xl font-light text-gray-100 mb-6">
                        Professional{" "}
                        <span className="font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 text-transparent bg-clip-text">
                            Services
                        </span>
                    </h2>

                    {/* Header Content */}
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                        I provide end-to-end financial solutions designed to{" "}
                        <span className="text-white font-medium">simplify compliance, strengthen reporting,</span>
                        and <span className="text-white font-medium">drive business growth</span>.
                    </p>
                </div>


                {/* Bento Box Grid */}
                <div className="grid grid-cols-1 md:grid-cols-6 gap-6 auto-rows-fr">
                    {/* Web Development - Hero Card (Large) */}
                    <div className="md:col-span-4 group bg-gray-800 rounded-lg shadow-md border border-gray-700 p-8 transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:border-gray-600 opacity-0 translate-y-8 animate-fade-in"
                        style={{ animationDelay: '0ms' }}>
                        <div className="h-full flex flex-col justify-between">
                            <div>
                                {/* Service Number */}
                                <div className="flex items-start justify-between mb-6">
                                    <span className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-gray-600 to-gray-700 text-gray-100 font-semibold rounded-lg group-hover:from-gray-500 group-hover:to-gray-600 transition-all duration-300 text-lg">
                                        {services[0].id}
                                    </span>
                                    {services[0].featured && (
                                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                                            Popular
                                        </span>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-semibold text-gray-100 group-hover:text-white transition-colors duration-300">
                                        {services[0].title}
                                    </h3>
                                    <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                                        {services[0].description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Apps - Tall Card */}
                    <div className="md:col-span-2 group bg-gray-800 rounded-lg shadow-md border border-gray-700 p-6 transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:border-gray-600 opacity-0 translate-y-8 animate-fade-in"
                        style={{ animationDelay: '100ms' }}>
                        <div className="h-full flex flex-col justify-between">
                            <div>
                                {/* Service Number */}
                                <div className="flex items-start justify-between mb-6">
                                    <span className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-700 text-gray-100 font-semibold rounded-lg group-hover:from-gray-500 group-hover:to-gray-600 transition-all duration-300">
                                        {services[1].id}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="space-y-4">
                                    <h3 className="text-xl font-semibold text-gray-100 group-hover:text-white transition-colors duration-300">
                                        {services[1].title}
                                    </h3>
                                    <p className="text-gray-300 leading-relaxed text-sm group-hover:text-gray-200 transition-colors duration-300">
                                        {services[1].description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* UI/UX Design - Medium Card */}
                    <div className="md:col-span-3 group bg-gray-800 rounded-lg shadow-md border border-gray-700 p-6 transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:border-gray-600 opacity-0 translate-y-8 animate-fade-in"
                        style={{ animationDelay: '200ms' }}>
                        <div className="h-full flex flex-col justify-between">
                            <div>
                                {/* Service Number */}
                                <div className="flex items-start justify-between mb-6">
                                    <span className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-700 text-gray-100 font-semibold rounded-lg group-hover:from-gray-500 group-hover:to-gray-600 transition-all duration-300">
                                        {services[2].id}
                                    </span>
                                    {services[2].featured && (
                                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                                            Popular
                                        </span>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="space-y-4">
                                    <h3 className="text-xl font-semibold text-gray-100 group-hover:text-white transition-colors duration-300">
                                        {services[2].title}
                                    </h3>
                                    <p className="text-gray-300 leading-relaxed text-sm group-hover:text-gray-200 transition-colors duration-300">
                                        {services[2].description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Digital Marketing - Medium Card */}
                    <div className="md:col-span-3 group bg-gray-800 rounded-lg shadow-md border border-gray-700 p-6 transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:border-gray-600 opacity-0 translate-y-8 animate-fade-in"
                        style={{ animationDelay: '300ms' }}>
                        <div className="h-full flex flex-col justify-between">
                            <div>
                                {/* Service Number */}
                                <div className="flex items-start justify-between mb-6">
                                    <span className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-700 text-gray-100 font-semibold rounded-lg group-hover:from-gray-500 group-hover:to-gray-600 transition-all duration-300">
                                        {services[3].id}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="space-y-4">
                                    <h3 className="text-xl font-semibold text-gray-100 group-hover:text-white transition-colors duration-300">
                                        {services[3].title}
                                    </h3>
                                    <p className="text-gray-300 leading-relaxed text-sm group-hover:text-gray-200 transition-colors duration-300">
                                        {services[3].description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* E-commerce - Small Card */}
                    <div className="md:col-span-4 group bg-gray-800 rounded-lg shadow-md border border-gray-700 p-6 transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:border-gray-600 opacity-0 translate-y-8 animate-fade-in"
                        style={{ animationDelay: '400ms' }}>
                        <div className="h-full flex flex-col justify-between">
                            <div>
                                {/* Service Number */}
                                <div className="flex items-start justify-between mb-6">
                                    <span className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-700 text-gray-100 font-semibold rounded-lg group-hover:from-gray-500 group-hover:to-gray-600 transition-all duration-300">
                                        {services[4].id}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="space-y-4">
                                    <h3 className="text-xl font-semibold text-gray-100 group-hover:text-white transition-colors duration-300">
                                        {services[4].title}
                                    </h3>
                                    <p className="text-gray-300 leading-relaxed text-sm group-hover:text-gray-200 transition-colors duration-300">
                                        {services[4].description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Consulting - Small Card */}
                    <div className="md:col-span-2 group bg-gray-800 rounded-lg shadow-md border border-gray-700 p-6 transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:border-gray-600 opacity-0 translate-y-8 animate-fade-in"
                        style={{ animationDelay: '500ms' }}>
                        <div className="h-full flex flex-col justify-between">
                            <div>
                                {/* Service Number */}
                                <div className="flex items-start justify-between mb-6">
                                    <span className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-700 text-gray-100 font-semibold rounded-lg group-hover:from-gray-500 group-hover:to-gray-600 transition-all duration-300">
                                        {services[5].id}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="space-y-4">
                                    <h3 className="text-xl font-semibold text-gray-100 group-hover:text-white transition-colors duration-300">
                                        {services[5].title}
                                    </h3>
                                    <p className="text-gray-300 leading-relaxed text-sm group-hover:text-gray-200 transition-colors duration-300">
                                        {services[5].description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
