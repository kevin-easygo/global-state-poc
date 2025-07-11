<script lang="ts">
  import state from "../lib/state.js";

  const b = state.get();
</script>

{#if b}
  <h2>{$b}</h2>
  <button on:click={() => b.set("Updated state B")}>Update State B</button>
{/if}
