<script lang="ts">
  import { ref, computed, onMounted, onUnmounted, $navigateTo } from "nativescript-vue";
  import { refView } from "@nativescript-use/vue";
  import { Drawer } from "@nativescript-community/ui-drawer";
  import Details from "./Details.vue";
  import Gestures from "./Gestures.vue";
  import { EventData, View } from "@nativescript/core";

  export default {
    setup() {
      const drawer = ref(null);
      return {
        drawer
      };
    },

    data() {
      return {
        items: new Array(100).fill({ title: "My profile" }),
        isDrawerOpen: false
        // drawer: undefined as unknown as Drawer,
      };
    },
    mounted() {
      // this.drawer = this.$refs.drawer as Drawer;
    },
    methods: {
      onDrawerLoaded(args: any) {
        // const drawer = args.object as any;
        // drawer = this.$refs.drawer as Drawer;
        // console.log("drawer", drawer);
      },
      // note: for some reason these methods don't work if called from a function registered in setup() or <script setup>
      onOpenDrawer(side: string) {
        const drawer = (this.$refs as any).drawer as Drawer;
        (this.$refs as any)["drawer"].nativeView.open(side, 500);
      },
      onCloseDrawer() {
        // const drawer = this.$refs.drawer as Drawer;
        (this.$refs as any)["drawer"].nativeView.close();
      },
      menuTap(args: EventData) {
        console.log("menu tap!!");
        this.toggleDrawerMode();
        const btn = args.object as View;
        this.setButtonClass(btn);
        if (this.isDrawerOpen) this.onOpenDrawer("left");
        else this.onCloseDrawer();
      },

      setButtonClass(btn: View) {
        const bar1 = btn.getViewById("bar1") as View;
        const bar2 = btn.getViewById("bar2") as View;
        const bar3 = btn.getViewById("bar3") as View;
        console.log("bar1", bar1);

        this.toggleClassOnView(bar1, "menu-bar-on", "menu-bar-off");
        this.toggleClassOnView(bar2, "menu-bar-on", "menu-bar-off");
        this.toggleClassOnView(bar3, "menu-bar-on", "menu-bar-off");
      },

      toggleClassOnView(view: View, className1: string, className2: string) {
        let newClassName = view.className.trim();
        if (view.className.indexOf(className1) >= 0) {
          newClassName = view.className.replace(className1, "");
          newClassName = newClassName.trim() + " " + className2;
        } else {
          newClassName = view.className.replace(className2, "");
          newClassName = newClassName.trim() + " " + className1;
        }

        view.className = newClassName;
        console.log("className", view.className);
      },

      toggleDrawerMode() {
        this.isDrawerOpen = !this.isDrawerOpen;
      },
      onOpen() {
        console.log("onOpen");
        if (!this.isDrawerOpen) this.toggleDrawerMode();
      },
      onClose() {
        console.log("onClose");
        if (this.isDrawerOpen) this.toggleDrawerMode();
      }
    }
  };
</script>

<template>
  <Frame>
    <Page>
      <ActionBar class="action-bar" title="Home" :flat="true" icon="">
        <ActionItem>
          <StackLayout ref="btn" class="p-4" @tap="menuTap">
            <Label id="bar1" class="bar bar1" />
            <Label id="bar2" class="bar bar2" />
            <Label id="bar3" class="bar bar3" />
          </StackLayout>
        </ActionItem>
      </ActionBar>
      <Drawer
        @loaded="onDrawerLoaded"
        ref="drawer"
        :gestureHandlerOptions="{
          failOffsetYStart: -10,
          failOffsetYEnd: 10
        }"
        @open="onOpen"
        @close="onClose"
      >
        <GridLayout ~leftDrawer class="drawer" width="80%" backgroundColor="white" rows="auto, *">
          <StackLayout backgroundColor="#eeeeee" padding="25">
            <GridLayout columns="80, *" height="100">
              <StackLayout col="0" class="avatar">
                <Label text="JS" />
              </StackLayout>
            </GridLayout>
            <StackLayout>
              <Label text="John Smith" fontWeight="bold" />
              <Label text="john.smith@example.com" />
            </StackLayout>
          </StackLayout>
          <ScrollView row="1">
            <StackLayout>
              <Label v-for="(item, index) in items" :key="index" :text="item.title" @tap="onCloseDrawer" />
            </StackLayout>
          </ScrollView>
        </GridLayout>

        <StackLayout ~mainContent backgroundColor="white">
          <Button @tap="onOpenDrawer('left')" text="Open Drawer" width="250" marginTop="25" />
        </StackLayout>
      </Drawer>

      <!-- <GridLayout class="px-4">
        <Gestures />
      </GridLayout> -->
    </Page>
  </Frame>
</template>

<style scoped lang="scss">
  ActionBar {
    background-color: #42b883;
    color: white;
  }

  Button {
    background-color: #42b883;
    color: white;
  }

  .avatar {
    background-color: #42b883;
    border-radius: 40;
    height: 80;
    vertical-align: middle;

    Label {
      vertical-align: middle;
      horizontal-align: center;
      font-size: 30;
      color: white;
    }
  }
  .drawer {
    Button {
      background-color: transparent;
      margin: 0;
      padding: 0;
      border-color: #ccc;
      z-index: 0;
      border-width: 0 0 0.5 0;
      color: #222222;
      text-align: left;
      padding-left: 25;
      height: 50;
      font-size: 14;
    }

    Button:highlighted {
      background-color: #eeeeee;
      color: #222222;
    }
  }
  .bar {
    background-color: darkblue;
    width: 22;
    height: 4;
    margin-bottom: 3;
    border-radius: 2;
  }

  .bar1.menu-bar-on {
    animation-name: bar1anim;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
    animation-iteration-count: 1;
    animation-timing-function: ease-in;
  }

  .bar1.menu-bar-off {
    animation-name: bar1anim;
    animation-duration: 0.5s;
    animation-fill-mode: backwards;
    animation-iteration-count: 1;
    animation-timing-function: ease-in;
    animation-direction: reverse;
  }
  .bar2.menu-bar-on {
    animation-name: bar2anim;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
    animation-iteration-count: 1;
    animation-timing-function: ease-in;
  }
  .bar2.menu-bar-off {
    animation-name: bar2anim;
    animation-duration: 0.5s;
    animation-fill-mode: backwards;
    animation-iteration-count: 1;
    animation-timing-function: ease-in;
    animation-direction: reverse;
  }
  .bar3.menu-bar-on {
    animation-name: bar3anim;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
    animation-iteration-count: 1;
    animation-timing-function: ease-in;
  }
  .bar3.menu-bar-off {
    animation-name: bar3anim;
    animation-duration: 0.5s;
    animation-fill-mode: backwards;
    animation-iteration-count: 1;
    animation-timing-function: ease-in;
    animation-direction: reverse;
  }

  @keyframes bar1anim {
    from {
      transform: translate(0, 0) rotate(0deg);
    }
    to {
      transform: translate(0, 7) rotate(45deg);
    }
  }
  @keyframes bar2anim {
    from {
      transform: translate(0, 0);
      opacity: 1;
    }
    to {
      transform: translate(-10, 0);
      opacity: 0;
    }
  }
  @keyframes bar3anim {
    from {
      transform: translate(0, 0) rotate(0deg);
    }
    to {
      transform: translate(0, -7) rotate(-45deg);
    }
  }
</style>
