<script setup lang="ts">
  import { Color, CoreTypes, EventData, TouchManager, View } from "@nativescript/core";
  import { touchAnimationIcon } from "@/utils/touchManagerUtils";

  const onLoaded = (args: EventData) => {
    const view = args.object as View;
    if (view.ios) {
      console.log("ios");
    } else if (view.android) {
      console.log("android");
    }
  };

  const onTouchAnimation = {
    down: {
      scale: { x: 0.95, y: 0.95 },
      backgroundColor: new Color("yellow"),
      duration: 250,
      curve: CoreTypes.AnimationCurve.easeInOut
    },
    up: {
      scale: { x: 1, y: 1 },
      backgroundColor: new Color("#63cdff"),
      duration: 250,
      curve: CoreTypes.AnimationCurve.easeInOut
    }
  };

  const onTap = () => console.log("onTap");
</script>

<template>
  <Page>
    <ActionBar>
      <Label text="TOUCH MANAGER" class="font-bold text-lg" />
    </ActionBar>
    <StackLayout class="w-full h-full">
      <Label ref="label" class="h-24 w-40 bg-indigo-400 text-center font-semibold text-xl text-white" text="NOT ANIMATION" @loaded="onLoaded" @tap="onTap" ignoreTouchAnimation="true"></Label>
      <Label ref="label" class="h-24 w-40 bg-green-400 text-center font-semibold text-xl text-white" text="ANIMATION 1" @loaded="onLoaded" @tap="onTap"></Label>
      <Label ref="label" class="h-24 w-40 bg-green-400 text-center font-semibold text-xl text-white" text="ANIMATION 2" @loaded="onLoaded" @tap="onTap" :touchAnimation="touchAnimationIcon"></Label>
    </StackLayout>
  </Page>
</template>
