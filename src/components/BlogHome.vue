<template>
  <div
    class="bg-gray-200 h-screen p-5"
    v-if="$store.getters.getIsActive && $store.getters.getPost.title"
  >
    <h1 class="text-center text-4xl mb-2">Посты</h1>
    <div class="flex w-1/3">
      <div class="bg-white p-5 rounded-md">
        <h1 class="text-3xl font-medium">{{ $store.getters.getPost.title }}</h1>
        <h5 class="font-bold text-gray-500">
          Author: {{ $store.getters.getPost.author }}
        </h5>
        <p>{{ $store.getters.getPost.body }}</p>
        <div class="flex flex-col">
          <button
            @click="showModal"
            v-show="
              $store.getters.getPost.author ===
                $store.getters.getUser.username && $store.getters.getIsActive
            "
            class="border-2 p-2 mt-2 hover:bg-gray-500 hover:text-white"
          >
            Редактировать
          </button>
          <button
            @click="$store.commit('deletePost')"
            v-show="
              $store.getters.getPost.author ===
                $store.getters.getUser.username && $store.getters.getIsActive
            "
            class="border-2 p-2 mt-2 hover:bg-gray-500 hover:text-white"
          >
            Удалить пост
          </button>
        </div>
      </div>
    </div>

    <!--Modal-->
    <div id="myModal" class="modal" v-show="modalActive">
      <!-- Modal content -->
      <div class="modal-content rounded-lg">
        <div class="text-right mr-2">
          <button @click="closeModal" class="text-lg border-2 pl-2 pr-2">
            x
          </button>
        </div>
        <div class="m-5">
          <label for="" class="block text-gray-600 font-bold">
            Заголовок
          </label>
          <input
            type="text"
            class="border-2 text-xl p-1 w-full"
            v-model="post.title"
          />
        </div>
        <div class="m-5">
          <label for="" class="block text-gray-600 font-bold"> Текст </label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            class="p-2 border-2 w-full"
            v-model="post.body"
          ></textarea>
          <button
            class="border-2 w-full mt-3 p-3 hover:bg-gray-200"
            @click="editPost"
          >
            Изменить
          </button>
        </div>
      </div>
    </div>
  </div>
  <div v-else-if="!$store.getters.getIsActive" class="text-center mt-10">
    <button
      class="border-2 p-2 text-4xl hover:bg-gray-400 hover:text-white"
      @click="this.$router.push('/login')"
    >
      Войдите
    </button>
    <h1 class="text-2xl mt-3">чтобы увидеть публикации</h1>
  </div>
  <div v-else class="w-full h-screen flex justify-center">
    <div class="">
      <h1 class="text-center font-bold text-5xl mt-5">Постов пока нет :(</h1>
      <img src="../assets/preview.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: this.$store.getters.getPost.title,
        body: this.$store.getters.getPost.body,
        author: this.$store.getters.getUser.username,
      },
      modalActive: false,
    };
  },
  methods: {
    getPosts() {
      console.log("worked");
    },
    editPost() {
      this.$store.commit("setPost", this.post);
      this.modalActive = false;
    },
    closeModal() {
      this.modalActive = false;
    },
    showModal() {
      this.modalActive = true;
    },
  },
};
</script>

<style scoped>
.modal {
  /* display: none; Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}

/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
}

/* The Close Button */
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
img {
  width: 600px;
}
</style>
