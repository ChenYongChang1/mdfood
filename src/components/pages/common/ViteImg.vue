<template>
  <img
    v-bind="$attrs"
    :src="getAssetsFile(src)"
    :style="{ margin, width, height }"
  />
</template>

<script lang="ts" setup>
defineOptions({ name: "ViteImg" });
interface modules {
  [k: string]: any;
}
const props = defineProps({
  margin: {
    type: String,
    default: "0",
  },
  width: {
    type: String,
    default: "",
  },
  height: {
    type: String,
    default: "",
  },
  lazy: {
    type: Boolean,
    default: false,
  },
  src: {
    type: String,
    default: "",
  },
});
const getAssetsFile = (url: string) => {
  if (url.startsWith("http")) return url;
  const realPath = url.replace("@", "/src");
  const imgSuffix = url.replace(/.*\/.*?\.(.*?)/, "$1");
  let modules: modules = {};
  if (imgSuffix === "png") {
    modules = import.meta.glob("/src/assets/**/*.png", { eager: true });
  } else if (imgSuffix === "jpg") {
    modules = import.meta.glob("/src/assets/**/*.jpg", { eager: true });
  } else if (imgSuffix === "svg") {
    modules = import.meta.glob("/src/assets/**/*.svg", { eager: true });
  } else if (imgSuffix === "gif") {
    modules = import.meta.glob("/src/assets/**/*.gif", { eager: true });
  }
  // const modules = import.meta.globEager("/src/assets/**/*.png"); // import(`@/assets/imgs/home/${borderStatusMap[props.status]}.png`);
  return modules[realPath]?.default;
};
// const imgSrc = computed(() => {
// 	return ref(props.src.replace('@', '/src'))
// }) // new URL(props.src, import.meta.url).href
// // console.log(imgSrc, '===', import(props.src), 'imgSrc')

// // const getImgSrc = async () => {
// // 	if (props.src.startsWith('@')) {
// // 		imgSrc.value = ref(props.src)
// // 	}
// // 	imgSrc.value = props.src
// // }
// // getImgSrc()
</script>
