import * as mobilenet from '@tensorflow-models/mobilenet';
import '@tensorflow/tfjs-backend-cpu';
import resizer from 'image-resizer-js';
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs'; // Import the fs module

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imgpath = __dirname + '/cat.jpg';
const imgModel = await mobilenet.load({ version: 2, alpha: 0.5 });

// Use fs.readFileSync to read the image file
const imageData = fs.readFileSync(imgpath);

// Resize the image data
const resizedBuffer = resizer(imageData, undefined, 50);

// Create a Blob and Image object
const blob = new Blob([resizedBuffer]);
const image = new Image();
image.src = URL.createObjectURL(blob);

// Classify the image
const predictions = imgModel.classify(image);
console.log('Predictions: ');
console.log(predictions);





