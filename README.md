# Redux toolkit and asynchronous code in a cart system

An application which is a cart system that has it state managed with redux toolkit.

**End Result**

Click here : https://movtime-movies-app.vercel.app/

# Description

**Details**

The application allows you to add items to the cart by clicking on the add to cart button, The list of items contains the item name, description and price 

![Item](https://github.com/Eniola-Codes/Using-redux-toolkit-with-async-codes-and-firebase/blob/main/src/assets/additem.png?raw=true)

The cart button located on the navbar contains an integer in a badge, which counts the number of items that has being added to the cart. 

![Cart button](https://github.com/Eniola-Codes/Using-redux-toolkit-with-async-codes-and-firebase/blob/main/src/assets/cartbutton.png?raw=true)

The cart opens when you click on the cart button, the cart displays the information of the items added to the cart such as the item name, item description quantity added to cart and total price on each item.

![Cart item](https://github.com/Eniola-Codes/Using-redux-toolkit-with-async-codes-and-firebase/blob/main/src/assets/cartitem.png?raw=true)

Every item added to cart automatically sends a PUT request to firebase to store the data, the PUT request is very similary to the POST request, but instead of the PUT request to create a new value, array or object, it overwrites what is stored on firebase already. 

Instead of using the useEffect() hook to process or send my asynchronous code, i used redux actions provided by redux toolkit, which gives me leaner and functional components with no redundant or repeated code.

The notification bar above the navbar specifies the status of the last sent request, it could either be error when the request failed, pending which is the loading state or success, which means the GET or POST request has been successfully sent.

Success
![success](https://github.com/Eniola-Codes/Using-redux-toolkit-with-async-codes-and-firebase/blob/main/src/assets/successbar.png?raw=true)

Pending
![pending](https://github.com/Eniola-Codes/Using-redux-toolkit-with-async-codes-and-firebase/blob/main/src/assets/pendingbar.png?raw=true)

Error
![error](https://github.com/Eniola-Codes/Using-redux-toolkit-with-async-codes-and-firebase/blob/main/src/assets/errorbar.png?raw=true)

**Technologies**

Technologies i used to build this are React.js, Css and Firebase

I used These the technologies above because : 

- Seperation of concerns (Having leaner files and components by breaking down the code into smaller parts)
- Prop drilling to pass some data from component to component with ease.
- Css modules which prevent clashing of classnames around components therefore avoiding unwanted results
- Firebase helps me store data is the cart, despite if i reload the application or cancel it them come back later.

# Installation and Running

git clone or pull the project using your terminal, open the project folder on your local laptop in a code editor and run "npm start" in your editors terminal.


