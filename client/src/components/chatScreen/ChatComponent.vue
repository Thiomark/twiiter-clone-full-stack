<template>
    <q-chat-message
        stamp="7 minutes ago"
        :text="['Have you seen Quasar?']"
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
</template>

<script>
    export default {
        name: 'ChatComponent'
    }
</script>

<style lang="scss" scoped>

</style>