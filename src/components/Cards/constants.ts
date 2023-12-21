import { Component } from "vue";

export type MiniCard =
  {
    variation: string;
    color: string;
    value: string;
    unit: string;
    label: string;
    component?: Component;
    componentProps: Object;
    popoverStyle: { height: string, width: string };
    popoverConfig: {title: string}
  };

export type CardStyle =
  {
    containerStyle: string;
    cardStyle: string;
    valueStyle: string;
    unitStyle: string;
    labelStyle: string;
    iconStyle: string
  }