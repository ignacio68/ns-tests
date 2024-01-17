<script setup lang="ts">
  import { PanGestureEventData, Label, Screen } from "@nativescript/core";
  import { ref, onMounted } from "nativescript-vue";
  import { refView, useElementSize } from "@nativescript-use/vue";

  const label = refView<Label>();
  const { width: labelWidth, height: labelHeight } = useElementSize(label);

  const deltaX = ref<number>(1);
  const deltaY = ref<number>(1);

  const screenHeight = Screen.mainScreen.heightDIPs;
  const screenWidth = Screen.mainScreen.widthDIPs;

  onMounted(() => {
    console.log("label", label.value);
  });

  const onPan = (args: PanGestureEventData) => {
    console.log(args.eventName.toUpperCase());
    const nativeView = label.value.nativeView;
    deltaX.value = args.deltaX;
    deltaY.value = args.deltaY;
    // deltaX.value = normalizeValue(args.deltaX);
    // deltaY.value = normalizeValue(args.deltaY);
    // label.value.translateX = deltaX.value;
    // label.value.translateY = deltaY.value;
    console.log("state", args.state);
    console.log("delta X", label.value.translateX);
    console.log("delta Y", label.value.translateY);
  };

  const normalizeValue = (value: number): number => {
    const normalizedValue = Math.abs(value / 10);
    return normalizedValue;
  };
</script>
<template>
  <Page>
    <ActionBar>
      <Label text="PAN" class="font-bold text-lg" />
    </ActionBar>
    <GridLayout class="w-full h-full" @pan="onPan">
      <Label ref="label" class="w-16 h-10 bg-pink-400 text-center font-semibold text-xl text-white" text="PAN" :translateX="deltaX" :translateY="deltaY"></Label>
    </GridLayout>
  </Page>
</template>
