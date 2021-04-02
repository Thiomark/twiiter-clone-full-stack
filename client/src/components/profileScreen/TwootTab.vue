<template>
    <q-tabs
        v-model="tab"
        inline-label
        :breakpoint="0"
        align="justify"
        class="text-black "
    >
        <q-tab ripple @click="selectedTab('twoots')" no-caps name="twoots" label="Twoots" />
        <q-tab ripple @click="selectedTab('images')" no-caps name="images" label="Images" />
        <q-tab ripple @click="selectedTab('likes')" no-caps name="likes" label="Likes" />
    </q-tabs> 
</template>

<script>
    export default {
        name: 'TwootTab',
        data() {
            return {
                tab: 'twoots',
            }
        },
        methods: {
            selectedTab(tab){
                if(tab === 'twoots'){
                    this.$emit('currentTab', 'userTwoots')
                }
                else if(tab === 'images'){
                    this.$emit('currentTab', 'twootsWithMedia')
                }
                else if(tab === 'likes'){
                    this.$emit('currentTab', 'likedTwoots')
                }
            },
        }
    }
</script>

<style lang="scss" scoped>

</style>