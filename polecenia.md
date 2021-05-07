# Git
cd ..
git clone https://bitbucket.org/ev45ive/spotify-playlists.git spotify-playlists
cd spotify-playlists
npm i
npm run start

git stash -u -m "Moje zmiany"
git pull -u origin master
git pull -f 

# Instalacje
node -v
v14.5.0

npm -v
6.14.5

code -v
1.40.1

git --version
git version 2.29.2.windows.2

npm cache clean --force
npm uninstall -g @angular/cli
npm i -g @angular/cli@lastest

npm update @angular/cli@latest -g

ng --version
Angular CLI: 11.0.2

# VS Code Ext
https://marketplace.visualstudio.com/items?itemName=Angular.ng-template
https://marketplace.visualstudio.com/items?itemName=Mikael.Angular-BeastCode
https://marketplace.visualstudio.com/items?itemName=adrianwilczynski.switcher
https://marketplace.visualstudio.com/items?itemName=nrwl.angular-console

# Nowy Project
cd ..
ng new spotify-playlists
? Do you want to enforce stricter type checking and stricter bundle budgets in the workspace?
  This setting helps improve maintainability and catch bugs ahead of time.
  For more information, see https://angular.io/strict Yes
? Would you like to add Angular routing? Yes
? Which stylesheet format would you like to use? SCSS   [ https://sass-lang.com/documentation/syntax#scss]

# Angular Material
ng add @angular/material
? Choose a prebuilt theme name, or "custom" for a custom theme: Indigo/Pink        [ Preview: https://material.angular.io?theme=indigo-pink ]
? Set up global Angular Material typography styles? Yes
? Set up browser animations for Angular Material? Yes

npm run ng -- serve

# App Structure
## LIFT https://angular.io/guide/styleguide#lift

## feature modules https://angular.io/guide/feature-modules
npm run ng -- generate @schematics/angular:module --name=playlists --module=app --route=playlists --routing 
ng generate @schematics/angular:component --name=playlists/components/playlist-list
ng generate @schematics/angular:component --name=playlists/components/playlist-list-item
ng generate @schematics/angular:component --name=playlists/components/playlist-details
ng generate @schematics/angular:component --name=playlists/components/playlist-edit-form

npm run ng -- generate @schematics/angular:module --name=music-search --module=app --route=music  --routing 

## shared module https://angular.io/guide/sharing-ngmodules
npm run ng -- generate @schematics/angular:module --name=shared --module=playlists 
