<template>
    <q-header reveal bordered class="bg-white text-grey-9">
        <q-toolbar class="q-my-xs">
            <q-btn 
                v-if="!hideIcon"
                icon="menu" 
                dense flat round 
                color="primary" 
                @click="click" 
            />
            <q-btn 
                @click="changeInputField"
                v-if="hideIcon && $route.path === '/find'"
                icon="arrow_back" 
                dense flat round 
                color="primary" 
            />
            <div v-if="$route.path === '/find'" style="width: 100%;" >
                <q-input 
                    @focus="changeInputField" 
                    :borderless="changeInput"
                    dense 
                    rounded
                    standout 
                    v-model="text" 
                    color="white" 
                    placeholder="Search User" 
                    class="q-ml-lg"
                >
                    <template v-if="!changeInput" v-slot:prepend>
                        <q-icon name="search" />
                    </template>
                </q-input>
            </div>
            <q-icon 
                v-if="$route.path === '/'" 
                class="q-pa-md absolute-center" 
                size="1.2rem" color="primary"
                name="fab fa-twitter" 
            />
            <q-toolbar-title
                v-if="$route.path === '/notifications' || $route.path === '/messages'" 
                class="text-weight-bold"
            >
                {{this.$route.name}}
            </q-toolbar-title>
            <q-btn
                dense rounded flat round 
                v-if="$route.path !== '/' && !hideIcon" 
                color="primary" 
                icon="settings" 
            />
        </q-toolbar>
    </q-header>
</template>

<script>
    import {mapMutations} from 'vuex'
    export default {
        name: 'Header',
        data() {
            return {
                text: '',
                hideIcon: false,
                changeInput: false
            }
        },
        methods: {
            ...mapMutations('helpers', ['bottomNavbarState']),
            click(){
                this.$emit('click')
            },
            changeInputField(){
                this.bottomNavbarState()
                this.hideIcon = !this.hideIcon
                this.changeInput = !this.changeInput
            },
            removeText(){
                this.text = ''
            }
        }
    }
</script>
