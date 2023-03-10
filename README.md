# Getting Started with Create React App 

## This was just a quick test - Hello World!

## Changed this to display some JSX that was saved within a variable.

```
import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:
const myList = (
  <ul>
    <li>Just showing how to pass JSX</li>
    <li>as a variable</li>
    <li>This is the way</li>
  </ul>
);

// Copy code here:
//ReactDOM.render(<h1>Hello world</h1>, document.getElementById('root'));
ReactDOM.render(myList, document.getElementById('root'));
```

JSX Cheatsheet:
https://www.codecademy.com/learn/learn-react-introduction/modules/react-101-jsx-u/cheatsheet

JSX is a syntax extension for JavaScript.

If a JavaScript file contains JSX code, then that file will have to be compiled.


A JSX element can be saved in a variable:
const navBar = <nav>I am a nav bar</nav>;

Here’s an example of several JSX elements being stored in an object:

const myTeam = {
  center: <li>Benzo Walli</li>,
  powerForward: <li>Rasha Loa</li>,
  smallForward: <li>Tayshaun Dasmoto</li>,
  shootingGuard: <li>Colmar Cumberbatch</li>,
  pointGuard: <li>Femi Billon</li>
};


If a JSX expression takes up more than one line, then you must wrap the multi-line JSX expression in parentheses. This looks strange at first, but you get used to it:

(
  <a href="https://www.example.com">
    <h1>
      Click me!
    </h1>
  </a>
)

A JSX expression must have exactly one outermost element.

In other words, this code will work:

const paragraphs = (
  <div id="i-am-the-outermost-element">
    <p>I am a paragraph.</p>
    <p>I, too, am a paragraph.</p>
  </div>
);
But this code will not work:

const paragraphs = (
  <p>I am a paragraph.</p> 
  <p>I, too, am a paragraph.</p>
);


Rendering JSX:
import React from 'react';
import ReactDOM from 'react-dom';


Render Me app:
import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:
ReactDOM.render(<h1>Render me!</h1>, document.getElementById('app'));

In the ReactDOM line:
The first argument is appended to whatever element is selected by the second argument.


Congratulations! You’ve learned to create and render JSX elements! This is the first step towards becoming fluent in React.




Advanced JSX:

When writing JSX, it’s common to use variables to set attributes.

Here’s an example of how that might work:

```
// Use a variable to set the `height` and `width` attributes:
 
const sideLength = "200px";
 
const panda = (
  <img 
    src="images/panda.jpg" 
    alt="panda" 
    height={sideLength} 
    width={sideLength} />
);
```

Object properties are also often used to set attributes:

```

const pics = {
  panda: "http://bit.ly/1Tqltv5",
  owl: "http://bit.ly/1XGtkM3",
  owlCat: "http://bit.ly/1Upbczi"
}; 
 
const panda = (
  <img 
    src={pics.panda} 
    alt="Lazy Panda" />
);
 
const owl = (
  <img 
    src={pics.owl} 
    alt="Unimpressed Owl" />
);
 
const owlCat = (
  <img 
    src={pics.owlCat} 
    alt="Ghastly Abomination" />
); 

```


using an image:

```
import React from 'react';
import ReactDOM from 'react-dom';

const goose = 'https://content.codecademy.com/courses/React/react_photo-goose.jpg';

// Declare new variable here:
const gooseImg = <img src={goose} />;

ReactDOM.render(gooseImg, document.getElementById('app'));
```



Event Listeners in JSX
JSX elements can have event listeners, just like HTML elements can. Programming in React means constantly working with event listeners.

You create an event listener by giving a JSX element a special attribute. Here’s an example:
```
<img onClick={myFunc} />
```

An event listener attribute’s name should be something like onClick or onMouseOver: the word on, plus the type of event that you’re listening for. You can see a list of valid event names:
https://reactjs.org/docs/events.html#supported-events

An event listener attribute’s value should be a function. The above example would only work if myFunc were a valid function that had been defined elsewhere:
```
function myFunc() {
  alert('Make myFunc the pFunc... omg that was horrible i am so sorry');
}
 
<img onClick={myFunc} />
```

Note that in HTML, event listener names are written in all lowercase, such as onclick or onmouseover. In JSX, event listener names are written in camelCase, such as onClick or onMouseOver.


Make Doggy (swap image)
```
import React from 'react';
import ReactDOM from 'react-dom';

function makeDoggy(e) {
  // Call this extremely useful function on an <img>.
  // The <img> will become a picture of a doggy.
  e.target.setAttribute('src', 'https://content.codecademy.com/courses/React/react_photo-puppy.jpeg');
  e.target.setAttribute('alt', 'doggy');
}

const kitty = (
  <img 
    src="https://content.codecademy.com/courses/React/react_photo-kitty.jpg" 
    alt="kitty"
    onClick={makeDoggy} />
);

ReactDOM.render(kitty, document.getElementById('app'));
```


How can you write a conditional, if you can’t inject an if statement into JSX?

Well, one option is to write an if statement, and not inject it into JSX.

```
import React from 'react';
import ReactDOM from 'react-dom';

let message;

if (user.age >= drinkingAge) {
  message = (
    <h1>
      Hey, check out this alcoholic beverage!
    </h1>
  );
} else {
  message = (
    <h1>
      Hey, check out these earrings I got at Claire's!
    </h1>
  );
}

ReactDOM.render(
  message, 
  document.getElementById('app')
);
```


## coin toss
```
import React from 'react';
import ReactDOM from 'react-dom';

function coinToss() {
  // This function will randomly return either 'heads' or 'tails'.
  return Math.random() < 0.5 ? 'heads' : 'tails';
}

const pics = {
  kitty: 'https://content.codecademy.com/courses/React/react_photo-kitty.jpg',
  doggy: 'https://content.codecademy.com/courses/React/react_photo-puppy.jpeg'
};
let img;

// if/else statement begins here:
if (coinToss() === 'heads') {
  img = <img src={pics.kitty} />
} else {
  img = <img src={pics.doggy} />
}

ReactDOM.render(img, document.getElementById('app'));
```

## JSX Conditionals: The Ternary Operator

There’s a more compact way to write conditionals in JSX: the ternary operator. The ternary operator works the same way in React as it does in regular JavaScript. However, it shows up in React surprisingly often.

Here’s how you might use the ternary operator in a JSX expression:
```
const headline = (
  <h1>
    { age >= drinkingAge ? 'Buy Drink' : 'Do Teen Stuff' }
  </h1>
);
```

In the above example, if age is greater than or equal to drinkingAge, then headline will equal <h1>Buy Drink</h1>. Otherwise, headline will equal <h1>Do Teen Stuff</h1>.

## coin toss to decide which img
```
import React from 'react';
import ReactDOM from 'react-dom';

function coinToss () {
  // Randomly return either 'heads' or 'tails'.
  return Math.random() < 0.5 ? 'heads' : 'tails';
}

const pics = {
  kitty: 'https://content.codecademy.com/courses/React/react_photo-kitty.jpg',
  doggy: 'https://content.codecademy.com/courses/React/react_photo-puppy.jpeg'
};

const img = <img src={pics[coinToss() === 'heads' ? 'kitty' : 'doggy']} />;

ReactDOM.render(
  img, 
  document.getElementById('app')
);
```

## JSX Conditionals: &&

We’re going to cover one final way of writing conditionals in React: the && operator.

Like the ternary operator, && is not React-specific, but it shows up in React surprisingly often.

&& works best in conditionals that will sometimes do an action, but other times do nothing at all.

```
const tasty = (
  <ul>
    <li>Applesauce</li>
    { !baby && <li>Pizza</li> }
    { age > 15 && <li>Brussels Sprouts</li> }
    { age > 20 && <li>Oysters</li> }
    { age > 25 && <li>Grappa</li> }
  </ul>
);
```
If the expression on the left of the && evaluates as true, then the JSX on the right of the && will be rendered. If the first expression is false, however, then the JSX to the right of the && will be ignored and not rendered.


Favorite foods app:
```
import React from 'react';
import ReactDOM from 'react-dom';

// judgmental will be true half the time.
const judgmental = Math.random() < 0.5;

const favoriteFoods = (
  <div>
    <h1>My Favorite Foods</h1>
    <ul>
      <li>Sushi Burrito</li>
      <li>Rhubarb Pie</li>
      {!judgmental && <li>Nacho Cheez Straight Out The Jar</li>}
      <li>Broiled Grapefruit</li>
    </ul>
  </div>
);

ReactDOM.render(
  favoriteFoods, 
  document.getElementById('app')
);
```


.map in JSX
The array method .map() comes up often in React. It’s good to get in the habit of using it alongside JSX.

If you want to create a list of JSX elements, then .map() is often your best bet. It can look odd at first:
```
const strings = ['Home', 'Shop', 'About Me'];
 
const listItems = strings.map(string => <li>{string}</li>);
 
<ul>{listItems}</ul>
```
In the above example, we start out with an array of strings. We call .map() on this array of strings, and the .map() call returns a new array of <li>s.


.map in JSX
The array method .map() comes up often in React. It’s good to get in the habit of using it alongside JSX.

If you want to create a list of JSX elements, then .map() is often your best bet. It can look odd at first:

```
const strings = ['Home', 'Shop', 'About Me'];
 
const listItems = strings.map(string => <li>{string}</li>);
 
<ul>{listItems}</ul>
```

On the last line of the example, note that {listItems} will evaluate to an array, because it’s the returned value of .map()! JSX <li>s don’t have to be in an array like this, but they can be.

```
import React from 'react';
import ReactDOM from 'react-dom';

const people = ['Rowe', 'Prevost', 'Gare'];

const peopleLis = people.map(person =>
  // expression goes here:
<li>{person}</li>
);

// ReactDOM.render goes here:
ReactDOM.render(<ul>{peopleLis}</ul>, document.getElementById('app'));
```


Keys
When you make a list in JSX, sometimes your list will need to include something called keys:
```
<ul>
  <li key="li-01">Example1</li>
  <li key="li-02">Example2</li>
  <li key="li-03">Example3</li>
</ul>
```
A key is a JSX attribute. The attribute’s name is key. The attribute’s value should be something unique, similar to an id attribute.


So, for each element in people, we must generate a unique value. How can you get .map() to produce unique keys?


First, add an i parameter to .map()‘s inner function, so that you can access each person’s unique index:
```
const peopleLIs = people.map((person, i) =>
```
Now, you can get a unique key on each loop, by adding the following attribute to your <li></li>:
```
key={'person_' + i}
```

Here it is in action:
```
import React from 'react';
import ReactDOM from 'react-dom';

const people = ['Rowe', 'Prevost', 'Gare'];

const peopleLis = people.map((person, i) =>
  // expression goes here:
<li key={'person_' + i}>{person}</li>
);

// ReactDOM.render goes here:
ReactDOM.render(<ul>{peopleLis}</ul>, document.getElementById('app'));
```

Quick example without using JSX just for reference:
```
const greatestDivEver = React.createElement(
  "div",
  null,
  "i am div"
);
```
