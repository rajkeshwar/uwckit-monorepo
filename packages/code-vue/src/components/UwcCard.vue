<script setup lang="ts">
import '@uwckit/code-core';

withDefaults(
  defineProps<{
    hoverable?: boolean;
  }>(),
  { hoverable: false }
);
</script>

<template>
  <uwc-card :hoverable="hoverable || undefined">
    <slot name="header" slot="header" />
    <slot />
    <slot name="footer" slot="footer" />
  </uwc-card>
</template>