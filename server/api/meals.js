// server/api/meals.js
export default defineEventHandler(async (event) => {
    // Fetch or return data from your database
    const meals = [
      { name: 'Fajita Chicken Pasta', category: 'Dinner', area: 'unknown',
            ingredients:{
            "pasta": {
                type: "rigatoni or penne",
                quantity:"4",
                unit: "cup",
                
            },
            "milk": {
                type:"any",
                quantity:"5",
                unit: "cup",
            },
            "fajita seasoning":{
                type:"any",
                quantity:"2",
                unit:"packet"
            },
            "chicken breast":{
                type:"cubed",
                quantity:"3",
                unit: "none",
            },
            "white onion":{
                type:"finely diced",
                quantity:"1",
                unit: "any",
            },
            "red bell pepper":{
                type:"sliced",
                quantity:"1",
                unit: "any",
            },
            "green bell pepper":{
                type:"sliced",
                quantity:"1",
                unit: "any",
            },
            "yellow bell pepper":{
                type:"sliced",
                quantity:"1",
                unit: "any",
            },
            "garlic":{
                type:"minced",
                quantity:"2",
                unit: "cloves",
            },
            "pepper jack cheese":{
                type:"shredded",
                quantity:"1",
                unit: "cup",
            },
            "parsley":{
                type:"chopped",
                quantity:"any",
                unit: "garnish",
            },
            seasoning:{

                salt:{
                    type:"kosher",
                    quantity:"1",
                    unit: "tsp",
                },
                oil:{
                    type:"olive",
                    quantity:"3",
                    unit: "tbsp",
                },
                pepper:{
                    type:"black",
                    quantity:"1",
                    unit: "tsp",
                },
                cumin:{
                    type:"ground",
                    quantity:"1",
                    unit: "tbsp",
                },
                garlic:{
                    type:"powder",
                    quantity:"1",
                    unit: "tbsp",
                },
                chili:{
                    type:"powder",
                    quantity:"1",
                    unit: "tbsp",
                }
            }
        },
        time: {
                type:"minutes",
                min:30,
                max:45
            },
        dificulty:"easy",

        chef:"Woodro",

        description: "This simple recipe combines chicken fajitas and pasta in one delicious dish made in just one pot. It boasts a blend of Tex-Mex flavors in a comforting dish that we'd enjoy any day of the week — or weekend! Start by searing sliced chicken in a pot until golden, then sauté bell peppers and onions until caramelized. Season generously with garlic, cumin, and chili powder, and let the flavors meld. Add milk and penne to the pot; let the pasta soak up the rich spices as it simmers to tender perfection, and the sauce thickens into a creamy coating that clings to each pasta tube. Stir in pepper Jack cheese for a flavorful dish that seriously satisfies the soul!",
        
        preparations:{
            1:"Heat the oil in a large pot over high heat.",
            2:"Add the chicken and cook until no longer pink, 5-6 minutes, then remove from the pot.",
            3:"Add the bell peppers and onion and cook until the onion is translucent, about 6 minutes.",
            4:"Add the chicken back to the pot, along with the salt, pepper, chili powder, cumin, and garlic powder, and stir until evenly coated, about 30 seconds.",
            5:"Add the milk and the penne, stirring constantly to prevent the pasta from sticking.",
            6:"Cook for about 20 minutes, until pasta is tender and the milk has reduced to a thick sauce that coats the pasta.",
            7:"Add the cheese and mix until melted.",
            8:"Enjoy!"
        }

    },
      
];
    return meals;
  });
  