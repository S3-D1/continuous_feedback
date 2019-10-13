<template>
    <span>
        <b-checkbox v-model="noFeedback"></b-checkbox>
        <b-slider :max="10" :min="1" v-model="feedback" ticks :disabled="noFeedback"/>
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
    computed: {
      noFeedback: {
        get: function () {
          return this.$props.value == -1;
        },
        set: function (newValue) {
          if(newValue){
            this.$props.value = -1;
            this.recolorize()
          }else{
            this.$props.value = 0;
            this.recolorize()
          }
        }
      },
      feedback: {
        get: function () {
          if (this.$props.value > 0) {
            return this.$props.value;
          }else if (this.$props.value==0){
            return 6;
          }
          return null;
        },
        set: function (newValue) {
          this.$props.value = newValue;
          this.recolorize()
        }
      }
    },
    methods: {
      recolorize: function () {
        return "";
      }
    }
  }
</script>

<style scoped>

</style>
