<template>
    <q-layout view="lhr LpR lFr">
        <Header class="lt-md" v-if="navConditions()" @click="left = !left"/>
        <q-drawer show-if-above v-model="left" side="left" bordered>
            <DesktopDrawers class="gt-sm"/>
            <MobileDrawers class="lt-md"/>
        </q-drawer>

        <q-drawer :width="520" show-if-above v-model="right" side="right" bordered>
            <SearchTwooter />
            <q-list separator padding>
                <TrendMessage />
                <TrendMessage />
                <TrendMessage />
            </q-list>
        </q-drawer>

        <q-page-container>
            <router-view />
        </q-page-container>

        <q-footer v-if="navConditions() && !getBottomNavbar" bordered class="bg-white lt-md">
            <q-toolbar>
                <TabNavbar />
            </q-toolbar>
        </q-footer>

    </q-layout>
</template>

<script>

    import DesktopDrawers from './drawers/DesktopDrawers'
    import MobileDrawers from './drawers/MobileDrawers'
    import {mapGetters} from 'vuex'
    import TabNavbar from './components/TabNavbar'
    import TrendMessage from './helpers/TrendMessage'
    import SearchTwooter from './helpers/SearchTwooter'
    import Header from './helpers/Header'

    export default {
        components: {
            TabNavbar,
            TrendMessage,
            SearchTwooter,
            Header,
            DesktopDrawers,
            MobileDrawers
        },
        data () {
            return {
                left: false,
                right: false  
            }
        },
        methods: {
            navConditions(){
                if(this.$route.path === '/profile' || this.$route.path === '/reply' || this.$route.path.match(/\/chats\//)){
                    return false
                }
                return true
            },
        },
        computed: {
            ...mapGetters('helpers', ['getBottomNavbar'])
        },
    }
</script>
