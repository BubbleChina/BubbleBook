<template>
  <div class="container">
    <div class="navigation" @click="showNote">
      <div><img :src="icon_logo" alt="" class="logo" /></div>
      username

      <div
        style="display: flex; justify-content: center; margin: 10px 0 10px 0"
      >
        <div>----</div>
        <div>----</div>
        <div>📑</div>
        <div>----</div>
        <div>----</div>
      </div>
      <div v-for="item in notes">
        <div
          :class="someValue == item.__id ? 'item-select' : 'item'"
          :id="item.__id"
          @click.stop="
            () => {
              showNote()
              changeSomeValue(item.__id)
            }
          "
        >
          {{ item.title }}
          <div class="item-date">{{ item.date }}</div>
        </div>
      </div>
      <div>
        <img
          :src="icon_more"
          alt="New a note"
          title="New a note"
          class="icon-more"
          @click.stop="
            () => {
              editNote()
              someValue = ''
            }
          "
        />
      </div>
      <div style="margin: 20px 0 0 0">
        <div class="horizon">-----------</div>
        ~~~///(^v^)\\\~~~
      </div>
      <div style="height: 100px" />
    </div>
    <div class="body">
      <div v-if="isShowNote">
        <div v-for="item in notes">
          <div v-show="someValue == item.__id">
            <hr />
            <div>title: {{ item.title }}</div>
            <div>{{ item.date }}</div>
            <div>{{ item.content }}</div>
            <div>by: {{ item.username }}</div>
            <hr />
            <div>
              <button>
                <img
                  :src="icon_edit"
                  class="icon-edit"
                  alt="edit"
                  title="To edit!"
                />
              </button>
            </div>
          </div>
        </div>
        <div style="height: 30px"></div>
        <hr />
        <div style="text-align: center">(u‿ฺu✿ฺ)</div>
      </div>
      <div v-else>edit note</div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, reactive } from "vue"
  import icon_logo from "../../public/Logo.svg"
  import { nanoid } from "nanoid"
  import icon_edit from "../assets/edit_note.svg"
  import icon_more from "../assets/more.svg"

  let isShowNote = ref<boolean>(false)

  interface Note {
    __id: string
    username: string
    title: string
    content?: string
    date: string
  }

  let notes = reactive<Note[]>([
    {
      __id: nanoid(),
      username: "Taylor",
      title: "1989",
      content: "reputation....",
      date: "2022-10-29",
    },
    {
      __id: nanoid(),
      username: "Swift",
      title: "Lover",
      content: "",
      date: "2021-12-14",
    },
    {
      __id: nanoid(),
      username: "Bubble",
      title: "Faker",
      content: "for something",
      date: "2020-11-15",
    },
    {
      __id: nanoid(),
      username: "China",
      title: "Try",
      content: "If you really try, you'll find there is no need to cry.",
      date: "2008-12-26",
    },
  ])

  const showNote = (): void => {
    isShowNote.value = true
  }
  const editNote = (): void => {
    isShowNote.value = false
  }

  let someValue = ref<string>("")
  const changeSomeValue = (target: string) => {
    someValue.value = target
  }
</script>

<style scoped>
  .container {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
    overflow: hidden;
  }
  .navigation {
    width: 20%;
    min-height: 100vh;
    text-align: center;
    background: linear-gradient(#8e9eab, #eef2f3);
    overflow: auto;
  }
  .logo {
    width: 40%;
    margin: 10% 0 0 0;
  }

  .item {
    margin: 15px;
    cursor: pointer;
    transition: 666ms;
  }
  .item:hover {
    background: rgb(229, 243, 238);
    border-radius: 25px 22px 2px 12px;
  }

  .item-select {
    background: rgb(229, 243, 238);
    border-radius: 25px 2px 2px 12px;
  }

  .item-date {
    text-align: right;
    font-size: 10px;
    line-height: 15px;
    padding: 0 5px 0 0;
  }

  .icon-more {
    width: 20%;
    margin: 20px 0 0 0;
    cursor: pointer;
    transition: 0;
  }
  .icon-more:hover {
    opacity: 0.4;
  }
  .icon-more:active {
    background: black;
    border-radius: 50%;
  }

  .horizon {
    width: 70%;
    height: 1px;
    margin: 0 auto;
  }

  .body {
    width: 80%;
    min-height: 100vh;
    overflow: auto;
  }
</style>
