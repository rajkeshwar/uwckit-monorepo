<script setup lang="ts">
import '@uwckit/code-core';

const props = withDefaults(
  defineProps<{
    modelValue?: string;
    label?: string;
    placeholder?: string;
    type?: string;
    hint?: string;
    error?: string;
    disabled?: boolean;
    required?: boolean;
    name?: string;
  }>(),
  {
    modelValue: '',
    label: '',
    placeholder: '',
    type: 'text',
    hint: '',
    error: '',
    disabled: false,
    required: false,
    name: '',
  }
);

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
  (e: 'change', value: string): void;
}>();

function onInput(e: Event) {
  const detail = (e as CustomEvent).detail;
  emit('update:modelValue', detail?.value ?? '');
}

function onChange(e: Event) {
  const detail = (e as CustomEvent).detail;
  emit('change', detail?.value ?? '');
}
</script>

<template>
  <uwc-input
    :label="label || undefined"
    :value="modelValue"
    :placeholder="placeholder || undefined"
    :type="type"
    :hint="hint || undefined"
    :error="error || undefined"
    :disabled="disabled || undefined"
    :required="required || undefined"
    :name="name || undefined"
    @uwc-input="onInput"
    @uwc-change="onChange"
  />
</template>
