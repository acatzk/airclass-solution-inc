<template>

    <div class="home">
        
        <home-side-bar
            :links="sidebarNavigations"
            :students="students"
        >
        </home-side-bar> <!-- HOME SIDE BAR COMPONENT -->

        <v-main>

            <router-view></router-view> <!-- DYNAMIC PAGES LOADED -->

        </v-main>

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
                students: []
            }
        },
        
        components: {
            HomeSideBar: () => import('@/components/layouts/HomeSideBar')
        },

        apollo: {
            students: {
                query: GET_STUDENT_QUERY,
                variables () {
                    return {
                        firebase_id: auth.currentUser.uid
                    }
                },
                subscribeToMore: {
                    document: GET_STUDENT_SUBSCRIPTION,
                    variables () {
                        return {
                            firebase_id: auth.currentUser.uid
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