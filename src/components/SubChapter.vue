<script setup lang="ts">
  import { onMounted, PropType, watch } from "nativescript-vue";
  import { StackLayout } from "@nativescript/core";
  import { refView } from "@nativescript-use/vue";
  import type { Subchapter } from "~/infrastructure/chapters";
  import { CoreTypes } from "@nativescript/core";

  const props = defineProps({
    subchapters: { type: Object as PropType<Subchapter[]>, required: true },
    isExpanded: { type: Boolean, default: false, required: true }
  });

  const emit = defineEmits<{
    finishAnimation: [value: boolean];
  }>();

  const menu = refView<StackLayout>();

  watch(
    () => props.isExpanded,
    (newValue: boolean) => {
      console.log("isExpanded", newValue);
      if (newValue) {
        menuExpanded();
      } else {
        menuCollapsed();
      }
    }
  );

  const onStackLayoutLoaded = () => {
    console.log("onStackLayoutLoaded");
  };

  const onTap = (src: string) => {
    console.log("onTap subchapter", src);
  };

  const getHeight = () => props.subchapters.length * 32;

  const menuExpanded = () => {
    console.log("menuExpanded", menu.value);
    menu.value.animate({
      curve: CoreTypes.AnimationCurve.easeIn,
      delay: 50,
      duration: 300,
      height: getHeight()
    });
  };

  const menuCollapsed = () => {
    console.log("menuCollapsed", menu.value);
    menu.value
      .animate({
        curve: CoreTypes.AnimationCurve.easeIn,
        duration: 300,
        height: "0"
      })
      .then(() => {
        emit("finishAnimation", true);
      });
  };
</script>

<template>
  <StackLayout ref="menu" class="menu h-0">
    <StackLayout v-for="subchapter in props.subchapters" class="ml-4 h-8" @loaded="onStackLayoutLoaded">
      <Label :text="subchapter.title" @tap="onTap(subchapter.src)" />
    </StackLayout>
  </StackLayout>
</template>

<style lang="scss" scoped></style>
