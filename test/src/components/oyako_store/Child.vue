<template>
  <div class="bg-purple-200 block py-4 px-px max-w-sm border-2 border-gray-600 ...">
    <p>子コンポーネントです</p>
    <div>store_count変数:{{ storeCount }}</div>
    <div class="py-5">
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" @click="changeStoreMessage()">change store message</button>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" @click="addIncrement(2)">count up store</button>
    </div>
    <grandchild class="m-auto" />
  </div>
</template>

<script>
import grandchild from './Grandchild'

export default {
  components: { grandchild },
  computed: {
    storeCount () {
      return this.$store.getters.countData
    }
  },
  methods: {
    changeStoreMessage () {
      console.log('子 changeStoreMessage')
      this.$store.dispatch('changeMessage', '子コンポーネントです')
    },
    addIncrement (number) {
      console.log('子 addIncrement')
      this.$store.dispatch('increment', {num: number})
    }
  }
}
</script>
