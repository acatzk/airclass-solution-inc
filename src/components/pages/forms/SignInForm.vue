<template>
    <v-form>
        <v-row>
            <v-col cols="12">
                <v-text-field
                    label="Email"
                ></v-text-field>
            </v-col>
            <v-col cols="12">
                <v-text-field
                    label="Password"
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-btn 
                    outlined 
                    class="grey--text text-capitalize"
                    depressed
                    block
                    large
                    rounded
                >
                    Cancel
                </v-btn>
            </v-col>
            <v-col>
                <v-btn
                    color="primary text-capitalize"
                    depressed
                    block
                    large
                    rounded
                >
                    Login
                </v-btn>
            </v-col>
        </v-row>
    </v-form>
</template>