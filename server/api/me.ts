export default defineEventHandler((event) => {
  return { id: 1, name: "hogehoge", headers: event.req.headers };
});
