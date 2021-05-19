<template>
  <div class="bg-pink-200 h-40 block max-w-sm border-2 border-red-600 ...">
    <p>孫コンポーネントです</p>
    <div>store_count変数:{{ storeCount }}</div>
    <div class="py-5">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" @click="changeStoreMessage()">change store message</button>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" @click="addIncrement(3)">count up store</button>
    </div>
  </div>
</template>

<script>

export default {
  computed: {
    storeCount () {
      return this.$store.getters.countData
    }
  },
  methods: {
    changeStoreMessage () {
      console.log('孫 changeStoreMessage')
      this.$store.dispatch('changeMessage', '孫コンポーネントです')
    },
    addIncrement (number) {
      console.log('孫 addIncrement')
      this.$store.dispatch('increment', {num: number})
    }
  }
}
</script>
