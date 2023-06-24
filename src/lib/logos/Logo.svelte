<script>
  export let area = "",
      theme = 'dark';

  let classes = '';

  theme = theme === 'dark' ? 'fill-white' : 'fill-black';

  $: switch (area) {
    case 'org':
      classes = 'duration-200 fill-blue-700';
      break;

    case 'labs':
      classes = 'duration-200 fill-emerald-500';
      break;

    case 'dev':
      classes = 'duration-200 fill-red-800';
      break;

    case 'design':
      classes = 'duration-200 fill-amber-500';
      break;

    case 'space':
      classes = 'duration-200 fill-violet-700';
      break;

    default:
      classes = 'duration-200 ';
      break;
  }
</script>

<svg viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_538_1745)">
    <path d="M128 128.004H0V256.004H128V128.004Z" class={theme}/>
    <path
        d="M256 383.994C194.89 384.392 128.546 322.329 128 255.999H0C0.9216 398.204 124.973 513.183 256 511.989V383.994Z"
        class={classes} fill="url(#paint0_linear_538_1745)"/>
    <path
        d="M256 0.00922535H128V255.999H256V128.004C317.11 127.606 383.454 189.669 384 255.999V512H512V255.999C511.078 113.794 387.026 -1.18539 256 0.00922535Z"
        class={classes} fill="url(#paint1_linear_538_1745)"/>
  </g>
  <defs>
    <linearGradient id="paint0_linear_538_1745" x1="128" y1="255.999" x2="128" y2="511.998"
                    gradientUnits="userSpaceOnUse">
      <stop stop-color="#10B981"/>
      <stop offset="0.661458" stop-color="#1D4ED8"/>
      <stop offset="1" stop-color="#6D28D9"/>
    </linearGradient>
    <linearGradient id="paint1_linear_538_1745" x1="320" y1="0" x2="320" y2="512" gradientUnits="userSpaceOnUse">
      <stop stop-color="#F59E0B"/>
      <stop offset="1" stop-color="#991B1B"/>
    </linearGradient>
  </defs>
</svg>
