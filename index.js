var s1 = require("./Server.js");
var r1 = require("./router.js");
var requestHandlers = require("./requestHandlers.js")
var handle={};
handle["/"] = requestHandlers.doMehord1;
handle["/doMehord1"] = requestHandlers.doMehord1;
handle["/upload"] = requestHandlers.upload;
s1.abc(r1.route,handle);