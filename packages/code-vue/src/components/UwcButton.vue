<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import type { ButtonVariant, ButtonSize } from '@uwckit/code-core';
import '@uwckit/code-core';

const props = withDefaults(
  defineProps<{
    variant?: ButtonVariant;
    size?: ButtonSize;
    disabled?: boolean;
    loading?: boolean;
    type?: 'button' | 'submit' | 'reset';
  }>(),
  {
    variant: 'primary',
    size: 'md',
    disabled: false,
    loading: false,
    type: 'button',
  }
);

const emit = defineEmits<{
  (e: 'click', event: Event): void;
}>();

function handleClick(event: Event) {
  emit('click', event);
}
</script>

<template>
  <uwc-button
    :variant="props.variant"
    :size="props.size"
    :disabled="props.disabled || undefined"
    :loading="props.loading || undefined"
    :type="props.type"
    @uwc-click="handleClick"
  >
    <slot />
  </uwc-button>
</template>
