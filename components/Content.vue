<template>
  <div class="max-w-screen-xl flex-3">
    <div class="p-5 w-full">
      <div class="component">
        <div class="bg-gray-50 w-full p-6 rounded-xl">
          <div class="component">
            <div class="component__content">
              <h2 class="text-2xl mb-2 font-semibold">Bottom Sheet Share </h2>
              <p class="mb-2">
                Bottom sheets are surfaces containing supplementary content that are anchored to the bottom of the screen.
                Modal bottom sheets are alternatives to menus or simple dialogs. They can also present deep-linked content from other apps. They are primarily for mobile.              
              </p>
              <button
                class="h-10 px-6 font-semibold rounded-md bg-blue-500 mt-4 text-white mb-3"
                @click="showBottomsheet = true"
              >
                Open Bottom Sheet
              </button>      
            </div>
            <Bottomsheet v-show="showBottomsheet" @close-bottomsheet="showBottomsheet = false"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bottomsheet from './bottomsheet/Bottomsheet.vue';

export default {
  components: { Bottomsheet },
  name: "Content",
  data () {
    return {
      showBottomsheet: false
    }
  }
};
</script>

<style lang="scss">
.component {
  max-width: 768px;
}
</style>