<template>
    <span :class="twMerge('text-lg font-medium', color)">{{ title }}</span> 
 </template>
 
 <script setup lang="ts">
 import { twMerge } from 'tailwind-merge';

 defineProps({
     title: {
         type: String,
         default: ''
     },
     color: {
        type: String,
        default: 'text-blueberry-800'
     }
 })
 </script>