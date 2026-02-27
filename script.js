/**
 * Recipe Data
 */
const recipes = [
    {
        id: 1,
        name: "Classic Tomato Pasta",
        image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        time: "20 min",
        difficulty: "Easy",
        category: "Veg",
        ingredients: ["Pasta", "Tomato", "Garlic", "Basil", "Olive Oil", "Salt"],
        steps: ["Boil pasta.", "Sauté garlic in olive oil.", "Add chopped tomatoes and cook.", "Mix pasta with sauce.", "Garnish with basil."]
    },
    {
        id: 2,
        name: "Grilled Chicken Salad",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        time: "25 min",
        difficulty: "Medium",
        category: "Non-Veg",
        ingredients: ["Chicken", "Lettuce", "Tomato", "Cucumber", "Olive Oil", "Lemon"],
        steps: ["Grill chicken breast.", "Chop vegetables.", "Mix dressing ingredients.", "Toss salad with dressing.", "Top with sliced chicken."]
    },
    {
        id: 3,
        name: "Vegetable Stir Fry",
        image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        time: "15 min",
        difficulty: "Easy",
        category: "Vegan",
        ingredients: ["Rice", "Carrot", "Broccoli", "Soy Sauce", "Garlic", "Ginger"],
        steps: ["Cook rice.", "Stir fry garlic and ginger.", "Add vegetables and cook.", "Add soy sauce.", "Serve hot with rice."]
    },
    {
        id: 4,
        name: "Cheese Omelette",
        image: "https://images.unsplash.com/photo-1510693206972-df098062cb71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        time: "10 min",
        difficulty: "Easy",
        category: "Veg",
        ingredients: ["Eggs", "Cheese", "Butter", "Salt", "Pepper", "Onion"],
        steps: ["Whisk eggs with salt and pepper.", "Melt butter in pan.", "Pour eggs and cook.", "Add cheese and fold.", "Serve hot."]
    },
    {
        id: 5,
        name: "Fruit Bowl",
        image: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        time: "5 min",
        difficulty: "Easy",
        category: "Vegan",
        ingredients: ["Apple", "Banana", "Orange", "Honey", "Mint"],
        steps: ["Chop all fruits.", "Mix in a bowl.", "Drizzle with honey.", "Garnish with mint."]
    },
    {
        id: 6,
        name: "Spicy Chicken Curry",
        image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        time: "45 min",
        difficulty: "Hard",
        category: "Non-Veg",
        ingredients: ["Chicken", "Onion", "Tomato", "Garlic", "Ginger", "Chili", "Rice"],
        steps: ["Marinate chicken.", "Sauté spices and onions.", "Add chicken and simmer.", "Serve with steamed rice."]
    },
    {
        id: 7,
        name: "Homemade Pizza",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        time: "40 min",
        difficulty: "Medium",
        category: "Veg",
        ingredients: ["Flour", "Tomato", "Cheese", "Basil", "Olive Oil", "Yeast"],
        steps: ["Prepare dough.", "Spread tomato sauce.", "Add cheese and toppings.", "Bake at 400°F.", "Garnish with basil."]
    },
    {
        id: 8,
        name: "Beef Burger",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        time: "30 min",
        difficulty: "Medium",
        category: "Non-Veg",
        ingredients: ["Beef", "Bread", "Cheese", "Lettuce", "Tomato", "Onion", "Ketchup"],
        steps: ["Form beef patties.", "Grill patties.", "Toast buns.", "Assemble burger with veggies and sauce."]
    },
    {
        id: 9,
        name: "Avocado Toast",
        image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        time: "10 min",
        difficulty: "Easy",
        category: "Vegan",
        ingredients: ["Bread", "Avocado", "Lemon", "Salt", "Pepper", "Chili"],
        steps: ["Toast bread.", "Mash avocado with lemon and salt.", "Spread on toast.", "Sprinkle chili flakes."]
    },
    {
        id: 10,
        name: "Sushi Rolls",
        image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        time: "50 min",
        difficulty: "Hard",
        category: "Non-Veg",
        ingredients: ["Rice", "Seaweed", "Fish", "Cucumber", "Avocado", "Soy Sauce"],
        steps: ["Cook sushi rice.", "Place seaweed on mat.", "Add rice and fillings.", "Roll tightly.", "Slice and serve."]
    },
    {
        id: 11,
        name: "Pancakes",
        image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        time: "20 min",
        difficulty: "Easy",
        category: "Veg",
        ingredients: ["Flour", "Milk", "Eggs", "Butter", "Sugar", "Maple Syrup"],
        steps: ["Mix dry and wet ingredients.", "Pour batter on hot pan.", "Flip when bubbly.", "Serve with syrup."]
    },
    {
        id: 12,
        name: "Caesar Salad",
        image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        time: "15 min",
        difficulty: "Easy",
        category: "Non-Veg",
        ingredients: ["Lettuce", "Bread", "Cheese", "Chicken", "Garlic", "Lemon", "Mayonnaise"],
        steps: ["Cook chicken.", "Make croutons.", "Mix dressing.", "Toss lettuce with dressing.", "Top with chicken and cheese."]
    },
    {
        id: 13,
        name: "Mushroom Risotto",
        image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        time: "40 min",
        difficulty: "Medium",
        category: "Veg",
        ingredients: ["Rice", "Mushroom", "Butter", "Cheese", "Onion", "Broth", "Wine"],
        steps: ["Sauté onions and mushrooms.", "Toast rice.", "Add broth gradually.", "Stir in butter and cheese."]
    },
    {
        id: 14,
        name: "Fish Tacos",
        image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        time: "30 min",
        difficulty: "Medium",
        category: "Non-Veg",
        ingredients: ["Fish", "Tortilla", "Cabbage", "Lime", "Mayonnaise", "Cilantro"],
        steps: ["Season and cook fish.", "Warm tortillas.", "Make slaw.", "Assemble tacos."]
    },
    {
        id: 15,
        name: "Chocolate Cake",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        time: "60 min",
        difficulty: "Medium",
        category: "Veg",
        ingredients: ["Flour", "Sugar", "Cocoa", "Eggs", "Butter", "Milk"],
        steps: ["Mix dry ingredients.", "Add wet ingredients.", "Bake at 350°F.", "Frost when cool."]
    },
    {
        id: 16,
        name: "Berry Smoothie",
        image: "https://images.unsplash.com/photo-1553530979-7ee52a2670c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        time: "5 min",
        difficulty: "Easy",
        category: "Veg",
        ingredients: ["Strawberry", "Blueberry", "Banana", "Yogurt", "Milk", "Honey"],
        steps: ["Add all ingredients to blender.", "Blend until smooth.", "Serve chilled."]
    },
    {
        id: 17,
        name: "Pad Thai",
        image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        time: "35 min",
        difficulty: "Medium",
        category: "Non-Veg",
        ingredients: ["Noodles", "Shrimp", "Eggs", "Peanuts", "Bean Sprouts", "Lime", "Fish Sauce"],
        steps: ["Soak noodles.", "Stir fry shrimp and eggs.", "Add noodles and sauce.", "Top with peanuts and lime."]
    },
    {
        id: 18,
        name: "French Toast",
        image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        time: "15 min",
        difficulty: "Easy",
        category: "Veg",
        ingredients: ["Bread", "Eggs", "Milk", "Cinnamon", "Butter", "Maple Syrup"],
        steps: ["Whisk eggs, milk, and cinnamon.", "Dip bread.", "Fry in butter.", "Serve with syrup."]
    },
    {
        id: 19,
        name: "Guacamole",
        image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        time: "10 min",
        difficulty: "Easy",
        category: "Vegan",
        ingredients: ["Avocado", "Onion", "Tomato", "Cilantro", "Lime", "Salt"],
        steps: ["Mash avocado.", "Chop veggies.", "Mix everything.", "Season with salt and lime."]
    },
    {
        id: 20,
        name: "Steak & Potatoes",
        image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        time: "45 min",
        difficulty: "Medium",
        category: "Non-Veg",
        ingredients: ["Steak", "Potato", "Butter", "Garlic", "Rosemary", "Salt", "Pepper"],
        steps: ["Season steak.", "Sear in pan with butter and herbs.", "Roast potatoes.", "Serve together."]
    },
    {
        id: 21,
        name: "Ramen",
        image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        time: "40 min",
        difficulty: "Medium",
        category: "Non-Veg",
        ingredients: ["Noodles", "Broth", "Eggs", "Pork", "Green Onion", "Soy Sauce"],
        steps: ["Boil broth.", "Cook noodles.", "Prepare toppings.", "Assemble bowl."]
    },
    {
        id: 22,
        name: "Mac and Cheese",
        image: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        time: "25 min",
        difficulty: "Easy",
        category: "Veg",
        ingredients: ["Pasta", "Cheese", "Milk", "Butter", "Flour", "Salt"],
        steps: ["Boil pasta.", "Make cheese sauce with roux.", "Combine pasta and sauce.", "Serve hot."]
    },
    {
        id: 23,
        name: "Greek Salad",
        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        time: "15 min",
        difficulty: "Easy",
        category: "Veg",
        ingredients: ["Cucumber", "Tomato", "Olive", "Cheese", "Onion", "Oregano", "Olive Oil"],
        steps: ["Chop vegetables.", "Add olives and feta.", "Drizzle with oil and oregano.", "Toss gently."]
    },
    {
        id: 24,
        name: "Chicken Wings",
        image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        time: "45 min",
        difficulty: "Medium",
        category: "Non-Veg",
        ingredients: ["Chicken", "Hot Sauce", "Butter", "Garlic", "Celery"],
        steps: ["Bake or fry wings.", "Melt butter with hot sauce.", "Toss wings in sauce.", "Serve with celery."]
    },
    {
        id: 25,
        name: "Hummus",
        image: "https://images.unsplash.com/photo-1577906096429-f73c2c312435?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        time: "10 min",
        difficulty: "Easy",
        category: "Vegan",
        ingredients: ["Chickpeas", "Tahini", "Lemon", "Garlic", "Olive Oil", "Cumin"],
        steps: ["Blend chickpeas, tahini, and lemon.", "Add garlic and spices.", "Drizzle with olive oil."]
    }
];

/**
 * Application State
 */
const state = {
    selectedIngredients: new Set(),
    favorites: JSON.parse(localStorage.getItem('chefVoiceFavorites')) || [],
    isListening: false,
    showFavoritesOnly: false,
    searchQuery: ''
};

/**
 * DOM Elements
 */
const elements = {
    recipeGrid: document.getElementById('recipe-grid'),
    ingredientFilters: document.getElementById('ingredient-filters'),
    searchBar: document.getElementById('search-bar'),
    voiceBtn: document.getElementById('voice-btn'),
    voiceStatus: document.getElementById('voice-status'),
    clearFiltersBtn: document.getElementById('clear-filters'),
    resultsCount: document.getElementById('results-count'),
    resultsTitle: document.getElementById('results-title'),
    themeToggle: document.getElementById('theme-toggle'),
    favBtn: document.getElementById('show-favorites-btn'),
    modal: document.getElementById('recipe-modal'),
    loading: document.getElementById('loading'),
    noResults: document.getElementById('no-results')
};

/**
 * Initialization
 */
function init() {
    renderIngredients();
    renderRecipes();
    setupEventListeners();
    setupVoice();
    checkTheme();
}

/**
 * Core Logic: Rendering
 */
function renderIngredients() {
    // Extract unique ingredients
    const allIngredients = new Set();
    recipes.forEach(r => r.ingredients.forEach(i => allIngredients.add(i)));
    
    const sortedIngredients = Array.from(allIngredients).sort();

    elements.ingredientFilters.innerHTML = sortedIngredients.map(ing => `
        <div class="ingredient-tag ${state.selectedIngredients.has(ing.toLowerCase()) ? 'selected' : ''}" 
             data-value="${ing.toLowerCase()}">
            ${ing}
        </div>
    `).join('');

    // Add click listeners to new elements
    document.querySelectorAll('.ingredient-tag').forEach(tag => {
        tag.addEventListener('click', () => toggleIngredient(tag.dataset.value));
    });
}

function renderRecipes() {
    elements.loading.classList.remove('hidden');
    elements.recipeGrid.classList.add('hidden');
    elements.noResults.classList.add('hidden');

    // Simulate small delay for UX
    setTimeout(() => {
        let filtered = recipes;

        // Filter by Search
        if (state.searchQuery) {
            filtered = filtered.filter(r => r.name.toLowerCase().includes(state.searchQuery));
        }

        // Filter by Ingredients
        if (state.selectedIngredients.size > 0) {
            filtered = recipes.map(recipe => {
                const recipeIngs = recipe.ingredients.map(i => i.toLowerCase());
                const matchCount = recipeIngs.filter(i => state.selectedIngredients.has(i)).length;
                return { ...recipe, matchCount, matchPercentage: (matchCount / recipeIngs.length) };
            })
            .filter(r => r.matchCount > 0) // Must have at least one ingredient
            .sort((a, b) => b.matchPercentage - a.matchPercentage); // Sort by best match
        }

        // Filter by Favorites
        if (state.showFavoritesOnly) {
            filtered = filtered.filter(r => state.favorites.includes(r.id));
            elements.resultsTitle.innerText = "Favorite Recipes";
        } else {
            elements.resultsTitle.innerText = state.selectedIngredients.size > 0 ? "Matched Recipes" : "All Recipes";
        }

        elements.resultsCount.innerText = `${filtered.length} found`;

        if (filtered.length === 0) {
            elements.loading.classList.add('hidden');
            elements.noResults.classList.remove('hidden');
            return;
        }

        elements.recipeGrid.innerHTML = filtered.map(recipe => createRecipeCard(recipe)).join('');
        
        elements.loading.classList.add('hidden');
        elements.recipeGrid.classList.remove('hidden');
    }, 300);
}

function createRecipeCard(recipe) {
    const isFav = state.favorites.includes(recipe.id);
    const matchText = recipe.matchCount 
        ? `<div class="match-indicator">Matches ${recipe.matchCount} of your ingredients</div>` 
        : '';

    return `
        <article class="recipe-card">
            <div class="card-img-container">
                <img src="${recipe.image}" alt="${recipe.name}" class="card-img">
                <span class="card-badge">${recipe.category}</span>
            </div>
            <div class="card-body">
                <h3 class="card-title">${recipe.name}</h3>
                <div class="card-meta">
                    <span>⏱️ ${recipe.time}</span>
                    <span>📊 ${recipe.difficulty}</span>
                </div>
                <div class="card-actions">
                    <button class="view-btn" onclick="openModal(${recipe.id})">View Recipe</button>
                    <button class="icon-btn" onclick="toggleFavorite(${recipe.id}, this)" style="float:right; margin-top:10px;">
                        ${isFav ? '❤️' : '🤍'}
                    </button>
                </div>
                ${matchText}
            </div>
        </article>
    `;
}

/**
 * Actions
 */
function toggleIngredient(ing) {
    if (state.selectedIngredients.has(ing)) {
        state.selectedIngredients.delete(ing);
    } else {
        state.selectedIngredients.add(ing);
    }
    state.showFavoritesOnly = false; // Reset fav view on filter change
    renderIngredients();
    renderRecipes();
}

function toggleFavorite(id, btn) {
    if (state.favorites.includes(id)) {
        state.favorites = state.favorites.filter(favId => favId !== id);
        btn.innerText = '🤍';
    } else {
        state.favorites.push(id);
        btn.innerText = '❤️';
    }
    localStorage.setItem('chefVoiceFavorites', JSON.stringify(state.favorites));
    if (state.showFavoritesOnly) renderRecipes();
}

window.app = {
    resetFilters: () => {
        state.selectedIngredients.clear();
        state.showFavoritesOnly = false;
        renderIngredients();
        renderRecipes();
        elements.voiceStatus.innerText = "Filters cleared.";
    }
};

/**
 * Modal Logic
 */
window.openModal = (id) => {
    const recipe = recipes.find(r => r.id === id);
    if (!recipe) return;

    document.getElementById('modal-img').src = recipe.image;
    document.getElementById('modal-title').innerText = recipe.name;
    document.getElementById('modal-meta').innerHTML = `
        <span>⏱️ ${recipe.time}</span> • <span>📊 ${recipe.difficulty}</span> • <span>${recipe.category}</span>
    `;

    // Dummy Nutritional Data
    const calories = Math.floor(Math.random() * (800 - 200 + 1)) + 200;
    const protein = Math.floor(Math.random() * (50 - 5 + 1)) + 5;
    document.getElementById('modal-nutrition').innerHTML = `
        <div class="nutrition-item">🔥 <strong>${calories}</strong> kcal</div>
        <div class="nutrition-item">💪 <strong>${protein}g</strong> protein</div>
    `;
    
    document.getElementById('modal-ingredients').innerHTML = recipe.ingredients
        .map(i => `<li>${i}</li>`).join('');
        
    document.getElementById('modal-steps').innerHTML = recipe.steps
        .map(s => `<li>${s}</li>`).join('');

    elements.modal.classList.add('active');
};

document.querySelector('.close-modal').addEventListener('click', () => {
    elements.modal.classList.remove('active');
});

window.onclick = (event) => {
    if (event.target === elements.modal) {
        elements.modal.classList.remove('active');
    }
};

/**
 * Voice Command Logic (Web Speech API)
 */
function setupVoice() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    
    if (!SpeechRecognition) {
        elements.voiceBtn.style.display = 'none';
        elements.voiceStatus.innerText = "Voice control not supported in this browser.";
        return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.lang = 'en-US';
    recognition.interimResults = false;

    elements.voiceBtn.addEventListener('click', () => {
        if (state.isListening) {
            recognition.stop();
        } else {
            recognition.start();
        }
    });

    recognition.onstart = () => {
        state.isListening = true;
        elements.voiceBtn.classList.add('listening');
        elements.voiceBtn.innerHTML = '<span class="mic-icon">🛑</span> Listening...';
        elements.voiceStatus.innerText = "Listening...";
    };

    recognition.onend = () => {
        state.isListening = false;
        elements.voiceBtn.classList.remove('listening');
        elements.voiceBtn.innerHTML = '<span class="mic-icon">🎙️</span> Speak';
    };

    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript.toLowerCase();
        elements.voiceStatus.innerText = `You said: "${transcript}"`;
        processVoiceCommand(transcript);
    };

    recognition.onerror = (event) => {
        elements.voiceStatus.innerText = "Error occurred in recognition: " + event.error;
    };
}

function processVoiceCommand(text) {
    // Command: Clear
    if (text.includes('clear') || text.includes('reset')) {
        window.app.resetFilters();
        return;
    }

    // Command: Show Favorites
    if (text.includes('favorite') || text.includes('favourite')) {
        state.showFavoritesOnly = true;
        renderRecipes();
        return;
    }

    // Command: Ingredients
    let found = false;
    const allIngredients = new Set();
    recipes.forEach(r => r.ingredients.forEach(i => allIngredients.add(i.toLowerCase())));

    allIngredients.forEach(ing => {
        if (text.includes(ing)) {
            state.selectedIngredients.add(ing);
            found = true;
        }
    });

    if (found) {
        state.showFavoritesOnly = false;
        renderIngredients();
        renderRecipes();
    } else {
        elements.voiceStatus.innerText += " (No matching ingredients found)";
    }
}

/**
 * Event Listeners & Theme
 */
function setupEventListeners() {
    elements.clearFiltersBtn.addEventListener('click', window.app.resetFilters);
    
    elements.searchBar.addEventListener('input', (e) => {
        state.searchQuery = e.target.value.toLowerCase();
        renderRecipes();
    });

    elements.themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        localStorage.setItem('chefVoiceTheme', isDark ? 'dark' : 'light');
        elements.themeToggle.innerText = isDark ? '☀️' : '🌙';
    });

    elements.favBtn.addEventListener('click', () => {
        state.showFavoritesOnly = !state.showFavoritesOnly;
        elements.favBtn.classList.toggle('active');
        renderRecipes();
    });
}

function checkTheme() {
    const savedTheme = localStorage.getItem('chefVoiceTheme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        elements.themeToggle.innerText = '☀️';
    }
}

// Start App
init();