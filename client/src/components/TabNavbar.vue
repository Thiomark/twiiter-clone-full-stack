<template>
    <q-footer bordered class="bg-white q-px-lg">
        <q-toolbar class="tab-nav-bar">
            <q-btn @click="navigateTo(item.route)" size="1em" v-for="(item, index) in menuItems" color="grey-10" :key="index" dense round flat :icon="item.icon">
                <q-badge v-if="item.notification" color="red" floating transparent>
                    4
                </q-badge>
            </q-btn>
        </q-toolbar>
    </q-footer>
</template>

<script>
    export default {
        name: 'TabNavBar',
        data() {
            return {
                menuItems: [
                    {
                        name: 'Home', 
                        route: '/', 
                        notification: false,
                        icon: 'fas fa-igloo'
                    },
                    {
                        name: 'Search', 
                        route: '/find', 
                        notification: false,
                        icon: 'fas fa-search'
                    },
                    {
                        name: 'Notifications', 
                        route: '/notifications', 
                        notification: true,
                        icon: 'far fa-bell'
                    },
                    {
                        name: 'Messages', 
                        route: '/messages', 
                        notification: true,
                        icon: 'far fa-envelope'
                    }           
                ]
            }
        },
        methods: {
            navigateTo(page){
                this.$router.push({ path: page})
            }
        }
    }
</script>

<style lang="scss" scoped>

    .tab-nav-bar {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

</style>