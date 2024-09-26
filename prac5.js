import fs from "fs";

fs.readFile("hello.txt", (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data.toString());
});
