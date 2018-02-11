# vue-wording

[![npm version](https://badge.fury.io/js/vue-wording.svg)](https://badge.fury.io/js/vue-wording)

> Simple wording plugin for Vue.js

## How To

### install dependency


``` bash
npm i -S vue-wording
```

#### create a json file with your wording (root node must be the lang)

``` json
{
  "fr": {
    "simple": "Hello, World!",
    "complicated": "j'ai mangé #{nb} #{things} et c'était #{nb} fois plus #{feeling}!",
    "anotherWording": "Ce wording a été compilé avec amour! #{notrad}",
    "plainObject": {
      "key": "value: #{val}",
      "array": [1, 2, {"third": "#{three}" }]
      }
    }
  }

```

#### install the plugin in your app.js
``` js
import Vue from 'vue'

import wordingPlugin from 'vue-wording'
import wording from './wording.json'

Vue.use(wordingPlugin, {lang: 'fr', wording})

new Vue({
  // ...
})
```
#### Use the plugin in your vue components
``` html
<template>
  <div>
    {{ $t('complicated', {nb: 3, things: 'bananas', feeling: 'cool'}) }}
  </div>
</template>
```

``` html
<script>
  export default {
    data () {
      return {
        simple: this.$t('simple')
      }
    }
  }
</script>
```
