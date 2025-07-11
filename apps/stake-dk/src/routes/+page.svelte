<script lang="ts">
  import stateA from "poc-state-a/state";
  import stateB from "poc-state-b/state";
  import ConsumeB from "poc-state-b/components/ConsumeB";
  import ConsumeA from "poc-state-b/components/ConsumeA";
</script>

<div class="flex flex-col gap-4">
  <div class="p-4 grid grid-cols-4 gap-2">
    <div class="bg-slate-200 p-4 rounded-md flex flex-col gap-4">
      <span class="font-bold block">Consumption of A from App</span>
      <p class="p-2 bg-white rounded-md">{$stateA}</p>
    </div>
    <div class="bg-slate-200 p-4 rounded-md flex flex-col gap-4">
      <span class="font-bold block">Consumption of B from App</span>
      <p class="p-2 bg-white rounded-md">{$stateB}</p>
    </div>
    <div class="bg-slate-200 p-4 rounded-md flex flex-col gap-4">
      <span class="font-bold block">Consumption of B from B</span>
      <ConsumeB />
    </div>
    <div class="bg-slate-200 p-4 rounded-md flex flex-col gap-4">
      <span class="font-bold block">Consumption of A from B</span>
      <ConsumeA />
    </div>
  </div>
  <div class="flex justify-center">
    <button
      on:click={() => stateB?.set("New state B")}
      class="rounded-md bg-slate-200 min-w-80 cursor-pointer py-3"
      >Update B</button
    >
  </div>
</div>
