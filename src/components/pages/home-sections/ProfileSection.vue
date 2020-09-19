<template>
     <section id="profile-section">
        <div class="cover-photo"></div>
        <v-container>
            <v-row align="center" justify="center" class="ml-4">
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
                        <h1 class="font-weight-bold avatar-name darkblue--text d-flex justify-center align-center mt-3 ml-5 text-center">
                            Joshua Galit
                        </h1>
                    </v-row>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="12" md="6">
                    <div class="heading-title darkblue--text font-weight-medium ml-6">
                        Personal Details
                    </div>
                    <v-row justify="center" align="center" class="mt-5">
                        <v-col cols="12" md="6">
                            <v-text-field
                                label="Fullname"
                                dense
                                rounded
                                value="Resamae Relos Cabulang"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="6">
                            <v-text-field
                                label="Nickname"
                                dense
                                rounded
                                value="Mikimik"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="6">
                            <v-text-field
                                label="Age"
                                dense
                                rounded
                                value="21"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="6">
                            <v-text-field
                                label="Birthday"
                                dense
                                rounded
                                value="February 10, 1999"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="6">
                            <v-text-field
                                label="Gender"
                                dense
                                rounded
                                value="Female"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="6">
                            <v-text-field
                                label="Birthday"
                                dense
                                rounded
                                value="Brgy. 711, Malate, Manila"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols="12" md="6">
                    <div class="heading-title darkblue--text font-weight-medium ml-6">
                        Academic Details
                    </div>
                    <v-row justify="center" align="center" class="mt-5">
                        <v-col cols="12">
                            <v-text-field
                                label="Student no."
                                dense
                                rounded
                                value="1510863-2"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="6">
                            <v-text-field
                                label="Instructor"
                                dense
                                rounded
                                value="John Doe Jr."
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="6">
                            <v-text-field
                                label="Enrolled year"
                                dense
                                rounded
                                value="2020"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                </v-col>    
            </v-row>
             <v-row>
                <v-col cols="12">
                    <div class="heading-title darkblue--text font-weight-medium ml-6">
                        Contact Details
                    </div>
                    <v-row justify="center" align="center" class="mt-5">
                        <v-col cols="12" md="3">
                            <v-text-field
                                label="Mobile no."
                                dense
                                rounded
                                value="09783458745"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="3">
                            <v-text-field
                                label="Email Address"
                                dense
                                rounded
                                value="artechmeh27@gmail.com"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="3">
                            <v-text-field
                                label="Wattsapp"
                                dense
                                rounded
                                value="+635464623"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="3">
                            <v-text-field
                                label="Zoom Id"
                                dense
                                rounded
                                value="live:id :093423049"
                            ></v-text-field>
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
    min-height: 12vh;
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