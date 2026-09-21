import Image from 'next/image';
import React from 'react';
import bannerImg from '@/assets/hero_img.jpg';

const Banner = () => {
    return (
        <section className="py-10 md:py-16">
            <div className="container mx-auto px-4">
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-100 via-white to-emerald-50 px-6 py-10 md:px-12 md:py-14 shadow-sm">

                    {/* Content */}
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-14">

                        {/* Left Side */}
                        <div className="space-y-6">
                            <span className="inline-block rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
                                📚 Discover Your Next Read
                            </span>

                            <h1 className="text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl lg:text-6xl">
                                Books to freshen up
                                <span className="block text-emerald-600">
                                    your bookshelf
                                </span>
                            </h1>

                            <p className="max-w-lg text-base leading-7 text-slate-600 md:text-lg">
                                Explore amazing books, discover new stories, and
                                find your next favorite read to add to your
                                collection.
                            </p>

                            <div className="flex flex-wrap gap-3">
                                <button className="btn btn-success rounded-full px-7 text-white shadow-md hover:scale-105 transition-transform">
                                    View The List →
                                </button>

                                <button className="btn btn-outline rounded-full px-7">
                                    Explore Books
                                </button>
                            </div>
                        </div>

                        {/* Right Side */}
                        <div className="relative flex justify-center">
                            <div className="absolute -inset-4 rounded-full bg-emerald-200/30 blur-3xl"></div>

                            <Image
                                src={bannerImg}
                                alt="Books on a bookshelf"
                                priority
                                className="relative w-full max-w-md rounded-2xl object-cover shadow-2xl"
                            />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;