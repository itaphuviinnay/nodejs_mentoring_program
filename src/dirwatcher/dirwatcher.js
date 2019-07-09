import fs from "fs";
import { EventEmitter } from "events";

export class DirWatcher extends EventEmitter {
  watch(path, delay) {
    let files = [];
    let newFiles = [];
    setInterval(() => {
      fs.readdir(path, (err, data) => {
        newFiles = data;
        if (Array.isArray(files) && files.length) {
          let changed_files = this.compare(files, newFiles);
          if (changed_files) {
            this.emit("changed", changed_files);
          } else {
            files.forEach((file, index) => {
              if (Date.now() - fs.statSync(path + "/" + file).mtimeMs < 1000) {
                this.emit("changed", newFiles[index]);
              }
            });
          }
        }
      });
      fs.readdir(path, (err, data) => {
        files = data;
      });
    }, delay);
  }

  compare(filesArray, new_filesArray) {
    let element = "";
    if (filesArray.length === new_filesArray.length) {
      for (let i = 0; i < filesArray.length; i++) {
        if (new_filesArray[i] !== filesArray[i]) {
          element = new_filesArray[i];
        }
      }
    } else {
      for (
        let i = 0;
        i < Math.max(filesArray.length, new_filesArray.length);
        i++
      ) {
        if (new_filesArray[i] !== filesArray[i]) {
          element = filesArray[i] ? filesArray[i] : new_filesArray[i];
        }
      }
    }
    return element;
  }
}
