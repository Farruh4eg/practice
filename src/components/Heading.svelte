<script lang="ts">
  import type { IComponent } from '../lib/interfaces/IComponent';
  import type { Theme } from '../lib/enums/Theme';
  import { LayerType } from '../lib/enums/LayerType';

  import Layer from './Layer.svelte';

  export interface IHeading extends IComponent {
    theme: Theme;
    label?: string;
  }

  export let classes: string = '';
  export let label: string = '';
  export let theme: Theme;

  let classNames: string[];

  $: classNames.push();

  $: classNames = classes?.split(' ') ?? [];

  $: classNames = classNames;
</script>

<Layer {theme} type={LayerType.H1}>
  <slot>{label}</slot>
</Layer>
