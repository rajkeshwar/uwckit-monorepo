<script setup lang="ts">
import { ref } from 'vue';
import { UwcButtonVue, UwcBadgeVue, UwcCardVue, UwcInputVue } from '../index';

const isLoading = ref(false);
const lastClicked = ref('');
const username = ref('');

function toggleLoading() {
  isLoading.value = true;
  setTimeout(() => (isLoading.value = false), 2000);
}
</script>

<template>
  <div class="container">
    <h1>🟢 @uwckit/code-vue</h1>
    <p class="subtitle">Vue 3 wrappers for UWCKit Lit components</p>

    <section>
      <h2>Buttons</h2>
      <div class="row">
        <UwcButtonVue variant="primary" @click="lastClicked = 'primary'">Primary</UwcButtonVue>
        <UwcButtonVue variant="secondary" @click="lastClicked = 'secondary'">Secondary</UwcButtonVue>
        <UwcButtonVue variant="danger" @click="lastClicked = 'danger'">Danger</UwcButtonVue>
        <UwcButtonVue variant="ghost" @click="lastClicked = 'ghost'">Ghost</UwcButtonVue>
      </div>
      <div class="row">
        <UwcButtonVue :loading="isLoading" @click="toggleLoading">
          {{ isLoading ? 'Loading...' : 'Click to Load' }}
        </UwcButtonVue>
        <UwcButtonVue disabled>Disabled</UwcButtonVue>
      </div>
      <p v-if="lastClicked" class="event-log">Last clicked: {{ lastClicked }}</p>
    </section>

    <section>
      <h2>Badges</h2>
      <div class="row">
        <UwcBadgeVue variant="default">Default</UwcBadgeVue>
        <UwcBadgeVue variant="success" dot>Success</UwcBadgeVue>
        <UwcBadgeVue variant="warning" dot>Warning</UwcBadgeVue>
        <UwcBadgeVue variant="error" dot>Error</UwcBadgeVue>
        <UwcBadgeVue variant="info" dot>Info</UwcBadgeVue>
      </div>
    </section>

    <section>
      <h2>Cards</h2>
      <div class="grid">
       <UwcCardVue hoverable>
         <span slot="header">Vue Card</span>
         Card body managed by Vue 3. Uses Composition API under the hood.
         <div slot="footer">
           <UwcButtonVue size="sm">Footer Action</UwcButtonVue>
         </div>
       </UwcCardVue>
       <UwcCardVue>
         <span slot="header">Status Card</span>
         <UwcBadgeVue variant="success" dot>Active</UwcBadgeVue>
         <p style="margin-top:0.5rem">All systems operational.</p>
       </UwcCardVue>
      </div>
    </section>

    <section>
      <h2>Input (with v-model)</h2>
      <div class="form">
        <UwcInputVue
          v-model="username"
          label="Username"
          placeholder="Enter username"
          hint="Uses v-model with custom events"
          name="username"
        />
        <p>Value: <strong>{{ username }}</strong></p>
      </div>
    </section>
  </div>
</template>

<style>
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: 'Segoe UI', system-ui, sans-serif; background: #f8fafc; color: #0f172a; }
.container { max-width: 900px; margin: 0 auto; padding: 2rem; }
h1 { font-size: 2rem; font-weight: 700; margin-bottom: 0.5rem; }
.subtitle { color: #64748b; margin-bottom: 3rem; }
section { margin-bottom: 3rem; }
h2 { font-size: 1.25rem; font-weight: 600; margin-bottom: 1.25rem; padding-bottom: 0.5rem; border-bottom: 1px solid #e2e8f0; }
.row { display: flex; flex-wrap: wrap; gap: 0.75rem; align-items: center; margin-bottom: 1rem; }
.grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1rem; }
.form { max-width: 400px; display: flex; flex-direction: column; gap: 1rem; }
.event-log { font-size: 0.875rem; color: #16a34a; padding: 0.5rem 0.75rem; background: #dcfce7; border-radius: 0.375rem; display: inline-block; }
</style>
