// @todo: in production mode, we should compile everything instead of compiling
// on the fly using a require hook:
require("babel-register");

// Run the server:
require("./server/bootstrap").default();
