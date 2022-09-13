<template #AppointmentInfo="{ data }">
  <div class='tooltip'>
    <div class='marker' :style="getMarkerStyle(data.color)"/>
    <div>
      <p>{{ data.text }}</p>
      <p>{{ `${data.startDate} - ${data.endDate}` }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => {},
    }
  },
  methods: {
    getMarkerStyle(color) {
      return `background: ${color}`;
    }
  }
}
</script>

<style scoped>

</style>