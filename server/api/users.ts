export default defineEventHandler((event) => {
  const query = useQuery(event);
  return [{ id: "1", name: `hogehoge${query.page}` }];
});
