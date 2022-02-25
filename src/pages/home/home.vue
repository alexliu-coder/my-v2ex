<script setup lang="ts">
import {onMounted} from "vue";
import {getNodesByName} from "../../api";

const props = defineProps({})
onMounted(async () => {
  const res = await getNodesByName()
  console.log('res', res)
})
</script>

<template>
  <div>home</div>
</template>

<style scoped>

</style>
