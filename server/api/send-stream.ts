import { createReadStream } from "node:fs";
import { sendStream } from "h3";

export default defineEventHandler((event) => {
  return sendStream(event, createReadStream(process.cwd() + "/files/hoge.csv"));
});
