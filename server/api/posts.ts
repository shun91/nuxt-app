const sleep = (msec: number) =>
  new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, msec);
  });

export default defineEventHandler(async () => {
  await sleep(1000);
  return [
    { id: 1, text: "hogehoge" },
    { id: 2, text: "fugafuga" },
  ];
});
