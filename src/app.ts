import { createApp, registerElement } from "nativescript-vue";
import DrawerPlugin from "@nativescript-community/ui-drawer/vue3";
import "@/utils/touchManagerUtils";
import Home from "./components/Home.vue";

const app = createApp(Home);
app.use(DrawerPlugin);

app.start();
