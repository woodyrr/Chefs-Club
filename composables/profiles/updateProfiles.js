import { ID, Query } from "appwrite";
import { database } from "~/appwrite";
import { ref } from "vue";

const ideasDatabaseId = import.meta.env.VITE_APPWRITE_CHEFS_CLUB_DB;
const updatedProfilesCollectionId = import.meta.env.VITE_APPWRITE_UPDATED_PROFILE_COLLECTION_ID;
const queryLimit = 10;

const recent = ref(null); // Reference for the fetched data

export const updateProfiles = () => {

    // Fetch the 10 most recent ideas from the database
    // Add the list to the current reference object
    const fetch = async () => {
        const response = await database.listDocuments(
            ideasDatabaseId,
            updatedProfilesCollectionId,
            [Query.orderDesc("$createdAt"), Query.limit(queryLimit)]
        );
        recent.value = response.documents;
        // console.log(response)
    };


    const addUpdatedProfile = async (profile) => {
        const response = await database.createDocument(
            ideasDatabaseId,
            updatedProfilesCollectionId,
            ID.unique(),
            profile
        );
        recent.value = [response, ...recent.value].slice(0, 10);
    };

    

    fetch();

    return {
        addUpdatedProfile,
        recent,
        fetch,
        
    };
};
