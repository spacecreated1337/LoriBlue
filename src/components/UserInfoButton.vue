<template>
  <div
    class="fixed left-5 bottom-5 w-14 h-14 bg-rose-400 rounded-full flex items-center justify-center"
    id="show-modal"
    @click="showModal = true"
  >
    <div class="text-white">User</div>
  </div>
  <Teleport to="body">
    <!-- use the modal component, pass in the prop -->
    <my-modal :userInfo="userInfo" :show="showModal" @close="showModal = false">
    </my-modal>
  </Teleport>
</template>
<script>
import MyModal from "@/components/UI/MyModal.vue";

export default {
  props: {
    userInfo: {
      type: Object,
      required: false,
    },
  },
  components: {
    MyModal,
  },
  data() {
    return {
      showModal: false,
    };
  },
};
</script>
