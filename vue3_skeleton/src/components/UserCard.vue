<template>
    <div class="user-card">
    <div class="card-avatar">
      <img src="../assets/logo.png" alt="" />
    </div>
    <div class="card-info">
      <p class="name">John Komarnicki</p>
      <p class="summary">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />
        Tenetur doloremque labore illum accusamus, quo voluptates
        unde nihil quia! Nostrum ea accusamus explicabo beatae
        vero inventore.
      </p>
    </div>
  </div>
</template>
<script>
</script>
<style>
.user-card {
  width: 80%;
  display: flex;
  gap: 16px;
  padding: 30px;
  background-color: #f1f1f1;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1),
    0 2px 4px -2px rgb(0 0 0 / 0.1);
}
.card-avatar img {
  width: 100px;
  height: auto;
  border-radius: 50%;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1),
    0 2px 4px -2px rgb(0 0 0 / 0.1);
}
.card-info {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 16px;
}
.name {
  font-size: 32px;
}
.summary {
  font-size: 20px;
}
</style>