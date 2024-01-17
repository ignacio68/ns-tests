<script setup lang="ts">
  import { PinchGestureEventData, Label, Screen } from "@nativescript/core";
  import { ref, onMounted } from "nativescript-vue";
  import { refView, useElementSize } from "@nativescript-use/vue";

  const deltaX = ref<number>(1);
  const deltaY = ref<number>(1);

  const onPinch = (args: PinchGestureEventData) => {
    // deltaX.value = args.getFocusX();
    // deltaY.value = args.getFocusY();
    console.log("state", args.state);
    // console.log("args", args);
    // console.log("focus X", deltaX.value);
    // console.log("focus Y", deltaY.value);
    console.log("scale", args);
  };
</script>

<template>
  <Page>
    <ActionBar>
      <Label text="PINCH" class="font-bold text-lg" />
    </ActionBar>
    <GridLayout class="w-full h-full" @pan="onPinch">
      <Label ref="label" class="w-16 h-10 bg-orange-400 text-center font-semibold text-xl text-white" text="PINCH"></Label>
    </GridLayout>
  </Page>
</template>
