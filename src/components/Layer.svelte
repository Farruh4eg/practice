<script lang="ts">
  import type { IComponent } from '../lib/interfaces/IComponent';
  import type { Area } from '../lib/enums/Area';
  import { Theme } from '../lib/enums/Theme';
  import { LayerType } from '../lib/enums/LayerType';

  export interface ILayer extends IComponent {
    area?: Area;
    label?: string;
    type: LayerType;
  }

  export let classes: string = '',
    label: string = '',
    theme: Theme,
    type: LayerType;

  let classNames: string[];

  $: classNames.push('font-jetbrains', 'relative');

  $: {
    classNames = classes?.split(' ') ?? [];

    switch (theme) {
      case Theme.Dark:
        classNames.push(
          'bg-neutral-800/50',
          'border',
          'border-neutral-800',
          'text-white'
        );
        break;

      case Theme.Light:
        classNames.push(
          'bg-neutral-100/50',
          'border',
          'border-neutral-100',
          'text-neutral-800'
        );
        break;
    }

    switch (type) {
      case LayerType.H1:
        classNames.push(
          'rounded-2xl',
          'p-2',
          'text-4xl',
          'font-bold',
          'font-jetbrains',
          'text-center',
          'w-80'
        );
        break;

      case LayerType.Section:
        classNames.push(
          'rounded-xl',
          'py-6',
          'px-4',
          'flex',
          'justify-center',
          'flex-wrap',
          'gap-10',
          'w-full',
          'left-10',
          '-top-4',
          'shadow-[0_4px_4px_rgba(0,0,0,0.25)]'
        );
    }
  }

  $: classNames = classNames;
</script>

{#if type == LayerType.Article}
  <article class={classNames.join(' ')}>
    <slot>{label}</slot>
  </article>
{/if}
{#if type == LayerType.Div}
  <div class={classNames.join(' ')}>
    <slot>{label}</slot>
  </div>
{/if}
{#if type == LayerType.H1}
  <h1 class={classNames.join(' ')}>
    <slot>{label}</slot>
  </h1>
{/if}
{#if type == LayerType.H2}
  <h2 class={classNames.join(' ')}>
    <slot>{label}</slot>
  </h2>
{/if}
{#if type == LayerType.H3}
  <h3 class={classNames.join(' ')}>
    <slot>{label}</slot>
  </h3>
{/if}
{#if type == LayerType.H4}
  <h4 class={classNames.join(' ')}>
    <slot>{label}</slot>
  </h4>
{/if}
{#if type == LayerType.H5}
  <h5 class={classNames.join(' ')}>
    <slot>{label}</slot>
  </h5>
{/if}
{#if type == LayerType.H6}
  <h6 class={classNames.join(' ')}>
    <slot>{label}</slot>
  </h6>
{/if}
{#if type == LayerType.P}
  <p class={classNames.join(' ')}>
    <slot>{label}</slot>
  </p>
{/if}
{#if type == LayerType.Section}
  <section class={classNames.join(' ')}>
    <slot>{label}</slot>
  </section>
{/if}
