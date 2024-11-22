<template>
    <div>
        <!-- Footer section -->
        <v-footer
            app
            class="grey lighten-4"
            padless
        >
            <v-row
                class="pa-2"
                align="center"
                justify="center"
            >
                <!-- Dynamic Redirect Links -->
                <v-col
                    v-for="(link, index) in footerLinks"
                    :key="index"
                    class="d-flex justify-center"
                    cols="auto"
                >
                    <v-btn
                        text
                        :href="link.url"
                        class="grey--text"
                    >
                        {{ link.name }}
                    </v-btn>
                </v-col>
            </v-row>
        </v-footer>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // Array of dynamic links for the footer
            footerLinks: [
                { name: 'Home', url: '/' },
                { name: 'About Us', url: '/about' },
                { name: 'Contact', url: '/contact' },
                { name: 'Privacy Policy', url: '/privacy' }
            ]
        };
    }
}
</script>

<style lang="scss" scoped>
</style>
