<template lang="html">
  <div class="gallery">
    <div class="is-gallery-container" v-for="(path, i) in paths" v-if="i === counter" :key="'path'">
      <div class="is-gallery-image" :style="{backgroundImage: 'url('+ path.src + ')'}">
      </div>
      <span class="is-gallery-title">{{ path.name }}</span>
    </div>
    <div class="is-gallery-counter" v-if="hasCounter">
      <span :class="{'is-active': counter === i}" v-for="(n, i) in index" @click="counter = i"></span>
    </div>
    <div class="is-gallery-arrows no-select" v-if="arrows">
      <span @click="moveLeft">‹</span>
      <span @click="moveRight">›</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    arrows: {
      default: true,
      type: Boolean
    },
    hasCounter: {
      default: true,
      type: Boolean
    }
  },
  data () {
    return {
      paths: [
        { src: '../static/solar.jpg', name: 'Eclipse' },
        { src: '../static/gems.jpg', name: 'Gems' }
      ],
      counter: 0,
      index: null
    }
  },
  methods: {
    moveRight () {
      this.counter = this.counter === this.paths.length - 1 ? 0 : this.counter + 1
    },
    moveLeft () {
      this.counter = this.counter === 0 ? this.paths.length - 1 : this.counter - 1
    }
  },
  computed: {
    totalImages () {
      return this.paths.length
    }
  },
  created () {
    this.index = this.paths.length

    if (this.arrows === false && this.hasCounter === false) {
      console.log('Warning: Gallery should either have arrows or a counter')
    }
  }
}
</script>
