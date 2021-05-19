<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>リンク</h2>
    <ul>
      <li>
        <router-link :to="{ name: 'TestVue'}">テストページ</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Oyako'}">親子_prop_emit</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'OyakoStore'}">親子_store</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'OyakoAtomic'}">親子_atomic_modoki</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Hajimari Vue Study'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
