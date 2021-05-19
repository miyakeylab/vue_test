<template>
  <div class="bg-pink-200 h-40 block max-w-sm border-2 border-red-600 ...">
    <p>孫コンポーネントです</p>
    <div class="py-5">
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" @click="countUpPropsGrandChild()">count up props</button>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" @click="countUpEmitGrandChild()">count up emit</button>
    </div>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" @click="changeStoreMessage()">change store message</button>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" @click="addIncrement(3)">count up store</button>

  </div>
</template>

<script>

export default {
  props: {
    handleAddNumberChild: {
      type: Function,
      required: true // required をつけて必須に
    }
  },
  methods: {
    // Prop で渡した function を実行
    countUpPropsGrandChild () {
      console.log('孫 countUpPropsGrandChild')
      this.handleAddNumberChild(3)
    },
    // emit を使って function を実行
    countUpEmitGrandChild () {
      console.log('孫 countUpEmitGrandChild')
      // emit の event は 文字列で管理
      this.$emit('addNumberChild', 3)
    },
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
