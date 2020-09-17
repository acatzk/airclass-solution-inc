<template>
     <section id="profile-section">
        <div class="cover-photo"></div>
        <v-container fluid>
            <v-row align="center" justify="center">
                <v-col cols="10">
                    <v-row align="center" justify="center">
                        <v-col cols="12">
                            <v-row>
                                <v-badge
                                    bordered
                                    color="success"
                                    dot
                                    offset-x="20"
                                    offset-y="120"
                                >
                                    <v-avatar 
                                        size="150" 
                                        class="avatar-profile"
                                    >
                                    
                                        <v-img
                                            src="https://pbs.twimg.com/profile_images/1031140303791579136/TU9GctxI_400x400.jpg"
                                            lazy-src="https://pbs.twimg.com/profile_images/1031140303791579136/TU9GctxI_400x400.jpg"
                                        >
                                        </v-img>
                                    </v-avatar>
                                </v-badge>
                                <h1 class="font-weight-bold avatar-name darkblue--text d-flex justify-center align-center mx-5 text-center">
                                    Joshua Galit
                                </h1>
                            </v-row>
                        </v-col>
                    </v-row>


                    <v-row align="center" justify="center">
                        <v-col cols="12" md="6">
                            <div class="heading-title darkblue--text font-weight-medium">
                                Personal Details
                            </div>
                        </v-col>
                        <v-col cols="12" md="6">
                            <div class="heading-title darkblue--text font-weight-medium">
                                Academic Details
                            </div>
                        </v-col>    
                    </v-row>

                </v-col>
            </v-row>
        </v-container>
     </section>
</template>

<style scoped>
.cover-photo {
    width: 100%;
    min-height: 15vh;
    background: #14C6FF;
    position: absolute;
}
.avatar-profile {
    border: 4px solid #fff;
}
.avatar-name {
    font-size: 1.5rem;
    position: relative;
}
</style>