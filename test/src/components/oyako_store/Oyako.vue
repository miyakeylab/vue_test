<template>
  <div class="space-y-4 bg-gray-200 border-2 border-gray-600 ...">
      <p>親コンポーネントです</p>
      <p>{{ message }}</p>
    <div>store_count変数:{{ storeCount }}</div>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" @click="addIncrement(1)">count up store</button>
    <child class="m-auto" />
  </div>
</template>

<script>
import child from './Child'

export default {
  name: 'Oyako',
  components: { child },
  data: () => ({
    count: 0
  }),
  computed: {
    message () {
      return this.$store.getters.messageData
    },
    storeCount () {
      return this.$store.getters.countData
    }
  },
  methods: {
    addIncrement (number) {
      this.$store.dispatch('increment', {num: number})
    }
  }
}
</script>
