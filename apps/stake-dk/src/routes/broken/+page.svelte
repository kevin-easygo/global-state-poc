<script lang="ts">
  import ConsumeBroken from "poc-state-d/components/ConsumeBroken";
</script>

<div class="flex flex-col gap-4">
  <div class="p-4 grid grid-cols-4 gap-2">
    <div class="bg-slate-200 p-4 rounded-md flex flex-col gap-4">
      <span class="font-bold block">Consumption of C in D while not initialised</span>
      <ConsumeBroken />
    </div>
  </div>
</div>
