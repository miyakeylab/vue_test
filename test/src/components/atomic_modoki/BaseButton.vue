<template>
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" @click="$emit('click')">{{label}}</button>
</template>

<script>

export default {
  props: {
    label: {
      type: String,
      required: true // required をつけて必須に
    }
  }
}
</script>
