<template>
    <q-page>
        <CreateTwootComponent />
        <q-separator class="divider" size="10px" color="grey-2"/>
        
        <q-list separator class="q-py-md ">
            <!-- <transition-group
                appear
                enter-active-class="animated fadeIn slow"
                leave-active-class="animated fadeOut slow"
            > -->
                <TwootComponent v-for="twoot in getFeedTwoots" :key="twoot.id" :twoot="twoot"/>
            <!-- </transition-group> -->
        </q-list>
    </q-page>
</template>

<script>

import TwootComponent from '../components/TwootComponent'
import CreateTwootComponent from '../components/CreateTwootComponent'
import {mapGetters, mapActions} from 'vuex'

export default {
    name: 'HomeScreen',
    components: {
        TwootComponent,
        CreateTwootComponent
    },
    computed: {
        ...mapGetters('twoots', ['getFeedTwoots'])
    },
    methods: {
        ...mapActions('twoots', ['fetchFeedTwoots']),
    },
    created(){
        // console.log(this.$store.state.user.user.id)
        this.fetchFeedTwoots()
    }
}
</script>

<style lang="scss" scoped>

    .divider {
        border-top: 1px solid rgba(219, 219, 219, 0.329);
        border-bottom: 1px solid rgba(219, 219, 219, 0.329);
    }

</style>