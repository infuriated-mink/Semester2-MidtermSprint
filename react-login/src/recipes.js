const recipes = [
    {
      id: 1,
      name: 'Spaghetti Carbonara',
      ingredients: [
        '200g spaghetti',
        '2 large eggs',
        '100g pecorino cheese',
        '100g guanciale or pancetta',
        'Salt and black pepper to taste',
      ],
      description: 'Spaghetti carbonara is a classic Roman pasta dish. The original recipe uses guanciale, pecorino cheese, eggs, and black pepper.',
      instructions: '1. Boil the spaghetti in salted water until al dente. \n2. In a separate pan, sauté the guanciale or pancetta until crispy. \n3. In a bowl, mix eggs, grated pecorino cheese, and black pepper. \n4. Drain the cooked spaghetti and toss it with the egg and cheese mixture. \n5. Add the crispy guanciale or pancetta. \n6. Serve immediately with an extra sprinkle of cheese and pepper.'
    },
    {
      id: 2,
      name: 'Chicken Alfredo',
      ingredients: [
        '2 boneless, skinless chicken breasts',
        '8 oz fettuccine pasta',
        '1 cup heavy cream',
        '1/2 cup grated Parmesan cheese',
        '2 cloves garlic, minced',
        '2 tablespoons butter',
        'Salt and black pepper to taste',
      ],
      description: 'Chicken Alfredo is a creamy Italian-American pasta dish. It features tender chicken and a rich Alfredo sauce.',
      instructions: '1. Season chicken breasts with salt and pepper, then cook them in a pan until no longer pink. \n2. In another pan, melt butter and sauté garlic until fragrant. \n3. Stir in heavy cream and Parmesan cheese. \n4. Cook until the sauce thickens. \n5. Cook fettuccine pasta according to the package instructions. \n6. Slice the cooked chicken and add it to the sauce. \n7. Serve the chicken Alfredo over the cooked fettuccine.'
    },
  ];
  
  export default recipes;
  
  function addRecipe(newRecipe) {
    recipes.push(newRecipe);
  }
  
  export { recipes, addRecipe };