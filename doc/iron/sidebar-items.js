initSidebarItems({"enum":[["Protocol","Protocol used to serve content. Future versions of Iron may add new protocols to this enum. Thus you should not exhaustively match on its variants."]],"macro":[["iexpect!","Unwrap the given `Option` or return a `Ok(Response::new())` with the given modifier. The default modifier is `status::BadRequest."],["itry!","Like `try!()`, but wraps the error value in `IronError`. To be used in request handlers."]],"mod":[["error","Iron's error type and associated utilities."],["headers","Headers container, and common header fields."],["method","HTTP Methods"],["middleware","Iron's Middleware and Handler System"],["mime","Re-exporting the mime crate, for convenience."],["modifier","Re-exports from the Modifier crate."],["modifiers","Defines a series of convenience modifiers for editing Responses"],["prelude","A module meant to be glob imported when using Iron."],["request","Iron's HTTP Request representation and associated methods."],["response","Iron's HTTP Response representation and associated methods."],["status","Status Codes"],["typemap","Re-exports from the TypeMap crate."]],"struct":[["Headers","A map of header fields on requests and responses."],["Iron","The primary entrance point to `Iron`, a `struct` to instantiate a new server."],["Listening","A listening server, which can later be closed."],["Timeouts","A settings struct containing a set of timeouts which can be applied to a server."],["TypeMap","A map keyed by types."],["Url","HTTP/HTTPS URL type for Iron."]],"trait":[["Error","An extension to std::error::Error which provides dynamic downcasting of errors for use in highly generic contexts."],["Plugin","An interface for plugins that cache values between calls."],["Set","A trait providing the set and set_mut methods for all types."]],"type":[["IronResult","The Result alias used throughout Iron and in clients of Iron."]]});