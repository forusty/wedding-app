# Wedding Event App

## Technology used
- AngularJS 1.5
- Bootstrap Beta V4
- MomentJS
- Firebase for hosting (FREE!)

## Intro and Reason behind the project

This project was based off the angular-seed skeleton app.

The purpose of this project was to display the sequence of events during a wedding that i was attending and helping out in. The initial format was in an excel spreadsheet which was a broad overview of all the events for the day. 

The idea struck me when i was trying to keep track of the things i needed to do that day and items to bring at each timing hence i thought that there should have been a personalize schedule that displays events that only concern each individual at the wedding. Hence i went about to crunch the excel spreadsheet and created a personalize event schedule for each person invovled in the excel spread sheet.

The data is presented in json in folder app/json/event.json with each individual user having their own sequence of event displayed with date time stamp at each point and the items that needed to be brought for that time segment.

The app is display as a drop down list where users can choose their name and see the events that were pertaining to them. 

The app also shows what event is "ongoing", which event is "next" and how long till that event, there is also an "over" status for events that have passed. This are all colour coded using bootstrap.

The window will automatically scroll to the event that is currently ongoing so that users do not need to scroll down and find the next event in the list.

There is also a contact list that is display at the top and the header will follow the user scrolling so the contact list will always be readily available.

This project was done with a tight timeline hence alot of the things done are not in best practices or efficiently but it was aimed to pushed out a prototype by the wedding. 

Time used to create this app was less than 24 hours.

## Getting Started

run ```npm start``` to run the project on port http:\\localhost:8000


## Future Enhancement

This is a list of things i might do in the future when i have the time

- Adding a window to create the event json file or to store in a database