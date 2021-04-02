<template>
    <q-page >
        <FixedHeaderComponent :visible="visible" :hideOnScroll="true" :backgroundColour="visible ? '' : 'bg-yellow-9'" class="lt-md"/>
        <div class="notification add-border-bottom" >
            <q-pull-to-refresh @refresh="refresh">
                <q-skeleton v-if="userLoading" height="200px" />
                <q-img
                    v-if="!userLoading"
                    src="https://placeimg.com/500/300/nature"
                    style=" height: 200px;"
                >
                </q-img>
                <q-skeleton v-intersection="onIntersection" v-if="userLoading" bordered type="circle" size="6em" class="bg-grey-4 skeleton-profile-avator" />
                <q-avatar v-intersection="onIntersection" v-if="!userLoading" class="profile-avator" size="6em">
                    <img src="https://cdn.quasar.dev/img/avatar.png">
                </q-avatar>
                <div class="content">
                    <q-skeleton v-if="userLoading" width="9em" />
                    <q-skeleton v-if="userLoading" class="q-mt-md" height="9em" />
                    <h1 class="text-grey-6" v-if="!userLoading">@thiomark <q-icon color="primary" name="verified" /></h1>
                    <p class="text-grey-10" v-if="!userLoading">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse rem placeat perspiciatis consequuntur aperiam? Molestias magni enim nulla eveniet, beatae numquam ex, repellat soluta ipsa assumenda corrupti, consectetur eligendi quidem.</p>
                    <div class="following">
                        <q-skeleton v-if="userLoading" class="q-my-md q-mr-md" width="6em" />
                        <q-skeleton v-if="userLoading" class="q-my-md" width="6em" />
                        <router-link class="text-grey-6" v-if="!userLoading" to='/' ><strong class="text-grey-9">50</strong>Following</router-link>
                        <router-link class="text-grey-6" v-if="!userLoading" to='/' ><strong class="text-grey-9">50</strong>Followers</router-link>
                    </div>
                </div>
                <ProfileTwootsComponent 
                    :currentTab='currentTab'
                />
            </q-pull-to-refresh>
        </div>
    </q-page>
</template>

<script>

import FixedHeaderComponent from '../components/headers/FixedHeaderComponent'
import ProfileTwootsComponent from '../components/profileScreen/ProfileTwootsComponent'
import TwootTab from '../components/profileScreen/TwootTab'
import {mapGetters, mapActions} from 'vuex'

export default {
    name: 'ProfileScreen',
    components: {
        ProfileTwootsComponent,
        FixedHeaderComponent,
        TwootTab
    },
    data() {
        return {
            tab: 'twoots',
            currentTab: 'userTwoots',
            visible: false
        }
    },
    methods: {
        ...mapActions('user', ['getLoggedUser']),
        onIntersection (entry) {
            this.visible = entry.isIntersecting
        },
        selectedTab(tab){
            if(tab === 'twoots'){
                this.currentTab = 'userTwoots'
            }
            else if(tab === 'images'){
                this.currentTab = 'twootsWithMedia'
            }
            else if(tab === 'likes'){
                this.currentTab = 'likedTwoots'
            }
        },
        likeTheTwoot(theTwoot){
            this.twoots =  this.twoots.map(twoot => twoot.id === theTwoot ? twoot.liked === true : twoot)
        },
        refresh (done) {
            setTimeout(() => {
                done()
            }, 1000)
        }
    },
    computed: {
        ...mapGetters('user', ['user', 'userLoading']),
    },
    created(){
        this.getLoggedUser()
    }
}
</script>

<style scoped lang="scss">


    .add-border-bottom {
        border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    }

    .notification {

        margin-bottom: .2em;
        min-height: 98vh;

        .move-to-front {
            z-index: 10;
        }

        .skeleton-profile-avator {
            margin-top: -3em;
            margin-left: 1em;
            border: 4px solid rgb(255, 255, 255);
        }

        .profile-avator {
            margin-top: -.5em;
            padding-left: .2em;
            img {
                border: 4px solid rgb(255, 255, 255);
            }
        }

        .content {
            padding: .4em 1.2em;
        
            h1 {
                margin: 0;
                font-size: 1rem;
                font-weight: bold;
                padding: 0;
                line-height: 1;
            }

            p {
                padding: .8em 0;
                margin: 0;
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
            }
        }
    }


</style>
