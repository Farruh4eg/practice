<script lang="ts">
  import type { IComponent } from '../lib/interfaces/IComponent';
  import type { Area } from '../lib/enums/Area';
  import type { Theme } from '../lib/enums/Theme';
  import { CubeSize } from '../lib/enums/CubeSize';

  import Heading from './Heading.svelte';
  import Skills from './Skills.svelte';
  import Cube from './Cube.svelte';

  export interface IStack extends IComponent {
    area: Area;
    label?: string;
  }

  export let classes: string = '',
    theme: Theme,
    area: Area;

  let classNames: string[];

  let technologies = [
    {
      user: 'Test',
      name: 'Python',
      img: 'https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/files/python-logo-only.svg',
      level: 3,
      maxLevel: 4,
      type: 'Tech',
    },
    {
      user: 'Test',
      name: 'TypeScript',
      img: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg',
      level: 2,
      maxLevel: 4,
      type: 'Tech',
    },
    {
      user: 'Test',
      name: 'VS Code',
      img: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg',
      level: 4,
      maxLevel: 4,
      type: 'Tech',
    },
    {
      user: 'Test',
      name: 'Svelte',
      img: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg',
      level: 2,
      maxLevel: 4,
      type: 'Tech',
    },
    {
      user: 'Test',
      name: 'React',
      img: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
      level: 2,
      maxLevel: 4,
      type: 'Tech',
    },
    {
      user: 'Test',
      name: 'Google',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/588px-Google_%22G%22_Logo.svg.png?20230305195327',
      level: 4,
      maxLevel: 4,
      type: 'Tech',
    },
    {
      user: 'Test',
      name: 'Steam',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/512px-Steam_icon_logo.svg.png',
      level: 4,
      maxLevel: 4,
      type: 'Tech',
    },
    {
      user: 'Test',
      name: 'Vue.js',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/512px-Vue.js_Logo_2.svg.png?20170919082558',
      level: 1,
      maxLevel: 4,
      type: 'Tech',
    },
  ];

  $: classNames.push();

  $: classNames = classes?.split(' ') ?? [];

  $: classNames = classNames;
</script>

<section class={classNames.join(' ')}>
  <section class="relative">
    <div class="absolute -left-16 top-5">
      <section class="inline-grid grid-rows-3 grid-cols-4">
        <section class="flex justify-end -mr-8">
          <Cube {area} cubeSize={CubeSize.Small} />
        </section>
        <section class="flex justify-center items-end">
          <Cube {area} cubeSize={CubeSize.Medium} />
        </section>
        <section class="flex justify-start items-center">
          <Cube {area} cubeSize={CubeSize.Medium} />
        </section>
        <section
          class="flex justify-center items-end row-start-2 row-end-3 col-start-3 col-end-4"
        >
          <Cube {area} cubeSize={CubeSize.Large} />
        </section>
      </section>
    </div>
    <section class="p-20">
      <Heading {theme}>Основной стек</Heading>
      <Skills {theme} {technologies} {area}>Тест</Skills>
    </section>
    <div class="absolute -right-8 bottom-16">
      <section class="inline-grid grid-rows-2 grid-cols-3">
        <section
          class="flex justify-center -ml-3 items-center col-start-2 col-end-3"
        >
          <Cube {area} cubeSize={CubeSize.ExtraSmall} />
        </section>
        <section class="flex justify-center items-start row-start-2 row-end-3">
          <Cube {area} cubeSize={CubeSize.Small} />
        </section>
        <section class="flex justify-start items-start row-start-2 row-end-3">
          <Cube {area} cubeSize={CubeSize.Medium} />
        </section>
      </section>
    </div>
  </section>
</section>
