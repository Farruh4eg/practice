<script>
  export let label,
      name,
      type;
</script>

<label class="space-y-2 max-w-96 block">
  <span class="block">{label}</span>
  <input {type} {name} class="text-neutral-900 dark:text-neutral-50 bg-neutral-100 dark:bg-neutral-900 px-3 py-1.5 border border-neutral-200 dark:border-neutral-700 rounded w-full">
</label>