<template>
  <div class="container">
    <DxList
        width='33%'
        :data-source="tooltipItems"
        item-template="AppointmentInfo"
    >
      <template #AppointmentInfo="{data: tooltipItems}">
        <AppointmentInfo :data="tooltipItems"/>
      </template>
    </DxList>
    <DxScheduler
        current-view="week"
        width='66%'
        :data-source="dataSource"
        :current-date="currentDate"
        :resources="resources"
        :height="600"
        :start-day-hour="15"
        :end-day-hour="20"
        :on-appointment-tooltip-showing="appointmentTooltipShowingHandler"
    >
    </DxScheduler>
  </div>
</template>

<script>
import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.material.blue.light.compact.css";
import {DxScheduler} from "devextreme-vue/scheduler";
import {DxList} from 'devextreme-vue/list';
import {data, resources} from "./data.js";
import Utils from "./utils.js";
import './style.css';
import AppointmentInfo from '@/components/AppointmentInfo';

export default {
  name: "App",
  components: {
    AppointmentInfo,
    DxScheduler,
    DxList,
  },
  data() {
    return {
      currentDate: new Date(2021, 5, 2),
      dataSource: data,
      resources: resources,
      tooltipItems: [],
    };
  },
  methods: {
    appointmentTooltipShowingHandler: function (e) {
      e.cancel = true;
      const {appointments} = e;
      const colors = {};
      const res = appointments.map((item, index) => {
        item.color.done((color) => colors[index] = color);
        return {
          id: index,
          text: item.appointmentData.text,
          startDate: Utils.formatDate(item.appointmentData.startDate),
          endDate: Utils.formatDate(item.appointmentData.endDate),
        }
      });
      res.forEach((item) => item.color = colors[item.id]);
      this.tooltipItems = res;
    },
  }
};
</script>
