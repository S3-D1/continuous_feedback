<template>
    <div>
        <p> TODO: SingleUserFeedbackCard ggf multiitemcarousel</p>
        <FeedbackSlider :value="-1"/>
        <FeedbackSlider :value="0"/>
        <FeedbackSlider :value="8"/>
    </div>
</template>

<script>
import FeedbackSlider from "@/components/FeedbackSlider";
  export default {
    name: "SingleUserFeedback",
    components: {FeedbackSlider},
    data() {
      return {

      }
    },
  }
</script>

<style scoped>

</style>
