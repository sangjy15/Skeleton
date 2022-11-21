<template>
    <div class="profile-card">
        <div class="profile-image" >
            <img src="../assets/profile.jpg"/>
        </div>
        <div class="profile-info">
            <span>Written By</span>
            <h3> {{ userData.name }}</h3>
            <p> {{ userData.bio }}</p>
        </div>
    </div>
</template>
<script>

import {ref} from 'vue'
const loadUserData = async () => {
    return new Promise((resove) => {
        setTimeout(() => {
            resove({
                name: 'Jinyoung Sang',
                pic: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
                bio: ' Many of life\'s failures are people who did not realize '
            })
        }, 2000)
    })
}

export default {
    async setup () {
        const userData = ref(await loadUserData())

        return {
            userData
        }
    }
}
</script>
<style>
.profile-card {
    width: 100%;
    max-width: 700px;
    min-height: 180px;
    background: white;
    margin: 0 auto;
    padding: 20px;
    box-sizing: border-box;
    overflow: hidden;
    border-radius: 20px;
}
.profile-image {
    width: 10%;
    float: left;
}

.profile-image img {
    width: 100%;
    height: auto;
    border-radius: 50%;
    border: 5px solid tomato;
    padding: 5px;
}

.profile-info {
    width: 85%;
    float: right;
}

.profile-info span {
    text-transform: uppercase;
    color: #777;
    letter-spacing: 3px;
}

.profile-info h3 {
    margin: 10px 0;
    font-size: 1.5em;
    color: #222;
}

.profile-info p {
    line-height: 140%;
    color: #777;
}
</style>