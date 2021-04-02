<template>
    <q-input class="q-ma-md" dense placeholder="Search Twooter" outlined rounded>
        <template v-slot:prepend>
            <q-icon name="search" />
        </template>
    </q-input>
</template>

<script>
    export default {
        name: "SearchTwooter"
    }
</script>
