<template>
    <div>
        <TwootTab @currentTab="selectedTab"/>
        <div class="twoots" v-if="twootsLoading">
            <div class="q-gutter-md row justify-center q-pa-lg">
                <q-spinner-dots
                    color="primary"
                    size="4em"
                />
                <q-tooltip :offset="[0, 8]">QSpinnerDots</q-tooltip>
            </div>
        </div>
        <div class="twoots" v-if="currentTab === 'userTwoots' && !twootsLoading">
            <TwootComponent :twootOwner="true" v-for="(twoot, index) in userTwoots" :key="index" :twoot="twoot"/>
            <h5 v-if="userTwoots.length === 0"  class="q-ma-auto text-center">No Twoots</h5>
        </div>
        <div class="twoots" v-if="currentTab === 'likedTwoots' && !twootsLoading">
            <TwootComponent :twootOwner="true" v-for="(twoot, index) in likedTwoots" :key="index" :twoot="twoot"/>
            <h5 v-if="likedTwoots.length === 0" class="q-ma-auto text-center">No Media</h5>
        </div>
        <div class="twoots" v-if="currentTab === 'twootsWithMedia'">
            <TwootComponent :twootOwner="true" v-for="(twoot, index) in twootsWithMedia" :key="index" :twoot="twoot"/>
            <h5 v-if="twootsWithMedia.length === 0" class="q-ma-auto text-center">No Liked twoots</h5>
        </div>
    </div>
</template>

<script>

    import {mapGetters, mapActions, mapMutations} from 'vuex'
    import TwootComponent from '../TwootComponent'
    import TwootTab from './TwootTab'

    export default {
        name: 'ProfileTwootsComponent',
        data() {
            return {
                currentTab: 'userTwoots'
            }
        },
        components: {
            TwootComponent,
            TwootTab
        },
        methods: {
            ...mapActions('user', ['getUserTwoots', 'getLikedTwoots']),
            ...mapMutations('user', ['getTwootsWithMedia']),
            selectedTab(tab){
                if(tab === 'twootsWithMedia'){
                    if(this.twootsWithMedia.length === 0){
                        this.getTwootsWithMedia()
                    }
                }
                else if(tab === 'likedTwoots'){
                    if(this.likedTwoots.length === 0){
                        this.getLikedTwoots()
                    }
                }
                this.currentTab = tab
            },
            ghjk(){
                console.log('ff')
            }
        },
        computed: {
            ...mapGetters('user', ['userTwoots', 'likedTwoots', 'twootsLoading', 'twootsWithMedia']),
        },
        created(){
            this.getUserTwoots()
        }
    }
</script>

<style lang="scss" scoped>

</style>