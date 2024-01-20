<script setup lang="ts">
  import { ref, computed, watch } from "nativescript-vue";
  import { ContentView, ObservableArray } from "@nativescript/core";
  import { chapters } from "@/infrastructure/chapters";
  import type { Chapter } from "@/infrastructure/chapters";

  import SubChapter from "./SubChapter.vue";

  const menuExpandedList = ref<boolean[]>(new Array(chapters.length).fill(false));
  const isAnimationFinished = ref<boolean>();
  const chaptersList = ref(new ObservableArray<Chapter>());
  const selectedIndex = ref<number>();

  watch(isAnimationFinished, (newValue) => {
    console.log("newValue", newValue);
    if (newValue) {
      if (typeof selectedIndex.value !== "undefined") {
        menuExpandedList.value[selectedIndex.value] = true;
        isAnimationFinished.value = false;
      }
    }
  });

  const onLoaded = () => {
    // menuExpandedList.value.fill(false);
    console.log(menuExpandedList.value);
  };

  const getChaptersList = computed(() => {
    chapters.map((chapter) => chaptersList.value.push(chapter));
    console.log(chaptersList.value);
    return chaptersList.value;
  });

  const onLabelTap = (index: number) => {
    console.log("onLabelTap");
    selectedIndex.value = index;
    console.log(selectedIndex.value);
    menuExpandedList.value.fill(false);
    if (isAnimationFinished.value === undefined) {
      menuExpandedList.value[selectedIndex.value] = true;
    }
  };

  const onFinishAnimation = (value: boolean) => {
    isAnimationFinished.value = value;
  };
</script>

<template>
  <Frame>
    <Page>
      <StackLayout class="h-full">
        <StackLayout class="ml-2" v-for="(chapter, index) in chapters" verticalAlignment="center" @loaded="onLoaded">
          <GridLayout rows="auto, auto">
            <Label row="0" :text="chapter.title" class="h-12" @tap="onLabelTap(index)" />
            <StackLayout row="1" v-if="chapter.subchapters.length > 0">
              <SubChapter :subchapters="chapter.subchapters" :isExpanded="menuExpandedList[index]" @finishAnimation="onFinishAnimation" />
            </StackLayout>
          </GridLayout>
        </StackLayout>
      </StackLayout>
    </Page>
  </Frame>
</template>
