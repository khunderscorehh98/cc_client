<template>
    <div>
        <v-card>
            <v-container>
                <em class="gray-text">Uploaded Documents:</em>
                <v-list>
                    <!-- Loop through each document type and display its status -->
                    <v-list-item v-for="(document, index) in documents" :key="index">
                        <v-list-item-content>
                            <v-list-item-title>
                                {{ document.name }} - 
                                <span :class="{ 'text-success': document.uploadProgress === 100, 'text-danger': document.uploadProgress < 100 }">
                                    {{ document.uploadProgress === 100 ? 'Completed' : 'Not Completed' }}
                                </span>
                            </v-list-item-title>
                            <!-- Dynamic Progress Bar -->
                            <v-progress-linear
                                :value="document.uploadProgress"
                                striped
                                color="blue"
                                height="10"
                            >
                                <template v-slot:default>
                                    {{ document.uploadProgress }}%
                                </template>
                            </v-progress-linear>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
                <v-row>
                    <v-col cols="10"></v-col>
                    <v-col cols="2">
                        <v-btn>Edit</v-btn>  <!-- Edit button left untouched -->
                    </v-col>
                </v-row>
            </v-container>
        </v-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            documents: [
                { name: 'Personal Document', uploadProgress: 20 }, // Dynamic progress
                { name: 'Academic Document', uploadProgress: 90 }, // Dynamic progress
                { name: 'Health Document', uploadProgress: 50 }, // Dynamic progress
                { name: 'Identification Document', uploadProgress: 100 }, // Fully uploaded
            ],
        };
    },
    methods: {
        // Example method to simulate progress updates
        updateProgress() {
            this.documents.forEach(document => {
                // Simulate progress update by incrementing 10% each time (up to 100%)
                if (document.uploadProgress < 100) {
                    document.uploadProgress += 10;
                }
            });
        }
    },
};
</script>

<style lang="scss" scoped>
.gray-text {
    color: gray;
}

.text-success {
    color: green;
}

.text-danger {
    color: red;
}
</style>
