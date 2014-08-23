var searchIndex = {};
searchIndex['lib'] = {"items":[[0,"","lib","`Mount` provides mounting middleware for the Iron framework."],[1,"Mount","","`Mount` is a simple mounting middleware."],[1,"OriginalUrl","","Exposes the original, unmodified path to be stored in `Request::extensions`."]],"paths":[]};
searchIndex['staticfile'] = {"items":[[0,"","staticfile","Static file-serving middleware."],[1,"Static","","The static file-serving `Middleware`."],[10,"clone","","",0],[10,"new","","Create a new instance of `Static` with a given root path.",0],[10,"favicon","","Create a favicon server from the given filepath.",0],[10,"enter","","",0]],"paths":[[1,"Static"]]};

searchIndex['iron'] = {"items":[[0,"","iron","The main crate for the Iron library."],[1,"Request","","The `Request` given to all `Middleware`."],[11,"url","","The requested URL.",0],[11,"remote_addr","","The originating address of the request.",0],[11,"headers","","The request headers.",0],[11,"body","","The request body.",0],[11,"method","","The request method.",0],[11,"extensions","","Extensible storage for data passed between middleware.",0],[1,"Response","","The response representation given to `Middleware`"],[11,"body","","The body of the response.",1],[11,"headers","","The headers of the response.",1],[11,"status","","The response status-code.",1],[11,"extensions","","A TypeMap to be used as an extensible storage for data\nassociated with this Response.",1],[1,"Iron","","The primary entrance point to `Iron`, a `struct` to instantiate a new server."],[11,"chain","","Add `Middleware` to the `Iron's` `chain` so that requests\nare passed through those `Middleware`.\n`Middleware` is added to the chain with with `chain.link`.",2],[1,"FromFn","","Wrapper struct which allows bare functions to be used as `Middleware`."],[1,"StackChain","","The default `Chain` used by `Iron`.\n`StackChain` runs each `Request` through all `Middleware` in its stack."],[1,"Url","","HTTP/HTTPS URL type for Iron."],[11,"scheme","","The lower-cased scheme of the URL, typically \"http\" or \"https\".",3],[11,"host","","The host field of the URL, probably a domain.",3],[11,"port","","The connection port.",3],[11,"path","","The URL path, the resource to be accessed.",3],[11,"username","","The URL username field, from the userinfo section of the URL.",3],[11,"password","","The URL password field, from the userinfo section of the URL.",3],[11,"query","","The URL query string.",3],[11,"fragment","","The URL fragment.",3],[2,"Status","","The Status returned by `Middleware's` `enter` and `exit` methods. This indicates\nto the `Chain` whether this is a terminal `Middleware` or whether to continue\npassing the `Request` and `Response` down the `Chain's` stack."],[12,"Continue","","`Continue` indicates that this is an intermediate `Middleware` in the stack\nand the `Chain` should continue passing requests down the `Chain's`\nstack.",4],[12,"Unwind","","`Unwind` indicates that this is a terminal `Middleware`. It can be used to\nimmediately stop passing requests down the `Chain's` stack and start calling\n`exit` of all previous `Middleware`.",4],[12,"Error","","`Error` indicates that something went wrong with a reason. It behaves\nsimilarly to `Unwind`, except that it instead calls `Middleware's`\n`on_error` handler as opposed to `exit`.",4],[4,"Server","","The \"default server\", using a `StackChain`."],[6,"Middleware","","All middleware should implement `Middleware`, which allows it to be `linked`\nto a `Chain` so that it will be called for each incoming request."],[10,"enter","","`enter` is called for each `Middleware` in a `Chain` as a client request\ncomes down the stack. `Middleware` have their `enter` methods called in the order\nin which they were added to the stack, that is, FIFO. If `Middleware` need to pass data\nbetween them they should do so using `Request::extensions`.",5],[10,"exit","","`exit` is called for each `Middleware` in a `Chain` that has had its `enter`\nmethod called for this client request. A `Middleware's` `exit` method will be called\nas the stack is unwound in FILO order - i.e, `Middleware` have their `exit`\nmethods called in opposite order from which `enter` was called.",5],[10,"on_error","","`on_error` is called for each `Middleware` in a `Chain` that has had its `enter`\nmethod called for this client request if an `Error` is returned downstream.",5],[6,"Chain","","`Chains` are the backbone of `Iron`. They coordinate `Middleware`\nto ensure they are resolved and called in the right order."],[10,"dispatch","","`dispatch` will be called once per `Request` and is responsible\nfor delegating the request to the correct `Middleware` and in the correct\norder. Effectively, 99% of the work done by a `chain` is done here.",6],[9,"link","","`link` is responsible for adding new `Middleware` to the `chain's` internal\nstorage of `Middleware`. Different `chains` may implement different behavior\nfor `link`, but - ideally - `Middleware` added here will be delegated to during\n`Requests`.",6],[9,"new","","Create a new instance of `chain`.",6],[10,"new","typemap","Create a new, empty TypeMap.",7],[10,"insert","","Insert a value into the map with a specified key type.",7],[10,"find","","Find a value in the map and get a reference to it.",7],[10,"find_mut","","Find a value in the map and get a mutable reference to it.",7],[10,"contains","","Check if a key has an associated value stored in the map.",7],[10,"remove","","Remove a value from the map.",7],[10,"len","","",7],[10,"is_empty","","",7],[10,"clear","","",7],[1,"TypeMap","iron","A map keyed by types."],[6,"Plugin","","An interface for plugins that cache values between calls."],[9,"get","","Return a copy of the plugin's produced value.",8],[9,"get_ref","","Return a reference to the plugin's produced value.",8],[9,"get_mut","","Return a mutable reference to the plugin's produced value.",8]],"paths":[[1,"Request"],[1,"Response"],[1,"Iron"],[1,"Url"],[2,"Status"],[6,"Middleware"],[6,"Chain"],[1,"TypeMap"],[6,"Plugin"]]};

initSearch(searchIndex);
