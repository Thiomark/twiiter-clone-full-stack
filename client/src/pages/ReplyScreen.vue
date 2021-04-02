<template>
     <q-page >
        <FixedHeaderComponent backButtonIcon='close' border reply @onSubmit="submitTheTweet" :replyText='text ? true : false' backgroundColour="bg-white"/>
        <div class="reply-wrapper">
            <q-input    
                v-model="text" 
                maxlength="255" 
                autogrow 
                bg-color="white" 
                placeholder="Comment your reply"
            >
                <template v-slot:before>
                    <q-avatar>
                        <img src="https://cdn.quasar.dev/img/avatar.png" alt="profile picture">
                    </q-avatar>
                </template>
            </q-input>
        </div>
    </q-page>
</template>

<script>
    import FixedHeaderComponent from '../components/headers/FixedHeaderComponent'
    export default {
        name: 'ReplyScreen',
        components: {
            FixedHeaderComponent
        },
        data() {
            return {
                text: ''
            }
        },
        methods: {
            submitTheTweet({type, message}){

            }
        }
    }
</script>

<style lang="scss" scoped>

    .reply-wrapper {
        padding: 6em 1em;

    }

</style>