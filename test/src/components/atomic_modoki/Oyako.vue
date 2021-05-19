<template>
  <div class="space-y-4 bg-gray-200 border-2 border-gray-600 ...">
      これは親コンポーネントです！！！
      <BaseButton label="こんにちは" @click="onClickButton"></BaseButton>
  </div>
</template>

<script>
import BaseButton from './BaseButton'

export default {
  name: 'OyakoAtomic',
  components: { BaseButton },
  methods: {
    onClickButton () {
      console.log('親 onClickButton')
    }
  }

}
</script>
