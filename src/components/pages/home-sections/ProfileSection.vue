<template>
     <section id="profile-section">
        <div class="cover-photo"></div>
        <v-container fluid>
            <v-row align="center" justify="center">
                <v-col cols="10">
                    <v-row align="center" justify="center">
                        <v-col cols="12">
                            <v-badge
                                bordered
                                color="success"
                                dot
                                offset-x="46"
                                offset-y="20"
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
                            <v-card-title class="avatar-name font-weight-bold">
                                Joshua Galit
                            </v-card-title>
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
    min-height: 30vh;
    background: #14C6FF;
}
.avatar-profile {
    position: relative;
    bottom: 110px;
    right: 20px;
    border: 4px solid #fff;
}
.avatar-name {
    position: relative;
    bottom: 185px;
    left: 160px;
    font-size: 1.9rem;
}
</style>