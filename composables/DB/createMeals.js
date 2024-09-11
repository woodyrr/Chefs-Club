import { database, ID, Permission, Role } from 'appwrite';

const createRecipe = async (recipeData, isPublic, userId) => {
    const permissions = [
        Permission.read(isPublic ? Role.any() : Role.user(userId)), // Public or private read access
        Permission.update(Role.user(userId)), // Only the owner can update
        Permission.delete(Role.user(userId)), // Only the owner can delete
    ];

    const response = await database.createDocument(
        'your_database_id',          // Database ID
        'your_recipes_collection_id', // Recipes collection ID
        ID.unique(),                  // Unique ID for the recipe
        recipeData,                   // The recipe data
        permissions                   // Permissions array
    );
    return response;
};
