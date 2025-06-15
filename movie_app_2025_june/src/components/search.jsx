import React from 'react';

const Search = ({ searchTerm, setSearchTerm }) => {
    return (
        <div className="relative w-full max-w-xl mx-auto mt-6">
            <img
                src="search.svg"
                alt="search"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 opacity-70 z-10"
            />
            <input
                type="text"
                placeholder="Search through thousands of movies"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white/10 backdrop-blur-md text-white placeholder-white/70 rounded-md border border-white/20 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent z-0"
            />
        </div>
    );
};

export default Search;
