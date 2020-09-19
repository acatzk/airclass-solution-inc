<template>

    <div class="home">
        
        
        <home-side-bar
            :links="sidebarNavigations"
            :students="students"
            @logout="onSignOut"
        >
            <template  
                v-slot:general-skekeleton-loader
            >
                <v-skeleton-loader
                    :type="type"
                ></v-skeleton-loader> <!-- ADDED SKELETON LOADING FOR FETCHING API -->
            </template>

        </home-side-bar> <!-- HOME SIDE BAR COMPONENT -->

        <home-main-bar>

            <router-view></router-view> <!-- DYNAMIC PAGES LOADED -->

        </home-main-bar>

    </div>

</template>

<script>


    import { auth } from '@/services'

    import gql from 'graphql-tag'

    import { toastAlertStatus } from '@/utils'

    import { GET_STUDENT_QUERY } from '@/graphql/queries'

    import { GET_STUDENT_SUBSCRIPTION } from '@/graphql/subscriptions'

    export default {
        name: 'home',

        data () {
            return {
                sidebarNavigations: [
                    { title: 'Dashboard', icon: 'mdi-view-dashboard', to: '/v/dashboard' },
                    { title: 'Schedules', icon: 'mdi-calendar', to: '/v/schedules' },
                    { title: 'Lessons', icon: 'mdi-book-open', to: '/v/lessons' },
                    { 
                        title: 'Settings', 
                        icon: 'mdi-settings', 
                        subLinks : [
                            {
                                title : 'General Setting',
                                to    : '/v/settings',
                                icon  : 'mdi-settings'
                            },
                            {
                                title : 'Profile',
                                to    : `/v/profile/${auth.currentUser.uid}`,
                                icon  : 'mdi-account'
                            }
                        ]
                    }
                ],
                students: [],
                type: 'image, list-item-avatar-two-line, list-item, list-item, list-item, list-item, list-item'
            }
        },
        
        components: {
            HomeSideBar: () => import('@/components/layouts/HomeSideBar'),
            HomeMainBar: () => import('@/components/layouts/WelcomeMainBar')
        },

        methods: {
            onSignOut () {
                auth
                .signOut()
                .then(() => this.$router.push({ name: 'welcome' }))
                .catch(err => toastAlertStatus('error', err))
            }
        },

        apollo: {
            students: {
                query: GET_STUDENT_QUERY,
                variables () {
                    return {
                        firebase_id: auth ? auth.currentUser.uid : undefined
                    }
                },
                subscribeToMore: {
                    document: GET_STUDENT_SUBSCRIPTION,
                    variables () {
                        return {
                            firebase_id: auth ? auth.currentUser.uid : undefined
                        }
                    },
                    updateQuery(previousResult, { subscriptionData }) {
                        if (previousResult) {
                            return {
                                students: [
                                    ...subscriptionData.data.students
                                ]
                            }
                        }
                    }
                },
                result ({ data}) {
                    this.students = data.students
                }
            }
        }
    }
</script>