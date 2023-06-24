<script lang="ts">
  import { Area } from '../../lib/enums/Area';
  import Circle from './Circle.svelte';

  export let area: Area,
    classes: string = '';

  let classNames: string[];

  $: classNames.push('h-2.5', 'w-2.5', 'absolute');

  $: {
    classNames = classes?.split(' ') ?? [];

    switch (area) {
      case Area.ORG:
        classNames.push('fill-blue-700');
        break;

      case Area.LABS:
        classNames.push('fill-emerald-500');
        break;

      case Area.DEV:
        classNames.push('fill-red-800');
        break;

      case Area.DESIGN:
        classNames.push('fill-amber-500');
        break;

      case Area.SPACE:
        classNames.push('fill-violet-700');
        break;
      default:
        classNames.push('fill-neutral-700');
        break;
    }
  }

  $: classNames = classNames;
</script>

<section class="relative h-4 w-4 flex items-center justify-center">
  <Circle classes="relative" />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.0"
    class={classNames.join(' ')}
  >
    <circle cx="5" cy="5" r="4" />
  </svg>
</section>
