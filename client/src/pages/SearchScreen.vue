<template>
    <q-page>
        <section v-if="getBottomNavbar">
            <h6 class="text-center text-grey-7">Try search for people, topic or keyboards</h6>
        </section>
        <section v-if="!getBottomNavbar" class="trends">
            <q-img
            src="https://cdn.quasar.dev/img/parallax2.jpg"
            style="width: 100%"
            >
                <div class="absolute-bottom text-subtitle1">
                    Covid-19 &bull; LIVE
                    <span style="display: block">Covid-19 in South Africa</span>
                </div>
            </q-img>
            <q-list bordered separator>
                <q-item clickable v-ripple>
                    <q-item-section>Trends for you</q-item-section>
                </q-item>
                <q-item class="q-py-md" clickable v-ripple>
                    <q-item-section>
                    <q-item-label>Item with caption</q-item-label>
                    <q-item-label caption>Caption</q-item-label>
                    </q-item-section>
                </q-item>
                <q-item class="q-py-md" clickable v-ripple>
                    <q-item-section>
                    <q-item-label>Item with caption</q-item-label>
                    <q-item-label caption>Caption</q-item-label>
                    </q-item-section>
                </q-item>
                <q-item class="q-py-md" clickable v-ripple>
                    <q-item-section>
                    <q-item-label>Item with caption</q-item-label>
                    <q-item-label caption>Caption</q-item-label>
                    </q-item-section>
                </q-item>
                <q-item class="q-py-md" clickable v-ripple>
                    <q-item-section>
                    <q-item-label>Item with caption</q-item-label>
                    <q-item-label caption>Caption</q-item-label>
                    </q-item-section>
                </q-item>
                <q-item class="q-py-md" clickable v-ripple>
                    <q-item-section>
                    <q-item-label>Item with caption</q-item-label>
                    <q-item-label caption>Caption</q-item-label>
                    </q-item-section>
                </q-item>
                <q-item clickable v-ripple>
                    <q-item-section>
                        <q-item-label class="text-primary text-bold">Show more</q-item-label>
                    </q-item-section>
                </q-item>
            </q-list>
        </section>
    </q-page>
</template>

<script>

    import {mapGetters} from 'vuex'
    export default {
        name: 'MessageScreen',
        data() {
            return {
                
            }
        },
        computed: {
            ...mapGetters('helpers', ['getBottomNavbar'])
        }
    }
</script>
