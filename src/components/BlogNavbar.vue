<template>
    <div class="flex items-center space-x-10 p-5 w-full bg-gray-700 text-white h-12 ">
        <router-link to="/" class="p-2 hover:bg-gray-400 hover:p-2 rounded-sm">Посты</router-link>
        <router-link to="/create" class="p-2 hover:bg-gray-400 hover:p-2 rounded-sm">Создать пост</router-link>
        <router-link to="/register" class="p-2 hover:bg-gray-400 hover:p-2 rounded-sm" v-show="!$store.getters.getIsActive">Регистрация</router-link>
        <router-link to="/login" class="p-2 hover:bg-gray-400 hover:p-2 rounded-sm" v-show="!$store.getters.getIsActive">Вход</router-link>
        <button v-show="$store.getters.getIsActive" @click="logout" class="p-2 hover:bg-gray-400 hover:p-2 rounded-sm">Выйти ({{ $store.getters.getUser.username }})</button>
    </div>
</template>

<script>
export default {
    methods: {
        logout() {
            this.$store.commit('setIsActive', false)
            this.$router.push('/')
        }
    }
}
</script>

<style scoped>
</style>