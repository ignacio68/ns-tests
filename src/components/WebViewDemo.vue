<script setup lang="ts">
  import { EventData } from "@nativescript/core";
  import { onMounted } from "nativescript-vue";
  import { refView } from "@nativescript-use/vue";
  import { AWebView, EnterFullscreenEventData, LoadEventData, LoadFinishedEventData, ShouldOverrideUrlLoadEventData } from "@nativescript-community/ui-webview";

  const webView = refView<AWebView>();

  const source = "~/infrastructure/html/I. PRINCIPIOS BÁSICOS/I_1_.html";

  onMounted(() => {
    console.log(webView.value);
  });

  const webviewLoaded = (args: EventData) => {
    // webView.value.src = "~/infrastructure/html/I. PRINCIPIOS BÁSICOS/I_1_.html";
  };
</script>
<template>
  <Frame>
    <Page>
      <StackLayout>
        <!-- <NSWebView originalWhiteList="['*']" source="{ html: '<h1>Hello world</h1>' }" /> -->
        <AWebView ref="webView" :webConsoleEnabled="false" :src="source" @loaded="webviewLoaded" :webRTC="true" />
      </StackLayout>
    </Page>
  </Frame>
</template>
