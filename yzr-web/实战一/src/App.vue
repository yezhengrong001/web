<template>
  <router-view></router-view>
  <div class="demo-tab-bar">
    <t-tab-bar v-for="(list, index) in demoList" :key="index" v-model="value" class="mt-12" @change="change">
      <t-tab-bar-item v-for="(item, i) in list" :key="item.name || i" :icon="item.icon" :name="item.name">
        <router-link class="link" :to="item.src">{{ item.text }}</router-link>
      </t-tab-bar-item>
    </t-tab-bar>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';

export default defineComponent({
  setup() {
    const value = ref('label_2');
    const list_1 = [
      {
        name: 'label_1',
        text: '首页',
        icon: undefined,
        src:'/',
      },
      {
        name: 'label_2',
        text: '分类',
        icon: undefined,
        src:'/cate',
      },
      {
        name: 'label_3',
        text: '购物车',
        icon: undefined,
        src:'/cart',
      },
      {
        name: 'label_4',
        text: '我的',
        icon: undefined,
        src:'/my',
      },
    ];

    watch(value, (newValue) => {
      console.log('当前值：', newValue);
    });

    const change = (changeValue: number | string) => {
      console.log('TabBar 值改变为：', changeValue);
    };

    return {
      demoList: [list_1],
      value,
      change,
    };
  },
});
</script>
<style>
*{
  margin:0;
  padding:0;
}
.demo-tab-bar {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.link{
  text-decoration: none;
}
</style>