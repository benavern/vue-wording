<template>
  <div class="hello">
    <h1>Wording Vue.js plugin</h1>

    <hr>

    <h2>Code</h2>

    <pre v-pre>&lt;template&gt;

  &lt;section&gt;{{ $t('simple') }}&lt;/section&gt;
  &lt;section&gt;{{ $t('oups') }}&lt;/section&gt;
  &lt;section&gt;{{ $t('complicated', {nb: 3, things: 'bananes', feeling: 'cool'}) }}&lt;/section&gt;
  &lt;section&gt;{{ $t('anotherWording') }}&lt;/section&gt;
  &lt;section&gt;&lt;button @click="updateWording"&gt;{{ $t(reactive) }}&lt;/button&gt;&lt;/section&gt;
  &lt;section&gt;&lt;pre&gt;{{ $t('plainObject', {val: 'yolo!', three: 3}) }}&lt;/pre&gt;&lt;/section&gt;
  &lt;section&gt;{{ $t('plainObject.key', {val: 'Awesome!'}) }}&lt;/section&gt;

&lt;/template&gt;

&lt;script&gt;

  export default {
    name: 'hello',
    data () {
      return {
        reactive: 'Click me!'
      }
    },
    methods: {
      updateWording () {
        this.reactive = 'simple'
      }
    }
  }

&lt;/script&gt;</pre>
    <hr>

    <h2>Result</h2>

    <section>{{ $t('simple') }}</section>
    <section>{{ $t('oups') }}</section>
    <section>{{ $t('complicated', {nb: 3, things: 'bananes', feeling: 'cool'}) }}</section>
    <section>{{ $t('anotherWording') }}</section>
    <section><button @click="updateWording">{{ $t(reactive) }}</button></section>
    <section><pre>{{ $t('plainObject', {val: 'yolo!', three: 3}) }}</pre></section>
    <section>{{ $t('plainObject.key', {val: 'Awesome!'}) }}</section>

    <hr>

    <small>Made by <a href="https://caradeuc.info">Benjamin Caradeuc</a></small>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      reactive: 'Click me!'
    }
  },
  methods: {
    updateWording () {
      this.reactive = 'simple'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

section {
  margin: 1rem 0;
}

hr {
  display: block;
  margin: 2rem auto;
  width: 75%;
  max-width: 960px;
  border: none;
  border-top: 2px solid #ddd
}

button {
  border: none;
  background: #ddd;
  padding: 1rem 2rem;
  border-radius: 3px;
  position: relative;
  outline: none;
  top: -5px;
  left: -5px;
  box-shadow: 5px 5px 1px rgba(0, 0, 0, .3);
  transition: all .3s;
}

button:hover {
  top: 0;
  left: 0;
  box-shadow: 0 0 0 #444;
  background: #42b983;
  color: white;
  cursor: pointer;
}

pre {
  background-color: #444;
  color: #ddd;
  display: inline-block;
  text-align: left;
  padding: 1rem 2rem 1rem 1.5rem;
  font-weight: bold;
  box-shadow: 5px 5px 1px rgba(0, 0, 0, .3);
  border-left: 5px solid #42b983;
  border-radius: 3px;
}

a {
  color: #42b983;
}
</style>
