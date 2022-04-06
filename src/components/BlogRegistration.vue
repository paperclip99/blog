<template>
  <div class="w-full h-screen bg-gray-200">
    <form action="" class="flex justify-center">
      <div class="mt-20 bg-white p-10 rounded-xl shadow-xl m-50">
        <h1 class="text-center text-3xl">Регистрация</h1>
        <div>
          <label for="" class="block mt-5 font-bold text-gray-600"
            >Имя пользователя</label
          >
          <input type="text" class="border-2 text-xl p-1" v-model="user.username"/>
        </div>
        <div>
          <label for="" class="block mt-5 font-bold text-gray-600">Email</label>
          <input type="email" class="border-2 text-xl p-1" v-model="user.email"/>
        </div>
        <div>
          <label for="" class="block mt-5 font-bold text-gray-600"
            >Пароль</label
          >
          <input type="password" class="border-2 text-xl p-1" v-model="user.password"/>
        </div>
        <button class="border-2 mt-5 p-3 w-full hover:bg-gray-200" @click="createUser">Зарегистрироваться</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: "",
        password: "",
        email: ""
      },
    };
  },
  methods: {
    createUser() {
      if (this.user.username && this.user.password && this.user.email) {
        this.$store.commit('setUser', this.user)
        this.$store.commit('setIsActive', true)
        console.log('created');
        this.$router.push('/')
      }
    }
  },
};
</script>

<style scoped></style>
