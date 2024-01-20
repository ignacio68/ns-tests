import { createApp, registerElement } from "nativescript-vue";
import DrawerPlugin from "@nativescript-community/ui-drawer/vue3";
import WebViewPlugin from "@nativescript-community/ui-webview/vue";
import "@/utils/touchManagerUtils";
import WebViewDemo from "./components/WebViewDemo.vue";
import Home from "./components/Home.vue";
import MenuCollapsable from "./components/MenuCollapsable.vue";

const app = createApp(MenuCollapsable);

app.use(DrawerPlugin);
app.use(WebViewPlugin);

app.start();
