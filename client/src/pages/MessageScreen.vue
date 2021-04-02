<template>
    <q-page>
        <q-pull-to-refresh @refresh="refresh">
            <q-list separator padding>
                <MessageComponent />
                <MessageComponent />
                <MessageComponent />
                <MessageComponent />
            </q-list>
        </q-pull-to-refresh>
    </q-page>
</template>

<script>
    import MessageComponent from '../components/messageScreen/MessageComponent'
    export default {
        name: 'MessageScreen',
        components: {
            MessageComponent
        },
        methods: {
            refresh(){
                console.log('hello')
            }
        }
    }
</script>

