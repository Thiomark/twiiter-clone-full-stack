<template>
    <q-page>
        <q-pull-to-refresh @refresh="refresh">
            <q-list bordered padding>
                <q-item>
                    <q-item-section top avatar>
                        <q-avatar>
                            <img src="https://cdn.quasar.dev/img/avatar2.jpg" alt="profile picture">
                        </q-avatar>
                    </q-item-section>

                    <q-item-section>
                        <q-item-label>Single line item</q-item-label>
                        <q-item-label caption lines="2">Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
                    </q-item-section>

                    <q-item-section side top>
                        <q-item-label caption>5 min ago</q-item-label>
                    </q-item-section>
                </q-item>
            </q-list>
        </q-pull-to-refresh>
    </q-page>
</template>

<script>
export default {
    name: 'NotificationScreen',
    methods: {
        refresh(){
            console.log('hello')
        }
    }
}
</script>

