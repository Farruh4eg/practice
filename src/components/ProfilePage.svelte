<script>
  import { onMount } from 'svelte';

  let data = null;

  onMount(async () => {
    const res = await fetch('http://localhost:3000/profile', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('auth_token')}`
      }
    });

    data = await res.json();
  });
</script>

<main class="font-mono flex justify-center items-center min-h-screen text-neutral-900 dark:text-neutral-50 bg-neutral-100 dark:bg-neutral-900">
    {#if data}
        <article
                class="bg-neutral-800 border border-neutral-700 shadow-md py-6 px-8 rounded-3xl max-w-screen-sm w-full">
            <h1>Hello, {data.firstName} {data.lastName}</h1>
            <p>{data.username}</p>
            <p>{data.email}</p>
            <time>{data.birthday}</time>
        </article>
    {:else}
        <article
                class="bg-neutral-800 border border-neutral-700 shadow-md py-6 px-8 rounded-3xl max-w-screen-sm w-full">
            <h1>
                <span class="select-none bg-neutral-400 text-transparent animate-pulse rounded-full">Hello,</span>
                <span class="select-none bg-neutral-400 text-transparent animate-pulse rounded-full">First Name</span>
                <span class="select-none bg-neutral-400 text-transparent animate-pulse rounded-full">Last Name</span>
            </h1>
            <p>
                <span class="select-none bg-neutral-400 text-transparent animate-pulse rounded-full">username</span>
            </p>
            <p>
                <span class="select-none bg-neutral-400 text-transparent animate-pulse rounded-full">username@example.com</span>
            </p>
            <time class="select-none bg-neutral-400 text-transparent animate-pulse rounded-full">00.00.0000</time>
        </article>
    {/if}
</main>