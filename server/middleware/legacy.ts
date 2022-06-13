import { IncomingMessage, ServerResponse } from "h3";

export default (req: IncomingMessage, res: ServerResponse, next: Function) => {
  console.log("Legacy Middleware");
  next();
};
