<!-- default badges list -->
![](https://img.shields.io/endpoint?url=https://codecentral.devexpress.com/api/v1/VersionRange/535629266/22.1.5%2B)
[![](https://img.shields.io/badge/Open_in_DevExpress_Support_Center-FF7200?style=flat-square&logo=DevExpress&logoColor=white)](https://supportcenter.devexpress.com/ticket/details/T1115001)
[![](https://img.shields.io/badge/📖_How_to_use_DevExpress_Examples-e9f6fc?style=flat-square)](https://docs.devexpress.com/GeneralInformation/403183)
<!-- default badges end -->

# Scheduler for DevExtreme - How to display appointment information outside of Scheduler

This example demonstrates how to display appointment information in the List component instead of a tooltip:

![Scheduler displays appointments in the List](https://user-images.githubusercontent.com/54763823/190431173-77cdb221-6c89-4f06-ae42-437581926178.gif)

You can use this approach to display appointment data not only in List but in other DevExtreme components as well. In the [onAppointmentTooltipShowing](https://js.devexpress.com/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#onAppointmentTooltipShowing) event handler, prevent the tooltip from showing. Then, collect the appointment data and use it as a data source for the List.

## Files to Review

- **jQuery**
    - [index.js](jQuery/src/index.js)
- **Angular**
    - [app.component.html](Angular/src/app/app.component.html)
    - [app.component.ts](Angular/src/app/app.component.ts)
- **Vue**
    - [App.vue](Vue/src/App.vue)
- **React**
    - [App.jsx](React/src/App.jsx)

## Documentation

- [API Reference - onAppointmentTooltipShowing](https://js.devexpress.com/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#onAppointmentTooltipShowing)
- [Getting Started with Scheduler](https://js.devexpress.com/Documentation/Guide/UI_Components/Scheduler/Getting_Started_with_Scheduler/)
- [Getting Started with List](https://js.devexpress.com/Documentation/Guide/UI_Components/List/Getting_Started_with_List/)

## More Examples

- [Scheduler for DevExtreme - How to implement the appointment layout with the appointment template](https://github.com/DevExpress-Examples/devextreme-scheduler-appointment-template)
- [Scheduler for DevExtreme - How to create a custom editing form](https://github.com/DevExpress-Examples/devextreme-scheduler-create-custom-editing-form)
