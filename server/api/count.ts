const sleep = (msec: number) =>
  new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, msec);
  });

let count = 0;

export default defineEventHandler(async (event) => {
  await sleep(1000);
  return { count: ++count };
});
