<template>
    <div>
        <!-- Bottom Navigation Bar -->
        <v-bottom-navigation v-model="model" app>
            <v-btn
                v-for="(item, index) in items"
                :key="index"
                :to="item.link"
                :exact="item.exact"
                class="mx-2"
                icon
            >
                <v-icon>{{ item.icon }}</v-icon>
                {{ item.name }}
            </v-btn>
        </v-bottom-navigation>
    </div>
</template>

<script>
export default {
    data() {
        return {
            model: null, // Keeps track of the selected tab
            items: [
                { name: 'Home', icon: 'mdi-home', link: '/', exact: true },
                { name: 'Search', icon: 'mdi-magnify', link: '/search', exact: false },
                { name: 'Notifications', icon: 'mdi-bell', link: '/notification', exact: false },
                { name: 'Profile', icon: 'mdi-account', link: '/profile', exact: false }
            ]
        };
    }
}
</script>

<style lang="scss" scoped>
/* Optional: You can adjust the styling of the bottom navigation bar if needed */
.v-bottom-navigation {
    background-color: #1e2a3a; /* Customize background color */
    color: white;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}
</style>
