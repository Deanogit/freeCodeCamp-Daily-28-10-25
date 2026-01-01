// Navigator
// On October 28, 1994, Netscape Navigator was released, helping millions explore the early web.

// Given an array of browser commands you executed on Netscape Navigator, return the current page you are on after executing all the commands using the following rules:

// You always start on the "Home" page, which will not be included in the commands array.
// Valid commands are:
// "Visit Page": Where "Page" is the name of the page you are visiting. For example, "Visit About" takes you to the "About" page. When you visit a new page, make sure to discard any forward history you have.
// "Back": Takes you to the previous page in your history or stays on the current page if there isn't one.
// "Forward": Takes you forward in the history to the page you came from or stays on the current page if there isn't one.
// For example, given ["Visit About Us", "Back", "Forward"], return "About Us".

function navigate(commands) {
  console.log(commands);

  // hold current
  let current = '';

  // check how many backs
  let backCounter = 0;

  // check how many forwards
  let forwardCounter = 0;

  // Loop through commands arr
  for (let i = 0; i < commands.length; i++) {
    console.log(commands[i]);
    // check commands for page names and store
    if (commands[i].includes('Visit')) {
      // console.log(commands[i])
      // refresh current to latest
      current = commands[i];
    }

    // check for
  }
  console.log(current);
  return commands;
}
