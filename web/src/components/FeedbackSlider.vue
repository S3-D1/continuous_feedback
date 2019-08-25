<template>
    <span>
        <b-slider :max="10" :min="1" :value="value" ticks @change="recolorize"/>
        <b-checkbox></b-checkbox>
    </span>
</template>

<script>
  export default {
    name: "FeedbackSlider",
    props: {
      value: {
        type: Number,
        default: 6,
      },
    },
    methods: {
      recolorize: function () {

      }
    }
  }
</script>

<style scoped>

</style>
