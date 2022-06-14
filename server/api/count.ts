let count = 0;

export default defineEventHandler((event) => {
  return { count: ++count };
});
