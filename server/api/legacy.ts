import { IncomingMessage, ServerResponse } from "h3";

export default (req: IncomingMessage, res: ServerResponse) => {
  res.end("Legacy Handler");
};
