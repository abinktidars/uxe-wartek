<template>
  <div class="wrapper font-sans">
    <header>
      <Header />
    </header>
    <main class="flex h-full bg-[#F9F9F9]">
      <Sidebar />
      <Content />
    </main>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
};
</script>

<style>
body {
  font-family: 'Poppins', sans-serif;
}

html,
body,
#__nuxt,
#__layout {
  height: 100%;
}

.wrapper {
  height: 100%;
}

main {
  padding-top: 80px;
}
</style>
