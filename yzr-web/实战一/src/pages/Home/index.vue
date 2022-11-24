<template>
	<t-swiper
	  :interval="3000"
	  :autoplay="true"
	  :navigation="{ type: 'dots', showSlideBtn: false }"
	  @change="handleChange"
	>
	  <t-swiper-item class="swiper-item--demo">
		<img src="https://tdesign.gtimg.com/site/swiper/01.png" class="img" />
	  </t-swiper-item>
	  <t-swiper-item class="swiper-item--demo">
		<img src="https://tdesign.gtimg.com/site/swiper/02.png" class="img" />
	  </t-swiper-item>
	  <t-swiper-item class="swiper-item--demo">
		<img src="https://tdesign.gtimg.com/site/swiper/03.png" class="img" />
	  </t-swiper-item>
	</t-swiper>
  </template>
  <script lang="ts" setup>
  const handleChange = (index: number) => {
	console.log('基础示例,页数变化到》》》', index);
  };
  </script>
  <style>
  *{
	margin: 0;
	padding: 0;
  }
  t-swiper{
	width: 100%;
  }
  .swiper-item--demo{
	width: 100%;
  }
	img {
	  height: 100%;
	}
  </style>
  