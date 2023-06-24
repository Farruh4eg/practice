<script lang="ts">
  import type { IComponent } from '../lib/interfaces/IComponent';
  import type { Theme } from '../lib/enums/Theme';
  import { LayerType } from '../lib/enums/LayerType';
  import type { Area } from '../lib/enums/Area';
  import Layer from './Layer.svelte';
  import Tech from './Tech.svelte';

  export interface ISkills extends IComponent {
    area: Area;
    label?: string;
  }

  interface ITechnologyObject {
    user: string;
    name: string;
    img: string;
    level: number;
    maxLevel: number;
    techType: string;
  }

  export let classes: string = '';
  export let label: string = '';
  export let theme: Theme;
  export let technologies: ITechnologyObject[];
  export let area: Area;

  let classNames: string[];

  $: classNames.push();

  $: classNames = classes?.split(' ') ?? [];

  $: classNames = classNames;
</script>

<Layer {theme} type={LayerType.Section}>
  <section class="w-full flex flex-row gap-10 flex-wrap justify-center">
    {#each technologies as tech}
      <Tech
        techIcon={tech.img}
        techName={tech.name}
        techLevel={tech.level}
        maxLevel={tech.maxLevel}
        techType={tech.techType}
        {theme}
        {area}
      />
    {/each}
  </section>
</Layer>
