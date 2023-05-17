import { envsafe, str } from "envsafe";

export const env = envsafe({
  REDIS_URI: str({
    desc: "Redis Server URI",
  }),
});
