# Backend to Toolbox test

## Installation 🔧

Run the command `npm i`

## Usage

To run, only you must enter in your terminal the command `npm start`. If you like to make changes in the project is preferable to run the command `npm run dev`.
If you want run the project with docker enter the command `npm run serve`.

## Routes

The only routes availability in this project are :
- GET `/` Home 
- GET `/iecho` which receive the query param `text` and return the same text in reverse. Also, validate if the text entered is a [palindrome](https://es.wikipedia.org/wiki/Pal%C3%ADndromo) or not. 

The response to sucessfull case `status 200`

```
{
  text: <string in reverse>,
  palindrome: Boolean
}

```

In case of error `status 400`

```
{
  text: 'no text',
}
```

## Live version

### This project is availability for see in the link [repl.it](http://backend-toolbox-test.alexguerradev.repl.co)
### Fronted view availability in  [fronted-toolbox-test](http://fronted-toolbox-test.s3-website-us-east-1.amazonaws.com/)