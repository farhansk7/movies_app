// import { Client, Databases, ID, Query } from 'appwrite'
//
// const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
// const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
// const COLLECTION_ID = import.meta.env.VITE_APPWRITE_COLLECTION_ID;
//
// const client = new Client()
//     .setEndpoint('https://fra.cloud.appwrite.io/v1')
//     .setProject(PROJECT_ID)
//
// const database = new Databases(client);
//
// export const updateSearchCount = async (searchTerm, movie) => {
//     // 1. Use Appwrite SDK to check if the search term exists in the database
//     try {
//         const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID, [
//             Query.equal('searchTerm', searchTerm),
//         ])
//
//         // 2. If it does, update the count
//         if(result.documents.length > 0) {
//             const doc = result.documents[0];
//
//             await database.updateDocument(DATABASE_ID, COLLECTION_ID, doc.$id, {
//                 count: doc.count + 1,
//             })
//             // 3. If it doesn't, create a new document with the search term and count as 1
//         } else {
//             await database.createDocument(DATABASE_ID, COLLECTION_ID, ID.unique(), {
//                 searchTerm,
//                 count: 1,
//                 movie_id: movie.id,
//                 poster_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
//             })
//         }
//     } catch (error) {
//         console.error(error);
//     }
// }
//
// export const getTrendingMovies = async () => {
//     try {
//         const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID, [
//             Query.limit(5),
//             Query.orderDesc("count")
//         ])
//
//         return result.documents;
//     } catch (error) {
//         console.error(error);
//     }
// }


// new code
//
// import { Client, Databases, ID, Query } from 'appwrite';
//
// // Make sure these are defined in `.env` AND in Vercel Environment Variables
// const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
// const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
// const COLLECTION_ID = import.meta.env.VITE_APPWRITE_COLLECTION_ID;
//
// // Validate environment variables
// if (!PROJECT_ID || !DATABASE_ID || !COLLECTION_ID) {
//     throw new Error('Missing Appwrite environment variables!');
// }
//
// const client = new Client()
//     .setEndpoint('https://fra.cloud.appwrite.io/v1') // Replace with your Appwrite endpoint
//     .setProject(PROJECT_ID);
//
// const database = new Databases(client);
//
// // Update search term count or create new
// export const updateSearchCount = async (searchTerm, movie) => {
//     if (!searchTerm || !movie) return;
//
//     try {
//         const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID, [
//             Query.equal('searchTerm', searchTerm),
//         ]);
//
//         if (result && result.documents && result.documents.length > 0) {
//
//             const doc = result.documents[0];
//             await database.updateDocument(DATABASE_ID, COLLECTION_ID, doc.$id, {
//                 count: doc.count + 1,
//             });
//         } else {
//             await database.createDocument(DATABASE_ID, COLLECTION_ID, ID.unique(), {
//                 searchTerm,
//                 count: 1,
//                 movie_id: movie.id,
//                 poster_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
//                 title: movie.title,
//             });
//         }
//     } catch (error) {
//         console.error('Error in updateSearchCount:', error);
//     }
// };
//
// // Get trending movies
// export const getTrendingMovies = async () => {
//     try {
//         const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID, [
//             Query.orderDesc('count'),
//             Query.limit(5)
//         ]);
//         return result.documents;
//     } catch (error) {
//         console.error('Error in getTrendingMovies:', error);
//         return [];
//     }
// };

// new code 8:29


import { Client, Databases, ID, Query } from 'appwrite';

// Environment variables
const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const COLLECTION_ID = import.meta.env.VITE_APPWRITE_COLLECTION_ID;

// Validate .env setup
if (!PROJECT_ID || !DATABASE_ID || !COLLECTION_ID) {
    throw new Error('Missing Appwrite environment variables! Check .env and Vercel.');
}

// Initialize Appwrite client
const client = new Client()
    .setEndpoint('https://fra.cloud.appwrite.io/v1') // Replace if using a different region
    .setProject(PROJECT_ID);

const database = new Databases(client);

// ✅ Update or create document for searched term
export const updateSearchCount = async (searchTerm, movie) => {
    if (!searchTerm || !movie?.id || !movie?.poster_path) return;

    try {
        const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID, [
            Query.equal('searchTerm', searchTerm),
        ]);

        if (result?.documents?.length > 0) {
            const doc = result.documents[0];
            await database.updateDocument(DATABASE_ID, COLLECTION_ID, doc.$id, {
                count: doc.count + 1,
            });
        } else {
            await database.createDocument(DATABASE_ID, COLLECTION_ID, ID.unique(), {
                searchTerm,
                count: 1,
                movie_id: movie.id,
                title: movie.title || 'Untitled',
                poster_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            });
        }
    } catch (error) {
        console.error('❌ Error in updateSearchCount:', error.message || error);
    }
};

// ✅ Get top 5 trending searched movies
export const getTrendingMovies = async () => {
    try {
        const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID, [
            Query.orderDesc('count'),
            Query.limit(5),
        ]);
        return result?.documents || [];
    } catch (error) {
        console.error('❌ Error in getTrendingMovies:', error.message || error);
        return [];
    }
};
