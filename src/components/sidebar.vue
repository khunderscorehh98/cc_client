<template>
    <v-navigation-drawer app permanent class="sidebar">
        <v-card class="sidebar-card">
            <v-container class="sidebar-container">
                <h3 class="sidebar-title">Hi, </h3>
                <v-list>
                    <v-list-item v-for="(item, index) in items" :key="index" link v-if="item.visible">
                        <v-list-item-content>
                            <v-list-item-title class="sidebar-item" @click="navigateTo(item.router)">
                                {{ item.name }}
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-container>
        </v-card>
    </v-navigation-drawer>
</template>

<script>
export default {
    data() {
        return {
            // Define an array of items with visibility control
            items: [
                { name: 'Dashboard', visible: true, router: '/' },
                { name: 'About Us', visible: true, router: '/about' },
                { name: 'Profile', visible: true, router: '/profile' },
                { name: 'Messages', visible: false },  // This item will be hidden based on `visible: false`
                { name: 'Settings', visible: true, router: '/settings' }
            ]
        };
    },
    methods: {
        // Method to handle navigation with a check to avoid redundant navigation
        navigateTo(route) {
            if (this.$route.path !== route) {
                this.$router.push(route);  // Navigate to the specified route only if it's different
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.sidebar {
    background-color: #1e2a3a; /* Deep blue-gray for a modern look */
    color: white;
    width: 250px;
    box-shadow: 4px 0px 20px rgba(0, 0, 0, 0.2); /* Strong shadow for depth */
}

.sidebar-card {
    background-color: #223140; /* Slightly darker for contrast */
    padding: 20px;
    box-shadow: 4px 0px 15px rgba(0, 0, 0, 0.1); /* Subtle card shadow */
}

.sidebar-container {
    display: flex;
    flex-direction: column;
}

.sidebar-title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 30px;
    color: #ecf0f1;
}

.sidebar-item {
    font-size: 18px;
    font-weight: 500;
    color: #ecf0f1;
    transition: color 0.3s, padding-left 0.2s;
    padding: 12px 16px;
}

.sidebar-item:hover {
    color: #3498db; /* Highlight color */
    cursor: pointer;
    padding-left: 24px; /* Add padding on hover to make it feel interactive */
}

.v-list-item {
    border-radius: 0; /* Sharp corners for the list items */
    margin: 5px 0;
}

.v-list-item-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.v-list-item-title {
    font-size: 18px;
    color: #ecf0f1;
}

.v-list-item:hover {
    background-color: #2c3e50; /* Slight background change on hover */
    transition: background-color 0.3s;
}
</style>
