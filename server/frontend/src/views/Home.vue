<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div>
      <b-button variant="primary">Primary</b-button>
      <b-button variant="secondary">Secondary</b-button>
      <b-button variant="success">Success</b-button>
      <b-button variant="danger">Danger</b-button>
      <b-button variant="warning">Warning</b-button>
      <b-button variant="info">Info</b-button>
      <b-button variant="light">Light</b-button>
      <b-button variant="dark">Dark</b-button>
    </div>
    <div class="text-center">
      <b-spinner variant="primary" label="Spinning"></b-spinner>
    </div>
    <div>
      <b-button variant="primary" disabled>
        <b-spinner small  label="Spinning" variant="light"></b-spinner>
        Loading...
      </b-button>
    </div>
    <div style="font-size: 2rem">
      <b-avatar badge="BV"></b-avatar>
      <b-avatar badge="7" variant="primary" badge-variant="dark"></b-avatar>
      <b-avatar badge-variant="info" src="https://placekitten.com/300/300">
        <template v-slot:badge><b-icon icon="star-fill"></b-icon></template>
      </b-avatar>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
