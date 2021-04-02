<template>
    <div class="profile-header" :class="[border ? 'add-border' : '', backgroundColour]">
        <q-toolbar>
            <q-btn  
                v-if="hideOnScroll"
                v-go-back.single 
                round 
                class="q-ma-sm move-to-front" 
                :color="visible ? 'yellow-9' : 'white'" 
                :flat="!visible" size="1em" 
                icon="arrow_back" 
            />
            <q-btn  
                v-if="!hideOnScroll"
                v-go-back.single 
                round flat 
                size="1em" 
                class="q-ma-sm" 
                color="primary" 
                :icon="backButtonIcon" 
            />
            <div v-if="reply" style="width: 100%"></div>
            <q-btn 
                v-if="reply"
                unelevated 
                :disable="!replyText"
                rounded
                size="1em" 
                class="q-ma-sm" 
                color="primary" 
                label="Reply" 
            />
            <q-toolbar-title v-if="name" class="text-weight-bold">{{name}}</q-toolbar-title>
        </q-toolbar >
    </div>
</template>

<script>

    export default {
        name: 'FixedHeaderComponent',
        props: {
            visible: {
                type: Boolean
            },
            hideOnScroll: {
                type: Boolean
            },
            border: {
                type: Boolean
            },
            name: {
                type: String
            },
            backgroundColour: {
                type: String
            },
            reply: {
                type: Boolean
            },
            replyText: {
                type: Boolean
            },
            backButtonIcon: {
                type: String,
                default: 'arrow_back',
            }
        }
    }
</script>

<style lang="scss" scoped>

    .profile-header {
        position: fixed;
        width: 100%;
        z-index: 10;
    }

    .add-border {
        border-bottom: 1px solid rgb(233, 233, 233);
    }

</style>