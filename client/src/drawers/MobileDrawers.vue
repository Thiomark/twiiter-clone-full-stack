<template>
    <section>
        <div class="content q-ma-md">
            <q-skeleton v-if="userLoading" bordered type="circle" size="5em" class="bg-grey-4 q-mb-md" />
            <q-avatar v-if="!userLoading" class="profile-avator q-mb-md" size="5em">
                <img src="https://cdn.quasar.dev/img/avatar.png">
            </q-avatar>
            <q-skeleton v-if="userLoading" width="9em" />
            <h1 class="text-grey-10 text-weight-bolder" v-if="!userLoading">Thio Mark</h1>
            <h1 class="text-grey-6" v-if="!userLoading">@thiomark<q-icon color="primary" name="verified" /></h1>
            <div class="following q-py-md">
                <q-skeleton v-if="userLoading" class="q-my-md q-mr-md" width="6em" />
                <q-skeleton v-if="userLoading" class="q-my-md" width="6em" />
                <router-link class="text-grey-6" v-if="!userLoading" to='/' ><strong class="text-grey-9">50</strong>Following</router-link>
                <router-link class="text-grey-6" v-if="!userLoading" to='/' ><strong class="text-grey-9">50</strong>Followers</router-link>
            </div>
        </div>
        <q-list >
            <LayoutButton 
                v-for="(item, index) in pages" 
                :key="index" 
                :pageName="item.pageName"
                :iconName="item.iconName"
                :routeTo="item.routeTo"
            />
        </q-list>
    </section>
</template>

<script>
    import LayoutButton from '../helpers/LayoutButton'
    export default {
        name: 'MobileDrawer',
        components: {
            LayoutButton
        },
        data() {
            return {
                userLoading: false,
                pages: [
                    {pageName: 'Profile', iconName: 'perm_identity', routeTo: '/profile'},
                    {pageName: 'Settings', iconName: 'settings', routeTo: '/settings'}
                ] 
            }
        },
    }
</script>

<style lang="scss" scoped>

    .add-border-bottom {
        
    }

    .content {

        h1 {
            margin: 0;
            padding: 0;
            line-height: 1.5;
            font-size: 1.1em;
        }

        a {
            font-size: .975rem;
            text-decoration: none;
            strong {
                padding-right: .4em;
            }
        }

        a {
            margin-right: 1em;
        }

        .following {
            display: flex;
            border-bottom: 1px solid rgba(0, 0, 0, 0.12);
        }
    }

</style>