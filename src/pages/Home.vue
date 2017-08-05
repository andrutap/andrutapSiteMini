<template>
  <div class="box is-fluid">
    <section class="box is-fluid is-fullscreen">
      <div class="row is-reverse-mobile">
        <div class="tile">
          <nav class="navbar element is-centered _relative">
            <div class="is-navbar-menu">
              <span class="item">Lab</span>
            </div>
          </nav>
        </div>
        <div class="tile">
          <h1 class="text is-huge">Hola<span class="text is-orange">.</span></h1>
          <div class="row text is-big is-regular">
            <div class="tile">
              <h3 v-for="item in whatIDo" :key="'item'" class="no-margin elevation _top element is-relative">{{ item }}</h3>
              <span class="text is-huge is-light-special ampersand no-select is-orange"><i>&</i></span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="box is-fluid is-fullscreen">
      <gallery :arrows="true" :hasCounter="false"></gallery>
    </section>
  </div>
</template>

<script>
  import gallery from '@/components/gallery'
  export default {
    data () {
      return {
        whatIDo: ['Diseño', 'Escribo código']
      }
    },
    components: {
      gallery
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
