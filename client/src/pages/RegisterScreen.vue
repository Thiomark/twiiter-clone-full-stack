<template>
    <q-page class="q-ma-lg">
        <q-form @submit="onSubmit" class="q-gutter-md" >
            <q-input
                v-model="name"
                placeholder="Name"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Please type something']"
            />
            <q-input
                v-model="email"
                placeholder="Email"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Please type something']"
            />
            <q-date
                class=""
                v-model="date"
                minimal
            />
        </q-form>
    </q-page>
</template>

<script>

export default {
    name: 'HomeScreen',
    data () {
        return {
            name: '',
            email: '',
            date: '',
            dateOfBirth: '',
            accept: false
        }
    },
    methods: {
        onSubmit(){

        }
    }
}
</script>

<style lang="scss" scoped>

    .divider {
        border-top: 1px solid rgba(219, 219, 219, 0.329);
        border-bottom: 1px solid rgba(219, 219, 219, 0.329);
    }

</style>