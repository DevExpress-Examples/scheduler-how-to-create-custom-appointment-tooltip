<template #AppointmentInfo="{ data }">
  <div class='tooltip'>
    <div class='marker' :style="getMarkerStyle(color)"/>
    <div>
      <p>{{ data.text }}</p>
      <p>{{ `${data.startDate} - ${data.endDate}` }}</p>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.data.colorDef.done((color) => this.color = color);
  },
  props: {
    data: {
      type: Object,
      default: () => {},
    }
  },
  data() {
    return {
      color: '',
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