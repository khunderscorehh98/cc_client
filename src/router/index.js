import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// Automatically import all `.vue` files from the "views" folder
const requireViews = require.context('../views', false, /\.vue$/);

// Generate routes dynamically
const routes = requireViews.keys().map((filePath) => {
  const fileName = filePath.replace('./', '').replace('.vue', '');
  const routeName = fileName.replace('View', '').toLowerCase(); // Clean the name (e.g., 'AboutView' → 'about')
  return {
    path: fileName === 'HomeView' ? '/' : `/${routeName}`, // Default '/' for HomeView
    name: routeName,
    component: requireViews(filePath).default, // Import the component dynamically
  };
});

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
