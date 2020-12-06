
# Practical Session: an experiment with Interacto

- clone the project and run `npm install` in the project folder to install the dependencies


- run the Angular app (run `Angular CLI Server`)


- Open the documentation we provided on Interacto (https://interacto.github.io/)


- Do the three exercises **using the Interacto library**.<br/>
  Do not forget to commit locally your changes after each question (do not forget to add new files to git, if you created new files).
  Several questions may compose each exercise.<br/>
  The code to edit is located in `src/app/component/tp2`.
  You can modify `ts`, `html`, or `css` files of this component.
  Take a quick look at these files before starting the exercises.
  You can also modify `src/app/service/data.service.ts`.
  There is no need to write tests.<br/>
  As a reminder, in Angular you can create new class using this command:
  `ng generate class classname`

- you have a deadline/time limit for each exercise (written in each exercise).<br/>
  Do not forgot to commit files even if the time limit expired.<br/>
  You can switch to the next exercise before the time limit.

- At the end of the session, delete the folder `node_modules`, put a zipped file of the project folder on moodle: https://moodleng.insa-rennes.fr/mod/assign/view.php?id=18007 <br/>
  Make sure the archive contains the hidden folder `.git`.

- During the experiment you can ask the supervisor for clarifications but not for help ;)


## #0

Please, put your name here:


Commit the file locally. As a reminder, you can commit using IntelliJ or using the command line: `git commit -m "readme" .`


## #1 -- Triple click to change a color

A triple-click on the div element `triple` (located in the HTML file) must change the color contained in `dataService` to a random color value.
The background color of this `triple` div element uses `dataService.color` so that you should be able to see the change.

The class `DataService` already provides a method `setNewRandomColor` to set its `color` attribute with a new random value.

You have 35 minutes max for this exercise.

**Question 1** Implement this feature without considering undo/redo.
Commit locally your code to keep the changes in this history with the message `1 q1` (do not forget to add new files to git, if you created new files).

- With Interacto, `clicksBinder(nb)` refers to an N-click interaction.


**Question 2** Adapt your code to be able to undo/redo color changes.
Commit locally your code to keep the changes in this history with the message `1 q2` (do not forget to add new files to git, if you created new files).


**Feedback**
From 1 to 10 (10 being the most difficult), give the difficulty of each question:
- Q1:
- Q2:

Commit locally this file.




## #2 -- Write text

Editing the text of the `textarea` HTML element must change `dataService.text`.

A precision: do this action when the textarea is idle for 1 second.
For example: the user writes a sequence of letters and then stops for more than 1 second, so that `dataService.text` is updated.

This is a mainstream optimisation that many text processing tools implement to limit the number of editing actions.

You have 20 minutes max for this exercise.

**Question 1** Implement this feature without considering undo/redo.
Commit locally your code to keep the changes in this history with the message `2 q1` (do not forget to add new files to git, if you created new files).

**Feedback**
From 1 to 10 (10 being the most difficult), give the difficulty of the question:

Commit locally this file.




## #3 -- Drag-and-drop a shape

The last exercise consists in moving a rectangle using a drag-and-drop interaction:
Press on the rectangle, drag it to a location, and release it to end its translation.

The rectangle to move is the rectangle `rec` defined in the HTML file.

You have 40 minutes max for this exercise.

**Question 1** Implement this feature without considering undo/redo.
Commit locally your code to keep the changes in this history with the message `3 q1` (do not forget to add new files to git, if you created new files).

Note that the Interacto `dndBinder(true)` may help you. The attribute `dataService.position` defines the x/y coordinates of the rectangle.


**Question 2** Adapt your code to be able to undo/redo the moves.
Commit locally your code to keep the changes in this history with the message `3 q2` (do not forget to add new files to git, if you created new files).

**Feedback**
From 1 to 10 (10 being the most difficult), give the difficulty of each question:
- Q1:
- Q2:


## Feedback

You can write here your feelings, some feedback about the exercises and the framework you used:

