<script lang="ts">
  import { ref, computed, onMounted, onUnmounted, $navigateTo } from "nativescript-vue";
  import { refView } from "@nativescript-use/vue";
  import { Drawer } from "@nativescript-community/ui-drawer";
  import Details from "./Details.vue";
  import Gestures from "./Gestures.vue";

  export default {
    setup() {
      // const drawer = ref(null);
      // return {
      //   drawer
      // };
    },
    data() {
      return {
        items: new Array(100).fill({ title: "My profile" })
      };
    },
    methods: {
      onDrawerLoaded(args: any) {
        const drawer = args.object as any;
        console.log("drawer", drawer);
      },

      // note: for some reason these methods don't work if called from a function registered in setup() or <script setup>
      onOpenDrawer(side: string) {
        const drawer = this.$refs.drawer as Drawer;
        drawer.nativeView.open(side);
      },
      onCloseDrawer() {
        const drawer = this.$refs.drawer as Drawer;
        drawer.nativeView.close();
      }
    }
  };
</script>

<template>
  <Frame>
    <Page>
      <ActionBar>
        <Label text="Home" class="font-bold text-lg" />
      </ActionBar>
      <Drawer
        @loaded="onDrawerLoaded"
        ref="drawer"
        :gestureHandlerOptions="{
          failOffsetYStart: -10,
          failOffsetYEnd: 10
        }"
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
</style>
