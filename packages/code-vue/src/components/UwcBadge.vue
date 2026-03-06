<script setup lang="ts">
import type { BadgeVariant } from '@uwckit/code-core';
import '@uwckit/code-core';

withDefaults(
  defineProps<{
    variant?: BadgeVariant;
    dot?: boolean;
  }>(),
  {
    variant: 'default',
    dot: false,
  }
);
</script>

<template>
  <uwc-badge :variant="variant" :dot="dot || undefined">
    <slot />
  </uwc-badge>
</template>
