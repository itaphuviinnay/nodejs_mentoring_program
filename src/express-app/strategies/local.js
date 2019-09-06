import { Strategy as LocalStrategy } from "passport-local";
import * as config from "../config";

export const localStrategy = () => {
  return new LocalStrategy((username, password, cb) => {
    const { username: configUsername, password: configPassword } = config.user;
    if (username === configUsername && password === configPassword)
      return cb(null, config.user);
    else return cb(null, false);
  });
};
