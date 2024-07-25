import { ID, Query } from "appwrite";
import { database } from "~/appwrite";
import { ref } from "vue";

const ideasDatabaseId = import.meta.env.VITE_APPWRITE_CHEFS_CLUB_DB;
const ideasCollectionId = import.meta.env.VITE_APPWRITE_PROFILE_COLLECTION_ID;
const updatedProfilesCollectionId = import.meta.env.VITE_APPWRITE_UPDATED_PROFILE_COLLECTION_ID;
const queryLimit = 10;

const current = ref(null); // Reference for the fetched data

export const useProfiles = () => {

    // Fetch the 10 most recent ideas from the database
    // Add the list to the current reference object
    const fetch = async () => {
        const response = await database.listDocuments(
            ideasDatabaseId,
            ideasCollectionId,
            [Query.orderDesc("$createdAt"), Query.limit(queryLimit)]
        );
        current.value = response.documents;
        // console.log(response)
    };

    // Add new idea to the database,
    // Change the value of the current object
    const add = async (profile) => {
        const response = await database.createDocument(
            ideasDatabaseId,
            ideasCollectionId,
            ID.unique(),
            profile
        );
        current.value = [response, ...current.value].slice(0, 10);
    };

    const addUpdatedProfile = async (profile) => {
        const response = await database.createDocument(
            ideasDatabaseId,
            updatedProfilesCollectionId,
            ID.unique(),
            profile
        );
        current.value = [response, ...current.value].slice(0, 10);
    };

    const remove = async (id) => {
        await database.deleteDocument(ideasDatabaseId, ideasCollectionId, id);
        await fetch(); // Refetch ideas to ensure we have 10 items
    };

    fetch();

    return {
        add,
        addUpdatedProfile,
        current,
        fetch,
        remove,
    };
};
