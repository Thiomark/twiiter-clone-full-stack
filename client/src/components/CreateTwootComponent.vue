<template>
    <div class="q-pa-md create-twoot-container">
        <q-input 
            bottom-slots    
            placeholder="What's happening"
            v-model="text" 
            borderless
            maxlength="255" 
            autogrow
        >
            <template v-slot:before>
                <q-avatar>
                    <img src="https://cdn.quasar.dev/img/avatar5.jpg">
                </q-avatar>
            </template>
        </q-input>
        <div class="q-pt-sm q-pb-sm bottom-container">
            <div>
                <q-icon clickable v-ripple color="primary" class="q-mr-sm" size="2em" name="insert_photo" />
                <q-icon clickable v-ripple color="primary" class="q-mr-sm" size="3em" name="gif" />
                <q-icon clickable v-ripple color="primary" class="q-mr-sm" size="2em" name="sentiment_satisfied_alt" />
            </div>
            <q-btn unelevated rounded color="primary" @click="addTwoots" :disable="!text" class="q-mr-md" label="Twoot" />
        </div>
    </div>
</template>

<script>

    import { mapActions } from 'vuex'
    export default {
        name: "CreateTwootComponent",
        data() {
            return {
                text: ''
            }
        },
        methods: {
            ...mapActions('twoots',['createTwoot']),
            addTwoots(){
                
                const newTwoot = {
                        id: `'${new Date()}'`,
                        image: 'https://cdn.quasar.dev/img/avatar2.jpg', 
                        name: 'itumeleng', 
                        handle: 'thiomark', 
                        date: new Date(), 
                        twoot: this.text
                        }
                this.createTwoot(newTwoot)
                // this.twoots.unshift(newTwoot)
                // this.text = ''
            }
        },
    }
</script>

<style lang="scss" scoped>

    .bottom-container {
        margin-left: 4em;
        border-top: 1px solid rgba(224, 224, 224, 0.76);
        display: flex;      
        justify-content: space-between;
        align-items: center;
    }

</style>