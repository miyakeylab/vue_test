<template>
  <div class="bg-purple-200 block py-4 px-px max-w-sm border-2 border-gray-600 ...">
    <p>子コンポーネントです</p>
    <p>親からもらった変数{{countNumber}}</p>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" @click="countUpPropschild()">count up props メソッド</button>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" @click="countUpEmitchild()">count up emit</button>
    <grandchild class="m-auto"  :count-number-child="countNumber" :handle-add-number-child="countUpPropschild" @addNumberChild="countUpEmitchild" />
  </div>
</template>

<script>
import grandchild from './Grandchild'

export default {
  components: { grandchild },
  props: {
    handleAddNumber: {
      type: Function,
      required: true // required をつけて必須に
    },
    countNumber: {
      type: Number,
      required: true // required をつけて必須に
    }
  },
  methods: {
    // Prop で渡した function を実行
    countUpPropschild () {
      console.log('子 countUpPropschild')
      this.handleAddNumber(2)
    },
    // emit を使って function を実行
    countUpEmitchild () {
      console.log('子 countUpEmitchild')
      // emit の event は 文字列で管理
      this.$emit('addNumber', 2)
    }
  }
}
</script>
