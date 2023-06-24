<script>
  export let area = "";

  let shadow,
      color;

  $: switch (area) {
    case "org":
      shadow = "duration-100 hover:shadow-[0_0_25px_0] hover:shadow-blue-700"
      color = "duration-200 fill-blue-700";
      break;

    case "labs":
      shadow = "duration-100 hover:shadow-[0_0_25px_0] hover:shadow-emerald-500"
      color = "duration-200 fill-emerald-500";
      break;

    case "dev":
      shadow = "duration-100 hover:shadow-[0_0_25px_0] hover:shadow-red-800"
      color = "duration-200 fill-red-800";
      break;

    case "design":
      shadow = "duration-100 hover:shadow-[0_0_25px_0] hover:shadow-amber-500"
      color = "duration-200 fill-amber-500";
      break;

    case "space":
      shadow = "duration-100 hover:shadow-[0_0_25px_0] hover:shadow-violet-700"
      color = "duration-200 fill-violet-700";
      break;

    default:
      shadow = "duration-100 hover:shadow-[0_0_25px_0] hover:shadow-white"
      color = "duration-200 fill-white";
      break;
  }
</script>
<svg class={shadow} viewBox="0 0 32 30" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M32 0H0V30H32V0Z" class={color}/>
</svg>
