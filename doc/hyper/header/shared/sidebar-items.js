initSidebarItems({"enum":[["Charset","A Mime charset.The string representation is normalised to upper case.See http://www.iana.org/assignments/character-sets/character-sets.xhtml"],["Encoding","A value to represent an encoding used in `Transfer-Encoding` or `Accept-Encoding` header."]],"fn":[["q","Convenience function to create a `Quality` from a float."],["qitem","Convinience function to wrap a value in a `QualityItem` Sets `q` to the default 1.0"]],"struct":[["CookieJar","A jar of cookies for managing a sessionExample"],["CookiePair",""],["EntityTag","An entity tag, defined in RFC7232An entity tag consists of a string enclosed by two literal double quotes. Preceding the first double quote is an optional weakness indicator, which always looks like `W/`. Examples for valid tags are `\"xyzzy\"` and `W/\"xyzzy\"`.ABNFComparisonTo check if two entity tags are equivalent in an application always use the `strong_eq` or `weak_eq` methods based on the context of the Tag. Only use `==` to check if two tags are identical.The example below shows the results for a set of entity-tag pairs and both the weak and strong comparison function results:"],["HttpDate","A `time::Time` with HTTP formatting and parsing"],["Quality","Represents a quality used in quality values.Can be created with the `q` function.Implementation notesThe quality value is defined as a number between 0 and 1 with three decimal places. This means there are 1000 possible values. Since floating point numbers are not exact and the smallest floating point data type (`f32`) consumes four bytes, hyper uses an `u16` value to store the quality internally. For performance reasons you may set quality directly to a value between 0 and 1000 e.g. `Quality(532)` matches the quality `q=0.532`.RFC7231 Section 5.3.1 gives more information on quality values in HTTP header fields."],["QualityItem","Represents an item with a quality value as defined in RFC7231."]]});