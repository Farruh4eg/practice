<script>
  import LabeledInput from './lib/LabeledInput.svelte';
  import Logo from './lib/logos/Logo.svelte';

  async function handleSubmit(event) {
    const formData = new FormData(event.target),
        data = {};

    for (let field of formData) {
      const [key, value] = field;
      data[key] = value;
    }

    const res = await fetch('http://localhost:3000/auth/login', {
      method: 'post',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const result = await res.json();

    localStorage.setItem('auth_token', result.access_token);

    window.location.href = '/profile';
  }
</script>

<main
    class="font-mono flex justify-center items-center min-h-screen text-neutral-900 dark:text-neutral-50 bg-neutral-100 dark:bg-neutral-900">
  <section
      class="absolute top-[20rem] right-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-amber-500 rounded-full blur-3xl"></section>
  <section class="absolute top-[20rem] right-1/2 w-48 h-48 bg-red-700 rounded-full blur-3xl"></section>
  <form
      on:submit|preventDefault={handleSubmit}
      class="bg-white/70 dark:bg-neutral-800/70 shadow-md border border-neutral-200 dark:border-neutral-700 backdrop-blur-lg rounded-3xl overflow-hidden px-32 py-24 grid gap-16 max-w-screen-sm w-full">
    <section class="w-16 justify-self-center">
      <Logo area="org" theme="light"/>
    </section>
    <section class="space-y-4">
      <LabeledInput label="Логин" name="username" type="text"/>
      <LabeledInput label="Пароль" name="password" type="password"/>
    </section>
    <button class="text-neutral-50 bg-black py-2 px-12 text-2xl rounded justify-self-center">Войти</button>
  </form>
</main>