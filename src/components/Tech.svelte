<script lang="ts">
  import { Area } from '../lib/enums/Area';
  import type { IComponent } from '../lib/interfaces/IComponent';
  import { Theme } from '../lib/enums/Theme';

  import Circle from './svg/Circle.svelte';
  import CircleCurrent from './svg/CircleCurrent.svelte';

  export interface ITech extends IComponent {
    area: Area;
    label?: string;
    techIcon: string;
    techName: string;
    techLevel: number;
  }

  export let label: string = '';
  export let classes: string = '';
  export let area: Area;
  export let theme: Theme;
  export let techIcon: string;
  export let techName: string;
  export let maxLevel: number = 0;
  export let techLevel: number = 0;
  export let techType: string = '';

  let classNames: string[];

  $: classNames.push(
    'row-start-1',
    'row-end-2',
    'col-start-2',
    'col-end-3',
    'flex',
    'items-start',
    'justify-center'
  );

  $: {
    classNames = classes?.split(' ') ?? [];

    switch (theme) {
      case Theme.Dark:
        classNames.push('text-neutral-50');
        break;

      case Theme.Light:
        classNames.push('text-neutral-800');
        break;
    }
  }
  $: classNames = classNames;
</script>

<section class="flex gap-x-4">
  <img class="h-24" src={techIcon} alt="icon" />
  <section class="flex flex-col justify-around">
    <h1 class={classNames.join(' ')}>{techName}</h1>
    <section class="flex justify-center">
      <section class="flex flex-row gap-x-1">
        {#each { length: maxLevel } as _, i}
          {#if i + 1 < techLevel}
            <Circle {area} />
          {:else if i + 1 == techLevel}
            <CircleCurrent {area} />
          {:else}
            <Circle />
          {/if}
        {/each}
      </section>
    </section>
  </section>
</section>
