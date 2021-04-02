<template>
    <q-item class="twoot q-py-md ">
        <q-item-section avatar top>
            <q-avatar>
                <img :src="twoot.image" :alt="`${twoot.name}'s profile picture`">
            </q-avatar>
        </q-item-section>
        <q-item-section>
            <q-item-label :style="{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}" class="text-subtitle1">
                <div>
                    <strong>{{twoot.name}}</strong> 
                    <span class="handle">@{{twoot.handle}} &bull; {{twoot.date | relativeDate}}</span>
                </div>
                    <q-btn size="md" round flat icon="more_horiz">
                        <q-menu>
                            <q-list style="min-width: 100px">
                                <q-item v-if="$store.state.user.user.id === twoot.twootBY" clickable v-close-popup>
                                    <q-item-section>Delete</q-item-section>
                                </q-item>
                                <q-item v-if="$store.state.user.user.id !== twoot.twootBY" clickable v-close-popup>
                                    <q-item-section>Report</q-item-section>
                                </q-item>
                                <q-item v-if="$store.state.user.user.id === twoot.twootBY" clickable v-close-popup>
                                    <q-item-section>Edit</q-item-section>
                                </q-item>
                                <q-separator />
                                <q-item v-if="$store.state.user.user.id === twoot.twootBY" clickable v-close-popup>
                                    <q-item-section>Archive</q-item-section>
                                </q-item>
                            </q-list>
                        </q-menu>
                    </q-btn>
                    
            </q-item-label>
            <q-img
                v-if="twoot.twootImage"
                :src="twoot.twootImage"
            >
            </q-img>
            <q-item class="remove-padding" clickable v-ripple >
                <q-item-label @click="AddComment" v-if="twoot.twoot" class="move-to-position twoot-content ">
                    {{twoot.twoot}}
                </q-item-label>
            </q-item>
            
            <div class="row q-mt-md the-icons justify-between q-pr-lg">
                <q-btn class="gt-xs" label="Replies" size="sm" color="grey" flat icon="far fa-comment"/>
                <q-btn class="gt-xs" label="Retwoot" size="sm" color="grey" flat icon="fas fa-retweet"/>
                <q-btn class="gt-xs" label="Like" size="sm" :color="twoot.liked ? 'pink-6' : 'grey'" flat :icon="twoot.liked ? 'fas fa-heart' : 'far fa-heart'"/>
                <q-btn class="lt-sm" size="sm" color="grey" flat icon="far fa-comment"/>
                <q-btn class="lt-sm" size="sm" color="grey" flat icon="fas fa-retweet"/>
                <q-btn class="lt-sm" size="sm" :color="twoot.liked ? 'pink-6' : 'grey'" flat :icon="twoot.liked ? 'fas fa-heart' : 'far fa-heart'"/>
            </div>
        </q-item-section>
    </q-item>
</template>

<script>

    import { formatDistance } from 'date-fns'

    export default {
        name: 'TwootComponent',
        props: {
            twoot: {
                type: Object
            },
            twootOwner: {
                type: Boolean
            }
        },
        methods: {
            deleteTwoots(id){
                this.twoots = this.twoots.filter(twoot => twoot.id !== id)
            },
            AddComment(){
                this.$router.push({ name: 'Reply'})
            }
        },
        filters: {
            relativeDate(value){
                return formatDistance(new Date(value), new Date())
            }
        }
    }
</script>

<style lang="scss" scoped>

    .handle {
        margin-left: .6em;
        color: gray;
    }

    .twoot-content {
        margin-top: -0.5em;
        white-space: pre-line;
    }

    .the-icons {
        margin-left: -17px;
    }

    .twoot:not(:first-child) {
        border-top: 1px solid rgba(0, 0, 0, 0.12);
    }

    .remove-padding{
        padding: 0;
        margin-left: -4em;
    }

    .move-to-position {
        margin-left: 4em;
    }


</style>