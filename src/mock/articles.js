export const blogCategories = [
  { id: 'all', label: 'All Articles', icon: 'BookOpen' },
  { id: 'nutrition-wellness', label: 'Nutrition & Wellness', icon: 'Leaf' },
  { id: 'healthy-lifestyle', label: 'Healthy Lifestyle', icon: 'Heart' },
  { id: 'ingredients-101', label: 'Ingredients 101', icon: 'Sparkles' },
  { id: 'product-tips', label: 'Product Tips', icon: 'Lightbulb' },
  { id: 'recipes', label: 'Recipes', icon: 'Utensils' },
  { id: 'sustainability', label: 'Sustainability', icon: 'Globe' },
];

export const featuredArticle = {
  id: 'power-of-fiber',
  title: 'The Power of Fiber: Small Choice, Big Impact',
  category: 'nutrition-wellness',
  categoryName: 'Nutrition & Wellness',
  badge: 'FEATURED',
  excerpt: 'Discover how fiber-rich foods can improve digestion, boost energy, and support a healthier you.',
  content: `
Fiber is one of the most vital yet frequently overlooked nutrients in modern diets. While many focus primarily on macronutrients like proteins, carbohydrates, and fats, dietary fiber serves as the fundamental fuel for our microbiome, digestive health, and sustained vitality.

### Why Fiber Matters More Than Ever
1. **Microbiome Flourishing**: Soluble fiber ferments into short-chain fatty acids (SCFAs), nourishing colon cells and fortifying immunity.
2. **Sustained Energy Without Spikes**: Insoluble fibers modulate glucose absorption, eliminating the infamous midday energy crash.
3. **Cardiovascular & Metabolic Balance**: Natural fibers assist in binding excess cholesterol and promoting long-term cardiovascular resilience.

### Small Daily Steps for Big Results
Integrating more fiber into your daily routine doesn't require a dramatic dietary overhaul. Simply substituting refined afternoon snacks with whole nuts, seed bars, and unprocessed oats can provide an extra 10–15 grams of wholesome prebiotic fiber every day.
  `,
  image: '/blog/featured_nuts.jpg',
  author: 'LIWIN Team',
  date: 'May 12, 2024',
  readTime: '7 min read',
  featured: true,
};

export const latestArticles = [
  {
    id: 'healthy-habits-fuel-your-day',
    title: 'Healthy Habits That Fuel Your Day',
    category: 'healthy-lifestyle',
    categoryName: 'Healthy Lifestyle',
    badge: 'HEALTHY LIFESTYLE',
    excerpt: 'Simple daily habits that can help you stay active, focused, and full of energy.',
    content: `
Morning routines set the neurological and metabolic tone for the rest of your 24 hours. Starting your day with adequate hydration, morning sunlight exposure, and a balanced fiber-and-protein breakfast primes your circadian rhythm and optimizes neurotransmitter production.

Take 10 minutes every morning for deep diaphragmatic breathing, carry a nourishing portable snack like a LIWIN fiber bar for when hunger strikes, and maintain consistent hydration intervals throughout your work hours.
    `,
    image: '/blog/card1_habits.jpg',
    author: 'Emma Watson',
    date: 'May 8, 2024',
    readTime: '5 min read',
  },
  {
    id: 'know-your-nuts-nature-superfoods',
    title: "Know Your Nuts: Nature's Superfoods",
    category: 'ingredients-101',
    categoryName: 'Ingredients 101',
    badge: 'INGREDIENTS 101',
    excerpt: 'A closer look at the amazing benefits of nuts and seeds in your diet.',
    content: `
Nuts and seeds are miniature nutritional powerhouses designed by nature to protect and cultivate new life. From heart-healthy monounsaturated fats in almonds and pistachios to brain-boosting alpha-linolenic acid (ALA) in walnuts, these dense foods pack extraordinary antioxidant density into every crunch.

At LIWIN, we select premium roasted nuts without added sugars or artificial oils, preserving every milligram of vitamin E, magnesium, and natural prebiotic fiber.
    `,
    image: '/blog/card2_nuts.jpg',
    author: 'David Miller',
    date: 'May 3, 2024',
    readTime: '4 min read',
  },
  {
    id: 'how-to-choose-the-right-snack',
    title: 'How to Choose the Right Snack for You',
    category: 'product-tips',
    categoryName: 'Product Tips',
    badge: 'PRODUCT TIPS',
    excerpt: 'Tips to pick snacks that are delicious, nutritious, and truly good for your body.',
    content: `
Navigating the grocery aisles or choosing afternoon sustenance can feel overwhelming with misleading "healthy" labels on every shelf. The key to authentic smart snacking lies in three simple rules:

1. **Fiber First**: Look for at least 5-8g of dietary fiber per serving.
2. **Zero Added Sugar**: Sweetness should come naturally from fruits or chicory root, not high-fructose syrups.
3. **Recognizable Whole Ingredients**: If you can't pronounce the first four ingredients, your digestive tract will likely struggle to process them.
    `,
    image: '/blog/card3_snack.jpg',
    author: 'Sarah Jenkins',
    date: 'May 29, 2024',
    readTime: '3 min read',
  },
  {
    id: '5-easy-healthy-snack-recipes',
    title: "5 Easy & Healthy Snack Recipes You'll Love",
    category: 'recipes',
    categoryName: 'Recipes',
    badge: 'RECIPES',
    excerpt: 'Quick, tasty, and wholesome recipes you can make at home with LIWIN products.',
    content: `
Elevate your home snacking game with these 5 quick kitchen creations you can prepare in under 10 minutes:

1. **Chia & Pistachio Crunch Balls**: Combine rolled oats, crushed LIWIN pistachio bar, chia seeds, and raw almond butter.
2. **Greek Yogurt Fiber Parfait**: Layer creamy yogurt with wild berries and crumbled hazelnut crunch.
3. **Cacao Energy Bites**: Blend dark dates, raw cacao powder, and roasted almonds into bite-sized energy pearls.
4. **Savory Rosemary Nut Medley**: Lightly toast cashews, almonds, and pumpkin seeds with fresh rosemary and sea salt.
5. **Berry Acai High-Fiber Smoothie Bowl**: Top your thick morning acai bowl with LIWIN granola and sliced bananas.
    `,
    image: '/blog/card4_recipes.jpg',
    author: 'Chef Michael',
    date: 'Apr 24, 2024',
    readTime: '6 min read',
  },
  {
    id: 'gut-health-101-why-fiber-matters',
    title: 'Gut Health 101: Why Fiber Matters',
    category: 'nutrition-wellness',
    categoryName: 'Nutrition & Wellness',
    badge: 'NUTRITION & WELLNESS',
    excerpt: 'Understand the connection between gut health, fiber, and your overall well-being.',
    content: `
Your gut is home to over 100 trillion microbial organisms that influence everything from your immune system strength and mental mood (through the gut-brain axis) to sleep quality and metabolic health.

These beneficial microbes crave diverse plant-based prebiotic fibers. When deprived of fiber, they can erode the protective mucosal layer of the intestine. Supplying them with constant, diverse fiber from oats, flax, nuts, and chicory roots keeps your gut lining intact and inflammation at bay.
    `,
    image: '/blog/card5_gut.jpg',
    author: 'Dr. Aris Thorne',
    date: 'Apr 18, 2024',
    readTime: '5 min read',
  },
  {
    id: 'our-step-towards-a-better-planet',
    title: 'Our Step Towards a Better Planet',
    category: 'sustainability',
    categoryName: 'Sustainability',
    badge: 'SUSTAINABILITY',
    excerpt: 'How LIWIN is committed to sustainable choices for a healthier planet and future.',
    content: `
Wholesome health cannot exist in isolation from a flourishing, biodiverse planet. That is why LIWIN is dedicated to sustainable regenerative farming partnerships, recyclable barrier packaging, and a reduced carbon footprint across our supply chain.

By sourcing ingredients from certified regenerative agriculturalists who practice minimal till farming and organic pest management, every bite of LIWIN snack contributes to restoring soil microbiome health and protecting our planet's vital ecosystems.
    `,
    image: '/blog/card6_planet.jpg',
    author: 'Eco Action Team',
    date: 'Apr 12, 2024',
    readTime: '4 min read',
  },

  // Additional articles for pagination & categories
  {
    id: 'mindful-eating-principles',
    title: 'Mindful Eating: Transforming Your Relationship With Food',
    category: 'healthy-lifestyle',
    categoryName: 'Healthy Lifestyle',
    badge: 'HEALTHY LIFESTYLE',
    excerpt: 'How chewing slower and being present during meals improves digestion and satiety.',
    content: 'Mindful eating is a powerful practice that transforms mealtime into a rejuvenating sensory experience, enhancing nutrient absorption and emotional wellbeing.',
    image: '/02_brand_story_lifestyle.jpg',
    author: 'Emma Watson',
    date: 'Apr 05, 2024',
    readTime: '5 min read',
  },
  {
    id: 'almond-benefits-deep-dive',
    title: 'Almonds Unwrapped: The Complete Nutritional Breakdown',
    category: 'ingredients-101',
    categoryName: 'Ingredients 101',
    badge: 'INGREDIENTS 101',
    excerpt: 'Explore why almonds are the premier choice for healthy fats and sustained focus.',
    content: 'Almonds deliver concentrated doses of alpha-tocopherol (vitamin E), bioavailable magnesium, and plant-based protein.',
    image: '/03_ingredient_bowl_visual.jpg',
    author: 'David Miller',
    date: 'Mar 28, 2024',
    readTime: '4 min read',
  },
  {
    id: 'pre-workout-fuel-guide',
    title: 'Pre-Workout Fuel: What to Eat Before High Intensity Training',
    category: 'product-tips',
    categoryName: 'Product Tips',
    badge: 'PRODUCT TIPS',
    excerpt: 'Timing your carbs and slow-burning fibers for maximum athletic performance.',
    content: 'Optimize your cellular glycogen stores with steady-release clean carbs and zero digestive heaviness.',
    image: '/01_featured_product_visual.jpg',
    author: 'Sarah Jenkins',
    date: 'Mar 20, 2024',
    readTime: '5 min read',
  },
];
