<script lang="ts">
  import stateA from "poc-state-a/state";
  import stateB from "poc-state-b/state";
  import { Test } from "poc-state-b";

  const a = stateA.get();
  const b = stateB.get();
</script>

{#if a}
  <h1>{$a}</h1>
{/if}

{#if b}
  <h2>{$b}</h2>
{/if}

<Test />
