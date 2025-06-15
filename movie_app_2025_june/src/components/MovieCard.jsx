// import React from 'react'
//
// const MovieCard = ({movie : {title, vote_average, poster_path, release_date, original_language}}) => {
//     return (
//         <div className="movie-card">
//             <img src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}`:`/no-movie.png`}
//             alt={title}
//             />
//
//             <div className="mt-4">
//                 <h3>{title}</h3>
//                 <div className="content">
//                 <div className="rating">
//                  <img src="star.svg" alt="Star Icon" />
//                  <p>{vote_average ? vote_average.toFixed(1) : 'N/A'}</p>
//                 </div>
//                     <span>•••</span>
//                     <p className="lang">{original_language}</p>
//
//                     <span>•</span>
//                     <p className="year">
//                         {release_date ? release_date.split('-')[0] : 'N/A'}
//                     </p>
//
//                 </div>
//             </div>
//
//             <p className="text-white">{title}</p>
//         </div>
//     )
// }
// export default MovieCard


// new

// import React from 'react';
//
// const MovieCard = ({ movie }) => {
//     console.log("Movie Data:", movie);
//
//     const { title, vote_average, poster_path, release_date, original_language } = movie;
//     return (
//         <div className="movie-card bg-white/10 p-4 rounded text-white">
//             <img
//                 src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : `/no-movie.png`}
//                 alt={title}
//                 className="w-full rounded"
//             />
//
//             <div className="mt-4">
//                 <h3 className="font-semibold">{title}</h3>
//                 <div className="flex items-center gap-2 text-sm text-gray-300 mt-2">
//                     <div className="flex items-center gap-1">
//                         <img src="/star.svg" alt="Star Icon" className="w-4 h-4" />
//                         <p>{vote_average ? vote_average.toFixed(1) : 'N/A'}</p>
//                     </div>
//
//                     <span>•</span>
//                     <p className="uppercase">{original_language}</p>
//
//                     <span>•</span>
//                     <p>{release_date ? release_date.split('-')[0] : 'N/A'}</p>
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default MovieCard;

// new 2

// import React from 'react'
// const MovieCard = ({ movie }) => {
//     console.log("Movie Data:", movie); // This will work
//
//     const { title,
//             vote_average,
//             poster_path,
//             release_date,
//             original_language,
//         } = movie;
//
//     return (
//         <div className="movie-card text-white bg-gray-800 p-4 rounded">
//             <img
//                 src={
//                 poster_path
//                     ? `https://image.tmdb.org/t/p/w500/${poster_path}`
//                     : `/no-movie.png`
//                 }
//                 alt={title}
//                 className="w-full rounded"
//             />
//
//             <div className="mt-4">
//                 <h3 className="text-lg font-bold">{title}</h3>
//                 <div className="content flex items-center gap-2 mt-2">
//                     <div className="rating flex items-center gap-1">
//                         <img src="/star.svg"
//                              alt="Star Icon"
//                              className="w-4 h-4"
//                         />
//                         <p className="text-sm">{vote_average ? vote_average.toFixed(1) : 'N/A'}</p>
//                     </div>
//                     <span>•••</span>
//                     <p className="lang text-sm">{original_language}</p>
//                     <span>•</span>
//                     <p className="year text-sm">
//                         {release_date ? release_date.split('-')[0] : 'N/A'}
//                     </p>
//                 </div>
//             </div>
//
//
//         </div>
//     );
// };
//
// export default MovieCard;

// -----------------------------------------------------------------
// new4

// import React from 'react';
//
// const MovieCard = ({ movie }) => {
//     const {
//         title,
//         vote_average,
//         poster_path,
//         release_date,
//         original_language,
//     } = movie;
//
//     return (
//         <div className="movie-card bg-gray-800 text-white p-4 rounded-lg shadow-lg">
//             <img
//                 src={poster_path
//                     ? `https://image.tmdb.org/t/p/w500/${poster_path}`
//                     : '/no-movie.png'}
//                 alt={title}
//                 className="w-full h-auto rounded"
//             />
//
//             <div className="mt-4">
//                 <h3 className="text-lg font-bold">{title}</h3>
//
//                 <div className="content flex items-center gap-2 mt-2 text-sm">
//                     {/* ⭐ STAR + RATING */}
//                     <div className="rating flex items-center gap-1">
//                         <img
//                             src="/star.svg"
//                             alt="Star Icon"
//                             width={16}
//                             height={16}
//                             className="inline-block"
//                         />
//                         <p>{vote_average ? vote_average.toFixed(1) : 'N/A'}</p>
//                     </div>
//
//                     <span className="text-gray-400">•</span>
//
//                     {/* 🌐 LANGUAGE */}
//                     <p className="lang uppercase">{original_language}</p>
//
//                     <span className="text-gray-400">•</span>
//
//                     {/* 📅 YEAR */}
//                     <p className="year">
//                         {release_date ? release_date.split('-')[0] : 'N/A'}
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default MovieCard;

// ------------------------------------------------------------------------

import React from 'react';

const MovieCard = ({ movie }) => {
    console.log("MOVIE PROP:", movie);
    if (!movie) return null;
    const {
        title,
        vote_average,
        poster_path,
        release_date,
        original_language,
    } = movie;

    // console.log("Movie Data:", {
    //     title,
    //     vote_average,
    //     poster_path,
    //     release_date,
    //     original_language,
    // });

    // const {
    //     title = "Unknown Title",
    //     vote_average = 0,
    //     poster_path = "",
    //     release_date = "",
    //     original_language = "en"
    // } = movie || {};



    return (
        <div className="movie-card bg-dark-100 text-white p-4 rounded-2xl shadow-inner shadow-light-100/10">
            <img
                src={
                    poster_path
                        ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                        : '/no-movie.png'
                }
                alt={title}
                className="w-full h-auto rounded-lg"
            />

            <div className="mt-4">
                <h3 className="text-white font-bold text-base line-clamp-1">{title}</h3>

                {/* Details Section */}
                <div className="content mt-2 flex flex-row items-center flex-wrap gap-2">
                    {/* Rating */}
                    {vote_average !== undefined && (
                        <div className="rating flex flex-row items-center gap-1">
                            <img
                                src="/star.svg"
                                alt="Star Icon"
                                width={16}
                                height={16}
                                className="object-contain"
                            />
                            <p className="font-bold text-base text-white">
                                {vote_average.toFixed(1)}
                            </p>
                        </div>
                    )}

                    {/* Language */}
                    {original_language && (
                        <>
                            <span className="text-sm text-gray-100">•</span>
                            <p className="lang capitalize text-gray-100 font-medium text-base">
                                {original_language}
                            </p>
                        </>
                    )}

                    {/* Release Year */}
                    {release_date && (
                        <>
                            <span className="text-sm text-gray-100">•</span>
                            <p className="year text-gray-100 font-medium text-base">
                                {release_date.split('-')[0]}
                            </p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MovieCard;


// adrian full code
// -------------------------------------------------------------------

// import React from 'react'
//
// const MovieCard = ({ movie:
//     { title, vote_average, poster_path, release_date, original_language }
//                    }) => {
//     return (
//         <div className="movie-card">
//             <img
//                 src={poster_path ?
//                     `https://image.tmdb.org/t/p/w500/${poster_path}` : '/no-movie.png'}
//                 alt={title}
//             />
//
//             <div className="mt-4">
//                 <h3>{title}</h3>
//
//                 <div className="content">
//                     <div className="rating">
//                         <img src="starr.svg" alt="Star Icon" />
//                         <p>{vote_average ? vote_average.toFixed(1) : 'N/A'}</p>
//                     </div>
//
//                     <span>•</span>
//                     <p className="lang">{original_language}</p>
//
//                     <span>•</span>
//                     <p className="year">
//                         {release_date ? release_date.split('-')[0] : 'N/A'}
//                     </p>
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default MovieCard