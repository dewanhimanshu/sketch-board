# Realtime Openboard Clone Project [click here](https://sketch-board-himanshu-dewan.herokuapp.com/)

### Project Desciption:
- This project comprises of basic openboard functionalities such as, writing, erasing, downloading the canvas, adding notes (with minimising it, closing it, dragging it around on the page), uploading the image (features same as of notes), undo and redo actions. <br>
- Added realtime drawing functionality using Socket.io by connecting to server using Express.js
![Screenshot from 2022-01-24 19-07-41](https://user-images.githubusercontent.com/32437794/150794921-a7e7a418-97c3-4501-af67-005abbbe6f49.png)



#### Adding notes and uploading image:
Using green button, we can minimise the notes and by clicking red button, notes can be closed. Similarly for uploading images. <br>
![Screenshot from 2022-01-24 19-09-49](https://user-images.githubusercontent.com/32437794/150794936-83c0c706-3fbc-4511-ad0d-a13ee2dae2dd.png)



#### Realtime drawing:
Realtime drawing can be achieved by the people using same link at same time.
![Screenshot from 2022-01-24 19-20-31](https://user-images.githubusercontent.com/32437794/150794958-d1ff2c9d-ca04-41d5-a1a6-a3fefe02f196.png)



### Tech Stack used:
- HTML
- CSS
- JavaScript
- Socket.io
- Express.js 

### Key Features
This real-time whiteboard provides the user with following features:

- Draw using pencil (3 different colors, change width of pencil)
- Erase the drawn area using eraser(scale the eraser size)
- Include a sticky note to make notes (feature to add multiple sticky notes, move sticky note around the drawing area, minimize and close the sticky note)
- Upload an image or gif (feature to add multiple files,feature to move the file, close the file)
- Download the drawing part on the user screen
- Redo or undo the drawing content changes.
- Zoom in or zoom out the drawing content.
- Real-time virtual environment for drawing and erasing.

### Run on your local machine:
Replace `https://sketch-board-himanshu-dewan.herokuapp.com/` with `http://localhost:5000/` in `index.html`file. <br>
Open the folder in VS code. Open terminal and write these commands: <br>
```
npm i 
```
Press Enter. Then,
```
node app.js
```
Now open the browser and type `localhost:5000`.

