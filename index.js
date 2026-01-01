// Navigator
// // On October 28, 1994, Netscape Navigator was released, helping millions explore the early web.

// // Given an array of browser commands you executed on Netscape Navigator, return the current page you are on after executing all the commands using the following rules:

// // You always start on the "Home" page, which will not be included in the commands array.
// // Valid commands are:
// // "Visit Page": Where "Page" is the name of the page you are visiting. For example, "Visit About" takes you to the "About" page. When you visit a new page, make sure to discard any forward history you have.
// // "Back": Takes you to the previous page in your history or stays on the current page if there isn't one.
// // "Forward": Takes you forward in the history to the page you came from or stays on the current page if there isn't one.
// // For example, given ["Visit About Us", "Back", "Forward"], return "About Us".

// function navigate(commands) {
//   console.log(commands);

//   // use array to push and pop list of pages
//   // or just move the indexCounter...?
//   let indexCounter = 0;

//   // hold current
//   // const current = ["home"];

//   // check how many backs
//   // let backCounter = 0;

//   // check how many forwards
//   // let forwardCounter = 0;

//   // Loop through commands arr
//   for (let i = 0; i < commands.length; i++) {
//     // current.push()
//     console.log(commands[i]);
//     if (commands[i].includes('Visit')) {
//       // console.log(commands[i])
//       // current.push(commands[i])
//       indexCounter++;
//     }
//     if (commands[i].includes('Back')) {
//       // current.pop();
//       indexCounter--;
//     }
//     if (commands[i].includes('Forward')) {
//       indexCounter++;
//     }
//   }
//   console.log(indexCounter);
//   console.log(commands[indexCounter]);
//   return commands[indexCounter];
// }

function navigate(commands) {
  const backStack = [];
  const forwardStack = [];

  let currentPage = 'Home';

  for (let i = 0; i < commands.length; i++) {
    // visit page
    if (commands[i].startsWith('Visit')) {
      // push currentPage into back history
      backStack.push(currentPage);
      // update current page to the new page
      currentPage = commands[i].replace('Visit ', '');
      console.log(currentPage);
      // empty forwardStack
      forwardStack.length = 0;
    } else if (commands[i].startsWith('Back')) {
      // if backHistory isnt empty, push currentPage into forwardHistory
      if (backStack.length > 0) {
        forwardStack.push(currentPage);
        currentPage = backStack.pop();
      }
    } else if (commands[i].startsWith('Forward')) {
      if (forwardStack.length > 0) {
        backStack.push(currentPage);
        currentPage = forwardStack.pop();
      }
    }
  }
  return currentPage;
}
