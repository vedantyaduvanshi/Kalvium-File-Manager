const fs = require("fs");
const path = require("path");

const SourceOfFile = path.join(__dirname, "KFM-source");
const DestinationSource = path.join(__dirname, "KFM-destination");
const NameFile = "kalvium-node-js.txt";
const sourceFilePath = path.join(SourceOfFile, NameFile);
const destinationFilePath = path.join(DestinationSource, NameFile);

// So for the first part we gotta do "Read and write the file synchronously"

const syncReadAndWrite = () => {
  try {
    const data = fs.readFileSync(sourceFilePath, "utf-8");
    fs.writeFileSync(destinationFilePath, data);
    console.log("File read and written in synchronous manner Success.");
  } catch (error) {
    console.error("Error in Part 1 of Assignment : ", error);
  }
};

// Now for the second part we gotttaa do "Read and write the file asynchronously"

const notsyncReadAndWrite = () => {
  fs.readFile(sourceFilePath, "utf8", (err, data) => {
    if (err) {
      console.error("error reading file part 2 :", err);
      return;
    }
    fs.writeFile(destinationFilePath, data, (err) => {
      if (err) {
        console.error("error writing file part 2 :", err);
        return;
      }
      console.log("File read and written asynchronously successfully.");
    });
  });
};


//  in part 3 we have to Read the file synchronously and write the file asynchronously
const syncReadAsyncWrite = () => {
    try {
        const data = fs.readFileSync(sourceFilePath, 'utf8');
        fs.writeFile(destinationFilePath, data, (err) => {
            if (err) {
                console.error('Error during asynchronous write after synchronous read:', err);
                return;
            }
            console.log('File read synchronously and written asynchronously successfully.');
        });
    } catch (error) {
        console.error('Error during synchronous read:', error);
    }
};


// in Part 4  we gotaaa Read the file asynchronously and write the file synchronously
const asyncReadSyncWrite = () => {
    fs.readFile(sourceFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error during asynchronous read:', err);
            return;
        }
        try {
            fs.writeFileSync(destinationFilePath, data);
            console.log('File read asynchronously and written synchronously successfully.');
        } catch (error) {
            console.error('Error during synchronous write:', error);
        }
    });
};


// syncReadAndWrite();
// notsyncReadAndWrite()
// syncReadAsyncWrite()
// asyncReadSyncWrite()