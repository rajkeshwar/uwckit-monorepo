import type { App } from 'vue';
import UwcButtonVue from './components/UwcButton.vue';
import UwcBadgeVue from './components/UwcBadge.vue';
import UwcCardVue from './components/UwcCard.vue';
import UwcInputVue from './components/UwcInput.vue';

export { UwcButtonVue, UwcBadgeVue, UwcCardVue, UwcInputVue };

// Re-export core types
export type { ButtonVariant, ButtonSize, BadgeVariant } from '@uwckit/code-core';

// Vue plugin for global registration
export const UwckitVuePlugin = {
  install(app: App) {
    app.component('UwcButton', UwcButtonVue);
    app.component('UwcBadge', UwcBadgeVue);
    app.component('UwcCard', UwcCardVue);
    app.component('UwcInput', UwcInputVue);
  },
};

export default UwckitVuePlugin;
