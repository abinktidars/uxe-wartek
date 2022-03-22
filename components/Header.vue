<template>
  <div
    class="fixed w-full p-6 bg-white dark:bg-slate-800* dark:text-white* shadow-sm h-20 flex justify-between items-center"
  >
    <div class="logo flex items-center gap-1 text-2xl">
      <span><img src="~/assets/images/logo-uxe.svg" alt="" /></span> Wartek Design System
    </div>
    <div class="content flex items-center gap-4">
      <div class="profile text-base flex gap-2 items-center">
        <span>
          <img src="~/assets/images/avatar-male.png" alt="" />
        </span>
        Hi Developer
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>