# MyNotes

MyNotes is creation of my individual need feel free to use it same as me (Im using for personal growth purposes).

If you have any idea to improve it just create a issue!

## Basic Usage
### Creating Category
To create category just put folder with name of the category in the "notes" folder.
### Creating Note
To create a note just put folder named as your note into selected category
in this folder you can create file named index.md which will be content of your note

### Start

To open your notes just simply call npm start in the MyNotes directory, that should open browser with http://localhost:8000/ here will be listed all of your categories, to move into category just click on it

## Advanced
### Public folder
Folder public is designed to store any static files that you can serve in your posts imgs, styles etc..
### View Folder
Here's all of your "Theme" you can change it as you want.
category.ejs -> list of all notes in selected category
index.ejs -> main page and list of all categories
note.ejs -> note page
### Creating 2 files in one note

To create a link to other file in note you can just create anotherindex.md in the same folder as your main note and link to it by

```
[Another Note Page](./NameOfYourNote/anotherindex)
```

.md extension is not welcome here :D
