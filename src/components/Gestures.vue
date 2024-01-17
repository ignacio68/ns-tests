<script setup lang="ts">
  import {
    GestureEventDataWithState,
    TapGestureEventData,
    PinchGestureEventData,
    PanGestureEventData,
    RotationGestureEventData,
    SwipeGestureEventData,
    TouchGestureEventData
  } from "@nativescript/core";

  import { $navigateTo } from "nativescript-vue";

  import Pan from "./gestures/Pan.vue";
  import Pinch from "./gestures/Pinch.vue";
  import TouchManager from "./gestures/TouchManager.vue";

  const onTap = (args: TapGestureEventData) => {
    console.log(args.eventName.toUpperCase());
  };

  const onDoubleTap = (args: TapGestureEventData) => {
    const pointerCount = args.getPointerCount();
    const x = args.getX();
    const y = args.getY();
    console.log(args.eventName.toUpperCase());
    console.log("pointer count: ", pointerCount);
    console.log("x:", x);
    console.log("y:", y);
  };

  const onLongPress = (args: GestureEventDataWithState) => {
    console.log(args.eventName.toUpperCase());
    console.log("state:", args.state);
    console.log("view", args.view);
    console.log("type", args.type);
    console.log("event name", args.eventName);
  };

  const onSwipe = (args: SwipeGestureEventData) => {
    const getDirection = (direction: number) => {
      switch (direction) {
        case 1:
          return "RIGHT";

        case 2:
          return "LEFT";

        case 4:
          return "UP";

        case 8:
          return "DOWN";

        default:
          return "UNDEFINED";
      }
    };
    console.log(args.eventName.toUpperCase());
    console.log("direction", getDirection(args.direction));
  };

  const onPanTap = (args: PanGestureEventData) => {
    console.log(args.eventName.toUpperCase());
    $navigateTo(Pan);
  };

  const onPinch = (args: PinchGestureEventData) => {
    console.log(args.eventName.toUpperCase());
    $navigateTo(Pinch);
  };

  const onRotation = (args: RotationGestureEventData) => {
    console.log(args.eventName.toUpperCase());
  };

  const onTouch = (args: TouchGestureEventData) => {
    console.log(args.eventName.toUpperCase());
    $navigateTo(TouchManager);
  };
</script>
<template>
  <StackLayout class="w-full h-full">
    <Label class="w-full h-10 bg-red-400 mt-2 text-center font-semibold text-xl text-white" @tap="onTap" text="TAP" />
    <Label class="w-full h-20 bg-green-400 my-2 text-center font-semibold text-xl text-white" @doubleTap="onDoubleTap" text="DOUBLE TAP" />
    <Label class="w-full h-20 bg-blue-400 my-2 text-center font-semibold text-xl text-white" @longPress="onLongPress" text="LONG PRESS" />
    <Label class="w-full h-20 bg-yellow-400 my-2 text-center font-semibold text-xl text-white" @swipe="onSwipe" text="SWIPE" />
    <Label class="w-full h-20 bg-pink-400 my-2 text-center font-semibold text-xl text-white" @tap="onPanTap" text="PAN" />
    <Label class="w-full h-20 bg-orange-400 my-2 text-center font-semibold text-xl text-white" @tap="onPinch" text="PINCH" />
    <Label class="w-full h-20 bg-gray-400 my-2 text-center font-semibold text-xl text-white" @rotation="onRotation" text="ROTATION" />
    <Label class="w-full h-20 bg-indigo-400 mt-2 text-center font-semibold text-xl text-white" @touch="onTouch" text="TOUCH" />
  </StackLayout>
</template>
