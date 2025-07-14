<script lang="ts">
  import { goto } from "$app/navigation";
  import { userState } from "$lib/state.svelte";

  let { email, password } = $state({
    email: "",
    password: "",
  });

  const login = async () => {
    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }

    userState.email = email;
    userState.password = password;

    await goto("/state/content");
  };
</script>

<div class="flex flex-col items-center justify-center h-full gap-4">
  <input
    bind:value={email}
    class="w-50 h-10 rounded-md border border-gray-300 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
    type="email"
    placeholder="Email"
  />
  <input
    bind:value={password}
    class="w-50 h-10 rounded-md border border-gray-300 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
    type="password"
    placeholder="Password"
  />
  <button
    class="w-50 h-10 cursor-pointer rounded-md bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
    onclick={login}
  >
    Log in
  </button>
</div>
