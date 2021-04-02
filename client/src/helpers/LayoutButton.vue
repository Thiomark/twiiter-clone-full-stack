<template>
    <q-item :to='routeTo' clickable v-ripple>
        <q-item-section avatar>
            <q-icon :size="iconSize" :name="iconName" />
        </q-item-section>
        <q-item-section :class="`text-weight-bold ${textSize}`">{{pageName}}</q-item-section>
    </q-item>
</template>

<script>
    export default {
        name: "LayoutButton",
        props: {
            routeTo: {
                type: String
            },
            iconName: {
                type: String
            },
            pageName: {
                type: String
            },
            textSize: {
                type: String
            },
            iconSize: {
                type: String
            }
        }
    }
</script>
