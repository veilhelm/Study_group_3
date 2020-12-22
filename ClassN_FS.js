const fs = require('fs');

let buffer = '';
try {
  fs.appendFile('./newFile.js', 'const x = 25; console.log(x)', (error) => {
    if (error) throw new Error(error);
  });
} catch (error) {
  console.dir(error);
}

fs.readFile(`./Class1_variables_in_javascript.js`, (err, data) => {
  if (err) throw new Error('there was an error reading this file');
  buffer += data;
  console.log(buffer);
});

fs.open('./newFile.js', 'w', (error, file) => {
  if (error) throw new Error(error);
  console.log(file);
});

fs.writeFile('./newFile.js', 'const x = 30; console.log(x)', (error) => {
  if (error) throw new Error(error);
});

fs.unlink('./newFile.js', (error) => {
  if (error) throw new Error(error);
});

fs.rename('.newFile.js', 'coolerFile.js', (error) => {
  if (error) throw new Error(error);
});
