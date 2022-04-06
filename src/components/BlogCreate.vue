<template>
    <div class="w-full bg-gray-200 h-screen" v-if="$store.getters.getIsActive">
      <form class="flex justify-center">
          <div class="bg-white mt-10 w-400 rounded-xl p-2 shadow-xl">
              <h1 class="text-center mt-5 text-xl">Создать пост</h1>
              <div class="m-5">
                  <label for="" class="block text-gray-600 font-bold">
                      Заголовок
                  </label>
                  <input type="text" class="border-2 text-xl p-1 w-full" v-model="post.title"/>
              </div>
              <div class="m-5">
                  <label for="" class="block text-gray-600 font-bold">
                      Текст
                  </label>
                  <textarea name="" id="" cols="30" rows="10" class="p-2 border-2 w-full" v-model="post.body"></textarea>
                  <button class="border-2 w-full mt-3 p-3 hover:bg-gray-200" @click="createPost">Создать</button>
              </div>
          </div>
      </form>
    </div>
    <div v-else class="text-center mt-10">
        <button class="border-2 p-2 text-4xl hover:bg-gray-400 hover:text-white" @click="this.$router.push('/login')">Войдите</button>
        <h1 class="text-2xl mt-3">чтобы создать пост</h1>
    </div>
</template>

<script>


export default {

    data() {
        return {
            post: {
                title: '',
                body: '',
                author: this.$store.getters.getUser.username,
            }
        }
    },
    methods: {
        createPost() {
            if (this.post.title && this.post.body && this.post.author) {
             this.$store.commit('setPost', this.post)   
             this.$router.push('/')
            }
        }
    }
}
</script>

<style scoped>
    
</style>