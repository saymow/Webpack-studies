/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(2);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

describe("canary", function () {
  it("can run a test", function () {
    expect(true).toBe(true);
  });
});


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_mdPreviewer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);


describe("markdownPreviewer", () => {
  it("should exist", () => {
    expect(_src_mdPreviewer__WEBPACK_IMPORTED_MODULE_0__["default"]).toBeDefined();
  });
  it("shoud be equal", () => {
    expect(5).toBe(5);
  });
});


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var markdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var markdown__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(markdown__WEBPACK_IMPORTED_MODULE_0__);


var attachPreviewer = ($document, sourceId, previewerId) => {
  return (event) => {
    var text = $document.getElementById(sourceId).value,
      preview = $document.getElementById(previewerId);

    preview.innerHTML = markdown__WEBPACK_IMPORTED_MODULE_0__["markdown"].toHTML(text);
    event.preventDefault();
  };
};

/* harmony default export */ __webpack_exports__["default"] = ({
  attachPreviewer,
});


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// super simple module for the most common nodejs use case.
exports.markdown = __webpack_require__(5);
exports.parse = exports.markdown.toHTML;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// Released under MIT license
// Copyright (c) 2009-2010 Dominic Baggott
// Copyright (c) 2009-2010 Ash Berlin
// Copyright (c) 2011 Christoph Dorn <christoph@christophdorn.com> (http://www.christophdorn.com)

/*jshint browser:true, devel:true */

(function( expose ) {

/**
 *  class Markdown
 *
 *  Markdown processing in Javascript done right. We have very particular views
 *  on what constitutes 'right' which include:
 *
 *  - produces well-formed HTML (this means that em and strong nesting is
 *    important)
 *
 *  - has an intermediate representation to allow processing of parsed data (We
 *    in fact have two, both as [JsonML]: a markdown tree and an HTML tree).
 *
 *  - is easily extensible to add new dialects without having to rewrite the
 *    entire parsing mechanics
 *
 *  - has a good test suite
 *
 *  This implementation fulfills all of these (except that the test suite could
 *  do with expanding to automatically run all the fixtures from other Markdown
 *  implementations.)
 *
 *  ##### Intermediate Representation
 *
 *  *TODO* Talk about this :) Its JsonML, but document the node names we use.
 *
 *  [JsonML]: http://jsonml.org/ "JSON Markup Language"
 **/
var Markdown = expose.Markdown = function(dialect) {
  switch (typeof dialect) {
    case "undefined":
      this.dialect = Markdown.dialects.Gruber;
      break;
    case "object":
      this.dialect = dialect;
      break;
    default:
      if ( dialect in Markdown.dialects ) {
        this.dialect = Markdown.dialects[dialect];
      }
      else {
        throw new Error("Unknown Markdown dialect '" + String(dialect) + "'");
      }
      break;
  }
  this.em_state = [];
  this.strong_state = [];
  this.debug_indent = "";
};

/**
 *  parse( markdown, [dialect] ) -> JsonML
 *  - markdown (String): markdown string to parse
 *  - dialect (String | Dialect): the dialect to use, defaults to gruber
 *
 *  Parse `markdown` and return a markdown document as a Markdown.JsonML tree.
 **/
expose.parse = function( source, dialect ) {
  // dialect will default if undefined
  var md = new Markdown( dialect );
  return md.toTree( source );
};

/**
 *  toHTML( markdown, [dialect]  ) -> String
 *  toHTML( md_tree ) -> String
 *  - markdown (String): markdown string to parse
 *  - md_tree (Markdown.JsonML): parsed markdown tree
 *
 *  Take markdown (either as a string or as a JsonML tree) and run it through
 *  [[toHTMLTree]] then turn it into a well-formated HTML fragment.
 **/
expose.toHTML = function toHTML( source , dialect , options ) {
  var input = expose.toHTMLTree( source , dialect , options );

  return expose.renderJsonML( input );
};

/**
 *  toHTMLTree( markdown, [dialect] ) -> JsonML
 *  toHTMLTree( md_tree ) -> JsonML
 *  - markdown (String): markdown string to parse
 *  - dialect (String | Dialect): the dialect to use, defaults to gruber
 *  - md_tree (Markdown.JsonML): parsed markdown tree
 *
 *  Turn markdown into HTML, represented as a JsonML tree. If a string is given
 *  to this function, it is first parsed into a markdown tree by calling
 *  [[parse]].
 **/
expose.toHTMLTree = function toHTMLTree( input, dialect , options ) {
  // convert string input to an MD tree
  if ( typeof input ==="string" ) input = this.parse( input, dialect );

  // Now convert the MD tree to an HTML tree

  // remove references from the tree
  var attrs = extract_attr( input ),
      refs = {};

  if ( attrs && attrs.references ) {
    refs = attrs.references;
  }

  var html = convert_tree_to_html( input, refs , options );
  merge_text_nodes( html );
  return html;
};

// For Spidermonkey based engines
function mk_block_toSource() {
  return "Markdown.mk_block( " +
          uneval(this.toString()) +
          ", " +
          uneval(this.trailing) +
          ", " +
          uneval(this.lineNumber) +
          " )";
}

// node
function mk_block_inspect() {
  var util = __webpack_require__(6);
  return "Markdown.mk_block( " +
          util.inspect(this.toString()) +
          ", " +
          util.inspect(this.trailing) +
          ", " +
          util.inspect(this.lineNumber) +
          " )";

}

var mk_block = Markdown.mk_block = function(block, trail, line) {
  // Be helpful for default case in tests.
  if ( arguments.length == 1 ) trail = "\n\n";

  var s = new String(block);
  s.trailing = trail;
  // To make it clear its not just a string
  s.inspect = mk_block_inspect;
  s.toSource = mk_block_toSource;

  if ( line != undefined )
    s.lineNumber = line;

  return s;
};

function count_lines( str ) {
  var n = 0, i = -1;
  while ( ( i = str.indexOf("\n", i + 1) ) !== -1 ) n++;
  return n;
}

// Internal - split source into rough blocks
Markdown.prototype.split_blocks = function splitBlocks( input, startLine ) {
  input = input.replace(/(\r\n|\n|\r)/g, "\n");
  // [\s\S] matches _anything_ (newline or space)
  // [^] is equivalent but doesn't work in IEs.
  var re = /([\s\S]+?)($|\n#|\n(?:\s*\n|$)+)/g,
      blocks = [],
      m;

  var line_no = 1;

  if ( ( m = /^(\s*\n)/.exec(input) ) != null ) {
    // skip (but count) leading blank lines
    line_no += count_lines( m[0] );
    re.lastIndex = m[0].length;
  }

  while ( ( m = re.exec(input) ) !== null ) {
    if (m[2] == "\n#") {
      m[2] = "\n";
      re.lastIndex--;
    }
    blocks.push( mk_block( m[1], m[2], line_no ) );
    line_no += count_lines( m[0] );
  }

  return blocks;
};

/**
 *  Markdown#processBlock( block, next ) -> undefined | [ JsonML, ... ]
 *  - block (String): the block to process
 *  - next (Array): the following blocks
 *
 * Process `block` and return an array of JsonML nodes representing `block`.
 *
 * It does this by asking each block level function in the dialect to process
 * the block until one can. Succesful handling is indicated by returning an
 * array (with zero or more JsonML nodes), failure by a false value.
 *
 * Blocks handlers are responsible for calling [[Markdown#processInline]]
 * themselves as appropriate.
 *
 * If the blocks were split incorrectly or adjacent blocks need collapsing you
 * can adjust `next` in place using shift/splice etc.
 *
 * If any of this default behaviour is not right for the dialect, you can
 * define a `__call__` method on the dialect that will get invoked to handle
 * the block processing.
 */
Markdown.prototype.processBlock = function processBlock( block, next ) {
  var cbs = this.dialect.block,
      ord = cbs.__order__;

  if ( "__call__" in cbs ) {
    return cbs.__call__.call(this, block, next);
  }

  for ( var i = 0; i < ord.length; i++ ) {
    //D:this.debug( "Testing", ord[i] );
    var res = cbs[ ord[i] ].call( this, block, next );
    if ( res ) {
      //D:this.debug("  matched");
      if ( !isArray(res) || ( res.length > 0 && !( isArray(res[0]) ) ) )
        this.debug(ord[i], "didn't return a proper array");
      //D:this.debug( "" );
      return res;
    }
  }

  // Uhoh! no match! Should we throw an error?
  return [];
};

Markdown.prototype.processInline = function processInline( block ) {
  return this.dialect.inline.__call__.call( this, String( block ) );
};

/**
 *  Markdown#toTree( source ) -> JsonML
 *  - source (String): markdown source to parse
 *
 *  Parse `source` into a JsonML tree representing the markdown document.
 **/
// custom_tree means set this.tree to `custom_tree` and restore old value on return
Markdown.prototype.toTree = function toTree( source, custom_root ) {
  var blocks = source instanceof Array ? source : this.split_blocks( source );

  // Make tree a member variable so its easier to mess with in extensions
  var old_tree = this.tree;
  try {
    this.tree = custom_root || this.tree || [ "markdown" ];

    blocks:
    while ( blocks.length ) {
      var b = this.processBlock( blocks.shift(), blocks );

      // Reference blocks and the like won't return any content
      if ( !b.length ) continue blocks;

      this.tree.push.apply( this.tree, b );
    }
    return this.tree;
  }
  finally {
    if ( custom_root ) {
      this.tree = old_tree;
    }
  }
};

// Noop by default
Markdown.prototype.debug = function () {
  var args = Array.prototype.slice.call( arguments);
  args.unshift(this.debug_indent);
  if ( typeof print !== "undefined" )
      print.apply( print, args );
  if ( typeof console !== "undefined" && typeof console.log !== "undefined" )
      console.log.apply( null, args );
}

Markdown.prototype.loop_re_over_block = function( re, block, cb ) {
  // Dont use /g regexps with this
  var m,
      b = block.valueOf();

  while ( b.length && (m = re.exec(b) ) != null ) {
    b = b.substr( m[0].length );
    cb.call(this, m);
  }
  return b;
};

/**
 * Markdown.dialects
 *
 * Namespace of built-in dialects.
 **/
Markdown.dialects = {};

/**
 * Markdown.dialects.Gruber
 *
 * The default dialect that follows the rules set out by John Gruber's
 * markdown.pl as closely as possible. Well actually we follow the behaviour of
 * that script which in some places is not exactly what the syntax web page
 * says.
 **/
Markdown.dialects.Gruber = {
  block: {
    atxHeader: function atxHeader( block, next ) {
      var m = block.match( /^(#{1,6})\s*(.*?)\s*#*\s*(?:\n|$)/ );

      if ( !m ) return undefined;

      var header = [ "header", { level: m[ 1 ].length } ];
      Array.prototype.push.apply(header, this.processInline(m[ 2 ]));

      if ( m[0].length < block.length )
        next.unshift( mk_block( block.substr( m[0].length ), block.trailing, block.lineNumber + 2 ) );

      return [ header ];
    },

    setextHeader: function setextHeader( block, next ) {
      var m = block.match( /^(.*)\n([-=])\2\2+(?:\n|$)/ );

      if ( !m ) return undefined;

      var level = ( m[ 2 ] === "=" ) ? 1 : 2;
      var header = [ "header", { level : level }, m[ 1 ] ];

      if ( m[0].length < block.length )
        next.unshift( mk_block( block.substr( m[0].length ), block.trailing, block.lineNumber + 2 ) );

      return [ header ];
    },

    code: function code( block, next ) {
      // |    Foo
      // |bar
      // should be a code block followed by a paragraph. Fun
      //
      // There might also be adjacent code block to merge.

      var ret = [],
          re = /^(?: {0,3}\t| {4})(.*)\n?/,
          lines;

      // 4 spaces + content
      if ( !block.match( re ) ) return undefined;

      block_search:
      do {
        // Now pull out the rest of the lines
        var b = this.loop_re_over_block(
                  re, block.valueOf(), function( m ) { ret.push( m[1] ); } );

        if ( b.length ) {
          // Case alluded to in first comment. push it back on as a new block
          next.unshift( mk_block(b, block.trailing) );
          break block_search;
        }
        else if ( next.length ) {
          // Check the next block - it might be code too
          if ( !next[0].match( re ) ) break block_search;

          // Pull how how many blanks lines follow - minus two to account for .join
          ret.push ( block.trailing.replace(/[^\n]/g, "").substring(2) );

          block = next.shift();
        }
        else {
          break block_search;
        }
      } while ( true );

      return [ [ "code_block", ret.join("\n") ] ];
    },

    horizRule: function horizRule( block, next ) {
      // this needs to find any hr in the block to handle abutting blocks
      var m = block.match( /^(?:([\s\S]*?)\n)?[ \t]*([-_*])(?:[ \t]*\2){2,}[ \t]*(?:\n([\s\S]*))?$/ );

      if ( !m ) {
        return undefined;
      }

      var jsonml = [ [ "hr" ] ];

      // if there's a leading abutting block, process it
      if ( m[ 1 ] ) {
        jsonml.unshift.apply( jsonml, this.processBlock( m[ 1 ], [] ) );
      }

      // if there's a trailing abutting block, stick it into next
      if ( m[ 3 ] ) {
        next.unshift( mk_block( m[ 3 ] ) );
      }

      return jsonml;
    },

    // There are two types of lists. Tight and loose. Tight lists have no whitespace
    // between the items (and result in text just in the <li>) and loose lists,
    // which have an empty line between list items, resulting in (one or more)
    // paragraphs inside the <li>.
    //
    // There are all sorts weird edge cases about the original markdown.pl's
    // handling of lists:
    //
    // * Nested lists are supposed to be indented by four chars per level. But
    //   if they aren't, you can get a nested list by indenting by less than
    //   four so long as the indent doesn't match an indent of an existing list
    //   item in the 'nest stack'.
    //
    // * The type of the list (bullet or number) is controlled just by the
    //    first item at the indent. Subsequent changes are ignored unless they
    //    are for nested lists
    //
    lists: (function( ) {
      // Use a closure to hide a few variables.
      var any_list = "[*+-]|\\d+\\.",
          bullet_list = /[*+-]/,
          number_list = /\d+\./,
          // Capture leading indent as it matters for determining nested lists.
          is_list_re = new RegExp( "^( {0,3})(" + any_list + ")[ \t]+" ),
          indent_re = "(?: {0,3}\\t| {4})";

      // TODO: Cache this regexp for certain depths.
      // Create a regexp suitable for matching an li for a given stack depth
      function regex_for_depth( depth ) {

        return new RegExp(
          // m[1] = indent, m[2] = list_type
          "(?:^(" + indent_re + "{0," + depth + "} {0,3})(" + any_list + ")\\s+)|" +
          // m[3] = cont
          "(^" + indent_re + "{0," + (depth-1) + "}[ ]{0,4})"
        );
      }
      function expand_tab( input ) {
        return input.replace( / {0,3}\t/g, "    " );
      }

      // Add inline content `inline` to `li`. inline comes from processInline
      // so is an array of content
      function add(li, loose, inline, nl) {
        if ( loose ) {
          li.push( [ "para" ].concat(inline) );
          return;
        }
        // Hmmm, should this be any block level element or just paras?
        var add_to = li[li.length -1] instanceof Array && li[li.length - 1][0] == "para"
                   ? li[li.length -1]
                   : li;

        // If there is already some content in this list, add the new line in
        if ( nl && li.length > 1 ) inline.unshift(nl);

        for ( var i = 0; i < inline.length; i++ ) {
          var what = inline[i],
              is_str = typeof what == "string";
          if ( is_str && add_to.length > 1 && typeof add_to[add_to.length-1] == "string" ) {
            add_to[ add_to.length-1 ] += what;
          }
          else {
            add_to.push( what );
          }
        }
      }

      // contained means have an indent greater than the current one. On
      // *every* line in the block
      function get_contained_blocks( depth, blocks ) {

        var re = new RegExp( "^(" + indent_re + "{" + depth + "}.*?\\n?)*$" ),
            replace = new RegExp("^" + indent_re + "{" + depth + "}", "gm"),
            ret = [];

        while ( blocks.length > 0 ) {
          if ( re.exec( blocks[0] ) ) {
            var b = blocks.shift(),
                // Now remove that indent
                x = b.replace( replace, "");

            ret.push( mk_block( x, b.trailing, b.lineNumber ) );
          }
          else {
            break;
          }
        }
        return ret;
      }

      // passed to stack.forEach to turn list items up the stack into paras
      function paragraphify(s, i, stack) {
        var list = s.list;
        var last_li = list[list.length-1];

        if ( last_li[1] instanceof Array && last_li[1][0] == "para" ) {
          return;
        }
        if ( i + 1 == stack.length ) {
          // Last stack frame
          // Keep the same array, but replace the contents
          last_li.push( ["para"].concat( last_li.splice(1, last_li.length - 1) ) );
        }
        else {
          var sublist = last_li.pop();
          last_li.push( ["para"].concat( last_li.splice(1, last_li.length - 1) ), sublist );
        }
      }

      // The matcher function
      return function( block, next ) {
        var m = block.match( is_list_re );
        if ( !m ) return undefined;

        function make_list( m ) {
          var list = bullet_list.exec( m[2] )
                   ? ["bulletlist"]
                   : ["numberlist"];

          stack.push( { list: list, indent: m[1] } );
          return list;
        }


        var stack = [], // Stack of lists for nesting.
            list = make_list( m ),
            last_li,
            loose = false,
            ret = [ stack[0].list ],
            i;

        // Loop to search over block looking for inner block elements and loose lists
        loose_search:
        while ( true ) {
          // Split into lines preserving new lines at end of line
          var lines = block.split( /(?=\n)/ );

          // We have to grab all lines for a li and call processInline on them
          // once as there are some inline things that can span lines.
          var li_accumulate = "";

          // Loop over the lines in this block looking for tight lists.
          tight_search:
          for ( var line_no = 0; line_no < lines.length; line_no++ ) {
            var nl = "",
                l = lines[line_no].replace(/^\n/, function(n) { nl = n; return ""; });

            // TODO: really should cache this
            var line_re = regex_for_depth( stack.length );

            m = l.match( line_re );
            //print( "line:", uneval(l), "\nline match:", uneval(m) );

            // We have a list item
            if ( m[1] !== undefined ) {
              // Process the previous list item, if any
              if ( li_accumulate.length ) {
                add( last_li, loose, this.processInline( li_accumulate ), nl );
                // Loose mode will have been dealt with. Reset it
                loose = false;
                li_accumulate = "";
              }

              m[1] = expand_tab( m[1] );
              var wanted_depth = Math.floor(m[1].length/4)+1;
              //print( "want:", wanted_depth, "stack:", stack.length);
              if ( wanted_depth > stack.length ) {
                // Deep enough for a nested list outright
                //print ( "new nested list" );
                list = make_list( m );
                last_li.push( list );
                last_li = list[1] = [ "listitem" ];
              }
              else {
                // We aren't deep enough to be strictly a new level. This is
                // where Md.pl goes nuts. If the indent matches a level in the
                // stack, put it there, else put it one deeper then the
                // wanted_depth deserves.
                var found = false;
                for ( i = 0; i < stack.length; i++ ) {
                  if ( stack[ i ].indent != m[1] ) continue;
                  list = stack[ i ].list;
                  stack.splice( i+1, stack.length - (i+1) );
                  found = true;
                  break;
                }

                if (!found) {
                  //print("not found. l:", uneval(l));
                  wanted_depth++;
                  if ( wanted_depth <= stack.length ) {
                    stack.splice(wanted_depth, stack.length - wanted_depth);
                    //print("Desired depth now", wanted_depth, "stack:", stack.length);
                    list = stack[wanted_depth-1].list;
                    //print("list:", uneval(list) );
                  }
                  else {
                    //print ("made new stack for messy indent");
                    list = make_list(m);
                    last_li.push(list);
                  }
                }

                //print( uneval(list), "last", list === stack[stack.length-1].list );
                last_li = [ "listitem" ];
                list.push(last_li);
              } // end depth of shenegains
              nl = "";
            }

            // Add content
            if ( l.length > m[0].length ) {
              li_accumulate += nl + l.substr( m[0].length );
            }
          } // tight_search

          if ( li_accumulate.length ) {
            add( last_li, loose, this.processInline( li_accumulate ), nl );
            // Loose mode will have been dealt with. Reset it
            loose = false;
            li_accumulate = "";
          }

          // Look at the next block - we might have a loose list. Or an extra
          // paragraph for the current li
          var contained = get_contained_blocks( stack.length, next );

          // Deal with code blocks or properly nested lists
          if ( contained.length > 0 ) {
            // Make sure all listitems up the stack are paragraphs
            forEach( stack, paragraphify, this);

            last_li.push.apply( last_li, this.toTree( contained, [] ) );
          }

          var next_block = next[0] && next[0].valueOf() || "";

          if ( next_block.match(is_list_re) || next_block.match( /^ / ) ) {
            block = next.shift();

            // Check for an HR following a list: features/lists/hr_abutting
            var hr = this.dialect.block.horizRule( block, next );

            if ( hr ) {
              ret.push.apply(ret, hr);
              break;
            }

            // Make sure all listitems up the stack are paragraphs
            forEach( stack, paragraphify, this);

            loose = true;
            continue loose_search;
          }
          break;
        } // loose_search

        return ret;
      };
    })(),

    blockquote: function blockquote( block, next ) {
      if ( !block.match( /^>/m ) )
        return undefined;

      var jsonml = [];

      // separate out the leading abutting block, if any. I.e. in this case:
      //
      //  a
      //  > b
      //
      if ( block[ 0 ] != ">" ) {
        var lines = block.split( /\n/ ),
            prev = [],
            line_no = block.lineNumber;

        // keep shifting lines until you find a crotchet
        while ( lines.length && lines[ 0 ][ 0 ] != ">" ) {
            prev.push( lines.shift() );
            line_no++;
        }

        var abutting = mk_block( prev.join( "\n" ), "\n", block.lineNumber );
        jsonml.push.apply( jsonml, this.processBlock( abutting, [] ) );
        // reassemble new block of just block quotes!
        block = mk_block( lines.join( "\n" ), block.trailing, line_no );
      }


      // if the next block is also a blockquote merge it in
      while ( next.length && next[ 0 ][ 0 ] == ">" ) {
        var b = next.shift();
        block = mk_block( block + block.trailing + b, b.trailing, block.lineNumber );
      }

      // Strip off the leading "> " and re-process as a block.
      var input = block.replace( /^> ?/gm, "" ),
          old_tree = this.tree,
          processedBlock = this.toTree( input, [ "blockquote" ] ),
          attr = extract_attr( processedBlock );

      // If any link references were found get rid of them
      if ( attr && attr.references ) {
        delete attr.references;
        // And then remove the attribute object if it's empty
        if ( isEmpty( attr ) ) {
          processedBlock.splice( 1, 1 );
        }
      }

      jsonml.push( processedBlock );
      return jsonml;
    },

    referenceDefn: function referenceDefn( block, next) {
      var re = /^\s*\[(.*?)\]:\s*(\S+)(?:\s+(?:(['"])(.*?)\3|\((.*?)\)))?\n?/;
      // interesting matches are [ , ref_id, url, , title, title ]

      if ( !block.match(re) )
        return undefined;

      // make an attribute node if it doesn't exist
      if ( !extract_attr( this.tree ) ) {
        this.tree.splice( 1, 0, {} );
      }

      var attrs = extract_attr( this.tree );

      // make a references hash if it doesn't exist
      if ( attrs.references === undefined ) {
        attrs.references = {};
      }

      var b = this.loop_re_over_block(re, block, function( m ) {

        if ( m[2] && m[2][0] == "<" && m[2][m[2].length-1] == ">" )
          m[2] = m[2].substring( 1, m[2].length - 1 );

        var ref = attrs.references[ m[1].toLowerCase() ] = {
          href: m[2]
        };

        if ( m[4] !== undefined )
          ref.title = m[4];
        else if ( m[5] !== undefined )
          ref.title = m[5];

      } );

      if ( b.length )
        next.unshift( mk_block( b, block.trailing ) );

      return [];
    },

    para: function para( block, next ) {
      // everything's a para!
      return [ ["para"].concat( this.processInline( block ) ) ];
    }
  }
};

Markdown.dialects.Gruber.inline = {

    __oneElement__: function oneElement( text, patterns_or_re, previous_nodes ) {
      var m,
          res,
          lastIndex = 0;

      patterns_or_re = patterns_or_re || this.dialect.inline.__patterns__;
      var re = new RegExp( "([\\s\\S]*?)(" + (patterns_or_re.source || patterns_or_re) + ")" );

      m = re.exec( text );
      if (!m) {
        // Just boring text
        return [ text.length, text ];
      }
      else if ( m[1] ) {
        // Some un-interesting text matched. Return that first
        return [ m[1].length, m[1] ];
      }

      var res;
      if ( m[2] in this.dialect.inline ) {
        res = this.dialect.inline[ m[2] ].call(
                  this,
                  text.substr( m.index ), m, previous_nodes || [] );
      }
      // Default for now to make dev easier. just slurp special and output it.
      res = res || [ m[2].length, m[2] ];
      return res;
    },

    __call__: function inline( text, patterns ) {

      var out = [],
          res;

      function add(x) {
        //D:self.debug("  adding output", uneval(x));
        if ( typeof x == "string" && typeof out[out.length-1] == "string" )
          out[ out.length-1 ] += x;
        else
          out.push(x);
      }

      while ( text.length > 0 ) {
        res = this.dialect.inline.__oneElement__.call(this, text, patterns, out );
        text = text.substr( res.shift() );
        forEach(res, add )
      }

      return out;
    },

    // These characters are intersting elsewhere, so have rules for them so that
    // chunks of plain text blocks don't include them
    "]": function () {},
    "}": function () {},

    __escape__ : /^\\[\\`\*_{}\[\]()#\+.!\-]/,

    "\\": function escaped( text ) {
      // [ length of input processed, node/children to add... ]
      // Only esacape: \ ` * _ { } [ ] ( ) # * + - . !
      if ( this.dialect.inline.__escape__.exec( text ) )
        return [ 2, text.charAt( 1 ) ];
      else
        // Not an esacpe
        return [ 1, "\\" ];
    },

    "![": function image( text ) {

      // Unlike images, alt text is plain text only. no other elements are
      // allowed in there

      // ![Alt text](/path/to/img.jpg "Optional title")
      //      1          2            3       4         <--- captures
      var m = text.match( /^!\[(.*?)\][ \t]*\([ \t]*([^")]*?)(?:[ \t]+(["'])(.*?)\3)?[ \t]*\)/ );

      if ( m ) {
        if ( m[2] && m[2][0] == "<" && m[2][m[2].length-1] == ">" )
          m[2] = m[2].substring( 1, m[2].length - 1 );

        m[2] = this.dialect.inline.__call__.call( this, m[2], /\\/ )[0];

        var attrs = { alt: m[1], href: m[2] || "" };
        if ( m[4] !== undefined)
          attrs.title = m[4];

        return [ m[0].length, [ "img", attrs ] ];
      }

      // ![Alt text][id]
      m = text.match( /^!\[(.*?)\][ \t]*\[(.*?)\]/ );

      if ( m ) {
        // We can't check if the reference is known here as it likely wont be
        // found till after. Check it in md tree->hmtl tree conversion
        return [ m[0].length, [ "img_ref", { alt: m[1], ref: m[2].toLowerCase(), original: m[0] } ] ];
      }

      // Just consume the '!['
      return [ 2, "![" ];
    },

    "[": function link( text ) {

      var orig = String(text);
      // Inline content is possible inside `link text`
      var res = Markdown.DialectHelpers.inline_until_char.call( this, text.substr(1), "]" );

      // No closing ']' found. Just consume the [
      if ( !res ) return [ 1, "[" ];

      var consumed = 1 + res[ 0 ],
          children = res[ 1 ],
          link,
          attrs;

      // At this point the first [...] has been parsed. See what follows to find
      // out which kind of link we are (reference or direct url)
      text = text.substr( consumed );

      // [link text](/path/to/img.jpg "Optional title")
      //                 1            2       3         <--- captures
      // This will capture up to the last paren in the block. We then pull
      // back based on if there a matching ones in the url
      //    ([here](/url/(test))
      // The parens have to be balanced
      var m = text.match( /^\s*\([ \t]*([^"']*)(?:[ \t]+(["'])(.*?)\2)?[ \t]*\)/ );
      if ( m ) {
        var url = m[1];
        consumed += m[0].length;

        if ( url && url[0] == "<" && url[url.length-1] == ">" )
          url = url.substring( 1, url.length - 1 );

        // If there is a title we don't have to worry about parens in the url
        if ( !m[3] ) {
          var open_parens = 1; // One open that isn't in the capture
          for ( var len = 0; len < url.length; len++ ) {
            switch ( url[len] ) {
            case "(":
              open_parens++;
              break;
            case ")":
              if ( --open_parens == 0) {
                consumed -= url.length - len;
                url = url.substring(0, len);
              }
              break;
            }
          }
        }

        // Process escapes only
        url = this.dialect.inline.__call__.call( this, url, /\\/ )[0];

        attrs = { href: url || "" };
        if ( m[3] !== undefined)
          attrs.title = m[3];

        link = [ "link", attrs ].concat( children );
        return [ consumed, link ];
      }

      // [Alt text][id]
      // [Alt text] [id]
      m = text.match( /^\s*\[(.*?)\]/ );

      if ( m ) {

        consumed += m[ 0 ].length;

        // [links][] uses links as its reference
        attrs = { ref: ( m[ 1 ] || String(children) ).toLowerCase(),  original: orig.substr( 0, consumed ) };

        link = [ "link_ref", attrs ].concat( children );

        // We can't check if the reference is known here as it likely wont be
        // found till after. Check it in md tree->hmtl tree conversion.
        // Store the original so that conversion can revert if the ref isn't found.
        return [ consumed, link ];
      }

      // [id]
      // Only if id is plain (no formatting.)
      if ( children.length == 1 && typeof children[0] == "string" ) {

        attrs = { ref: children[0].toLowerCase(),  original: orig.substr( 0, consumed ) };
        link = [ "link_ref", attrs, children[0] ];
        return [ consumed, link ];
      }

      // Just consume the "["
      return [ 1, "[" ];
    },


    "<": function autoLink( text ) {
      var m;

      if ( ( m = text.match( /^<(?:((https?|ftp|mailto):[^>]+)|(.*?@.*?\.[a-zA-Z]+))>/ ) ) != null ) {
        if ( m[3] ) {
          return [ m[0].length, [ "link", { href: "mailto:" + m[3] }, m[3] ] ];

        }
        else if ( m[2] == "mailto" ) {
          return [ m[0].length, [ "link", { href: m[1] }, m[1].substr("mailto:".length ) ] ];
        }
        else
          return [ m[0].length, [ "link", { href: m[1] }, m[1] ] ];
      }

      return [ 1, "<" ];
    },

    "`": function inlineCode( text ) {
      // Inline code block. as many backticks as you like to start it
      // Always skip over the opening ticks.
      var m = text.match( /(`+)(([\s\S]*?)\1)/ );

      if ( m && m[2] )
        return [ m[1].length + m[2].length, [ "inlinecode", m[3] ] ];
      else {
        // TODO: No matching end code found - warn!
        return [ 1, "`" ];
      }
    },

    "  \n": function lineBreak( text ) {
      return [ 3, [ "linebreak" ] ];
    }

};

// Meta Helper/generator method for em and strong handling
function strong_em( tag, md ) {

  var state_slot = tag + "_state",
      other_slot = tag == "strong" ? "em_state" : "strong_state";

  function CloseTag(len) {
    this.len_after = len;
    this.name = "close_" + md;
  }

  return function ( text, orig_match ) {

    if ( this[state_slot][0] == md ) {
      // Most recent em is of this type
      //D:this.debug("closing", md);
      this[state_slot].shift();

      // "Consume" everything to go back to the recrusion in the else-block below
      return[ text.length, new CloseTag(text.length-md.length) ];
    }
    else {
      // Store a clone of the em/strong states
      var other = this[other_slot].slice(),
          state = this[state_slot].slice();

      this[state_slot].unshift(md);

      //D:this.debug_indent += "  ";

      // Recurse
      var res = this.processInline( text.substr( md.length ) );
      //D:this.debug_indent = this.debug_indent.substr(2);

      var last = res[res.length - 1];

      //D:this.debug("processInline from", tag + ": ", uneval( res ) );

      var check = this[state_slot].shift();
      if ( last instanceof CloseTag ) {
        res.pop();
        // We matched! Huzzah.
        var consumed = text.length - last.len_after;
        return [ consumed, [ tag ].concat(res) ];
      }
      else {
        // Restore the state of the other kind. We might have mistakenly closed it.
        this[other_slot] = other;
        this[state_slot] = state;

        // We can't reuse the processed result as it could have wrong parsing contexts in it.
        return [ md.length, md ];
      }
    }
  }; // End returned function
}

Markdown.dialects.Gruber.inline["**"] = strong_em("strong", "**");
Markdown.dialects.Gruber.inline["__"] = strong_em("strong", "__");
Markdown.dialects.Gruber.inline["*"]  = strong_em("em", "*");
Markdown.dialects.Gruber.inline["_"]  = strong_em("em", "_");


// Build default order from insertion order.
Markdown.buildBlockOrder = function(d) {
  var ord = [];
  for ( var i in d ) {
    if ( i == "__order__" || i == "__call__" ) continue;
    ord.push( i );
  }
  d.__order__ = ord;
};

// Build patterns for inline matcher
Markdown.buildInlinePatterns = function(d) {
  var patterns = [];

  for ( var i in d ) {
    // __foo__ is reserved and not a pattern
    if ( i.match( /^__.*__$/) ) continue;
    var l = i.replace( /([\\.*+?|()\[\]{}])/g, "\\$1" )
             .replace( /\n/, "\\n" );
    patterns.push( i.length == 1 ? l : "(?:" + l + ")" );
  }

  patterns = patterns.join("|");
  d.__patterns__ = patterns;
  //print("patterns:", uneval( patterns ) );

  var fn = d.__call__;
  d.__call__ = function(text, pattern) {
    if ( pattern != undefined ) {
      return fn.call(this, text, pattern);
    }
    else
    {
      return fn.call(this, text, patterns);
    }
  };
};

Markdown.DialectHelpers = {};
Markdown.DialectHelpers.inline_until_char = function( text, want ) {
  var consumed = 0,
      nodes = [];

  while ( true ) {
    if ( text.charAt( consumed ) == want ) {
      // Found the character we were looking for
      consumed++;
      return [ consumed, nodes ];
    }

    if ( consumed >= text.length ) {
      // No closing char found. Abort.
      return null;
    }

    var res = this.dialect.inline.__oneElement__.call(this, text.substr( consumed ) );
    consumed += res[ 0 ];
    // Add any returned nodes.
    nodes.push.apply( nodes, res.slice( 1 ) );
  }
}

// Helper function to make sub-classing a dialect easier
Markdown.subclassDialect = function( d ) {
  function Block() {}
  Block.prototype = d.block;
  function Inline() {}
  Inline.prototype = d.inline;

  return { block: new Block(), inline: new Inline() };
};

Markdown.buildBlockOrder ( Markdown.dialects.Gruber.block );
Markdown.buildInlinePatterns( Markdown.dialects.Gruber.inline );

Markdown.dialects.Maruku = Markdown.subclassDialect( Markdown.dialects.Gruber );

Markdown.dialects.Maruku.processMetaHash = function processMetaHash( meta_string ) {
  var meta = split_meta_hash( meta_string ),
      attr = {};

  for ( var i = 0; i < meta.length; ++i ) {
    // id: #foo
    if ( /^#/.test( meta[ i ] ) ) {
      attr.id = meta[ i ].substring( 1 );
    }
    // class: .foo
    else if ( /^\./.test( meta[ i ] ) ) {
      // if class already exists, append the new one
      if ( attr["class"] ) {
        attr["class"] = attr["class"] + meta[ i ].replace( /./, " " );
      }
      else {
        attr["class"] = meta[ i ].substring( 1 );
      }
    }
    // attribute: foo=bar
    else if ( /\=/.test( meta[ i ] ) ) {
      var s = meta[ i ].split( /\=/ );
      attr[ s[ 0 ] ] = s[ 1 ];
    }
  }

  return attr;
}

function split_meta_hash( meta_string ) {
  var meta = meta_string.split( "" ),
      parts = [ "" ],
      in_quotes = false;

  while ( meta.length ) {
    var letter = meta.shift();
    switch ( letter ) {
      case " " :
        // if we're in a quoted section, keep it
        if ( in_quotes ) {
          parts[ parts.length - 1 ] += letter;
        }
        // otherwise make a new part
        else {
          parts.push( "" );
        }
        break;
      case "'" :
      case '"' :
        // reverse the quotes and move straight on
        in_quotes = !in_quotes;
        break;
      case "\\" :
        // shift off the next letter to be used straight away.
        // it was escaped so we'll keep it whatever it is
        letter = meta.shift();
      default :
        parts[ parts.length - 1 ] += letter;
        break;
    }
  }

  return parts;
}

Markdown.dialects.Maruku.block.document_meta = function document_meta( block, next ) {
  // we're only interested in the first block
  if ( block.lineNumber > 1 ) return undefined;

  // document_meta blocks consist of one or more lines of `Key: Value\n`
  if ( ! block.match( /^(?:\w+:.*\n)*\w+:.*$/ ) ) return undefined;

  // make an attribute node if it doesn't exist
  if ( !extract_attr( this.tree ) ) {
    this.tree.splice( 1, 0, {} );
  }

  var pairs = block.split( /\n/ );
  for ( p in pairs ) {
    var m = pairs[ p ].match( /(\w+):\s*(.*)$/ ),
        key = m[ 1 ].toLowerCase(),
        value = m[ 2 ];

    this.tree[ 1 ][ key ] = value;
  }

  // document_meta produces no content!
  return [];
};

Markdown.dialects.Maruku.block.block_meta = function block_meta( block, next ) {
  // check if the last line of the block is an meta hash
  var m = block.match( /(^|\n) {0,3}\{:\s*((?:\\\}|[^\}])*)\s*\}$/ );
  if ( !m ) return undefined;

  // process the meta hash
  var attr = this.dialect.processMetaHash( m[ 2 ] );

  var hash;

  // if we matched ^ then we need to apply meta to the previous block
  if ( m[ 1 ] === "" ) {
    var node = this.tree[ this.tree.length - 1 ];
    hash = extract_attr( node );

    // if the node is a string (rather than JsonML), bail
    if ( typeof node === "string" ) return undefined;

    // create the attribute hash if it doesn't exist
    if ( !hash ) {
      hash = {};
      node.splice( 1, 0, hash );
    }

    // add the attributes in
    for ( a in attr ) {
      hash[ a ] = attr[ a ];
    }

    // return nothing so the meta hash is removed
    return [];
  }

  // pull the meta hash off the block and process what's left
  var b = block.replace( /\n.*$/, "" ),
      result = this.processBlock( b, [] );

  // get or make the attributes hash
  hash = extract_attr( result[ 0 ] );
  if ( !hash ) {
    hash = {};
    result[ 0 ].splice( 1, 0, hash );
  }

  // attach the attributes to the block
  for ( a in attr ) {
    hash[ a ] = attr[ a ];
  }

  return result;
};

Markdown.dialects.Maruku.block.definition_list = function definition_list( block, next ) {
  // one or more terms followed by one or more definitions, in a single block
  var tight = /^((?:[^\s:].*\n)+):\s+([\s\S]+)$/,
      list = [ "dl" ],
      i, m;

  // see if we're dealing with a tight or loose block
  if ( ( m = block.match( tight ) ) ) {
    // pull subsequent tight DL blocks out of `next`
    var blocks = [ block ];
    while ( next.length && tight.exec( next[ 0 ] ) ) {
      blocks.push( next.shift() );
    }

    for ( var b = 0; b < blocks.length; ++b ) {
      var m = blocks[ b ].match( tight ),
          terms = m[ 1 ].replace( /\n$/, "" ).split( /\n/ ),
          defns = m[ 2 ].split( /\n:\s+/ );

      // print( uneval( m ) );

      for ( i = 0; i < terms.length; ++i ) {
        list.push( [ "dt", terms[ i ] ] );
      }

      for ( i = 0; i < defns.length; ++i ) {
        // run inline processing over the definition
        list.push( [ "dd" ].concat( this.processInline( defns[ i ].replace( /(\n)\s+/, "$1" ) ) ) );
      }
    }
  }
  else {
    return undefined;
  }

  return [ list ];
};

// splits on unescaped instances of @ch. If @ch is not a character the result
// can be unpredictable

Markdown.dialects.Maruku.block.table = function table (block, next) {

    var _split_on_unescaped = function(s, ch) {
        ch = ch || '\\s';
        if (ch.match(/^[\\|\[\]{}?*.+^$]$/)) { ch = '\\' + ch; }
        var res = [ ],
            r = new RegExp('^((?:\\\\.|[^\\\\' + ch + '])*)' + ch + '(.*)'),
            m;
        while(m = s.match(r)) {
            res.push(m[1]);
            s = m[2];
        }
        res.push(s);
        return res;
    }

    var leading_pipe = /^ {0,3}\|(.+)\n {0,3}\|\s*([\-:]+[\-| :]*)\n((?:\s*\|.*(?:\n|$))*)(?=\n|$)/,
        // find at least an unescaped pipe in each line
        no_leading_pipe = /^ {0,3}(\S(?:\\.|[^\\|])*\|.*)\n {0,3}([\-:]+\s*\|[\-| :]*)\n((?:(?:\\.|[^\\|])*\|.*(?:\n|$))*)(?=\n|$)/,
        i, m;
    if (m = block.match(leading_pipe)) {
        // remove leading pipes in contents
        // (header and horizontal rule already have the leading pipe left out)
        m[3] = m[3].replace(/^\s*\|/gm, '');
    } else if (! ( m = block.match(no_leading_pipe))) {
        return undefined;
    }

    var table = [ "table", [ "thead", [ "tr" ] ], [ "tbody" ] ];

    // remove trailing pipes, then split on pipes
    // (no escaped pipes are allowed in horizontal rule)
    m[2] = m[2].replace(/\|\s*$/, '').split('|');

    // process alignment
    var html_attrs = [ ];
    forEach (m[2], function (s) {
        if (s.match(/^\s*-+:\s*$/))       html_attrs.push({align: "right"});
        else if (s.match(/^\s*:-+\s*$/))  html_attrs.push({align: "left"});
        else if (s.match(/^\s*:-+:\s*$/)) html_attrs.push({align: "center"});
        else                              html_attrs.push({});
    });

    // now for the header, avoid escaped pipes
    m[1] = _split_on_unescaped(m[1].replace(/\|\s*$/, ''), '|');
    for (i = 0; i < m[1].length; i++) {
        table[1][1].push(['th', html_attrs[i] || {}].concat(
            this.processInline(m[1][i].trim())));
    }

    // now for body contents
    forEach (m[3].replace(/\|\s*$/mg, '').split('\n'), function (row) {
        var html_row = ['tr'];
        row = _split_on_unescaped(row, '|');
        for (i = 0; i < row.length; i++) {
            html_row.push(['td', html_attrs[i] || {}].concat(this.processInline(row[i].trim())));
        }
        table[2].push(html_row);
    }, this);

    return [table];
}

Markdown.dialects.Maruku.inline[ "{:" ] = function inline_meta( text, matches, out ) {
  if ( !out.length ) {
    return [ 2, "{:" ];
  }

  // get the preceeding element
  var before = out[ out.length - 1 ];

  if ( typeof before === "string" ) {
    return [ 2, "{:" ];
  }

  // match a meta hash
  var m = text.match( /^\{:\s*((?:\\\}|[^\}])*)\s*\}/ );

  // no match, false alarm
  if ( !m ) {
    return [ 2, "{:" ];
  }

  // attach the attributes to the preceeding element
  var meta = this.dialect.processMetaHash( m[ 1 ] ),
      attr = extract_attr( before );

  if ( !attr ) {
    attr = {};
    before.splice( 1, 0, attr );
  }

  for ( var k in meta ) {
    attr[ k ] = meta[ k ];
  }

  // cut out the string and replace it with nothing
  return [ m[ 0 ].length, "" ];
};

Markdown.dialects.Maruku.inline.__escape__ = /^\\[\\`\*_{}\[\]()#\+.!\-|:]/;

Markdown.buildBlockOrder ( Markdown.dialects.Maruku.block );
Markdown.buildInlinePatterns( Markdown.dialects.Maruku.inline );

var isArray = Array.isArray || function(obj) {
  return Object.prototype.toString.call(obj) == "[object Array]";
};

var forEach;
// Don't mess with Array.prototype. Its not friendly
if ( Array.prototype.forEach ) {
  forEach = function( arr, cb, thisp ) {
    return arr.forEach( cb, thisp );
  };
}
else {
  forEach = function(arr, cb, thisp) {
    for (var i = 0; i < arr.length; i++) {
      cb.call(thisp || arr, arr[i], i, arr);
    }
  }
}

var isEmpty = function( obj ) {
  for ( var key in obj ) {
    if ( hasOwnProperty.call( obj, key ) ) {
      return false;
    }
  }

  return true;
}

function extract_attr( jsonml ) {
  return isArray(jsonml)
      && jsonml.length > 1
      && typeof jsonml[ 1 ] === "object"
      && !( isArray(jsonml[ 1 ]) )
      ? jsonml[ 1 ]
      : undefined;
}



/**
 *  renderJsonML( jsonml[, options] ) -> String
 *  - jsonml (Array): JsonML array to render to XML
 *  - options (Object): options
 *
 *  Converts the given JsonML into well-formed XML.
 *
 *  The options currently understood are:
 *
 *  - root (Boolean): wether or not the root node should be included in the
 *    output, or just its children. The default `false` is to not include the
 *    root itself.
 */
expose.renderJsonML = function( jsonml, options ) {
  options = options || {};
  // include the root element in the rendered output?
  options.root = options.root || false;

  var content = [];

  if ( options.root ) {
    content.push( render_tree( jsonml ) );
  }
  else {
    jsonml.shift(); // get rid of the tag
    if ( jsonml.length && typeof jsonml[ 0 ] === "object" && !( jsonml[ 0 ] instanceof Array ) ) {
      jsonml.shift(); // get rid of the attributes
    }

    while ( jsonml.length ) {
      content.push( render_tree( jsonml.shift() ) );
    }
  }

  return content.join( "\n\n" );
};

function escapeHTML( text ) {
  return text.replace( /&/g, "&amp;" )
             .replace( /</g, "&lt;" )
             .replace( />/g, "&gt;" )
             .replace( /"/g, "&quot;" )
             .replace( /'/g, "&#39;" );
}

function render_tree( jsonml ) {
  // basic case
  if ( typeof jsonml === "string" ) {
    return escapeHTML( jsonml );
  }

  var tag = jsonml.shift(),
      attributes = {},
      content = [];

  if ( jsonml.length && typeof jsonml[ 0 ] === "object" && !( jsonml[ 0 ] instanceof Array ) ) {
    attributes = jsonml.shift();
  }

  while ( jsonml.length ) {
    content.push( render_tree( jsonml.shift() ) );
  }

  var tag_attrs = "";
  for ( var a in attributes ) {
    tag_attrs += " " + a + '="' + escapeHTML( attributes[ a ] ) + '"';
  }

  // be careful about adding whitespace here for inline elements
  if ( tag == "img" || tag == "br" || tag == "hr" ) {
    return "<"+ tag + tag_attrs + "/>";
  }
  else {
    return "<"+ tag + tag_attrs + ">" + content.join( "" ) + "</" + tag + ">";
  }
}

function convert_tree_to_html( tree, references, options ) {
  var i;
  options = options || {};

  // shallow clone
  var jsonml = tree.slice( 0 );

  if ( typeof options.preprocessTreeNode === "function" ) {
      jsonml = options.preprocessTreeNode(jsonml, references);
  }

  // Clone attributes if they exist
  var attrs = extract_attr( jsonml );
  if ( attrs ) {
    jsonml[ 1 ] = {};
    for ( i in attrs ) {
      jsonml[ 1 ][ i ] = attrs[ i ];
    }
    attrs = jsonml[ 1 ];
  }

  // basic case
  if ( typeof jsonml === "string" ) {
    return jsonml;
  }

  // convert this node
  switch ( jsonml[ 0 ] ) {
    case "header":
      jsonml[ 0 ] = "h" + jsonml[ 1 ].level;
      delete jsonml[ 1 ].level;
      break;
    case "bulletlist":
      jsonml[ 0 ] = "ul";
      break;
    case "numberlist":
      jsonml[ 0 ] = "ol";
      break;
    case "listitem":
      jsonml[ 0 ] = "li";
      break;
    case "para":
      jsonml[ 0 ] = "p";
      break;
    case "markdown":
      jsonml[ 0 ] = "html";
      if ( attrs ) delete attrs.references;
      break;
    case "code_block":
      jsonml[ 0 ] = "pre";
      i = attrs ? 2 : 1;
      var code = [ "code" ];
      code.push.apply( code, jsonml.splice( i, jsonml.length - i ) );
      jsonml[ i ] = code;
      break;
    case "inlinecode":
      jsonml[ 0 ] = "code";
      break;
    case "img":
      jsonml[ 1 ].src = jsonml[ 1 ].href;
      delete jsonml[ 1 ].href;
      break;
    case "linebreak":
      jsonml[ 0 ] = "br";
    break;
    case "link":
      jsonml[ 0 ] = "a";
      break;
    case "link_ref":
      jsonml[ 0 ] = "a";

      // grab this ref and clean up the attribute node
      var ref = references[ attrs.ref ];

      // if the reference exists, make the link
      if ( ref ) {
        delete attrs.ref;

        // add in the href and title, if present
        attrs.href = ref.href;
        if ( ref.title ) {
          attrs.title = ref.title;
        }

        // get rid of the unneeded original text
        delete attrs.original;
      }
      // the reference doesn't exist, so revert to plain text
      else {
        return attrs.original;
      }
      break;
    case "img_ref":
      jsonml[ 0 ] = "img";

      // grab this ref and clean up the attribute node
      var ref = references[ attrs.ref ];

      // if the reference exists, make the link
      if ( ref ) {
        delete attrs.ref;

        // add in the href and title, if present
        attrs.src = ref.href;
        if ( ref.title ) {
          attrs.title = ref.title;
        }

        // get rid of the unneeded original text
        delete attrs.original;
      }
      // the reference doesn't exist, so revert to plain text
      else {
        return attrs.original;
      }
      break;
  }

  // convert all the children
  i = 1;

  // deal with the attribute node, if it exists
  if ( attrs ) {
    // if there are keys, skip over it
    for ( var key in jsonml[ 1 ] ) {
        i = 2;
        break;
    }
    // if there aren't, remove it
    if ( i === 1 ) {
      jsonml.splice( i, 1 );
    }
  }

  for ( ; i < jsonml.length; ++i ) {
    jsonml[ i ] = convert_tree_to_html( jsonml[ i ], references, options );
  }

  return jsonml;
}


// merges adjacent text nodes into a single node
function merge_text_nodes( jsonml ) {
  // skip the tag name and attribute hash
  var i = extract_attr( jsonml ) ? 2 : 1;

  while ( i < jsonml.length ) {
    // if it's a string check the next item too
    if ( typeof jsonml[ i ] === "string" ) {
      if ( i + 1 < jsonml.length && typeof jsonml[ i + 1 ] === "string" ) {
        // merge the second string into the first and remove it
        jsonml[ i ] += jsonml.splice( i + 1, 1 )[ 0 ];
      }
      else {
        ++i;
      }
    }
    // if it's not a string recurse
    else {
      merge_text_nodes( jsonml[ i ] );
      ++i;
    }
  }
}

} )( (function() {
  if ( false ) {}
  else {
    return exports;
  }
} )() );


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors ||
  function getOwnPropertyDescriptors(obj) {
    var keys = Object.keys(obj);
    var descriptors = {};
    for (var i = 0; i < keys.length; i++) {
      descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
    }
    return descriptors;
  };

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  if (typeof process !== 'undefined' && process.noDeprecation === true) {
    return fn;
  }

  // Allow for deprecating things in the process of starting up.
  if (typeof process === 'undefined') {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__(8);

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__(9);

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

var kCustomPromisifiedSymbol = typeof Symbol !== 'undefined' ? Symbol('util.promisify.custom') : undefined;

exports.promisify = function promisify(original) {
  if (typeof original !== 'function')
    throw new TypeError('The "original" argument must be of type Function');

  if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
    var fn = original[kCustomPromisifiedSymbol];
    if (typeof fn !== 'function') {
      throw new TypeError('The "util.promisify.custom" argument must be of type Function');
    }
    Object.defineProperty(fn, kCustomPromisifiedSymbol, {
      value: fn, enumerable: false, writable: false, configurable: true
    });
    return fn;
  }

  function fn() {
    var promiseResolve, promiseReject;
    var promise = new Promise(function (resolve, reject) {
      promiseResolve = resolve;
      promiseReject = reject;
    });

    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }
    args.push(function (err, value) {
      if (err) {
        promiseReject(err);
      } else {
        promiseResolve(value);
      }
    });

    try {
      original.apply(this, args);
    } catch (err) {
      promiseReject(err);
    }

    return promise;
  }

  Object.setPrototypeOf(fn, Object.getPrototypeOf(original));

  if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {
    value: fn, enumerable: false, writable: false, configurable: true
  });
  return Object.defineProperties(
    fn,
    getOwnPropertyDescriptors(original)
  );
}

exports.promisify.custom = kCustomPromisifiedSymbol

function callbackifyOnRejected(reason, cb) {
  // `!reason` guard inspired by bluebird (Ref: https://goo.gl/t5IS6M).
  // Because `null` is a special error value in callbacks which means "no error
  // occurred", we error-wrap so the callback consumer can distinguish between
  // "the promise rejected with null" or "the promise fulfilled with undefined".
  if (!reason) {
    var newReason = new Error('Promise was rejected with a falsy value');
    newReason.reason = reason;
    reason = newReason;
  }
  return cb(reason);
}

function callbackify(original) {
  if (typeof original !== 'function') {
    throw new TypeError('The "original" argument must be of type Function');
  }

  // We DO NOT return the promise as it gives the user a false sense that
  // the promise is actually somehow related to the callback's execution
  // and that the callback throwing will reject the promise.
  function callbackified() {
    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }

    var maybeCb = args.pop();
    if (typeof maybeCb !== 'function') {
      throw new TypeError('The last argument must be of type Function');
    }
    var self = this;
    var cb = function() {
      return maybeCb.apply(self, arguments);
    };
    // In true node style we process the callback on `nextTick` with all the
    // implications (stack, `uncaughtException`, `async_hooks`)
    original.apply(this, args)
      .then(function(ret) { process.nextTick(cb, null, ret) },
            function(rej) { process.nextTick(callbackifyOnRejected, rej, cb) });
  }

  Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
  Object.defineProperties(callbackified,
                          getOwnPropertyDescriptors(original));
  return callbackified;
}
exports.callbackify = callbackify;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)))

/***/ }),
/* 7 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),
/* 9 */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vdGVzdC9jYW5hcnkudGVzdC5qcyIsIndlYnBhY2s6Ly8vLi90ZXN0L21kUHJldmlld2VyLnRlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21kUHJldmlld2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tYXJrZG93bi9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21hcmtkb3duL2xpYi9tYXJrZG93bi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXRpbC91dGlsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V0aWwvc3VwcG9ydC9pc0J1ZmZlckJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V0aWwvbm9kZV9tb2R1bGVzL2luaGVyaXRzL2luaGVyaXRzX2Jyb3dzZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOzs7Ozs7OztBQ0pEO0FBQUE7QUFBNkM7O0FBRTdDO0FBQ0E7QUFDQSxXQUFXLHdEQUFXO0FBQ3RCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7Ozs7Ozs7O0FDVEQ7QUFBQTtBQUFBO0FBQW9DOztBQUVwQztBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0IsaURBQVE7QUFDaEM7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQSxDQUFDLEVBQUM7Ozs7Ozs7QUNkRjtBQUNBLG1CQUFtQixtQkFBTyxDQUFDLENBQVk7QUFDdkM7Ozs7Ozs7QUNGQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsbUJBQU8sQ0FBQyxDQUFNO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsZ0JBQWdCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsSUFBSTs7QUFFcEM7O0FBRUEsZ0NBQWdDLHVCQUF1QjtBQUN2RDs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBOztBQUVBO0FBQ0EsZ0NBQWdDLGdCQUFnQjs7QUFFaEQ7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLElBQUksS0FBSyxFQUFFO0FBQ2pDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0Qsa0JBQWtCLEVBQUU7O0FBRTFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLHdFQUF3RSxHQUFHOztBQUUzRTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsSUFBSTtBQUM1Qyw0QkFBNEIsSUFBSSxNQUFNLEVBQUU7O0FBRXhDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0NBQWtDLGdCQUFnQixFQUFFLElBQUk7QUFDeEQ7QUFDQSwrQkFBK0Isb0JBQW9CLElBQUksSUFBSTtBQUMzRDtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsSUFBSTtBQUNyQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsd0JBQXdCLG1CQUFtQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0RBQWtELGNBQWM7QUFDaEUscURBQXFELGNBQWM7QUFDbkU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVCQUF1QiwyQkFBMkI7QUFDbEQ7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQ0FBZ0Msd0JBQXdCO0FBQ3hEO0FBQ0EsK0RBQStELFFBQVEsV0FBVyxFQUFFOztBQUVwRjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGtCQUFrQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE9BQU87O0FBRVA7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCLE1BQU0saUJBQWlCOztBQUV2Qiw4QkFBOEI7O0FBRTlCO0FBQ0E7QUFDQSxnQ0FBZ0MsRUFBRTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxxREFBcUQ7QUFDakc7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDhCQUE4QjtBQUM5Qiw0QkFBNEIsa0JBQWtCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLGlCQUFpQjs7QUFFakI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkNBQTJDLHlCQUF5Qjs7QUFFcEU7QUFDQTtBQUNBLDJDQUEyQyxhQUFhO0FBQ3hEO0FBQ0E7QUFDQSwyQ0FBMkMsYUFBYTtBQUN4RDs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsVUFBVTtBQUNWOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0NBQWdDLElBQUksRUFBRSxZQUFZLEtBQUssU0FBUztBQUNoRTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLG1CQUFtQjtBQUN2QztBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsa0JBQWtCLGtCQUFrQjtBQUNwQztBQUNBOztBQUVBLGtCQUFrQixrQkFBa0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGlDQUFpQyxhQUFhLGdCQUFnQjtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkIsSUFBSSxVQUFVLElBQUk7QUFDN0M7QUFDQSw4QkFBOEIsSUFBSSwyQkFBMkIsSUFBSTtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRCxlQUFlO0FBQzFFLDJEQUEyRCxjQUFjO0FBQ3pFLDJEQUEyRCxnQkFBZ0I7QUFDM0UsNERBQTREO0FBQzVELEtBQUs7O0FBRUw7QUFDQTtBQUNBLGVBQWUsaUJBQWlCO0FBQ2hDLG1EQUFtRDtBQUNuRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGdCQUFnQjtBQUNuQyxvREFBb0Q7QUFDcEQ7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQSxtQ0FBbUM7QUFDbkM7QUFDQSxrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQjtBQUNsQjs7QUFFQTtBQUNBLDBCQUEwQixZQUFZLEtBQUssU0FBUzs7QUFFcEQ7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSwwREFBMEQ7O0FBRTFEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixnQkFBZ0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1DQUFtQztBQUNuQyxrQ0FBa0M7QUFDbEMsa0NBQWtDO0FBQ2xDLG9DQUFvQztBQUNwQyxtQ0FBbUM7QUFDbkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUyxtQkFBbUI7QUFDNUI7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQztBQUNELE9BQU8sS0FBOEIsR0FBRyxFQUdyQztBQUNIO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7QUM1ckREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsaUJBQWlCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCx1QkFBdUIsU0FBUztBQUNoQztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw0Q0FBNEMsS0FBSzs7QUFFakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLG1DQUFtQyxPQUFPO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNUO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixtQkFBTyxDQUFDLENBQW9COztBQUUvQztBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0EsbUJBQW1CLG1CQUFPLENBQUMsQ0FBVTs7QUFFckM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixrQ0FBa0M7QUFDN0QsMkJBQTJCLG1EQUFtRDtBQUM5RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDOXJCQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDOztBQUVyQztBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixVQUFVOzs7Ozs7O0FDdkx0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLnRlc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJkZXNjcmliZShcImNhbmFyeVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgaXQoXCJjYW4gcnVuIGEgdGVzdFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBleHBlY3QodHJ1ZSkudG9CZSh0cnVlKTtcclxuICB9KTtcclxufSk7XHJcbiIsImltcG9ydCBtZFByZXZpZXdlciBmcm9tIFwiLi4vc3JjL21kUHJldmlld2VyXCI7XHJcblxyXG5kZXNjcmliZShcIm1hcmtkb3duUHJldmlld2VyXCIsICgpID0+IHtcclxuICBpdChcInNob3VsZCBleGlzdFwiLCAoKSA9PiB7XHJcbiAgICBleHBlY3QobWRQcmV2aWV3ZXIpLnRvQmVEZWZpbmVkKCk7XHJcbiAgfSk7XHJcbiAgaXQoXCJzaG91ZCBiZSBlcXVhbFwiLCAoKSA9PiB7XHJcbiAgICBleHBlY3QoNSkudG9CZSg1KTtcclxuICB9KTtcclxufSk7XHJcbiIsImltcG9ydCB7IG1hcmtkb3duIH0gZnJvbSBcIm1hcmtkb3duXCI7XHJcblxyXG52YXIgYXR0YWNoUHJldmlld2VyID0gKCRkb2N1bWVudCwgc291cmNlSWQsIHByZXZpZXdlcklkKSA9PiB7XHJcbiAgcmV0dXJuIChldmVudCkgPT4ge1xyXG4gICAgdmFyIHRleHQgPSAkZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc291cmNlSWQpLnZhbHVlLFxyXG4gICAgICBwcmV2aWV3ID0gJGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHByZXZpZXdlcklkKTtcclxuXHJcbiAgICBwcmV2aWV3LmlubmVySFRNTCA9IG1hcmtkb3duLnRvSFRNTCh0ZXh0KTtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBhdHRhY2hQcmV2aWV3ZXIsXHJcbn07XHJcbiIsIi8vIHN1cGVyIHNpbXBsZSBtb2R1bGUgZm9yIHRoZSBtb3N0IGNvbW1vbiBub2RlanMgdXNlIGNhc2UuXG5leHBvcnRzLm1hcmtkb3duID0gcmVxdWlyZShcIi4vbWFya2Rvd25cIik7XG5leHBvcnRzLnBhcnNlID0gZXhwb3J0cy5tYXJrZG93bi50b0hUTUw7XG4iLCIvLyBSZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZVxuLy8gQ29weXJpZ2h0IChjKSAyMDA5LTIwMTAgRG9taW5pYyBCYWdnb3R0XG4vLyBDb3B5cmlnaHQgKGMpIDIwMDktMjAxMCBBc2ggQmVybGluXG4vLyBDb3B5cmlnaHQgKGMpIDIwMTEgQ2hyaXN0b3BoIERvcm4gPGNocmlzdG9waEBjaHJpc3RvcGhkb3JuLmNvbT4gKGh0dHA6Ly93d3cuY2hyaXN0b3BoZG9ybi5jb20pXG5cbi8qanNoaW50IGJyb3dzZXI6dHJ1ZSwgZGV2ZWw6dHJ1ZSAqL1xuXG4oZnVuY3Rpb24oIGV4cG9zZSApIHtcblxuLyoqXG4gKiAgY2xhc3MgTWFya2Rvd25cbiAqXG4gKiAgTWFya2Rvd24gcHJvY2Vzc2luZyBpbiBKYXZhc2NyaXB0IGRvbmUgcmlnaHQuIFdlIGhhdmUgdmVyeSBwYXJ0aWN1bGFyIHZpZXdzXG4gKiAgb24gd2hhdCBjb25zdGl0dXRlcyAncmlnaHQnIHdoaWNoIGluY2x1ZGU6XG4gKlxuICogIC0gcHJvZHVjZXMgd2VsbC1mb3JtZWQgSFRNTCAodGhpcyBtZWFucyB0aGF0IGVtIGFuZCBzdHJvbmcgbmVzdGluZyBpc1xuICogICAgaW1wb3J0YW50KVxuICpcbiAqICAtIGhhcyBhbiBpbnRlcm1lZGlhdGUgcmVwcmVzZW50YXRpb24gdG8gYWxsb3cgcHJvY2Vzc2luZyBvZiBwYXJzZWQgZGF0YSAoV2VcbiAqICAgIGluIGZhY3QgaGF2ZSB0d28sIGJvdGggYXMgW0pzb25NTF06IGEgbWFya2Rvd24gdHJlZSBhbmQgYW4gSFRNTCB0cmVlKS5cbiAqXG4gKiAgLSBpcyBlYXNpbHkgZXh0ZW5zaWJsZSB0byBhZGQgbmV3IGRpYWxlY3RzIHdpdGhvdXQgaGF2aW5nIHRvIHJld3JpdGUgdGhlXG4gKiAgICBlbnRpcmUgcGFyc2luZyBtZWNoYW5pY3NcbiAqXG4gKiAgLSBoYXMgYSBnb29kIHRlc3Qgc3VpdGVcbiAqXG4gKiAgVGhpcyBpbXBsZW1lbnRhdGlvbiBmdWxmaWxscyBhbGwgb2YgdGhlc2UgKGV4Y2VwdCB0aGF0IHRoZSB0ZXN0IHN1aXRlIGNvdWxkXG4gKiAgZG8gd2l0aCBleHBhbmRpbmcgdG8gYXV0b21hdGljYWxseSBydW4gYWxsIHRoZSBmaXh0dXJlcyBmcm9tIG90aGVyIE1hcmtkb3duXG4gKiAgaW1wbGVtZW50YXRpb25zLilcbiAqXG4gKiAgIyMjIyMgSW50ZXJtZWRpYXRlIFJlcHJlc2VudGF0aW9uXG4gKlxuICogICpUT0RPKiBUYWxrIGFib3V0IHRoaXMgOikgSXRzIEpzb25NTCwgYnV0IGRvY3VtZW50IHRoZSBub2RlIG5hbWVzIHdlIHVzZS5cbiAqXG4gKiAgW0pzb25NTF06IGh0dHA6Ly9qc29ubWwub3JnLyBcIkpTT04gTWFya3VwIExhbmd1YWdlXCJcbiAqKi9cbnZhciBNYXJrZG93biA9IGV4cG9zZS5NYXJrZG93biA9IGZ1bmN0aW9uKGRpYWxlY3QpIHtcbiAgc3dpdGNoICh0eXBlb2YgZGlhbGVjdCkge1xuICAgIGNhc2UgXCJ1bmRlZmluZWRcIjpcbiAgICAgIHRoaXMuZGlhbGVjdCA9IE1hcmtkb3duLmRpYWxlY3RzLkdydWJlcjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJvYmplY3RcIjpcbiAgICAgIHRoaXMuZGlhbGVjdCA9IGRpYWxlY3Q7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgaWYgKCBkaWFsZWN0IGluIE1hcmtkb3duLmRpYWxlY3RzICkge1xuICAgICAgICB0aGlzLmRpYWxlY3QgPSBNYXJrZG93bi5kaWFsZWN0c1tkaWFsZWN0XTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmtub3duIE1hcmtkb3duIGRpYWxlY3QgJ1wiICsgU3RyaW5nKGRpYWxlY3QpICsgXCInXCIpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gIH1cbiAgdGhpcy5lbV9zdGF0ZSA9IFtdO1xuICB0aGlzLnN0cm9uZ19zdGF0ZSA9IFtdO1xuICB0aGlzLmRlYnVnX2luZGVudCA9IFwiXCI7XG59O1xuXG4vKipcbiAqICBwYXJzZSggbWFya2Rvd24sIFtkaWFsZWN0XSApIC0+IEpzb25NTFxuICogIC0gbWFya2Rvd24gKFN0cmluZyk6IG1hcmtkb3duIHN0cmluZyB0byBwYXJzZVxuICogIC0gZGlhbGVjdCAoU3RyaW5nIHwgRGlhbGVjdCk6IHRoZSBkaWFsZWN0IHRvIHVzZSwgZGVmYXVsdHMgdG8gZ3J1YmVyXG4gKlxuICogIFBhcnNlIGBtYXJrZG93bmAgYW5kIHJldHVybiBhIG1hcmtkb3duIGRvY3VtZW50IGFzIGEgTWFya2Rvd24uSnNvbk1MIHRyZWUuXG4gKiovXG5leHBvc2UucGFyc2UgPSBmdW5jdGlvbiggc291cmNlLCBkaWFsZWN0ICkge1xuICAvLyBkaWFsZWN0IHdpbGwgZGVmYXVsdCBpZiB1bmRlZmluZWRcbiAgdmFyIG1kID0gbmV3IE1hcmtkb3duKCBkaWFsZWN0ICk7XG4gIHJldHVybiBtZC50b1RyZWUoIHNvdXJjZSApO1xufTtcblxuLyoqXG4gKiAgdG9IVE1MKCBtYXJrZG93biwgW2RpYWxlY3RdICApIC0+IFN0cmluZ1xuICogIHRvSFRNTCggbWRfdHJlZSApIC0+IFN0cmluZ1xuICogIC0gbWFya2Rvd24gKFN0cmluZyk6IG1hcmtkb3duIHN0cmluZyB0byBwYXJzZVxuICogIC0gbWRfdHJlZSAoTWFya2Rvd24uSnNvbk1MKTogcGFyc2VkIG1hcmtkb3duIHRyZWVcbiAqXG4gKiAgVGFrZSBtYXJrZG93biAoZWl0aGVyIGFzIGEgc3RyaW5nIG9yIGFzIGEgSnNvbk1MIHRyZWUpIGFuZCBydW4gaXQgdGhyb3VnaFxuICogIFtbdG9IVE1MVHJlZV1dIHRoZW4gdHVybiBpdCBpbnRvIGEgd2VsbC1mb3JtYXRlZCBIVE1MIGZyYWdtZW50LlxuICoqL1xuZXhwb3NlLnRvSFRNTCA9IGZ1bmN0aW9uIHRvSFRNTCggc291cmNlICwgZGlhbGVjdCAsIG9wdGlvbnMgKSB7XG4gIHZhciBpbnB1dCA9IGV4cG9zZS50b0hUTUxUcmVlKCBzb3VyY2UgLCBkaWFsZWN0ICwgb3B0aW9ucyApO1xuXG4gIHJldHVybiBleHBvc2UucmVuZGVySnNvbk1MKCBpbnB1dCApO1xufTtcblxuLyoqXG4gKiAgdG9IVE1MVHJlZSggbWFya2Rvd24sIFtkaWFsZWN0XSApIC0+IEpzb25NTFxuICogIHRvSFRNTFRyZWUoIG1kX3RyZWUgKSAtPiBKc29uTUxcbiAqICAtIG1hcmtkb3duIChTdHJpbmcpOiBtYXJrZG93biBzdHJpbmcgdG8gcGFyc2VcbiAqICAtIGRpYWxlY3QgKFN0cmluZyB8IERpYWxlY3QpOiB0aGUgZGlhbGVjdCB0byB1c2UsIGRlZmF1bHRzIHRvIGdydWJlclxuICogIC0gbWRfdHJlZSAoTWFya2Rvd24uSnNvbk1MKTogcGFyc2VkIG1hcmtkb3duIHRyZWVcbiAqXG4gKiAgVHVybiBtYXJrZG93biBpbnRvIEhUTUwsIHJlcHJlc2VudGVkIGFzIGEgSnNvbk1MIHRyZWUuIElmIGEgc3RyaW5nIGlzIGdpdmVuXG4gKiAgdG8gdGhpcyBmdW5jdGlvbiwgaXQgaXMgZmlyc3QgcGFyc2VkIGludG8gYSBtYXJrZG93biB0cmVlIGJ5IGNhbGxpbmdcbiAqICBbW3BhcnNlXV0uXG4gKiovXG5leHBvc2UudG9IVE1MVHJlZSA9IGZ1bmN0aW9uIHRvSFRNTFRyZWUoIGlucHV0LCBkaWFsZWN0ICwgb3B0aW9ucyApIHtcbiAgLy8gY29udmVydCBzdHJpbmcgaW5wdXQgdG8gYW4gTUQgdHJlZVxuICBpZiAoIHR5cGVvZiBpbnB1dCA9PT1cInN0cmluZ1wiICkgaW5wdXQgPSB0aGlzLnBhcnNlKCBpbnB1dCwgZGlhbGVjdCApO1xuXG4gIC8vIE5vdyBjb252ZXJ0IHRoZSBNRCB0cmVlIHRvIGFuIEhUTUwgdHJlZVxuXG4gIC8vIHJlbW92ZSByZWZlcmVuY2VzIGZyb20gdGhlIHRyZWVcbiAgdmFyIGF0dHJzID0gZXh0cmFjdF9hdHRyKCBpbnB1dCApLFxuICAgICAgcmVmcyA9IHt9O1xuXG4gIGlmICggYXR0cnMgJiYgYXR0cnMucmVmZXJlbmNlcyApIHtcbiAgICByZWZzID0gYXR0cnMucmVmZXJlbmNlcztcbiAgfVxuXG4gIHZhciBodG1sID0gY29udmVydF90cmVlX3RvX2h0bWwoIGlucHV0LCByZWZzICwgb3B0aW9ucyApO1xuICBtZXJnZV90ZXh0X25vZGVzKCBodG1sICk7XG4gIHJldHVybiBodG1sO1xufTtcblxuLy8gRm9yIFNwaWRlcm1vbmtleSBiYXNlZCBlbmdpbmVzXG5mdW5jdGlvbiBta19ibG9ja190b1NvdXJjZSgpIHtcbiAgcmV0dXJuIFwiTWFya2Rvd24ubWtfYmxvY2soIFwiICtcbiAgICAgICAgICB1bmV2YWwodGhpcy50b1N0cmluZygpKSArXG4gICAgICAgICAgXCIsIFwiICtcbiAgICAgICAgICB1bmV2YWwodGhpcy50cmFpbGluZykgK1xuICAgICAgICAgIFwiLCBcIiArXG4gICAgICAgICAgdW5ldmFsKHRoaXMubGluZU51bWJlcikgK1xuICAgICAgICAgIFwiIClcIjtcbn1cblxuLy8gbm9kZVxuZnVuY3Rpb24gbWtfYmxvY2tfaW5zcGVjdCgpIHtcbiAgdmFyIHV0aWwgPSByZXF1aXJlKFwidXRpbFwiKTtcbiAgcmV0dXJuIFwiTWFya2Rvd24ubWtfYmxvY2soIFwiICtcbiAgICAgICAgICB1dGlsLmluc3BlY3QodGhpcy50b1N0cmluZygpKSArXG4gICAgICAgICAgXCIsIFwiICtcbiAgICAgICAgICB1dGlsLmluc3BlY3QodGhpcy50cmFpbGluZykgK1xuICAgICAgICAgIFwiLCBcIiArXG4gICAgICAgICAgdXRpbC5pbnNwZWN0KHRoaXMubGluZU51bWJlcikgK1xuICAgICAgICAgIFwiIClcIjtcblxufVxuXG52YXIgbWtfYmxvY2sgPSBNYXJrZG93bi5ta19ibG9jayA9IGZ1bmN0aW9uKGJsb2NrLCB0cmFpbCwgbGluZSkge1xuICAvLyBCZSBoZWxwZnVsIGZvciBkZWZhdWx0IGNhc2UgaW4gdGVzdHMuXG4gIGlmICggYXJndW1lbnRzLmxlbmd0aCA9PSAxICkgdHJhaWwgPSBcIlxcblxcblwiO1xuXG4gIHZhciBzID0gbmV3IFN0cmluZyhibG9jayk7XG4gIHMudHJhaWxpbmcgPSB0cmFpbDtcbiAgLy8gVG8gbWFrZSBpdCBjbGVhciBpdHMgbm90IGp1c3QgYSBzdHJpbmdcbiAgcy5pbnNwZWN0ID0gbWtfYmxvY2tfaW5zcGVjdDtcbiAgcy50b1NvdXJjZSA9IG1rX2Jsb2NrX3RvU291cmNlO1xuXG4gIGlmICggbGluZSAhPSB1bmRlZmluZWQgKVxuICAgIHMubGluZU51bWJlciA9IGxpbmU7XG5cbiAgcmV0dXJuIHM7XG59O1xuXG5mdW5jdGlvbiBjb3VudF9saW5lcyggc3RyICkge1xuICB2YXIgbiA9IDAsIGkgPSAtMTtcbiAgd2hpbGUgKCAoIGkgPSBzdHIuaW5kZXhPZihcIlxcblwiLCBpICsgMSkgKSAhPT0gLTEgKSBuKys7XG4gIHJldHVybiBuO1xufVxuXG4vLyBJbnRlcm5hbCAtIHNwbGl0IHNvdXJjZSBpbnRvIHJvdWdoIGJsb2Nrc1xuTWFya2Rvd24ucHJvdG90eXBlLnNwbGl0X2Jsb2NrcyA9IGZ1bmN0aW9uIHNwbGl0QmxvY2tzKCBpbnB1dCwgc3RhcnRMaW5lICkge1xuICBpbnB1dCA9IGlucHV0LnJlcGxhY2UoLyhcXHJcXG58XFxufFxccikvZywgXCJcXG5cIik7XG4gIC8vIFtcXHNcXFNdIG1hdGNoZXMgX2FueXRoaW5nXyAobmV3bGluZSBvciBzcGFjZSlcbiAgLy8gW15dIGlzIGVxdWl2YWxlbnQgYnV0IGRvZXNuJ3Qgd29yayBpbiBJRXMuXG4gIHZhciByZSA9IC8oW1xcc1xcU10rPykoJHxcXG4jfFxcbig/OlxccypcXG58JCkrKS9nLFxuICAgICAgYmxvY2tzID0gW10sXG4gICAgICBtO1xuXG4gIHZhciBsaW5lX25vID0gMTtcblxuICBpZiAoICggbSA9IC9eKFxccypcXG4pLy5leGVjKGlucHV0KSApICE9IG51bGwgKSB7XG4gICAgLy8gc2tpcCAoYnV0IGNvdW50KSBsZWFkaW5nIGJsYW5rIGxpbmVzXG4gICAgbGluZV9ubyArPSBjb3VudF9saW5lcyggbVswXSApO1xuICAgIHJlLmxhc3RJbmRleCA9IG1bMF0ubGVuZ3RoO1xuICB9XG5cbiAgd2hpbGUgKCAoIG0gPSByZS5leGVjKGlucHV0KSApICE9PSBudWxsICkge1xuICAgIGlmIChtWzJdID09IFwiXFxuI1wiKSB7XG4gICAgICBtWzJdID0gXCJcXG5cIjtcbiAgICAgIHJlLmxhc3RJbmRleC0tO1xuICAgIH1cbiAgICBibG9ja3MucHVzaCggbWtfYmxvY2soIG1bMV0sIG1bMl0sIGxpbmVfbm8gKSApO1xuICAgIGxpbmVfbm8gKz0gY291bnRfbGluZXMoIG1bMF0gKTtcbiAgfVxuXG4gIHJldHVybiBibG9ja3M7XG59O1xuXG4vKipcbiAqICBNYXJrZG93biNwcm9jZXNzQmxvY2soIGJsb2NrLCBuZXh0ICkgLT4gdW5kZWZpbmVkIHwgWyBKc29uTUwsIC4uLiBdXG4gKiAgLSBibG9jayAoU3RyaW5nKTogdGhlIGJsb2NrIHRvIHByb2Nlc3NcbiAqICAtIG5leHQgKEFycmF5KTogdGhlIGZvbGxvd2luZyBibG9ja3NcbiAqXG4gKiBQcm9jZXNzIGBibG9ja2AgYW5kIHJldHVybiBhbiBhcnJheSBvZiBKc29uTUwgbm9kZXMgcmVwcmVzZW50aW5nIGBibG9ja2AuXG4gKlxuICogSXQgZG9lcyB0aGlzIGJ5IGFza2luZyBlYWNoIGJsb2NrIGxldmVsIGZ1bmN0aW9uIGluIHRoZSBkaWFsZWN0IHRvIHByb2Nlc3NcbiAqIHRoZSBibG9jayB1bnRpbCBvbmUgY2FuLiBTdWNjZXNmdWwgaGFuZGxpbmcgaXMgaW5kaWNhdGVkIGJ5IHJldHVybmluZyBhblxuICogYXJyYXkgKHdpdGggemVybyBvciBtb3JlIEpzb25NTCBub2RlcyksIGZhaWx1cmUgYnkgYSBmYWxzZSB2YWx1ZS5cbiAqXG4gKiBCbG9ja3MgaGFuZGxlcnMgYXJlIHJlc3BvbnNpYmxlIGZvciBjYWxsaW5nIFtbTWFya2Rvd24jcHJvY2Vzc0lubGluZV1dXG4gKiB0aGVtc2VsdmVzIGFzIGFwcHJvcHJpYXRlLlxuICpcbiAqIElmIHRoZSBibG9ja3Mgd2VyZSBzcGxpdCBpbmNvcnJlY3RseSBvciBhZGphY2VudCBibG9ja3MgbmVlZCBjb2xsYXBzaW5nIHlvdVxuICogY2FuIGFkanVzdCBgbmV4dGAgaW4gcGxhY2UgdXNpbmcgc2hpZnQvc3BsaWNlIGV0Yy5cbiAqXG4gKiBJZiBhbnkgb2YgdGhpcyBkZWZhdWx0IGJlaGF2aW91ciBpcyBub3QgcmlnaHQgZm9yIHRoZSBkaWFsZWN0LCB5b3UgY2FuXG4gKiBkZWZpbmUgYSBgX19jYWxsX19gIG1ldGhvZCBvbiB0aGUgZGlhbGVjdCB0aGF0IHdpbGwgZ2V0IGludm9rZWQgdG8gaGFuZGxlXG4gKiB0aGUgYmxvY2sgcHJvY2Vzc2luZy5cbiAqL1xuTWFya2Rvd24ucHJvdG90eXBlLnByb2Nlc3NCbG9jayA9IGZ1bmN0aW9uIHByb2Nlc3NCbG9jayggYmxvY2ssIG5leHQgKSB7XG4gIHZhciBjYnMgPSB0aGlzLmRpYWxlY3QuYmxvY2ssXG4gICAgICBvcmQgPSBjYnMuX19vcmRlcl9fO1xuXG4gIGlmICggXCJfX2NhbGxfX1wiIGluIGNicyApIHtcbiAgICByZXR1cm4gY2JzLl9fY2FsbF9fLmNhbGwodGhpcywgYmxvY2ssIG5leHQpO1xuICB9XG5cbiAgZm9yICggdmFyIGkgPSAwOyBpIDwgb3JkLmxlbmd0aDsgaSsrICkge1xuICAgIC8vRDp0aGlzLmRlYnVnKCBcIlRlc3RpbmdcIiwgb3JkW2ldICk7XG4gICAgdmFyIHJlcyA9IGNic1sgb3JkW2ldIF0uY2FsbCggdGhpcywgYmxvY2ssIG5leHQgKTtcbiAgICBpZiAoIHJlcyApIHtcbiAgICAgIC8vRDp0aGlzLmRlYnVnKFwiICBtYXRjaGVkXCIpO1xuICAgICAgaWYgKCAhaXNBcnJheShyZXMpIHx8ICggcmVzLmxlbmd0aCA+IDAgJiYgISggaXNBcnJheShyZXNbMF0pICkgKSApXG4gICAgICAgIHRoaXMuZGVidWcob3JkW2ldLCBcImRpZG4ndCByZXR1cm4gYSBwcm9wZXIgYXJyYXlcIik7XG4gICAgICAvL0Q6dGhpcy5kZWJ1ZyggXCJcIiApO1xuICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG4gIH1cblxuICAvLyBVaG9oISBubyBtYXRjaCEgU2hvdWxkIHdlIHRocm93IGFuIGVycm9yP1xuICByZXR1cm4gW107XG59O1xuXG5NYXJrZG93bi5wcm90b3R5cGUucHJvY2Vzc0lubGluZSA9IGZ1bmN0aW9uIHByb2Nlc3NJbmxpbmUoIGJsb2NrICkge1xuICByZXR1cm4gdGhpcy5kaWFsZWN0LmlubGluZS5fX2NhbGxfXy5jYWxsKCB0aGlzLCBTdHJpbmcoIGJsb2NrICkgKTtcbn07XG5cbi8qKlxuICogIE1hcmtkb3duI3RvVHJlZSggc291cmNlICkgLT4gSnNvbk1MXG4gKiAgLSBzb3VyY2UgKFN0cmluZyk6IG1hcmtkb3duIHNvdXJjZSB0byBwYXJzZVxuICpcbiAqICBQYXJzZSBgc291cmNlYCBpbnRvIGEgSnNvbk1MIHRyZWUgcmVwcmVzZW50aW5nIHRoZSBtYXJrZG93biBkb2N1bWVudC5cbiAqKi9cbi8vIGN1c3RvbV90cmVlIG1lYW5zIHNldCB0aGlzLnRyZWUgdG8gYGN1c3RvbV90cmVlYCBhbmQgcmVzdG9yZSBvbGQgdmFsdWUgb24gcmV0dXJuXG5NYXJrZG93bi5wcm90b3R5cGUudG9UcmVlID0gZnVuY3Rpb24gdG9UcmVlKCBzb3VyY2UsIGN1c3RvbV9yb290ICkge1xuICB2YXIgYmxvY2tzID0gc291cmNlIGluc3RhbmNlb2YgQXJyYXkgPyBzb3VyY2UgOiB0aGlzLnNwbGl0X2Jsb2Nrcyggc291cmNlICk7XG5cbiAgLy8gTWFrZSB0cmVlIGEgbWVtYmVyIHZhcmlhYmxlIHNvIGl0cyBlYXNpZXIgdG8gbWVzcyB3aXRoIGluIGV4dGVuc2lvbnNcbiAgdmFyIG9sZF90cmVlID0gdGhpcy50cmVlO1xuICB0cnkge1xuICAgIHRoaXMudHJlZSA9IGN1c3RvbV9yb290IHx8IHRoaXMudHJlZSB8fCBbIFwibWFya2Rvd25cIiBdO1xuXG4gICAgYmxvY2tzOlxuICAgIHdoaWxlICggYmxvY2tzLmxlbmd0aCApIHtcbiAgICAgIHZhciBiID0gdGhpcy5wcm9jZXNzQmxvY2soIGJsb2Nrcy5zaGlmdCgpLCBibG9ja3MgKTtcblxuICAgICAgLy8gUmVmZXJlbmNlIGJsb2NrcyBhbmQgdGhlIGxpa2Ugd29uJ3QgcmV0dXJuIGFueSBjb250ZW50XG4gICAgICBpZiAoICFiLmxlbmd0aCApIGNvbnRpbnVlIGJsb2NrcztcblxuICAgICAgdGhpcy50cmVlLnB1c2guYXBwbHkoIHRoaXMudHJlZSwgYiApO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy50cmVlO1xuICB9XG4gIGZpbmFsbHkge1xuICAgIGlmICggY3VzdG9tX3Jvb3QgKSB7XG4gICAgICB0aGlzLnRyZWUgPSBvbGRfdHJlZTtcbiAgICB9XG4gIH1cbn07XG5cbi8vIE5vb3AgYnkgZGVmYXVsdFxuTWFya2Rvd24ucHJvdG90eXBlLmRlYnVnID0gZnVuY3Rpb24gKCkge1xuICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKCBhcmd1bWVudHMpO1xuICBhcmdzLnVuc2hpZnQodGhpcy5kZWJ1Z19pbmRlbnQpO1xuICBpZiAoIHR5cGVvZiBwcmludCAhPT0gXCJ1bmRlZmluZWRcIiApXG4gICAgICBwcmludC5hcHBseSggcHJpbnQsIGFyZ3MgKTtcbiAgaWYgKCB0eXBlb2YgY29uc29sZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2YgY29uc29sZS5sb2cgIT09IFwidW5kZWZpbmVkXCIgKVxuICAgICAgY29uc29sZS5sb2cuYXBwbHkoIG51bGwsIGFyZ3MgKTtcbn1cblxuTWFya2Rvd24ucHJvdG90eXBlLmxvb3BfcmVfb3Zlcl9ibG9jayA9IGZ1bmN0aW9uKCByZSwgYmxvY2ssIGNiICkge1xuICAvLyBEb250IHVzZSAvZyByZWdleHBzIHdpdGggdGhpc1xuICB2YXIgbSxcbiAgICAgIGIgPSBibG9jay52YWx1ZU9mKCk7XG5cbiAgd2hpbGUgKCBiLmxlbmd0aCAmJiAobSA9IHJlLmV4ZWMoYikgKSAhPSBudWxsICkge1xuICAgIGIgPSBiLnN1YnN0ciggbVswXS5sZW5ndGggKTtcbiAgICBjYi5jYWxsKHRoaXMsIG0pO1xuICB9XG4gIHJldHVybiBiO1xufTtcblxuLyoqXG4gKiBNYXJrZG93bi5kaWFsZWN0c1xuICpcbiAqIE5hbWVzcGFjZSBvZiBidWlsdC1pbiBkaWFsZWN0cy5cbiAqKi9cbk1hcmtkb3duLmRpYWxlY3RzID0ge307XG5cbi8qKlxuICogTWFya2Rvd24uZGlhbGVjdHMuR3J1YmVyXG4gKlxuICogVGhlIGRlZmF1bHQgZGlhbGVjdCB0aGF0IGZvbGxvd3MgdGhlIHJ1bGVzIHNldCBvdXQgYnkgSm9obiBHcnViZXInc1xuICogbWFya2Rvd24ucGwgYXMgY2xvc2VseSBhcyBwb3NzaWJsZS4gV2VsbCBhY3R1YWxseSB3ZSBmb2xsb3cgdGhlIGJlaGF2aW91ciBvZlxuICogdGhhdCBzY3JpcHQgd2hpY2ggaW4gc29tZSBwbGFjZXMgaXMgbm90IGV4YWN0bHkgd2hhdCB0aGUgc3ludGF4IHdlYiBwYWdlXG4gKiBzYXlzLlxuICoqL1xuTWFya2Rvd24uZGlhbGVjdHMuR3J1YmVyID0ge1xuICBibG9jazoge1xuICAgIGF0eEhlYWRlcjogZnVuY3Rpb24gYXR4SGVhZGVyKCBibG9jaywgbmV4dCApIHtcbiAgICAgIHZhciBtID0gYmxvY2subWF0Y2goIC9eKCN7MSw2fSlcXHMqKC4qPylcXHMqIypcXHMqKD86XFxufCQpLyApO1xuXG4gICAgICBpZiAoICFtICkgcmV0dXJuIHVuZGVmaW5lZDtcblxuICAgICAgdmFyIGhlYWRlciA9IFsgXCJoZWFkZXJcIiwgeyBsZXZlbDogbVsgMSBdLmxlbmd0aCB9IF07XG4gICAgICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShoZWFkZXIsIHRoaXMucHJvY2Vzc0lubGluZShtWyAyIF0pKTtcblxuICAgICAgaWYgKCBtWzBdLmxlbmd0aCA8IGJsb2NrLmxlbmd0aCApXG4gICAgICAgIG5leHQudW5zaGlmdCggbWtfYmxvY2soIGJsb2NrLnN1YnN0ciggbVswXS5sZW5ndGggKSwgYmxvY2sudHJhaWxpbmcsIGJsb2NrLmxpbmVOdW1iZXIgKyAyICkgKTtcblxuICAgICAgcmV0dXJuIFsgaGVhZGVyIF07XG4gICAgfSxcblxuICAgIHNldGV4dEhlYWRlcjogZnVuY3Rpb24gc2V0ZXh0SGVhZGVyKCBibG9jaywgbmV4dCApIHtcbiAgICAgIHZhciBtID0gYmxvY2subWF0Y2goIC9eKC4qKVxcbihbLT1dKVxcMlxcMisoPzpcXG58JCkvICk7XG5cbiAgICAgIGlmICggIW0gKSByZXR1cm4gdW5kZWZpbmVkO1xuXG4gICAgICB2YXIgbGV2ZWwgPSAoIG1bIDIgXSA9PT0gXCI9XCIgKSA/IDEgOiAyO1xuICAgICAgdmFyIGhlYWRlciA9IFsgXCJoZWFkZXJcIiwgeyBsZXZlbCA6IGxldmVsIH0sIG1bIDEgXSBdO1xuXG4gICAgICBpZiAoIG1bMF0ubGVuZ3RoIDwgYmxvY2subGVuZ3RoIClcbiAgICAgICAgbmV4dC51bnNoaWZ0KCBta19ibG9jayggYmxvY2suc3Vic3RyKCBtWzBdLmxlbmd0aCApLCBibG9jay50cmFpbGluZywgYmxvY2subGluZU51bWJlciArIDIgKSApO1xuXG4gICAgICByZXR1cm4gWyBoZWFkZXIgXTtcbiAgICB9LFxuXG4gICAgY29kZTogZnVuY3Rpb24gY29kZSggYmxvY2ssIG5leHQgKSB7XG4gICAgICAvLyB8ICAgIEZvb1xuICAgICAgLy8gfGJhclxuICAgICAgLy8gc2hvdWxkIGJlIGEgY29kZSBibG9jayBmb2xsb3dlZCBieSBhIHBhcmFncmFwaC4gRnVuXG4gICAgICAvL1xuICAgICAgLy8gVGhlcmUgbWlnaHQgYWxzbyBiZSBhZGphY2VudCBjb2RlIGJsb2NrIHRvIG1lcmdlLlxuXG4gICAgICB2YXIgcmV0ID0gW10sXG4gICAgICAgICAgcmUgPSAvXig/OiB7MCwzfVxcdHwgezR9KSguKilcXG4/LyxcbiAgICAgICAgICBsaW5lcztcblxuICAgICAgLy8gNCBzcGFjZXMgKyBjb250ZW50XG4gICAgICBpZiAoICFibG9jay5tYXRjaCggcmUgKSApIHJldHVybiB1bmRlZmluZWQ7XG5cbiAgICAgIGJsb2NrX3NlYXJjaDpcbiAgICAgIGRvIHtcbiAgICAgICAgLy8gTm93IHB1bGwgb3V0IHRoZSByZXN0IG9mIHRoZSBsaW5lc1xuICAgICAgICB2YXIgYiA9IHRoaXMubG9vcF9yZV9vdmVyX2Jsb2NrKFxuICAgICAgICAgICAgICAgICAgcmUsIGJsb2NrLnZhbHVlT2YoKSwgZnVuY3Rpb24oIG0gKSB7IHJldC5wdXNoKCBtWzFdICk7IH0gKTtcblxuICAgICAgICBpZiAoIGIubGVuZ3RoICkge1xuICAgICAgICAgIC8vIENhc2UgYWxsdWRlZCB0byBpbiBmaXJzdCBjb21tZW50LiBwdXNoIGl0IGJhY2sgb24gYXMgYSBuZXcgYmxvY2tcbiAgICAgICAgICBuZXh0LnVuc2hpZnQoIG1rX2Jsb2NrKGIsIGJsb2NrLnRyYWlsaW5nKSApO1xuICAgICAgICAgIGJyZWFrIGJsb2NrX3NlYXJjaDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICggbmV4dC5sZW5ndGggKSB7XG4gICAgICAgICAgLy8gQ2hlY2sgdGhlIG5leHQgYmxvY2sgLSBpdCBtaWdodCBiZSBjb2RlIHRvb1xuICAgICAgICAgIGlmICggIW5leHRbMF0ubWF0Y2goIHJlICkgKSBicmVhayBibG9ja19zZWFyY2g7XG5cbiAgICAgICAgICAvLyBQdWxsIGhvdyBob3cgbWFueSBibGFua3MgbGluZXMgZm9sbG93IC0gbWludXMgdHdvIHRvIGFjY291bnQgZm9yIC5qb2luXG4gICAgICAgICAgcmV0LnB1c2ggKCBibG9jay50cmFpbGluZy5yZXBsYWNlKC9bXlxcbl0vZywgXCJcIikuc3Vic3RyaW5nKDIpICk7XG5cbiAgICAgICAgICBibG9jayA9IG5leHQuc2hpZnQoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBicmVhayBibG9ja19zZWFyY2g7XG4gICAgICAgIH1cbiAgICAgIH0gd2hpbGUgKCB0cnVlICk7XG5cbiAgICAgIHJldHVybiBbIFsgXCJjb2RlX2Jsb2NrXCIsIHJldC5qb2luKFwiXFxuXCIpIF0gXTtcbiAgICB9LFxuXG4gICAgaG9yaXpSdWxlOiBmdW5jdGlvbiBob3JpelJ1bGUoIGJsb2NrLCBuZXh0ICkge1xuICAgICAgLy8gdGhpcyBuZWVkcyB0byBmaW5kIGFueSBociBpbiB0aGUgYmxvY2sgdG8gaGFuZGxlIGFidXR0aW5nIGJsb2Nrc1xuICAgICAgdmFyIG0gPSBibG9jay5tYXRjaCggL14oPzooW1xcc1xcU10qPylcXG4pP1sgXFx0XSooWy1fKl0pKD86WyBcXHRdKlxcMil7Mix9WyBcXHRdKig/OlxcbihbXFxzXFxTXSopKT8kLyApO1xuXG4gICAgICBpZiAoICFtICkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICB2YXIganNvbm1sID0gWyBbIFwiaHJcIiBdIF07XG5cbiAgICAgIC8vIGlmIHRoZXJlJ3MgYSBsZWFkaW5nIGFidXR0aW5nIGJsb2NrLCBwcm9jZXNzIGl0XG4gICAgICBpZiAoIG1bIDEgXSApIHtcbiAgICAgICAganNvbm1sLnVuc2hpZnQuYXBwbHkoIGpzb25tbCwgdGhpcy5wcm9jZXNzQmxvY2soIG1bIDEgXSwgW10gKSApO1xuICAgICAgfVxuXG4gICAgICAvLyBpZiB0aGVyZSdzIGEgdHJhaWxpbmcgYWJ1dHRpbmcgYmxvY2ssIHN0aWNrIGl0IGludG8gbmV4dFxuICAgICAgaWYgKCBtWyAzIF0gKSB7XG4gICAgICAgIG5leHQudW5zaGlmdCggbWtfYmxvY2soIG1bIDMgXSApICk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBqc29ubWw7XG4gICAgfSxcblxuICAgIC8vIFRoZXJlIGFyZSB0d28gdHlwZXMgb2YgbGlzdHMuIFRpZ2h0IGFuZCBsb29zZS4gVGlnaHQgbGlzdHMgaGF2ZSBubyB3aGl0ZXNwYWNlXG4gICAgLy8gYmV0d2VlbiB0aGUgaXRlbXMgKGFuZCByZXN1bHQgaW4gdGV4dCBqdXN0IGluIHRoZSA8bGk+KSBhbmQgbG9vc2UgbGlzdHMsXG4gICAgLy8gd2hpY2ggaGF2ZSBhbiBlbXB0eSBsaW5lIGJldHdlZW4gbGlzdCBpdGVtcywgcmVzdWx0aW5nIGluIChvbmUgb3IgbW9yZSlcbiAgICAvLyBwYXJhZ3JhcGhzIGluc2lkZSB0aGUgPGxpPi5cbiAgICAvL1xuICAgIC8vIFRoZXJlIGFyZSBhbGwgc29ydHMgd2VpcmQgZWRnZSBjYXNlcyBhYm91dCB0aGUgb3JpZ2luYWwgbWFya2Rvd24ucGwnc1xuICAgIC8vIGhhbmRsaW5nIG9mIGxpc3RzOlxuICAgIC8vXG4gICAgLy8gKiBOZXN0ZWQgbGlzdHMgYXJlIHN1cHBvc2VkIHRvIGJlIGluZGVudGVkIGJ5IGZvdXIgY2hhcnMgcGVyIGxldmVsLiBCdXRcbiAgICAvLyAgIGlmIHRoZXkgYXJlbid0LCB5b3UgY2FuIGdldCBhIG5lc3RlZCBsaXN0IGJ5IGluZGVudGluZyBieSBsZXNzIHRoYW5cbiAgICAvLyAgIGZvdXIgc28gbG9uZyBhcyB0aGUgaW5kZW50IGRvZXNuJ3QgbWF0Y2ggYW4gaW5kZW50IG9mIGFuIGV4aXN0aW5nIGxpc3RcbiAgICAvLyAgIGl0ZW0gaW4gdGhlICduZXN0IHN0YWNrJy5cbiAgICAvL1xuICAgIC8vICogVGhlIHR5cGUgb2YgdGhlIGxpc3QgKGJ1bGxldCBvciBudW1iZXIpIGlzIGNvbnRyb2xsZWQganVzdCBieSB0aGVcbiAgICAvLyAgICBmaXJzdCBpdGVtIGF0IHRoZSBpbmRlbnQuIFN1YnNlcXVlbnQgY2hhbmdlcyBhcmUgaWdub3JlZCB1bmxlc3MgdGhleVxuICAgIC8vICAgIGFyZSBmb3IgbmVzdGVkIGxpc3RzXG4gICAgLy9cbiAgICBsaXN0czogKGZ1bmN0aW9uKCApIHtcbiAgICAgIC8vIFVzZSBhIGNsb3N1cmUgdG8gaGlkZSBhIGZldyB2YXJpYWJsZXMuXG4gICAgICB2YXIgYW55X2xpc3QgPSBcIlsqKy1dfFxcXFxkK1xcXFwuXCIsXG4gICAgICAgICAgYnVsbGV0X2xpc3QgPSAvWyorLV0vLFxuICAgICAgICAgIG51bWJlcl9saXN0ID0gL1xcZCtcXC4vLFxuICAgICAgICAgIC8vIENhcHR1cmUgbGVhZGluZyBpbmRlbnQgYXMgaXQgbWF0dGVycyBmb3IgZGV0ZXJtaW5pbmcgbmVzdGVkIGxpc3RzLlxuICAgICAgICAgIGlzX2xpc3RfcmUgPSBuZXcgUmVnRXhwKCBcIl4oIHswLDN9KShcIiArIGFueV9saXN0ICsgXCIpWyBcXHRdK1wiICksXG4gICAgICAgICAgaW5kZW50X3JlID0gXCIoPzogezAsM31cXFxcdHwgezR9KVwiO1xuXG4gICAgICAvLyBUT0RPOiBDYWNoZSB0aGlzIHJlZ2V4cCBmb3IgY2VydGFpbiBkZXB0aHMuXG4gICAgICAvLyBDcmVhdGUgYSByZWdleHAgc3VpdGFibGUgZm9yIG1hdGNoaW5nIGFuIGxpIGZvciBhIGdpdmVuIHN0YWNrIGRlcHRoXG4gICAgICBmdW5jdGlvbiByZWdleF9mb3JfZGVwdGgoIGRlcHRoICkge1xuXG4gICAgICAgIHJldHVybiBuZXcgUmVnRXhwKFxuICAgICAgICAgIC8vIG1bMV0gPSBpbmRlbnQsIG1bMl0gPSBsaXN0X3R5cGVcbiAgICAgICAgICBcIig/Ol4oXCIgKyBpbmRlbnRfcmUgKyBcInswLFwiICsgZGVwdGggKyBcIn0gezAsM30pKFwiICsgYW55X2xpc3QgKyBcIilcXFxccyspfFwiICtcbiAgICAgICAgICAvLyBtWzNdID0gY29udFxuICAgICAgICAgIFwiKF5cIiArIGluZGVudF9yZSArIFwiezAsXCIgKyAoZGVwdGgtMSkgKyBcIn1bIF17MCw0fSlcIlxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gZXhwYW5kX3RhYiggaW5wdXQgKSB7XG4gICAgICAgIHJldHVybiBpbnB1dC5yZXBsYWNlKCAvIHswLDN9XFx0L2csIFwiICAgIFwiICk7XG4gICAgICB9XG5cbiAgICAgIC8vIEFkZCBpbmxpbmUgY29udGVudCBgaW5saW5lYCB0byBgbGlgLiBpbmxpbmUgY29tZXMgZnJvbSBwcm9jZXNzSW5saW5lXG4gICAgICAvLyBzbyBpcyBhbiBhcnJheSBvZiBjb250ZW50XG4gICAgICBmdW5jdGlvbiBhZGQobGksIGxvb3NlLCBpbmxpbmUsIG5sKSB7XG4gICAgICAgIGlmICggbG9vc2UgKSB7XG4gICAgICAgICAgbGkucHVzaCggWyBcInBhcmFcIiBdLmNvbmNhdChpbmxpbmUpICk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIEhtbW0sIHNob3VsZCB0aGlzIGJlIGFueSBibG9jayBsZXZlbCBlbGVtZW50IG9yIGp1c3QgcGFyYXM/XG4gICAgICAgIHZhciBhZGRfdG8gPSBsaVtsaS5sZW5ndGggLTFdIGluc3RhbmNlb2YgQXJyYXkgJiYgbGlbbGkubGVuZ3RoIC0gMV1bMF0gPT0gXCJwYXJhXCJcbiAgICAgICAgICAgICAgICAgICA/IGxpW2xpLmxlbmd0aCAtMV1cbiAgICAgICAgICAgICAgICAgICA6IGxpO1xuXG4gICAgICAgIC8vIElmIHRoZXJlIGlzIGFscmVhZHkgc29tZSBjb250ZW50IGluIHRoaXMgbGlzdCwgYWRkIHRoZSBuZXcgbGluZSBpblxuICAgICAgICBpZiAoIG5sICYmIGxpLmxlbmd0aCA+IDEgKSBpbmxpbmUudW5zaGlmdChubCk7XG5cbiAgICAgICAgZm9yICggdmFyIGkgPSAwOyBpIDwgaW5saW5lLmxlbmd0aDsgaSsrICkge1xuICAgICAgICAgIHZhciB3aGF0ID0gaW5saW5lW2ldLFxuICAgICAgICAgICAgICBpc19zdHIgPSB0eXBlb2Ygd2hhdCA9PSBcInN0cmluZ1wiO1xuICAgICAgICAgIGlmICggaXNfc3RyICYmIGFkZF90by5sZW5ndGggPiAxICYmIHR5cGVvZiBhZGRfdG9bYWRkX3RvLmxlbmd0aC0xXSA9PSBcInN0cmluZ1wiICkge1xuICAgICAgICAgICAgYWRkX3RvWyBhZGRfdG8ubGVuZ3RoLTEgXSArPSB3aGF0O1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGFkZF90by5wdXNoKCB3aGF0ICk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIGNvbnRhaW5lZCBtZWFucyBoYXZlIGFuIGluZGVudCBncmVhdGVyIHRoYW4gdGhlIGN1cnJlbnQgb25lLiBPblxuICAgICAgLy8gKmV2ZXJ5KiBsaW5lIGluIHRoZSBibG9ja1xuICAgICAgZnVuY3Rpb24gZ2V0X2NvbnRhaW5lZF9ibG9ja3MoIGRlcHRoLCBibG9ja3MgKSB7XG5cbiAgICAgICAgdmFyIHJlID0gbmV3IFJlZ0V4cCggXCJeKFwiICsgaW5kZW50X3JlICsgXCJ7XCIgKyBkZXB0aCArIFwifS4qP1xcXFxuPykqJFwiICksXG4gICAgICAgICAgICByZXBsYWNlID0gbmV3IFJlZ0V4cChcIl5cIiArIGluZGVudF9yZSArIFwie1wiICsgZGVwdGggKyBcIn1cIiwgXCJnbVwiKSxcbiAgICAgICAgICAgIHJldCA9IFtdO1xuXG4gICAgICAgIHdoaWxlICggYmxvY2tzLmxlbmd0aCA+IDAgKSB7XG4gICAgICAgICAgaWYgKCByZS5leGVjKCBibG9ja3NbMF0gKSApIHtcbiAgICAgICAgICAgIHZhciBiID0gYmxvY2tzLnNoaWZ0KCksXG4gICAgICAgICAgICAgICAgLy8gTm93IHJlbW92ZSB0aGF0IGluZGVudFxuICAgICAgICAgICAgICAgIHggPSBiLnJlcGxhY2UoIHJlcGxhY2UsIFwiXCIpO1xuXG4gICAgICAgICAgICByZXQucHVzaCggbWtfYmxvY2soIHgsIGIudHJhaWxpbmcsIGIubGluZU51bWJlciApICk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgICB9XG5cbiAgICAgIC8vIHBhc3NlZCB0byBzdGFjay5mb3JFYWNoIHRvIHR1cm4gbGlzdCBpdGVtcyB1cCB0aGUgc3RhY2sgaW50byBwYXJhc1xuICAgICAgZnVuY3Rpb24gcGFyYWdyYXBoaWZ5KHMsIGksIHN0YWNrKSB7XG4gICAgICAgIHZhciBsaXN0ID0gcy5saXN0O1xuICAgICAgICB2YXIgbGFzdF9saSA9IGxpc3RbbGlzdC5sZW5ndGgtMV07XG5cbiAgICAgICAgaWYgKCBsYXN0X2xpWzFdIGluc3RhbmNlb2YgQXJyYXkgJiYgbGFzdF9saVsxXVswXSA9PSBcInBhcmFcIiApIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCBpICsgMSA9PSBzdGFjay5sZW5ndGggKSB7XG4gICAgICAgICAgLy8gTGFzdCBzdGFjayBmcmFtZVxuICAgICAgICAgIC8vIEtlZXAgdGhlIHNhbWUgYXJyYXksIGJ1dCByZXBsYWNlIHRoZSBjb250ZW50c1xuICAgICAgICAgIGxhc3RfbGkucHVzaCggW1wicGFyYVwiXS5jb25jYXQoIGxhc3RfbGkuc3BsaWNlKDEsIGxhc3RfbGkubGVuZ3RoIC0gMSkgKSApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHZhciBzdWJsaXN0ID0gbGFzdF9saS5wb3AoKTtcbiAgICAgICAgICBsYXN0X2xpLnB1c2goIFtcInBhcmFcIl0uY29uY2F0KCBsYXN0X2xpLnNwbGljZSgxLCBsYXN0X2xpLmxlbmd0aCAtIDEpICksIHN1Ymxpc3QgKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgbWF0Y2hlciBmdW5jdGlvblxuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCBibG9jaywgbmV4dCApIHtcbiAgICAgICAgdmFyIG0gPSBibG9jay5tYXRjaCggaXNfbGlzdF9yZSApO1xuICAgICAgICBpZiAoICFtICkgcmV0dXJuIHVuZGVmaW5lZDtcblxuICAgICAgICBmdW5jdGlvbiBtYWtlX2xpc3QoIG0gKSB7XG4gICAgICAgICAgdmFyIGxpc3QgPSBidWxsZXRfbGlzdC5leGVjKCBtWzJdIClcbiAgICAgICAgICAgICAgICAgICA/IFtcImJ1bGxldGxpc3RcIl1cbiAgICAgICAgICAgICAgICAgICA6IFtcIm51bWJlcmxpc3RcIl07XG5cbiAgICAgICAgICBzdGFjay5wdXNoKCB7IGxpc3Q6IGxpc3QsIGluZGVudDogbVsxXSB9ICk7XG4gICAgICAgICAgcmV0dXJuIGxpc3Q7XG4gICAgICAgIH1cblxuXG4gICAgICAgIHZhciBzdGFjayA9IFtdLCAvLyBTdGFjayBvZiBsaXN0cyBmb3IgbmVzdGluZy5cbiAgICAgICAgICAgIGxpc3QgPSBtYWtlX2xpc3QoIG0gKSxcbiAgICAgICAgICAgIGxhc3RfbGksXG4gICAgICAgICAgICBsb29zZSA9IGZhbHNlLFxuICAgICAgICAgICAgcmV0ID0gWyBzdGFja1swXS5saXN0IF0sXG4gICAgICAgICAgICBpO1xuXG4gICAgICAgIC8vIExvb3AgdG8gc2VhcmNoIG92ZXIgYmxvY2sgbG9va2luZyBmb3IgaW5uZXIgYmxvY2sgZWxlbWVudHMgYW5kIGxvb3NlIGxpc3RzXG4gICAgICAgIGxvb3NlX3NlYXJjaDpcbiAgICAgICAgd2hpbGUgKCB0cnVlICkge1xuICAgICAgICAgIC8vIFNwbGl0IGludG8gbGluZXMgcHJlc2VydmluZyBuZXcgbGluZXMgYXQgZW5kIG9mIGxpbmVcbiAgICAgICAgICB2YXIgbGluZXMgPSBibG9jay5zcGxpdCggLyg/PVxcbikvICk7XG5cbiAgICAgICAgICAvLyBXZSBoYXZlIHRvIGdyYWIgYWxsIGxpbmVzIGZvciBhIGxpIGFuZCBjYWxsIHByb2Nlc3NJbmxpbmUgb24gdGhlbVxuICAgICAgICAgIC8vIG9uY2UgYXMgdGhlcmUgYXJlIHNvbWUgaW5saW5lIHRoaW5ncyB0aGF0IGNhbiBzcGFuIGxpbmVzLlxuICAgICAgICAgIHZhciBsaV9hY2N1bXVsYXRlID0gXCJcIjtcblxuICAgICAgICAgIC8vIExvb3Agb3ZlciB0aGUgbGluZXMgaW4gdGhpcyBibG9jayBsb29raW5nIGZvciB0aWdodCBsaXN0cy5cbiAgICAgICAgICB0aWdodF9zZWFyY2g6XG4gICAgICAgICAgZm9yICggdmFyIGxpbmVfbm8gPSAwOyBsaW5lX25vIDwgbGluZXMubGVuZ3RoOyBsaW5lX25vKysgKSB7XG4gICAgICAgICAgICB2YXIgbmwgPSBcIlwiLFxuICAgICAgICAgICAgICAgIGwgPSBsaW5lc1tsaW5lX25vXS5yZXBsYWNlKC9eXFxuLywgZnVuY3Rpb24obikgeyBubCA9IG47IHJldHVybiBcIlwiOyB9KTtcblxuICAgICAgICAgICAgLy8gVE9ETzogcmVhbGx5IHNob3VsZCBjYWNoZSB0aGlzXG4gICAgICAgICAgICB2YXIgbGluZV9yZSA9IHJlZ2V4X2Zvcl9kZXB0aCggc3RhY2subGVuZ3RoICk7XG5cbiAgICAgICAgICAgIG0gPSBsLm1hdGNoKCBsaW5lX3JlICk7XG4gICAgICAgICAgICAvL3ByaW50KCBcImxpbmU6XCIsIHVuZXZhbChsKSwgXCJcXG5saW5lIG1hdGNoOlwiLCB1bmV2YWwobSkgKTtcblxuICAgICAgICAgICAgLy8gV2UgaGF2ZSBhIGxpc3QgaXRlbVxuICAgICAgICAgICAgaWYgKCBtWzFdICE9PSB1bmRlZmluZWQgKSB7XG4gICAgICAgICAgICAgIC8vIFByb2Nlc3MgdGhlIHByZXZpb3VzIGxpc3QgaXRlbSwgaWYgYW55XG4gICAgICAgICAgICAgIGlmICggbGlfYWNjdW11bGF0ZS5sZW5ndGggKSB7XG4gICAgICAgICAgICAgICAgYWRkKCBsYXN0X2xpLCBsb29zZSwgdGhpcy5wcm9jZXNzSW5saW5lKCBsaV9hY2N1bXVsYXRlICksIG5sICk7XG4gICAgICAgICAgICAgICAgLy8gTG9vc2UgbW9kZSB3aWxsIGhhdmUgYmVlbiBkZWFsdCB3aXRoLiBSZXNldCBpdFxuICAgICAgICAgICAgICAgIGxvb3NlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgbGlfYWNjdW11bGF0ZSA9IFwiXCI7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBtWzFdID0gZXhwYW5kX3RhYiggbVsxXSApO1xuICAgICAgICAgICAgICB2YXIgd2FudGVkX2RlcHRoID0gTWF0aC5mbG9vcihtWzFdLmxlbmd0aC80KSsxO1xuICAgICAgICAgICAgICAvL3ByaW50KCBcIndhbnQ6XCIsIHdhbnRlZF9kZXB0aCwgXCJzdGFjazpcIiwgc3RhY2subGVuZ3RoKTtcbiAgICAgICAgICAgICAgaWYgKCB3YW50ZWRfZGVwdGggPiBzdGFjay5sZW5ndGggKSB7XG4gICAgICAgICAgICAgICAgLy8gRGVlcCBlbm91Z2ggZm9yIGEgbmVzdGVkIGxpc3Qgb3V0cmlnaHRcbiAgICAgICAgICAgICAgICAvL3ByaW50ICggXCJuZXcgbmVzdGVkIGxpc3RcIiApO1xuICAgICAgICAgICAgICAgIGxpc3QgPSBtYWtlX2xpc3QoIG0gKTtcbiAgICAgICAgICAgICAgICBsYXN0X2xpLnB1c2goIGxpc3QgKTtcbiAgICAgICAgICAgICAgICBsYXN0X2xpID0gbGlzdFsxXSA9IFsgXCJsaXN0aXRlbVwiIF07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gV2UgYXJlbid0IGRlZXAgZW5vdWdoIHRvIGJlIHN0cmljdGx5IGEgbmV3IGxldmVsLiBUaGlzIGlzXG4gICAgICAgICAgICAgICAgLy8gd2hlcmUgTWQucGwgZ29lcyBudXRzLiBJZiB0aGUgaW5kZW50IG1hdGNoZXMgYSBsZXZlbCBpbiB0aGVcbiAgICAgICAgICAgICAgICAvLyBzdGFjaywgcHV0IGl0IHRoZXJlLCBlbHNlIHB1dCBpdCBvbmUgZGVlcGVyIHRoZW4gdGhlXG4gICAgICAgICAgICAgICAgLy8gd2FudGVkX2RlcHRoIGRlc2VydmVzLlxuICAgICAgICAgICAgICAgIHZhciBmb3VuZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGZvciAoIGkgPSAwOyBpIDwgc3RhY2subGVuZ3RoOyBpKysgKSB7XG4gICAgICAgICAgICAgICAgICBpZiAoIHN0YWNrWyBpIF0uaW5kZW50ICE9IG1bMV0gKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgIGxpc3QgPSBzdGFja1sgaSBdLmxpc3Q7XG4gICAgICAgICAgICAgICAgICBzdGFjay5zcGxpY2UoIGkrMSwgc3RhY2subGVuZ3RoIC0gKGkrMSkgKTtcbiAgICAgICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICghZm91bmQpIHtcbiAgICAgICAgICAgICAgICAgIC8vcHJpbnQoXCJub3QgZm91bmQuIGw6XCIsIHVuZXZhbChsKSk7XG4gICAgICAgICAgICAgICAgICB3YW50ZWRfZGVwdGgrKztcbiAgICAgICAgICAgICAgICAgIGlmICggd2FudGVkX2RlcHRoIDw9IHN0YWNrLmxlbmd0aCApIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhY2suc3BsaWNlKHdhbnRlZF9kZXB0aCwgc3RhY2subGVuZ3RoIC0gd2FudGVkX2RlcHRoKTtcbiAgICAgICAgICAgICAgICAgICAgLy9wcmludChcIkRlc2lyZWQgZGVwdGggbm93XCIsIHdhbnRlZF9kZXB0aCwgXCJzdGFjazpcIiwgc3RhY2subGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgbGlzdCA9IHN0YWNrW3dhbnRlZF9kZXB0aC0xXS5saXN0O1xuICAgICAgICAgICAgICAgICAgICAvL3ByaW50KFwibGlzdDpcIiwgdW5ldmFsKGxpc3QpICk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy9wcmludCAoXCJtYWRlIG5ldyBzdGFjayBmb3IgbWVzc3kgaW5kZW50XCIpO1xuICAgICAgICAgICAgICAgICAgICBsaXN0ID0gbWFrZV9saXN0KG0pO1xuICAgICAgICAgICAgICAgICAgICBsYXN0X2xpLnB1c2gobGlzdCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy9wcmludCggdW5ldmFsKGxpc3QpLCBcImxhc3RcIiwgbGlzdCA9PT0gc3RhY2tbc3RhY2subGVuZ3RoLTFdLmxpc3QgKTtcbiAgICAgICAgICAgICAgICBsYXN0X2xpID0gWyBcImxpc3RpdGVtXCIgXTtcbiAgICAgICAgICAgICAgICBsaXN0LnB1c2gobGFzdF9saSk7XG4gICAgICAgICAgICAgIH0gLy8gZW5kIGRlcHRoIG9mIHNoZW5lZ2FpbnNcbiAgICAgICAgICAgICAgbmwgPSBcIlwiO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBBZGQgY29udGVudFxuICAgICAgICAgICAgaWYgKCBsLmxlbmd0aCA+IG1bMF0ubGVuZ3RoICkge1xuICAgICAgICAgICAgICBsaV9hY2N1bXVsYXRlICs9IG5sICsgbC5zdWJzdHIoIG1bMF0ubGVuZ3RoICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSAvLyB0aWdodF9zZWFyY2hcblxuICAgICAgICAgIGlmICggbGlfYWNjdW11bGF0ZS5sZW5ndGggKSB7XG4gICAgICAgICAgICBhZGQoIGxhc3RfbGksIGxvb3NlLCB0aGlzLnByb2Nlc3NJbmxpbmUoIGxpX2FjY3VtdWxhdGUgKSwgbmwgKTtcbiAgICAgICAgICAgIC8vIExvb3NlIG1vZGUgd2lsbCBoYXZlIGJlZW4gZGVhbHQgd2l0aC4gUmVzZXQgaXRcbiAgICAgICAgICAgIGxvb3NlID0gZmFsc2U7XG4gICAgICAgICAgICBsaV9hY2N1bXVsYXRlID0gXCJcIjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBMb29rIGF0IHRoZSBuZXh0IGJsb2NrIC0gd2UgbWlnaHQgaGF2ZSBhIGxvb3NlIGxpc3QuIE9yIGFuIGV4dHJhXG4gICAgICAgICAgLy8gcGFyYWdyYXBoIGZvciB0aGUgY3VycmVudCBsaVxuICAgICAgICAgIHZhciBjb250YWluZWQgPSBnZXRfY29udGFpbmVkX2Jsb2Nrcyggc3RhY2subGVuZ3RoLCBuZXh0ICk7XG5cbiAgICAgICAgICAvLyBEZWFsIHdpdGggY29kZSBibG9ja3Mgb3IgcHJvcGVybHkgbmVzdGVkIGxpc3RzXG4gICAgICAgICAgaWYgKCBjb250YWluZWQubGVuZ3RoID4gMCApIHtcbiAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSBhbGwgbGlzdGl0ZW1zIHVwIHRoZSBzdGFjayBhcmUgcGFyYWdyYXBoc1xuICAgICAgICAgICAgZm9yRWFjaCggc3RhY2ssIHBhcmFncmFwaGlmeSwgdGhpcyk7XG5cbiAgICAgICAgICAgIGxhc3RfbGkucHVzaC5hcHBseSggbGFzdF9saSwgdGhpcy50b1RyZWUoIGNvbnRhaW5lZCwgW10gKSApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBuZXh0X2Jsb2NrID0gbmV4dFswXSAmJiBuZXh0WzBdLnZhbHVlT2YoKSB8fCBcIlwiO1xuXG4gICAgICAgICAgaWYgKCBuZXh0X2Jsb2NrLm1hdGNoKGlzX2xpc3RfcmUpIHx8IG5leHRfYmxvY2subWF0Y2goIC9eIC8gKSApIHtcbiAgICAgICAgICAgIGJsb2NrID0gbmV4dC5zaGlmdCgpO1xuXG4gICAgICAgICAgICAvLyBDaGVjayBmb3IgYW4gSFIgZm9sbG93aW5nIGEgbGlzdDogZmVhdHVyZXMvbGlzdHMvaHJfYWJ1dHRpbmdcbiAgICAgICAgICAgIHZhciBociA9IHRoaXMuZGlhbGVjdC5ibG9jay5ob3JpelJ1bGUoIGJsb2NrLCBuZXh0ICk7XG5cbiAgICAgICAgICAgIGlmICggaHIgKSB7XG4gICAgICAgICAgICAgIHJldC5wdXNoLmFwcGx5KHJldCwgaHIpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gTWFrZSBzdXJlIGFsbCBsaXN0aXRlbXMgdXAgdGhlIHN0YWNrIGFyZSBwYXJhZ3JhcGhzXG4gICAgICAgICAgICBmb3JFYWNoKCBzdGFjaywgcGFyYWdyYXBoaWZ5LCB0aGlzKTtcblxuICAgICAgICAgICAgbG9vc2UgPSB0cnVlO1xuICAgICAgICAgICAgY29udGludWUgbG9vc2Vfc2VhcmNoO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfSAvLyBsb29zZV9zZWFyY2hcblxuICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgfTtcbiAgICB9KSgpLFxuXG4gICAgYmxvY2txdW90ZTogZnVuY3Rpb24gYmxvY2txdW90ZSggYmxvY2ssIG5leHQgKSB7XG4gICAgICBpZiAoICFibG9jay5tYXRjaCggL14+L20gKSApXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG5cbiAgICAgIHZhciBqc29ubWwgPSBbXTtcblxuICAgICAgLy8gc2VwYXJhdGUgb3V0IHRoZSBsZWFkaW5nIGFidXR0aW5nIGJsb2NrLCBpZiBhbnkuIEkuZS4gaW4gdGhpcyBjYXNlOlxuICAgICAgLy9cbiAgICAgIC8vICBhXG4gICAgICAvLyAgPiBiXG4gICAgICAvL1xuICAgICAgaWYgKCBibG9ja1sgMCBdICE9IFwiPlwiICkge1xuICAgICAgICB2YXIgbGluZXMgPSBibG9jay5zcGxpdCggL1xcbi8gKSxcbiAgICAgICAgICAgIHByZXYgPSBbXSxcbiAgICAgICAgICAgIGxpbmVfbm8gPSBibG9jay5saW5lTnVtYmVyO1xuXG4gICAgICAgIC8vIGtlZXAgc2hpZnRpbmcgbGluZXMgdW50aWwgeW91IGZpbmQgYSBjcm90Y2hldFxuICAgICAgICB3aGlsZSAoIGxpbmVzLmxlbmd0aCAmJiBsaW5lc1sgMCBdWyAwIF0gIT0gXCI+XCIgKSB7XG4gICAgICAgICAgICBwcmV2LnB1c2goIGxpbmVzLnNoaWZ0KCkgKTtcbiAgICAgICAgICAgIGxpbmVfbm8rKztcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBhYnV0dGluZyA9IG1rX2Jsb2NrKCBwcmV2LmpvaW4oIFwiXFxuXCIgKSwgXCJcXG5cIiwgYmxvY2subGluZU51bWJlciApO1xuICAgICAgICBqc29ubWwucHVzaC5hcHBseSgganNvbm1sLCB0aGlzLnByb2Nlc3NCbG9jayggYWJ1dHRpbmcsIFtdICkgKTtcbiAgICAgICAgLy8gcmVhc3NlbWJsZSBuZXcgYmxvY2sgb2YganVzdCBibG9jayBxdW90ZXMhXG4gICAgICAgIGJsb2NrID0gbWtfYmxvY2soIGxpbmVzLmpvaW4oIFwiXFxuXCIgKSwgYmxvY2sudHJhaWxpbmcsIGxpbmVfbm8gKTtcbiAgICAgIH1cblxuXG4gICAgICAvLyBpZiB0aGUgbmV4dCBibG9jayBpcyBhbHNvIGEgYmxvY2txdW90ZSBtZXJnZSBpdCBpblxuICAgICAgd2hpbGUgKCBuZXh0Lmxlbmd0aCAmJiBuZXh0WyAwIF1bIDAgXSA9PSBcIj5cIiApIHtcbiAgICAgICAgdmFyIGIgPSBuZXh0LnNoaWZ0KCk7XG4gICAgICAgIGJsb2NrID0gbWtfYmxvY2soIGJsb2NrICsgYmxvY2sudHJhaWxpbmcgKyBiLCBiLnRyYWlsaW5nLCBibG9jay5saW5lTnVtYmVyICk7XG4gICAgICB9XG5cbiAgICAgIC8vIFN0cmlwIG9mZiB0aGUgbGVhZGluZyBcIj4gXCIgYW5kIHJlLXByb2Nlc3MgYXMgYSBibG9jay5cbiAgICAgIHZhciBpbnB1dCA9IGJsb2NrLnJlcGxhY2UoIC9ePiA/L2dtLCBcIlwiICksXG4gICAgICAgICAgb2xkX3RyZWUgPSB0aGlzLnRyZWUsXG4gICAgICAgICAgcHJvY2Vzc2VkQmxvY2sgPSB0aGlzLnRvVHJlZSggaW5wdXQsIFsgXCJibG9ja3F1b3RlXCIgXSApLFxuICAgICAgICAgIGF0dHIgPSBleHRyYWN0X2F0dHIoIHByb2Nlc3NlZEJsb2NrICk7XG5cbiAgICAgIC8vIElmIGFueSBsaW5rIHJlZmVyZW5jZXMgd2VyZSBmb3VuZCBnZXQgcmlkIG9mIHRoZW1cbiAgICAgIGlmICggYXR0ciAmJiBhdHRyLnJlZmVyZW5jZXMgKSB7XG4gICAgICAgIGRlbGV0ZSBhdHRyLnJlZmVyZW5jZXM7XG4gICAgICAgIC8vIEFuZCB0aGVuIHJlbW92ZSB0aGUgYXR0cmlidXRlIG9iamVjdCBpZiBpdCdzIGVtcHR5XG4gICAgICAgIGlmICggaXNFbXB0eSggYXR0ciApICkge1xuICAgICAgICAgIHByb2Nlc3NlZEJsb2NrLnNwbGljZSggMSwgMSApO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGpzb25tbC5wdXNoKCBwcm9jZXNzZWRCbG9jayApO1xuICAgICAgcmV0dXJuIGpzb25tbDtcbiAgICB9LFxuXG4gICAgcmVmZXJlbmNlRGVmbjogZnVuY3Rpb24gcmVmZXJlbmNlRGVmbiggYmxvY2ssIG5leHQpIHtcbiAgICAgIHZhciByZSA9IC9eXFxzKlxcWyguKj8pXFxdOlxccyooXFxTKykoPzpcXHMrKD86KFsnXCJdKSguKj8pXFwzfFxcKCguKj8pXFwpKSk/XFxuPy87XG4gICAgICAvLyBpbnRlcmVzdGluZyBtYXRjaGVzIGFyZSBbICwgcmVmX2lkLCB1cmwsICwgdGl0bGUsIHRpdGxlIF1cblxuICAgICAgaWYgKCAhYmxvY2subWF0Y2gocmUpIClcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcblxuICAgICAgLy8gbWFrZSBhbiBhdHRyaWJ1dGUgbm9kZSBpZiBpdCBkb2Vzbid0IGV4aXN0XG4gICAgICBpZiAoICFleHRyYWN0X2F0dHIoIHRoaXMudHJlZSApICkge1xuICAgICAgICB0aGlzLnRyZWUuc3BsaWNlKCAxLCAwLCB7fSApO1xuICAgICAgfVxuXG4gICAgICB2YXIgYXR0cnMgPSBleHRyYWN0X2F0dHIoIHRoaXMudHJlZSApO1xuXG4gICAgICAvLyBtYWtlIGEgcmVmZXJlbmNlcyBoYXNoIGlmIGl0IGRvZXNuJ3QgZXhpc3RcbiAgICAgIGlmICggYXR0cnMucmVmZXJlbmNlcyA9PT0gdW5kZWZpbmVkICkge1xuICAgICAgICBhdHRycy5yZWZlcmVuY2VzID0ge307XG4gICAgICB9XG5cbiAgICAgIHZhciBiID0gdGhpcy5sb29wX3JlX292ZXJfYmxvY2socmUsIGJsb2NrLCBmdW5jdGlvbiggbSApIHtcblxuICAgICAgICBpZiAoIG1bMl0gJiYgbVsyXVswXSA9PSBcIjxcIiAmJiBtWzJdW21bMl0ubGVuZ3RoLTFdID09IFwiPlwiIClcbiAgICAgICAgICBtWzJdID0gbVsyXS5zdWJzdHJpbmcoIDEsIG1bMl0ubGVuZ3RoIC0gMSApO1xuXG4gICAgICAgIHZhciByZWYgPSBhdHRycy5yZWZlcmVuY2VzWyBtWzFdLnRvTG93ZXJDYXNlKCkgXSA9IHtcbiAgICAgICAgICBocmVmOiBtWzJdXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKCBtWzRdICE9PSB1bmRlZmluZWQgKVxuICAgICAgICAgIHJlZi50aXRsZSA9IG1bNF07XG4gICAgICAgIGVsc2UgaWYgKCBtWzVdICE9PSB1bmRlZmluZWQgKVxuICAgICAgICAgIHJlZi50aXRsZSA9IG1bNV07XG5cbiAgICAgIH0gKTtcblxuICAgICAgaWYgKCBiLmxlbmd0aCApXG4gICAgICAgIG5leHQudW5zaGlmdCggbWtfYmxvY2soIGIsIGJsb2NrLnRyYWlsaW5nICkgKTtcblxuICAgICAgcmV0dXJuIFtdO1xuICAgIH0sXG5cbiAgICBwYXJhOiBmdW5jdGlvbiBwYXJhKCBibG9jaywgbmV4dCApIHtcbiAgICAgIC8vIGV2ZXJ5dGhpbmcncyBhIHBhcmEhXG4gICAgICByZXR1cm4gWyBbXCJwYXJhXCJdLmNvbmNhdCggdGhpcy5wcm9jZXNzSW5saW5lKCBibG9jayApICkgXTtcbiAgICB9XG4gIH1cbn07XG5cbk1hcmtkb3duLmRpYWxlY3RzLkdydWJlci5pbmxpbmUgPSB7XG5cbiAgICBfX29uZUVsZW1lbnRfXzogZnVuY3Rpb24gb25lRWxlbWVudCggdGV4dCwgcGF0dGVybnNfb3JfcmUsIHByZXZpb3VzX25vZGVzICkge1xuICAgICAgdmFyIG0sXG4gICAgICAgICAgcmVzLFxuICAgICAgICAgIGxhc3RJbmRleCA9IDA7XG5cbiAgICAgIHBhdHRlcm5zX29yX3JlID0gcGF0dGVybnNfb3JfcmUgfHwgdGhpcy5kaWFsZWN0LmlubGluZS5fX3BhdHRlcm5zX187XG4gICAgICB2YXIgcmUgPSBuZXcgUmVnRXhwKCBcIihbXFxcXHNcXFxcU10qPykoXCIgKyAocGF0dGVybnNfb3JfcmUuc291cmNlIHx8IHBhdHRlcm5zX29yX3JlKSArIFwiKVwiICk7XG5cbiAgICAgIG0gPSByZS5leGVjKCB0ZXh0ICk7XG4gICAgICBpZiAoIW0pIHtcbiAgICAgICAgLy8gSnVzdCBib3JpbmcgdGV4dFxuICAgICAgICByZXR1cm4gWyB0ZXh0Lmxlbmd0aCwgdGV4dCBdO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoIG1bMV0gKSB7XG4gICAgICAgIC8vIFNvbWUgdW4taW50ZXJlc3RpbmcgdGV4dCBtYXRjaGVkLiBSZXR1cm4gdGhhdCBmaXJzdFxuICAgICAgICByZXR1cm4gWyBtWzFdLmxlbmd0aCwgbVsxXSBdO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVzO1xuICAgICAgaWYgKCBtWzJdIGluIHRoaXMuZGlhbGVjdC5pbmxpbmUgKSB7XG4gICAgICAgIHJlcyA9IHRoaXMuZGlhbGVjdC5pbmxpbmVbIG1bMl0gXS5jYWxsKFxuICAgICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICAgIHRleHQuc3Vic3RyKCBtLmluZGV4ICksIG0sIHByZXZpb3VzX25vZGVzIHx8IFtdICk7XG4gICAgICB9XG4gICAgICAvLyBEZWZhdWx0IGZvciBub3cgdG8gbWFrZSBkZXYgZWFzaWVyLiBqdXN0IHNsdXJwIHNwZWNpYWwgYW5kIG91dHB1dCBpdC5cbiAgICAgIHJlcyA9IHJlcyB8fCBbIG1bMl0ubGVuZ3RoLCBtWzJdIF07XG4gICAgICByZXR1cm4gcmVzO1xuICAgIH0sXG5cbiAgICBfX2NhbGxfXzogZnVuY3Rpb24gaW5saW5lKCB0ZXh0LCBwYXR0ZXJucyApIHtcblxuICAgICAgdmFyIG91dCA9IFtdLFxuICAgICAgICAgIHJlcztcblxuICAgICAgZnVuY3Rpb24gYWRkKHgpIHtcbiAgICAgICAgLy9EOnNlbGYuZGVidWcoXCIgIGFkZGluZyBvdXRwdXRcIiwgdW5ldmFsKHgpKTtcbiAgICAgICAgaWYgKCB0eXBlb2YgeCA9PSBcInN0cmluZ1wiICYmIHR5cGVvZiBvdXRbb3V0Lmxlbmd0aC0xXSA9PSBcInN0cmluZ1wiIClcbiAgICAgICAgICBvdXRbIG91dC5sZW5ndGgtMSBdICs9IHg7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICBvdXQucHVzaCh4KTtcbiAgICAgIH1cblxuICAgICAgd2hpbGUgKCB0ZXh0Lmxlbmd0aCA+IDAgKSB7XG4gICAgICAgIHJlcyA9IHRoaXMuZGlhbGVjdC5pbmxpbmUuX19vbmVFbGVtZW50X18uY2FsbCh0aGlzLCB0ZXh0LCBwYXR0ZXJucywgb3V0ICk7XG4gICAgICAgIHRleHQgPSB0ZXh0LnN1YnN0ciggcmVzLnNoaWZ0KCkgKTtcbiAgICAgICAgZm9yRWFjaChyZXMsIGFkZCApXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBvdXQ7XG4gICAgfSxcblxuICAgIC8vIFRoZXNlIGNoYXJhY3RlcnMgYXJlIGludGVyc3RpbmcgZWxzZXdoZXJlLCBzbyBoYXZlIHJ1bGVzIGZvciB0aGVtIHNvIHRoYXRcbiAgICAvLyBjaHVua3Mgb2YgcGxhaW4gdGV4dCBibG9ja3MgZG9uJ3QgaW5jbHVkZSB0aGVtXG4gICAgXCJdXCI6IGZ1bmN0aW9uICgpIHt9LFxuICAgIFwifVwiOiBmdW5jdGlvbiAoKSB7fSxcblxuICAgIF9fZXNjYXBlX18gOiAvXlxcXFxbXFxcXGBcXCpfe31cXFtcXF0oKSNcXCsuIVxcLV0vLFxuXG4gICAgXCJcXFxcXCI6IGZ1bmN0aW9uIGVzY2FwZWQoIHRleHQgKSB7XG4gICAgICAvLyBbIGxlbmd0aCBvZiBpbnB1dCBwcm9jZXNzZWQsIG5vZGUvY2hpbGRyZW4gdG8gYWRkLi4uIF1cbiAgICAgIC8vIE9ubHkgZXNhY2FwZTogXFwgYCAqIF8geyB9IFsgXSAoICkgIyAqICsgLSAuICFcbiAgICAgIGlmICggdGhpcy5kaWFsZWN0LmlubGluZS5fX2VzY2FwZV9fLmV4ZWMoIHRleHQgKSApXG4gICAgICAgIHJldHVybiBbIDIsIHRleHQuY2hhckF0KCAxICkgXTtcbiAgICAgIGVsc2VcbiAgICAgICAgLy8gTm90IGFuIGVzYWNwZVxuICAgICAgICByZXR1cm4gWyAxLCBcIlxcXFxcIiBdO1xuICAgIH0sXG5cbiAgICBcIiFbXCI6IGZ1bmN0aW9uIGltYWdlKCB0ZXh0ICkge1xuXG4gICAgICAvLyBVbmxpa2UgaW1hZ2VzLCBhbHQgdGV4dCBpcyBwbGFpbiB0ZXh0IG9ubHkuIG5vIG90aGVyIGVsZW1lbnRzIGFyZVxuICAgICAgLy8gYWxsb3dlZCBpbiB0aGVyZVxuXG4gICAgICAvLyAhW0FsdCB0ZXh0XSgvcGF0aC90by9pbWcuanBnIFwiT3B0aW9uYWwgdGl0bGVcIilcbiAgICAgIC8vICAgICAgMSAgICAgICAgICAyICAgICAgICAgICAgMyAgICAgICA0ICAgICAgICAgPC0tLSBjYXB0dXJlc1xuICAgICAgdmFyIG0gPSB0ZXh0Lm1hdGNoKCAvXiFcXFsoLio/KVxcXVsgXFx0XSpcXChbIFxcdF0qKFteXCIpXSo/KSg/OlsgXFx0XSsoW1wiJ10pKC4qPylcXDMpP1sgXFx0XSpcXCkvICk7XG5cbiAgICAgIGlmICggbSApIHtcbiAgICAgICAgaWYgKCBtWzJdICYmIG1bMl1bMF0gPT0gXCI8XCIgJiYgbVsyXVttWzJdLmxlbmd0aC0xXSA9PSBcIj5cIiApXG4gICAgICAgICAgbVsyXSA9IG1bMl0uc3Vic3RyaW5nKCAxLCBtWzJdLmxlbmd0aCAtIDEgKTtcblxuICAgICAgICBtWzJdID0gdGhpcy5kaWFsZWN0LmlubGluZS5fX2NhbGxfXy5jYWxsKCB0aGlzLCBtWzJdLCAvXFxcXC8gKVswXTtcblxuICAgICAgICB2YXIgYXR0cnMgPSB7IGFsdDogbVsxXSwgaHJlZjogbVsyXSB8fCBcIlwiIH07XG4gICAgICAgIGlmICggbVs0XSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgIGF0dHJzLnRpdGxlID0gbVs0XTtcblxuICAgICAgICByZXR1cm4gWyBtWzBdLmxlbmd0aCwgWyBcImltZ1wiLCBhdHRycyBdIF07XG4gICAgICB9XG5cbiAgICAgIC8vICFbQWx0IHRleHRdW2lkXVxuICAgICAgbSA9IHRleHQubWF0Y2goIC9eIVxcWyguKj8pXFxdWyBcXHRdKlxcWyguKj8pXFxdLyApO1xuXG4gICAgICBpZiAoIG0gKSB7XG4gICAgICAgIC8vIFdlIGNhbid0IGNoZWNrIGlmIHRoZSByZWZlcmVuY2UgaXMga25vd24gaGVyZSBhcyBpdCBsaWtlbHkgd29udCBiZVxuICAgICAgICAvLyBmb3VuZCB0aWxsIGFmdGVyLiBDaGVjayBpdCBpbiBtZCB0cmVlLT5obXRsIHRyZWUgY29udmVyc2lvblxuICAgICAgICByZXR1cm4gWyBtWzBdLmxlbmd0aCwgWyBcImltZ19yZWZcIiwgeyBhbHQ6IG1bMV0sIHJlZjogbVsyXS50b0xvd2VyQ2FzZSgpLCBvcmlnaW5hbDogbVswXSB9IF0gXTtcbiAgICAgIH1cblxuICAgICAgLy8gSnVzdCBjb25zdW1lIHRoZSAnIVsnXG4gICAgICByZXR1cm4gWyAyLCBcIiFbXCIgXTtcbiAgICB9LFxuXG4gICAgXCJbXCI6IGZ1bmN0aW9uIGxpbmsoIHRleHQgKSB7XG5cbiAgICAgIHZhciBvcmlnID0gU3RyaW5nKHRleHQpO1xuICAgICAgLy8gSW5saW5lIGNvbnRlbnQgaXMgcG9zc2libGUgaW5zaWRlIGBsaW5rIHRleHRgXG4gICAgICB2YXIgcmVzID0gTWFya2Rvd24uRGlhbGVjdEhlbHBlcnMuaW5saW5lX3VudGlsX2NoYXIuY2FsbCggdGhpcywgdGV4dC5zdWJzdHIoMSksIFwiXVwiICk7XG5cbiAgICAgIC8vIE5vIGNsb3NpbmcgJ10nIGZvdW5kLiBKdXN0IGNvbnN1bWUgdGhlIFtcbiAgICAgIGlmICggIXJlcyApIHJldHVybiBbIDEsIFwiW1wiIF07XG5cbiAgICAgIHZhciBjb25zdW1lZCA9IDEgKyByZXNbIDAgXSxcbiAgICAgICAgICBjaGlsZHJlbiA9IHJlc1sgMSBdLFxuICAgICAgICAgIGxpbmssXG4gICAgICAgICAgYXR0cnM7XG5cbiAgICAgIC8vIEF0IHRoaXMgcG9pbnQgdGhlIGZpcnN0IFsuLi5dIGhhcyBiZWVuIHBhcnNlZC4gU2VlIHdoYXQgZm9sbG93cyB0byBmaW5kXG4gICAgICAvLyBvdXQgd2hpY2gga2luZCBvZiBsaW5rIHdlIGFyZSAocmVmZXJlbmNlIG9yIGRpcmVjdCB1cmwpXG4gICAgICB0ZXh0ID0gdGV4dC5zdWJzdHIoIGNvbnN1bWVkICk7XG5cbiAgICAgIC8vIFtsaW5rIHRleHRdKC9wYXRoL3RvL2ltZy5qcGcgXCJPcHRpb25hbCB0aXRsZVwiKVxuICAgICAgLy8gICAgICAgICAgICAgICAgIDEgICAgICAgICAgICAyICAgICAgIDMgICAgICAgICA8LS0tIGNhcHR1cmVzXG4gICAgICAvLyBUaGlzIHdpbGwgY2FwdHVyZSB1cCB0byB0aGUgbGFzdCBwYXJlbiBpbiB0aGUgYmxvY2suIFdlIHRoZW4gcHVsbFxuICAgICAgLy8gYmFjayBiYXNlZCBvbiBpZiB0aGVyZSBhIG1hdGNoaW5nIG9uZXMgaW4gdGhlIHVybFxuICAgICAgLy8gICAgKFtoZXJlXSgvdXJsLyh0ZXN0KSlcbiAgICAgIC8vIFRoZSBwYXJlbnMgaGF2ZSB0byBiZSBiYWxhbmNlZFxuICAgICAgdmFyIG0gPSB0ZXh0Lm1hdGNoKCAvXlxccypcXChbIFxcdF0qKFteXCInXSopKD86WyBcXHRdKyhbXCInXSkoLio/KVxcMik/WyBcXHRdKlxcKS8gKTtcbiAgICAgIGlmICggbSApIHtcbiAgICAgICAgdmFyIHVybCA9IG1bMV07XG4gICAgICAgIGNvbnN1bWVkICs9IG1bMF0ubGVuZ3RoO1xuXG4gICAgICAgIGlmICggdXJsICYmIHVybFswXSA9PSBcIjxcIiAmJiB1cmxbdXJsLmxlbmd0aC0xXSA9PSBcIj5cIiApXG4gICAgICAgICAgdXJsID0gdXJsLnN1YnN0cmluZyggMSwgdXJsLmxlbmd0aCAtIDEgKTtcblxuICAgICAgICAvLyBJZiB0aGVyZSBpcyBhIHRpdGxlIHdlIGRvbid0IGhhdmUgdG8gd29ycnkgYWJvdXQgcGFyZW5zIGluIHRoZSB1cmxcbiAgICAgICAgaWYgKCAhbVszXSApIHtcbiAgICAgICAgICB2YXIgb3Blbl9wYXJlbnMgPSAxOyAvLyBPbmUgb3BlbiB0aGF0IGlzbid0IGluIHRoZSBjYXB0dXJlXG4gICAgICAgICAgZm9yICggdmFyIGxlbiA9IDA7IGxlbiA8IHVybC5sZW5ndGg7IGxlbisrICkge1xuICAgICAgICAgICAgc3dpdGNoICggdXJsW2xlbl0gKSB7XG4gICAgICAgICAgICBjYXNlIFwiKFwiOlxuICAgICAgICAgICAgICBvcGVuX3BhcmVucysrO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCIpXCI6XG4gICAgICAgICAgICAgIGlmICggLS1vcGVuX3BhcmVucyA9PSAwKSB7XG4gICAgICAgICAgICAgICAgY29uc3VtZWQgLT0gdXJsLmxlbmd0aCAtIGxlbjtcbiAgICAgICAgICAgICAgICB1cmwgPSB1cmwuc3Vic3RyaW5nKDAsIGxlbik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gUHJvY2VzcyBlc2NhcGVzIG9ubHlcbiAgICAgICAgdXJsID0gdGhpcy5kaWFsZWN0LmlubGluZS5fX2NhbGxfXy5jYWxsKCB0aGlzLCB1cmwsIC9cXFxcLyApWzBdO1xuXG4gICAgICAgIGF0dHJzID0geyBocmVmOiB1cmwgfHwgXCJcIiB9O1xuICAgICAgICBpZiAoIG1bM10gIT09IHVuZGVmaW5lZClcbiAgICAgICAgICBhdHRycy50aXRsZSA9IG1bM107XG5cbiAgICAgICAgbGluayA9IFsgXCJsaW5rXCIsIGF0dHJzIF0uY29uY2F0KCBjaGlsZHJlbiApO1xuICAgICAgICByZXR1cm4gWyBjb25zdW1lZCwgbGluayBdO1xuICAgICAgfVxuXG4gICAgICAvLyBbQWx0IHRleHRdW2lkXVxuICAgICAgLy8gW0FsdCB0ZXh0XSBbaWRdXG4gICAgICBtID0gdGV4dC5tYXRjaCggL15cXHMqXFxbKC4qPylcXF0vICk7XG5cbiAgICAgIGlmICggbSApIHtcblxuICAgICAgICBjb25zdW1lZCArPSBtWyAwIF0ubGVuZ3RoO1xuXG4gICAgICAgIC8vIFtsaW5rc11bXSB1c2VzIGxpbmtzIGFzIGl0cyByZWZlcmVuY2VcbiAgICAgICAgYXR0cnMgPSB7IHJlZjogKCBtWyAxIF0gfHwgU3RyaW5nKGNoaWxkcmVuKSApLnRvTG93ZXJDYXNlKCksICBvcmlnaW5hbDogb3JpZy5zdWJzdHIoIDAsIGNvbnN1bWVkICkgfTtcblxuICAgICAgICBsaW5rID0gWyBcImxpbmtfcmVmXCIsIGF0dHJzIF0uY29uY2F0KCBjaGlsZHJlbiApO1xuXG4gICAgICAgIC8vIFdlIGNhbid0IGNoZWNrIGlmIHRoZSByZWZlcmVuY2UgaXMga25vd24gaGVyZSBhcyBpdCBsaWtlbHkgd29udCBiZVxuICAgICAgICAvLyBmb3VuZCB0aWxsIGFmdGVyLiBDaGVjayBpdCBpbiBtZCB0cmVlLT5obXRsIHRyZWUgY29udmVyc2lvbi5cbiAgICAgICAgLy8gU3RvcmUgdGhlIG9yaWdpbmFsIHNvIHRoYXQgY29udmVyc2lvbiBjYW4gcmV2ZXJ0IGlmIHRoZSByZWYgaXNuJ3QgZm91bmQuXG4gICAgICAgIHJldHVybiBbIGNvbnN1bWVkLCBsaW5rIF07XG4gICAgICB9XG5cbiAgICAgIC8vIFtpZF1cbiAgICAgIC8vIE9ubHkgaWYgaWQgaXMgcGxhaW4gKG5vIGZvcm1hdHRpbmcuKVxuICAgICAgaWYgKCBjaGlsZHJlbi5sZW5ndGggPT0gMSAmJiB0eXBlb2YgY2hpbGRyZW5bMF0gPT0gXCJzdHJpbmdcIiApIHtcblxuICAgICAgICBhdHRycyA9IHsgcmVmOiBjaGlsZHJlblswXS50b0xvd2VyQ2FzZSgpLCAgb3JpZ2luYWw6IG9yaWcuc3Vic3RyKCAwLCBjb25zdW1lZCApIH07XG4gICAgICAgIGxpbmsgPSBbIFwibGlua19yZWZcIiwgYXR0cnMsIGNoaWxkcmVuWzBdIF07XG4gICAgICAgIHJldHVybiBbIGNvbnN1bWVkLCBsaW5rIF07XG4gICAgICB9XG5cbiAgICAgIC8vIEp1c3QgY29uc3VtZSB0aGUgXCJbXCJcbiAgICAgIHJldHVybiBbIDEsIFwiW1wiIF07XG4gICAgfSxcblxuXG4gICAgXCI8XCI6IGZ1bmN0aW9uIGF1dG9MaW5rKCB0ZXh0ICkge1xuICAgICAgdmFyIG07XG5cbiAgICAgIGlmICggKCBtID0gdGV4dC5tYXRjaCggL148KD86KChodHRwcz98ZnRwfG1haWx0byk6W14+XSspfCguKj9ALio/XFwuW2EtekEtWl0rKSk+LyApICkgIT0gbnVsbCApIHtcbiAgICAgICAgaWYgKCBtWzNdICkge1xuICAgICAgICAgIHJldHVybiBbIG1bMF0ubGVuZ3RoLCBbIFwibGlua1wiLCB7IGhyZWY6IFwibWFpbHRvOlwiICsgbVszXSB9LCBtWzNdIF0gXTtcblxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCBtWzJdID09IFwibWFpbHRvXCIgKSB7XG4gICAgICAgICAgcmV0dXJuIFsgbVswXS5sZW5ndGgsIFsgXCJsaW5rXCIsIHsgaHJlZjogbVsxXSB9LCBtWzFdLnN1YnN0cihcIm1haWx0bzpcIi5sZW5ndGggKSBdIF07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICAgIHJldHVybiBbIG1bMF0ubGVuZ3RoLCBbIFwibGlua1wiLCB7IGhyZWY6IG1bMV0gfSwgbVsxXSBdIF07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBbIDEsIFwiPFwiIF07XG4gICAgfSxcblxuICAgIFwiYFwiOiBmdW5jdGlvbiBpbmxpbmVDb2RlKCB0ZXh0ICkge1xuICAgICAgLy8gSW5saW5lIGNvZGUgYmxvY2suIGFzIG1hbnkgYmFja3RpY2tzIGFzIHlvdSBsaWtlIHRvIHN0YXJ0IGl0XG4gICAgICAvLyBBbHdheXMgc2tpcCBvdmVyIHRoZSBvcGVuaW5nIHRpY2tzLlxuICAgICAgdmFyIG0gPSB0ZXh0Lm1hdGNoKCAvKGArKSgoW1xcc1xcU10qPylcXDEpLyApO1xuXG4gICAgICBpZiAoIG0gJiYgbVsyXSApXG4gICAgICAgIHJldHVybiBbIG1bMV0ubGVuZ3RoICsgbVsyXS5sZW5ndGgsIFsgXCJpbmxpbmVjb2RlXCIsIG1bM10gXSBdO1xuICAgICAgZWxzZSB7XG4gICAgICAgIC8vIFRPRE86IE5vIG1hdGNoaW5nIGVuZCBjb2RlIGZvdW5kIC0gd2FybiFcbiAgICAgICAgcmV0dXJuIFsgMSwgXCJgXCIgXTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCIgIFxcblwiOiBmdW5jdGlvbiBsaW5lQnJlYWsoIHRleHQgKSB7XG4gICAgICByZXR1cm4gWyAzLCBbIFwibGluZWJyZWFrXCIgXSBdO1xuICAgIH1cblxufTtcblxuLy8gTWV0YSBIZWxwZXIvZ2VuZXJhdG9yIG1ldGhvZCBmb3IgZW0gYW5kIHN0cm9uZyBoYW5kbGluZ1xuZnVuY3Rpb24gc3Ryb25nX2VtKCB0YWcsIG1kICkge1xuXG4gIHZhciBzdGF0ZV9zbG90ID0gdGFnICsgXCJfc3RhdGVcIixcbiAgICAgIG90aGVyX3Nsb3QgPSB0YWcgPT0gXCJzdHJvbmdcIiA/IFwiZW1fc3RhdGVcIiA6IFwic3Ryb25nX3N0YXRlXCI7XG5cbiAgZnVuY3Rpb24gQ2xvc2VUYWcobGVuKSB7XG4gICAgdGhpcy5sZW5fYWZ0ZXIgPSBsZW47XG4gICAgdGhpcy5uYW1lID0gXCJjbG9zZV9cIiArIG1kO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICggdGV4dCwgb3JpZ19tYXRjaCApIHtcblxuICAgIGlmICggdGhpc1tzdGF0ZV9zbG90XVswXSA9PSBtZCApIHtcbiAgICAgIC8vIE1vc3QgcmVjZW50IGVtIGlzIG9mIHRoaXMgdHlwZVxuICAgICAgLy9EOnRoaXMuZGVidWcoXCJjbG9zaW5nXCIsIG1kKTtcbiAgICAgIHRoaXNbc3RhdGVfc2xvdF0uc2hpZnQoKTtcblxuICAgICAgLy8gXCJDb25zdW1lXCIgZXZlcnl0aGluZyB0byBnbyBiYWNrIHRvIHRoZSByZWNydXNpb24gaW4gdGhlIGVsc2UtYmxvY2sgYmVsb3dcbiAgICAgIHJldHVyblsgdGV4dC5sZW5ndGgsIG5ldyBDbG9zZVRhZyh0ZXh0Lmxlbmd0aC1tZC5sZW5ndGgpIF07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgLy8gU3RvcmUgYSBjbG9uZSBvZiB0aGUgZW0vc3Ryb25nIHN0YXRlc1xuICAgICAgdmFyIG90aGVyID0gdGhpc1tvdGhlcl9zbG90XS5zbGljZSgpLFxuICAgICAgICAgIHN0YXRlID0gdGhpc1tzdGF0ZV9zbG90XS5zbGljZSgpO1xuXG4gICAgICB0aGlzW3N0YXRlX3Nsb3RdLnVuc2hpZnQobWQpO1xuXG4gICAgICAvL0Q6dGhpcy5kZWJ1Z19pbmRlbnQgKz0gXCIgIFwiO1xuXG4gICAgICAvLyBSZWN1cnNlXG4gICAgICB2YXIgcmVzID0gdGhpcy5wcm9jZXNzSW5saW5lKCB0ZXh0LnN1YnN0ciggbWQubGVuZ3RoICkgKTtcbiAgICAgIC8vRDp0aGlzLmRlYnVnX2luZGVudCA9IHRoaXMuZGVidWdfaW5kZW50LnN1YnN0cigyKTtcblxuICAgICAgdmFyIGxhc3QgPSByZXNbcmVzLmxlbmd0aCAtIDFdO1xuXG4gICAgICAvL0Q6dGhpcy5kZWJ1ZyhcInByb2Nlc3NJbmxpbmUgZnJvbVwiLCB0YWcgKyBcIjogXCIsIHVuZXZhbCggcmVzICkgKTtcblxuICAgICAgdmFyIGNoZWNrID0gdGhpc1tzdGF0ZV9zbG90XS5zaGlmdCgpO1xuICAgICAgaWYgKCBsYXN0IGluc3RhbmNlb2YgQ2xvc2VUYWcgKSB7XG4gICAgICAgIHJlcy5wb3AoKTtcbiAgICAgICAgLy8gV2UgbWF0Y2hlZCEgSHV6emFoLlxuICAgICAgICB2YXIgY29uc3VtZWQgPSB0ZXh0Lmxlbmd0aCAtIGxhc3QubGVuX2FmdGVyO1xuICAgICAgICByZXR1cm4gWyBjb25zdW1lZCwgWyB0YWcgXS5jb25jYXQocmVzKSBdO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIC8vIFJlc3RvcmUgdGhlIHN0YXRlIG9mIHRoZSBvdGhlciBraW5kLiBXZSBtaWdodCBoYXZlIG1pc3Rha2VubHkgY2xvc2VkIGl0LlxuICAgICAgICB0aGlzW290aGVyX3Nsb3RdID0gb3RoZXI7XG4gICAgICAgIHRoaXNbc3RhdGVfc2xvdF0gPSBzdGF0ZTtcblxuICAgICAgICAvLyBXZSBjYW4ndCByZXVzZSB0aGUgcHJvY2Vzc2VkIHJlc3VsdCBhcyBpdCBjb3VsZCBoYXZlIHdyb25nIHBhcnNpbmcgY29udGV4dHMgaW4gaXQuXG4gICAgICAgIHJldHVybiBbIG1kLmxlbmd0aCwgbWQgXTtcbiAgICAgIH1cbiAgICB9XG4gIH07IC8vIEVuZCByZXR1cm5lZCBmdW5jdGlvblxufVxuXG5NYXJrZG93bi5kaWFsZWN0cy5HcnViZXIuaW5saW5lW1wiKipcIl0gPSBzdHJvbmdfZW0oXCJzdHJvbmdcIiwgXCIqKlwiKTtcbk1hcmtkb3duLmRpYWxlY3RzLkdydWJlci5pbmxpbmVbXCJfX1wiXSA9IHN0cm9uZ19lbShcInN0cm9uZ1wiLCBcIl9fXCIpO1xuTWFya2Rvd24uZGlhbGVjdHMuR3J1YmVyLmlubGluZVtcIipcIl0gID0gc3Ryb25nX2VtKFwiZW1cIiwgXCIqXCIpO1xuTWFya2Rvd24uZGlhbGVjdHMuR3J1YmVyLmlubGluZVtcIl9cIl0gID0gc3Ryb25nX2VtKFwiZW1cIiwgXCJfXCIpO1xuXG5cbi8vIEJ1aWxkIGRlZmF1bHQgb3JkZXIgZnJvbSBpbnNlcnRpb24gb3JkZXIuXG5NYXJrZG93bi5idWlsZEJsb2NrT3JkZXIgPSBmdW5jdGlvbihkKSB7XG4gIHZhciBvcmQgPSBbXTtcbiAgZm9yICggdmFyIGkgaW4gZCApIHtcbiAgICBpZiAoIGkgPT0gXCJfX29yZGVyX19cIiB8fCBpID09IFwiX19jYWxsX19cIiApIGNvbnRpbnVlO1xuICAgIG9yZC5wdXNoKCBpICk7XG4gIH1cbiAgZC5fX29yZGVyX18gPSBvcmQ7XG59O1xuXG4vLyBCdWlsZCBwYXR0ZXJucyBmb3IgaW5saW5lIG1hdGNoZXJcbk1hcmtkb3duLmJ1aWxkSW5saW5lUGF0dGVybnMgPSBmdW5jdGlvbihkKSB7XG4gIHZhciBwYXR0ZXJucyA9IFtdO1xuXG4gIGZvciAoIHZhciBpIGluIGQgKSB7XG4gICAgLy8gX19mb29fXyBpcyByZXNlcnZlZCBhbmQgbm90IGEgcGF0dGVyblxuICAgIGlmICggaS5tYXRjaCggL15fXy4qX18kLykgKSBjb250aW51ZTtcbiAgICB2YXIgbCA9IGkucmVwbGFjZSggLyhbXFxcXC4qKz98KClcXFtcXF17fV0pL2csIFwiXFxcXCQxXCIgKVxuICAgICAgICAgICAgIC5yZXBsYWNlKCAvXFxuLywgXCJcXFxcblwiICk7XG4gICAgcGF0dGVybnMucHVzaCggaS5sZW5ndGggPT0gMSA/IGwgOiBcIig/OlwiICsgbCArIFwiKVwiICk7XG4gIH1cblxuICBwYXR0ZXJucyA9IHBhdHRlcm5zLmpvaW4oXCJ8XCIpO1xuICBkLl9fcGF0dGVybnNfXyA9IHBhdHRlcm5zO1xuICAvL3ByaW50KFwicGF0dGVybnM6XCIsIHVuZXZhbCggcGF0dGVybnMgKSApO1xuXG4gIHZhciBmbiA9IGQuX19jYWxsX187XG4gIGQuX19jYWxsX18gPSBmdW5jdGlvbih0ZXh0LCBwYXR0ZXJuKSB7XG4gICAgaWYgKCBwYXR0ZXJuICE9IHVuZGVmaW5lZCApIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoaXMsIHRleHQsIHBhdHRlcm4pO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhpcywgdGV4dCwgcGF0dGVybnMpO1xuICAgIH1cbiAgfTtcbn07XG5cbk1hcmtkb3duLkRpYWxlY3RIZWxwZXJzID0ge307XG5NYXJrZG93bi5EaWFsZWN0SGVscGVycy5pbmxpbmVfdW50aWxfY2hhciA9IGZ1bmN0aW9uKCB0ZXh0LCB3YW50ICkge1xuICB2YXIgY29uc3VtZWQgPSAwLFxuICAgICAgbm9kZXMgPSBbXTtcblxuICB3aGlsZSAoIHRydWUgKSB7XG4gICAgaWYgKCB0ZXh0LmNoYXJBdCggY29uc3VtZWQgKSA9PSB3YW50ICkge1xuICAgICAgLy8gRm91bmQgdGhlIGNoYXJhY3RlciB3ZSB3ZXJlIGxvb2tpbmcgZm9yXG4gICAgICBjb25zdW1lZCsrO1xuICAgICAgcmV0dXJuIFsgY29uc3VtZWQsIG5vZGVzIF07XG4gICAgfVxuXG4gICAgaWYgKCBjb25zdW1lZCA+PSB0ZXh0Lmxlbmd0aCApIHtcbiAgICAgIC8vIE5vIGNsb3NpbmcgY2hhciBmb3VuZC4gQWJvcnQuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgcmVzID0gdGhpcy5kaWFsZWN0LmlubGluZS5fX29uZUVsZW1lbnRfXy5jYWxsKHRoaXMsIHRleHQuc3Vic3RyKCBjb25zdW1lZCApICk7XG4gICAgY29uc3VtZWQgKz0gcmVzWyAwIF07XG4gICAgLy8gQWRkIGFueSByZXR1cm5lZCBub2Rlcy5cbiAgICBub2Rlcy5wdXNoLmFwcGx5KCBub2RlcywgcmVzLnNsaWNlKCAxICkgKTtcbiAgfVxufVxuXG4vLyBIZWxwZXIgZnVuY3Rpb24gdG8gbWFrZSBzdWItY2xhc3NpbmcgYSBkaWFsZWN0IGVhc2llclxuTWFya2Rvd24uc3ViY2xhc3NEaWFsZWN0ID0gZnVuY3Rpb24oIGQgKSB7XG4gIGZ1bmN0aW9uIEJsb2NrKCkge31cbiAgQmxvY2sucHJvdG90eXBlID0gZC5ibG9jaztcbiAgZnVuY3Rpb24gSW5saW5lKCkge31cbiAgSW5saW5lLnByb3RvdHlwZSA9IGQuaW5saW5lO1xuXG4gIHJldHVybiB7IGJsb2NrOiBuZXcgQmxvY2soKSwgaW5saW5lOiBuZXcgSW5saW5lKCkgfTtcbn07XG5cbk1hcmtkb3duLmJ1aWxkQmxvY2tPcmRlciAoIE1hcmtkb3duLmRpYWxlY3RzLkdydWJlci5ibG9jayApO1xuTWFya2Rvd24uYnVpbGRJbmxpbmVQYXR0ZXJucyggTWFya2Rvd24uZGlhbGVjdHMuR3J1YmVyLmlubGluZSApO1xuXG5NYXJrZG93bi5kaWFsZWN0cy5NYXJ1a3UgPSBNYXJrZG93bi5zdWJjbGFzc0RpYWxlY3QoIE1hcmtkb3duLmRpYWxlY3RzLkdydWJlciApO1xuXG5NYXJrZG93bi5kaWFsZWN0cy5NYXJ1a3UucHJvY2Vzc01ldGFIYXNoID0gZnVuY3Rpb24gcHJvY2Vzc01ldGFIYXNoKCBtZXRhX3N0cmluZyApIHtcbiAgdmFyIG1ldGEgPSBzcGxpdF9tZXRhX2hhc2goIG1ldGFfc3RyaW5nICksXG4gICAgICBhdHRyID0ge307XG5cbiAgZm9yICggdmFyIGkgPSAwOyBpIDwgbWV0YS5sZW5ndGg7ICsraSApIHtcbiAgICAvLyBpZDogI2Zvb1xuICAgIGlmICggL14jLy50ZXN0KCBtZXRhWyBpIF0gKSApIHtcbiAgICAgIGF0dHIuaWQgPSBtZXRhWyBpIF0uc3Vic3RyaW5nKCAxICk7XG4gICAgfVxuICAgIC8vIGNsYXNzOiAuZm9vXG4gICAgZWxzZSBpZiAoIC9eXFwuLy50ZXN0KCBtZXRhWyBpIF0gKSApIHtcbiAgICAgIC8vIGlmIGNsYXNzIGFscmVhZHkgZXhpc3RzLCBhcHBlbmQgdGhlIG5ldyBvbmVcbiAgICAgIGlmICggYXR0cltcImNsYXNzXCJdICkge1xuICAgICAgICBhdHRyW1wiY2xhc3NcIl0gPSBhdHRyW1wiY2xhc3NcIl0gKyBtZXRhWyBpIF0ucmVwbGFjZSggLy4vLCBcIiBcIiApO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGF0dHJbXCJjbGFzc1wiXSA9IG1ldGFbIGkgXS5zdWJzdHJpbmcoIDEgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gYXR0cmlidXRlOiBmb289YmFyXG4gICAgZWxzZSBpZiAoIC9cXD0vLnRlc3QoIG1ldGFbIGkgXSApICkge1xuICAgICAgdmFyIHMgPSBtZXRhWyBpIF0uc3BsaXQoIC9cXD0vICk7XG4gICAgICBhdHRyWyBzWyAwIF0gXSA9IHNbIDEgXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYXR0cjtcbn1cblxuZnVuY3Rpb24gc3BsaXRfbWV0YV9oYXNoKCBtZXRhX3N0cmluZyApIHtcbiAgdmFyIG1ldGEgPSBtZXRhX3N0cmluZy5zcGxpdCggXCJcIiApLFxuICAgICAgcGFydHMgPSBbIFwiXCIgXSxcbiAgICAgIGluX3F1b3RlcyA9IGZhbHNlO1xuXG4gIHdoaWxlICggbWV0YS5sZW5ndGggKSB7XG4gICAgdmFyIGxldHRlciA9IG1ldGEuc2hpZnQoKTtcbiAgICBzd2l0Y2ggKCBsZXR0ZXIgKSB7XG4gICAgICBjYXNlIFwiIFwiIDpcbiAgICAgICAgLy8gaWYgd2UncmUgaW4gYSBxdW90ZWQgc2VjdGlvbiwga2VlcCBpdFxuICAgICAgICBpZiAoIGluX3F1b3RlcyApIHtcbiAgICAgICAgICBwYXJ0c1sgcGFydHMubGVuZ3RoIC0gMSBdICs9IGxldHRlcjtcbiAgICAgICAgfVxuICAgICAgICAvLyBvdGhlcndpc2UgbWFrZSBhIG5ldyBwYXJ0XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHBhcnRzLnB1c2goIFwiXCIgKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCInXCIgOlxuICAgICAgY2FzZSAnXCInIDpcbiAgICAgICAgLy8gcmV2ZXJzZSB0aGUgcXVvdGVzIGFuZCBtb3ZlIHN0cmFpZ2h0IG9uXG4gICAgICAgIGluX3F1b3RlcyA9ICFpbl9xdW90ZXM7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIlxcXFxcIiA6XG4gICAgICAgIC8vIHNoaWZ0IG9mZiB0aGUgbmV4dCBsZXR0ZXIgdG8gYmUgdXNlZCBzdHJhaWdodCBhd2F5LlxuICAgICAgICAvLyBpdCB3YXMgZXNjYXBlZCBzbyB3ZSdsbCBrZWVwIGl0IHdoYXRldmVyIGl0IGlzXG4gICAgICAgIGxldHRlciA9IG1ldGEuc2hpZnQoKTtcbiAgICAgIGRlZmF1bHQgOlxuICAgICAgICBwYXJ0c1sgcGFydHMubGVuZ3RoIC0gMSBdICs9IGxldHRlcjtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhcnRzO1xufVxuXG5NYXJrZG93bi5kaWFsZWN0cy5NYXJ1a3UuYmxvY2suZG9jdW1lbnRfbWV0YSA9IGZ1bmN0aW9uIGRvY3VtZW50X21ldGEoIGJsb2NrLCBuZXh0ICkge1xuICAvLyB3ZSdyZSBvbmx5IGludGVyZXN0ZWQgaW4gdGhlIGZpcnN0IGJsb2NrXG4gIGlmICggYmxvY2subGluZU51bWJlciA+IDEgKSByZXR1cm4gdW5kZWZpbmVkO1xuXG4gIC8vIGRvY3VtZW50X21ldGEgYmxvY2tzIGNvbnNpc3Qgb2Ygb25lIG9yIG1vcmUgbGluZXMgb2YgYEtleTogVmFsdWVcXG5gXG4gIGlmICggISBibG9jay5tYXRjaCggL14oPzpcXHcrOi4qXFxuKSpcXHcrOi4qJC8gKSApIHJldHVybiB1bmRlZmluZWQ7XG5cbiAgLy8gbWFrZSBhbiBhdHRyaWJ1dGUgbm9kZSBpZiBpdCBkb2Vzbid0IGV4aXN0XG4gIGlmICggIWV4dHJhY3RfYXR0ciggdGhpcy50cmVlICkgKSB7XG4gICAgdGhpcy50cmVlLnNwbGljZSggMSwgMCwge30gKTtcbiAgfVxuXG4gIHZhciBwYWlycyA9IGJsb2NrLnNwbGl0KCAvXFxuLyApO1xuICBmb3IgKCBwIGluIHBhaXJzICkge1xuICAgIHZhciBtID0gcGFpcnNbIHAgXS5tYXRjaCggLyhcXHcrKTpcXHMqKC4qKSQvICksXG4gICAgICAgIGtleSA9IG1bIDEgXS50b0xvd2VyQ2FzZSgpLFxuICAgICAgICB2YWx1ZSA9IG1bIDIgXTtcblxuICAgIHRoaXMudHJlZVsgMSBdWyBrZXkgXSA9IHZhbHVlO1xuICB9XG5cbiAgLy8gZG9jdW1lbnRfbWV0YSBwcm9kdWNlcyBubyBjb250ZW50IVxuICByZXR1cm4gW107XG59O1xuXG5NYXJrZG93bi5kaWFsZWN0cy5NYXJ1a3UuYmxvY2suYmxvY2tfbWV0YSA9IGZ1bmN0aW9uIGJsb2NrX21ldGEoIGJsb2NrLCBuZXh0ICkge1xuICAvLyBjaGVjayBpZiB0aGUgbGFzdCBsaW5lIG9mIHRoZSBibG9jayBpcyBhbiBtZXRhIGhhc2hcbiAgdmFyIG0gPSBibG9jay5tYXRjaCggLyhefFxcbikgezAsM31cXHs6XFxzKigoPzpcXFxcXFx9fFteXFx9XSkqKVxccypcXH0kLyApO1xuICBpZiAoICFtICkgcmV0dXJuIHVuZGVmaW5lZDtcblxuICAvLyBwcm9jZXNzIHRoZSBtZXRhIGhhc2hcbiAgdmFyIGF0dHIgPSB0aGlzLmRpYWxlY3QucHJvY2Vzc01ldGFIYXNoKCBtWyAyIF0gKTtcblxuICB2YXIgaGFzaDtcblxuICAvLyBpZiB3ZSBtYXRjaGVkIF4gdGhlbiB3ZSBuZWVkIHRvIGFwcGx5IG1ldGEgdG8gdGhlIHByZXZpb3VzIGJsb2NrXG4gIGlmICggbVsgMSBdID09PSBcIlwiICkge1xuICAgIHZhciBub2RlID0gdGhpcy50cmVlWyB0aGlzLnRyZWUubGVuZ3RoIC0gMSBdO1xuICAgIGhhc2ggPSBleHRyYWN0X2F0dHIoIG5vZGUgKTtcblxuICAgIC8vIGlmIHRoZSBub2RlIGlzIGEgc3RyaW5nIChyYXRoZXIgdGhhbiBKc29uTUwpLCBiYWlsXG4gICAgaWYgKCB0eXBlb2Ygbm9kZSA9PT0gXCJzdHJpbmdcIiApIHJldHVybiB1bmRlZmluZWQ7XG5cbiAgICAvLyBjcmVhdGUgdGhlIGF0dHJpYnV0ZSBoYXNoIGlmIGl0IGRvZXNuJ3QgZXhpc3RcbiAgICBpZiAoICFoYXNoICkge1xuICAgICAgaGFzaCA9IHt9O1xuICAgICAgbm9kZS5zcGxpY2UoIDEsIDAsIGhhc2ggKTtcbiAgICB9XG5cbiAgICAvLyBhZGQgdGhlIGF0dHJpYnV0ZXMgaW5cbiAgICBmb3IgKCBhIGluIGF0dHIgKSB7XG4gICAgICBoYXNoWyBhIF0gPSBhdHRyWyBhIF07XG4gICAgfVxuXG4gICAgLy8gcmV0dXJuIG5vdGhpbmcgc28gdGhlIG1ldGEgaGFzaCBpcyByZW1vdmVkXG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgLy8gcHVsbCB0aGUgbWV0YSBoYXNoIG9mZiB0aGUgYmxvY2sgYW5kIHByb2Nlc3Mgd2hhdCdzIGxlZnRcbiAgdmFyIGIgPSBibG9jay5yZXBsYWNlKCAvXFxuLiokLywgXCJcIiApLFxuICAgICAgcmVzdWx0ID0gdGhpcy5wcm9jZXNzQmxvY2soIGIsIFtdICk7XG5cbiAgLy8gZ2V0IG9yIG1ha2UgdGhlIGF0dHJpYnV0ZXMgaGFzaFxuICBoYXNoID0gZXh0cmFjdF9hdHRyKCByZXN1bHRbIDAgXSApO1xuICBpZiAoICFoYXNoICkge1xuICAgIGhhc2ggPSB7fTtcbiAgICByZXN1bHRbIDAgXS5zcGxpY2UoIDEsIDAsIGhhc2ggKTtcbiAgfVxuXG4gIC8vIGF0dGFjaCB0aGUgYXR0cmlidXRlcyB0byB0aGUgYmxvY2tcbiAgZm9yICggYSBpbiBhdHRyICkge1xuICAgIGhhc2hbIGEgXSA9IGF0dHJbIGEgXTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5NYXJrZG93bi5kaWFsZWN0cy5NYXJ1a3UuYmxvY2suZGVmaW5pdGlvbl9saXN0ID0gZnVuY3Rpb24gZGVmaW5pdGlvbl9saXN0KCBibG9jaywgbmV4dCApIHtcbiAgLy8gb25lIG9yIG1vcmUgdGVybXMgZm9sbG93ZWQgYnkgb25lIG9yIG1vcmUgZGVmaW5pdGlvbnMsIGluIGEgc2luZ2xlIGJsb2NrXG4gIHZhciB0aWdodCA9IC9eKCg/OlteXFxzOl0uKlxcbikrKTpcXHMrKFtcXHNcXFNdKykkLyxcbiAgICAgIGxpc3QgPSBbIFwiZGxcIiBdLFxuICAgICAgaSwgbTtcblxuICAvLyBzZWUgaWYgd2UncmUgZGVhbGluZyB3aXRoIGEgdGlnaHQgb3IgbG9vc2UgYmxvY2tcbiAgaWYgKCAoIG0gPSBibG9jay5tYXRjaCggdGlnaHQgKSApICkge1xuICAgIC8vIHB1bGwgc3Vic2VxdWVudCB0aWdodCBETCBibG9ja3Mgb3V0IG9mIGBuZXh0YFxuICAgIHZhciBibG9ja3MgPSBbIGJsb2NrIF07XG4gICAgd2hpbGUgKCBuZXh0Lmxlbmd0aCAmJiB0aWdodC5leGVjKCBuZXh0WyAwIF0gKSApIHtcbiAgICAgIGJsb2Nrcy5wdXNoKCBuZXh0LnNoaWZ0KCkgKTtcbiAgICB9XG5cbiAgICBmb3IgKCB2YXIgYiA9IDA7IGIgPCBibG9ja3MubGVuZ3RoOyArK2IgKSB7XG4gICAgICB2YXIgbSA9IGJsb2Nrc1sgYiBdLm1hdGNoKCB0aWdodCApLFxuICAgICAgICAgIHRlcm1zID0gbVsgMSBdLnJlcGxhY2UoIC9cXG4kLywgXCJcIiApLnNwbGl0KCAvXFxuLyApLFxuICAgICAgICAgIGRlZm5zID0gbVsgMiBdLnNwbGl0KCAvXFxuOlxccysvICk7XG5cbiAgICAgIC8vIHByaW50KCB1bmV2YWwoIG0gKSApO1xuXG4gICAgICBmb3IgKCBpID0gMDsgaSA8IHRlcm1zLmxlbmd0aDsgKytpICkge1xuICAgICAgICBsaXN0LnB1c2goIFsgXCJkdFwiLCB0ZXJtc1sgaSBdIF0gKTtcbiAgICAgIH1cblxuICAgICAgZm9yICggaSA9IDA7IGkgPCBkZWZucy5sZW5ndGg7ICsraSApIHtcbiAgICAgICAgLy8gcnVuIGlubGluZSBwcm9jZXNzaW5nIG92ZXIgdGhlIGRlZmluaXRpb25cbiAgICAgICAgbGlzdC5wdXNoKCBbIFwiZGRcIiBdLmNvbmNhdCggdGhpcy5wcm9jZXNzSW5saW5lKCBkZWZuc1sgaSBdLnJlcGxhY2UoIC8oXFxuKVxccysvLCBcIiQxXCIgKSApICkgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZWxzZSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIHJldHVybiBbIGxpc3QgXTtcbn07XG5cbi8vIHNwbGl0cyBvbiB1bmVzY2FwZWQgaW5zdGFuY2VzIG9mIEBjaC4gSWYgQGNoIGlzIG5vdCBhIGNoYXJhY3RlciB0aGUgcmVzdWx0XG4vLyBjYW4gYmUgdW5wcmVkaWN0YWJsZVxuXG5NYXJrZG93bi5kaWFsZWN0cy5NYXJ1a3UuYmxvY2sudGFibGUgPSBmdW5jdGlvbiB0YWJsZSAoYmxvY2ssIG5leHQpIHtcblxuICAgIHZhciBfc3BsaXRfb25fdW5lc2NhcGVkID0gZnVuY3Rpb24ocywgY2gpIHtcbiAgICAgICAgY2ggPSBjaCB8fCAnXFxcXHMnO1xuICAgICAgICBpZiAoY2gubWF0Y2goL15bXFxcXHxcXFtcXF17fT8qLiteJF0kLykpIHsgY2ggPSAnXFxcXCcgKyBjaDsgfVxuICAgICAgICB2YXIgcmVzID0gWyBdLFxuICAgICAgICAgICAgciA9IG5ldyBSZWdFeHAoJ14oKD86XFxcXFxcXFwufFteXFxcXFxcXFwnICsgY2ggKyAnXSkqKScgKyBjaCArICcoLiopJyksXG4gICAgICAgICAgICBtO1xuICAgICAgICB3aGlsZShtID0gcy5tYXRjaChyKSkge1xuICAgICAgICAgICAgcmVzLnB1c2gobVsxXSk7XG4gICAgICAgICAgICBzID0gbVsyXTtcbiAgICAgICAgfVxuICAgICAgICByZXMucHVzaChzKTtcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG5cbiAgICB2YXIgbGVhZGluZ19waXBlID0gL14gezAsM31cXHwoLispXFxuIHswLDN9XFx8XFxzKihbXFwtOl0rW1xcLXwgOl0qKVxcbigoPzpcXHMqXFx8LiooPzpcXG58JCkpKikoPz1cXG58JCkvLFxuICAgICAgICAvLyBmaW5kIGF0IGxlYXN0IGFuIHVuZXNjYXBlZCBwaXBlIGluIGVhY2ggbGluZVxuICAgICAgICBub19sZWFkaW5nX3BpcGUgPSAvXiB7MCwzfShcXFMoPzpcXFxcLnxbXlxcXFx8XSkqXFx8LiopXFxuIHswLDN9KFtcXC06XStcXHMqXFx8W1xcLXwgOl0qKVxcbigoPzooPzpcXFxcLnxbXlxcXFx8XSkqXFx8LiooPzpcXG58JCkpKikoPz1cXG58JCkvLFxuICAgICAgICBpLCBtO1xuICAgIGlmIChtID0gYmxvY2subWF0Y2gobGVhZGluZ19waXBlKSkge1xuICAgICAgICAvLyByZW1vdmUgbGVhZGluZyBwaXBlcyBpbiBjb250ZW50c1xuICAgICAgICAvLyAoaGVhZGVyIGFuZCBob3Jpem9udGFsIHJ1bGUgYWxyZWFkeSBoYXZlIHRoZSBsZWFkaW5nIHBpcGUgbGVmdCBvdXQpXG4gICAgICAgIG1bM10gPSBtWzNdLnJlcGxhY2UoL15cXHMqXFx8L2dtLCAnJyk7XG4gICAgfSBlbHNlIGlmICghICggbSA9IGJsb2NrLm1hdGNoKG5vX2xlYWRpbmdfcGlwZSkpKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgdmFyIHRhYmxlID0gWyBcInRhYmxlXCIsIFsgXCJ0aGVhZFwiLCBbIFwidHJcIiBdIF0sIFsgXCJ0Ym9keVwiIF0gXTtcblxuICAgIC8vIHJlbW92ZSB0cmFpbGluZyBwaXBlcywgdGhlbiBzcGxpdCBvbiBwaXBlc1xuICAgIC8vIChubyBlc2NhcGVkIHBpcGVzIGFyZSBhbGxvd2VkIGluIGhvcml6b250YWwgcnVsZSlcbiAgICBtWzJdID0gbVsyXS5yZXBsYWNlKC9cXHxcXHMqJC8sICcnKS5zcGxpdCgnfCcpO1xuXG4gICAgLy8gcHJvY2VzcyBhbGlnbm1lbnRcbiAgICB2YXIgaHRtbF9hdHRycyA9IFsgXTtcbiAgICBmb3JFYWNoIChtWzJdLCBmdW5jdGlvbiAocykge1xuICAgICAgICBpZiAocy5tYXRjaCgvXlxccyotKzpcXHMqJC8pKSAgICAgICBodG1sX2F0dHJzLnB1c2goe2FsaWduOiBcInJpZ2h0XCJ9KTtcbiAgICAgICAgZWxzZSBpZiAocy5tYXRjaCgvXlxccyo6LStcXHMqJC8pKSAgaHRtbF9hdHRycy5wdXNoKHthbGlnbjogXCJsZWZ0XCJ9KTtcbiAgICAgICAgZWxzZSBpZiAocy5tYXRjaCgvXlxccyo6LSs6XFxzKiQvKSkgaHRtbF9hdHRycy5wdXNoKHthbGlnbjogXCJjZW50ZXJcIn0pO1xuICAgICAgICBlbHNlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbF9hdHRycy5wdXNoKHt9KTtcbiAgICB9KTtcblxuICAgIC8vIG5vdyBmb3IgdGhlIGhlYWRlciwgYXZvaWQgZXNjYXBlZCBwaXBlc1xuICAgIG1bMV0gPSBfc3BsaXRfb25fdW5lc2NhcGVkKG1bMV0ucmVwbGFjZSgvXFx8XFxzKiQvLCAnJyksICd8Jyk7XG4gICAgZm9yIChpID0gMDsgaSA8IG1bMV0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGFibGVbMV1bMV0ucHVzaChbJ3RoJywgaHRtbF9hdHRyc1tpXSB8fCB7fV0uY29uY2F0KFxuICAgICAgICAgICAgdGhpcy5wcm9jZXNzSW5saW5lKG1bMV1baV0udHJpbSgpKSkpO1xuICAgIH1cblxuICAgIC8vIG5vdyBmb3IgYm9keSBjb250ZW50c1xuICAgIGZvckVhY2ggKG1bM10ucmVwbGFjZSgvXFx8XFxzKiQvbWcsICcnKS5zcGxpdCgnXFxuJyksIGZ1bmN0aW9uIChyb3cpIHtcbiAgICAgICAgdmFyIGh0bWxfcm93ID0gWyd0ciddO1xuICAgICAgICByb3cgPSBfc3BsaXRfb25fdW5lc2NhcGVkKHJvdywgJ3wnKTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHJvdy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaHRtbF9yb3cucHVzaChbJ3RkJywgaHRtbF9hdHRyc1tpXSB8fCB7fV0uY29uY2F0KHRoaXMucHJvY2Vzc0lubGluZShyb3dbaV0udHJpbSgpKSkpO1xuICAgICAgICB9XG4gICAgICAgIHRhYmxlWzJdLnB1c2goaHRtbF9yb3cpO1xuICAgIH0sIHRoaXMpO1xuXG4gICAgcmV0dXJuIFt0YWJsZV07XG59XG5cbk1hcmtkb3duLmRpYWxlY3RzLk1hcnVrdS5pbmxpbmVbIFwiezpcIiBdID0gZnVuY3Rpb24gaW5saW5lX21ldGEoIHRleHQsIG1hdGNoZXMsIG91dCApIHtcbiAgaWYgKCAhb3V0Lmxlbmd0aCApIHtcbiAgICByZXR1cm4gWyAyLCBcIns6XCIgXTtcbiAgfVxuXG4gIC8vIGdldCB0aGUgcHJlY2VlZGluZyBlbGVtZW50XG4gIHZhciBiZWZvcmUgPSBvdXRbIG91dC5sZW5ndGggLSAxIF07XG5cbiAgaWYgKCB0eXBlb2YgYmVmb3JlID09PSBcInN0cmluZ1wiICkge1xuICAgIHJldHVybiBbIDIsIFwiezpcIiBdO1xuICB9XG5cbiAgLy8gbWF0Y2ggYSBtZXRhIGhhc2hcbiAgdmFyIG0gPSB0ZXh0Lm1hdGNoKCAvXlxcezpcXHMqKCg/OlxcXFxcXH18W15cXH1dKSopXFxzKlxcfS8gKTtcblxuICAvLyBubyBtYXRjaCwgZmFsc2UgYWxhcm1cbiAgaWYgKCAhbSApIHtcbiAgICByZXR1cm4gWyAyLCBcIns6XCIgXTtcbiAgfVxuXG4gIC8vIGF0dGFjaCB0aGUgYXR0cmlidXRlcyB0byB0aGUgcHJlY2VlZGluZyBlbGVtZW50XG4gIHZhciBtZXRhID0gdGhpcy5kaWFsZWN0LnByb2Nlc3NNZXRhSGFzaCggbVsgMSBdICksXG4gICAgICBhdHRyID0gZXh0cmFjdF9hdHRyKCBiZWZvcmUgKTtcblxuICBpZiAoICFhdHRyICkge1xuICAgIGF0dHIgPSB7fTtcbiAgICBiZWZvcmUuc3BsaWNlKCAxLCAwLCBhdHRyICk7XG4gIH1cblxuICBmb3IgKCB2YXIgayBpbiBtZXRhICkge1xuICAgIGF0dHJbIGsgXSA9IG1ldGFbIGsgXTtcbiAgfVxuXG4gIC8vIGN1dCBvdXQgdGhlIHN0cmluZyBhbmQgcmVwbGFjZSBpdCB3aXRoIG5vdGhpbmdcbiAgcmV0dXJuIFsgbVsgMCBdLmxlbmd0aCwgXCJcIiBdO1xufTtcblxuTWFya2Rvd24uZGlhbGVjdHMuTWFydWt1LmlubGluZS5fX2VzY2FwZV9fID0gL15cXFxcW1xcXFxgXFwqX3t9XFxbXFxdKCkjXFwrLiFcXC18Ol0vO1xuXG5NYXJrZG93bi5idWlsZEJsb2NrT3JkZXIgKCBNYXJrZG93bi5kaWFsZWN0cy5NYXJ1a3UuYmxvY2sgKTtcbk1hcmtkb3duLmJ1aWxkSW5saW5lUGF0dGVybnMoIE1hcmtkb3duLmRpYWxlY3RzLk1hcnVrdS5pbmxpbmUgKTtcblxudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uKG9iaikge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikgPT0gXCJbb2JqZWN0IEFycmF5XVwiO1xufTtcblxudmFyIGZvckVhY2g7XG4vLyBEb24ndCBtZXNzIHdpdGggQXJyYXkucHJvdG90eXBlLiBJdHMgbm90IGZyaWVuZGx5XG5pZiAoIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoICkge1xuICBmb3JFYWNoID0gZnVuY3Rpb24oIGFyciwgY2IsIHRoaXNwICkge1xuICAgIHJldHVybiBhcnIuZm9yRWFjaCggY2IsIHRoaXNwICk7XG4gIH07XG59XG5lbHNlIHtcbiAgZm9yRWFjaCA9IGZ1bmN0aW9uKGFyciwgY2IsIHRoaXNwKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNiLmNhbGwodGhpc3AgfHwgYXJyLCBhcnJbaV0sIGksIGFycik7XG4gICAgfVxuICB9XG59XG5cbnZhciBpc0VtcHR5ID0gZnVuY3Rpb24oIG9iaiApIHtcbiAgZm9yICggdmFyIGtleSBpbiBvYmogKSB7XG4gICAgaWYgKCBoYXNPd25Qcm9wZXJ0eS5jYWxsKCBvYmosIGtleSApICkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBleHRyYWN0X2F0dHIoIGpzb25tbCApIHtcbiAgcmV0dXJuIGlzQXJyYXkoanNvbm1sKVxuICAgICAgJiYganNvbm1sLmxlbmd0aCA+IDFcbiAgICAgICYmIHR5cGVvZiBqc29ubWxbIDEgXSA9PT0gXCJvYmplY3RcIlxuICAgICAgJiYgISggaXNBcnJheShqc29ubWxbIDEgXSkgKVxuICAgICAgPyBqc29ubWxbIDEgXVxuICAgICAgOiB1bmRlZmluZWQ7XG59XG5cblxuXG4vKipcbiAqICByZW5kZXJKc29uTUwoIGpzb25tbFssIG9wdGlvbnNdICkgLT4gU3RyaW5nXG4gKiAgLSBqc29ubWwgKEFycmF5KTogSnNvbk1MIGFycmF5IHRvIHJlbmRlciB0byBYTUxcbiAqICAtIG9wdGlvbnMgKE9iamVjdCk6IG9wdGlvbnNcbiAqXG4gKiAgQ29udmVydHMgdGhlIGdpdmVuIEpzb25NTCBpbnRvIHdlbGwtZm9ybWVkIFhNTC5cbiAqXG4gKiAgVGhlIG9wdGlvbnMgY3VycmVudGx5IHVuZGVyc3Rvb2QgYXJlOlxuICpcbiAqICAtIHJvb3QgKEJvb2xlYW4pOiB3ZXRoZXIgb3Igbm90IHRoZSByb290IG5vZGUgc2hvdWxkIGJlIGluY2x1ZGVkIGluIHRoZVxuICogICAgb3V0cHV0LCBvciBqdXN0IGl0cyBjaGlsZHJlbi4gVGhlIGRlZmF1bHQgYGZhbHNlYCBpcyB0byBub3QgaW5jbHVkZSB0aGVcbiAqICAgIHJvb3QgaXRzZWxmLlxuICovXG5leHBvc2UucmVuZGVySnNvbk1MID0gZnVuY3Rpb24oIGpzb25tbCwgb3B0aW9ucyApIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIC8vIGluY2x1ZGUgdGhlIHJvb3QgZWxlbWVudCBpbiB0aGUgcmVuZGVyZWQgb3V0cHV0P1xuICBvcHRpb25zLnJvb3QgPSBvcHRpb25zLnJvb3QgfHwgZmFsc2U7XG5cbiAgdmFyIGNvbnRlbnQgPSBbXTtcblxuICBpZiAoIG9wdGlvbnMucm9vdCApIHtcbiAgICBjb250ZW50LnB1c2goIHJlbmRlcl90cmVlKCBqc29ubWwgKSApO1xuICB9XG4gIGVsc2Uge1xuICAgIGpzb25tbC5zaGlmdCgpOyAvLyBnZXQgcmlkIG9mIHRoZSB0YWdcbiAgICBpZiAoIGpzb25tbC5sZW5ndGggJiYgdHlwZW9mIGpzb25tbFsgMCBdID09PSBcIm9iamVjdFwiICYmICEoIGpzb25tbFsgMCBdIGluc3RhbmNlb2YgQXJyYXkgKSApIHtcbiAgICAgIGpzb25tbC5zaGlmdCgpOyAvLyBnZXQgcmlkIG9mIHRoZSBhdHRyaWJ1dGVzXG4gICAgfVxuXG4gICAgd2hpbGUgKCBqc29ubWwubGVuZ3RoICkge1xuICAgICAgY29udGVudC5wdXNoKCByZW5kZXJfdHJlZSgganNvbm1sLnNoaWZ0KCkgKSApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb250ZW50LmpvaW4oIFwiXFxuXFxuXCIgKTtcbn07XG5cbmZ1bmN0aW9uIGVzY2FwZUhUTUwoIHRleHQgKSB7XG4gIHJldHVybiB0ZXh0LnJlcGxhY2UoIC8mL2csIFwiJmFtcDtcIiApXG4gICAgICAgICAgICAgLnJlcGxhY2UoIC88L2csIFwiJmx0O1wiIClcbiAgICAgICAgICAgICAucmVwbGFjZSggLz4vZywgXCImZ3Q7XCIgKVxuICAgICAgICAgICAgIC5yZXBsYWNlKCAvXCIvZywgXCImcXVvdDtcIiApXG4gICAgICAgICAgICAgLnJlcGxhY2UoIC8nL2csIFwiJiMzOTtcIiApO1xufVxuXG5mdW5jdGlvbiByZW5kZXJfdHJlZSgganNvbm1sICkge1xuICAvLyBiYXNpYyBjYXNlXG4gIGlmICggdHlwZW9mIGpzb25tbCA9PT0gXCJzdHJpbmdcIiApIHtcbiAgICByZXR1cm4gZXNjYXBlSFRNTCgganNvbm1sICk7XG4gIH1cblxuICB2YXIgdGFnID0ganNvbm1sLnNoaWZ0KCksXG4gICAgICBhdHRyaWJ1dGVzID0ge30sXG4gICAgICBjb250ZW50ID0gW107XG5cbiAgaWYgKCBqc29ubWwubGVuZ3RoICYmIHR5cGVvZiBqc29ubWxbIDAgXSA9PT0gXCJvYmplY3RcIiAmJiAhKCBqc29ubWxbIDAgXSBpbnN0YW5jZW9mIEFycmF5ICkgKSB7XG4gICAgYXR0cmlidXRlcyA9IGpzb25tbC5zaGlmdCgpO1xuICB9XG5cbiAgd2hpbGUgKCBqc29ubWwubGVuZ3RoICkge1xuICAgIGNvbnRlbnQucHVzaCggcmVuZGVyX3RyZWUoIGpzb25tbC5zaGlmdCgpICkgKTtcbiAgfVxuXG4gIHZhciB0YWdfYXR0cnMgPSBcIlwiO1xuICBmb3IgKCB2YXIgYSBpbiBhdHRyaWJ1dGVzICkge1xuICAgIHRhZ19hdHRycyArPSBcIiBcIiArIGEgKyAnPVwiJyArIGVzY2FwZUhUTUwoIGF0dHJpYnV0ZXNbIGEgXSApICsgJ1wiJztcbiAgfVxuXG4gIC8vIGJlIGNhcmVmdWwgYWJvdXQgYWRkaW5nIHdoaXRlc3BhY2UgaGVyZSBmb3IgaW5saW5lIGVsZW1lbnRzXG4gIGlmICggdGFnID09IFwiaW1nXCIgfHwgdGFnID09IFwiYnJcIiB8fCB0YWcgPT0gXCJoclwiICkge1xuICAgIHJldHVybiBcIjxcIisgdGFnICsgdGFnX2F0dHJzICsgXCIvPlwiO1xuICB9XG4gIGVsc2Uge1xuICAgIHJldHVybiBcIjxcIisgdGFnICsgdGFnX2F0dHJzICsgXCI+XCIgKyBjb250ZW50LmpvaW4oIFwiXCIgKSArIFwiPC9cIiArIHRhZyArIFwiPlwiO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRfdHJlZV90b19odG1sKCB0cmVlLCByZWZlcmVuY2VzLCBvcHRpb25zICkge1xuICB2YXIgaTtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgLy8gc2hhbGxvdyBjbG9uZVxuICB2YXIganNvbm1sID0gdHJlZS5zbGljZSggMCApO1xuXG4gIGlmICggdHlwZW9mIG9wdGlvbnMucHJlcHJvY2Vzc1RyZWVOb2RlID09PSBcImZ1bmN0aW9uXCIgKSB7XG4gICAgICBqc29ubWwgPSBvcHRpb25zLnByZXByb2Nlc3NUcmVlTm9kZShqc29ubWwsIHJlZmVyZW5jZXMpO1xuICB9XG5cbiAgLy8gQ2xvbmUgYXR0cmlidXRlcyBpZiB0aGV5IGV4aXN0XG4gIHZhciBhdHRycyA9IGV4dHJhY3RfYXR0cigganNvbm1sICk7XG4gIGlmICggYXR0cnMgKSB7XG4gICAganNvbm1sWyAxIF0gPSB7fTtcbiAgICBmb3IgKCBpIGluIGF0dHJzICkge1xuICAgICAganNvbm1sWyAxIF1bIGkgXSA9IGF0dHJzWyBpIF07XG4gICAgfVxuICAgIGF0dHJzID0ganNvbm1sWyAxIF07XG4gIH1cblxuICAvLyBiYXNpYyBjYXNlXG4gIGlmICggdHlwZW9mIGpzb25tbCA9PT0gXCJzdHJpbmdcIiApIHtcbiAgICByZXR1cm4ganNvbm1sO1xuICB9XG5cbiAgLy8gY29udmVydCB0aGlzIG5vZGVcbiAgc3dpdGNoICgganNvbm1sWyAwIF0gKSB7XG4gICAgY2FzZSBcImhlYWRlclwiOlxuICAgICAganNvbm1sWyAwIF0gPSBcImhcIiArIGpzb25tbFsgMSBdLmxldmVsO1xuICAgICAgZGVsZXRlIGpzb25tbFsgMSBdLmxldmVsO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImJ1bGxldGxpc3RcIjpcbiAgICAgIGpzb25tbFsgMCBdID0gXCJ1bFwiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIm51bWJlcmxpc3RcIjpcbiAgICAgIGpzb25tbFsgMCBdID0gXCJvbFwiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImxpc3RpdGVtXCI6XG4gICAgICBqc29ubWxbIDAgXSA9IFwibGlcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJwYXJhXCI6XG4gICAgICBqc29ubWxbIDAgXSA9IFwicFwiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIm1hcmtkb3duXCI6XG4gICAgICBqc29ubWxbIDAgXSA9IFwiaHRtbFwiO1xuICAgICAgaWYgKCBhdHRycyApIGRlbGV0ZSBhdHRycy5yZWZlcmVuY2VzO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImNvZGVfYmxvY2tcIjpcbiAgICAgIGpzb25tbFsgMCBdID0gXCJwcmVcIjtcbiAgICAgIGkgPSBhdHRycyA/IDIgOiAxO1xuICAgICAgdmFyIGNvZGUgPSBbIFwiY29kZVwiIF07XG4gICAgICBjb2RlLnB1c2guYXBwbHkoIGNvZGUsIGpzb25tbC5zcGxpY2UoIGksIGpzb25tbC5sZW5ndGggLSBpICkgKTtcbiAgICAgIGpzb25tbFsgaSBdID0gY29kZTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJpbmxpbmVjb2RlXCI6XG4gICAgICBqc29ubWxbIDAgXSA9IFwiY29kZVwiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImltZ1wiOlxuICAgICAganNvbm1sWyAxIF0uc3JjID0ganNvbm1sWyAxIF0uaHJlZjtcbiAgICAgIGRlbGV0ZSBqc29ubWxbIDEgXS5ocmVmO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImxpbmVicmVha1wiOlxuICAgICAganNvbm1sWyAwIF0gPSBcImJyXCI7XG4gICAgYnJlYWs7XG4gICAgY2FzZSBcImxpbmtcIjpcbiAgICAgIGpzb25tbFsgMCBdID0gXCJhXCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwibGlua19yZWZcIjpcbiAgICAgIGpzb25tbFsgMCBdID0gXCJhXCI7XG5cbiAgICAgIC8vIGdyYWIgdGhpcyByZWYgYW5kIGNsZWFuIHVwIHRoZSBhdHRyaWJ1dGUgbm9kZVxuICAgICAgdmFyIHJlZiA9IHJlZmVyZW5jZXNbIGF0dHJzLnJlZiBdO1xuXG4gICAgICAvLyBpZiB0aGUgcmVmZXJlbmNlIGV4aXN0cywgbWFrZSB0aGUgbGlua1xuICAgICAgaWYgKCByZWYgKSB7XG4gICAgICAgIGRlbGV0ZSBhdHRycy5yZWY7XG5cbiAgICAgICAgLy8gYWRkIGluIHRoZSBocmVmIGFuZCB0aXRsZSwgaWYgcHJlc2VudFxuICAgICAgICBhdHRycy5ocmVmID0gcmVmLmhyZWY7XG4gICAgICAgIGlmICggcmVmLnRpdGxlICkge1xuICAgICAgICAgIGF0dHJzLnRpdGxlID0gcmVmLnRpdGxlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZ2V0IHJpZCBvZiB0aGUgdW5uZWVkZWQgb3JpZ2luYWwgdGV4dFxuICAgICAgICBkZWxldGUgYXR0cnMub3JpZ2luYWw7XG4gICAgICB9XG4gICAgICAvLyB0aGUgcmVmZXJlbmNlIGRvZXNuJ3QgZXhpc3QsIHNvIHJldmVydCB0byBwbGFpbiB0ZXh0XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGF0dHJzLm9yaWdpbmFsO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImltZ19yZWZcIjpcbiAgICAgIGpzb25tbFsgMCBdID0gXCJpbWdcIjtcblxuICAgICAgLy8gZ3JhYiB0aGlzIHJlZiBhbmQgY2xlYW4gdXAgdGhlIGF0dHJpYnV0ZSBub2RlXG4gICAgICB2YXIgcmVmID0gcmVmZXJlbmNlc1sgYXR0cnMucmVmIF07XG5cbiAgICAgIC8vIGlmIHRoZSByZWZlcmVuY2UgZXhpc3RzLCBtYWtlIHRoZSBsaW5rXG4gICAgICBpZiAoIHJlZiApIHtcbiAgICAgICAgZGVsZXRlIGF0dHJzLnJlZjtcblxuICAgICAgICAvLyBhZGQgaW4gdGhlIGhyZWYgYW5kIHRpdGxlLCBpZiBwcmVzZW50XG4gICAgICAgIGF0dHJzLnNyYyA9IHJlZi5ocmVmO1xuICAgICAgICBpZiAoIHJlZi50aXRsZSApIHtcbiAgICAgICAgICBhdHRycy50aXRsZSA9IHJlZi50aXRsZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGdldCByaWQgb2YgdGhlIHVubmVlZGVkIG9yaWdpbmFsIHRleHRcbiAgICAgICAgZGVsZXRlIGF0dHJzLm9yaWdpbmFsO1xuICAgICAgfVxuICAgICAgLy8gdGhlIHJlZmVyZW5jZSBkb2Vzbid0IGV4aXN0LCBzbyByZXZlcnQgdG8gcGxhaW4gdGV4dFxuICAgICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBhdHRycy5vcmlnaW5hbDtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgLy8gY29udmVydCBhbGwgdGhlIGNoaWxkcmVuXG4gIGkgPSAxO1xuXG4gIC8vIGRlYWwgd2l0aCB0aGUgYXR0cmlidXRlIG5vZGUsIGlmIGl0IGV4aXN0c1xuICBpZiAoIGF0dHJzICkge1xuICAgIC8vIGlmIHRoZXJlIGFyZSBrZXlzLCBza2lwIG92ZXIgaXRcbiAgICBmb3IgKCB2YXIga2V5IGluIGpzb25tbFsgMSBdICkge1xuICAgICAgICBpID0gMjtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIC8vIGlmIHRoZXJlIGFyZW4ndCwgcmVtb3ZlIGl0XG4gICAgaWYgKCBpID09PSAxICkge1xuICAgICAganNvbm1sLnNwbGljZSggaSwgMSApO1xuICAgIH1cbiAgfVxuXG4gIGZvciAoIDsgaSA8IGpzb25tbC5sZW5ndGg7ICsraSApIHtcbiAgICBqc29ubWxbIGkgXSA9IGNvbnZlcnRfdHJlZV90b19odG1sKCBqc29ubWxbIGkgXSwgcmVmZXJlbmNlcywgb3B0aW9ucyApO1xuICB9XG5cbiAgcmV0dXJuIGpzb25tbDtcbn1cblxuXG4vLyBtZXJnZXMgYWRqYWNlbnQgdGV4dCBub2RlcyBpbnRvIGEgc2luZ2xlIG5vZGVcbmZ1bmN0aW9uIG1lcmdlX3RleHRfbm9kZXMoIGpzb25tbCApIHtcbiAgLy8gc2tpcCB0aGUgdGFnIG5hbWUgYW5kIGF0dHJpYnV0ZSBoYXNoXG4gIHZhciBpID0gZXh0cmFjdF9hdHRyKCBqc29ubWwgKSA/IDIgOiAxO1xuXG4gIHdoaWxlICggaSA8IGpzb25tbC5sZW5ndGggKSB7XG4gICAgLy8gaWYgaXQncyBhIHN0cmluZyBjaGVjayB0aGUgbmV4dCBpdGVtIHRvb1xuICAgIGlmICggdHlwZW9mIGpzb25tbFsgaSBdID09PSBcInN0cmluZ1wiICkge1xuICAgICAgaWYgKCBpICsgMSA8IGpzb25tbC5sZW5ndGggJiYgdHlwZW9mIGpzb25tbFsgaSArIDEgXSA9PT0gXCJzdHJpbmdcIiApIHtcbiAgICAgICAgLy8gbWVyZ2UgdGhlIHNlY29uZCBzdHJpbmcgaW50byB0aGUgZmlyc3QgYW5kIHJlbW92ZSBpdFxuICAgICAgICBqc29ubWxbIGkgXSArPSBqc29ubWwuc3BsaWNlKCBpICsgMSwgMSApWyAwIF07XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgKytpO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBpZiBpdCdzIG5vdCBhIHN0cmluZyByZWN1cnNlXG4gICAgZWxzZSB7XG4gICAgICBtZXJnZV90ZXh0X25vZGVzKCBqc29ubWxbIGkgXSApO1xuICAgICAgKytpO1xuICAgIH1cbiAgfVxufVxuXG59ICkoIChmdW5jdGlvbigpIHtcbiAgaWYgKCB0eXBlb2YgZXhwb3J0cyA9PT0gXCJ1bmRlZmluZWRcIiApIHtcbiAgICB3aW5kb3cubWFya2Rvd24gPSB7fTtcbiAgICByZXR1cm4gd2luZG93Lm1hcmtkb3duO1xuICB9XG4gIGVsc2Uge1xuICAgIHJldHVybiBleHBvcnRzO1xuICB9XG59ICkoKSApO1xuIiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMgfHxcbiAgZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhvYmopIHtcbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG4gICAgdmFyIGRlc2NyaXB0b3JzID0ge307XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBkZXNjcmlwdG9yc1trZXlzW2ldXSA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXlzW2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIGRlc2NyaXB0b3JzO1xuICB9O1xuXG52YXIgZm9ybWF0UmVnRXhwID0gLyVbc2RqJV0vZztcbmV4cG9ydHMuZm9ybWF0ID0gZnVuY3Rpb24oZikge1xuICBpZiAoIWlzU3RyaW5nKGYpKSB7XG4gICAgdmFyIG9iamVjdHMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgb2JqZWN0cy5wdXNoKGluc3BlY3QoYXJndW1lbnRzW2ldKSk7XG4gICAgfVxuICAgIHJldHVybiBvYmplY3RzLmpvaW4oJyAnKTtcbiAgfVxuXG4gIHZhciBpID0gMTtcbiAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gIHZhciBsZW4gPSBhcmdzLmxlbmd0aDtcbiAgdmFyIHN0ciA9IFN0cmluZyhmKS5yZXBsYWNlKGZvcm1hdFJlZ0V4cCwgZnVuY3Rpb24oeCkge1xuICAgIGlmICh4ID09PSAnJSUnKSByZXR1cm4gJyUnO1xuICAgIGlmIChpID49IGxlbikgcmV0dXJuIHg7XG4gICAgc3dpdGNoICh4KSB7XG4gICAgICBjYXNlICclcyc6IHJldHVybiBTdHJpbmcoYXJnc1tpKytdKTtcbiAgICAgIGNhc2UgJyVkJzogcmV0dXJuIE51bWJlcihhcmdzW2krK10pO1xuICAgICAgY2FzZSAnJWonOlxuICAgICAgICB0cnkge1xuICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShhcmdzW2krK10pO1xuICAgICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgICAgcmV0dXJuICdbQ2lyY3VsYXJdJztcbiAgICAgICAgfVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHg7XG4gICAgfVxuICB9KTtcbiAgZm9yICh2YXIgeCA9IGFyZ3NbaV07IGkgPCBsZW47IHggPSBhcmdzWysraV0pIHtcbiAgICBpZiAoaXNOdWxsKHgpIHx8ICFpc09iamVjdCh4KSkge1xuICAgICAgc3RyICs9ICcgJyArIHg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0ciArPSAnICcgKyBpbnNwZWN0KHgpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gc3RyO1xufTtcblxuXG4vLyBNYXJrIHRoYXQgYSBtZXRob2Qgc2hvdWxkIG5vdCBiZSB1c2VkLlxuLy8gUmV0dXJucyBhIG1vZGlmaWVkIGZ1bmN0aW9uIHdoaWNoIHdhcm5zIG9uY2UgYnkgZGVmYXVsdC5cbi8vIElmIC0tbm8tZGVwcmVjYXRpb24gaXMgc2V0LCB0aGVuIGl0IGlzIGEgbm8tb3AuXG5leHBvcnRzLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKGZuLCBtc2cpIHtcbiAgaWYgKHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiBwcm9jZXNzLm5vRGVwcmVjYXRpb24gPT09IHRydWUpIHtcbiAgICByZXR1cm4gZm47XG4gIH1cblxuICAvLyBBbGxvdyBmb3IgZGVwcmVjYXRpbmcgdGhpbmdzIGluIHRoZSBwcm9jZXNzIG9mIHN0YXJ0aW5nIHVwLlxuICBpZiAodHlwZW9mIHByb2Nlc3MgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGV4cG9ydHMuZGVwcmVjYXRlKGZuLCBtc2cpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgfVxuXG4gIHZhciB3YXJuZWQgPSBmYWxzZTtcbiAgZnVuY3Rpb24gZGVwcmVjYXRlZCgpIHtcbiAgICBpZiAoIXdhcm5lZCkge1xuICAgICAgaWYgKHByb2Nlc3MudGhyb3dEZXByZWNhdGlvbikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobXNnKTtcbiAgICAgIH0gZWxzZSBpZiAocHJvY2Vzcy50cmFjZURlcHJlY2F0aW9uKSB7XG4gICAgICAgIGNvbnNvbGUudHJhY2UobXNnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IobXNnKTtcbiAgICAgIH1cbiAgICAgIHdhcm5lZCA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgcmV0dXJuIGRlcHJlY2F0ZWQ7XG59O1xuXG5cbnZhciBkZWJ1Z3MgPSB7fTtcbnZhciBkZWJ1Z0Vudmlyb247XG5leHBvcnRzLmRlYnVnbG9nID0gZnVuY3Rpb24oc2V0KSB7XG4gIGlmIChpc1VuZGVmaW5lZChkZWJ1Z0Vudmlyb24pKVxuICAgIGRlYnVnRW52aXJvbiA9IHByb2Nlc3MuZW52Lk5PREVfREVCVUcgfHwgJyc7XG4gIHNldCA9IHNldC50b1VwcGVyQ2FzZSgpO1xuICBpZiAoIWRlYnVnc1tzZXRdKSB7XG4gICAgaWYgKG5ldyBSZWdFeHAoJ1xcXFxiJyArIHNldCArICdcXFxcYicsICdpJykudGVzdChkZWJ1Z0Vudmlyb24pKSB7XG4gICAgICB2YXIgcGlkID0gcHJvY2Vzcy5waWQ7XG4gICAgICBkZWJ1Z3Nbc2V0XSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgbXNnID0gZXhwb3J0cy5mb3JtYXQuYXBwbHkoZXhwb3J0cywgYXJndW1lbnRzKTtcbiAgICAgICAgY29uc29sZS5lcnJvcignJXMgJWQ6ICVzJywgc2V0LCBwaWQsIG1zZyk7XG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWJ1Z3Nbc2V0XSA9IGZ1bmN0aW9uKCkge307XG4gICAgfVxuICB9XG4gIHJldHVybiBkZWJ1Z3Nbc2V0XTtcbn07XG5cblxuLyoqXG4gKiBFY2hvcyB0aGUgdmFsdWUgb2YgYSB2YWx1ZS4gVHJ5cyB0byBwcmludCB0aGUgdmFsdWUgb3V0XG4gKiBpbiB0aGUgYmVzdCB3YXkgcG9zc2libGUgZ2l2ZW4gdGhlIGRpZmZlcmVudCB0eXBlcy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqIFRoZSBvYmplY3QgdG8gcHJpbnQgb3V0LlxuICogQHBhcmFtIHtPYmplY3R9IG9wdHMgT3B0aW9uYWwgb3B0aW9ucyBvYmplY3QgdGhhdCBhbHRlcnMgdGhlIG91dHB1dC5cbiAqL1xuLyogbGVnYWN5OiBvYmosIHNob3dIaWRkZW4sIGRlcHRoLCBjb2xvcnMqL1xuZnVuY3Rpb24gaW5zcGVjdChvYmosIG9wdHMpIHtcbiAgLy8gZGVmYXVsdCBvcHRpb25zXG4gIHZhciBjdHggPSB7XG4gICAgc2VlbjogW10sXG4gICAgc3R5bGl6ZTogc3R5bGl6ZU5vQ29sb3JcbiAgfTtcbiAgLy8gbGVnYWN5Li4uXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID49IDMpIGN0eC5kZXB0aCA9IGFyZ3VtZW50c1syXTtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPj0gNCkgY3R4LmNvbG9ycyA9IGFyZ3VtZW50c1szXTtcbiAgaWYgKGlzQm9vbGVhbihvcHRzKSkge1xuICAgIC8vIGxlZ2FjeS4uLlxuICAgIGN0eC5zaG93SGlkZGVuID0gb3B0cztcbiAgfSBlbHNlIGlmIChvcHRzKSB7XG4gICAgLy8gZ290IGFuIFwib3B0aW9uc1wiIG9iamVjdFxuICAgIGV4cG9ydHMuX2V4dGVuZChjdHgsIG9wdHMpO1xuICB9XG4gIC8vIHNldCBkZWZhdWx0IG9wdGlvbnNcbiAgaWYgKGlzVW5kZWZpbmVkKGN0eC5zaG93SGlkZGVuKSkgY3R4LnNob3dIaWRkZW4gPSBmYWxzZTtcbiAgaWYgKGlzVW5kZWZpbmVkKGN0eC5kZXB0aCkpIGN0eC5kZXB0aCA9IDI7XG4gIGlmIChpc1VuZGVmaW5lZChjdHguY29sb3JzKSkgY3R4LmNvbG9ycyA9IGZhbHNlO1xuICBpZiAoaXNVbmRlZmluZWQoY3R4LmN1c3RvbUluc3BlY3QpKSBjdHguY3VzdG9tSW5zcGVjdCA9IHRydWU7XG4gIGlmIChjdHguY29sb3JzKSBjdHguc3R5bGl6ZSA9IHN0eWxpemVXaXRoQ29sb3I7XG4gIHJldHVybiBmb3JtYXRWYWx1ZShjdHgsIG9iaiwgY3R4LmRlcHRoKTtcbn1cbmV4cG9ydHMuaW5zcGVjdCA9IGluc3BlY3Q7XG5cblxuLy8gaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9BTlNJX2VzY2FwZV9jb2RlI2dyYXBoaWNzXG5pbnNwZWN0LmNvbG9ycyA9IHtcbiAgJ2JvbGQnIDogWzEsIDIyXSxcbiAgJ2l0YWxpYycgOiBbMywgMjNdLFxuICAndW5kZXJsaW5lJyA6IFs0LCAyNF0sXG4gICdpbnZlcnNlJyA6IFs3LCAyN10sXG4gICd3aGl0ZScgOiBbMzcsIDM5XSxcbiAgJ2dyZXknIDogWzkwLCAzOV0sXG4gICdibGFjaycgOiBbMzAsIDM5XSxcbiAgJ2JsdWUnIDogWzM0LCAzOV0sXG4gICdjeWFuJyA6IFszNiwgMzldLFxuICAnZ3JlZW4nIDogWzMyLCAzOV0sXG4gICdtYWdlbnRhJyA6IFszNSwgMzldLFxuICAncmVkJyA6IFszMSwgMzldLFxuICAneWVsbG93JyA6IFszMywgMzldXG59O1xuXG4vLyBEb24ndCB1c2UgJ2JsdWUnIG5vdCB2aXNpYmxlIG9uIGNtZC5leGVcbmluc3BlY3Quc3R5bGVzID0ge1xuICAnc3BlY2lhbCc6ICdjeWFuJyxcbiAgJ251bWJlcic6ICd5ZWxsb3cnLFxuICAnYm9vbGVhbic6ICd5ZWxsb3cnLFxuICAndW5kZWZpbmVkJzogJ2dyZXknLFxuICAnbnVsbCc6ICdib2xkJyxcbiAgJ3N0cmluZyc6ICdncmVlbicsXG4gICdkYXRlJzogJ21hZ2VudGEnLFxuICAvLyBcIm5hbWVcIjogaW50ZW50aW9uYWxseSBub3Qgc3R5bGluZ1xuICAncmVnZXhwJzogJ3JlZCdcbn07XG5cblxuZnVuY3Rpb24gc3R5bGl6ZVdpdGhDb2xvcihzdHIsIHN0eWxlVHlwZSkge1xuICB2YXIgc3R5bGUgPSBpbnNwZWN0LnN0eWxlc1tzdHlsZVR5cGVdO1xuXG4gIGlmIChzdHlsZSkge1xuICAgIHJldHVybiAnXFx1MDAxYlsnICsgaW5zcGVjdC5jb2xvcnNbc3R5bGVdWzBdICsgJ20nICsgc3RyICtcbiAgICAgICAgICAgJ1xcdTAwMWJbJyArIGluc3BlY3QuY29sb3JzW3N0eWxlXVsxXSArICdtJztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gc3RyO1xuICB9XG59XG5cblxuZnVuY3Rpb24gc3R5bGl6ZU5vQ29sb3Ioc3RyLCBzdHlsZVR5cGUpIHtcbiAgcmV0dXJuIHN0cjtcbn1cblxuXG5mdW5jdGlvbiBhcnJheVRvSGFzaChhcnJheSkge1xuICB2YXIgaGFzaCA9IHt9O1xuXG4gIGFycmF5LmZvckVhY2goZnVuY3Rpb24odmFsLCBpZHgpIHtcbiAgICBoYXNoW3ZhbF0gPSB0cnVlO1xuICB9KTtcblxuICByZXR1cm4gaGFzaDtcbn1cblxuXG5mdW5jdGlvbiBmb3JtYXRWYWx1ZShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMpIHtcbiAgLy8gUHJvdmlkZSBhIGhvb2sgZm9yIHVzZXItc3BlY2lmaWVkIGluc3BlY3QgZnVuY3Rpb25zLlxuICAvLyBDaGVjayB0aGF0IHZhbHVlIGlzIGFuIG9iamVjdCB3aXRoIGFuIGluc3BlY3QgZnVuY3Rpb24gb24gaXRcbiAgaWYgKGN0eC5jdXN0b21JbnNwZWN0ICYmXG4gICAgICB2YWx1ZSAmJlxuICAgICAgaXNGdW5jdGlvbih2YWx1ZS5pbnNwZWN0KSAmJlxuICAgICAgLy8gRmlsdGVyIG91dCB0aGUgdXRpbCBtb2R1bGUsIGl0J3MgaW5zcGVjdCBmdW5jdGlvbiBpcyBzcGVjaWFsXG4gICAgICB2YWx1ZS5pbnNwZWN0ICE9PSBleHBvcnRzLmluc3BlY3QgJiZcbiAgICAgIC8vIEFsc28gZmlsdGVyIG91dCBhbnkgcHJvdG90eXBlIG9iamVjdHMgdXNpbmcgdGhlIGNpcmN1bGFyIGNoZWNrLlxuICAgICAgISh2YWx1ZS5jb25zdHJ1Y3RvciAmJiB2YWx1ZS5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgPT09IHZhbHVlKSkge1xuICAgIHZhciByZXQgPSB2YWx1ZS5pbnNwZWN0KHJlY3Vyc2VUaW1lcywgY3R4KTtcbiAgICBpZiAoIWlzU3RyaW5nKHJldCkpIHtcbiAgICAgIHJldCA9IGZvcm1hdFZhbHVlKGN0eCwgcmV0LCByZWN1cnNlVGltZXMpO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgLy8gUHJpbWl0aXZlIHR5cGVzIGNhbm5vdCBoYXZlIHByb3BlcnRpZXNcbiAgdmFyIHByaW1pdGl2ZSA9IGZvcm1hdFByaW1pdGl2ZShjdHgsIHZhbHVlKTtcbiAgaWYgKHByaW1pdGl2ZSkge1xuICAgIHJldHVybiBwcmltaXRpdmU7XG4gIH1cblxuICAvLyBMb29rIHVwIHRoZSBrZXlzIG9mIHRoZSBvYmplY3QuXG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXModmFsdWUpO1xuICB2YXIgdmlzaWJsZUtleXMgPSBhcnJheVRvSGFzaChrZXlzKTtcblxuICBpZiAoY3R4LnNob3dIaWRkZW4pIHtcbiAgICBrZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModmFsdWUpO1xuICB9XG5cbiAgLy8gSUUgZG9lc24ndCBtYWtlIGVycm9yIGZpZWxkcyBub24tZW51bWVyYWJsZVxuICAvLyBodHRwOi8vbXNkbi5taWNyb3NvZnQuY29tL2VuLXVzL2xpYnJhcnkvaWUvZHd3NTJzYnQodj12cy45NCkuYXNweFxuICBpZiAoaXNFcnJvcih2YWx1ZSlcbiAgICAgICYmIChrZXlzLmluZGV4T2YoJ21lc3NhZ2UnKSA+PSAwIHx8IGtleXMuaW5kZXhPZignZGVzY3JpcHRpb24nKSA+PSAwKSkge1xuICAgIHJldHVybiBmb3JtYXRFcnJvcih2YWx1ZSk7XG4gIH1cblxuICAvLyBTb21lIHR5cGUgb2Ygb2JqZWN0IHdpdGhvdXQgcHJvcGVydGllcyBjYW4gYmUgc2hvcnRjdXR0ZWQuXG4gIGlmIChrZXlzLmxlbmd0aCA9PT0gMCkge1xuICAgIGlmIChpc0Z1bmN0aW9uKHZhbHVlKSkge1xuICAgICAgdmFyIG5hbWUgPSB2YWx1ZS5uYW1lID8gJzogJyArIHZhbHVlLm5hbWUgOiAnJztcbiAgICAgIHJldHVybiBjdHguc3R5bGl6ZSgnW0Z1bmN0aW9uJyArIG5hbWUgKyAnXScsICdzcGVjaWFsJyk7XG4gICAgfVxuICAgIGlmIChpc1JlZ0V4cCh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBjdHguc3R5bGl6ZShSZWdFeHAucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpLCAncmVnZXhwJyk7XG4gICAgfVxuICAgIGlmIChpc0RhdGUodmFsdWUpKSB7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoRGF0ZS5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSksICdkYXRlJyk7XG4gICAgfVxuICAgIGlmIChpc0Vycm9yKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGZvcm1hdEVycm9yKHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICB2YXIgYmFzZSA9ICcnLCBhcnJheSA9IGZhbHNlLCBicmFjZXMgPSBbJ3snLCAnfSddO1xuXG4gIC8vIE1ha2UgQXJyYXkgc2F5IHRoYXQgdGhleSBhcmUgQXJyYXlcbiAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgYXJyYXkgPSB0cnVlO1xuICAgIGJyYWNlcyA9IFsnWycsICddJ107XG4gIH1cblxuICAvLyBNYWtlIGZ1bmN0aW9ucyBzYXkgdGhhdCB0aGV5IGFyZSBmdW5jdGlvbnNcbiAgaWYgKGlzRnVuY3Rpb24odmFsdWUpKSB7XG4gICAgdmFyIG4gPSB2YWx1ZS5uYW1lID8gJzogJyArIHZhbHVlLm5hbWUgOiAnJztcbiAgICBiYXNlID0gJyBbRnVuY3Rpb24nICsgbiArICddJztcbiAgfVxuXG4gIC8vIE1ha2UgUmVnRXhwcyBzYXkgdGhhdCB0aGV5IGFyZSBSZWdFeHBzXG4gIGlmIChpc1JlZ0V4cCh2YWx1ZSkpIHtcbiAgICBiYXNlID0gJyAnICsgUmVnRXhwLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgfVxuXG4gIC8vIE1ha2UgZGF0ZXMgd2l0aCBwcm9wZXJ0aWVzIGZpcnN0IHNheSB0aGUgZGF0ZVxuICBpZiAoaXNEYXRlKHZhbHVlKSkge1xuICAgIGJhc2UgPSAnICcgKyBEYXRlLnByb3RvdHlwZS50b1VUQ1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgfVxuXG4gIC8vIE1ha2UgZXJyb3Igd2l0aCBtZXNzYWdlIGZpcnN0IHNheSB0aGUgZXJyb3JcbiAgaWYgKGlzRXJyb3IodmFsdWUpKSB7XG4gICAgYmFzZSA9ICcgJyArIGZvcm1hdEVycm9yKHZhbHVlKTtcbiAgfVxuXG4gIGlmIChrZXlzLmxlbmd0aCA9PT0gMCAmJiAoIWFycmF5IHx8IHZhbHVlLmxlbmd0aCA9PSAwKSkge1xuICAgIHJldHVybiBicmFjZXNbMF0gKyBiYXNlICsgYnJhY2VzWzFdO1xuICB9XG5cbiAgaWYgKHJlY3Vyc2VUaW1lcyA8IDApIHtcbiAgICBpZiAoaXNSZWdFeHAodmFsdWUpKSB7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoUmVnRXhwLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSwgJ3JlZ2V4cCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoJ1tPYmplY3RdJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gIH1cblxuICBjdHguc2Vlbi5wdXNoKHZhbHVlKTtcblxuICB2YXIgb3V0cHV0O1xuICBpZiAoYXJyYXkpIHtcbiAgICBvdXRwdXQgPSBmb3JtYXRBcnJheShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLCBrZXlzKTtcbiAgfSBlbHNlIHtcbiAgICBvdXRwdXQgPSBrZXlzLm1hcChmdW5jdGlvbihrZXkpIHtcbiAgICAgIHJldHVybiBmb3JtYXRQcm9wZXJ0eShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLCBrZXksIGFycmF5KTtcbiAgICB9KTtcbiAgfVxuXG4gIGN0eC5zZWVuLnBvcCgpO1xuXG4gIHJldHVybiByZWR1Y2VUb1NpbmdsZVN0cmluZyhvdXRwdXQsIGJhc2UsIGJyYWNlcyk7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0UHJpbWl0aXZlKGN0eCwgdmFsdWUpIHtcbiAgaWYgKGlzVW5kZWZpbmVkKHZhbHVlKSlcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoJ3VuZGVmaW5lZCcsICd1bmRlZmluZWQnKTtcbiAgaWYgKGlzU3RyaW5nKHZhbHVlKSkge1xuICAgIHZhciBzaW1wbGUgPSAnXFwnJyArIEpTT04uc3RyaW5naWZ5KHZhbHVlKS5yZXBsYWNlKC9eXCJ8XCIkL2csICcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoLycvZywgXCJcXFxcJ1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcXFxcIi9nLCAnXCInKSArICdcXCcnO1xuICAgIHJldHVybiBjdHguc3R5bGl6ZShzaW1wbGUsICdzdHJpbmcnKTtcbiAgfVxuICBpZiAoaXNOdW1iZXIodmFsdWUpKVxuICAgIHJldHVybiBjdHguc3R5bGl6ZSgnJyArIHZhbHVlLCAnbnVtYmVyJyk7XG4gIGlmIChpc0Jvb2xlYW4odmFsdWUpKVxuICAgIHJldHVybiBjdHguc3R5bGl6ZSgnJyArIHZhbHVlLCAnYm9vbGVhbicpO1xuICAvLyBGb3Igc29tZSByZWFzb24gdHlwZW9mIG51bGwgaXMgXCJvYmplY3RcIiwgc28gc3BlY2lhbCBjYXNlIGhlcmUuXG4gIGlmIChpc051bGwodmFsdWUpKVxuICAgIHJldHVybiBjdHguc3R5bGl6ZSgnbnVsbCcsICdudWxsJyk7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0RXJyb3IodmFsdWUpIHtcbiAgcmV0dXJuICdbJyArIEVycm9yLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSArICddJztcbn1cblxuXG5mdW5jdGlvbiBmb3JtYXRBcnJheShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLCBrZXlzKSB7XG4gIHZhciBvdXRwdXQgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDAsIGwgPSB2YWx1ZS5sZW5ndGg7IGkgPCBsOyArK2kpIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkodmFsdWUsIFN0cmluZyhpKSkpIHtcbiAgICAgIG91dHB1dC5wdXNoKGZvcm1hdFByb3BlcnR5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsXG4gICAgICAgICAgU3RyaW5nKGkpLCB0cnVlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG91dHB1dC5wdXNoKCcnKTtcbiAgICB9XG4gIH1cbiAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgIGlmICgha2V5Lm1hdGNoKC9eXFxkKyQvKSkge1xuICAgICAgb3V0cHV0LnB1c2goZm9ybWF0UHJvcGVydHkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cyxcbiAgICAgICAgICBrZXksIHRydWUpKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gb3V0cHV0O1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdFByb3BlcnR5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsIGtleSwgYXJyYXkpIHtcbiAgdmFyIG5hbWUsIHN0ciwgZGVzYztcbiAgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodmFsdWUsIGtleSkgfHwgeyB2YWx1ZTogdmFsdWVba2V5XSB9O1xuICBpZiAoZGVzYy5nZXQpIHtcbiAgICBpZiAoZGVzYy5zZXQpIHtcbiAgICAgIHN0ciA9IGN0eC5zdHlsaXplKCdbR2V0dGVyL1NldHRlcl0nLCAnc3BlY2lhbCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHIgPSBjdHguc3R5bGl6ZSgnW0dldHRlcl0nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAoZGVzYy5zZXQpIHtcbiAgICAgIHN0ciA9IGN0eC5zdHlsaXplKCdbU2V0dGVyXScsICdzcGVjaWFsJyk7XG4gICAgfVxuICB9XG4gIGlmICghaGFzT3duUHJvcGVydHkodmlzaWJsZUtleXMsIGtleSkpIHtcbiAgICBuYW1lID0gJ1snICsga2V5ICsgJ10nO1xuICB9XG4gIGlmICghc3RyKSB7XG4gICAgaWYgKGN0eC5zZWVuLmluZGV4T2YoZGVzYy52YWx1ZSkgPCAwKSB7XG4gICAgICBpZiAoaXNOdWxsKHJlY3Vyc2VUaW1lcykpIHtcbiAgICAgICAgc3RyID0gZm9ybWF0VmFsdWUoY3R4LCBkZXNjLnZhbHVlLCBudWxsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0ciA9IGZvcm1hdFZhbHVlKGN0eCwgZGVzYy52YWx1ZSwgcmVjdXJzZVRpbWVzIC0gMSk7XG4gICAgICB9XG4gICAgICBpZiAoc3RyLmluZGV4T2YoJ1xcbicpID4gLTEpIHtcbiAgICAgICAgaWYgKGFycmF5KSB7XG4gICAgICAgICAgc3RyID0gc3RyLnNwbGl0KCdcXG4nKS5tYXAoZnVuY3Rpb24obGluZSkge1xuICAgICAgICAgICAgcmV0dXJuICcgICcgKyBsaW5lO1xuICAgICAgICAgIH0pLmpvaW4oJ1xcbicpLnN1YnN0cigyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdHIgPSAnXFxuJyArIHN0ci5zcGxpdCgnXFxuJykubWFwKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgICAgICAgIHJldHVybiAnICAgJyArIGxpbmU7XG4gICAgICAgICAgfSkuam9pbignXFxuJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc3RyID0gY3R4LnN0eWxpemUoJ1tDaXJjdWxhcl0nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgfVxuICBpZiAoaXNVbmRlZmluZWQobmFtZSkpIHtcbiAgICBpZiAoYXJyYXkgJiYga2V5Lm1hdGNoKC9eXFxkKyQvKSkge1xuICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG4gICAgbmFtZSA9IEpTT04uc3RyaW5naWZ5KCcnICsga2V5KTtcbiAgICBpZiAobmFtZS5tYXRjaCgvXlwiKFthLXpBLVpfXVthLXpBLVpfMC05XSopXCIkLykpIHtcbiAgICAgIG5hbWUgPSBuYW1lLnN1YnN0cigxLCBuYW1lLmxlbmd0aCAtIDIpO1xuICAgICAgbmFtZSA9IGN0eC5zdHlsaXplKG5hbWUsICduYW1lJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5hbWUgPSBuYW1lLnJlcGxhY2UoLycvZywgXCJcXFxcJ1wiKVxuICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFxcXFwiL2csICdcIicpXG4gICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8oXlwifFwiJCkvZywgXCInXCIpO1xuICAgICAgbmFtZSA9IGN0eC5zdHlsaXplKG5hbWUsICdzdHJpbmcnKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmFtZSArICc6ICcgKyBzdHI7XG59XG5cblxuZnVuY3Rpb24gcmVkdWNlVG9TaW5nbGVTdHJpbmcob3V0cHV0LCBiYXNlLCBicmFjZXMpIHtcbiAgdmFyIG51bUxpbmVzRXN0ID0gMDtcbiAgdmFyIGxlbmd0aCA9IG91dHB1dC5yZWR1Y2UoZnVuY3Rpb24ocHJldiwgY3VyKSB7XG4gICAgbnVtTGluZXNFc3QrKztcbiAgICBpZiAoY3VyLmluZGV4T2YoJ1xcbicpID49IDApIG51bUxpbmVzRXN0Kys7XG4gICAgcmV0dXJuIHByZXYgKyBjdXIucmVwbGFjZSgvXFx1MDAxYlxcW1xcZFxcZD9tL2csICcnKS5sZW5ndGggKyAxO1xuICB9LCAwKTtcblxuICBpZiAobGVuZ3RoID4gNjApIHtcbiAgICByZXR1cm4gYnJhY2VzWzBdICtcbiAgICAgICAgICAgKGJhc2UgPT09ICcnID8gJycgOiBiYXNlICsgJ1xcbiAnKSArXG4gICAgICAgICAgICcgJyArXG4gICAgICAgICAgIG91dHB1dC5qb2luKCcsXFxuICAnKSArXG4gICAgICAgICAgICcgJyArXG4gICAgICAgICAgIGJyYWNlc1sxXTtcbiAgfVxuXG4gIHJldHVybiBicmFjZXNbMF0gKyBiYXNlICsgJyAnICsgb3V0cHV0LmpvaW4oJywgJykgKyAnICcgKyBicmFjZXNbMV07XG59XG5cblxuLy8gTk9URTogVGhlc2UgdHlwZSBjaGVja2luZyBmdW5jdGlvbnMgaW50ZW50aW9uYWxseSBkb24ndCB1c2UgYGluc3RhbmNlb2ZgXG4vLyBiZWNhdXNlIGl0IGlzIGZyYWdpbGUgYW5kIGNhbiBiZSBlYXNpbHkgZmFrZWQgd2l0aCBgT2JqZWN0LmNyZWF0ZSgpYC5cbmZ1bmN0aW9uIGlzQXJyYXkoYXIpIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkoYXIpO1xufVxuZXhwb3J0cy5pc0FycmF5ID0gaXNBcnJheTtcblxuZnVuY3Rpb24gaXNCb29sZWFuKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ2Jvb2xlYW4nO1xufVxuZXhwb3J0cy5pc0Jvb2xlYW4gPSBpc0Jvb2xlYW47XG5cbmZ1bmN0aW9uIGlzTnVsbChhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PT0gbnVsbDtcbn1cbmV4cG9ydHMuaXNOdWxsID0gaXNOdWxsO1xuXG5mdW5jdGlvbiBpc051bGxPclVuZGVmaW5lZChhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PSBudWxsO1xufVxuZXhwb3J0cy5pc051bGxPclVuZGVmaW5lZCA9IGlzTnVsbE9yVW5kZWZpbmVkO1xuXG5mdW5jdGlvbiBpc051bWJlcihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdudW1iZXInO1xufVxuZXhwb3J0cy5pc051bWJlciA9IGlzTnVtYmVyO1xuXG5mdW5jdGlvbiBpc1N0cmluZyhhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdzdHJpbmcnO1xufVxuZXhwb3J0cy5pc1N0cmluZyA9IGlzU3RyaW5nO1xuXG5mdW5jdGlvbiBpc1N5bWJvbChhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdzeW1ib2wnO1xufVxuZXhwb3J0cy5pc1N5bWJvbCA9IGlzU3ltYm9sO1xuXG5mdW5jdGlvbiBpc1VuZGVmaW5lZChhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PT0gdm9pZCAwO1xufVxuZXhwb3J0cy5pc1VuZGVmaW5lZCA9IGlzVW5kZWZpbmVkO1xuXG5mdW5jdGlvbiBpc1JlZ0V4cChyZSkge1xuICByZXR1cm4gaXNPYmplY3QocmUpICYmIG9iamVjdFRvU3RyaW5nKHJlKSA9PT0gJ1tvYmplY3QgUmVnRXhwXSc7XG59XG5leHBvcnRzLmlzUmVnRXhwID0gaXNSZWdFeHA7XG5cbmZ1bmN0aW9uIGlzT2JqZWN0KGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ29iamVjdCcgJiYgYXJnICE9PSBudWxsO1xufVxuZXhwb3J0cy5pc09iamVjdCA9IGlzT2JqZWN0O1xuXG5mdW5jdGlvbiBpc0RhdGUoZCkge1xuICByZXR1cm4gaXNPYmplY3QoZCkgJiYgb2JqZWN0VG9TdHJpbmcoZCkgPT09ICdbb2JqZWN0IERhdGVdJztcbn1cbmV4cG9ydHMuaXNEYXRlID0gaXNEYXRlO1xuXG5mdW5jdGlvbiBpc0Vycm9yKGUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KGUpICYmXG4gICAgICAob2JqZWN0VG9TdHJpbmcoZSkgPT09ICdbb2JqZWN0IEVycm9yXScgfHwgZSBpbnN0YW5jZW9mIEVycm9yKTtcbn1cbmV4cG9ydHMuaXNFcnJvciA9IGlzRXJyb3I7XG5cbmZ1bmN0aW9uIGlzRnVuY3Rpb24oYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnZnVuY3Rpb24nO1xufVxuZXhwb3J0cy5pc0Z1bmN0aW9uID0gaXNGdW5jdGlvbjtcblxuZnVuY3Rpb24gaXNQcmltaXRpdmUoYXJnKSB7XG4gIHJldHVybiBhcmcgPT09IG51bGwgfHxcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICdib29sZWFuJyB8fFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ251bWJlcicgfHxcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICdzdHJpbmcnIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnc3ltYm9sJyB8fCAgLy8gRVM2IHN5bWJvbFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ3VuZGVmaW5lZCc7XG59XG5leHBvcnRzLmlzUHJpbWl0aXZlID0gaXNQcmltaXRpdmU7XG5cbmV4cG9ydHMuaXNCdWZmZXIgPSByZXF1aXJlKCcuL3N1cHBvcnQvaXNCdWZmZXInKTtcblxuZnVuY3Rpb24gb2JqZWN0VG9TdHJpbmcobykge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pO1xufVxuXG5cbmZ1bmN0aW9uIHBhZChuKSB7XG4gIHJldHVybiBuIDwgMTAgPyAnMCcgKyBuLnRvU3RyaW5nKDEwKSA6IG4udG9TdHJpbmcoMTApO1xufVxuXG5cbnZhciBtb250aHMgPSBbJ0phbicsICdGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJywgJ0p1bCcsICdBdWcnLCAnU2VwJyxcbiAgICAgICAgICAgICAgJ09jdCcsICdOb3YnLCAnRGVjJ107XG5cbi8vIDI2IEZlYiAxNjoxOTozNFxuZnVuY3Rpb24gdGltZXN0YW1wKCkge1xuICB2YXIgZCA9IG5ldyBEYXRlKCk7XG4gIHZhciB0aW1lID0gW3BhZChkLmdldEhvdXJzKCkpLFxuICAgICAgICAgICAgICBwYWQoZC5nZXRNaW51dGVzKCkpLFxuICAgICAgICAgICAgICBwYWQoZC5nZXRTZWNvbmRzKCkpXS5qb2luKCc6Jyk7XG4gIHJldHVybiBbZC5nZXREYXRlKCksIG1vbnRoc1tkLmdldE1vbnRoKCldLCB0aW1lXS5qb2luKCcgJyk7XG59XG5cblxuLy8gbG9nIGlzIGp1c3QgYSB0aGluIHdyYXBwZXIgdG8gY29uc29sZS5sb2cgdGhhdCBwcmVwZW5kcyBhIHRpbWVzdGFtcFxuZXhwb3J0cy5sb2cgPSBmdW5jdGlvbigpIHtcbiAgY29uc29sZS5sb2coJyVzIC0gJXMnLCB0aW1lc3RhbXAoKSwgZXhwb3J0cy5mb3JtYXQuYXBwbHkoZXhwb3J0cywgYXJndW1lbnRzKSk7XG59O1xuXG5cbi8qKlxuICogSW5oZXJpdCB0aGUgcHJvdG90eXBlIG1ldGhvZHMgZnJvbSBvbmUgY29uc3RydWN0b3IgaW50byBhbm90aGVyLlxuICpcbiAqIFRoZSBGdW5jdGlvbi5wcm90b3R5cGUuaW5oZXJpdHMgZnJvbSBsYW5nLmpzIHJld3JpdHRlbiBhcyBhIHN0YW5kYWxvbmVcbiAqIGZ1bmN0aW9uIChub3Qgb24gRnVuY3Rpb24ucHJvdG90eXBlKS4gTk9URTogSWYgdGhpcyBmaWxlIGlzIHRvIGJlIGxvYWRlZFxuICogZHVyaW5nIGJvb3RzdHJhcHBpbmcgdGhpcyBmdW5jdGlvbiBuZWVkcyB0byBiZSByZXdyaXR0ZW4gdXNpbmcgc29tZSBuYXRpdmVcbiAqIGZ1bmN0aW9ucyBhcyBwcm90b3R5cGUgc2V0dXAgdXNpbmcgbm9ybWFsIEphdmFTY3JpcHQgZG9lcyBub3Qgd29yayBhc1xuICogZXhwZWN0ZWQgZHVyaW5nIGJvb3RzdHJhcHBpbmcgKHNlZSBtaXJyb3IuanMgaW4gcjExNDkwMykuXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gY3RvciBDb25zdHJ1Y3RvciBmdW5jdGlvbiB3aGljaCBuZWVkcyB0byBpbmhlcml0IHRoZVxuICogICAgIHByb3RvdHlwZS5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IHN1cGVyQ3RvciBDb25zdHJ1Y3RvciBmdW5jdGlvbiB0byBpbmhlcml0IHByb3RvdHlwZSBmcm9tLlxuICovXG5leHBvcnRzLmluaGVyaXRzID0gcmVxdWlyZSgnaW5oZXJpdHMnKTtcblxuZXhwb3J0cy5fZXh0ZW5kID0gZnVuY3Rpb24ob3JpZ2luLCBhZGQpIHtcbiAgLy8gRG9uJ3QgZG8gYW55dGhpbmcgaWYgYWRkIGlzbid0IGFuIG9iamVjdFxuICBpZiAoIWFkZCB8fCAhaXNPYmplY3QoYWRkKSkgcmV0dXJuIG9yaWdpbjtcblxuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGFkZCk7XG4gIHZhciBpID0ga2V5cy5sZW5ndGg7XG4gIHdoaWxlIChpLS0pIHtcbiAgICBvcmlnaW5ba2V5c1tpXV0gPSBhZGRba2V5c1tpXV07XG4gIH1cbiAgcmV0dXJuIG9yaWdpbjtcbn07XG5cbmZ1bmN0aW9uIGhhc093blByb3BlcnR5KG9iaiwgcHJvcCkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7XG59XG5cbnZhciBrQ3VzdG9tUHJvbWlzaWZpZWRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyA/IFN5bWJvbCgndXRpbC5wcm9taXNpZnkuY3VzdG9tJykgOiB1bmRlZmluZWQ7XG5cbmV4cG9ydHMucHJvbWlzaWZ5ID0gZnVuY3Rpb24gcHJvbWlzaWZ5KG9yaWdpbmFsKSB7XG4gIGlmICh0eXBlb2Ygb3JpZ2luYWwgIT09ICdmdW5jdGlvbicpXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwib3JpZ2luYWxcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24nKTtcblxuICBpZiAoa0N1c3RvbVByb21pc2lmaWVkU3ltYm9sICYmIG9yaWdpbmFsW2tDdXN0b21Qcm9taXNpZmllZFN5bWJvbF0pIHtcbiAgICB2YXIgZm4gPSBvcmlnaW5hbFtrQ3VzdG9tUHJvbWlzaWZpZWRTeW1ib2xdO1xuICAgIGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcInV0aWwucHJvbWlzaWZ5LmN1c3RvbVwiIGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBGdW5jdGlvbicpO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZm4sIGtDdXN0b21Qcm9taXNpZmllZFN5bWJvbCwge1xuICAgICAgdmFsdWU6IGZuLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IGZhbHNlLCBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gZm47XG4gIH1cblxuICBmdW5jdGlvbiBmbigpIHtcbiAgICB2YXIgcHJvbWlzZVJlc29sdmUsIHByb21pc2VSZWplY3Q7XG4gICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICBwcm9taXNlUmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgICBwcm9taXNlUmVqZWN0ID0gcmVqZWN0O1xuICAgIH0pO1xuXG4gICAgdmFyIGFyZ3MgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgYXJncy5wdXNoKGFyZ3VtZW50c1tpXSk7XG4gICAgfVxuICAgIGFyZ3MucHVzaChmdW5jdGlvbiAoZXJyLCB2YWx1ZSkge1xuICAgICAgaWYgKGVycikge1xuICAgICAgICBwcm9taXNlUmVqZWN0KGVycik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9taXNlUmVzb2x2ZSh2YWx1ZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0cnkge1xuICAgICAgb3JpZ2luYWwuYXBwbHkodGhpcywgYXJncyk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBwcm9taXNlUmVqZWN0KGVycik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb21pc2U7XG4gIH1cblxuICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZm4sIE9iamVjdC5nZXRQcm90b3R5cGVPZihvcmlnaW5hbCkpO1xuXG4gIGlmIChrQ3VzdG9tUHJvbWlzaWZpZWRTeW1ib2wpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmbiwga0N1c3RvbVByb21pc2lmaWVkU3ltYm9sLCB7XG4gICAgdmFsdWU6IGZuLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IGZhbHNlLCBjb25maWd1cmFibGU6IHRydWVcbiAgfSk7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhcbiAgICBmbixcbiAgICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKG9yaWdpbmFsKVxuICApO1xufVxuXG5leHBvcnRzLnByb21pc2lmeS5jdXN0b20gPSBrQ3VzdG9tUHJvbWlzaWZpZWRTeW1ib2xcblxuZnVuY3Rpb24gY2FsbGJhY2tpZnlPblJlamVjdGVkKHJlYXNvbiwgY2IpIHtcbiAgLy8gYCFyZWFzb25gIGd1YXJkIGluc3BpcmVkIGJ5IGJsdWViaXJkIChSZWY6IGh0dHBzOi8vZ29vLmdsL3Q1SVM2TSkuXG4gIC8vIEJlY2F1c2UgYG51bGxgIGlzIGEgc3BlY2lhbCBlcnJvciB2YWx1ZSBpbiBjYWxsYmFja3Mgd2hpY2ggbWVhbnMgXCJubyBlcnJvclxuICAvLyBvY2N1cnJlZFwiLCB3ZSBlcnJvci13cmFwIHNvIHRoZSBjYWxsYmFjayBjb25zdW1lciBjYW4gZGlzdGluZ3Vpc2ggYmV0d2VlblxuICAvLyBcInRoZSBwcm9taXNlIHJlamVjdGVkIHdpdGggbnVsbFwiIG9yIFwidGhlIHByb21pc2UgZnVsZmlsbGVkIHdpdGggdW5kZWZpbmVkXCIuXG4gIGlmICghcmVhc29uKSB7XG4gICAgdmFyIG5ld1JlYXNvbiA9IG5ldyBFcnJvcignUHJvbWlzZSB3YXMgcmVqZWN0ZWQgd2l0aCBhIGZhbHN5IHZhbHVlJyk7XG4gICAgbmV3UmVhc29uLnJlYXNvbiA9IHJlYXNvbjtcbiAgICByZWFzb24gPSBuZXdSZWFzb247XG4gIH1cbiAgcmV0dXJuIGNiKHJlYXNvbik7XG59XG5cbmZ1bmN0aW9uIGNhbGxiYWNraWZ5KG9yaWdpbmFsKSB7XG4gIGlmICh0eXBlb2Ygb3JpZ2luYWwgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgXCJvcmlnaW5hbFwiIGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBGdW5jdGlvbicpO1xuICB9XG5cbiAgLy8gV2UgRE8gTk9UIHJldHVybiB0aGUgcHJvbWlzZSBhcyBpdCBnaXZlcyB0aGUgdXNlciBhIGZhbHNlIHNlbnNlIHRoYXRcbiAgLy8gdGhlIHByb21pc2UgaXMgYWN0dWFsbHkgc29tZWhvdyByZWxhdGVkIHRvIHRoZSBjYWxsYmFjaydzIGV4ZWN1dGlvblxuICAvLyBhbmQgdGhhdCB0aGUgY2FsbGJhY2sgdGhyb3dpbmcgd2lsbCByZWplY3QgdGhlIHByb21pc2UuXG4gIGZ1bmN0aW9uIGNhbGxiYWNraWZpZWQoKSB7XG4gICAgdmFyIGFyZ3MgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgYXJncy5wdXNoKGFyZ3VtZW50c1tpXSk7XG4gICAgfVxuXG4gICAgdmFyIG1heWJlQ2IgPSBhcmdzLnBvcCgpO1xuICAgIGlmICh0eXBlb2YgbWF5YmVDYiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIGxhc3QgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEZ1bmN0aW9uJyk7XG4gICAgfVxuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgY2IgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBtYXliZUNiLmFwcGx5KHNlbGYsIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgICAvLyBJbiB0cnVlIG5vZGUgc3R5bGUgd2UgcHJvY2VzcyB0aGUgY2FsbGJhY2sgb24gYG5leHRUaWNrYCB3aXRoIGFsbCB0aGVcbiAgICAvLyBpbXBsaWNhdGlvbnMgKHN0YWNrLCBgdW5jYXVnaHRFeGNlcHRpb25gLCBgYXN5bmNfaG9va3NgKVxuICAgIG9yaWdpbmFsLmFwcGx5KHRoaXMsIGFyZ3MpXG4gICAgICAudGhlbihmdW5jdGlvbihyZXQpIHsgcHJvY2Vzcy5uZXh0VGljayhjYiwgbnVsbCwgcmV0KSB9LFxuICAgICAgICAgICAgZnVuY3Rpb24ocmVqKSB7IHByb2Nlc3MubmV4dFRpY2soY2FsbGJhY2tpZnlPblJlamVjdGVkLCByZWosIGNiKSB9KTtcbiAgfVxuXG4gIE9iamVjdC5zZXRQcm90b3R5cGVPZihjYWxsYmFja2lmaWVkLCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob3JpZ2luYWwpKTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY2FsbGJhY2tpZmllZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhvcmlnaW5hbCkpO1xuICByZXR1cm4gY2FsbGJhY2tpZmllZDtcbn1cbmV4cG9ydHMuY2FsbGJhY2tpZnkgPSBjYWxsYmFja2lmeTtcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQnVmZmVyKGFyZykge1xuICByZXR1cm4gYXJnICYmIHR5cGVvZiBhcmcgPT09ICdvYmplY3QnXG4gICAgJiYgdHlwZW9mIGFyZy5jb3B5ID09PSAnZnVuY3Rpb24nXG4gICAgJiYgdHlwZW9mIGFyZy5maWxsID09PSAnZnVuY3Rpb24nXG4gICAgJiYgdHlwZW9mIGFyZy5yZWFkVUludDggPT09ICdmdW5jdGlvbic7XG59IiwiaWYgKHR5cGVvZiBPYmplY3QuY3JlYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gIC8vIGltcGxlbWVudGF0aW9uIGZyb20gc3RhbmRhcmQgbm9kZS5qcyAndXRpbCcgbW9kdWxlXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaW5oZXJpdHMoY3Rvciwgc3VwZXJDdG9yKSB7XG4gICAgY3Rvci5zdXBlcl8gPSBzdXBlckN0b3JcbiAgICBjdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDdG9yLnByb3RvdHlwZSwge1xuICAgICAgY29uc3RydWN0b3I6IHtcbiAgICAgICAgdmFsdWU6IGN0b3IsXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICB9XG4gICAgfSk7XG4gIH07XG59IGVsc2Uge1xuICAvLyBvbGQgc2Nob29sIHNoaW0gZm9yIG9sZCBicm93c2Vyc1xuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGluaGVyaXRzKGN0b3IsIHN1cGVyQ3Rvcikge1xuICAgIGN0b3Iuc3VwZXJfID0gc3VwZXJDdG9yXG4gICAgdmFyIFRlbXBDdG9yID0gZnVuY3Rpb24gKCkge31cbiAgICBUZW1wQ3Rvci5wcm90b3R5cGUgPSBzdXBlckN0b3IucHJvdG90eXBlXG4gICAgY3Rvci5wcm90b3R5cGUgPSBuZXcgVGVtcEN0b3IoKVxuICAgIGN0b3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gY3RvclxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9