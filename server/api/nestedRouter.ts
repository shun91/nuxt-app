import { createRouter, useBase } from "h3";

const router = createRouter();

router.get("/", () => "hello world");

// https://github.com/nuxt/framework/issues/4235#issuecomment-1095536939
export default useBase("/api/nestedRouter", router.handler);
