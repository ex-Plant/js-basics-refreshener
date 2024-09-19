import fs from "fs";
import path from "path";
console.log(`program started`);

const ASYNC_SYNC_METHODS = `
In modern applications, asynchronous methods are generally preferred over synchronous methods, especially in environments like Node.js. Here’s why:

Non-blocking Behavior: Asynchronous methods do not block the event loop, allowing other operations to continue executing. This is crucial in server applications where blocking the event loop can degrade performance and responsiveness.
Scalability: Asynchronous methods help in building scalable applications by efficiently managing I/O-bound operations, such as file system access, network requests, and database interactions.
Improved User Experience: In front-end applications, asynchronous operations (like those using async/await, Promises, or callbacks) ensure that the UI remains responsive, enhancing the user experience.

`;

const currentDir = process.cwd();
const CWD = `current working directory`;

// create new catalogue
function createNewDir(path) {
  fs.mkdir(path, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`dir created`);
  });
}

// synchronous CHECK IF DIRECTORY EXISTS
// const dirPath = currentDir + `/test4`;
// if (fs.existsSync(dirPath)) {
//   console.log(`directory exists!`);
// } else {
//   createNewDir(dirPath);
// }

// alternative - this works the other way around, error means there is no
// directory
function testAccess(path) {
  fs.access(path, (err) => {
    if (err) {
      createNewDir(path);
    } else {
      console.log("The directory or file exists.");
    }
  });
}

// writeFileSync
const path2 = currentDir + `/test5`;
testAccess(path2);

// const newDirPath = path.join(process.cwd(), "test3");

// const filePath = path.join(newDirPath, "testFile.txt");

// if (fs.existsSync(newDirPath)) {
//   fs.writeFileSync(filePath, `askldjfanksdjfnalksjd`);
// } else {
//   console.log(`directory does not exist`);
//   console.log(`creating dir...`);
//   fs.mkdir(newDirPath, (err) => {
//     if (err) {
//       console.error(`error creating dir...`);
//       return;
//     }
//     console.log(`directory created!`);
//     fs.writeFileSync(filePath, `askldjfanksdjfnalksjd`);
//   });
// }

// WHAT HAPPENS IF NO DIRECTORY
// fs.writeFileSync(
//   path.join(process.cwd(), "directory_that_does_not_exist/", "testsssss.txt"),
//   `some text here `,
// ); // Error: ENOENT: no such file or directory,
