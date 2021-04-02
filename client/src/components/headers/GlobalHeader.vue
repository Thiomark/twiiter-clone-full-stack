<template>
    <q-header bordered class="bg-white text-black">
        <q-toolbar class="bg-pink">
            <q-btn  
                round 
                color="primary" 
                flat 
                size="1em" 
                icon="menu" 
            />
            <div >
                <label for="current page">Settings</label>
            </div>
            <q-btn  
                v-if="$route.path === '/'"
                round 
                color="primary" 
                flat 
                size="1em"
                class="absolute-center" 
                icon="fab fa-twitter" 
            />
            <q-btn  
                v-if="$route.path !== '/'"
                round 
                color="primary" 
                flat 
                size="1em" 
                icon="settingd" 
            />
        </q-toolbar >
    </q-header>
</template>

<script>

    export default {
        name: 'ProfileHeaderComponent',
        props: {
            visible: {
                type: Boolean
            }
        }
    }
</script>

<style lang="scss" scoped>


</style>