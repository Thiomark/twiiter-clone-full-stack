<template>
    <section>
        <q-icon class="q-pa-md" size="2rem" color="primary" name="fab fa-twitter" />
        <q-list >
            <LayoutButton 
                v-for="(item, index) in pages" 
                :key="index" 
                :pageName="item.pageName"
                :iconName="item.iconName"
                :routeTo="item.routeTo"
                iconSize='md'
                textSize='text-h6'
            />
        </q-list>
    </section>
</template>

<script>
    import LayoutButton from '../helpers/LayoutButton'
    export default {
        name: 'DesktopDrawers',
        components: {
            LayoutButton
        },
        data() {
            return {
                userLoading: true,
                pages: [
                    {pageName: 'Home', iconName: 'home', routeTo: '/home'},
                    {pageName: 'Profile', iconName: 'perm_identity', routeTo: '/profile'},
                    {pageName: 'Notifications', iconName: 'far fa-bell', routeTo: '/notifications'},
                    {pageName: 'Messages', iconName: 'mail_outline', routeTo: '/messages'},
                    {pageName: 'Settings', iconName: 'settings', routeTo: '/settings'}
                ]  
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>