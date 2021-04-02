<template>
    <q-item to="/chats/1" clickable v-ripple>
        <q-item-section top avatar>
            <q-avatar>
                <img src="https://cdn.quasar.dev/img/avatar2.jpg" alt="profile picture">
            </q-avatar>
        </q-item-section>

        <q-item-section>
            <q-item-label class="">Single line item</q-item-label>
            <q-item-label caption lines="2">Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
        </q-item-section>

        <q-item-section side top>
            <q-item-label caption>5 min ago</q-item-label>
        </q-item-section>
    </q-item>
</template>

<script>
    export default {
        name: "MessageComponent",
    }
</script>