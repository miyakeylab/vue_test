<template>
  <div class="space-y-4 bg-gray-200 border-2 border-gray-600 ...">
      これは親コンポーネントです！！！
    <div>{{ count }}</div>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" @click="addCount(1)">count up props</button>
    <child class="m-auto" :handle-add-number="addCount" @addNumber="addCount" />
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
  methods: {
    addCount (number) {
      console.log('親 addCount')
      return (this.count += number)
    }
  }
}
</script>
