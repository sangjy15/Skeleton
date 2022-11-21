
<template>
  <main>
    <UserCard />
    <UserCardSkeleton />
  </main>
</template>

<script setup>
import UserCard from './components/UserCard.vue'
import UserCardSkeleton from './components/UserCardSkeleton.vue'
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Mouse+Memoirs&display=swap");

*, ::before, ::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Mouse Memoirs", sans-serif;
}

main {
  max-width: 620;
  margin: 0 auto;
  padding-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>