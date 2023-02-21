<template>
  <div class="container" v-show="isShowMsg">
    <div class="says">
      <div style="height: 10px"></div>
      <div style="text-align: right">
        <button class="close" title="Got it." @click="closeMsg()">\|/</button
        >&nbsp;&nbsp;&nbsp;&nbsp;
      </div>
      <div v-if="showSomeone % 2 == 1">
        <strong>Eliud Kipchoge</strong> said<br />
        only the disciplined ones are free in life<br />
        I repeat again<br />
        only the disciplined ones are free in life<br />
        if your are undisciplined, you are a slave to your moods<br />
        you are a slave to your passions<br />
        that's a fact<br />
        <br />
        The best time to plant a tree was 25 years ago, <br />
        but the second best time to plant a tree of self discipline is today.<br />
        Today is the best time for you to plant a tree of self discipline.<br />
        <br />
        To be successful in sport is not a chance. It's a choice.<br />
        If you want to be successful, you need to choose.<br />
        But to choose well, you must know who you are and what you stand for,<br />
        where you want to go and why you want to get there.<br />
        <br />
      </div>
      <div v-else style="font-size: 20px; line-height: 40px">
        <strong>Eliud Kipchoge</strong> said<br />
        No human is limited.<br />
        Any human being can go beyond his limits.<br />
        Any human being can go beyond his thoughts.<br />
        No human being should be limited in his thoughts, <br />
        or in what he or she should be doing.<br />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted } from "vue"

  let isShowMsg = ref<boolean>(true)
  const closeMsg = (): void => {
    isShowMsg.value = false
  }

  let showSomeone = ref<number>(0)
  onMounted(() => {
    showSomeone.value = Number((Math.random() * 10).toFixed(0))
  })
</script>

<style scoped>
  .container {
    width: 100%;
    height: 100vh;
    position: fixed;
    background: white;
    text-align: center;
    background-image: url("../assets/runner.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    overflow: auto;
  }

  .says {
    min-height: 60vh;
    margin: 10% 15% 0 15%;
    background: rgb(199, 198, 198);
    border-radius: 60px 0 60px 0;
    opacity: 0.8;
  }

  .close {
    width: 40px;
    height: 40px;
    font-size: 30px;
    line-height: 30px;
    opacity: 0.7;
    background: rgb(199, 198, 198);
    border-radius: 5px;
    border: 0;
    cursor: pointer;
    overflow: hidden;
    transition: 444ms;
  }

  .close:hover {
    border-radius: 50%;
    opacity: 0.9;
    background: whitesmoke;
    border: 2px black solid;
  }

  .close:active {
    background: black;
    color: whitesmoke;
  }
</style>
