<script lang="ts">
  import type { IComponent } from '../lib/interfaces/IComponent';
  import { Area } from '../lib/enums/Area';
  import { CubeSize } from '../lib/enums/CubeSize';

  export interface ICube extends IComponent {
    area: Area;
    cubeSize: CubeSize;
    label?: string;
  }

  export let classes: string = '',
    label: string = '',
    area: Area,
    cubeSize: CubeSize;

  let classNames: string[];

  $: classNames.push('rounded');

  $: {
    classNames = classes?.split(' ') ?? [];

    switch (cubeSize) {
      case CubeSize.ExtraSmall:
        classNames.push('w-3', 'h-3');
        break;
      case CubeSize.Small:
        classNames.push('w-6', 'h-6');
        break;
      case CubeSize.Medium:
        classNames.push('w-11', 'h-11');
        break;
      case CubeSize.Large:
        classNames.push('w-20', 'h-20');
        break;
    }

    switch (area) {
      case Area.ORG:
        classNames.push('bg-blue-700');
        break;

      case Area.DEV:
        classNames.push('bg-red-800');
        break;

      case Area.LABS:
        classNames.push('bg-emerald-500');
        break;

      case Area.DESIGN:
        classNames.push('bg-amber-500');
        break;

      case Area.SPACE:
        classNames.push('bg-violet-700');
        break;
    }
  }

  $: classNames = classNames;
</script>

<section class={classNames.join(' ')}>
  <slot>{label}</slot>
</section>
