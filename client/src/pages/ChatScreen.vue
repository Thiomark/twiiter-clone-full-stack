<template>
    <q-page>
        <FixedHeaderComponent border name="Itumeleng" backgroundColour="bg-white"/>
        <div class="chats-screen">
            <q-chat-message
            v-touch-hold.mouse="handleHold"
                stamp="7 minutes ago"
                :text="messages"
                sent
                text-color="white"
                bg-color="primary"
            >
                <template v-slot:avatar>
                    <img
                        class="q-message-avatar q-message-avatar--sent"
                        alt="Profile Picture"
                        src="https://cdn.quasar.dev/img/avatar4.jpg"
                    >
                </template>
            </q-chat-message>

            <q-dialog v-model="confirm">
                <q-card>
                    <!-- <q-card-section class="row items-center">
                    <q-avatar icon="signal_wifi_off" color="primary" text-color="white" />
                    <span class="q-ml-sm">You are currently not connected to any network.</span>
                    </q-card-section> -->

                    <q-card-actions align="right">
                        <q-list>
                            <q-item @click="selectedOption" clickable v-ripple>
                                <q-item-section>
                                    <q-item-label class="text-center">Copy message text</q-item-label>
                                </q-item-section>
                            </q-item>
                            <q-item @click="selectedOption" clickable v-ripple>
                                <q-item-section>
                                    <q-item-label class="text-center">Delete message for you</q-item-label>
                                </q-item-section>
                            </q-item>
                        </q-list>
                    </q-card-actions>
                </q-card>
            </q-dialog>

            <q-chat-message
                v-touch-hold.mouse="handleHold"
                :text="['Already building an app with it..']"
                bg-color="grey-3"
            >
                <template v-slot:avatar>
                    <img
                        class="q-message-avatar q-message-avatar--received"
                        alt="Profile Picture"
                        src="https://cdn.quasar.dev/img/avatar2.jpg"
                    >
                </template>
                <q-spinner-dots size="2rem" />
            </q-chat-message>
        </div>
        <q-footer class="bg-white q-px-md" bordered>
            <q-input dense class="q-py-sm" v-model="text" placeholder="Start a message" >
                <template v-slot:before>
                    <q-icon color="primary" name="insert_photo" />
                    <q-icon size="md" color="primary" name="gif" />
                </template>
                <template v-slot:after>
                    <q-icon @click="sendMessage" color="primary" name="send" />
                </template>
            </q-input>
        </q-footer>
    </q-page>
</template>

<script>
    import FixedHeaderComponent from '../components/headers/FixedHeaderComponent'
    export default {
        name: 'ChatScreen',
        components: {
            FixedHeaderComponent
        },
        data() {
            return {
                messages: ['Already building an app with it..'],
                text: '',
                confirm: false
            }
        },
        methods: {
            sendMessage(){
                if(this.text){
                    this.messages.push(this.text)
                }
            },
            handleHold(){
                this.confirm = true
            },
            selectedOption(){
                this.confirm = false
            }
        }
    }
</script>

<style>
    .chats-screen {
        padding: 5em 1em 0 1em;
    }
    
</style>