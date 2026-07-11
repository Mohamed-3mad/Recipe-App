var recipeContainer = document.getElementById("recipeContainer");

var recipes = [
  {
    image: "photo-1612874742237-6526221588e3.jfif",
    rate: "4.8",
    reviews: "(234 reviews)",
    prepTime: "15 min",
    cookTime: "20 min",
    peopleServing: "4 people",
    receipeWay: "Easy",
    foodCountry: "Italian",
    mealTitle: "Creamy Spaghetti Carbonara",
    mealReceipe: "A classic Italian pasta dish with eggs, cheese, and pancetta",
    ingredients: [
      "400g spaghetti pasta",
      "200g pancetta or guanciale, diced",
      "4 large eggs",
      "100g Pecorino Romano cheese, grated",
      "50g Parmesan cheese, grated",
      "Freshly ground black pepper",
      "Salt for pasta water",
    ],
    instructions: [
      "Bring a large pot of salted water to boil. Cook spaghetti according to package directions until al dente.",
      "While pasta cooks, heat a large skillet over medium heat. Add diced pancetta and cook until crispy, about 5-7 minutes.",
      "In a bowl, whisk together eggs, grated Pecorino Romano, and Parmesan cheese. Add plenty of freshly ground black pepper.",
      "Reserve 1 cup of pasta cooking water before draining. Drain pasta and immediately add to the skillet with pancetta.",
      "Remove skillet from heat. Quickly pour in egg mixture while tossing pasta vigorously. Add reserved pasta water as needed to create a creamy sauce.",
      "Serve immediately with extra cheese and black pepper on top. Enjoy your authentic carbonara!",
    ],
    calCount: "520 kcal",
    proteinCount: "28g",
    carbCount: "62g",
    fatCount: "18g",
    fiberCount: "3g",
    sodiumCount: "680mg",
    tips: [
      "Use room temperature eggs for a smoother sauce consistency",
      "Work quickly when mixing eggs with hot pasta to avoid scrambling",
      "Reserve extra pasta water - it's the secret to perfect creaminess",
      "Freshly grated cheese makes all the difference in flavor",
      "Never add cream - authentic carbonara is made with eggs only",
    ],
  },
  {
    image: "photo-1467003909585-2f8a72700288.jfif",
    rate: "4.9",
    reviews: "(187 reviews)",
    prepTime: "10 min",
    cookTime: "15 min",
    peopleServing: "2 people",
    receipeWay: "Easy",
    foodCountry: "Seafood",
    mealTitle: "Honey Garlic Salmon",
    mealReceipe: "Pan-seared salmon with a sweet and savory glaze",
    ingredients: [
      "2 salmon fillets (6oz each)",
      "3 tablespoons honey",
      "2 tablespoons soy sauce",
      "4 cloves garlic, minced",
      "1 tablespoon olive oil",
      "1 teaspoon fresh ginger, grated",
      "Sesame seeds for garnish",
      "Green onions, sliced",
    ],
    instructions: [
      "Pat salmon fillets dry with paper towels. Season with salt and pepper.",
      "In a small bowl, whisk together honey, soy sauce, minced garlic, and grated ginger.",
      "Heat olive oil in a large skillet over medium-high heat.",
      "Place salmon fillets skin-side up in the pan. Cook for 4-5 minutes until golden.",
      "Flip salmon and pour honey garlic sauce over the top. Cook for another 4-5 minutes.",
      "Garnish with sesame seeds and sliced green onions. Serve with steamed vegetables or rice.",
    ],
    calCount: "380 kcal",
    proteinCount: "35g",
    carbCount: "28g",
    fatCount: "14g",
    fiberCount: "0g",
    sodiumCount: "720mg",
    tips: [
      "Don't overcook salmon - it should be slightly pink in the center",
      "Use wild-caught salmon for best flavor and nutrition",
      "Let the sauce caramelize slightly for deeper flavor",
      "Pair with steamed broccoli or asparagus for a complete meal",
    ],
  },
  {
    image: "photo-1455619452474-d2be8b1e70cd.jfif",
    rate: "4.7",
    reviews: "(312 reviews)",
    prepTime: "15 min",
    cookTime: "25 min",
    peopleServing: "4 people",
    receipeWay: "Intermediate",
    foodCountry: "Asian",
    mealTitle: "Thai Green Curry",
    mealReceipe: "Vibrant and aromatic curry with vegetables and coconut milk",
    ingredients: [
      "2 tablespoons green curry paste",
      "400ml coconut milk",
      "300g chicken breast, sliced",
      "1 red bell pepper, sliced",
      "100g green beans",
      "1 eggplant, cubed",
      "2 tablespoons fish sauce",
      "1 tablespoon palm sugar",
      "Fresh Thai basil leaves",
    ],
    instructions: [
      "Heat a large pot or wok over medium heat. Add curry paste and cook for 1 minute until fragrant.",
      "Add half the coconut milk and stir to combine with the curry paste.",
      "Add sliced chicken and cook until no longer pink, about 5 minutes.",
      "Add remaining coconut milk, vegetables, fish sauce, and palm sugar.",
      "Simmer for 15-20 minutes until vegetables are tender and sauce has thickened.",
      "Stir in fresh Thai basil leaves. Serve hot with jasmine rice.",
    ],
    calCount: "420 kcal",
    proteinCount: "26g",
    carbCount: "22g",
    fatCount: "26g",
    fiberCount: "5g",
    sodiumCount: "890mg",
    tips: [
      "Adjust spice level by using more or less curry paste",
      "Add vegetables in stages based on cooking time needed",
      "Fresh Thai basil is essential for authentic flavor",
      "Use full-fat coconut milk for richest, creamiest sauce",
    ],
  },
  {
    image: "photo-1568901346375-23c9450c58cd.jfif",
    rate: "4.6",
    reviews: "(421 reviews)",
    prepTime: "15 min",
    cookTime: "20 min",
    peopleServing: "4 people",
    receipeWay: "Easy",
    foodCountry: "American",
    mealTitle: "Classic Beef Burger",
    mealReceipe: "Juicy homemade burger with all the fixings",
    ingredients: [
      "500g ground beef (80/20)",
      "4 burger buns",
      "4 slices cheddar cheese",
      "Lettuce leaves",
      "Tomato slices",
      "Red onion, sliced",
      "Pickles",
      "Burger sauce or condiments",
    ],
    instructions: [
      "Divide ground beef into 4 equal portions. Form into patties, making a small indent in the center.",
      "Season patties generously with salt and pepper on both sides.",
      "Heat a grill or skillet over high heat. Cook patties for 4-5 minutes per side for medium.",
      "Add cheese slices in the last minute of cooking and cover to melt.",
      "Toast burger buns lightly on the grill or in a pan.",
      "Assemble burgers with lettuce, tomato, onion, pickles, and your favorite sauce.",
    ],
    calCount: "650 kcal",
    proteinCount: "38g",
    carbCount: "42g",
    fatCount: "35g",
    fiberCount: "2g",
    sodiumCount: "920mg",
    tips: [
      "Don't press down on burgers while cooking - keeps them juicy",
      "Make indent in center to prevent burger from puffing up",
      "Let patties rest for 2-3 minutes before serving",
      "Toast buns for better texture and flavor",
    ],
  },
  {
    image: "photo-1546069901-ba9599a7e63c.jfif",
    rate: "4.5",
    reviews: "(156 reviews)",
    prepTime: "20 min",
    cookTime: "35 min",
    peopleServing: "2 people",
    receipeWay: "Easy",
    foodCountry: "Mediterranean",
    mealTitle: "Mediterranean Quinoa Bowl",
    mealReceipe: "Healthy bowl with quinoa, vegetables, and tahini dressing",
    ingredients: [
      "1 cup quinoa",
      "Cherry tomatoes, halved",
      "Cucumber, diced",
      "Red onion, sliced",
      "Kalamata olives",
      "Feta cheese, crumbled",
      "Fresh parsley",
      "Tahini dressing",
    ],
    instructions: [
      "Rinse quinoa thoroughly. Cook according to package directions, usually 15 minutes.",
      "While quinoa cooks, prepare all vegetables and set aside.",
      "For tahini dressing: mix tahini, lemon juice, garlic, and water until smooth.",
      "Fluff cooked quinoa with a fork and let cool slightly.",
      "Arrange quinoa in bowls. Top with tomatoes, cucumber, onion, and olives.",
      "Sprinkle with feta cheese and fresh parsley. Drizzle with tahini dressing.",
    ],
    calCount: "480 kcal",
    proteinCount: "18g",
    carbCount: "58g",
    fatCount: "20g",
    fiberCount: "10g",
    sodiumCount: "540mg",
    tips: [
      "Rinse quinoa well to remove bitter coating",
      "Let quinoa cool before adding fresh ingredients",
      "Make extra tahini dressing - it keeps well in the fridge",
      "Add grilled chicken or chickpeas for extra protein",
    ],
  },
  {
    image: "photo-1565557623262-b51c2513a641.jfif",
    rate: "4.7",
    reviews: "(389 reviews)",
    prepTime: "20 min",
    cookTime: "30 min",
    peopleServing: "4 people",
    receipeWay: "Intermediate",
    foodCountry: "Asian",
    mealTitle: "Chicken Tikka Masala",
    mealReceipe: "Rich and creamy Indian curry with tender chicken pieces",
    ingredients: [
      "600g chicken breast, cubed",
      "1 cup plain yogurt",
      "2 tablespoons tikka masala paste",
      "400ml coconut cream",
      "1 onion, diced",
      "4 cloves garlic, minced",
      "2 tablespoons ginger, grated",
      "400g canned tomatoes",
      "Fresh cilantro for garnish",
    ],
    instructions: [
      "Marinate chicken in half the yogurt and 1 tablespoon tikka paste for at least 30 minutes.",
      "Heat oil in a large pan, cook marinated chicken until browned. Remove and set aside.",
      "In the same pan, sauté onion until soft. Add garlic and ginger, cook for 1 minute.",
      "Add remaining tikka paste and canned tomatoes. Simmer for 10 minutes.",
      "Stir in coconut cream and remaining yogurt. Add chicken back to the pan.",
      "Simmer for 15 minutes until sauce thickens. Garnish with cilantro and serve with rice.",
    ],
    calCount: "450 kcal",
    proteinCount: "38g",
    carbCount: "24g",
    fatCount: "22g",
    fiberCount: "4g",
    sodiumCount: "760mg",
    tips: [
      "Marinate chicken overnight for deeper flavor",
      "Use full-fat coconut cream for richest sauce",
      "Adjust spice level by varying the tikka paste amount",
      "Serve with naan bread and basmati rice",
    ],
  },
  {
    image: "photo-1574071318508-1cdbab80d002.jfif",
    rate: "4.9",
    reviews: "(512 reviews)",
    prepTime: "90 min",
    cookTime: "12 min",
    peopleServing: "2 people",
    receipeWay: "Intermediate",
    foodCountry: "Italian",
    mealTitle: "Margherita Pizza",
    mealReceipe: "Classic Italian pizza with fresh mozzarella and basil",
    ingredients: [
      "300g pizza dough",
      "200g crushed tomatoes",
      "250g fresh mozzarella",
      "Fresh basil leaves",
      "2 tablespoons olive oil",
      "2 cloves garlic, minced",
      "Salt and pepper to taste",
      "Parmesan cheese for topping",
    ],
    instructions: [
      "Let pizza dough come to room temperature and rest for 1 hour.",
      "Preheat oven to maximum temperature (usually 250°C/480°F).",
      "Mix crushed tomatoes with olive oil, garlic, salt, and pepper for the sauce.",
      "Roll out dough on a floured surface to desired thickness.",
      "Spread tomato sauce, add torn mozzarella pieces, and drizzle with olive oil.",
      "Bake for 10-12 minutes until crust is golden. Top with fresh basil and parmesan.",
    ],
    calCount: "580 kcal",
    proteinCount: "24g",
    carbCount: "68g",
    fatCount: "22g",
    fiberCount: "4g",
    sodiumCount: "920mg",
    tips: [
      "Use a pizza stone for crispier crust",
      "Don't overload with toppings - less is more",
      "Add basil after baking to keep it fresh",
      "Let dough rest properly for best texture",
    ],
  },
  {
    image: "photo-1565299585323-38d6b0865b47.jfif",
    rate: "4.6",
    reviews: "(278 reviews)",
    prepTime: "15 min",
    cookTime: "20 min",
    peopleServing: "4 people",
    receipeWay: "Easy",
    foodCountry: "American",
    mealTitle: "Beef Tacos",
    mealReceipe: "Flavorful Mexican tacos with seasoned ground beef",
    ingredients: [
      "500g ground beef",
      "8 taco shells",
      "1 onion, diced",
      "2 tablespoons taco seasoning",
      "Shredded lettuce",
      "Diced tomatoes",
      "Shredded cheddar cheese",
      "Sour cream",
      "Salsa",
    ],
    instructions: [
      "Heat a large skillet over medium-high heat. Cook ground beef until browned.",
      "Add diced onion and cook until softened, about 5 minutes.",
      "Stir in taco seasoning and 1/2 cup water. Simmer for 10 minutes.",
      "Warm taco shells according to package directions.",
      "Fill each shell with seasoned beef.",
      "Top with lettuce, tomatoes, cheese, sour cream, and salsa. Serve immediately.",
    ],
    calCount: "420 kcal",
    proteinCount: "26g",
    carbCount: "32g",
    fatCount: "20g",
    fiberCount: "4g",
    sodiumCount: "780mg",
    tips: [
      "Drain excess fat from beef for healthier tacos",
      "Warm shells in oven for better texture",
      "Prepare all toppings before cooking beef",
      "Use ground turkey for a lighter option",
    ],
  },
  {
    image: "photo-1546793665-c74683f339c1.jfif",
    rate: "4.4",
    reviews: "(198 reviews)",
    prepTime: "15 min",
    cookTime: "0 min",
    peopleServing: "2 people",
    receipeWay: "Easy",
    foodCountry: "Mediterranean",
    mealTitle: "Caesar Salad",
    mealReceipe: "Classic salad with crispy romaine and creamy dressing",
    ingredients: [
      "1 large romaine lettuce",
      "1/2 cup Caesar dressing",
      "1/2 cup parmesan cheese, shaved",
      "1 cup croutons",
      "2 anchovy fillets (optional)",
      "Lemon wedges",
      "Black pepper",
    ],
    instructions: [
      "Wash and dry romaine lettuce thoroughly. Tear into bite-sized pieces.",
      "Place lettuce in a large salad bowl.",
      "Add Caesar dressing and toss until evenly coated.",
      "Add croutons and half the parmesan cheese. Toss gently.",
      "Top with remaining parmesan shavings and anchovies if using.",
      "Serve immediately with lemon wedges and fresh black pepper.",
    ],
    calCount: "320 kcal",
    proteinCount: "12g",
    carbCount: "18g",
    fatCount: "22g",
    fiberCount: "3g",
    sodiumCount: "680mg",
    tips: [
      "Use cold, crisp lettuce for best texture",
      "Make homemade croutons for better flavor",
      "Add grilled chicken for a complete meal",
      "Don't dress salad until ready to serve",
    ],
  },
  {
    image: "padtahi.avif",
    rate: "4.8",
    reviews: "(445 reviews)",
    prepTime: "20 min",
    cookTime: "15 min",
    peopleServing: "2 people",
    receipeWay: "Intermediate",
    foodCountry: "Asian",
    mealTitle: "Pad Thai",
    mealReceipe: "Popular Thai stir-fried noodles with shrimp and peanuts",
    ingredients: [
      "200g rice noodles",
      "200g shrimp, peeled",
      "2 eggs",
      "3 tablespoons tamarind paste",
      "2 tablespoons fish sauce",
      "1 tablespoon palm sugar",
      "Bean sprouts",
      "Crushed peanuts",
      "Lime wedges and cilantro",
    ],
    instructions: [
      "Soak rice noodles in warm water for 30 minutes. Drain and set aside.",
      "Mix tamarind paste, fish sauce, and palm sugar to make the sauce.",
      "Heat wok over high heat. Scramble eggs and set aside.",
      "Cook shrimp until pink. Add noodles and sauce, toss for 2-3 minutes.",
      "Add scrambled eggs and bean sprouts. Toss everything together.",
      "Serve topped with crushed peanuts, lime wedges, and cilantro.",
    ],
    calCount: "540 kcal",
    proteinCount: "32g",
    carbCount: "62g",
    fatCount: "16g",
    fiberCount: "4g",
    sodiumCount: "1120mg",
    tips: [
      "Don't oversoak noodles or they'll be mushy",
      "Cook on high heat for authentic wok flavor",
      "Balance sweet, sour, and salty flavors",
      "Prepare all ingredients before starting to cook",
    ],
  },
  {
    image: "photo-1547592166-23ac45744acd.jfif",
    rate: "4.7",
    reviews: "(267 reviews)",
    prepTime: "15 min",
    cookTime: "60 min",
    peopleServing: "4 people",
    receipeWay: "Intermediate",
    foodCountry: "Mediterranean",
    mealTitle: "French Onion Soup",
    mealReceipe: "Rich beef broth with caramelized onions and melted cheese",
    ingredients: [
      "4 large onions, thinly sliced",
      "4 tablespoons butter",
      "1 liter beef broth",
      "1/2 cup white wine",
      "2 bay leaves",
      "Fresh thyme",
      "Baguette slices",
      "200g Gruyère cheese, grated",
    ],
    instructions: [
      "Melt butter in a large pot. Add onions and cook slowly for 40 minutes, stirring occasionally until caramelized.",
      "Add white wine and deglaze the pot, scraping up brown bits.",
      "Pour in beef broth, add bay leaves and thyme. Simmer for 20 minutes.",
      "Meanwhile, toast baguette slices until golden.",
      "Ladle soup into oven-safe bowls. Top with toasted bread and cheese.",
      "Broil for 3-5 minutes until cheese is melted and bubbly. Serve hot.",
    ],
    calCount: "380 kcal",
    proteinCount: "18g",
    carbCount: "36g",
    fatCount: "18g",
    fiberCount: "4g",
    sodiumCount: "980mg",
    tips: [
      "Patience is key - don't rush the onion caramelization",
      "Use good quality beef broth for best flavor",
      "Gruyère can be substituted with Swiss cheese",
      "Watch carefully when broiling to avoid burning",
    ],
  },
  {
    image: "photo-1603133872878-684f208fb84b.jfif",
    rate: "4.5",
    reviews: "(324 reviews)",
    prepTime: "15 min",
    cookTime: "15 min",
    peopleServing: "4 people",
    receipeWay: "Easy",
    foodCountry: "Asian",
    mealTitle: "Chicken Stir-Fry",
    mealReceipe: "Quick and healthy stir-fry with colorful vegetables",
    ingredients: [
      "500g chicken breast, sliced",
      "2 bell peppers, sliced",
      "1 broccoli head, florets",
      "2 carrots, julienned",
      "3 tablespoons soy sauce",
      "2 tablespoons oyster sauce",
      "1 tablespoon sesame oil",
      "2 cloves garlic, minced",
      "Fresh ginger, grated",
    ],
    instructions: [
      "Mix soy sauce, oyster sauce, and sesame oil for the sauce.",
      "Heat wok over high heat with oil. Cook chicken until golden, remove and set aside.",
      "Add more oil if needed. Stir-fry garlic and ginger for 30 seconds.",
      "Add vegetables, starting with hardest ones (carrots, broccoli). Cook for 3-4 minutes.",
      "Return chicken to wok, add bell peppers and sauce. Toss for 2 minutes.",
      "Serve immediately over steamed rice or noodles.",
    ],
    calCount: "320 kcal",
    proteinCount: "34g",
    carbCount: "18g",
    fatCount: "12g",
    fiberCount: "5g",
    sodiumCount: "840mg",
    tips: [
      "Cut all ingredients before starting to cook",
      "Keep heat high for authentic stir-fry texture",
      "Don't overcrowd the wok or vegetables will steam",
      "Add cashews or peanuts for extra crunch",
    ],
  },
  {
    image: "photo-1574894709920-11b28e7367e3.jfif",
    rate: "4.9",
    reviews: "(478 reviews)",
    prepTime: "30 min",
    cookTime: "90 min",
    peopleServing: "4 people",
    receipeWay: "Intermediate",
    foodCountry: "Italian",
    mealTitle: "Lasagna Bolognese",
    mealReceipe: "Layered Italian pasta with rich meat sauce and béchamel",
    ingredients: [
      "12 lasagna sheets",
      "500g ground beef",
      "400g canned tomatoes",
      "1 onion, diced",
      "2 carrots, diced",
      "500ml béchamel sauce",
      "200g mozzarella, grated",
      "100g parmesan cheese",
      "Fresh basil",
    ],
    instructions: [
      "Cook ground beef with onion and carrots until browned. Add tomatoes and simmer for 30 minutes.",
      "Cook lasagna sheets according to package directions. Drain and set aside.",
      "Preheat oven to 180°C (350°F).",
      "In a baking dish, layer: meat sauce, lasagna sheets, béchamel sauce. Repeat 3-4 times.",
      "Top final layer with béchamel, mozzarella, and parmesan cheese.",
      "Bake for 45 minutes until golden and bubbly. Let rest 10 minutes before serving.",
    ],
    calCount: "680 kcal",
    proteinCount: "42g",
    carbCount: "58g",
    fatCount: "28g",
    fiberCount: "6g",
    sodiumCount: "920mg",
    tips: [
      "Make bolognese sauce a day ahead for better flavor",
      "Don't skip the resting time after baking",
      "Use fresh pasta sheets for best texture",
      "Freeze leftovers in individual portions",
    ],
  },
  {
    image: "photo-1633504581786-316c8002b1b9.jfif",
    rate: "4.8",
    reviews: "(356 reviews)",
    prepTime: "10 min",
    cookTime: "15 min",
    peopleServing: "2 people",
    receipeWay: "Easy",
    foodCountry: "Seafood",
    mealTitle: "Shrimp Scampi",
    mealReceipe: "Garlicky shrimp in white wine butter sauce",
    ingredients: [
      "400g large shrimp, peeled",
      "300g linguine pasta",
      "6 cloves garlic, minced",
      "1/2 cup white wine",
      "4 tablespoons butter",
      "2 tablespoons olive oil",
      "Fresh parsley, chopped",
      "Lemon juice and zest",
      "Red pepper flakes",
    ],
    instructions: [
      "Cook linguine according to package directions. Reserve 1 cup pasta water.",
      "Heat olive oil and 2 tablespoons butter in a large pan. Add garlic and red pepper flakes, cook for 1 minute.",
      "Add shrimp, cook until pink on both sides, about 3-4 minutes. Remove and set aside.",
      "Add white wine to pan, simmer for 2 minutes. Add remaining butter and lemon juice.",
      "Return shrimp to pan, add cooked pasta and toss. Add pasta water if needed.",
      "Garnish with parsley, lemon zest, and serve immediately.",
    ],
    calCount: "520 kcal",
    proteinCount: "36g",
    carbCount: "54g",
    fatCount: "18g",
    fiberCount: "3g",
    sodiumCount: "620mg",
    tips: [
      "Don't overcook shrimp - they cook very quickly",
      "Use good quality white wine for best flavor",
      "Toss pasta in sauce for maximum flavor absorption",
      "Add extra lemon for bright, fresh taste",
    ],
  },
  {
    image: "photo-1585032226651-759b368d7246.jfif",
    rate: "4.6",
    reviews: "(289 reviews)",
    prepTime: "20 min",
    cookTime: "30 min",
    peopleServing: "4 people",
    receipeWay: "Easy",
    foodCountry: "Asian",
    mealTitle: "Vegetable Curry",
    mealReceipe: "Hearty vegetarian curry with coconut milk",
    ingredients: [
      "2 potatoes, cubed",
      "1 cauliflower, florets",
      "2 carrots, sliced",
      "1 can chickpeas",
      "400ml coconut milk",
      "3 tablespoons curry powder",
      "1 onion, diced",
      "3 cloves garlic, minced",
      "Fresh spinach",
    ],
    instructions: [
      "Heat oil in a large pot. Sauté onion until soft, add garlic and curry powder, cook for 1 minute.",
      "Add potatoes and carrots, cook for 5 minutes.",
      "Pour in coconut milk and 1 cup water. Bring to simmer.",
      "Add cauliflower and chickpeas. Cook for 20 minutes until vegetables are tender.",
      "Stir in fresh spinach and cook until wilted.",
      "Serve hot over basmati rice or with naan bread.",
    ],
    calCount: "380 kcal",
    proteinCount: "14g",
    carbCount: "48g",
    fatCount: "16g",
    fiberCount: "12g",
    sodiumCount: "480mg",
    tips: [
      "Add vegetables in order of cooking time needed",
      "Adjust curry powder amount to taste",
      "Use full-fat coconut milk for creamier curry",
      "Add protein like tofu or paneer if desired",
    ],
  },
  {
    image: "photo-1529692236671-f1f6cf9683ba.jfif",
    rate: "4.7",
    reviews: "(412 reviews)",
    prepTime: "15 min",
    cookTime: "240 min",
    peopleServing: "4 people",
    receipeWay: "Easy",
    foodCountry: "American",
    mealTitle: "BBQ Pulled Pork",
    mealReceipe: "Slow-cooked tender pork in smoky barbecue sauce",
    ingredients: [
      "1kg pork shoulder",
      "1 cup BBQ sauce",
      "1/2 cup apple cider vinegar",
      "2 tablespoons brown sugar",
      "1 tablespoon paprika",
      "1 tablespoon garlic powder",
      "Burger buns",
      "Coleslaw for serving",
    ],
    instructions: [
      "Mix paprika, garlic powder, brown sugar, salt and pepper. Rub all over pork shoulder.",
      "Place pork in slow cooker with apple cider vinegar and 1/2 cup water.",
      "Cook on low for 8 hours or high for 4 hours until meat is very tender.",
      "Remove pork and shred with two forks. Discard excess fat.",
      "Return shredded pork to slow cooker, mix with BBQ sauce.",
      "Serve on toasted buns with coleslaw on top.",
    ],
    calCount: "620 kcal",
    proteinCount: "48g",
    carbCount: "52g",
    fatCount: "22g",
    fiberCount: "3g",
    sodiumCount: "1180mg",
    tips: [
      "Use pork shoulder for best results - it stays moist",
      "Let pork rest before shredding for juicier meat",
      "Make your own BBQ sauce for better flavor",
      "Leftovers freeze well for up to 3 months",
    ],
  },
  {
    image: "photo-1601050690597-df0568f70950.jfif",
    rate: "4.8",
    reviews: "(234 reviews)",
    prepTime: "30 min",
    cookTime: "60 min",
    peopleServing: "4 people",
    receipeWay: "Intermediate",
    foodCountry: "Mediterranean",
    mealTitle: "Greek Moussaka",
    mealReceipe: "Traditional layered eggplant casserole with lamb",
    ingredients: [
      "3 large eggplants, sliced",
      "500g ground lamb",
      "400g canned tomatoes",
      "1 onion, diced",
      "3 cloves garlic, minced",
      "500ml béchamel sauce",
      "100g parmesan cheese",
      "Cinnamon and oregano",
      "Olive oil",
    ],
    instructions: [
      "Slice eggplants, salt them, and let sit for 30 minutes. Rinse and pat dry.",
      "Brush eggplant slices with olive oil, grill or bake until softened.",
      "Cook ground lamb with onion and garlic. Add tomatoes, cinnamon, oregano. Simmer 20 minutes.",
      "Preheat oven to 180°C (350°F).",
      "Layer in baking dish: eggplant, meat sauce, eggplant, meat sauce. Top with béchamel and parmesan.",
      "Bake for 45 minutes until golden. Let rest 15 minutes before serving.",
    ],
    calCount: "580 kcal",
    proteinCount: "36g",
    carbCount: "32g",
    fatCount: "32g",
    fiberCount: "8g",
    sodiumCount: "820mg",
    tips: [
      "Salt eggplant to remove bitterness",
      "Don't skip the resting time - it helps set the layers",
      "Use ground beef if lamb is unavailable",
      "Make ahead and reheat for easier serving",
    ],
  },
  {
    image: "photo-1546069901-eacef0df6022.jfif",
    rate: "4.7",
    reviews: "(367 reviews)",
    prepTime: "15 min",
    cookTime: "20 min",
    peopleServing: "2 people",
    receipeWay: "Easy",
    foodCountry: "Asian",
    mealTitle: "Teriyaki Chicken Bowl",
    mealReceipe: "Sweet and savory chicken over rice with vegetables",
    ingredients: [
      "400g chicken thighs, sliced",
      "1/2 cup teriyaki sauce",
      "2 cups cooked rice",
      "1 broccoli head, florets",
      "1 carrot, julienned",
      "Sesame seeds",
      "Green onions, sliced",
      "1 tablespoon sesame oil",
    ],
    instructions: [
      "Heat sesame oil in a pan. Cook chicken until browned on all sides.",
      "Add teriyaki sauce to chicken, simmer for 5 minutes until sauce thickens.",
      "Meanwhile, steam broccoli and carrots until tender-crisp.",
      "Divide rice between bowls.",
      "Top with teriyaki chicken and steamed vegetables.",
      "Garnish with sesame seeds and green onions. Serve hot.",
    ],
    calCount: "540 kcal",
    proteinCount: "42g",
    carbCount: "58g",
    fatCount: "14g",
    fiberCount: "4g",
    sodiumCount: "1240mg",
    tips: [
      "Use chicken thighs for juicier meat",
      "Make homemade teriyaki sauce for better flavor control",
      "Add edamame for extra protein",
      "Meal prep by cooking rice and chicken ahead",
    ],
  },
  {
    image: "photo-1509722747041-616f39b57569.jfif",
    rate: "4.5",
    reviews: "(189 reviews)",
    prepTime: "10 min",
    cookTime: "5 min",
    peopleServing: "2 people",
    receipeWay: "Easy",
    foodCountry: "Italian",
    mealTitle: "Caprese Sandwich",
    mealReceipe: "Fresh Italian sandwich with mozzarella, tomato, and basil",
    ingredients: [
      "1 ciabatta bread",
      "200g fresh mozzarella, sliced",
      "2 large tomatoes, sliced",
      "Fresh basil leaves",
      "3 tablespoons pesto",
      "2 tablespoons balsamic glaze",
      "Olive oil",
      "Salt and pepper",
    ],
    instructions: [
      "Slice ciabatta bread in half horizontally.",
      "Toast bread lightly until just crispy.",
      "Spread pesto on both sides of bread.",
      "Layer mozzarella slices, tomato slices, and fresh basil leaves.",
      "Drizzle with olive oil and balsamic glaze. Season with salt and pepper.",
      "Close sandwich, cut in half, and serve immediately.",
    ],
    calCount: "480 kcal",
    proteinCount: "22g",
    carbCount: "48g",
    fatCount: "22g",
    fiberCount: "3g",
    sodiumCount: "680mg",
    tips: [
      "Use ripe, in-season tomatoes for best flavor",
      "Buffalo mozzarella is traditional but harder to slice",
      "Toast bread lightly - not too crispy",
      "Add prosciutto or salami for a heartier sandwich",
    ],
  },
];

var currentIndex = 0;

function renderNumberedList(items, circleClass) {
  var temp2 = "";
  for (var i = 0; i < items.length; i++) {
    temp2 += `
        <div class="d-flex align-items-center mb-12">
          <div class="num-container p-2 d-flex justify-content-center align-items-center me-12 bg-orange-color fw-bold text-white ${circleClass}">
            <span>${i + 1}</span>
          </div>
          <span>${items[i]}</span>
        </div>`;
  }
  return temp2;
}

function renderTips(items) {
  var temp2 = "";
  for (var i = 0; i < items.length; i++) {
    temp2 += `
        <div class="bg-body-color p-3 mb-3 rounded-3 border-start border-2 border-orange d-flex align-items-center">
          <div class="num-container me-2 bg-orange-color rounded-circle d-flex justify-content-center align-items-center">
            <i class="fa-solid fa-check text-white fs-6"></i>
          </div>
          <p class="m-0 fs-6">${items[i]}</p>
        </div>`;
  }
  return temp2;
}

function nextRecipe() {
  currentIndex = (currentIndex + 1) % recipes.length;
  displayRecipe(currentIndex);
}

function checkCookTime() {
  var alertElement = document.getElementById("show-alert");
  var cookTimeElement = document.getElementById("cookTime");

  if (!alertElement || !cookTimeElement) {
    return;
  }

  var cookTimeText = cookTimeElement.textContent;
  var cookTimeNumber = parseInt(cookTimeText.replace(/[^0-9]/g, ""));

  if (cookTimeNumber > 45) {
    alertElement.classList.remove("d-none");
    alertElement.classList.add("d-flex");
  } else {
    alertElement.classList.remove("d-flex");
    alertElement.classList.add("d-none");
  }
}

function displayRecipe(index) {
  var recipe = recipes[index];

  var temp = `
    <div class="col-12 col-lg-5">
      <div class="handleImage position-relative ">
        <img
          src="./images/${recipe.image}"
          class="rounded-start-3 object-fit-cover w-100 h-100"
          alt="food-image"
          id="foodImage" />
        <div class="image-position1 position-absolute rounded-pill py-2 px-3 bg-white text-black fit-content">
          <i class="fa-solid fa-star text-warning"></i>
          <span id="rate">${recipe.rate} <span class="lead fs-6" id="reviews">${recipe.reviews}</span></span>
        </div>
        <div class="image-position2 translate-middle-x w-75 d-flex gap-4 justify-content-between align-items-center position-absolute rounded-3 p-4 bg-white text-black">
          <div class="text-center">
            <i class="fa-solid fa-clock prim-color fs-4"></i>
            <p class="lead m-0 fs-14">prep-time</p>
            <p id="prepTime" class="fw-bold m-0">${recipe.prepTime}</p>
          </div>
          <div class="text-center">
            <i class="fa-solid fa-fire-burner text-danger fs-4"></i>
            <p class="lead m-0 fs-14">Cook Time</p>
            <p id="cookTime" class="fw-bold m-0">${recipe.cookTime}</p>
          </div>
          <div class="text-center">
            <i class="fa-solid fa-users text-primary fs-4"></i>
            <p class="lead m-0 fs-14">Servings</p>
            <p id="peopleServing" class="fw-bold m-0">${recipe.peopleServing}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="handleScroll col-12 col-lg-7 min-vh-100">
      <div class="sec2 p-4 overflow-y-scroll">
        <div class="mb-4">
          <div class="mb-12">
          <span id="receipeWay" class="bg-green-light fs-6 rounded-pill text-success py-1 px-12 me-12">${recipe.receipeWay}</span>
          <span id="foodCountry" class="bg-blue-light fs-6 rounded-pill text-primary py-1 px-12">${recipe.foodCountry}</span>
        </div>
        <div class="d-flex justify-content-between">
          <div>
            <h3 id="mealTitle" class="mb-2 fw-bold">${recipe.mealTitle}</h3>
            <p id="mealReceipe" class="fs-14">${recipe.mealReceipe}</p>
          </div>
          <div class="d-flex">
            <div class="icon-cont-hover bg-orange-light me-2 w-48-h-48 d-flex justify-content-center align-items-center rounded-3">
              <i class="fa-solid fa-bookmark prim-color"></i>
            </div>
            <div class="icon-cont-hover bg-orange-light w-48-h-48 d-flex justify-content-center align-items-center rounded-3">
              <i class="fa-solid fa-share-nodes prim-color"></i>
            </div>
          </div>
        </div>
        <div id="show-alert" class="show-alert p-3 mb-3 border-start rounded-3 border-2 border-danger bg-red-light text-danger d-none align-items-center">
          <i class="fa-solid fa-triangle-exclamation me-12"></i>
          <div>
            <p class="fs-6 m-0 fw-bold">Extended Preparation Time</p>
            <p class="fs-14-without m-0">This recipe requires more than 45 minutes to prepare. Plan accordingly!</p>
          </div>
        </div>
        </div>
        <div class="wrapper">
          <ul class="nav nav-tabs py-3 mb-4 d-flex justify-content-between" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button class="nav-link pb-2 active " id="buying-tab" data-bs-toggle="tab" data-bs-target="#buying" type="button" role="tab" aria-controls="home" aria-selected="true">
                <i class="fa-solid fa-list-check"></i> Ingredients
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link pb-2 " id="selling-tab" data-bs-toggle="tab" data-bs-target="#selling" type="button" role="tab" aria-controls="selling" aria-selected="false" tabindex="-1">
                <i class="fa-solid fa-book-open"></i> Instructions
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link pb-2 " id="renting-tab" data-bs-toggle="tab" data-bs-target="#renting" type="button" role="tab" aria-controls="renting" aria-selected="false" tabindex="-1">
                <i class="fa-solid fa-chart-pie"></i> Nutrition
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link pb-2 " id="investing-tab" data-bs-toggle="tab" data-bs-target="#investing" type="button" role="tab" aria-controls="investing" aria-selected="false" tabindex="-1">
                <i class="fa-solid fa-lightbulb"></i> Chef's Tips
              </button>
            </li>
          </ul>
          <div class="tab-content tab-scroll-content w-100" id="myTabContent">
            <div class="tab-pane fade show active" id="buying" role="tabpanel" aria-labelledby="buying-tab">
              <div class="p-4 bg-body-color" id="ingredients">
                ${renderNumberedList(recipe.ingredients, "rounded-circle")}
              </div>
            </div>
            <div class="tab-pane fade" id="selling" role="tabpanel" aria-labelledby="selling-tab">
              <div id="instructions">
                ${renderNumberedList(recipe.instructions, "rounded-4")}
              </div>
            </div>
            <div class="tab-pane fade" id="renting" role="tabpanel" aria-labelledby="renting-tab">
              <div class="container">
                <div class="row g-4 h-100">
                  <div class="col-12 col-md-6">
                    <div class="facts-info rounded-3 p-3 d-flex justify-content-between align-content-center">
                      <div class="d-flex align-items-center">
                        <div class="bg-orange-light w-32-h-32 me-12 d-flex justify-content-center align-items-center rounded-3">
                          <i class="fa-solid fa-fire prim-color"></i>
                        </div>
                        <span id="cal">Calories</span>
                      </div>
                      <span id="calCount" class="fw-bold fs-5">${recipe.calCount}</span>
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <div class="facts-info rounded-3 p-3 d-flex justify-content-between align-content-center">
                      <div class="d-flex align-items-center">
                        <div class="bg-blue-light w-32-h-32 me-12 d-flex justify-content-center align-items-center rounded-3">
                          <i class="fa-solid fa-dumbbell text-primary"></i>
                        </div>
                        <span id="protein">Protein</span>
                      </div>
                      <span id="proteinCount" class="fw-bold fs-5">${recipe.proteinCount}</span>
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <div class="facts-info rounded-3 p-3 d-flex justify-content-between align-content-center">
                      <div class="d-flex align-items-center">
                        <div class="bg-yellow-light w-32-h-32 me-12 d-flex justify-content-center align-items-center rounded-3">
                          <i class="fa-solid fa-wheat-awn text-yellow-darker"></i>
                        </div>
                        <span id="carb">Carbohydrates</span>
                      </div>
                      <span id="carbCount" class="fw-bold fs-5">${recipe.carbCount}</span>
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <div class="facts-info rounded-3 p-3 d-flex justify-content-between align-content-center">
                      <div class="d-flex align-items-center">
                        <div class="bg-red-light w-32-h-32 me-12 d-flex justify-content-center align-items-center rounded-3">
                          <i class="fa-solid fa-droplet text-danger"></i>
                        </div>
                        <span id="fat">Fat</span>
                      </div>
                      <span id="fatCount" class="fw-bold fs-5">${recipe.fatCount}</span>
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <div class="facts-info rounded-3 p-3 d-flex justify-content-between align-content-center">
                      <div class="d-flex align-items-center">
                        <div class="bg-green-light w-32-h-32 me-12 d-flex justify-content-center align-items-center rounded-3">
                          <i class="fa-solid fa-seedling text-success"></i>
                        </div>
                        <span id="fiber">Fiber</span>
                      </div>
                      <span id="fiberCount" class="fw-bold fs-5">${recipe.fiberCount}</span>
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <div class="facts-info rounded-3 p-3 d-flex justify-content-between align-content-center">
                      <div class="d-flex align-items-center">
                        <div class="bg-pink-light w-32-h-32 me-12 d-flex justify-content-center align-items-center rounded-3">
                          <i class="fa-solid fa-cube text-pink"></i>
                        </div>
                        <span id="sodium">Sodium</span>
                      </div>
                      <span id="sodiumCount" class="fw-bold fs-5">${recipe.sodiumCount}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="investing" role="tabpanel" aria-labelledby="investing-tab">
              <div id="tips">
                ${renderTips(recipe.tips)}
              </div>
            </div>
          </div>
        </div>
        <div class="pt-4 mt-32 border-top border-1 border-light-subtle">
          <button onclick="nextRecipe()" id="tryAnotherBtn" class="py-12 px-4 rounded-3 border border-1 border-orange bg-orange-color text-white">
            <i class="fa-solid fa-rotate"></i> Try Another Recipe
          </button>
        </div>
      </div>
    </div>
  `;

  recipeContainer.innerHTML = temp;
  checkCookTime();
}

displayRecipe(currentIndex);
