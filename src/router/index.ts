// import cookie from 'js-cookie'
import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
  NavigationGuardNext,
  RouteLocationNormalized,
} from "vue-router";
import routes from "./routes";

declare module "vue-router" {
  interface RouteMeta {
    auth?: string;
  }
}

const router = createRouter({
  history: createWebHistory("/"),
  // history: createWebHashHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  // console.log("全局路由前置守卫：to,from\n", to, from);

  // // 设置页面标题
  document.title = "小主轻断食-168断食、不禁食、健康减肥减脂食谱、饮食记录"; // (to.meta.title as string) || import.meta.env.VITE_APP_TITLE;
  // // 设置描述
  // const descriptionTag = document.querySelector('meta[name="description"]');
  // if (descriptionTag) {
  //   descriptionTag.setAttribute(
  //     "content",
  //     (to.meta.description as string) || ""
  //   );
  // }

  // // 设置关键字
  // const keywordsTag = document.querySelector('meta[name="keywords"]');
  // if (keywordsTag) {
  //   keywordsTag.setAttribute("content", (to.meta.keywords as string) || "");
  // }
  next();
});

router.afterEach(() => {
  // console.log("全局路由后置守卫：to,from\n", to, from);
});

export default router;
