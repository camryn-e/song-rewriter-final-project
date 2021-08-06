# Song Rewriter

## Description
This React-Rails app allows users to rewrite the lyric of their favorite songs. The backend includes a Rails app and API and the frontend uses a React app. This app was inspired by an online trend to cover "That Funny Feeling" by Bo Burnham with rewritten lyrics to represent the musician's own experience.


## Features
  * Users can create an account that has a username and password
  * Users can create a Re-write of a Song using a form which 
     will contain the original lyrics by default 
  * Users can add a new song to the list of all original songs that have 
      rewrites using a form
  * Users can view a list of original Songs that have rewrites 
  and click on each song to see a list of that song's rewrites
  * Each Song's page displays the song title, an embeded music video and all Re-writes made for that song and 
      each rewrite in the list can be clicked to show the rewritten lyrics
  * User profile will display a list of all of the re-writes that user has written
  * Users can edit rewrites that they have created
  * Users can delete rewrites that they have created
  * Users can delete their account


## Requirements
This app requires Ruby version 2.7.4 as well as Rails 6.1.4.

## Installation
This app can be installed by typing (or copy/pasting) the following into the command line: git clone https://github.com/camryn-e/song-rewriter-final-project.git

After cloning the repo navigate into the project directory and run bundle install and npm install --prefix client.

## Running the App
Run rails start OR rails s and npm start --prefix client to start the server and the React app.