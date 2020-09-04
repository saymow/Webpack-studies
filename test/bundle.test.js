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
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


describe("markdownPreviewer", function () {
  it("should exist", function () {
    expect(_src_mdPreviewer__WEBPACK_IMPORTED_MODULE_0__["default"]).toBeDefined();
  });
  it("should allow deep references", function () {
    var _o$foo;

    var o = {
      foo: {
        bar: "blah"
      }
    };

    var y = _objectSpread({}, o);

    expect(o === null || o === void 0 ? void 0 : (_o$foo = o.foo) === null || _o$foo === void 0 ? void 0 : _o$foo.bar).toBe("blah");
    expect(y).toEqual(o);
  });
});

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var markdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var markdown__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(markdown__WEBPACK_IMPORTED_MODULE_0__);


var attachPreviewer = function attachPreviewer($document, sourceId, previewerId) {
  return function (event) {
    var text = $document.getElementById(sourceId).value,
        preview = $document.getElementById(previewerId);
    preview.innerHTML = markdown__WEBPACK_IMPORTED_MODULE_0__["markdown"].toHTML(text);
    event.preventDefault();
  };
};

/* harmony default export */ __webpack_exports__["default"] = ({
  attachPreviewer: attachPreviewer
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
(function (expose) {
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
  var Markdown = expose.Markdown = function (dialect) {
    switch (typeof dialect) {
      case "undefined":
        this.dialect = Markdown.dialects.Gruber;
        break;

      case "object":
        this.dialect = dialect;
        break;

      default:
        if (dialect in Markdown.dialects) {
          this.dialect = Markdown.dialects[dialect];
        } else {
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


  expose.parse = function (source, dialect) {
    // dialect will default if undefined
    var md = new Markdown(dialect);
    return md.toTree(source);
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


  expose.toHTML = function toHTML(source, dialect, options) {
    var input = expose.toHTMLTree(source, dialect, options);
    return expose.renderJsonML(input);
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


  expose.toHTMLTree = function toHTMLTree(input, dialect, options) {
    // convert string input to an MD tree
    if (typeof input === "string") input = this.parse(input, dialect); // Now convert the MD tree to an HTML tree
    // remove references from the tree

    var attrs = extract_attr(input),
        refs = {};

    if (attrs && attrs.references) {
      refs = attrs.references;
    }

    var html = convert_tree_to_html(input, refs, options);
    merge_text_nodes(html);
    return html;
  }; // For Spidermonkey based engines


  function mk_block_toSource() {
    return "Markdown.mk_block( " + uneval(this.toString()) + ", " + uneval(this.trailing) + ", " + uneval(this.lineNumber) + " )";
  } // node


  function mk_block_inspect() {
    var util = __webpack_require__(6);

    return "Markdown.mk_block( " + util.inspect(this.toString()) + ", " + util.inspect(this.trailing) + ", " + util.inspect(this.lineNumber) + " )";
  }

  var mk_block = Markdown.mk_block = function (block, trail, line) {
    // Be helpful for default case in tests.
    if (arguments.length == 1) trail = "\n\n";
    var s = new String(block);
    s.trailing = trail; // To make it clear its not just a string

    s.inspect = mk_block_inspect;
    s.toSource = mk_block_toSource;
    if (line != undefined) s.lineNumber = line;
    return s;
  };

  function count_lines(str) {
    var n = 0,
        i = -1;

    while ((i = str.indexOf("\n", i + 1)) !== -1) n++;

    return n;
  } // Internal - split source into rough blocks


  Markdown.prototype.split_blocks = function splitBlocks(input, startLine) {
    input = input.replace(/(\r\n|\n|\r)/g, "\n"); // [\s\S] matches _anything_ (newline or space)
    // [^] is equivalent but doesn't work in IEs.

    var re = /([\s\S]+?)($|\n#|\n(?:\s*\n|$)+)/g,
        blocks = [],
        m;
    var line_no = 1;

    if ((m = /^(\s*\n)/.exec(input)) != null) {
      // skip (but count) leading blank lines
      line_no += count_lines(m[0]);
      re.lastIndex = m[0].length;
    }

    while ((m = re.exec(input)) !== null) {
      if (m[2] == "\n#") {
        m[2] = "\n";
        re.lastIndex--;
      }

      blocks.push(mk_block(m[1], m[2], line_no));
      line_no += count_lines(m[0]);
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


  Markdown.prototype.processBlock = function processBlock(block, next) {
    var cbs = this.dialect.block,
        ord = cbs.__order__;

    if ("__call__" in cbs) {
      return cbs.__call__.call(this, block, next);
    }

    for (var i = 0; i < ord.length; i++) {
      //D:this.debug( "Testing", ord[i] );
      var res = cbs[ord[i]].call(this, block, next);

      if (res) {
        //D:this.debug("  matched");
        if (!isArray(res) || res.length > 0 && !isArray(res[0])) this.debug(ord[i], "didn't return a proper array"); //D:this.debug( "" );

        return res;
      }
    } // Uhoh! no match! Should we throw an error?


    return [];
  };

  Markdown.prototype.processInline = function processInline(block) {
    return this.dialect.inline.__call__.call(this, String(block));
  };
  /**
   *  Markdown#toTree( source ) -> JsonML
   *  - source (String): markdown source to parse
   *
   *  Parse `source` into a JsonML tree representing the markdown document.
   **/
  // custom_tree means set this.tree to `custom_tree` and restore old value on return


  Markdown.prototype.toTree = function toTree(source, custom_root) {
    var blocks = source instanceof Array ? source : this.split_blocks(source); // Make tree a member variable so its easier to mess with in extensions

    var old_tree = this.tree;

    try {
      this.tree = custom_root || this.tree || ["markdown"];

      blocks: while (blocks.length) {
        var b = this.processBlock(blocks.shift(), blocks); // Reference blocks and the like won't return any content

        if (!b.length) continue blocks;
        this.tree.push.apply(this.tree, b);
      }

      return this.tree;
    } finally {
      if (custom_root) {
        this.tree = old_tree;
      }
    }
  }; // Noop by default


  Markdown.prototype.debug = function () {
    var args = Array.prototype.slice.call(arguments);
    args.unshift(this.debug_indent);
    if (typeof print !== "undefined") print.apply(print, args);
    if (typeof console !== "undefined" && typeof console.log !== "undefined") console.log.apply(null, args);
  };

  Markdown.prototype.loop_re_over_block = function (re, block, cb) {
    // Dont use /g regexps with this
    var m,
        b = block.valueOf();

    while (b.length && (m = re.exec(b)) != null) {
      b = b.substr(m[0].length);
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
      atxHeader: function atxHeader(block, next) {
        var m = block.match(/^(#{1,6})\s*(.*?)\s*#*\s*(?:\n|$)/);
        if (!m) return undefined;
        var header = ["header", {
          level: m[1].length
        }];
        Array.prototype.push.apply(header, this.processInline(m[2]));
        if (m[0].length < block.length) next.unshift(mk_block(block.substr(m[0].length), block.trailing, block.lineNumber + 2));
        return [header];
      },
      setextHeader: function setextHeader(block, next) {
        var m = block.match(/^(.*)\n([-=])\2\2+(?:\n|$)/);
        if (!m) return undefined;
        var level = m[2] === "=" ? 1 : 2;
        var header = ["header", {
          level: level
        }, m[1]];
        if (m[0].length < block.length) next.unshift(mk_block(block.substr(m[0].length), block.trailing, block.lineNumber + 2));
        return [header];
      },
      code: function code(block, next) {
        // |    Foo
        // |bar
        // should be a code block followed by a paragraph. Fun
        //
        // There might also be adjacent code block to merge.
        var ret = [],
            re = /^(?: {0,3}\t| {4})(.*)\n?/,
            lines; // 4 spaces + content

        if (!block.match(re)) return undefined;

        block_search: do {
          // Now pull out the rest of the lines
          var b = this.loop_re_over_block(re, block.valueOf(), function (m) {
            ret.push(m[1]);
          });

          if (b.length) {
            // Case alluded to in first comment. push it back on as a new block
            next.unshift(mk_block(b, block.trailing));
            break block_search;
          } else if (next.length) {
            // Check the next block - it might be code too
            if (!next[0].match(re)) break block_search; // Pull how how many blanks lines follow - minus two to account for .join

            ret.push(block.trailing.replace(/[^\n]/g, "").substring(2));
            block = next.shift();
          } else {
            break block_search;
          }
        } while (true);

        return [["code_block", ret.join("\n")]];
      },
      horizRule: function horizRule(block, next) {
        // this needs to find any hr in the block to handle abutting blocks
        var m = block.match(/^(?:([\s\S]*?)\n)?[ \t]*([-_*])(?:[ \t]*\2){2,}[ \t]*(?:\n([\s\S]*))?$/);

        if (!m) {
          return undefined;
        }

        var jsonml = [["hr"]]; // if there's a leading abutting block, process it

        if (m[1]) {
          jsonml.unshift.apply(jsonml, this.processBlock(m[1], []));
        } // if there's a trailing abutting block, stick it into next


        if (m[3]) {
          next.unshift(mk_block(m[3]));
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
      lists: function () {
        // Use a closure to hide a few variables.
        var any_list = "[*+-]|\\d+\\.",
            bullet_list = /[*+-]/,
            number_list = /\d+\./,
            // Capture leading indent as it matters for determining nested lists.
        is_list_re = new RegExp("^( {0,3})(" + any_list + ")[ \t]+"),
            indent_re = "(?: {0,3}\\t| {4})"; // TODO: Cache this regexp for certain depths.
        // Create a regexp suitable for matching an li for a given stack depth

        function regex_for_depth(depth) {
          return new RegExp( // m[1] = indent, m[2] = list_type
          "(?:^(" + indent_re + "{0," + depth + "} {0,3})(" + any_list + ")\\s+)|" + // m[3] = cont
          "(^" + indent_re + "{0," + (depth - 1) + "}[ ]{0,4})");
        }

        function expand_tab(input) {
          return input.replace(/ {0,3}\t/g, "    ");
        } // Add inline content `inline` to `li`. inline comes from processInline
        // so is an array of content


        function add(li, loose, inline, nl) {
          if (loose) {
            li.push(["para"].concat(inline));
            return;
          } // Hmmm, should this be any block level element or just paras?


          var add_to = li[li.length - 1] instanceof Array && li[li.length - 1][0] == "para" ? li[li.length - 1] : li; // If there is already some content in this list, add the new line in

          if (nl && li.length > 1) inline.unshift(nl);

          for (var i = 0; i < inline.length; i++) {
            var what = inline[i],
                is_str = typeof what == "string";

            if (is_str && add_to.length > 1 && typeof add_to[add_to.length - 1] == "string") {
              add_to[add_to.length - 1] += what;
            } else {
              add_to.push(what);
            }
          }
        } // contained means have an indent greater than the current one. On
        // *every* line in the block


        function get_contained_blocks(depth, blocks) {
          var re = new RegExp("^(" + indent_re + "{" + depth + "}.*?\\n?)*$"),
              replace = new RegExp("^" + indent_re + "{" + depth + "}", "gm"),
              ret = [];

          while (blocks.length > 0) {
            if (re.exec(blocks[0])) {
              var b = blocks.shift(),
                  // Now remove that indent
              x = b.replace(replace, "");
              ret.push(mk_block(x, b.trailing, b.lineNumber));
            } else {
              break;
            }
          }

          return ret;
        } // passed to stack.forEach to turn list items up the stack into paras


        function paragraphify(s, i, stack) {
          var list = s.list;
          var last_li = list[list.length - 1];

          if (last_li[1] instanceof Array && last_li[1][0] == "para") {
            return;
          }

          if (i + 1 == stack.length) {
            // Last stack frame
            // Keep the same array, but replace the contents
            last_li.push(["para"].concat(last_li.splice(1, last_li.length - 1)));
          } else {
            var sublist = last_li.pop();
            last_li.push(["para"].concat(last_li.splice(1, last_li.length - 1)), sublist);
          }
        } // The matcher function


        return function (block, next) {
          var m = block.match(is_list_re);
          if (!m) return undefined;

          function make_list(m) {
            var list = bullet_list.exec(m[2]) ? ["bulletlist"] : ["numberlist"];
            stack.push({
              list: list,
              indent: m[1]
            });
            return list;
          }

          var stack = [],
              // Stack of lists for nesting.
          list = make_list(m),
              last_li,
              loose = false,
              ret = [stack[0].list],
              i; // Loop to search over block looking for inner block elements and loose lists

          loose_search: while (true) {
            // Split into lines preserving new lines at end of line
            var lines = block.split(/(?=\n)/); // We have to grab all lines for a li and call processInline on them
            // once as there are some inline things that can span lines.

            var li_accumulate = ""; // Loop over the lines in this block looking for tight lists.

            tight_search: for (var line_no = 0; line_no < lines.length; line_no++) {
              var nl = "",
                  l = lines[line_no].replace(/^\n/, function (n) {
                nl = n;
                return "";
              }); // TODO: really should cache this

              var line_re = regex_for_depth(stack.length);
              m = l.match(line_re); //print( "line:", uneval(l), "\nline match:", uneval(m) );
              // We have a list item

              if (m[1] !== undefined) {
                // Process the previous list item, if any
                if (li_accumulate.length) {
                  add(last_li, loose, this.processInline(li_accumulate), nl); // Loose mode will have been dealt with. Reset it

                  loose = false;
                  li_accumulate = "";
                }

                m[1] = expand_tab(m[1]);
                var wanted_depth = Math.floor(m[1].length / 4) + 1; //print( "want:", wanted_depth, "stack:", stack.length);

                if (wanted_depth > stack.length) {
                  // Deep enough for a nested list outright
                  //print ( "new nested list" );
                  list = make_list(m);
                  last_li.push(list);
                  last_li = list[1] = ["listitem"];
                } else {
                  // We aren't deep enough to be strictly a new level. This is
                  // where Md.pl goes nuts. If the indent matches a level in the
                  // stack, put it there, else put it one deeper then the
                  // wanted_depth deserves.
                  var found = false;

                  for (i = 0; i < stack.length; i++) {
                    if (stack[i].indent != m[1]) continue;
                    list = stack[i].list;
                    stack.splice(i + 1, stack.length - (i + 1));
                    found = true;
                    break;
                  }

                  if (!found) {
                    //print("not found. l:", uneval(l));
                    wanted_depth++;

                    if (wanted_depth <= stack.length) {
                      stack.splice(wanted_depth, stack.length - wanted_depth); //print("Desired depth now", wanted_depth, "stack:", stack.length);

                      list = stack[wanted_depth - 1].list; //print("list:", uneval(list) );
                    } else {
                      //print ("made new stack for messy indent");
                      list = make_list(m);
                      last_li.push(list);
                    }
                  } //print( uneval(list), "last", list === stack[stack.length-1].list );


                  last_li = ["listitem"];
                  list.push(last_li);
                } // end depth of shenegains


                nl = "";
              } // Add content


              if (l.length > m[0].length) {
                li_accumulate += nl + l.substr(m[0].length);
              }
            } // tight_search


            if (li_accumulate.length) {
              add(last_li, loose, this.processInline(li_accumulate), nl); // Loose mode will have been dealt with. Reset it

              loose = false;
              li_accumulate = "";
            } // Look at the next block - we might have a loose list. Or an extra
            // paragraph for the current li


            var contained = get_contained_blocks(stack.length, next); // Deal with code blocks or properly nested lists

            if (contained.length > 0) {
              // Make sure all listitems up the stack are paragraphs
              forEach(stack, paragraphify, this);
              last_li.push.apply(last_li, this.toTree(contained, []));
            }

            var next_block = next[0] && next[0].valueOf() || "";

            if (next_block.match(is_list_re) || next_block.match(/^ /)) {
              block = next.shift(); // Check for an HR following a list: features/lists/hr_abutting

              var hr = this.dialect.block.horizRule(block, next);

              if (hr) {
                ret.push.apply(ret, hr);
                break;
              } // Make sure all listitems up the stack are paragraphs


              forEach(stack, paragraphify, this);
              loose = true;
              continue loose_search;
            }

            break;
          } // loose_search


          return ret;
        };
      }(),
      blockquote: function blockquote(block, next) {
        if (!block.match(/^>/m)) return undefined;
        var jsonml = []; // separate out the leading abutting block, if any. I.e. in this case:
        //
        //  a
        //  > b
        //

        if (block[0] != ">") {
          var lines = block.split(/\n/),
              prev = [],
              line_no = block.lineNumber; // keep shifting lines until you find a crotchet

          while (lines.length && lines[0][0] != ">") {
            prev.push(lines.shift());
            line_no++;
          }

          var abutting = mk_block(prev.join("\n"), "\n", block.lineNumber);
          jsonml.push.apply(jsonml, this.processBlock(abutting, [])); // reassemble new block of just block quotes!

          block = mk_block(lines.join("\n"), block.trailing, line_no);
        } // if the next block is also a blockquote merge it in


        while (next.length && next[0][0] == ">") {
          var b = next.shift();
          block = mk_block(block + block.trailing + b, b.trailing, block.lineNumber);
        } // Strip off the leading "> " and re-process as a block.


        var input = block.replace(/^> ?/gm, ""),
            old_tree = this.tree,
            processedBlock = this.toTree(input, ["blockquote"]),
            attr = extract_attr(processedBlock); // If any link references were found get rid of them

        if (attr && attr.references) {
          delete attr.references; // And then remove the attribute object if it's empty

          if (isEmpty(attr)) {
            processedBlock.splice(1, 1);
          }
        }

        jsonml.push(processedBlock);
        return jsonml;
      },
      referenceDefn: function referenceDefn(block, next) {
        var re = /^\s*\[(.*?)\]:\s*(\S+)(?:\s+(?:(['"])(.*?)\3|\((.*?)\)))?\n?/; // interesting matches are [ , ref_id, url, , title, title ]

        if (!block.match(re)) return undefined; // make an attribute node if it doesn't exist

        if (!extract_attr(this.tree)) {
          this.tree.splice(1, 0, {});
        }

        var attrs = extract_attr(this.tree); // make a references hash if it doesn't exist

        if (attrs.references === undefined) {
          attrs.references = {};
        }

        var b = this.loop_re_over_block(re, block, function (m) {
          if (m[2] && m[2][0] == "<" && m[2][m[2].length - 1] == ">") m[2] = m[2].substring(1, m[2].length - 1);
          var ref = attrs.references[m[1].toLowerCase()] = {
            href: m[2]
          };
          if (m[4] !== undefined) ref.title = m[4];else if (m[5] !== undefined) ref.title = m[5];
        });
        if (b.length) next.unshift(mk_block(b, block.trailing));
        return [];
      },
      para: function para(block, next) {
        // everything's a para!
        return [["para"].concat(this.processInline(block))];
      }
    }
  };
  Markdown.dialects.Gruber.inline = {
    __oneElement__: function oneElement(text, patterns_or_re, previous_nodes) {
      var m,
          res,
          lastIndex = 0;
      patterns_or_re = patterns_or_re || this.dialect.inline.__patterns__;
      var re = new RegExp("([\\s\\S]*?)(" + (patterns_or_re.source || patterns_or_re) + ")");
      m = re.exec(text);

      if (!m) {
        // Just boring text
        return [text.length, text];
      } else if (m[1]) {
        // Some un-interesting text matched. Return that first
        return [m[1].length, m[1]];
      }

      var res;

      if (m[2] in this.dialect.inline) {
        res = this.dialect.inline[m[2]].call(this, text.substr(m.index), m, previous_nodes || []);
      } // Default for now to make dev easier. just slurp special and output it.


      res = res || [m[2].length, m[2]];
      return res;
    },
    __call__: function inline(text, patterns) {
      var out = [],
          res;

      function add(x) {
        //D:self.debug("  adding output", uneval(x));
        if (typeof x == "string" && typeof out[out.length - 1] == "string") out[out.length - 1] += x;else out.push(x);
      }

      while (text.length > 0) {
        res = this.dialect.inline.__oneElement__.call(this, text, patterns, out);
        text = text.substr(res.shift());
        forEach(res, add);
      }

      return out;
    },
    // These characters are intersting elsewhere, so have rules for them so that
    // chunks of plain text blocks don't include them
    "]": function () {},
    "}": function () {},
    __escape__: /^\\[\\`\*_{}\[\]()#\+.!\-]/,
    "\\": function escaped(text) {
      // [ length of input processed, node/children to add... ]
      // Only esacape: \ ` * _ { } [ ] ( ) # * + - . !
      if (this.dialect.inline.__escape__.exec(text)) return [2, text.charAt(1)];else // Not an esacpe
        return [1, "\\"];
    },
    "![": function image(text) {
      // Unlike images, alt text is plain text only. no other elements are
      // allowed in there
      // ![Alt text](/path/to/img.jpg "Optional title")
      //      1          2            3       4         <--- captures
      var m = text.match(/^!\[(.*?)\][ \t]*\([ \t]*([^")]*?)(?:[ \t]+(["'])(.*?)\3)?[ \t]*\)/);

      if (m) {
        if (m[2] && m[2][0] == "<" && m[2][m[2].length - 1] == ">") m[2] = m[2].substring(1, m[2].length - 1);
        m[2] = this.dialect.inline.__call__.call(this, m[2], /\\/)[0];
        var attrs = {
          alt: m[1],
          href: m[2] || ""
        };
        if (m[4] !== undefined) attrs.title = m[4];
        return [m[0].length, ["img", attrs]];
      } // ![Alt text][id]


      m = text.match(/^!\[(.*?)\][ \t]*\[(.*?)\]/);

      if (m) {
        // We can't check if the reference is known here as it likely wont be
        // found till after. Check it in md tree->hmtl tree conversion
        return [m[0].length, ["img_ref", {
          alt: m[1],
          ref: m[2].toLowerCase(),
          original: m[0]
        }]];
      } // Just consume the '!['


      return [2, "!["];
    },
    "[": function link(text) {
      var orig = String(text); // Inline content is possible inside `link text`

      var res = Markdown.DialectHelpers.inline_until_char.call(this, text.substr(1), "]"); // No closing ']' found. Just consume the [

      if (!res) return [1, "["];
      var consumed = 1 + res[0],
          children = res[1],
          link,
          attrs; // At this point the first [...] has been parsed. See what follows to find
      // out which kind of link we are (reference or direct url)

      text = text.substr(consumed); // [link text](/path/to/img.jpg "Optional title")
      //                 1            2       3         <--- captures
      // This will capture up to the last paren in the block. We then pull
      // back based on if there a matching ones in the url
      //    ([here](/url/(test))
      // The parens have to be balanced

      var m = text.match(/^\s*\([ \t]*([^"']*)(?:[ \t]+(["'])(.*?)\2)?[ \t]*\)/);

      if (m) {
        var url = m[1];
        consumed += m[0].length;
        if (url && url[0] == "<" && url[url.length - 1] == ">") url = url.substring(1, url.length - 1); // If there is a title we don't have to worry about parens in the url

        if (!m[3]) {
          var open_parens = 1; // One open that isn't in the capture

          for (var len = 0; len < url.length; len++) {
            switch (url[len]) {
              case "(":
                open_parens++;
                break;

              case ")":
                if (--open_parens == 0) {
                  consumed -= url.length - len;
                  url = url.substring(0, len);
                }

                break;
            }
          }
        } // Process escapes only


        url = this.dialect.inline.__call__.call(this, url, /\\/)[0];
        attrs = {
          href: url || ""
        };
        if (m[3] !== undefined) attrs.title = m[3];
        link = ["link", attrs].concat(children);
        return [consumed, link];
      } // [Alt text][id]
      // [Alt text] [id]


      m = text.match(/^\s*\[(.*?)\]/);

      if (m) {
        consumed += m[0].length; // [links][] uses links as its reference

        attrs = {
          ref: (m[1] || String(children)).toLowerCase(),
          original: orig.substr(0, consumed)
        };
        link = ["link_ref", attrs].concat(children); // We can't check if the reference is known here as it likely wont be
        // found till after. Check it in md tree->hmtl tree conversion.
        // Store the original so that conversion can revert if the ref isn't found.

        return [consumed, link];
      } // [id]
      // Only if id is plain (no formatting.)


      if (children.length == 1 && typeof children[0] == "string") {
        attrs = {
          ref: children[0].toLowerCase(),
          original: orig.substr(0, consumed)
        };
        link = ["link_ref", attrs, children[0]];
        return [consumed, link];
      } // Just consume the "["


      return [1, "["];
    },
    "<": function autoLink(text) {
      var m;

      if ((m = text.match(/^<(?:((https?|ftp|mailto):[^>]+)|(.*?@.*?\.[a-zA-Z]+))>/)) != null) {
        if (m[3]) {
          return [m[0].length, ["link", {
            href: "mailto:" + m[3]
          }, m[3]]];
        } else if (m[2] == "mailto") {
          return [m[0].length, ["link", {
            href: m[1]
          }, m[1].substr("mailto:".length)]];
        } else return [m[0].length, ["link", {
          href: m[1]
        }, m[1]]];
      }

      return [1, "<"];
    },
    "`": function inlineCode(text) {
      // Inline code block. as many backticks as you like to start it
      // Always skip over the opening ticks.
      var m = text.match(/(`+)(([\s\S]*?)\1)/);
      if (m && m[2]) return [m[1].length + m[2].length, ["inlinecode", m[3]]];else {
        // TODO: No matching end code found - warn!
        return [1, "`"];
      }
    },
    "  \n": function lineBreak(text) {
      return [3, ["linebreak"]];
    }
  }; // Meta Helper/generator method for em and strong handling

  function strong_em(tag, md) {
    var state_slot = tag + "_state",
        other_slot = tag == "strong" ? "em_state" : "strong_state";

    function CloseTag(len) {
      this.len_after = len;
      this.name = "close_" + md;
    }

    return function (text, orig_match) {
      if (this[state_slot][0] == md) {
        // Most recent em is of this type
        //D:this.debug("closing", md);
        this[state_slot].shift(); // "Consume" everything to go back to the recrusion in the else-block below

        return [text.length, new CloseTag(text.length - md.length)];
      } else {
        // Store a clone of the em/strong states
        var other = this[other_slot].slice(),
            state = this[state_slot].slice();
        this[state_slot].unshift(md); //D:this.debug_indent += "  ";
        // Recurse

        var res = this.processInline(text.substr(md.length)); //D:this.debug_indent = this.debug_indent.substr(2);

        var last = res[res.length - 1]; //D:this.debug("processInline from", tag + ": ", uneval( res ) );

        var check = this[state_slot].shift();

        if (last instanceof CloseTag) {
          res.pop(); // We matched! Huzzah.

          var consumed = text.length - last.len_after;
          return [consumed, [tag].concat(res)];
        } else {
          // Restore the state of the other kind. We might have mistakenly closed it.
          this[other_slot] = other;
          this[state_slot] = state; // We can't reuse the processed result as it could have wrong parsing contexts in it.

          return [md.length, md];
        }
      }
    }; // End returned function
  }

  Markdown.dialects.Gruber.inline["**"] = strong_em("strong", "**");
  Markdown.dialects.Gruber.inline["__"] = strong_em("strong", "__");
  Markdown.dialects.Gruber.inline["*"] = strong_em("em", "*");
  Markdown.dialects.Gruber.inline["_"] = strong_em("em", "_"); // Build default order from insertion order.

  Markdown.buildBlockOrder = function (d) {
    var ord = [];

    for (var i in d) {
      if (i == "__order__" || i == "__call__") continue;
      ord.push(i);
    }

    d.__order__ = ord;
  }; // Build patterns for inline matcher


  Markdown.buildInlinePatterns = function (d) {
    var patterns = [];

    for (var i in d) {
      // __foo__ is reserved and not a pattern
      if (i.match(/^__.*__$/)) continue;
      var l = i.replace(/([\\.*+?|()\[\]{}])/g, "\\$1").replace(/\n/, "\\n");
      patterns.push(i.length == 1 ? l : "(?:" + l + ")");
    }

    patterns = patterns.join("|");
    d.__patterns__ = patterns; //print("patterns:", uneval( patterns ) );

    var fn = d.__call__;

    d.__call__ = function (text, pattern) {
      if (pattern != undefined) {
        return fn.call(this, text, pattern);
      } else {
        return fn.call(this, text, patterns);
      }
    };
  };

  Markdown.DialectHelpers = {};

  Markdown.DialectHelpers.inline_until_char = function (text, want) {
    var consumed = 0,
        nodes = [];

    while (true) {
      if (text.charAt(consumed) == want) {
        // Found the character we were looking for
        consumed++;
        return [consumed, nodes];
      }

      if (consumed >= text.length) {
        // No closing char found. Abort.
        return null;
      }

      var res = this.dialect.inline.__oneElement__.call(this, text.substr(consumed));

      consumed += res[0]; // Add any returned nodes.

      nodes.push.apply(nodes, res.slice(1));
    }
  }; // Helper function to make sub-classing a dialect easier


  Markdown.subclassDialect = function (d) {
    function Block() {}

    Block.prototype = d.block;

    function Inline() {}

    Inline.prototype = d.inline;
    return {
      block: new Block(),
      inline: new Inline()
    };
  };

  Markdown.buildBlockOrder(Markdown.dialects.Gruber.block);
  Markdown.buildInlinePatterns(Markdown.dialects.Gruber.inline);
  Markdown.dialects.Maruku = Markdown.subclassDialect(Markdown.dialects.Gruber);

  Markdown.dialects.Maruku.processMetaHash = function processMetaHash(meta_string) {
    var meta = split_meta_hash(meta_string),
        attr = {};

    for (var i = 0; i < meta.length; ++i) {
      // id: #foo
      if (/^#/.test(meta[i])) {
        attr.id = meta[i].substring(1);
      } // class: .foo
      else if (/^\./.test(meta[i])) {
          // if class already exists, append the new one
          if (attr["class"]) {
            attr["class"] = attr["class"] + meta[i].replace(/./, " ");
          } else {
            attr["class"] = meta[i].substring(1);
          }
        } // attribute: foo=bar
        else if (/\=/.test(meta[i])) {
            var s = meta[i].split(/\=/);
            attr[s[0]] = s[1];
          }
    }

    return attr;
  };

  function split_meta_hash(meta_string) {
    var meta = meta_string.split(""),
        parts = [""],
        in_quotes = false;

    while (meta.length) {
      var letter = meta.shift();

      switch (letter) {
        case " ":
          // if we're in a quoted section, keep it
          if (in_quotes) {
            parts[parts.length - 1] += letter;
          } // otherwise make a new part
          else {
              parts.push("");
            }

          break;

        case "'":
        case '"':
          // reverse the quotes and move straight on
          in_quotes = !in_quotes;
          break;

        case "\\":
          // shift off the next letter to be used straight away.
          // it was escaped so we'll keep it whatever it is
          letter = meta.shift();

        default:
          parts[parts.length - 1] += letter;
          break;
      }
    }

    return parts;
  }

  Markdown.dialects.Maruku.block.document_meta = function document_meta(block, next) {
    // we're only interested in the first block
    if (block.lineNumber > 1) return undefined; // document_meta blocks consist of one or more lines of `Key: Value\n`

    if (!block.match(/^(?:\w+:.*\n)*\w+:.*$/)) return undefined; // make an attribute node if it doesn't exist

    if (!extract_attr(this.tree)) {
      this.tree.splice(1, 0, {});
    }

    var pairs = block.split(/\n/);

    for (p in pairs) {
      var m = pairs[p].match(/(\w+):\s*(.*)$/),
          key = m[1].toLowerCase(),
          value = m[2];
      this.tree[1][key] = value;
    } // document_meta produces no content!


    return [];
  };

  Markdown.dialects.Maruku.block.block_meta = function block_meta(block, next) {
    // check if the last line of the block is an meta hash
    var m = block.match(/(^|\n) {0,3}\{:\s*((?:\\\}|[^\}])*)\s*\}$/);
    if (!m) return undefined; // process the meta hash

    var attr = this.dialect.processMetaHash(m[2]);
    var hash; // if we matched ^ then we need to apply meta to the previous block

    if (m[1] === "") {
      var node = this.tree[this.tree.length - 1];
      hash = extract_attr(node); // if the node is a string (rather than JsonML), bail

      if (typeof node === "string") return undefined; // create the attribute hash if it doesn't exist

      if (!hash) {
        hash = {};
        node.splice(1, 0, hash);
      } // add the attributes in


      for (a in attr) {
        hash[a] = attr[a];
      } // return nothing so the meta hash is removed


      return [];
    } // pull the meta hash off the block and process what's left


    var b = block.replace(/\n.*$/, ""),
        result = this.processBlock(b, []); // get or make the attributes hash

    hash = extract_attr(result[0]);

    if (!hash) {
      hash = {};
      result[0].splice(1, 0, hash);
    } // attach the attributes to the block


    for (a in attr) {
      hash[a] = attr[a];
    }

    return result;
  };

  Markdown.dialects.Maruku.block.definition_list = function definition_list(block, next) {
    // one or more terms followed by one or more definitions, in a single block
    var tight = /^((?:[^\s:].*\n)+):\s+([\s\S]+)$/,
        list = ["dl"],
        i,
        m; // see if we're dealing with a tight or loose block

    if (m = block.match(tight)) {
      // pull subsequent tight DL blocks out of `next`
      var blocks = [block];

      while (next.length && tight.exec(next[0])) {
        blocks.push(next.shift());
      }

      for (var b = 0; b < blocks.length; ++b) {
        var m = blocks[b].match(tight),
            terms = m[1].replace(/\n$/, "").split(/\n/),
            defns = m[2].split(/\n:\s+/); // print( uneval( m ) );

        for (i = 0; i < terms.length; ++i) {
          list.push(["dt", terms[i]]);
        }

        for (i = 0; i < defns.length; ++i) {
          // run inline processing over the definition
          list.push(["dd"].concat(this.processInline(defns[i].replace(/(\n)\s+/, "$1"))));
        }
      }
    } else {
      return undefined;
    }

    return [list];
  }; // splits on unescaped instances of @ch. If @ch is not a character the result
  // can be unpredictable


  Markdown.dialects.Maruku.block.table = function table(block, next) {
    var _split_on_unescaped = function (s, ch) {
      ch = ch || '\\s';

      if (ch.match(/^[\\|\[\]{}?*.+^$]$/)) {
        ch = '\\' + ch;
      }

      var res = [],
          r = new RegExp('^((?:\\\\.|[^\\\\' + ch + '])*)' + ch + '(.*)'),
          m;

      while (m = s.match(r)) {
        res.push(m[1]);
        s = m[2];
      }

      res.push(s);
      return res;
    };

    var leading_pipe = /^ {0,3}\|(.+)\n {0,3}\|\s*([\-:]+[\-| :]*)\n((?:\s*\|.*(?:\n|$))*)(?=\n|$)/,
        // find at least an unescaped pipe in each line
    no_leading_pipe = /^ {0,3}(\S(?:\\.|[^\\|])*\|.*)\n {0,3}([\-:]+\s*\|[\-| :]*)\n((?:(?:\\.|[^\\|])*\|.*(?:\n|$))*)(?=\n|$)/,
        i,
        m;

    if (m = block.match(leading_pipe)) {
      // remove leading pipes in contents
      // (header and horizontal rule already have the leading pipe left out)
      m[3] = m[3].replace(/^\s*\|/gm, '');
    } else if (!(m = block.match(no_leading_pipe))) {
      return undefined;
    }

    var table = ["table", ["thead", ["tr"]], ["tbody"]]; // remove trailing pipes, then split on pipes
    // (no escaped pipes are allowed in horizontal rule)

    m[2] = m[2].replace(/\|\s*$/, '').split('|'); // process alignment

    var html_attrs = [];
    forEach(m[2], function (s) {
      if (s.match(/^\s*-+:\s*$/)) html_attrs.push({
        align: "right"
      });else if (s.match(/^\s*:-+\s*$/)) html_attrs.push({
        align: "left"
      });else if (s.match(/^\s*:-+:\s*$/)) html_attrs.push({
        align: "center"
      });else html_attrs.push({});
    }); // now for the header, avoid escaped pipes

    m[1] = _split_on_unescaped(m[1].replace(/\|\s*$/, ''), '|');

    for (i = 0; i < m[1].length; i++) {
      table[1][1].push(['th', html_attrs[i] || {}].concat(this.processInline(m[1][i].trim())));
    } // now for body contents


    forEach(m[3].replace(/\|\s*$/mg, '').split('\n'), function (row) {
      var html_row = ['tr'];
      row = _split_on_unescaped(row, '|');

      for (i = 0; i < row.length; i++) {
        html_row.push(['td', html_attrs[i] || {}].concat(this.processInline(row[i].trim())));
      }

      table[2].push(html_row);
    }, this);
    return [table];
  };

  Markdown.dialects.Maruku.inline["{:"] = function inline_meta(text, matches, out) {
    if (!out.length) {
      return [2, "{:"];
    } // get the preceeding element


    var before = out[out.length - 1];

    if (typeof before === "string") {
      return [2, "{:"];
    } // match a meta hash


    var m = text.match(/^\{:\s*((?:\\\}|[^\}])*)\s*\}/); // no match, false alarm

    if (!m) {
      return [2, "{:"];
    } // attach the attributes to the preceeding element


    var meta = this.dialect.processMetaHash(m[1]),
        attr = extract_attr(before);

    if (!attr) {
      attr = {};
      before.splice(1, 0, attr);
    }

    for (var k in meta) {
      attr[k] = meta[k];
    } // cut out the string and replace it with nothing


    return [m[0].length, ""];
  };

  Markdown.dialects.Maruku.inline.__escape__ = /^\\[\\`\*_{}\[\]()#\+.!\-|:]/;
  Markdown.buildBlockOrder(Markdown.dialects.Maruku.block);
  Markdown.buildInlinePatterns(Markdown.dialects.Maruku.inline);

  var isArray = Array.isArray || function (obj) {
    return Object.prototype.toString.call(obj) == "[object Array]";
  };

  var forEach; // Don't mess with Array.prototype. Its not friendly

  if (Array.prototype.forEach) {
    forEach = function (arr, cb, thisp) {
      return arr.forEach(cb, thisp);
    };
  } else {
    forEach = function (arr, cb, thisp) {
      for (var i = 0; i < arr.length; i++) {
        cb.call(thisp || arr, arr[i], i, arr);
      }
    };
  }

  var isEmpty = function (obj) {
    for (var key in obj) {
      if (hasOwnProperty.call(obj, key)) {
        return false;
      }
    }

    return true;
  };

  function extract_attr(jsonml) {
    return isArray(jsonml) && jsonml.length > 1 && typeof jsonml[1] === "object" && !isArray(jsonml[1]) ? jsonml[1] : undefined;
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


  expose.renderJsonML = function (jsonml, options) {
    options = options || {}; // include the root element in the rendered output?

    options.root = options.root || false;
    var content = [];

    if (options.root) {
      content.push(render_tree(jsonml));
    } else {
      jsonml.shift(); // get rid of the tag

      if (jsonml.length && typeof jsonml[0] === "object" && !(jsonml[0] instanceof Array)) {
        jsonml.shift(); // get rid of the attributes
      }

      while (jsonml.length) {
        content.push(render_tree(jsonml.shift()));
      }
    }

    return content.join("\n\n");
  };

  function escapeHTML(text) {
    return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  function render_tree(jsonml) {
    // basic case
    if (typeof jsonml === "string") {
      return escapeHTML(jsonml);
    }

    var tag = jsonml.shift(),
        attributes = {},
        content = [];

    if (jsonml.length && typeof jsonml[0] === "object" && !(jsonml[0] instanceof Array)) {
      attributes = jsonml.shift();
    }

    while (jsonml.length) {
      content.push(render_tree(jsonml.shift()));
    }

    var tag_attrs = "";

    for (var a in attributes) {
      tag_attrs += " " + a + '="' + escapeHTML(attributes[a]) + '"';
    } // be careful about adding whitespace here for inline elements


    if (tag == "img" || tag == "br" || tag == "hr") {
      return "<" + tag + tag_attrs + "/>";
    } else {
      return "<" + tag + tag_attrs + ">" + content.join("") + "</" + tag + ">";
    }
  }

  function convert_tree_to_html(tree, references, options) {
    var i;
    options = options || {}; // shallow clone

    var jsonml = tree.slice(0);

    if (typeof options.preprocessTreeNode === "function") {
      jsonml = options.preprocessTreeNode(jsonml, references);
    } // Clone attributes if they exist


    var attrs = extract_attr(jsonml);

    if (attrs) {
      jsonml[1] = {};

      for (i in attrs) {
        jsonml[1][i] = attrs[i];
      }

      attrs = jsonml[1];
    } // basic case


    if (typeof jsonml === "string") {
      return jsonml;
    } // convert this node


    switch (jsonml[0]) {
      case "header":
        jsonml[0] = "h" + jsonml[1].level;
        delete jsonml[1].level;
        break;

      case "bulletlist":
        jsonml[0] = "ul";
        break;

      case "numberlist":
        jsonml[0] = "ol";
        break;

      case "listitem":
        jsonml[0] = "li";
        break;

      case "para":
        jsonml[0] = "p";
        break;

      case "markdown":
        jsonml[0] = "html";
        if (attrs) delete attrs.references;
        break;

      case "code_block":
        jsonml[0] = "pre";
        i = attrs ? 2 : 1;
        var code = ["code"];
        code.push.apply(code, jsonml.splice(i, jsonml.length - i));
        jsonml[i] = code;
        break;

      case "inlinecode":
        jsonml[0] = "code";
        break;

      case "img":
        jsonml[1].src = jsonml[1].href;
        delete jsonml[1].href;
        break;

      case "linebreak":
        jsonml[0] = "br";
        break;

      case "link":
        jsonml[0] = "a";
        break;

      case "link_ref":
        jsonml[0] = "a"; // grab this ref and clean up the attribute node

        var ref = references[attrs.ref]; // if the reference exists, make the link

        if (ref) {
          delete attrs.ref; // add in the href and title, if present

          attrs.href = ref.href;

          if (ref.title) {
            attrs.title = ref.title;
          } // get rid of the unneeded original text


          delete attrs.original;
        } // the reference doesn't exist, so revert to plain text
        else {
            return attrs.original;
          }

        break;

      case "img_ref":
        jsonml[0] = "img"; // grab this ref and clean up the attribute node

        var ref = references[attrs.ref]; // if the reference exists, make the link

        if (ref) {
          delete attrs.ref; // add in the href and title, if present

          attrs.src = ref.href;

          if (ref.title) {
            attrs.title = ref.title;
          } // get rid of the unneeded original text


          delete attrs.original;
        } // the reference doesn't exist, so revert to plain text
        else {
            return attrs.original;
          }

        break;
    } // convert all the children


    i = 1; // deal with the attribute node, if it exists

    if (attrs) {
      // if there are keys, skip over it
      for (var key in jsonml[1]) {
        i = 2;
        break;
      } // if there aren't, remove it


      if (i === 1) {
        jsonml.splice(i, 1);
      }
    }

    for (; i < jsonml.length; ++i) {
      jsonml[i] = convert_tree_to_html(jsonml[i], references, options);
    }

    return jsonml;
  } // merges adjacent text nodes into a single node


  function merge_text_nodes(jsonml) {
    // skip the tag name and attribute hash
    var i = extract_attr(jsonml) ? 2 : 1;

    while (i < jsonml.length) {
      // if it's a string check the next item too
      if (typeof jsonml[i] === "string") {
        if (i + 1 < jsonml.length && typeof jsonml[i + 1] === "string") {
          // merge the second string into the first and remove it
          jsonml[i] += jsonml.splice(i + 1, 1)[0];
        } else {
          ++i;
        }
      } // if it's not a string recurse
      else {
          merge_text_nodes(jsonml[i]);
          ++i;
        }
    }
  }
})(function () {
  if (false) {} else {
    return exports;
  }
}());

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
var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors || function getOwnPropertyDescriptors(obj) {
  var keys = Object.keys(obj);
  var descriptors = {};

  for (var i = 0; i < keys.length; i++) {
    descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
  }

  return descriptors;
};

var formatRegExp = /%[sdj%]/g;

exports.format = function (f) {
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
  var str = String(f).replace(formatRegExp, function (x) {
    if (x === '%%') return '%';
    if (i >= len) return x;

    switch (x) {
      case '%s':
        return String(args[i++]);

      case '%d':
        return Number(args[i++]);

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
}; // Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.


exports.deprecate = function (fn, msg) {
  if (typeof process !== 'undefined' && process.noDeprecation === true) {
    return fn;
  } // Allow for deprecating things in the process of starting up.


  if (typeof process === 'undefined') {
    return function () {
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

exports.debuglog = function (set) {
  if (isUndefined(debugEnviron)) debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();

  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;

      debugs[set] = function () {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function () {};
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
  }; // legacy...

  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];

  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  } // set default options


  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}

exports.inspect = inspect; // http://en.wikipedia.org/wiki/ANSI_escape_code#graphics

inspect.colors = {
  'bold': [1, 22],
  'italic': [3, 23],
  'underline': [4, 24],
  'inverse': [7, 27],
  'white': [37, 39],
  'grey': [90, 39],
  'black': [30, 39],
  'blue': [34, 39],
  'cyan': [36, 39],
  'green': [32, 39],
  'magenta': [35, 39],
  'red': [31, 39],
  'yellow': [33, 39]
}; // Don't use 'blue' not visible on cmd.exe

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
    return '\u001b[' + inspect.colors[style][0] + 'm' + str + '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}

function stylizeNoColor(str, styleType) {
  return str;
}

function arrayToHash(array) {
  var hash = {};
  array.forEach(function (val, idx) {
    hash[val] = true;
  });
  return hash;
}

function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect && value && isFunction(value.inspect) && // Filter out the util module, it's inspect function is special
  value.inspect !== exports.inspect && // Also filter out any prototype objects using the circular check.
  !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);

    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }

    return ret;
  } // Primitive types cannot have properties


  var primitive = formatPrimitive(ctx, value);

  if (primitive) {
    return primitive;
  } // Look up the keys of the object.


  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  } // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx


  if (isError(value) && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  } // Some type of object without properties can be shortcutted.


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

  var base = '',
      array = false,
      braces = ['{', '}']; // Make Array say that they are Array

  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  } // Make functions say that they are functions


  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  } // Make RegExps say that they are RegExps


  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  } // Make dates with properties first say the date


  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  } // Make error with message first say the error


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
    output = keys.map(function (key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();
  return reduceToSingleString(output, base, braces);
}

function formatPrimitive(ctx, value) {
  if (isUndefined(value)) return ctx.stylize('undefined', 'undefined');

  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '').replace(/'/g, "\\'").replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }

  if (isNumber(value)) return ctx.stylize('' + value, 'number');
  if (isBoolean(value)) return ctx.stylize('' + value, 'boolean'); // For some reason typeof null is "object", so special case here.

  if (isNull(value)) return ctx.stylize('null', 'null');
}

function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}

function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];

  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), true));
    } else {
      output.push('');
    }
  }

  keys.forEach(function (key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
    }
  });
  return output;
}

function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || {
    value: value[key]
  };

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
          str = str.split('\n').map(function (line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function (line) {
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
      name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}

function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function (prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] + (base === '' ? '' : base + '\n ') + ' ' + output.join(',\n  ') + ' ' + braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
} // NOTE: These type checking functions intentionally don't use `instanceof`
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
  return isObject(e) && (objectToString(e) === '[object Error]' || e instanceof Error);
}

exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}

exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null || typeof arg === 'boolean' || typeof arg === 'number' || typeof arg === 'string' || typeof arg === 'symbol' || // ES6 symbol
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

var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']; // 26 Feb 16:19:34

function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()), pad(d.getMinutes()), pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
} // log is just a thin wrapper to console.log that prepends a timestamp


exports.log = function () {
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

exports._extend = function (origin, add) {
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
  if (typeof original !== 'function') throw new TypeError('The "original" argument must be of type Function');

  if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
    var fn = original[kCustomPromisifiedSymbol];

    if (typeof fn !== 'function') {
      throw new TypeError('The "util.promisify.custom" argument must be of type Function');
    }

    Object.defineProperty(fn, kCustomPromisifiedSymbol, {
      value: fn,
      enumerable: false,
      writable: false,
      configurable: true
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
    value: fn,
    enumerable: false,
    writable: false,
    configurable: true
  });
  return Object.defineProperties(fn, getOwnPropertyDescriptors(original));
};

exports.promisify.custom = kCustomPromisifiedSymbol;

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
  } // We DO NOT return the promise as it gives the user a false sense that
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

    var cb = function () {
      return maybeCb.apply(self, arguments);
    }; // In true node style we process the callback on `nextTick` with all the
    // implications (stack, `uncaughtException`, `async_hooks`)


    original.apply(this, args).then(function (ret) {
      process.nextTick(cb, null, ret);
    }, function (rej) {
      process.nextTick(callbackifyOnRejected, rej, cb);
    });
  }

  Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
  Object.defineProperties(callbackified, getOwnPropertyDescriptors(original));
  return callbackified;
}

exports.callbackify = callbackify;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)))

/***/ }),
/* 7 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
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
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
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

  while (len) {
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
}; // v8 likes predictible objects


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

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object' && typeof arg.copy === 'function' && typeof arg.fill === 'function' && typeof arg.readUInt8 === 'function';
};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor;
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
    ctor.super_ = superCtor;

    var TempCtor = function () {};

    TempCtor.prototype = superCtor.prototype;
    ctor.prototype = new TempCtor();
    ctor.prototype.constructor = ctor;
  };
}

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vdGVzdC9jYW5hcnkudGVzdC5qcyIsIndlYnBhY2s6Ly8vLi90ZXN0L21kUHJldmlld2VyLnRlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21kUHJldmlld2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tYXJrZG93bi9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21hcmtkb3duL2xpYi9tYXJrZG93bi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXRpbC91dGlsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V0aWwvc3VwcG9ydC9pc0J1ZmZlckJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V0aWwvbm9kZV9tb2R1bGVzL2luaGVyaXRzL2luaGVyaXRzX2Jyb3dzZXIuanMiXSwibmFtZXMiOlsiZGVzY3JpYmUiLCJpdCIsImV4cGVjdCIsInRvQmUiLCJtZFByZXZpZXdlciIsInRvQmVEZWZpbmVkIiwibyIsImZvbyIsImJhciIsInkiLCJ0b0VxdWFsIiwiYXR0YWNoUHJldmlld2VyIiwiJGRvY3VtZW50Iiwic291cmNlSWQiLCJwcmV2aWV3ZXJJZCIsImV2ZW50IiwidGV4dCIsImdldEVsZW1lbnRCeUlkIiwidmFsdWUiLCJwcmV2aWV3IiwiaW5uZXJIVE1MIiwibWFya2Rvd24iLCJ0b0hUTUwiLCJwcmV2ZW50RGVmYXVsdCIsImV4cG9ydHMiLCJyZXF1aXJlIiwicGFyc2UiLCJleHBvc2UiLCJNYXJrZG93biIsImRpYWxlY3QiLCJkaWFsZWN0cyIsIkdydWJlciIsIkVycm9yIiwiU3RyaW5nIiwiZW1fc3RhdGUiLCJzdHJvbmdfc3RhdGUiLCJkZWJ1Z19pbmRlbnQiLCJzb3VyY2UiLCJtZCIsInRvVHJlZSIsIm9wdGlvbnMiLCJpbnB1dCIsInRvSFRNTFRyZWUiLCJyZW5kZXJKc29uTUwiLCJhdHRycyIsImV4dHJhY3RfYXR0ciIsInJlZnMiLCJyZWZlcmVuY2VzIiwiaHRtbCIsImNvbnZlcnRfdHJlZV90b19odG1sIiwibWVyZ2VfdGV4dF9ub2RlcyIsIm1rX2Jsb2NrX3RvU291cmNlIiwidW5ldmFsIiwidG9TdHJpbmciLCJ0cmFpbGluZyIsImxpbmVOdW1iZXIiLCJta19ibG9ja19pbnNwZWN0IiwidXRpbCIsImluc3BlY3QiLCJta19ibG9jayIsImJsb2NrIiwidHJhaWwiLCJsaW5lIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwicyIsInRvU291cmNlIiwidW5kZWZpbmVkIiwiY291bnRfbGluZXMiLCJzdHIiLCJuIiwiaSIsImluZGV4T2YiLCJwcm90b3R5cGUiLCJzcGxpdF9ibG9ja3MiLCJzcGxpdEJsb2NrcyIsInN0YXJ0TGluZSIsInJlcGxhY2UiLCJyZSIsImJsb2NrcyIsIm0iLCJsaW5lX25vIiwiZXhlYyIsImxhc3RJbmRleCIsInB1c2giLCJwcm9jZXNzQmxvY2siLCJuZXh0IiwiY2JzIiwib3JkIiwiX19vcmRlcl9fIiwiX19jYWxsX18iLCJjYWxsIiwicmVzIiwiaXNBcnJheSIsImRlYnVnIiwicHJvY2Vzc0lubGluZSIsImlubGluZSIsImN1c3RvbV9yb290IiwiQXJyYXkiLCJvbGRfdHJlZSIsInRyZWUiLCJiIiwic2hpZnQiLCJhcHBseSIsImFyZ3MiLCJzbGljZSIsInVuc2hpZnQiLCJwcmludCIsImNvbnNvbGUiLCJsb2ciLCJsb29wX3JlX292ZXJfYmxvY2siLCJjYiIsInZhbHVlT2YiLCJzdWJzdHIiLCJhdHhIZWFkZXIiLCJtYXRjaCIsImhlYWRlciIsImxldmVsIiwic2V0ZXh0SGVhZGVyIiwiY29kZSIsInJldCIsImxpbmVzIiwiYmxvY2tfc2VhcmNoIiwic3Vic3RyaW5nIiwiam9pbiIsImhvcml6UnVsZSIsImpzb25tbCIsImxpc3RzIiwiYW55X2xpc3QiLCJidWxsZXRfbGlzdCIsIm51bWJlcl9saXN0IiwiaXNfbGlzdF9yZSIsIlJlZ0V4cCIsImluZGVudF9yZSIsInJlZ2V4X2Zvcl9kZXB0aCIsImRlcHRoIiwiZXhwYW5kX3RhYiIsImFkZCIsImxpIiwibG9vc2UiLCJubCIsImNvbmNhdCIsImFkZF90byIsIndoYXQiLCJpc19zdHIiLCJnZXRfY29udGFpbmVkX2Jsb2NrcyIsIngiLCJwYXJhZ3JhcGhpZnkiLCJzdGFjayIsImxpc3QiLCJsYXN0X2xpIiwic3BsaWNlIiwic3VibGlzdCIsInBvcCIsIm1ha2VfbGlzdCIsImluZGVudCIsImxvb3NlX3NlYXJjaCIsInNwbGl0IiwibGlfYWNjdW11bGF0ZSIsInRpZ2h0X3NlYXJjaCIsImwiLCJsaW5lX3JlIiwid2FudGVkX2RlcHRoIiwiTWF0aCIsImZsb29yIiwiZm91bmQiLCJjb250YWluZWQiLCJmb3JFYWNoIiwibmV4dF9ibG9jayIsImhyIiwiYmxvY2txdW90ZSIsInByZXYiLCJhYnV0dGluZyIsInByb2Nlc3NlZEJsb2NrIiwiYXR0ciIsImlzRW1wdHkiLCJyZWZlcmVuY2VEZWZuIiwicmVmIiwidG9Mb3dlckNhc2UiLCJocmVmIiwidGl0bGUiLCJwYXJhIiwiX19vbmVFbGVtZW50X18iLCJvbmVFbGVtZW50IiwicGF0dGVybnNfb3JfcmUiLCJwcmV2aW91c19ub2RlcyIsIl9fcGF0dGVybnNfXyIsImluZGV4IiwicGF0dGVybnMiLCJvdXQiLCJfX2VzY2FwZV9fIiwiZXNjYXBlZCIsImNoYXJBdCIsImltYWdlIiwiYWx0Iiwib3JpZ2luYWwiLCJsaW5rIiwib3JpZyIsIkRpYWxlY3RIZWxwZXJzIiwiaW5saW5lX3VudGlsX2NoYXIiLCJjb25zdW1lZCIsImNoaWxkcmVuIiwidXJsIiwib3Blbl9wYXJlbnMiLCJsZW4iLCJhdXRvTGluayIsImlubGluZUNvZGUiLCJsaW5lQnJlYWsiLCJzdHJvbmdfZW0iLCJ0YWciLCJzdGF0ZV9zbG90Iiwib3RoZXJfc2xvdCIsIkNsb3NlVGFnIiwibGVuX2FmdGVyIiwibmFtZSIsIm9yaWdfbWF0Y2giLCJvdGhlciIsInN0YXRlIiwibGFzdCIsImNoZWNrIiwiYnVpbGRCbG9ja09yZGVyIiwiZCIsImJ1aWxkSW5saW5lUGF0dGVybnMiLCJmbiIsInBhdHRlcm4iLCJ3YW50Iiwibm9kZXMiLCJzdWJjbGFzc0RpYWxlY3QiLCJCbG9jayIsIklubGluZSIsIk1hcnVrdSIsInByb2Nlc3NNZXRhSGFzaCIsIm1ldGFfc3RyaW5nIiwibWV0YSIsInNwbGl0X21ldGFfaGFzaCIsInRlc3QiLCJpZCIsInBhcnRzIiwiaW5fcXVvdGVzIiwibGV0dGVyIiwiZG9jdW1lbnRfbWV0YSIsInBhaXJzIiwicCIsImtleSIsImJsb2NrX21ldGEiLCJoYXNoIiwibm9kZSIsImEiLCJyZXN1bHQiLCJkZWZpbml0aW9uX2xpc3QiLCJ0aWdodCIsInRlcm1zIiwiZGVmbnMiLCJ0YWJsZSIsIl9zcGxpdF9vbl91bmVzY2FwZWQiLCJjaCIsInIiLCJsZWFkaW5nX3BpcGUiLCJub19sZWFkaW5nX3BpcGUiLCJodG1sX2F0dHJzIiwiYWxpZ24iLCJ0cmltIiwicm93IiwiaHRtbF9yb3ciLCJpbmxpbmVfbWV0YSIsIm1hdGNoZXMiLCJiZWZvcmUiLCJrIiwib2JqIiwiT2JqZWN0IiwiYXJyIiwidGhpc3AiLCJoYXNPd25Qcm9wZXJ0eSIsInJvb3QiLCJjb250ZW50IiwicmVuZGVyX3RyZWUiLCJlc2NhcGVIVE1MIiwiYXR0cmlidXRlcyIsInRhZ19hdHRycyIsInByZXByb2Nlc3NUcmVlTm9kZSIsInNyYyIsImdldE93blByb3BlcnR5RGVzY3JpcHRvcnMiLCJrZXlzIiwiZGVzY3JpcHRvcnMiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJmb3JtYXRSZWdFeHAiLCJmb3JtYXQiLCJmIiwiaXNTdHJpbmciLCJvYmplY3RzIiwiTnVtYmVyIiwiSlNPTiIsInN0cmluZ2lmeSIsIl8iLCJpc051bGwiLCJpc09iamVjdCIsImRlcHJlY2F0ZSIsIm1zZyIsInByb2Nlc3MiLCJub0RlcHJlY2F0aW9uIiwid2FybmVkIiwiZGVwcmVjYXRlZCIsInRocm93RGVwcmVjYXRpb24iLCJ0cmFjZURlcHJlY2F0aW9uIiwidHJhY2UiLCJlcnJvciIsImRlYnVncyIsImRlYnVnRW52aXJvbiIsImRlYnVnbG9nIiwic2V0IiwiaXNVbmRlZmluZWQiLCJlbnYiLCJOT0RFX0RFQlVHIiwidG9VcHBlckNhc2UiLCJwaWQiLCJvcHRzIiwiY3R4Iiwic2VlbiIsInN0eWxpemUiLCJzdHlsaXplTm9Db2xvciIsImNvbG9ycyIsImlzQm9vbGVhbiIsInNob3dIaWRkZW4iLCJfZXh0ZW5kIiwiY3VzdG9tSW5zcGVjdCIsInN0eWxpemVXaXRoQ29sb3IiLCJmb3JtYXRWYWx1ZSIsInN0eWxlcyIsInN0eWxlVHlwZSIsInN0eWxlIiwiYXJyYXlUb0hhc2giLCJhcnJheSIsInZhbCIsImlkeCIsInJlY3Vyc2VUaW1lcyIsImlzRnVuY3Rpb24iLCJjb25zdHJ1Y3RvciIsInByaW1pdGl2ZSIsImZvcm1hdFByaW1pdGl2ZSIsInZpc2libGVLZXlzIiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsImlzRXJyb3IiLCJmb3JtYXRFcnJvciIsImlzUmVnRXhwIiwiaXNEYXRlIiwiRGF0ZSIsImJhc2UiLCJicmFjZXMiLCJ0b1VUQ1N0cmluZyIsIm91dHB1dCIsImZvcm1hdEFycmF5IiwibWFwIiwiZm9ybWF0UHJvcGVydHkiLCJyZWR1Y2VUb1NpbmdsZVN0cmluZyIsInNpbXBsZSIsImlzTnVtYmVyIiwiZGVzYyIsImdldCIsIm51bUxpbmVzRXN0IiwicmVkdWNlIiwiY3VyIiwiYXIiLCJhcmciLCJpc051bGxPclVuZGVmaW5lZCIsImlzU3ltYm9sIiwib2JqZWN0VG9TdHJpbmciLCJlIiwiaXNQcmltaXRpdmUiLCJpc0J1ZmZlciIsInBhZCIsIm1vbnRocyIsInRpbWVzdGFtcCIsInRpbWUiLCJnZXRIb3VycyIsImdldE1pbnV0ZXMiLCJnZXRTZWNvbmRzIiwiZ2V0RGF0ZSIsImdldE1vbnRoIiwiaW5oZXJpdHMiLCJvcmlnaW4iLCJwcm9wIiwia0N1c3RvbVByb21pc2lmaWVkU3ltYm9sIiwiU3ltYm9sIiwicHJvbWlzaWZ5IiwiVHlwZUVycm9yIiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwid3JpdGFibGUiLCJjb25maWd1cmFibGUiLCJwcm9taXNlUmVzb2x2ZSIsInByb21pc2VSZWplY3QiLCJwcm9taXNlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJlcnIiLCJzZXRQcm90b3R5cGVPZiIsImdldFByb3RvdHlwZU9mIiwiZGVmaW5lUHJvcGVydGllcyIsImN1c3RvbSIsImNhbGxiYWNraWZ5T25SZWplY3RlZCIsInJlYXNvbiIsIm5ld1JlYXNvbiIsImNhbGxiYWNraWZ5IiwiY2FsbGJhY2tpZmllZCIsIm1heWJlQ2IiLCJzZWxmIiwidGhlbiIsIm5leHRUaWNrIiwicmVqIiwibW9kdWxlIiwiY2FjaGVkU2V0VGltZW91dCIsImNhY2hlZENsZWFyVGltZW91dCIsImRlZmF1bHRTZXRUaW1vdXQiLCJkZWZhdWx0Q2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsInJ1blRpbWVvdXQiLCJmdW4iLCJydW5DbGVhclRpbWVvdXQiLCJtYXJrZXIiLCJxdWV1ZSIsImRyYWluaW5nIiwiY3VycmVudFF1ZXVlIiwicXVldWVJbmRleCIsImNsZWFuVXBOZXh0VGljayIsImRyYWluUXVldWUiLCJ0aW1lb3V0IiwicnVuIiwiSXRlbSIsImJyb3dzZXIiLCJhcmd2IiwidmVyc2lvbiIsInZlcnNpb25zIiwibm9vcCIsIm9uIiwiYWRkTGlzdGVuZXIiLCJvbmNlIiwib2ZmIiwicmVtb3ZlTGlzdGVuZXIiLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJlbWl0IiwicHJlcGVuZExpc3RlbmVyIiwicHJlcGVuZE9uY2VMaXN0ZW5lciIsImxpc3RlbmVycyIsImJpbmRpbmciLCJjd2QiLCJjaGRpciIsImRpciIsInVtYXNrIiwiY29weSIsImZpbGwiLCJyZWFkVUludDgiLCJjcmVhdGUiLCJjdG9yIiwic3VwZXJDdG9yIiwi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U0FBU2tXLFFBQVQsQ0FBa0I0RSxJQUFsQixFQUF3QkMsU0FBeEIsRUFBbUM7QUFDbERELFFBQUksQ0FBQ0UsTUFBTCxHQUFjRCxTQUFkOztBQUNBLFFBQUlFLFFBQVEsR0FBRyxZQUFZLENBQUUsQ0FBN0I7O0FBQ0FBLFlBQVEsQ0FBQ2hZLFNBQVQsR0FBcUI4WCxTQUFTLENBQUM5WCxTQUEvQjtBQUNBNlgsUUFBSSxDQUFDN1gsU0FBTCxHQUFpQixJQUFJZ1ksUUFBSixFQUFqQjtBQUNBSCxRQUFJLENBQUM3WCxTQUFMLENBQWV1USxXQUFmLEdBQTZCc0gsSUFBN0I7QUFDRCxHQU5EO0FBT0QsQyIsImZpbGUiOiJidW5kbGUudGVzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImRlc2NyaWJlKFwiY2FuYXJ5XCIsIGZ1bmN0aW9uICgpIHtcclxuICBpdChcImNhbiBydW4gYSB0ZXN0XCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIGV4cGVjdCh0cnVlKS50b0JlKHRydWUpO1xyXG4gIH0pO1xyXG59KTtcclxuIiwiaW1wb3J0IG1kUHJldmlld2VyIGZyb20gXCIuLi9zcmMvbWRQcmV2aWV3ZXJcIjtcclxuXHJcbmRlc2NyaWJlKFwibWFya2Rvd25QcmV2aWV3ZXJcIiwgKCkgPT4ge1xyXG4gIGl0KFwic2hvdWxkIGV4aXN0XCIsICgpID0+IHtcclxuICAgIGV4cGVjdChtZFByZXZpZXdlcikudG9CZURlZmluZWQoKTtcclxuICB9KTtcclxuICBpdChcInNob3VsZCBhbGxvdyBkZWVwIHJlZmVyZW5jZXNcIiwgKCkgPT4ge1xyXG4gICAgY29uc3QgbyA9IHtcclxuICAgICAgZm9vOiB7XHJcbiAgICAgICAgYmFyOiBcImJsYWhcIixcclxuICAgICAgfSxcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgeSA9IHtcclxuICAgICAgLi4ubyxcclxuICAgIH1cclxuXHJcbiAgICBleHBlY3Qobz8uZm9vPy5iYXIpLnRvQmUoXCJibGFoXCIpO1xyXG4gICAgZXhwZWN0KHkpLnRvRXF1YWwobylcclxuICB9KTtcclxufSk7XHJcbiIsImltcG9ydCB7IG1hcmtkb3duIH0gZnJvbSBcIm1hcmtkb3duXCI7XHJcblxyXG52YXIgYXR0YWNoUHJldmlld2VyID0gKCRkb2N1bWVudCwgc291cmNlSWQsIHByZXZpZXdlcklkKSA9PiB7XHJcbiAgcmV0dXJuIChldmVudCkgPT4ge1xyXG4gICAgY29uc3QgdGV4dCA9ICRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzb3VyY2VJZCkudmFsdWUsXHJcbiAgICAgICAgICBwcmV2aWV3ID0gJGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHByZXZpZXdlcklkKTtcclxuXHJcbiAgICBwcmV2aWV3LmlubmVySFRNTCA9IG1hcmtkb3duLnRvSFRNTCh0ZXh0KTtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBhdHRhY2hQcmV2aWV3ZXIsXHJcbn07XHJcbiIsIi8vIHN1cGVyIHNpbXBsZSBtb2R1bGUgZm9yIHRoZSBtb3N0IGNvbW1vbiBub2RlanMgdXNlIGNhc2UuXG5leHBvcnRzLm1hcmtkb3duID0gcmVxdWlyZShcIi4vbWFya2Rvd25cIik7XG5leHBvcnRzLnBhcnNlID0gZXhwb3J0cy5tYXJrZG93bi50b0hUTUw7XG4iLCIvLyBSZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZVxuLy8gQ29weXJpZ2h0IChjKSAyMDA5LTIwMTAgRG9taW5pYyBCYWdnb3R0XG4vLyBDb3B5cmlnaHQgKGMpIDIwMDktMjAxMCBBc2ggQmVybGluXG4vLyBDb3B5cmlnaHQgKGMpIDIwMTEgQ2hyaXN0b3BoIERvcm4gPGNocmlzdG9waEBjaHJpc3RvcGhkb3JuLmNvbT4gKGh0dHA6Ly93d3cuY2hyaXN0b3BoZG9ybi5jb20pXG5cbi8qanNoaW50IGJyb3dzZXI6dHJ1ZSwgZGV2ZWw6dHJ1ZSAqL1xuXG4oZnVuY3Rpb24oIGV4cG9zZSApIHtcblxuLyoqXG4gKiAgY2xhc3MgTWFya2Rvd25cbiAqXG4gKiAgTWFya2Rvd24gcHJvY2Vzc2luZyBpbiBKYXZhc2NyaXB0IGRvbmUgcmlnaHQuIFdlIGhhdmUgdmVyeSBwYXJ0aWN1bGFyIHZpZXdzXG4gKiAgb24gd2hhdCBjb25zdGl0dXRlcyAncmlnaHQnIHdoaWNoIGluY2x1ZGU6XG4gKlxuICogIC0gcHJvZHVjZXMgd2VsbC1mb3JtZWQgSFRNTCAodGhpcyBtZWFucyB0aGF0IGVtIGFuZCBzdHJvbmcgbmVzdGluZyBpc1xuICogICAgaW1wb3J0YW50KVxuICpcbiAqICAtIGhhcyBhbiBpbnRlcm1lZGlhdGUgcmVwcmVzZW50YXRpb24gdG8gYWxsb3cgcHJvY2Vzc2luZyBvZiBwYXJzZWQgZGF0YSAoV2VcbiAqICAgIGluIGZhY3QgaGF2ZSB0d28sIGJvdGggYXMgW0pzb25NTF06IGEgbWFya2Rvd24gdHJlZSBhbmQgYW4gSFRNTCB0cmVlKS5cbiAqXG4gKiAgLSBpcyBlYXNpbHkgZXh0ZW5zaWJsZSB0byBhZGQgbmV3IGRpYWxlY3RzIHdpdGhvdXQgaGF2aW5nIHRvIHJld3JpdGUgdGhlXG4gKiAgICBlbnRpcmUgcGFyc2luZyBtZWNoYW5pY3NcbiAqXG4gKiAgLSBoYXMgYSBnb29kIHRlc3Qgc3VpdGVcbiAqXG4gKiAgVGhpcyBpbXBsZW1lbnRhdGlvbiBmdWxmaWxscyBhbGwgb2YgdGhlc2UgKGV4Y2VwdCB0aGF0IHRoZSB0ZXN0IHN1aXRlIGNvdWxkXG4gKiAgZG8gd2l0aCBleHBhbmRpbmcgdG8gYXV0b21hdGljYWxseSBydW4gYWxsIHRoZSBmaXh0dXJlcyBmcm9tIG90aGVyIE1hcmtkb3duXG4gKiAgaW1wbGVtZW50YXRpb25zLilcbiAqXG4gKiAgIyMjIyMgSW50ZXJtZWRpYXRlIFJlcHJlc2VudGF0aW9uXG4gKlxuICogICpUT0RPKiBUYWxrIGFib3V0IHRoaXMgOikgSXRzIEpzb25NTCwgYnV0IGRvY3VtZW50IHRoZSBub2RlIG5hbWVzIHdlIHVzZS5cbiAqXG4gKiAgW0pzb25NTF06IGh0dHA6Ly9qc29ubWwub3JnLyBcIkpTT04gTWFya3VwIExhbmd1YWdlXCJcbiAqKi9cbnZhciBNYXJrZG93biA9IGV4cG9zZS5NYXJrZG93biA9IGZ1bmN0aW9uKGRpYWxlY3QpIHtcbiAgc3dpdGNoICh0eXBlb2YgZGlhbGVjdCkge1xuICAgIGNhc2UgXCJ1bmRlZmluZWRcIjpcbiAgICAgIHRoaXMuZGlhbGVjdCA9IE1hcmtkb3duLmRpYWxlY3RzLkdydWJlcjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJvYmplY3RcIjpcbiAgICAgIHRoaXMuZGlhbGVjdCA9IGRpYWxlY3Q7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgaWYgKCBkaWFsZWN0IGluIE1hcmtkb3duLmRpYWxlY3RzICkge1xuICAgICAgICB0aGlzLmRpYWxlY3QgPSBNYXJrZG93bi5kaWFsZWN0c1tkaWFsZWN0XTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmtub3duIE1hcmtkb3duIGRpYWxlY3QgJ1wiICsgU3RyaW5nKGRpYWxlY3QpICsgXCInXCIpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gIH1cbiAgdGhpcy5lbV9zdGF0ZSA9IFtdO1xuICB0aGlzLnN0cm9uZ19zdGF0ZSA9IFtdO1xuICB0aGlzLmRlYnVnX2luZGVudCA9IFwiXCI7XG59O1xuXG4vKipcbiAqICBwYXJzZSggbWFya2Rvd24sIFtkaWFsZWN0XSApIC0+IEpzb25NTFxuICogIC0gbWFya2Rvd24gKFN0cmluZyk6IG1hcmtkb3duIHN0cmluZyB0byBwYXJzZVxuICogIC0gZGlhbGVjdCAoU3RyaW5nIHwgRGlhbGVjdCk6IHRoZSBkaWFsZWN0IHRvIHVzZSwgZGVmYXVsdHMgdG8gZ3J1YmVyXG4gKlxuICogIFBhcnNlIGBtYXJrZG93bmAgYW5kIHJldHVybiBhIG1hcmtkb3duIGRvY3VtZW50IGFzIGEgTWFya2Rvd24uSnNvbk1MIHRyZWUuXG4gKiovXG5leHBvc2UucGFyc2UgPSBmdW5jdGlvbiggc291cmNlLCBkaWFsZWN0ICkge1xuICAvLyBkaWFsZWN0IHdpbGwgZGVmYXVsdCBpZiB1bmRlZmluZWRcbiAgdmFyIG1kID0gbmV3IE1hcmtkb3duKCBkaWFsZWN0ICk7XG4gIHJldHVybiBtZC50b1RyZWUoIHNvdXJjZSApO1xufTtcblxuLyoqXG4gKiAgdG9IVE1MKCBtYXJrZG93biwgW2RpYWxlY3RdICApIC0+IFN0cmluZ1xuICogIHRvSFRNTCggbWRfdHJlZSApIC0+IFN0cmluZ1xuICogIC0gbWFya2Rvd24gKFN0cmluZyk6IG1hcmtkb3duIHN0cmluZyB0byBwYXJzZVxuICogIC0gbWRfdHJlZSAoTWFya2Rvd24uSnNvbk1MKTogcGFyc2VkIG1hcmtkb3duIHRyZWVcbiAqXG4gKiAgVGFrZSBtYXJrZG93biAoZWl0aGVyIGFzIGEgc3RyaW5nIG9yIGFzIGEgSnNvbk1MIHRyZWUpIGFuZCBydW4gaXQgdGhyb3VnaFxuICogIFtbdG9IVE1MVHJlZV1dIHRoZW4gdHVybiBpdCBpbnRvIGEgd2VsbC1mb3JtYXRlZCBIVE1MIGZyYWdtZW50LlxuICoqL1xuZXhwb3NlLnRvSFRNTCA9IGZ1bmN0aW9uIHRvSFRNTCggc291cmNlICwgZGlhbGVjdCAsIG9wdGlvbnMgKSB7XG4gIHZhciBpbnB1dCA9IGV4cG9zZS50b0hUTUxUcmVlKCBzb3VyY2UgLCBkaWFsZWN0ICwgb3B0aW9ucyApO1xuXG4gIHJldHVybiBleHBvc2UucmVuZGVySnNvbk1MKCBpbnB1dCApO1xufTtcblxuLyoqXG4gKiAgdG9IVE1MVHJlZSggbWFya2Rvd24sIFtkaWFsZWN0XSApIC0+IEpzb25NTFxuICogIHRvSFRNTFRyZWUoIG1kX3RyZWUgKSAtPiBKc29uTUxcbiAqICAtIG1hcmtkb3duIChTdHJpbmcpOiBtYXJrZG93biBzdHJpbmcgdG8gcGFyc2VcbiAqICAtIGRpYWxlY3QgKFN0cmluZyB8IERpYWxlY3QpOiB0aGUgZGlhbGVjdCB0byB1c2UsIGRlZmF1bHRzIHRvIGdydWJlclxuICogIC0gbWRfdHJlZSAoTWFya2Rvd24uSnNvbk1MKTogcGFyc2VkIG1hcmtkb3duIHRyZWVcbiAqXG4gKiAgVHVybiBtYXJrZG93biBpbnRvIEhUTUwsIHJlcHJlc2VudGVkIGFzIGEgSnNvbk1MIHRyZWUuIElmIGEgc3RyaW5nIGlzIGdpdmVuXG4gKiAgdG8gdGhpcyBmdW5jdGlvbiwgaXQgaXMgZmlyc3QgcGFyc2VkIGludG8gYSBtYXJrZG93biB0cmVlIGJ5IGNhbGxpbmdcbiAqICBbW3BhcnNlXV0uXG4gKiovXG5leHBvc2UudG9IVE1MVHJlZSA9IGZ1bmN0aW9uIHRvSFRNTFRyZWUoIGlucHV0LCBkaWFsZWN0ICwgb3B0aW9ucyApIHtcbiAgLy8gY29udmVydCBzdHJpbmcgaW5wdXQgdG8gYW4gTUQgdHJlZVxuICBpZiAoIHR5cGVvZiBpbnB1dCA9PT1cInN0cmluZ1wiICkgaW5wdXQgPSB0aGlzLnBhcnNlKCBpbnB1dCwgZGlhbGVjdCApO1xuXG4gIC8vIE5vdyBjb252ZXJ0IHRoZSBNRCB0cmVlIHRvIGFuIEhUTUwgdHJlZVxuXG4gIC8vIHJlbW92ZSByZWZlcmVuY2VzIGZyb20gdGhlIHRyZWVcbiAgdmFyIGF0dHJzID0gZXh0cmFjdF9hdHRyKCBpbnB1dCApLFxuICAgICAgcmVmcyA9IHt9O1xuXG4gIGlmICggYXR0cnMgJiYgYXR0cnMucmVmZXJlbmNlcyApIHtcbiAgICByZWZzID0gYXR0cnMucmVmZXJlbmNlcztcbiAgfVxuXG4gIHZhciBodG1sID0gY29udmVydF90cmVlX3RvX2h0bWwoIGlucHV0LCByZWZzICwgb3B0aW9ucyApO1xuICBtZXJnZV90ZXh0X25vZGVzKCBodG1sICk7XG4gIHJldHVybiBodG1sO1xufTtcblxuLy8gRm9yIFNwaWRlcm1vbmtleSBiYXNlZCBlbmdpbmVzXG5mdW5jdGlvbiBta19ibG9ja190b1NvdXJjZSgpIHtcbiAgcmV0dXJuIFwiTWFya2Rvd24ubWtfYmxvY2soIFwiICtcbiAgICAgICAgICB1bmV2YWwodGhpcy50b1N0cmluZygpKSArXG4gICAgICAgICAgXCIsIFwiICtcbiAgICAgICAgICB1bmV2YWwodGhpcy50cmFpbGluZykgK1xuICAgICAgICAgIFwiLCBcIiArXG4gICAgICAgICAgdW5ldmFsKHRoaXMubGluZU51bWJlcikgK1xuICAgICAgICAgIFwiIClcIjtcbn1cblxuLy8gbm9kZVxuZnVuY3Rpb24gbWtfYmxvY2tfaW5zcGVjdCgpIHtcbiAgdmFyIHV0aWwgPSByZXF1aXJlKFwidXRpbFwiKTtcbiAgcmV0dXJuIFwiTWFya2Rvd24ubWtfYmxvY2soIFwiICtcbiAgICAgICAgICB1dGlsLmluc3BlY3QodGhpcy50b1N0cmluZygpKSArXG4gICAgICAgICAgXCIsIFwiICtcbiAgICAgICAgICB1dGlsLmluc3BlY3QodGhpcy50cmFpbGluZykgK1xuICAgICAgICAgIFwiLCBcIiArXG4gICAgICAgICAgdXRpbC5pbnNwZWN0KHRoaXMubGluZU51bWJlcikgK1xuICAgICAgICAgIFwiIClcIjtcblxufVxuXG52YXIgbWtfYmxvY2sgPSBNYXJrZG93bi5ta19ibG9jayA9IGZ1bmN0aW9uKGJsb2NrLCB0cmFpbCwgbGluZSkge1xuICAvLyBCZSBoZWxwZnVsIGZvciBkZWZhdWx0IGNhc2UgaW4gdGVzdHMuXG4gIGlmICggYXJndW1lbnRzLmxlbmd0aCA9PSAxICkgdHJhaWwgPSBcIlxcblxcblwiO1xuXG4gIHZhciBzID0gbmV3IFN0cmluZyhibG9jayk7XG4gIHMudHJhaWxpbmcgPSB0cmFpbDtcbiAgLy8gVG8gbWFrZSBpdCBjbGVhciBpdHMgbm90IGp1c3QgYSBzdHJpbmdcbiAgcy5pbnNwZWN0ID0gbWtfYmxvY2tfaW5zcGVjdDtcbiAgcy50b1NvdXJjZSA9IG1rX2Jsb2NrX3RvU291cmNlO1xuXG4gIGlmICggbGluZSAhPSB1bmRlZmluZWQgKVxuICAgIHMubGluZU51bWJlciA9IGxpbmU7XG5cbiAgcmV0dXJuIHM7XG59O1xuXG5mdW5jdGlvbiBjb3VudF9saW5lcyggc3RyICkge1xuICB2YXIgbiA9IDAsIGkgPSAtMTtcbiAgd2hpbGUgKCAoIGkgPSBzdHIuaW5kZXhPZihcIlxcblwiLCBpICsgMSkgKSAhPT0gLTEgKSBuKys7XG4gIHJldHVybiBuO1xufVxuXG4vLyBJbnRlcm5hbCAtIHNwbGl0IHNvdXJjZSBpbnRvIHJvdWdoIGJsb2Nrc1xuTWFya2Rvd24ucHJvdG90eXBlLnNwbGl0X2Jsb2NrcyA9IGZ1bmN0aW9uIHNwbGl0QmxvY2tzKCBpbnB1dCwgc3RhcnRMaW5lICkge1xuICBpbnB1dCA9IGlucHV0LnJlcGxhY2UoLyhcXHJcXG58XFxufFxccikvZywgXCJcXG5cIik7XG4gIC8vIFtcXHNcXFNdIG1hdGNoZXMgX2FueXRoaW5nXyAobmV3bGluZSBvciBzcGFjZSlcbiAgLy8gW15dIGlzIGVxdWl2YWxlbnQgYnV0IGRvZXNuJ3Qgd29yayBpbiBJRXMuXG4gIHZhciByZSA9IC8oW1xcc1xcU10rPykoJHxcXG4jfFxcbig/OlxccypcXG58JCkrKS9nLFxuICAgICAgYmxvY2tzID0gW10sXG4gICAgICBtO1xuXG4gIHZhciBsaW5lX25vID0gMTtcblxuICBpZiAoICggbSA9IC9eKFxccypcXG4pLy5leGVjKGlucHV0KSApICE9IG51bGwgKSB7XG4gICAgLy8gc2tpcCAoYnV0IGNvdW50KSBsZWFkaW5nIGJsYW5rIGxpbmVzXG4gICAgbGluZV9ubyArPSBjb3VudF9saW5lcyggbVswXSApO1xuICAgIHJlLmxhc3RJbmRleCA9IG1bMF0ubGVuZ3RoO1xuICB9XG5cbiAgd2hpbGUgKCAoIG0gPSByZS5leGVjKGlucHV0KSApICE9PSBudWxsICkge1xuICAgIGlmIChtWzJdID09IFwiXFxuI1wiKSB7XG4gICAgICBtWzJdID0gXCJcXG5cIjtcbiAgICAgIHJlLmxhc3RJbmRleC0tO1xuICAgIH1cbiAgICBibG9ja3MucHVzaCggbWtfYmxvY2soIG1bMV0sIG1bMl0sIGxpbmVfbm8gKSApO1xuICAgIGxpbmVfbm8gKz0gY291bnRfbGluZXMoIG1bMF0gKTtcbiAgfVxuXG4gIHJldHVybiBibG9ja3M7XG59O1xuXG4vKipcbiAqICBNYXJrZG93biNwcm9jZXNzQmxvY2soIGJsb2NrLCBuZXh0ICkgLT4gdW5kZWZpbmVkIHwgWyBKc29uTUwsIC4uLiBdXG4gKiAgLSBibG9jayAoU3RyaW5nKTogdGhlIGJsb2NrIHRvIHByb2Nlc3NcbiAqICAtIG5leHQgKEFycmF5KTogdGhlIGZvbGxvd2luZyBibG9ja3NcbiAqXG4gKiBQcm9jZXNzIGBibG9ja2AgYW5kIHJldHVybiBhbiBhcnJheSBvZiBKc29uTUwgbm9kZXMgcmVwcmVzZW50aW5nIGBibG9ja2AuXG4gKlxuICogSXQgZG9lcyB0aGlzIGJ5IGFza2luZyBlYWNoIGJsb2NrIGxldmVsIGZ1bmN0aW9uIGluIHRoZSBkaWFsZWN0IHRvIHByb2Nlc3NcbiAqIHRoZSBibG9jayB1bnRpbCBvbmUgY2FuLiBTdWNjZXNmdWwgaGFuZGxpbmcgaXMgaW5kaWNhdGVkIGJ5IHJldHVybmluZyBhblxuICogYXJyYXkgKHdpdGggemVybyBvciBtb3JlIEpzb25NTCBub2RlcyksIGZhaWx1cmUgYnkgYSBmYWxzZSB2YWx1ZS5cbiAqXG4gKiBCbG9ja3MgaGFuZGxlcnMgYXJlIHJlc3BvbnNpYmxlIGZvciBjYWxsaW5nIFtbTWFya2Rvd24jcHJvY2Vzc0lubGluZV1dXG4gKiB0aGVtc2VsdmVzIGFzIGFwcHJvcHJpYXRlLlxuICpcbiAqIElmIHRoZSBibG9ja3Mgd2VyZSBzcGxpdCBpbmNvcnJlY3RseSBvciBhZGphY2VudCBibG9ja3MgbmVlZCBjb2xsYXBzaW5nIHlvdVxuICogY2FuIGFkanVzdCBgbmV4dGAgaW4gcGxhY2UgdXNpbmcgc2hpZnQvc3BsaWNlIGV0Yy5cbiAqXG4gKiBJZiBhbnkgb2YgdGhpcyBkZWZhdWx0IGJlaGF2aW91ciBpcyBub3QgcmlnaHQgZm9yIHRoZSBkaWFsZWN0LCB5b3UgY2FuXG4gKiBkZWZpbmUgYSBgX19jYWxsX19gIG1ldGhvZCBvbiB0aGUgZGlhbGVjdCB0aGF0IHdpbGwgZ2V0IGludm9rZWQgdG8gaGFuZGxlXG4gKiB0aGUgYmxvY2sgcHJvY2Vzc2luZy5cbiAqL1xuTWFya2Rvd24ucHJvdG90eXBlLnByb2Nlc3NCbG9jayA9IGZ1bmN0aW9uIHByb2Nlc3NCbG9jayggYmxvY2ssIG5leHQgKSB7XG4gIHZhciBjYnMgPSB0aGlzLmRpYWxlY3QuYmxvY2ssXG4gICAgICBvcmQgPSBjYnMuX19vcmRlcl9fO1xuXG4gIGlmICggXCJfX2NhbGxfX1wiIGluIGNicyApIHtcbiAgICByZXR1cm4gY2JzLl9fY2FsbF9fLmNhbGwodGhpcywgYmxvY2ssIG5leHQpO1xuICB9XG5cbiAgZm9yICggdmFyIGkgPSAwOyBpIDwgb3JkLmxlbmd0aDsgaSsrICkge1xuICAgIC8vRDp0aGlzLmRlYnVnKCBcIlRlc3RpbmdcIiwgb3JkW2ldICk7XG4gICAgdmFyIHJlcyA9IGNic1sgb3JkW2ldIF0uY2FsbCggdGhpcywgYmxvY2ssIG5leHQgKTtcbiAgICBpZiAoIHJlcyApIHtcbiAgICAgIC8vRDp0aGlzLmRlYnVnKFwiICBtYXRjaGVkXCIpO1xuICAgICAgaWYgKCAhaXNBcnJheShyZXMpIHx8ICggcmVzLmxlbmd0aCA+IDAgJiYgISggaXNBcnJheShyZXNbMF0pICkgKSApXG4gICAgICAgIHRoaXMuZGVidWcob3JkW2ldLCBcImRpZG4ndCByZXR1cm4gYSBwcm9wZXIgYXJyYXlcIik7XG4gICAgICAvL0Q6dGhpcy5kZWJ1ZyggXCJcIiApO1xuICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG4gIH1cblxuICAvLyBVaG9oISBubyBtYXRjaCEgU2hvdWxkIHdlIHRocm93IGFuIGVycm9yP1xuICByZXR1cm4gW107XG59O1xuXG5NYXJrZG93bi5wcm90b3R5cGUucHJvY2Vzc0lubGluZSA9IGZ1bmN0aW9uIHByb2Nlc3NJbmxpbmUoIGJsb2NrICkge1xuICByZXR1cm4gdGhpcy5kaWFsZWN0LmlubGluZS5fX2NhbGxfXy5jYWxsKCB0aGlzLCBTdHJpbmcoIGJsb2NrICkgKTtcbn07XG5cbi8qKlxuICogIE1hcmtkb3duI3RvVHJlZSggc291cmNlICkgLT4gSnNvbk1MXG4gKiAgLSBzb3VyY2UgKFN0cmluZyk6IG1hcmtkb3duIHNvdXJjZSB0byBwYXJzZVxuICpcbiAqICBQYXJzZSBgc291cmNlYCBpbnRvIGEgSnNvbk1MIHRyZWUgcmVwcmVzZW50aW5nIHRoZSBtYXJrZG93biBkb2N1bWVudC5cbiAqKi9cbi8vIGN1c3RvbV90cmVlIG1lYW5zIHNldCB0aGlzLnRyZWUgdG8gYGN1c3RvbV90cmVlYCBhbmQgcmVzdG9yZSBvbGQgdmFsdWUgb24gcmV0dXJuXG5NYXJrZG93bi5wcm90b3R5cGUudG9UcmVlID0gZnVuY3Rpb24gdG9UcmVlKCBzb3VyY2UsIGN1c3RvbV9yb290ICkge1xuICB2YXIgYmxvY2tzID0gc291cmNlIGluc3RhbmNlb2YgQXJyYXkgPyBzb3VyY2UgOiB0aGlzLnNwbGl0X2Jsb2Nrcyggc291cmNlICk7XG5cbiAgLy8gTWFrZSB0cmVlIGEgbWVtYmVyIHZhcmlhYmxlIHNvIGl0cyBlYXNpZXIgdG8gbWVzcyB3aXRoIGluIGV4dGVuc2lvbnNcbiAgdmFyIG9sZF90cmVlID0gdGhpcy50cmVlO1xuICB0cnkge1xuICAgIHRoaXMudHJlZSA9IGN1c3RvbV9yb290IHx8IHRoaXMudHJlZSB8fCBbIFwibWFya2Rvd25cIiBdO1xuXG4gICAgYmxvY2tzOlxuICAgIHdoaWxlICggYmxvY2tzLmxlbmd0aCApIHtcbiAgICAgIHZhciBiID0gdGhpcy5wcm9jZXNzQmxvY2soIGJsb2Nrcy5zaGlmdCgpLCBibG9ja3MgKTtcblxuICAgICAgLy8gUmVmZXJlbmNlIGJsb2NrcyBhbmQgdGhlIGxpa2Ugd29uJ3QgcmV0dXJuIGFueSBjb250ZW50XG4gICAgICBpZiAoICFiLmxlbmd0aCApIGNvbnRpbnVlIGJsb2NrcztcblxuICAgICAgdGhpcy50cmVlLnB1c2guYXBwbHkoIHRoaXMudHJlZSwgYiApO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy50cmVlO1xuICB9XG4gIGZpbmFsbHkge1xuICAgIGlmICggY3VzdG9tX3Jvb3QgKSB7XG4gICAgICB0aGlzLnRyZWUgPSBvbGRfdHJlZTtcbiAgICB9XG4gIH1cbn07XG5cbi8vIE5vb3AgYnkgZGVmYXVsdFxuTWFya2Rvd24ucHJvdG90eXBlLmRlYnVnID0gZnVuY3Rpb24gKCkge1xuICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKCBhcmd1bWVudHMpO1xuICBhcmdzLnVuc2hpZnQodGhpcy5kZWJ1Z19pbmRlbnQpO1xuICBpZiAoIHR5cGVvZiBwcmludCAhPT0gXCJ1bmRlZmluZWRcIiApXG4gICAgICBwcmludC5hcHBseSggcHJpbnQsIGFyZ3MgKTtcbiAgaWYgKCB0eXBlb2YgY29uc29sZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2YgY29uc29sZS5sb2cgIT09IFwidW5kZWZpbmVkXCIgKVxuICAgICAgY29uc29sZS5sb2cuYXBwbHkoIG51bGwsIGFyZ3MgKTtcbn1cblxuTWFya2Rvd24ucHJvdG90eXBlLmxvb3BfcmVfb3Zlcl9ibG9jayA9IGZ1bmN0aW9uKCByZSwgYmxvY2ssIGNiICkge1xuICAvLyBEb250IHVzZSAvZyByZWdleHBzIHdpdGggdGhpc1xuICB2YXIgbSxcbiAgICAgIGIgPSBibG9jay52YWx1ZU9mKCk7XG5cbiAgd2hpbGUgKCBiLmxlbmd0aCAmJiAobSA9IHJlLmV4ZWMoYikgKSAhPSBudWxsICkge1xuICAgIGIgPSBiLnN1YnN0ciggbVswXS5sZW5ndGggKTtcbiAgICBjYi5jYWxsKHRoaXMsIG0pO1xuICB9XG4gIHJldHVybiBiO1xufTtcblxuLyoqXG4gKiBNYXJrZG93bi5kaWFsZWN0c1xuICpcbiAqIE5hbWVzcGFjZSBvZiBidWlsdC1pbiBkaWFsZWN0cy5cbiAqKi9cbk1hcmtkb3duLmRpYWxlY3RzID0ge307XG5cbi8qKlxuICogTWFya2Rvd24uZGlhbGVjdHMuR3J1YmVyXG4gKlxuICogVGhlIGRlZmF1bHQgZGlhbGVjdCB0aGF0IGZvbGxvd3MgdGhlIHJ1bGVzIHNldCBvdXQgYnkgSm9obiBHcnViZXInc1xuICogbWFya2Rvd24ucGwgYXMgY2xvc2VseSBhcyBwb3NzaWJsZS4gV2VsbCBhY3R1YWxseSB3ZSBmb2xsb3cgdGhlIGJlaGF2aW91ciBvZlxuICogdGhhdCBzY3JpcHQgd2hpY2ggaW4gc29tZSBwbGFjZXMgaXMgbm90IGV4YWN0bHkgd2hhdCB0aGUgc3ludGF4IHdlYiBwYWdlXG4gKiBzYXlzLlxuICoqL1xuTWFya2Rvd24uZGlhbGVjdHMuR3J1YmVyID0ge1xuICBibG9jazoge1xuICAgIGF0eEhlYWRlcjogZnVuY3Rpb24gYXR4SGVhZGVyKCBibG9jaywgbmV4dCApIHtcbiAgICAgIHZhciBtID0gYmxvY2subWF0Y2goIC9eKCN7MSw2fSlcXHMqKC4qPylcXHMqIypcXHMqKD86XFxufCQpLyApO1xuXG4gICAgICBpZiAoICFtICkgcmV0dXJuIHVuZGVmaW5lZDtcblxuICAgICAgdmFyIGhlYWRlciA9IFsgXCJoZWFkZXJcIiwgeyBsZXZlbDogbVsgMSBdLmxlbmd0aCB9IF07XG4gICAgICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShoZWFkZXIsIHRoaXMucHJvY2Vzc0lubGluZShtWyAyIF0pKTtcblxuICAgICAgaWYgKCBtWzBdLmxlbmd0aCA8IGJsb2NrLmxlbmd0aCApXG4gICAgICAgIG5leHQudW5zaGlmdCggbWtfYmxvY2soIGJsb2NrLnN1YnN0ciggbVswXS5sZW5ndGggKSwgYmxvY2sudHJhaWxpbmcsIGJsb2NrLmxpbmVOdW1iZXIgKyAyICkgKTtcblxuICAgICAgcmV0dXJuIFsgaGVhZGVyIF07XG4gICAgfSxcblxuICAgIHNldGV4dEhlYWRlcjogZnVuY3Rpb24gc2V0ZXh0SGVhZGVyKCBibG9jaywgbmV4dCApIHtcbiAgICAgIHZhciBtID0gYmxvY2subWF0Y2goIC9eKC4qKVxcbihbLT1dKVxcMlxcMisoPzpcXG58JCkvICk7XG5cbiAgICAgIGlmICggIW0gKSByZXR1cm4gdW5kZWZpbmVkO1xuXG4gICAgICB2YXIgbGV2ZWwgPSAoIG1bIDIgXSA9PT0gXCI9XCIgKSA/IDEgOiAyO1xuICAgICAgdmFyIGhlYWRlciA9IFsgXCJoZWFkZXJcIiwgeyBsZXZlbCA6IGxldmVsIH0sIG1bIDEgXSBdO1xuXG4gICAgICBpZiAoIG1bMF0ubGVuZ3RoIDwgYmxvY2subGVuZ3RoIClcbiAgICAgICAgbmV4dC51bnNoaWZ0KCBta19ibG9jayggYmxvY2suc3Vic3RyKCBtWzBdLmxlbmd0aCApLCBibG9jay50cmFpbGluZywgYmxvY2subGluZU51bWJlciArIDIgKSApO1xuXG4gICAgICByZXR1cm4gWyBoZWFkZXIgXTtcbiAgICB9LFxuXG4gICAgY29kZTogZnVuY3Rpb24gY29kZSggYmxvY2ssIG5leHQgKSB7XG4gICAgICAvLyB8ICAgIEZvb1xuICAgICAgLy8gfGJhclxuICAgICAgLy8gc2hvdWxkIGJlIGEgY29kZSBibG9jayBmb2xsb3dlZCBieSBhIHBhcmFncmFwaC4gRnVuXG4gICAgICAvL1xuICAgICAgLy8gVGhlcmUgbWlnaHQgYWxzbyBiZSBhZGphY2VudCBjb2RlIGJsb2NrIHRvIG1lcmdlLlxuXG4gICAgICB2YXIgcmV0ID0gW10sXG4gICAgICAgICAgcmUgPSAvXig/OiB7MCwzfVxcdHwgezR9KSguKilcXG4/LyxcbiAgICAgICAgICBsaW5lcztcblxuICAgICAgLy8gNCBzcGFjZXMgKyBjb250ZW50XG4gICAgICBpZiAoICFibG9jay5tYXRjaCggcmUgKSApIHJldHVybiB1bmRlZmluZWQ7XG5cbiAgICAgIGJsb2NrX3NlYXJjaDpcbiAgICAgIGRvIHtcbiAgICAgICAgLy8gTm93IHB1bGwgb3V0IHRoZSByZXN0IG9mIHRoZSBsaW5lc1xuICAgICAgICB2YXIgYiA9IHRoaXMubG9vcF9yZV9vdmVyX2Jsb2NrKFxuICAgICAgICAgICAgICAgICAgcmUsIGJsb2NrLnZhbHVlT2YoKSwgZnVuY3Rpb24oIG0gKSB7IHJldC5wdXNoKCBtWzFdICk7IH0gKTtcblxuICAgICAgICBpZiAoIGIubGVuZ3RoICkge1xuICAgICAgICAgIC8vIENhc2UgYWxsdWRlZCB0byBpbiBmaXJzdCBjb21tZW50LiBwdXNoIGl0IGJhY2sgb24gYXMgYSBuZXcgYmxvY2tcbiAgICAgICAgICBuZXh0LnVuc2hpZnQoIG1rX2Jsb2NrKGIsIGJsb2NrLnRyYWlsaW5nKSApO1xuICAgICAgICAgIGJyZWFrIGJsb2NrX3NlYXJjaDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICggbmV4dC5sZW5ndGggKSB7XG4gICAgICAgICAgLy8gQ2hlY2sgdGhlIG5leHQgYmxvY2sgLSBpdCBtaWdodCBiZSBjb2RlIHRvb1xuICAgICAgICAgIGlmICggIW5leHRbMF0ubWF0Y2goIHJlICkgKSBicmVhayBibG9ja19zZWFyY2g7XG5cbiAgICAgICAgICAvLyBQdWxsIGhvdyBob3cgbWFueSBibGFua3MgbGluZXMgZm9sbG93IC0gbWludXMgdHdvIHRvIGFjY291bnQgZm9yIC5qb2luXG4gICAgICAgICAgcmV0LnB1c2ggKCBibG9jay50cmFpbGluZy5yZXBsYWNlKC9bXlxcbl0vZywgXCJcIikuc3Vic3RyaW5nKDIpICk7XG5cbiAgICAgICAgICBibG9jayA9IG5leHQuc2hpZnQoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBicmVhayBibG9ja19zZWFyY2g7XG4gICAgICAgIH1cbiAgICAgIH0gd2hpbGUgKCB0cnVlICk7XG5cbiAgICAgIHJldHVybiBbIFsgXCJjb2RlX2Jsb2NrXCIsIHJldC5qb2luKFwiXFxuXCIpIF0gXTtcbiAgICB9LFxuXG4gICAgaG9yaXpSdWxlOiBmdW5jdGlvbiBob3JpelJ1bGUoIGJsb2NrLCBuZXh0ICkge1xuICAgICAgLy8gdGhpcyBuZWVkcyB0byBmaW5kIGFueSBociBpbiB0aGUgYmxvY2sgdG8gaGFuZGxlIGFidXR0aW5nIGJsb2Nrc1xuICAgICAgdmFyIG0gPSBibG9jay5tYXRjaCggL14oPzooW1xcc1xcU10qPylcXG4pP1sgXFx0XSooWy1fKl0pKD86WyBcXHRdKlxcMil7Mix9WyBcXHRdKig/OlxcbihbXFxzXFxTXSopKT8kLyApO1xuXG4gICAgICBpZiAoICFtICkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICB2YXIganNvbm1sID0gWyBbIFwiaHJcIiBdIF07XG5cbiAgICAgIC8vIGlmIHRoZXJlJ3MgYSBsZWFkaW5nIGFidXR0aW5nIGJsb2NrLCBwcm9jZXNzIGl0XG4gICAgICBpZiAoIG1bIDEgXSApIHtcbiAgICAgICAganNvbm1sLnVuc2hpZnQuYXBwbHkoIGpzb25tbCwgdGhpcy5wcm9jZXNzQmxvY2soIG1bIDEgXSwgW10gKSApO1xuICAgICAgfVxuXG4gICAgICAvLyBpZiB0aGVyZSdzIGEgdHJhaWxpbmcgYWJ1dHRpbmcgYmxvY2ssIHN0aWNrIGl0IGludG8gbmV4dFxuICAgICAgaWYgKCBtWyAzIF0gKSB7XG4gICAgICAgIG5leHQudW5zaGlmdCggbWtfYmxvY2soIG1bIDMgXSApICk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBqc29ubWw7XG4gICAgfSxcblxuICAgIC8vIFRoZXJlIGFyZSB0d28gdHlwZXMgb2YgbGlzdHMuIFRpZ2h0IGFuZCBsb29zZS4gVGlnaHQgbGlzdHMgaGF2ZSBubyB3aGl0ZXNwYWNlXG4gICAgLy8gYmV0d2VlbiB0aGUgaXRlbXMgKGFuZCByZXN1bHQgaW4gdGV4dCBqdXN0IGluIHRoZSA8bGk+KSBhbmQgbG9vc2UgbGlzdHMsXG4gICAgLy8gd2hpY2ggaGF2ZSBhbiBlbXB0eSBsaW5lIGJldHdlZW4gbGlzdCBpdGVtcywgcmVzdWx0aW5nIGluIChvbmUgb3IgbW9yZSlcbiAgICAvLyBwYXJhZ3JhcGhzIGluc2lkZSB0aGUgPGxpPi5cbiAgICAvL1xuICAgIC8vIFRoZXJlIGFyZSBhbGwgc29ydHMgd2VpcmQgZWRnZSBjYXNlcyBhYm91dCB0aGUgb3JpZ2luYWwgbWFya2Rvd24ucGwnc1xuICAgIC8vIGhhbmRsaW5nIG9mIGxpc3RzOlxuICAgIC8vXG4gICAgLy8gKiBOZXN0ZWQgbGlzdHMgYXJlIHN1cHBvc2VkIHRvIGJlIGluZGVudGVkIGJ5IGZvdXIgY2hhcnMgcGVyIGxldmVsLiBCdXRcbiAgICAvLyAgIGlmIHRoZXkgYXJlbid0LCB5b3UgY2FuIGdldCBhIG5lc3RlZCBsaXN0IGJ5IGluZGVudGluZyBieSBsZXNzIHRoYW5cbiAgICAvLyAgIGZvdXIgc28gbG9uZyBhcyB0aGUgaW5kZW50IGRvZXNuJ3QgbWF0Y2ggYW4gaW5kZW50IG9mIGFuIGV4aXN0aW5nIGxpc3RcbiAgICAvLyAgIGl0ZW0gaW4gdGhlICduZXN0IHN0YWNrJy5cbiAgICAvL1xuICAgIC8vICogVGhlIHR5cGUgb2YgdGhlIGxpc3QgKGJ1bGxldCBvciBudW1iZXIpIGlzIGNvbnRyb2xsZWQganVzdCBieSB0aGVcbiAgICAvLyAgICBmaXJzdCBpdGVtIGF0IHRoZSBpbmRlbnQuIFN1YnNlcXVlbnQgY2hhbmdlcyBhcmUgaWdub3JlZCB1bmxlc3MgdGhleVxuICAgIC8vICAgIGFyZSBmb3IgbmVzdGVkIGxpc3RzXG4gICAgLy9cbiAgICBsaXN0czogKGZ1bmN0aW9uKCApIHtcbiAgICAgIC8vIFVzZSBhIGNsb3N1cmUgdG8gaGlkZSBhIGZldyB2YXJpYWJsZXMuXG4gICAgICB2YXIgYW55X2xpc3QgPSBcIlsqKy1dfFxcXFxkK1xcXFwuXCIsXG4gICAgICAgICAgYnVsbGV0X2xpc3QgPSAvWyorLV0vLFxuICAgICAgICAgIG51bWJlcl9saXN0ID0gL1xcZCtcXC4vLFxuICAgICAgICAgIC8vIENhcHR1cmUgbGVhZGluZyBpbmRlbnQgYXMgaXQgbWF0dGVycyBmb3IgZGV0ZXJtaW5pbmcgbmVzdGVkIGxpc3RzLlxuICAgICAgICAgIGlzX2xpc3RfcmUgPSBuZXcgUmVnRXhwKCBcIl4oIHswLDN9KShcIiArIGFueV9saXN0ICsgXCIpWyBcXHRdK1wiICksXG4gICAgICAgICAgaW5kZW50X3JlID0gXCIoPzogezAsM31cXFxcdHwgezR9KVwiO1xuXG4gICAgICAvLyBUT0RPOiBDYWNoZSB0aGlzIHJlZ2V4cCBmb3IgY2VydGFpbiBkZXB0aHMuXG4gICAgICAvLyBDcmVhdGUgYSByZWdleHAgc3VpdGFibGUgZm9yIG1hdGNoaW5nIGFuIGxpIGZvciBhIGdpdmVuIHN0YWNrIGRlcHRoXG4gICAgICBmdW5jdGlvbiByZWdleF9mb3JfZGVwdGgoIGRlcHRoICkge1xuXG4gICAgICAgIHJldHVybiBuZXcgUmVnRXhwKFxuICAgICAgICAgIC8vIG1bMV0gPSBpbmRlbnQsIG1bMl0gPSBsaXN0X3R5cGVcbiAgICAgICAgICBcIig/Ol4oXCIgKyBpbmRlbnRfcmUgKyBcInswLFwiICsgZGVwdGggKyBcIn0gezAsM30pKFwiICsgYW55X2xpc3QgKyBcIilcXFxccyspfFwiICtcbiAgICAgICAgICAvLyBtWzNdID0gY29udFxuICAgICAgICAgIFwiKF5cIiArIGluZGVudF9yZSArIFwiezAsXCIgKyAoZGVwdGgtMSkgKyBcIn1bIF17MCw0fSlcIlxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gZXhwYW5kX3RhYiggaW5wdXQgKSB7XG4gICAgICAgIHJldHVybiBpbnB1dC5yZXBsYWNlKCAvIHswLDN9XFx0L2csIFwiICAgIFwiICk7XG4gICAgICB9XG5cbiAgICAgIC8vIEFkZCBpbmxpbmUgY29udGVudCBgaW5saW5lYCB0byBgbGlgLiBpbmxpbmUgY29tZXMgZnJvbSBwcm9jZXNzSW5saW5lXG4gICAgICAvLyBzbyBpcyBhbiBhcnJheSBvZiBjb250ZW50XG4gICAgICBmdW5jdGlvbiBhZGQobGksIGxvb3NlLCBpbmxpbmUsIG5sKSB7XG4gICAgICAgIGlmICggbG9vc2UgKSB7XG4gICAgICAgICAgbGkucHVzaCggWyBcInBhcmFcIiBdLmNvbmNhdChpbmxpbmUpICk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIEhtbW0sIHNob3VsZCB0aGlzIGJlIGFueSBibG9jayBsZXZlbCBlbGVtZW50IG9yIGp1c3QgcGFyYXM/XG4gICAgICAgIHZhciBhZGRfdG8gPSBsaVtsaS5sZW5ndGggLTFdIGluc3RhbmNlb2YgQXJyYXkgJiYgbGlbbGkubGVuZ3RoIC0gMV1bMF0gPT0gXCJwYXJhXCJcbiAgICAgICAgICAgICAgICAgICA/IGxpW2xpLmxlbmd0aCAtMV1cbiAgICAgICAgICAgICAgICAgICA6IGxpO1xuXG4gICAgICAgIC8vIElmIHRoZXJlIGlzIGFscmVhZHkgc29tZSBjb250ZW50IGluIHRoaXMgbGlzdCwgYWRkIHRoZSBuZXcgbGluZSBpblxuICAgICAgICBpZiAoIG5sICYmIGxpLmxlbmd0aCA+IDEgKSBpbmxpbmUudW5zaGlmdChubCk7XG5cbiAgICAgICAgZm9yICggdmFyIGkgPSAwOyBpIDwgaW5saW5lLmxlbmd0aDsgaSsrICkge1xuICAgICAgICAgIHZhciB3aGF0ID0gaW5saW5lW2ldLFxuICAgICAgICAgICAgICBpc19zdHIgPSB0eXBlb2Ygd2hhdCA9PSBcInN0cmluZ1wiO1xuICAgICAgICAgIGlmICggaXNfc3RyICYmIGFkZF90by5sZW5ndGggPiAxICYmIHR5cGVvZiBhZGRfdG9bYWRkX3RvLmxlbmd0aC0xXSA9PSBcInN0cmluZ1wiICkge1xuICAgICAgICAgICAgYWRkX3RvWyBhZGRfdG8ubGVuZ3RoLTEgXSArPSB3aGF0O1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGFkZF90by5wdXNoKCB3aGF0ICk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIGNvbnRhaW5lZCBtZWFucyBoYXZlIGFuIGluZGVudCBncmVhdGVyIHRoYW4gdGhlIGN1cnJlbnQgb25lLiBPblxuICAgICAgLy8gKmV2ZXJ5KiBsaW5lIGluIHRoZSBibG9ja1xuICAgICAgZnVuY3Rpb24gZ2V0X2NvbnRhaW5lZF9ibG9ja3MoIGRlcHRoLCBibG9ja3MgKSB7XG5cbiAgICAgICAgdmFyIHJlID0gbmV3IFJlZ0V4cCggXCJeKFwiICsgaW5kZW50X3JlICsgXCJ7XCIgKyBkZXB0aCArIFwifS4qP1xcXFxuPykqJFwiICksXG4gICAgICAgICAgICByZXBsYWNlID0gbmV3IFJlZ0V4cChcIl5cIiArIGluZGVudF9yZSArIFwie1wiICsgZGVwdGggKyBcIn1cIiwgXCJnbVwiKSxcbiAgICAgICAgICAgIHJldCA9IFtdO1xuXG4gICAgICAgIHdoaWxlICggYmxvY2tzLmxlbmd0aCA+IDAgKSB7XG4gICAgICAgICAgaWYgKCByZS5leGVjKCBibG9ja3NbMF0gKSApIHtcbiAgICAgICAgICAgIHZhciBiID0gYmxvY2tzLnNoaWZ0KCksXG4gICAgICAgICAgICAgICAgLy8gTm93IHJlbW92ZSB0aGF0IGluZGVudFxuICAgICAgICAgICAgICAgIHggPSBiLnJlcGxhY2UoIHJlcGxhY2UsIFwiXCIpO1xuXG4gICAgICAgICAgICByZXQucHVzaCggbWtfYmxvY2soIHgsIGIudHJhaWxpbmcsIGIubGluZU51bWJlciApICk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgICB9XG5cbiAgICAgIC8vIHBhc3NlZCB0byBzdGFjay5mb3JFYWNoIHRvIHR1cm4gbGlzdCBpdGVtcyB1cCB0aGUgc3RhY2sgaW50byBwYXJhc1xuICAgICAgZnVuY3Rpb24gcGFyYWdyYXBoaWZ5KHMsIGksIHN0YWNrKSB7XG4gICAgICAgIHZhciBsaXN0ID0gcy5saXN0O1xuICAgICAgICB2YXIgbGFzdF9saSA9IGxpc3RbbGlzdC5sZW5ndGgtMV07XG5cbiAgICAgICAgaWYgKCBsYXN0X2xpWzFdIGluc3RhbmNlb2YgQXJyYXkgJiYgbGFzdF9saVsxXVswXSA9PSBcInBhcmFcIiApIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCBpICsgMSA9PSBzdGFjay5sZW5ndGggKSB7XG4gICAgICAgICAgLy8gTGFzdCBzdGFjayBmcmFtZVxuICAgICAgICAgIC8vIEtlZXAgdGhlIHNhbWUgYXJyYXksIGJ1dCByZXBsYWNlIHRoZSBjb250ZW50c1xuICAgICAgICAgIGxhc3RfbGkucHVzaCggW1wicGFyYVwiXS5jb25jYXQoIGxhc3RfbGkuc3BsaWNlKDEsIGxhc3RfbGkubGVuZ3RoIC0gMSkgKSApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHZhciBzdWJsaXN0ID0gbGFzdF9saS5wb3AoKTtcbiAgICAgICAgICBsYXN0X2xpLnB1c2goIFtcInBhcmFcIl0uY29uY2F0KCBsYXN0X2xpLnNwbGljZSgxLCBsYXN0X2xpLmxlbmd0aCAtIDEpICksIHN1Ymxpc3QgKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgbWF0Y2hlciBmdW5jdGlvblxuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCBibG9jaywgbmV4dCApIHtcbiAgICAgICAgdmFyIG0gPSBibG9jay5tYXRjaCggaXNfbGlzdF9yZSApO1xuICAgICAgICBpZiAoICFtICkgcmV0dXJuIHVuZGVmaW5lZDtcblxuICAgICAgICBmdW5jdGlvbiBtYWtlX2xpc3QoIG0gKSB7XG4gICAgICAgICAgdmFyIGxpc3QgPSBidWxsZXRfbGlzdC5leGVjKCBtWzJdIClcbiAgICAgICAgICAgICAgICAgICA/IFtcImJ1bGxldGxpc3RcIl1cbiAgICAgICAgICAgICAgICAgICA6IFtcIm51bWJlcmxpc3RcIl07XG5cbiAgICAgICAgICBzdGFjay5wdXNoKCB7IGxpc3Q6IGxpc3QsIGluZGVudDogbVsxXSB9ICk7XG4gICAgICAgICAgcmV0dXJuIGxpc3Q7XG4gICAgICAgIH1cblxuXG4gICAgICAgIHZhciBzdGFjayA9IFtdLCAvLyBTdGFjayBvZiBsaXN0cyBmb3IgbmVzdGluZy5cbiAgICAgICAgICAgIGxpc3QgPSBtYWtlX2xpc3QoIG0gKSxcbiAgICAgICAgICAgIGxhc3RfbGksXG4gICAgICAgICAgICBsb29zZSA9IGZhbHNlLFxuICAgICAgICAgICAgcmV0ID0gWyBzdGFja1swXS5saXN0IF0sXG4gICAgICAgICAgICBpO1xuXG4gICAgICAgIC8vIExvb3AgdG8gc2VhcmNoIG92ZXIgYmxvY2sgbG9va2luZyBmb3IgaW5uZXIgYmxvY2sgZWxlbWVudHMgYW5kIGxvb3NlIGxpc3RzXG4gICAgICAgIGxvb3NlX3NlYXJjaDpcbiAgICAgICAgd2hpbGUgKCB0cnVlICkge1xuICAgICAgICAgIC8vIFNwbGl0IGludG8gbGluZXMgcHJlc2VydmluZyBuZXcgbGluZXMgYXQgZW5kIG9mIGxpbmVcbiAgICAgICAgICB2YXIgbGluZXMgPSBibG9jay5zcGxpdCggLyg/PVxcbikvICk7XG5cbiAgICAgICAgICAvLyBXZSBoYXZlIHRvIGdyYWIgYWxsIGxpbmVzIGZvciBhIGxpIGFuZCBjYWxsIHByb2Nlc3NJbmxpbmUgb24gdGhlbVxuICAgICAgICAgIC8vIG9uY2UgYXMgdGhlcmUgYXJlIHNvbWUgaW5saW5lIHRoaW5ncyB0aGF0IGNhbiBzcGFuIGxpbmVzLlxuICAgICAgICAgIHZhciBsaV9hY2N1bXVsYXRlID0gXCJcIjtcblxuICAgICAgICAgIC8vIExvb3Agb3ZlciB0aGUgbGluZXMgaW4gdGhpcyBibG9jayBsb29raW5nIGZvciB0aWdodCBsaXN0cy5cbiAgICAgICAgICB0aWdodF9zZWFyY2g6XG4gICAgICAgICAgZm9yICggdmFyIGxpbmVfbm8gPSAwOyBsaW5lX25vIDwgbGluZXMubGVuZ3RoOyBsaW5lX25vKysgKSB7XG4gICAgICAgICAgICB2YXIgbmwgPSBcIlwiLFxuICAgICAgICAgICAgICAgIGwgPSBsaW5lc1tsaW5lX25vXS5yZXBsYWNlKC9eXFxuLywgZnVuY3Rpb24obikgeyBubCA9IG47IHJldHVybiBcIlwiOyB9KTtcblxuICAgICAgICAgICAgLy8gVE9ETzogcmVhbGx5IHNob3VsZCBjYWNoZSB0aGlzXG4gICAgICAgICAgICB2YXIgbGluZV9yZSA9IHJlZ2V4X2Zvcl9kZXB0aCggc3RhY2subGVuZ3RoICk7XG5cbiAgICAgICAgICAgIG0gPSBsLm1hdGNoKCBsaW5lX3JlICk7XG4gICAgICAgICAgICAvL3ByaW50KCBcImxpbmU6XCIsIHVuZXZhbChsKSwgXCJcXG5saW5lIG1hdGNoOlwiLCB1bmV2YWwobSkgKTtcblxuICAgICAgICAgICAgLy8gV2UgaGF2ZSBhIGxpc3QgaXRlbVxuICAgICAgICAgICAgaWYgKCBtWzFdICE9PSB1bmRlZmluZWQgKSB7XG4gICAgICAgICAgICAgIC8vIFByb2Nlc3MgdGhlIHByZXZpb3VzIGxpc3QgaXRlbSwgaWYgYW55XG4gICAgICAgICAgICAgIGlmICggbGlfYWNjdW11bGF0ZS5sZW5ndGggKSB7XG4gICAgICAgICAgICAgICAgYWRkKCBsYXN0X2xpLCBsb29zZSwgdGhpcy5wcm9jZXNzSW5saW5lKCBsaV9hY2N1bXVsYXRlICksIG5sICk7XG4gICAgICAgICAgICAgICAgLy8gTG9vc2UgbW9kZSB3aWxsIGhhdmUgYmVlbiBkZWFsdCB3aXRoLiBSZXNldCBpdFxuICAgICAgICAgICAgICAgIGxvb3NlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgbGlfYWNjdW11bGF0ZSA9IFwiXCI7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBtWzFdID0gZXhwYW5kX3RhYiggbVsxXSApO1xuICAgICAgICAgICAgICB2YXIgd2FudGVkX2RlcHRoID0gTWF0aC5mbG9vcihtWzFdLmxlbmd0aC80KSsxO1xuICAgICAgICAgICAgICAvL3ByaW50KCBcIndhbnQ6XCIsIHdhbnRlZF9kZXB0aCwgXCJzdGFjazpcIiwgc3RhY2subGVuZ3RoKTtcbiAgICAgICAgICAgICAgaWYgKCB3YW50ZWRfZGVwdGggPiBzdGFjay5sZW5ndGggKSB7XG4gICAgICAgICAgICAgICAgLy8gRGVlcCBlbm91Z2ggZm9yIGEgbmVzdGVkIGxpc3Qgb3V0cmlnaHRcbiAgICAgICAgICAgICAgICAvL3ByaW50ICggXCJuZXcgbmVzdGVkIGxpc3RcIiApO1xuICAgICAgICAgICAgICAgIGxpc3QgPSBtYWtlX2xpc3QoIG0gKTtcbiAgICAgICAgICAgICAgICBsYXN0X2xpLnB1c2goIGxpc3QgKTtcbiAgICAgICAgICAgICAgICBsYXN0X2xpID0gbGlzdFsxXSA9IFsgXCJsaXN0aXRlbVwiIF07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gV2UgYXJlbid0IGRlZXAgZW5vdWdoIHRvIGJlIHN0cmljdGx5IGEgbmV3IGxldmVsLiBUaGlzIGlzXG4gICAgICAgICAgICAgICAgLy8gd2hlcmUgTWQucGwgZ29lcyBudXRzLiBJZiB0aGUgaW5kZW50IG1hdGNoZXMgYSBsZXZlbCBpbiB0aGVcbiAgICAgICAgICAgICAgICAvLyBzdGFjaywgcHV0IGl0IHRoZXJlLCBlbHNlIHB1dCBpdCBvbmUgZGVlcGVyIHRoZW4gdGhlXG4gICAgICAgICAgICAgICAgLy8gd2FudGVkX2RlcHRoIGRlc2VydmVzLlxuICAgICAgICAgICAgICAgIHZhciBmb3VuZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGZvciAoIGkgPSAwOyBpIDwgc3RhY2subGVuZ3RoOyBpKysgKSB7XG4gICAgICAgICAgICAgICAgICBpZiAoIHN0YWNrWyBpIF0uaW5kZW50ICE9IG1bMV0gKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgIGxpc3QgPSBzdGFja1sgaSBdLmxpc3Q7XG4gICAgICAgICAgICAgICAgICBzdGFjay5zcGxpY2UoIGkrMSwgc3RhY2subGVuZ3RoIC0gKGkrMSkgKTtcbiAgICAgICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICghZm91bmQpIHtcbiAgICAgICAgICAgICAgICAgIC8vcHJpbnQoXCJub3QgZm91bmQuIGw6XCIsIHVuZXZhbChsKSk7XG4gICAgICAgICAgICAgICAgICB3YW50ZWRfZGVwdGgrKztcbiAgICAgICAgICAgICAgICAgIGlmICggd2FudGVkX2RlcHRoIDw9IHN0YWNrLmxlbmd0aCApIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhY2suc3BsaWNlKHdhbnRlZF9kZXB0aCwgc3RhY2subGVuZ3RoIC0gd2FudGVkX2RlcHRoKTtcbiAgICAgICAgICAgICAgICAgICAgLy9wcmludChcIkRlc2lyZWQgZGVwdGggbm93XCIsIHdhbnRlZF9kZXB0aCwgXCJzdGFjazpcIiwgc3RhY2subGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgbGlzdCA9IHN0YWNrW3dhbnRlZF9kZXB0aC0xXS5saXN0O1xuICAgICAgICAgICAgICAgICAgICAvL3ByaW50KFwibGlzdDpcIiwgdW5ldmFsKGxpc3QpICk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy9wcmludCAoXCJtYWRlIG5ldyBzdGFjayBmb3IgbWVzc3kgaW5kZW50XCIpO1xuICAgICAgICAgICAgICAgICAgICBsaXN0ID0gbWFrZV9saXN0KG0pO1xuICAgICAgICAgICAgICAgICAgICBsYXN0X2xpLnB1c2gobGlzdCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy9wcmludCggdW5ldmFsKGxpc3QpLCBcImxhc3RcIiwgbGlzdCA9PT0gc3RhY2tbc3RhY2subGVuZ3RoLTFdLmxpc3QgKTtcbiAgICAgICAgICAgICAgICBsYXN0X2xpID0gWyBcImxpc3RpdGVtXCIgXTtcbiAgICAgICAgICAgICAgICBsaXN0LnB1c2gobGFzdF9saSk7XG4gICAgICAgICAgICAgIH0gLy8gZW5kIGRlcHRoIG9mIHNoZW5lZ2FpbnNcbiAgICAgICAgICAgICAgbmwgPSBcIlwiO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBBZGQgY29udGVudFxuICAgICAgICAgICAgaWYgKCBsLmxlbmd0aCA+IG1bMF0ubGVuZ3RoICkge1xuICAgICAgICAgICAgICBsaV9hY2N1bXVsYXRlICs9IG5sICsgbC5zdWJzdHIoIG1bMF0ubGVuZ3RoICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSAvLyB0aWdodF9zZWFyY2hcblxuICAgICAgICAgIGlmICggbGlfYWNjdW11bGF0ZS5sZW5ndGggKSB7XG4gICAgICAgICAgICBhZGQoIGxhc3RfbGksIGxvb3NlLCB0aGlzLnByb2Nlc3NJbmxpbmUoIGxpX2FjY3VtdWxhdGUgKSwgbmwgKTtcbiAgICAgICAgICAgIC8vIExvb3NlIG1vZGUgd2lsbCBoYXZlIGJlZW4gZGVhbHQgd2l0aC4gUmVzZXQgaXRcbiAgICAgICAgICAgIGxvb3NlID0gZmFsc2U7XG4gICAgICAgICAgICBsaV9hY2N1bXVsYXRlID0gXCJcIjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBMb29rIGF0IHRoZSBuZXh0IGJsb2NrIC0gd2UgbWlnaHQgaGF2ZSBhIGxvb3NlIGxpc3QuIE9yIGFuIGV4dHJhXG4gICAgICAgICAgLy8gcGFyYWdyYXBoIGZvciB0aGUgY3VycmVudCBsaVxuICAgICAgICAgIHZhciBjb250YWluZWQgPSBnZXRfY29udGFpbmVkX2Jsb2Nrcyggc3RhY2subGVuZ3RoLCBuZXh0ICk7XG5cbiAgICAgICAgICAvLyBEZWFsIHdpdGggY29kZSBibG9ja3Mgb3IgcHJvcGVybHkgbmVzdGVkIGxpc3RzXG4gICAgICAgICAgaWYgKCBjb250YWluZWQubGVuZ3RoID4gMCApIHtcbiAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSBhbGwgbGlzdGl0ZW1zIHVwIHRoZSBzdGFjayBhcmUgcGFyYWdyYXBoc1xuICAgICAgICAgICAgZm9yRWFjaCggc3RhY2ssIHBhcmFncmFwaGlmeSwgdGhpcyk7XG5cbiAgICAgICAgICAgIGxhc3RfbGkucHVzaC5hcHBseSggbGFzdF9saSwgdGhpcy50b1RyZWUoIGNvbnRhaW5lZCwgW10gKSApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBuZXh0X2Jsb2NrID0gbmV4dFswXSAmJiBuZXh0WzBdLnZhbHVlT2YoKSB8fCBcIlwiO1xuXG4gICAgICAgICAgaWYgKCBuZXh0X2Jsb2NrLm1hdGNoKGlzX2xpc3RfcmUpIHx8IG5leHRfYmxvY2subWF0Y2goIC9eIC8gKSApIHtcbiAgICAgICAgICAgIGJsb2NrID0gbmV4dC5zaGlmdCgpO1xuXG4gICAgICAgICAgICAvLyBDaGVjayBmb3IgYW4gSFIgZm9sbG93aW5nIGEgbGlzdDogZmVhdHVyZXMvbGlzdHMvaHJfYWJ1dHRpbmdcbiAgICAgICAgICAgIHZhciBociA9IHRoaXMuZGlhbGVjdC5ibG9jay5ob3JpelJ1bGUoIGJsb2NrLCBuZXh0ICk7XG5cbiAgICAgICAgICAgIGlmICggaHIgKSB7XG4gICAgICAgICAgICAgIHJldC5wdXNoLmFwcGx5KHJldCwgaHIpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gTWFrZSBzdXJlIGFsbCBsaXN0aXRlbXMgdXAgdGhlIHN0YWNrIGFyZSBwYXJhZ3JhcGhzXG4gICAgICAgICAgICBmb3JFYWNoKCBzdGFjaywgcGFyYWdyYXBoaWZ5LCB0aGlzKTtcblxuICAgICAgICAgICAgbG9vc2UgPSB0cnVlO1xuICAgICAgICAgICAgY29udGludWUgbG9vc2Vfc2VhcmNoO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfSAvLyBsb29zZV9zZWFyY2hcblxuICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgfTtcbiAgICB9KSgpLFxuXG4gICAgYmxvY2txdW90ZTogZnVuY3Rpb24gYmxvY2txdW90ZSggYmxvY2ssIG5leHQgKSB7XG4gICAgICBpZiAoICFibG9jay5tYXRjaCggL14+L20gKSApXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG5cbiAgICAgIHZhciBqc29ubWwgPSBbXTtcblxuICAgICAgLy8gc2VwYXJhdGUgb3V0IHRoZSBsZWFkaW5nIGFidXR0aW5nIGJsb2NrLCBpZiBhbnkuIEkuZS4gaW4gdGhpcyBjYXNlOlxuICAgICAgLy9cbiAgICAgIC8vICBhXG4gICAgICAvLyAgPiBiXG4gICAgICAvL1xuICAgICAgaWYgKCBibG9ja1sgMCBdICE9IFwiPlwiICkge1xuICAgICAgICB2YXIgbGluZXMgPSBibG9jay5zcGxpdCggL1xcbi8gKSxcbiAgICAgICAgICAgIHByZXYgPSBbXSxcbiAgICAgICAgICAgIGxpbmVfbm8gPSBibG9jay5saW5lTnVtYmVyO1xuXG4gICAgICAgIC8vIGtlZXAgc2hpZnRpbmcgbGluZXMgdW50aWwgeW91IGZpbmQgYSBjcm90Y2hldFxuICAgICAgICB3aGlsZSAoIGxpbmVzLmxlbmd0aCAmJiBsaW5lc1sgMCBdWyAwIF0gIT0gXCI+XCIgKSB7XG4gICAgICAgICAgICBwcmV2LnB1c2goIGxpbmVzLnNoaWZ0KCkgKTtcbiAgICAgICAgICAgIGxpbmVfbm8rKztcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBhYnV0dGluZyA9IG1rX2Jsb2NrKCBwcmV2LmpvaW4oIFwiXFxuXCIgKSwgXCJcXG5cIiwgYmxvY2subGluZU51bWJlciApO1xuICAgICAgICBqc29ubWwucHVzaC5hcHBseSgganNvbm1sLCB0aGlzLnByb2Nlc3NCbG9jayggYWJ1dHRpbmcsIFtdICkgKTtcbiAgICAgICAgLy8gcmVhc3NlbWJsZSBuZXcgYmxvY2sgb2YganVzdCBibG9jayBxdW90ZXMhXG4gICAgICAgIGJsb2NrID0gbWtfYmxvY2soIGxpbmVzLmpvaW4oIFwiXFxuXCIgKSwgYmxvY2sudHJhaWxpbmcsIGxpbmVfbm8gKTtcbiAgICAgIH1cblxuXG4gICAgICAvLyBpZiB0aGUgbmV4dCBibG9jayBpcyBhbHNvIGEgYmxvY2txdW90ZSBtZXJnZSBpdCBpblxuICAgICAgd2hpbGUgKCBuZXh0Lmxlbmd0aCAmJiBuZXh0WyAwIF1bIDAgXSA9PSBcIj5cIiApIHtcbiAgICAgICAgdmFyIGIgPSBuZXh0LnNoaWZ0KCk7XG4gICAgICAgIGJsb2NrID0gbWtfYmxvY2soIGJsb2NrICsgYmxvY2sudHJhaWxpbmcgKyBiLCBiLnRyYWlsaW5nLCBibG9jay5saW5lTnVtYmVyICk7XG4gICAgICB9XG5cbiAgICAgIC8vIFN0cmlwIG9mZiB0aGUgbGVhZGluZyBcIj4gXCIgYW5kIHJlLXByb2Nlc3MgYXMgYSBibG9jay5cbiAgICAgIHZhciBpbnB1dCA9IGJsb2NrLnJlcGxhY2UoIC9ePiA/L2dtLCBcIlwiICksXG4gICAgICAgICAgb2xkX3RyZWUgPSB0aGlzLnRyZWUsXG4gICAgICAgICAgcHJvY2Vzc2VkQmxvY2sgPSB0aGlzLnRvVHJlZSggaW5wdXQsIFsgXCJibG9ja3F1b3RlXCIgXSApLFxuICAgICAgICAgIGF0dHIgPSBleHRyYWN0X2F0dHIoIHByb2Nlc3NlZEJsb2NrICk7XG5cbiAgICAgIC8vIElmIGFueSBsaW5rIHJlZmVyZW5jZXMgd2VyZSBmb3VuZCBnZXQgcmlkIG9mIHRoZW1cbiAgICAgIGlmICggYXR0ciAmJiBhdHRyLnJlZmVyZW5jZXMgKSB7XG4gICAgICAgIGRlbGV0ZSBhdHRyLnJlZmVyZW5jZXM7XG4gICAgICAgIC8vIEFuZCB0aGVuIHJlbW92ZSB0aGUgYXR0cmlidXRlIG9iamVjdCBpZiBpdCdzIGVtcHR5XG4gICAgICAgIGlmICggaXNFbXB0eSggYXR0ciApICkge1xuICAgICAgICAgIHByb2Nlc3NlZEJsb2NrLnNwbGljZSggMSwgMSApO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGpzb25tbC5wdXNoKCBwcm9jZXNzZWRCbG9jayApO1xuICAgICAgcmV0dXJuIGpzb25tbDtcbiAgICB9LFxuXG4gICAgcmVmZXJlbmNlRGVmbjogZnVuY3Rpb24gcmVmZXJlbmNlRGVmbiggYmxvY2ssIG5leHQpIHtcbiAgICAgIHZhciByZSA9IC9eXFxzKlxcWyguKj8pXFxdOlxccyooXFxTKykoPzpcXHMrKD86KFsnXCJdKSguKj8pXFwzfFxcKCguKj8pXFwpKSk/XFxuPy87XG4gICAgICAvLyBpbnRlcmVzdGluZyBtYXRjaGVzIGFyZSBbICwgcmVmX2lkLCB1cmwsICwgdGl0bGUsIHRpdGxlIF1cblxuICAgICAgaWYgKCAhYmxvY2subWF0Y2gocmUpIClcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcblxuICAgICAgLy8gbWFrZSBhbiBhdHRyaWJ1dGUgbm9kZSBpZiBpdCBkb2Vzbid0IGV4aXN0XG4gICAgICBpZiAoICFleHRyYWN0X2F0dHIoIHRoaXMudHJlZSApICkge1xuICAgICAgICB0aGlzLnRyZWUuc3BsaWNlKCAxLCAwLCB7fSApO1xuICAgICAgfVxuXG4gICAgICB2YXIgYXR0cnMgPSBleHRyYWN0X2F0dHIoIHRoaXMudHJlZSApO1xuXG4gICAgICAvLyBtYWtlIGEgcmVmZXJlbmNlcyBoYXNoIGlmIGl0IGRvZXNuJ3QgZXhpc3RcbiAgICAgIGlmICggYXR0cnMucmVmZXJlbmNlcyA9PT0gdW5kZWZpbmVkICkge1xuICAgICAgICBhdHRycy5yZWZlcmVuY2VzID0ge307XG4gICAgICB9XG5cbiAgICAgIHZhciBiID0gdGhpcy5sb29wX3JlX292ZXJfYmxvY2socmUsIGJsb2NrLCBmdW5jdGlvbiggbSApIHtcblxuICAgICAgICBpZiAoIG1bMl0gJiYgbVsyXVswXSA9PSBcIjxcIiAmJiBtWzJdW21bMl0ubGVuZ3RoLTFdID09IFwiPlwiIClcbiAgICAgICAgICBtWzJdID0gbVsyXS5zdWJzdHJpbmcoIDEsIG1bMl0ubGVuZ3RoIC0gMSApO1xuXG4gICAgICAgIHZhciByZWYgPSBhdHRycy5yZWZlcmVuY2VzWyBtWzFdLnRvTG93ZXJDYXNlKCkgXSA9IHtcbiAgICAgICAgICBocmVmOiBtWzJdXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKCBtWzRdICE9PSB1bmRlZmluZWQgKVxuICAgICAgICAgIHJlZi50aXRsZSA9IG1bNF07XG4gICAgICAgIGVsc2UgaWYgKCBtWzVdICE9PSB1bmRlZmluZWQgKVxuICAgICAgICAgIHJlZi50aXRsZSA9IG1bNV07XG5cbiAgICAgIH0gKTtcblxuICAgICAgaWYgKCBiLmxlbmd0aCApXG4gICAgICAgIG5leHQudW5zaGlmdCggbWtfYmxvY2soIGIsIGJsb2NrLnRyYWlsaW5nICkgKTtcblxuICAgICAgcmV0dXJuIFtdO1xuICAgIH0sXG5cbiAgICBwYXJhOiBmdW5jdGlvbiBwYXJhKCBibG9jaywgbmV4dCApIHtcbiAgICAgIC8vIGV2ZXJ5dGhpbmcncyBhIHBhcmEhXG4gICAgICByZXR1cm4gWyBbXCJwYXJhXCJdLmNvbmNhdCggdGhpcy5wcm9jZXNzSW5saW5lKCBibG9jayApICkgXTtcbiAgICB9XG4gIH1cbn07XG5cbk1hcmtkb3duLmRpYWxlY3RzLkdydWJlci5pbmxpbmUgPSB7XG5cbiAgICBfX29uZUVsZW1lbnRfXzogZnVuY3Rpb24gb25lRWxlbWVudCggdGV4dCwgcGF0dGVybnNfb3JfcmUsIHByZXZpb3VzX25vZGVzICkge1xuICAgICAgdmFyIG0sXG4gICAgICAgICAgcmVzLFxuICAgICAgICAgIGxhc3RJbmRleCA9IDA7XG5cbiAgICAgIHBhdHRlcm5zX29yX3JlID0gcGF0dGVybnNfb3JfcmUgfHwgdGhpcy5kaWFsZWN0LmlubGluZS5fX3BhdHRlcm5zX187XG4gICAgICB2YXIgcmUgPSBuZXcgUmVnRXhwKCBcIihbXFxcXHNcXFxcU10qPykoXCIgKyAocGF0dGVybnNfb3JfcmUuc291cmNlIHx8IHBhdHRlcm5zX29yX3JlKSArIFwiKVwiICk7XG5cbiAgICAgIG0gPSByZS5leGVjKCB0ZXh0ICk7XG4gICAgICBpZiAoIW0pIHtcbiAgICAgICAgLy8gSnVzdCBib3JpbmcgdGV4dFxuICAgICAgICByZXR1cm4gWyB0ZXh0Lmxlbmd0aCwgdGV4dCBdO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoIG1bMV0gKSB7XG4gICAgICAgIC8vIFNvbWUgdW4taW50ZXJlc3RpbmcgdGV4dCBtYXRjaGVkLiBSZXR1cm4gdGhhdCBmaXJzdFxuICAgICAgICByZXR1cm4gWyBtWzFdLmxlbmd0aCwgbVsxXSBdO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVzO1xuICAgICAgaWYgKCBtWzJdIGluIHRoaXMuZGlhbGVjdC5pbmxpbmUgKSB7XG4gICAgICAgIHJlcyA9IHRoaXMuZGlhbGVjdC5pbmxpbmVbIG1bMl0gXS5jYWxsKFxuICAgICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICAgIHRleHQuc3Vic3RyKCBtLmluZGV4ICksIG0sIHByZXZpb3VzX25vZGVzIHx8IFtdICk7XG4gICAgICB9XG4gICAgICAvLyBEZWZhdWx0IGZvciBub3cgdG8gbWFrZSBkZXYgZWFzaWVyLiBqdXN0IHNsdXJwIHNwZWNpYWwgYW5kIG91dHB1dCBpdC5cbiAgICAgIHJlcyA9IHJlcyB8fCBbIG1bMl0ubGVuZ3RoLCBtWzJdIF07XG4gICAgICByZXR1cm4gcmVzO1xuICAgIH0sXG5cbiAgICBfX2NhbGxfXzogZnVuY3Rpb24gaW5saW5lKCB0ZXh0LCBwYXR0ZXJucyApIHtcblxuICAgICAgdmFyIG91dCA9IFtdLFxuICAgICAgICAgIHJlcztcblxuICAgICAgZnVuY3Rpb24gYWRkKHgpIHtcbiAgICAgICAgLy9EOnNlbGYuZGVidWcoXCIgIGFkZGluZyBvdXRwdXRcIiwgdW5ldmFsKHgpKTtcbiAgICAgICAgaWYgKCB0eXBlb2YgeCA9PSBcInN0cmluZ1wiICYmIHR5cGVvZiBvdXRbb3V0Lmxlbmd0aC0xXSA9PSBcInN0cmluZ1wiIClcbiAgICAgICAgICBvdXRbIG91dC5sZW5ndGgtMSBdICs9IHg7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICBvdXQucHVzaCh4KTtcbiAgICAgIH1cblxuICAgICAgd2hpbGUgKCB0ZXh0Lmxlbmd0aCA+IDAgKSB7XG4gICAgICAgIHJlcyA9IHRoaXMuZGlhbGVjdC5pbmxpbmUuX19vbmVFbGVtZW50X18uY2FsbCh0aGlzLCB0ZXh0LCBwYXR0ZXJucywgb3V0ICk7XG4gICAgICAgIHRleHQgPSB0ZXh0LnN1YnN0ciggcmVzLnNoaWZ0KCkgKTtcbiAgICAgICAgZm9yRWFjaChyZXMsIGFkZCApXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBvdXQ7XG4gICAgfSxcblxuICAgIC8vIFRoZXNlIGNoYXJhY3RlcnMgYXJlIGludGVyc3RpbmcgZWxzZXdoZXJlLCBzbyBoYXZlIHJ1bGVzIGZvciB0aGVtIHNvIHRoYXRcbiAgICAvLyBjaHVua3Mgb2YgcGxhaW4gdGV4dCBibG9ja3MgZG9uJ3QgaW5jbHVkZSB0aGVtXG4gICAgXCJdXCI6IGZ1bmN0aW9uICgpIHt9LFxuICAgIFwifVwiOiBmdW5jdGlvbiAoKSB7fSxcblxuICAgIF9fZXNjYXBlX18gOiAvXlxcXFxbXFxcXGBcXCpfe31cXFtcXF0oKSNcXCsuIVxcLV0vLFxuXG4gICAgXCJcXFxcXCI6IGZ1bmN0aW9uIGVzY2FwZWQoIHRleHQgKSB7XG4gICAgICAvLyBbIGxlbmd0aCBvZiBpbnB1dCBwcm9jZXNzZWQsIG5vZGUvY2hpbGRyZW4gdG8gYWRkLi4uIF1cbiAgICAgIC8vIE9ubHkgZXNhY2FwZTogXFwgYCAqIF8geyB9IFsgXSAoICkgIyAqICsgLSAuICFcbiAgICAgIGlmICggdGhpcy5kaWFsZWN0LmlubGluZS5fX2VzY2FwZV9fLmV4ZWMoIHRleHQgKSApXG4gICAgICAgIHJldHVybiBbIDIsIHRleHQuY2hhckF0KCAxICkgXTtcbiAgICAgIGVsc2VcbiAgICAgICAgLy8gTm90IGFuIGVzYWNwZVxuICAgICAgICByZXR1cm4gWyAxLCBcIlxcXFxcIiBdO1xuICAgIH0sXG5cbiAgICBcIiFbXCI6IGZ1bmN0aW9uIGltYWdlKCB0ZXh0ICkge1xuXG4gICAgICAvLyBVbmxpa2UgaW1hZ2VzLCBhbHQgdGV4dCBpcyBwbGFpbiB0ZXh0IG9ubHkuIG5vIG90aGVyIGVsZW1lbnRzIGFyZVxuICAgICAgLy8gYWxsb3dlZCBpbiB0aGVyZVxuXG4gICAgICAvLyAhW0FsdCB0ZXh0XSgvcGF0aC90by9pbWcuanBnIFwiT3B0aW9uYWwgdGl0bGVcIilcbiAgICAgIC8vICAgICAgMSAgICAgICAgICAyICAgICAgICAgICAgMyAgICAgICA0ICAgICAgICAgPC0tLSBjYXB0dXJlc1xuICAgICAgdmFyIG0gPSB0ZXh0Lm1hdGNoKCAvXiFcXFsoLio/KVxcXVsgXFx0XSpcXChbIFxcdF0qKFteXCIpXSo/KSg/OlsgXFx0XSsoW1wiJ10pKC4qPylcXDMpP1sgXFx0XSpcXCkvICk7XG5cbiAgICAgIGlmICggbSApIHtcbiAgICAgICAgaWYgKCBtWzJdICYmIG1bMl1bMF0gPT0gXCI8XCIgJiYgbVsyXVttWzJdLmxlbmd0aC0xXSA9PSBcIj5cIiApXG4gICAgICAgICAgbVsyXSA9IG1bMl0uc3Vic3RyaW5nKCAxLCBtWzJdLmxlbmd0aCAtIDEgKTtcblxuICAgICAgICBtWzJdID0gdGhpcy5kaWFsZWN0LmlubGluZS5fX2NhbGxfXy5jYWxsKCB0aGlzLCBtWzJdLCAvXFxcXC8gKVswXTtcblxuICAgICAgICB2YXIgYXR0cnMgPSB7IGFsdDogbVsxXSwgaHJlZjogbVsyXSB8fCBcIlwiIH07XG4gICAgICAgIGlmICggbVs0XSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgIGF0dHJzLnRpdGxlID0gbVs0XTtcblxuICAgICAgICByZXR1cm4gWyBtWzBdLmxlbmd0aCwgWyBcImltZ1wiLCBhdHRycyBdIF07XG4gICAgICB9XG5cbiAgICAgIC8vICFbQWx0IHRleHRdW2lkXVxuICAgICAgbSA9IHRleHQubWF0Y2goIC9eIVxcWyguKj8pXFxdWyBcXHRdKlxcWyguKj8pXFxdLyApO1xuXG4gICAgICBpZiAoIG0gKSB7XG4gICAgICAgIC8vIFdlIGNhbid0IGNoZWNrIGlmIHRoZSByZWZlcmVuY2UgaXMga25vd24gaGVyZSBhcyBpdCBsaWtlbHkgd29udCBiZVxuICAgICAgICAvLyBmb3VuZCB0aWxsIGFmdGVyLiBDaGVjayBpdCBpbiBtZCB0cmVlLT5obXRsIHRyZWUgY29udmVyc2lvblxuICAgICAgICByZXR1cm4gWyBtWzBdLmxlbmd0aCwgWyBcImltZ19yZWZcIiwgeyBhbHQ6IG1bMV0sIHJlZjogbVsyXS50b0xvd2VyQ2FzZSgpLCBvcmlnaW5hbDogbVswXSB9IF0gXTtcbiAgICAgIH1cblxuICAgICAgLy8gSnVzdCBjb25zdW1lIHRoZSAnIVsnXG4gICAgICByZXR1cm4gWyAyLCBcIiFbXCIgXTtcbiAgICB9LFxuXG4gICAgXCJbXCI6IGZ1bmN0aW9uIGxpbmsoIHRleHQgKSB7XG5cbiAgICAgIHZhciBvcmlnID0gU3RyaW5nKHRleHQpO1xuICAgICAgLy8gSW5saW5lIGNvbnRlbnQgaXMgcG9zc2libGUgaW5zaWRlIGBsaW5rIHRleHRgXG4gICAgICB2YXIgcmVzID0gTWFya2Rvd24uRGlhbGVjdEhlbHBlcnMuaW5saW5lX3VudGlsX2NoYXIuY2FsbCggdGhpcywgdGV4dC5zdWJzdHIoMSksIFwiXVwiICk7XG5cbiAgICAgIC8vIE5vIGNsb3NpbmcgJ10nIGZvdW5kLiBKdXN0IGNvbnN1bWUgdGhlIFtcbiAgICAgIGlmICggIXJlcyApIHJldHVybiBbIDEsIFwiW1wiIF07XG5cbiAgICAgIHZhciBjb25zdW1lZCA9IDEgKyByZXNbIDAgXSxcbiAgICAgICAgICBjaGlsZHJlbiA9IHJlc1sgMSBdLFxuICAgICAgICAgIGxpbmssXG4gICAgICAgICAgYXR0cnM7XG5cbiAgICAgIC8vIEF0IHRoaXMgcG9pbnQgdGhlIGZpcnN0IFsuLi5dIGhhcyBiZWVuIHBhcnNlZC4gU2VlIHdoYXQgZm9sbG93cyB0byBmaW5kXG4gICAgICAvLyBvdXQgd2hpY2gga2luZCBvZiBsaW5rIHdlIGFyZSAocmVmZXJlbmNlIG9yIGRpcmVjdCB1cmwpXG4gICAgICB0ZXh0ID0gdGV4dC5zdWJzdHIoIGNvbnN1bWVkICk7XG5cbiAgICAgIC8vIFtsaW5rIHRleHRdKC9wYXRoL3RvL2ltZy5qcGcgXCJPcHRpb25hbCB0aXRsZVwiKVxuICAgICAgLy8gICAgICAgICAgICAgICAgIDEgICAgICAgICAgICAyICAgICAgIDMgICAgICAgICA8LS0tIGNhcHR1cmVzXG4gICAgICAvLyBUaGlzIHdpbGwgY2FwdHVyZSB1cCB0byB0aGUgbGFzdCBwYXJlbiBpbiB0aGUgYmxvY2suIFdlIHRoZW4gcHVsbFxuICAgICAgLy8gYmFjayBiYXNlZCBvbiBpZiB0aGVyZSBhIG1hdGNoaW5nIG9uZXMgaW4gdGhlIHVybFxuICAgICAgLy8gICAgKFtoZXJlXSgvdXJsLyh0ZXN0KSlcbiAgICAgIC8vIFRoZSBwYXJlbnMgaGF2ZSB0byBiZSBiYWxhbmNlZFxuICAgICAgdmFyIG0gPSB0ZXh0Lm1hdGNoKCAvXlxccypcXChbIFxcdF0qKFteXCInXSopKD86WyBcXHRdKyhbXCInXSkoLio/KVxcMik/WyBcXHRdKlxcKS8gKTtcbiAgICAgIGlmICggbSApIHtcbiAgICAgICAgdmFyIHVybCA9IG1bMV07XG4gICAgICAgIGNvbnN1bWVkICs9IG1bMF0ubGVuZ3RoO1xuXG4gICAgICAgIGlmICggdXJsICYmIHVybFswXSA9PSBcIjxcIiAmJiB1cmxbdXJsLmxlbmd0aC0xXSA9PSBcIj5cIiApXG4gICAgICAgICAgdXJsID0gdXJsLnN1YnN0cmluZyggMSwgdXJsLmxlbmd0aCAtIDEgKTtcblxuICAgICAgICAvLyBJZiB0aGVyZSBpcyBhIHRpdGxlIHdlIGRvbid0IGhhdmUgdG8gd29ycnkgYWJvdXQgcGFyZW5zIGluIHRoZSB1cmxcbiAgICAgICAgaWYgKCAhbVszXSApIHtcbiAgICAgICAgICB2YXIgb3Blbl9wYXJlbnMgPSAxOyAvLyBPbmUgb3BlbiB0aGF0IGlzbid0IGluIHRoZSBjYXB0dXJlXG4gICAgICAgICAgZm9yICggdmFyIGxlbiA9IDA7IGxlbiA8IHVybC5sZW5ndGg7IGxlbisrICkge1xuICAgICAgICAgICAgc3dpdGNoICggdXJsW2xlbl0gKSB7XG4gICAgICAgICAgICBjYXNlIFwiKFwiOlxuICAgICAgICAgICAgICBvcGVuX3BhcmVucysrO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCIpXCI6XG4gICAgICAgICAgICAgIGlmICggLS1vcGVuX3BhcmVucyA9PSAwKSB7XG4gICAgICAgICAgICAgICAgY29uc3VtZWQgLT0gdXJsLmxlbmd0aCAtIGxlbjtcbiAgICAgICAgICAgICAgICB1cmwgPSB1cmwuc3Vic3RyaW5nKDAsIGxlbik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gUHJvY2VzcyBlc2NhcGVzIG9ubHlcbiAgICAgICAgdXJsID0gdGhpcy5kaWFsZWN0LmlubGluZS5fX2NhbGxfXy5jYWxsKCB0aGlzLCB1cmwsIC9cXFxcLyApWzBdO1xuXG4gICAgICAgIGF0dHJzID0geyBocmVmOiB1cmwgfHwgXCJcIiB9O1xuICAgICAgICBpZiAoIG1bM10gIT09IHVuZGVmaW5lZClcbiAgICAgICAgICBhdHRycy50aXRsZSA9IG1bM107XG5cbiAgICAgICAgbGluayA9IFsgXCJsaW5rXCIsIGF0dHJzIF0uY29uY2F0KCBjaGlsZHJlbiApO1xuICAgICAgICByZXR1cm4gWyBjb25zdW1lZCwgbGluayBdO1xuICAgICAgfVxuXG4gICAgICAvLyBbQWx0IHRleHRdW2lkXVxuICAgICAgLy8gW0FsdCB0ZXh0XSBbaWRdXG4gICAgICBtID0gdGV4dC5tYXRjaCggL15cXHMqXFxbKC4qPylcXF0vICk7XG5cbiAgICAgIGlmICggbSApIHtcblxuICAgICAgICBjb25zdW1lZCArPSBtWyAwIF0ubGVuZ3RoO1xuXG4gICAgICAgIC8vIFtsaW5rc11bXSB1c2VzIGxpbmtzIGFzIGl0cyByZWZlcmVuY2VcbiAgICAgICAgYXR0cnMgPSB7IHJlZjogKCBtWyAxIF0gfHwgU3RyaW5nKGNoaWxkcmVuKSApLnRvTG93ZXJDYXNlKCksICBvcmlnaW5hbDogb3JpZy5zdWJzdHIoIDAsIGNvbnN1bWVkICkgfTtcblxuICAgICAgICBsaW5rID0gWyBcImxpbmtfcmVmXCIsIGF0dHJzIF0uY29uY2F0KCBjaGlsZHJlbiApO1xuXG4gICAgICAgIC8vIFdlIGNhbid0IGNoZWNrIGlmIHRoZSByZWZlcmVuY2UgaXMga25vd24gaGVyZSBhcyBpdCBsaWtlbHkgd29udCBiZVxuICAgICAgICAvLyBmb3VuZCB0aWxsIGFmdGVyLiBDaGVjayBpdCBpbiBtZCB0cmVlLT5obXRsIHRyZWUgY29udmVyc2lvbi5cbiAgICAgICAgLy8gU3RvcmUgdGhlIG9yaWdpbmFsIHNvIHRoYXQgY29udmVyc2lvbiBjYW4gcmV2ZXJ0IGlmIHRoZSByZWYgaXNuJ3QgZm91bmQuXG4gICAgICAgIHJldHVybiBbIGNvbnN1bWVkLCBsaW5rIF07XG4gICAgICB9XG5cbiAgICAgIC8vIFtpZF1cbiAgICAgIC8vIE9ubHkgaWYgaWQgaXMgcGxhaW4gKG5vIGZvcm1hdHRpbmcuKVxuICAgICAgaWYgKCBjaGlsZHJlbi5sZW5ndGggPT0gMSAmJiB0eXBlb2YgY2hpbGRyZW5bMF0gPT0gXCJzdHJpbmdcIiApIHtcblxuICAgICAgICBhdHRycyA9IHsgcmVmOiBjaGlsZHJlblswXS50b0xvd2VyQ2FzZSgpLCAgb3JpZ2luYWw6IG9yaWcuc3Vic3RyKCAwLCBjb25zdW1lZCApIH07XG4gICAgICAgIGxpbmsgPSBbIFwibGlua19yZWZcIiwgYXR0cnMsIGNoaWxkcmVuWzBdIF07XG4gICAgICAgIHJldHVybiBbIGNvbnN1bWVkLCBsaW5rIF07XG4gICAgICB9XG5cbiAgICAgIC8vIEp1c3QgY29uc3VtZSB0aGUgXCJbXCJcbiAgICAgIHJldHVybiBbIDEsIFwiW1wiIF07XG4gICAgfSxcblxuXG4gICAgXCI8XCI6IGZ1bmN0aW9uIGF1dG9MaW5rKCB0ZXh0ICkge1xuICAgICAgdmFyIG07XG5cbiAgICAgIGlmICggKCBtID0gdGV4dC5tYXRjaCggL148KD86KChodHRwcz98ZnRwfG1haWx0byk6W14+XSspfCguKj9ALio/XFwuW2EtekEtWl0rKSk+LyApICkgIT0gbnVsbCApIHtcbiAgICAgICAgaWYgKCBtWzNdICkge1xuICAgICAgICAgIHJldHVybiBbIG1bMF0ubGVuZ3RoLCBbIFwibGlua1wiLCB7IGhyZWY6IFwibWFpbHRvOlwiICsgbVszXSB9LCBtWzNdIF0gXTtcblxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCBtWzJdID09IFwibWFpbHRvXCIgKSB7XG4gICAgICAgICAgcmV0dXJuIFsgbVswXS5sZW5ndGgsIFsgXCJsaW5rXCIsIHsgaHJlZjogbVsxXSB9LCBtWzFdLnN1YnN0cihcIm1haWx0bzpcIi5sZW5ndGggKSBdIF07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICAgIHJldHVybiBbIG1bMF0ubGVuZ3RoLCBbIFwibGlua1wiLCB7IGhyZWY6IG1bMV0gfSwgbVsxXSBdIF07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBbIDEsIFwiPFwiIF07XG4gICAgfSxcblxuICAgIFwiYFwiOiBmdW5jdGlvbiBpbmxpbmVDb2RlKCB0ZXh0ICkge1xuICAgICAgLy8gSW5saW5lIGNvZGUgYmxvY2suIGFzIG1hbnkgYmFja3RpY2tzIGFzIHlvdSBsaWtlIHRvIHN0YXJ0IGl0XG4gICAgICAvLyBBbHdheXMgc2tpcCBvdmVyIHRoZSBvcGVuaW5nIHRpY2tzLlxuICAgICAgdmFyIG0gPSB0ZXh0Lm1hdGNoKCAvKGArKSgoW1xcc1xcU10qPylcXDEpLyApO1xuXG4gICAgICBpZiAoIG0gJiYgbVsyXSApXG4gICAgICAgIHJldHVybiBbIG1bMV0ubGVuZ3RoICsgbVsyXS5sZW5ndGgsIFsgXCJpbmxpbmVjb2RlXCIsIG1bM10gXSBdO1xuICAgICAgZWxzZSB7XG4gICAgICAgIC8vIFRPRE86IE5vIG1hdGNoaW5nIGVuZCBjb2RlIGZvdW5kIC0gd2FybiFcbiAgICAgICAgcmV0dXJuIFsgMSwgXCJgXCIgXTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCIgIFxcblwiOiBmdW5jdGlvbiBsaW5lQnJlYWsoIHRleHQgKSB7XG4gICAgICByZXR1cm4gWyAzLCBbIFwibGluZWJyZWFrXCIgXSBdO1xuICAgIH1cblxufTtcblxuLy8gTWV0YSBIZWxwZXIvZ2VuZXJhdG9yIG1ldGhvZCBmb3IgZW0gYW5kIHN0cm9uZyBoYW5kbGluZ1xuZnVuY3Rpb24gc3Ryb25nX2VtKCB0YWcsIG1kICkge1xuXG4gIHZhciBzdGF0ZV9zbG90ID0gdGFnICsgXCJfc3RhdGVcIixcbiAgICAgIG90aGVyX3Nsb3QgPSB0YWcgPT0gXCJzdHJvbmdcIiA/IFwiZW1fc3RhdGVcIiA6IFwic3Ryb25nX3N0YXRlXCI7XG5cbiAgZnVuY3Rpb24gQ2xvc2VUYWcobGVuKSB7XG4gICAgdGhpcy5sZW5fYWZ0ZXIgPSBsZW47XG4gICAgdGhpcy5uYW1lID0gXCJjbG9zZV9cIiArIG1kO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICggdGV4dCwgb3JpZ19tYXRjaCApIHtcblxuICAgIGlmICggdGhpc1tzdGF0ZV9zbG90XVswXSA9PSBtZCApIHtcbiAgICAgIC8vIE1vc3QgcmVjZW50IGVtIGlzIG9mIHRoaXMgdHlwZVxuICAgICAgLy9EOnRoaXMuZGVidWcoXCJjbG9zaW5nXCIsIG1kKTtcbiAgICAgIHRoaXNbc3RhdGVfc2xvdF0uc2hpZnQoKTtcblxuICAgICAgLy8gXCJDb25zdW1lXCIgZXZlcnl0aGluZyB0byBnbyBiYWNrIHRvIHRoZSByZWNydXNpb24gaW4gdGhlIGVsc2UtYmxvY2sgYmVsb3dcbiAgICAgIHJldHVyblsgdGV4dC5sZW5ndGgsIG5ldyBDbG9zZVRhZyh0ZXh0Lmxlbmd0aC1tZC5sZW5ndGgpIF07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgLy8gU3RvcmUgYSBjbG9uZSBvZiB0aGUgZW0vc3Ryb25nIHN0YXRlc1xuICAgICAgdmFyIG90aGVyID0gdGhpc1tvdGhlcl9zbG90XS5zbGljZSgpLFxuICAgICAgICAgIHN0YXRlID0gdGhpc1tzdGF0ZV9zbG90XS5zbGljZSgpO1xuXG4gICAgICB0aGlzW3N0YXRlX3Nsb3RdLnVuc2hpZnQobWQpO1xuXG4gICAgICAvL0Q6dGhpcy5kZWJ1Z19pbmRlbnQgKz0gXCIgIFwiO1xuXG4gICAgICAvLyBSZWN1cnNlXG4gICAgICB2YXIgcmVzID0gdGhpcy5wcm9jZXNzSW5saW5lKCB0ZXh0LnN1YnN0ciggbWQubGVuZ3RoICkgKTtcbiAgICAgIC8vRDp0aGlzLmRlYnVnX2luZGVudCA9IHRoaXMuZGVidWdfaW5kZW50LnN1YnN0cigyKTtcblxuICAgICAgdmFyIGxhc3QgPSByZXNbcmVzLmxlbmd0aCAtIDFdO1xuXG4gICAgICAvL0Q6dGhpcy5kZWJ1ZyhcInByb2Nlc3NJbmxpbmUgZnJvbVwiLCB0YWcgKyBcIjogXCIsIHVuZXZhbCggcmVzICkgKTtcblxuICAgICAgdmFyIGNoZWNrID0gdGhpc1tzdGF0ZV9zbG90XS5zaGlmdCgpO1xuICAgICAgaWYgKCBsYXN0IGluc3RhbmNlb2YgQ2xvc2VUYWcgKSB7XG4gICAgICAgIHJlcy5wb3AoKTtcbiAgICAgICAgLy8gV2UgbWF0Y2hlZCEgSHV6emFoLlxuICAgICAgICB2YXIgY29uc3VtZWQgPSB0ZXh0Lmxlbmd0aCAtIGxhc3QubGVuX2FmdGVyO1xuICAgICAgICByZXR1cm4gWyBjb25zdW1lZCwgWyB0YWcgXS5jb25jYXQocmVzKSBdO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIC8vIFJlc3RvcmUgdGhlIHN0YXRlIG9mIHRoZSBvdGhlciBraW5kLiBXZSBtaWdodCBoYXZlIG1pc3Rha2VubHkgY2xvc2VkIGl0LlxuICAgICAgICB0aGlzW290aGVyX3Nsb3RdID0gb3RoZXI7XG4gICAgICAgIHRoaXNbc3RhdGVfc2xvdF0gPSBzdGF0ZTtcblxuICAgICAgICAvLyBXZSBjYW4ndCByZXVzZSB0aGUgcHJvY2Vzc2VkIHJlc3VsdCBhcyBpdCBjb3VsZCBoYXZlIHdyb25nIHBhcnNpbmcgY29udGV4dHMgaW4gaXQuXG4gICAgICAgIHJldHVybiBbIG1kLmxlbmd0aCwgbWQgXTtcbiAgICAgIH1cbiAgICB9XG4gIH07IC8vIEVuZCByZXR1cm5lZCBmdW5jdGlvblxufVxuXG5NYXJrZG93bi5kaWFsZWN0cy5HcnViZXIuaW5saW5lW1wiKipcIl0gPSBzdHJvbmdfZW0oXCJzdHJvbmdcIiwgXCIqKlwiKTtcbk1hcmtkb3duLmRpYWxlY3RzLkdydWJlci5pbmxpbmVbXCJfX1wiXSA9IHN0cm9uZ19lbShcInN0cm9uZ1wiLCBcIl9fXCIpO1xuTWFya2Rvd24uZGlhbGVjdHMuR3J1YmVyLmlubGluZVtcIipcIl0gID0gc3Ryb25nX2VtKFwiZW1cIiwgXCIqXCIpO1xuTWFya2Rvd24uZGlhbGVjdHMuR3J1YmVyLmlubGluZVtcIl9cIl0gID0gc3Ryb25nX2VtKFwiZW1cIiwgXCJfXCIpO1xuXG5cbi8vIEJ1aWxkIGRlZmF1bHQgb3JkZXIgZnJvbSBpbnNlcnRpb24gb3JkZXIuXG5NYXJrZG93bi5idWlsZEJsb2NrT3JkZXIgPSBmdW5jdGlvbihkKSB7XG4gIHZhciBvcmQgPSBbXTtcbiAgZm9yICggdmFyIGkgaW4gZCApIHtcbiAgICBpZiAoIGkgPT0gXCJfX29yZGVyX19cIiB8fCBpID09IFwiX19jYWxsX19cIiApIGNvbnRpbnVlO1xuICAgIG9yZC5wdXNoKCBpICk7XG4gIH1cbiAgZC5fX29yZGVyX18gPSBvcmQ7XG59O1xuXG4vLyBCdWlsZCBwYXR0ZXJucyBmb3IgaW5saW5lIG1hdGNoZXJcbk1hcmtkb3duLmJ1aWxkSW5saW5lUGF0dGVybnMgPSBmdW5jdGlvbihkKSB7XG4gIHZhciBwYXR0ZXJucyA9IFtdO1xuXG4gIGZvciAoIHZhciBpIGluIGQgKSB7XG4gICAgLy8gX19mb29fXyBpcyByZXNlcnZlZCBhbmQgbm90IGEgcGF0dGVyblxuICAgIGlmICggaS5tYXRjaCggL15fXy4qX18kLykgKSBjb250aW51ZTtcbiAgICB2YXIgbCA9IGkucmVwbGFjZSggLyhbXFxcXC4qKz98KClcXFtcXF17fV0pL2csIFwiXFxcXCQxXCIgKVxuICAgICAgICAgICAgIC5yZXBsYWNlKCAvXFxuLywgXCJcXFxcblwiICk7XG4gICAgcGF0dGVybnMucHVzaCggaS5sZW5ndGggPT0gMSA/IGwgOiBcIig/OlwiICsgbCArIFwiKVwiICk7XG4gIH1cblxuICBwYXR0ZXJucyA9IHBhdHRlcm5zLmpvaW4oXCJ8XCIpO1xuICBkLl9fcGF0dGVybnNfXyA9IHBhdHRlcm5zO1xuICAvL3ByaW50KFwicGF0dGVybnM6XCIsIHVuZXZhbCggcGF0dGVybnMgKSApO1xuXG4gIHZhciBmbiA9IGQuX19jYWxsX187XG4gIGQuX19jYWxsX18gPSBmdW5jdGlvbih0ZXh0LCBwYXR0ZXJuKSB7XG4gICAgaWYgKCBwYXR0ZXJuICE9IHVuZGVmaW5lZCApIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoaXMsIHRleHQsIHBhdHRlcm4pO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhpcywgdGV4dCwgcGF0dGVybnMpO1xuICAgIH1cbiAgfTtcbn07XG5cbk1hcmtkb3duLkRpYWxlY3RIZWxwZXJzID0ge307XG5NYXJrZG93bi5EaWFsZWN0SGVscGVycy5pbmxpbmVfdW50aWxfY2hhciA9IGZ1bmN0aW9uKCB0ZXh0LCB3YW50ICkge1xuICB2YXIgY29uc3VtZWQgPSAwLFxuICAgICAgbm9kZXMgPSBbXTtcblxuICB3aGlsZSAoIHRydWUgKSB7XG4gICAgaWYgKCB0ZXh0LmNoYXJBdCggY29uc3VtZWQgKSA9PSB3YW50ICkge1xuICAgICAgLy8gRm91bmQgdGhlIGNoYXJhY3RlciB3ZSB3ZXJlIGxvb2tpbmcgZm9yXG4gICAgICBjb25zdW1lZCsrO1xuICAgICAgcmV0dXJuIFsgY29uc3VtZWQsIG5vZGVzIF07XG4gICAgfVxuXG4gICAgaWYgKCBjb25zdW1lZCA+PSB0ZXh0Lmxlbmd0aCApIHtcbiAgICAgIC8vIE5vIGNsb3NpbmcgY2hhciBmb3VuZC4gQWJvcnQuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgcmVzID0gdGhpcy5kaWFsZWN0LmlubGluZS5fX29uZUVsZW1lbnRfXy5jYWxsKHRoaXMsIHRleHQuc3Vic3RyKCBjb25zdW1lZCApICk7XG4gICAgY29uc3VtZWQgKz0gcmVzWyAwIF07XG4gICAgLy8gQWRkIGFueSByZXR1cm5lZCBub2Rlcy5cbiAgICBub2Rlcy5wdXNoLmFwcGx5KCBub2RlcywgcmVzLnNsaWNlKCAxICkgKTtcbiAgfVxufVxuXG4vLyBIZWxwZXIgZnVuY3Rpb24gdG8gbWFrZSBzdWItY2xhc3NpbmcgYSBkaWFsZWN0IGVhc2llclxuTWFya2Rvd24uc3ViY2xhc3NEaWFsZWN0ID0gZnVuY3Rpb24oIGQgKSB7XG4gIGZ1bmN0aW9uIEJsb2NrKCkge31cbiAgQmxvY2sucHJvdG90eXBlID0gZC5ibG9jaztcbiAgZnVuY3Rpb24gSW5saW5lKCkge31cbiAgSW5saW5lLnByb3RvdHlwZSA9IGQuaW5saW5lO1xuXG4gIHJldHVybiB7IGJsb2NrOiBuZXcgQmxvY2soKSwgaW5saW5lOiBuZXcgSW5saW5lKCkgfTtcbn07XG5cbk1hcmtkb3duLmJ1aWxkQmxvY2tPcmRlciAoIE1hcmtkb3duLmRpYWxlY3RzLkdydWJlci5ibG9jayApO1xuTWFya2Rvd24uYnVpbGRJbmxpbmVQYXR0ZXJucyggTWFya2Rvd24uZGlhbGVjdHMuR3J1YmVyLmlubGluZSApO1xuXG5NYXJrZG93bi5kaWFsZWN0cy5NYXJ1a3UgPSBNYXJrZG93bi5zdWJjbGFzc0RpYWxlY3QoIE1hcmtkb3duLmRpYWxlY3RzLkdydWJlciApO1xuXG5NYXJrZG93bi5kaWFsZWN0cy5NYXJ1a3UucHJvY2Vzc01ldGFIYXNoID0gZnVuY3Rpb24gcHJvY2Vzc01ldGFIYXNoKCBtZXRhX3N0cmluZyApIHtcbiAgdmFyIG1ldGEgPSBzcGxpdF9tZXRhX2hhc2goIG1ldGFfc3RyaW5nICksXG4gICAgICBhdHRyID0ge307XG5cbiAgZm9yICggdmFyIGkgPSAwOyBpIDwgbWV0YS5sZW5ndGg7ICsraSApIHtcbiAgICAvLyBpZDogI2Zvb1xuICAgIGlmICggL14jLy50ZXN0KCBtZXRhWyBpIF0gKSApIHtcbiAgICAgIGF0dHIuaWQgPSBtZXRhWyBpIF0uc3Vic3RyaW5nKCAxICk7XG4gICAgfVxuICAgIC8vIGNsYXNzOiAuZm9vXG4gICAgZWxzZSBpZiAoIC9eXFwuLy50ZXN0KCBtZXRhWyBpIF0gKSApIHtcbiAgICAgIC8vIGlmIGNsYXNzIGFscmVhZHkgZXhpc3RzLCBhcHBlbmQgdGhlIG5ldyBvbmVcbiAgICAgIGlmICggYXR0cltcImNsYXNzXCJdICkge1xuICAgICAgICBhdHRyW1wiY2xhc3NcIl0gPSBhdHRyW1wiY2xhc3NcIl0gKyBtZXRhWyBpIF0ucmVwbGFjZSggLy4vLCBcIiBcIiApO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGF0dHJbXCJjbGFzc1wiXSA9IG1ldGFbIGkgXS5zdWJzdHJpbmcoIDEgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gYXR0cmlidXRlOiBmb289YmFyXG4gICAgZWxzZSBpZiAoIC9cXD0vLnRlc3QoIG1ldGFbIGkgXSApICkge1xuICAgICAgdmFyIHMgPSBtZXRhWyBpIF0uc3BsaXQoIC9cXD0vICk7XG4gICAgICBhdHRyWyBzWyAwIF0gXSA9IHNbIDEgXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYXR0cjtcbn1cblxuZnVuY3Rpb24gc3BsaXRfbWV0YV9oYXNoKCBtZXRhX3N0cmluZyApIHtcbiAgdmFyIG1ldGEgPSBtZXRhX3N0cmluZy5zcGxpdCggXCJcIiApLFxuICAgICAgcGFydHMgPSBbIFwiXCIgXSxcbiAgICAgIGluX3F1b3RlcyA9IGZhbHNlO1xuXG4gIHdoaWxlICggbWV0YS5sZW5ndGggKSB7XG4gICAgdmFyIGxldHRlciA9IG1ldGEuc2hpZnQoKTtcbiAgICBzd2l0Y2ggKCBsZXR0ZXIgKSB7XG4gICAgICBjYXNlIFwiIFwiIDpcbiAgICAgICAgLy8gaWYgd2UncmUgaW4gYSBxdW90ZWQgc2VjdGlvbiwga2VlcCBpdFxuICAgICAgICBpZiAoIGluX3F1b3RlcyApIHtcbiAgICAgICAgICBwYXJ0c1sgcGFydHMubGVuZ3RoIC0gMSBdICs9IGxldHRlcjtcbiAgICAgICAgfVxuICAgICAgICAvLyBvdGhlcndpc2UgbWFrZSBhIG5ldyBwYXJ0XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHBhcnRzLnB1c2goIFwiXCIgKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCInXCIgOlxuICAgICAgY2FzZSAnXCInIDpcbiAgICAgICAgLy8gcmV2ZXJzZSB0aGUgcXVvdGVzIGFuZCBtb3ZlIHN0cmFpZ2h0IG9uXG4gICAgICAgIGluX3F1b3RlcyA9ICFpbl9xdW90ZXM7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIlxcXFxcIiA6XG4gICAgICAgIC8vIHNoaWZ0IG9mZiB0aGUgbmV4dCBsZXR0ZXIgdG8gYmUgdXNlZCBzdHJhaWdodCBhd2F5LlxuICAgICAgICAvLyBpdCB3YXMgZXNjYXBlZCBzbyB3ZSdsbCBrZWVwIGl0IHdoYXRldmVyIGl0IGlzXG4gICAgICAgIGxldHRlciA9IG1ldGEuc2hpZnQoKTtcbiAgICAgIGRlZmF1bHQgOlxuICAgICAgICBwYXJ0c1sgcGFydHMubGVuZ3RoIC0gMSBdICs9IGxldHRlcjtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhcnRzO1xufVxuXG5NYXJrZG93bi5kaWFsZWN0cy5NYXJ1a3UuYmxvY2suZG9jdW1lbnRfbWV0YSA9IGZ1bmN0aW9uIGRvY3VtZW50X21ldGEoIGJsb2NrLCBuZXh0ICkge1xuICAvLyB3ZSdyZSBvbmx5IGludGVyZXN0ZWQgaW4gdGhlIGZpcnN0IGJsb2NrXG4gIGlmICggYmxvY2subGluZU51bWJlciA+IDEgKSByZXR1cm4gdW5kZWZpbmVkO1xuXG4gIC8vIGRvY3VtZW50X21ldGEgYmxvY2tzIGNvbnNpc3Qgb2Ygb25lIG9yIG1vcmUgbGluZXMgb2YgYEtleTogVmFsdWVcXG5gXG4gIGlmICggISBibG9jay5tYXRjaCggL14oPzpcXHcrOi4qXFxuKSpcXHcrOi4qJC8gKSApIHJldHVybiB1bmRlZmluZWQ7XG5cbiAgLy8gbWFrZSBhbiBhdHRyaWJ1dGUgbm9kZSBpZiBpdCBkb2Vzbid0IGV4aXN0XG4gIGlmICggIWV4dHJhY3RfYXR0ciggdGhpcy50cmVlICkgKSB7XG4gICAgdGhpcy50cmVlLnNwbGljZSggMSwgMCwge30gKTtcbiAgfVxuXG4gIHZhciBwYWlycyA9IGJsb2NrLnNwbGl0KCAvXFxuLyApO1xuICBmb3IgKCBwIGluIHBhaXJzICkge1xuICAgIHZhciBtID0gcGFpcnNbIHAgXS5tYXRjaCggLyhcXHcrKTpcXHMqKC4qKSQvICksXG4gICAgICAgIGtleSA9IG1bIDEgXS50b0xvd2VyQ2FzZSgpLFxuICAgICAgICB2YWx1ZSA9IG1bIDIgXTtcblxuICAgIHRoaXMudHJlZVsgMSBdWyBrZXkgXSA9IHZhbHVlO1xuICB9XG5cbiAgLy8gZG9jdW1lbnRfbWV0YSBwcm9kdWNlcyBubyBjb250ZW50IVxuICByZXR1cm4gW107XG59O1xuXG5NYXJrZG93bi5kaWFsZWN0cy5NYXJ1a3UuYmxvY2suYmxvY2tfbWV0YSA9IGZ1bmN0aW9uIGJsb2NrX21ldGEoIGJsb2NrLCBuZXh0ICkge1xuICAvLyBjaGVjayBpZiB0aGUgbGFzdCBsaW5lIG9mIHRoZSBibG9jayBpcyBhbiBtZXRhIGhhc2hcbiAgdmFyIG0gPSBibG9jay5tYXRjaCggLyhefFxcbikgezAsM31cXHs6XFxzKigoPzpcXFxcXFx9fFteXFx9XSkqKVxccypcXH0kLyApO1xuICBpZiAoICFtICkgcmV0dXJuIHVuZGVmaW5lZDtcblxuICAvLyBwcm9jZXNzIHRoZSBtZXRhIGhhc2hcbiAgdmFyIGF0dHIgPSB0aGlzLmRpYWxlY3QucHJvY2Vzc01ldGFIYXNoKCBtWyAyIF0gKTtcblxuICB2YXIgaGFzaDtcblxuICAvLyBpZiB3ZSBtYXRjaGVkIF4gdGhlbiB3ZSBuZWVkIHRvIGFwcGx5IG1ldGEgdG8gdGhlIHByZXZpb3VzIGJsb2NrXG4gIGlmICggbVsgMSBdID09PSBcIlwiICkge1xuICAgIHZhciBub2RlID0gdGhpcy50cmVlWyB0aGlzLnRyZWUubGVuZ3RoIC0gMSBdO1xuICAgIGhhc2ggPSBleHRyYWN0X2F0dHIoIG5vZGUgKTtcblxuICAgIC8vIGlmIHRoZSBub2RlIGlzIGEgc3RyaW5nIChyYXRoZXIgdGhhbiBKc29uTUwpLCBiYWlsXG4gICAgaWYgKCB0eXBlb2Ygbm9kZSA9PT0gXCJzdHJpbmdcIiApIHJldHVybiB1bmRlZmluZWQ7XG5cbiAgICAvLyBjcmVhdGUgdGhlIGF0dHJpYnV0ZSBoYXNoIGlmIGl0IGRvZXNuJ3QgZXhpc3RcbiAgICBpZiAoICFoYXNoICkge1xuICAgICAgaGFzaCA9IHt9O1xuICAgICAgbm9kZS5zcGxpY2UoIDEsIDAsIGhhc2ggKTtcbiAgICB9XG5cbiAgICAvLyBhZGQgdGhlIGF0dHJpYnV0ZXMgaW5cbiAgICBmb3IgKCBhIGluIGF0dHIgKSB7XG4gICAgICBoYXNoWyBhIF0gPSBhdHRyWyBhIF07XG4gICAgfVxuXG4gICAgLy8gcmV0dXJuIG5vdGhpbmcgc28gdGhlIG1ldGEgaGFzaCBpcyByZW1vdmVkXG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgLy8gcHVsbCB0aGUgbWV0YSBoYXNoIG9mZiB0aGUgYmxvY2sgYW5kIHByb2Nlc3Mgd2hhdCdzIGxlZnRcbiAgdmFyIGIgPSBibG9jay5yZXBsYWNlKCAvXFxuLiokLywgXCJcIiApLFxuICAgICAgcmVzdWx0ID0gdGhpcy5wcm9jZXNzQmxvY2soIGIsIFtdICk7XG5cbiAgLy8gZ2V0IG9yIG1ha2UgdGhlIGF0dHJpYnV0ZXMgaGFzaFxuICBoYXNoID0gZXh0cmFjdF9hdHRyKCByZXN1bHRbIDAgXSApO1xuICBpZiAoICFoYXNoICkge1xuICAgIGhhc2ggPSB7fTtcbiAgICByZXN1bHRbIDAgXS5zcGxpY2UoIDEsIDAsIGhhc2ggKTtcbiAgfVxuXG4gIC8vIGF0dGFjaCB0aGUgYXR0cmlidXRlcyB0byB0aGUgYmxvY2tcbiAgZm9yICggYSBpbiBhdHRyICkge1xuICAgIGhhc2hbIGEgXSA9IGF0dHJbIGEgXTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5NYXJrZG93bi5kaWFsZWN0cy5NYXJ1a3UuYmxvY2suZGVmaW5pdGlvbl9saXN0ID0gZnVuY3Rpb24gZGVmaW5pdGlvbl9saXN0KCBibG9jaywgbmV4dCApIHtcbiAgLy8gb25lIG9yIG1vcmUgdGVybXMgZm9sbG93ZWQgYnkgb25lIG9yIG1vcmUgZGVmaW5pdGlvbnMsIGluIGEgc2luZ2xlIGJsb2NrXG4gIHZhciB0aWdodCA9IC9eKCg/OlteXFxzOl0uKlxcbikrKTpcXHMrKFtcXHNcXFNdKykkLyxcbiAgICAgIGxpc3QgPSBbIFwiZGxcIiBdLFxuICAgICAgaSwgbTtcblxuICAvLyBzZWUgaWYgd2UncmUgZGVhbGluZyB3aXRoIGEgdGlnaHQgb3IgbG9vc2UgYmxvY2tcbiAgaWYgKCAoIG0gPSBibG9jay5tYXRjaCggdGlnaHQgKSApICkge1xuICAgIC8vIHB1bGwgc3Vic2VxdWVudCB0aWdodCBETCBibG9ja3Mgb3V0IG9mIGBuZXh0YFxuICAgIHZhciBibG9ja3MgPSBbIGJsb2NrIF07XG4gICAgd2hpbGUgKCBuZXh0Lmxlbmd0aCAmJiB0aWdodC5leGVjKCBuZXh0WyAwIF0gKSApIHtcbiAgICAgIGJsb2Nrcy5wdXNoKCBuZXh0LnNoaWZ0KCkgKTtcbiAgICB9XG5cbiAgICBmb3IgKCB2YXIgYiA9IDA7IGIgPCBibG9ja3MubGVuZ3RoOyArK2IgKSB7XG4gICAgICB2YXIgbSA9IGJsb2Nrc1sgYiBdLm1hdGNoKCB0aWdodCApLFxuICAgICAgICAgIHRlcm1zID0gbVsgMSBdLnJlcGxhY2UoIC9cXG4kLywgXCJcIiApLnNwbGl0KCAvXFxuLyApLFxuICAgICAgICAgIGRlZm5zID0gbVsgMiBdLnNwbGl0KCAvXFxuOlxccysvICk7XG5cbiAgICAgIC8vIHByaW50KCB1bmV2YWwoIG0gKSApO1xuXG4gICAgICBmb3IgKCBpID0gMDsgaSA8IHRlcm1zLmxlbmd0aDsgKytpICkge1xuICAgICAgICBsaXN0LnB1c2goIFsgXCJkdFwiLCB0ZXJtc1sgaSBdIF0gKTtcbiAgICAgIH1cblxuICAgICAgZm9yICggaSA9IDA7IGkgPCBkZWZucy5sZW5ndGg7ICsraSApIHtcbiAgICAgICAgLy8gcnVuIGlubGluZSBwcm9jZXNzaW5nIG92ZXIgdGhlIGRlZmluaXRpb25cbiAgICAgICAgbGlzdC5wdXNoKCBbIFwiZGRcIiBdLmNvbmNhdCggdGhpcy5wcm9jZXNzSW5saW5lKCBkZWZuc1sgaSBdLnJlcGxhY2UoIC8oXFxuKVxccysvLCBcIiQxXCIgKSApICkgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZWxzZSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIHJldHVybiBbIGxpc3QgXTtcbn07XG5cbi8vIHNwbGl0cyBvbiB1bmVzY2FwZWQgaW5zdGFuY2VzIG9mIEBjaC4gSWYgQGNoIGlzIG5vdCBhIGNoYXJhY3RlciB0aGUgcmVzdWx0XG4vLyBjYW4gYmUgdW5wcmVkaWN0YWJsZVxuXG5NYXJrZG93bi5kaWFsZWN0cy5NYXJ1a3UuYmxvY2sudGFibGUgPSBmdW5jdGlvbiB0YWJsZSAoYmxvY2ssIG5leHQpIHtcblxuICAgIHZhciBfc3BsaXRfb25fdW5lc2NhcGVkID0gZnVuY3Rpb24ocywgY2gpIHtcbiAgICAgICAgY2ggPSBjaCB8fCAnXFxcXHMnO1xuICAgICAgICBpZiAoY2gubWF0Y2goL15bXFxcXHxcXFtcXF17fT8qLiteJF0kLykpIHsgY2ggPSAnXFxcXCcgKyBjaDsgfVxuICAgICAgICB2YXIgcmVzID0gWyBdLFxuICAgICAgICAgICAgciA9IG5ldyBSZWdFeHAoJ14oKD86XFxcXFxcXFwufFteXFxcXFxcXFwnICsgY2ggKyAnXSkqKScgKyBjaCArICcoLiopJyksXG4gICAgICAgICAgICBtO1xuICAgICAgICB3aGlsZShtID0gcy5tYXRjaChyKSkge1xuICAgICAgICAgICAgcmVzLnB1c2gobVsxXSk7XG4gICAgICAgICAgICBzID0gbVsyXTtcbiAgICAgICAgfVxuICAgICAgICByZXMucHVzaChzKTtcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG5cbiAgICB2YXIgbGVhZGluZ19waXBlID0gL14gezAsM31cXHwoLispXFxuIHswLDN9XFx8XFxzKihbXFwtOl0rW1xcLXwgOl0qKVxcbigoPzpcXHMqXFx8LiooPzpcXG58JCkpKikoPz1cXG58JCkvLFxuICAgICAgICAvLyBmaW5kIGF0IGxlYXN0IGFuIHVuZXNjYXBlZCBwaXBlIGluIGVhY2ggbGluZVxuICAgICAgICBub19sZWFkaW5nX3BpcGUgPSAvXiB7MCwzfShcXFMoPzpcXFxcLnxbXlxcXFx8XSkqXFx8LiopXFxuIHswLDN9KFtcXC06XStcXHMqXFx8W1xcLXwgOl0qKVxcbigoPzooPzpcXFxcLnxbXlxcXFx8XSkqXFx8LiooPzpcXG58JCkpKikoPz1cXG58JCkvLFxuICAgICAgICBpLCBtO1xuICAgIGlmIChtID0gYmxvY2subWF0Y2gobGVhZGluZ19waXBlKSkge1xuICAgICAgICAvLyByZW1vdmUgbGVhZGluZyBwaXBlcyBpbiBjb250ZW50c1xuICAgICAgICAvLyAoaGVhZGVyIGFuZCBob3Jpem9udGFsIHJ1bGUgYWxyZWFkeSBoYXZlIHRoZSBsZWFkaW5nIHBpcGUgbGVmdCBvdXQpXG4gICAgICAgIG1bM10gPSBtWzNdLnJlcGxhY2UoL15cXHMqXFx8L2dtLCAnJyk7XG4gICAgfSBlbHNlIGlmICghICggbSA9IGJsb2NrLm1hdGNoKG5vX2xlYWRpbmdfcGlwZSkpKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgdmFyIHRhYmxlID0gWyBcInRhYmxlXCIsIFsgXCJ0aGVhZFwiLCBbIFwidHJcIiBdIF0sIFsgXCJ0Ym9keVwiIF0gXTtcblxuICAgIC8vIHJlbW92ZSB0cmFpbGluZyBwaXBlcywgdGhlbiBzcGxpdCBvbiBwaXBlc1xuICAgIC8vIChubyBlc2NhcGVkIHBpcGVzIGFyZSBhbGxvd2VkIGluIGhvcml6b250YWwgcnVsZSlcbiAgICBtWzJdID0gbVsyXS5yZXBsYWNlKC9cXHxcXHMqJC8sICcnKS5zcGxpdCgnfCcpO1xuXG4gICAgLy8gcHJvY2VzcyBhbGlnbm1lbnRcbiAgICB2YXIgaHRtbF9hdHRycyA9IFsgXTtcbiAgICBmb3JFYWNoIChtWzJdLCBmdW5jdGlvbiAocykge1xuICAgICAgICBpZiAocy5tYXRjaCgvXlxccyotKzpcXHMqJC8pKSAgICAgICBodG1sX2F0dHJzLnB1c2goe2FsaWduOiBcInJpZ2h0XCJ9KTtcbiAgICAgICAgZWxzZSBpZiAocy5tYXRjaCgvXlxccyo6LStcXHMqJC8pKSAgaHRtbF9hdHRycy5wdXNoKHthbGlnbjogXCJsZWZ0XCJ9KTtcbiAgICAgICAgZWxzZSBpZiAocy5tYXRjaCgvXlxccyo6LSs6XFxzKiQvKSkgaHRtbF9hdHRycy5wdXNoKHthbGlnbjogXCJjZW50ZXJcIn0pO1xuICAgICAgICBlbHNlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbF9hdHRycy5wdXNoKHt9KTtcbiAgICB9KTtcblxuICAgIC8vIG5vdyBmb3IgdGhlIGhlYWRlciwgYXZvaWQgZXNjYXBlZCBwaXBlc1xuICAgIG1bMV0gPSBfc3BsaXRfb25fdW5lc2NhcGVkKG1bMV0ucmVwbGFjZSgvXFx8XFxzKiQvLCAnJyksICd8Jyk7XG4gICAgZm9yIChpID0gMDsgaSA8IG1bMV0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGFibGVbMV1bMV0ucHVzaChbJ3RoJywgaHRtbF9hdHRyc1tpXSB8fCB7fV0uY29uY2F0KFxuICAgICAgICAgICAgdGhpcy5wcm9jZXNzSW5saW5lKG1bMV1baV0udHJpbSgpKSkpO1xuICAgIH1cblxuICAgIC8vIG5vdyBmb3IgYm9keSBjb250ZW50c1xuICAgIGZvckVhY2ggKG1bM10ucmVwbGFjZSgvXFx8XFxzKiQvbWcsICcnKS5zcGxpdCgnXFxuJyksIGZ1bmN0aW9uIChyb3cpIHtcbiAgICAgICAgdmFyIGh0bWxfcm93ID0gWyd0ciddO1xuICAgICAgICByb3cgPSBfc3BsaXRfb25fdW5lc2NhcGVkKHJvdywgJ3wnKTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHJvdy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaHRtbF9yb3cucHVzaChbJ3RkJywgaHRtbF9hdHRyc1tpXSB8fCB7fV0uY29uY2F0KHRoaXMucHJvY2Vzc0lubGluZShyb3dbaV0udHJpbSgpKSkpO1xuICAgICAgICB9XG4gICAgICAgIHRhYmxlWzJdLnB1c2goaHRtbF9yb3cpO1xuICAgIH0sIHRoaXMpO1xuXG4gICAgcmV0dXJuIFt0YWJsZV07XG59XG5cbk1hcmtkb3duLmRpYWxlY3RzLk1hcnVrdS5pbmxpbmVbIFwiezpcIiBdID0gZnVuY3Rpb24gaW5saW5lX21ldGEoIHRleHQsIG1hdGNoZXMsIG91dCApIHtcbiAgaWYgKCAhb3V0Lmxlbmd0aCApIHtcbiAgICByZXR1cm4gWyAyLCBcIns6XCIgXTtcbiAgfVxuXG4gIC8vIGdldCB0aGUgcHJlY2VlZGluZyBlbGVtZW50XG4gIHZhciBiZWZvcmUgPSBvdXRbIG91dC5sZW5ndGggLSAxIF07XG5cbiAgaWYgKCB0eXBlb2YgYmVmb3JlID09PSBcInN0cmluZ1wiICkge1xuICAgIHJldHVybiBbIDIsIFwiezpcIiBdO1xuICB9XG5cbiAgLy8gbWF0Y2ggYSBtZXRhIGhhc2hcbiAgdmFyIG0gPSB0ZXh0Lm1hdGNoKCAvXlxcezpcXHMqKCg/OlxcXFxcXH18W15cXH1dKSopXFxzKlxcfS8gKTtcblxuICAvLyBubyBtYXRjaCwgZmFsc2UgYWxhcm1cbiAgaWYgKCAhbSApIHtcbiAgICByZXR1cm4gWyAyLCBcIns6XCIgXTtcbiAgfVxuXG4gIC8vIGF0dGFjaCB0aGUgYXR0cmlidXRlcyB0byB0aGUgcHJlY2VlZGluZyBlbGVtZW50XG4gIHZhciBtZXRhID0gdGhpcy5kaWFsZWN0LnByb2Nlc3NNZXRhSGFzaCggbVsgMSBdICksXG4gICAgICBhdHRyID0gZXh0cmFjdF9hdHRyKCBiZWZvcmUgKTtcblxuICBpZiAoICFhdHRyICkge1xuICAgIGF0dHIgPSB7fTtcbiAgICBiZWZvcmUuc3BsaWNlKCAxLCAwLCBhdHRyICk7XG4gIH1cblxuICBmb3IgKCB2YXIgayBpbiBtZXRhICkge1xuICAgIGF0dHJbIGsgXSA9IG1ldGFbIGsgXTtcbiAgfVxuXG4gIC8vIGN1dCBvdXQgdGhlIHN0cmluZyBhbmQgcmVwbGFjZSBpdCB3aXRoIG5vdGhpbmdcbiAgcmV0dXJuIFsgbVsgMCBdLmxlbmd0aCwgXCJcIiBdO1xufTtcblxuTWFya2Rvd24uZGlhbGVjdHMuTWFydWt1LmlubGluZS5fX2VzY2FwZV9fID0gL15cXFxcW1xcXFxgXFwqX3t9XFxbXFxdKCkjXFwrLiFcXC18Ol0vO1xuXG5NYXJrZG93bi5idWlsZEJsb2NrT3JkZXIgKCBNYXJrZG93bi5kaWFsZWN0cy5NYXJ1a3UuYmxvY2sgKTtcbk1hcmtkb3duLmJ1aWxkSW5saW5lUGF0dGVybnMoIE1hcmtkb3duLmRpYWxlY3RzLk1hcnVrdS5pbmxpbmUgKTtcblxudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uKG9iaikge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikgPT0gXCJbb2JqZWN0IEFycmF5XVwiO1xufTtcblxudmFyIGZvckVhY2g7XG4vLyBEb24ndCBtZXNzIHdpdGggQXJyYXkucHJvdG90eXBlLiBJdHMgbm90IGZyaWVuZGx5XG5pZiAoIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoICkge1xuICBmb3JFYWNoID0gZnVuY3Rpb24oIGFyciwgY2IsIHRoaXNwICkge1xuICAgIHJldHVybiBhcnIuZm9yRWFjaCggY2IsIHRoaXNwICk7XG4gIH07XG59XG5lbHNlIHtcbiAgZm9yRWFjaCA9IGZ1bmN0aW9uKGFyciwgY2IsIHRoaXNwKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNiLmNhbGwodGhpc3AgfHwgYXJyLCBhcnJbaV0sIGksIGFycik7XG4gICAgfVxuICB9XG59XG5cbnZhciBpc0VtcHR5ID0gZnVuY3Rpb24oIG9iaiApIHtcbiAgZm9yICggdmFyIGtleSBpbiBvYmogKSB7XG4gICAgaWYgKCBoYXNPd25Qcm9wZXJ0eS5jYWxsKCBvYmosIGtleSApICkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBleHRyYWN0X2F0dHIoIGpzb25tbCApIHtcbiAgcmV0dXJuIGlzQXJyYXkoanNvbm1sKVxuICAgICAgJiYganNvbm1sLmxlbmd0aCA+IDFcbiAgICAgICYmIHR5cGVvZiBqc29ubWxbIDEgXSA9PT0gXCJvYmplY3RcIlxuICAgICAgJiYgISggaXNBcnJheShqc29ubWxbIDEgXSkgKVxuICAgICAgPyBqc29ubWxbIDEgXVxuICAgICAgOiB1bmRlZmluZWQ7XG59XG5cblxuXG4vKipcbiAqICByZW5kZXJKc29uTUwoIGpzb25tbFssIG9wdGlvbnNdICkgLT4gU3RyaW5nXG4gKiAgLSBqc29ubWwgKEFycmF5KTogSnNvbk1MIGFycmF5IHRvIHJlbmRlciB0byBYTUxcbiAqICAtIG9wdGlvbnMgKE9iamVjdCk6IG9wdGlvbnNcbiAqXG4gKiAgQ29udmVydHMgdGhlIGdpdmVuIEpzb25NTCBpbnRvIHdlbGwtZm9ybWVkIFhNTC5cbiAqXG4gKiAgVGhlIG9wdGlvbnMgY3VycmVudGx5IHVuZGVyc3Rvb2QgYXJlOlxuICpcbiAqICAtIHJvb3QgKEJvb2xlYW4pOiB3ZXRoZXIgb3Igbm90IHRoZSByb290IG5vZGUgc2hvdWxkIGJlIGluY2x1ZGVkIGluIHRoZVxuICogICAgb3V0cHV0LCBvciBqdXN0IGl0cyBjaGlsZHJlbi4gVGhlIGRlZmF1bHQgYGZhbHNlYCBpcyB0byBub3QgaW5jbHVkZSB0aGVcbiAqICAgIHJvb3QgaXRzZWxmLlxuICovXG5leHBvc2UucmVuZGVySnNvbk1MID0gZnVuY3Rpb24oIGpzb25tbCwgb3B0aW9ucyApIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIC8vIGluY2x1ZGUgdGhlIHJvb3QgZWxlbWVudCBpbiB0aGUgcmVuZGVyZWQgb3V0cHV0P1xuICBvcHRpb25zLnJvb3QgPSBvcHRpb25zLnJvb3QgfHwgZmFsc2U7XG5cbiAgdmFyIGNvbnRlbnQgPSBbXTtcblxuICBpZiAoIG9wdGlvbnMucm9vdCApIHtcbiAgICBjb250ZW50LnB1c2goIHJlbmRlcl90cmVlKCBqc29ubWwgKSApO1xuICB9XG4gIGVsc2Uge1xuICAgIGpzb25tbC5zaGlmdCgpOyAvLyBnZXQgcmlkIG9mIHRoZSB0YWdcbiAgICBpZiAoIGpzb25tbC5sZW5ndGggJiYgdHlwZW9mIGpzb25tbFsgMCBdID09PSBcIm9iamVjdFwiICYmICEoIGpzb25tbFsgMCBdIGluc3RhbmNlb2YgQXJyYXkgKSApIHtcbiAgICAgIGpzb25tbC5zaGlmdCgpOyAvLyBnZXQgcmlkIG9mIHRoZSBhdHRyaWJ1dGVzXG4gICAgfVxuXG4gICAgd2hpbGUgKCBqc29ubWwubGVuZ3RoICkge1xuICAgICAgY29udGVudC5wdXNoKCByZW5kZXJfdHJlZSgganNvbm1sLnNoaWZ0KCkgKSApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb250ZW50LmpvaW4oIFwiXFxuXFxuXCIgKTtcbn07XG5cbmZ1bmN0aW9uIGVzY2FwZUhUTUwoIHRleHQgKSB7XG4gIHJldHVybiB0ZXh0LnJlcGxhY2UoIC8mL2csIFwiJmFtcDtcIiApXG4gICAgICAgICAgICAgLnJlcGxhY2UoIC88L2csIFwiJmx0O1wiIClcbiAgICAgICAgICAgICAucmVwbGFjZSggLz4vZywgXCImZ3Q7XCIgKVxuICAgICAgICAgICAgIC5yZXBsYWNlKCAvXCIvZywgXCImcXVvdDtcIiApXG4gICAgICAgICAgICAgLnJlcGxhY2UoIC8nL2csIFwiJiMzOTtcIiApO1xufVxuXG5mdW5jdGlvbiByZW5kZXJfdHJlZSgganNvbm1sICkge1xuICAvLyBiYXNpYyBjYXNlXG4gIGlmICggdHlwZW9mIGpzb25tbCA9PT0gXCJzdHJpbmdcIiApIHtcbiAgICByZXR1cm4gZXNjYXBlSFRNTCgganNvbm1sICk7XG4gIH1cblxuICB2YXIgdGFnID0ganNvbm1sLnNoaWZ0KCksXG4gICAgICBhdHRyaWJ1dGVzID0ge30sXG4gICAgICBjb250ZW50ID0gW107XG5cbiAgaWYgKCBqc29ubWwubGVuZ3RoICYmIHR5cGVvZiBqc29ubWxbIDAgXSA9PT0gXCJvYmplY3RcIiAmJiAhKCBqc29ubWxbIDAgXSBpbnN0YW5jZW9mIEFycmF5ICkgKSB7XG4gICAgYXR0cmlidXRlcyA9IGpzb25tbC5zaGlmdCgpO1xuICB9XG5cbiAgd2hpbGUgKCBqc29ubWwubGVuZ3RoICkge1xuICAgIGNvbnRlbnQucHVzaCggcmVuZGVyX3RyZWUoIGpzb25tbC5zaGlmdCgpICkgKTtcbiAgfVxuXG4gIHZhciB0YWdfYXR0cnMgPSBcIlwiO1xuICBmb3IgKCB2YXIgYSBpbiBhdHRyaWJ1dGVzICkge1xuICAgIHRhZ19hdHRycyArPSBcIiBcIiArIGEgKyAnPVwiJyArIGVzY2FwZUhUTUwoIGF0dHJpYnV0ZXNbIGEgXSApICsgJ1wiJztcbiAgfVxuXG4gIC8vIGJlIGNhcmVmdWwgYWJvdXQgYWRkaW5nIHdoaXRlc3BhY2UgaGVyZSBmb3IgaW5saW5lIGVsZW1lbnRzXG4gIGlmICggdGFnID09IFwiaW1nXCIgfHwgdGFnID09IFwiYnJcIiB8fCB0YWcgPT0gXCJoclwiICkge1xuICAgIHJldHVybiBcIjxcIisgdGFnICsgdGFnX2F0dHJzICsgXCIvPlwiO1xuICB9XG4gIGVsc2Uge1xuICAgIHJldHVybiBcIjxcIisgdGFnICsgdGFnX2F0dHJzICsgXCI+XCIgKyBjb250ZW50LmpvaW4oIFwiXCIgKSArIFwiPC9cIiArIHRhZyArIFwiPlwiO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRfdHJlZV90b19odG1sKCB0cmVlLCByZWZlcmVuY2VzLCBvcHRpb25zICkge1xuICB2YXIgaTtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgLy8gc2hhbGxvdyBjbG9uZVxuICB2YXIganNvbm1sID0gdHJlZS5zbGljZSggMCApO1xuXG4gIGlmICggdHlwZW9mIG9wdGlvbnMucHJlcHJvY2Vzc1RyZWVOb2RlID09PSBcImZ1bmN0aW9uXCIgKSB7XG4gICAgICBqc29ubWwgPSBvcHRpb25zLnByZXByb2Nlc3NUcmVlTm9kZShqc29ubWwsIHJlZmVyZW5jZXMpO1xuICB9XG5cbiAgLy8gQ2xvbmUgYXR0cmlidXRlcyBpZiB0aGV5IGV4aXN0XG4gIHZhciBhdHRycyA9IGV4dHJhY3RfYXR0cigganNvbm1sICk7XG4gIGlmICggYXR0cnMgKSB7XG4gICAganNvbm1sWyAxIF0gPSB7fTtcbiAgICBmb3IgKCBpIGluIGF0dHJzICkge1xuICAgICAganNvbm1sWyAxIF1bIGkgXSA9IGF0dHJzWyBpIF07XG4gICAgfVxuICAgIGF0dHJzID0ganNvbm1sWyAxIF07XG4gIH1cblxuICAvLyBiYXNpYyBjYXNlXG4gIGlmICggdHlwZW9mIGpzb25tbCA9PT0gXCJzdHJpbmdcIiApIHtcbiAgICByZXR1cm4ganNvbm1sO1xuICB9XG5cbiAgLy8gY29udmVydCB0aGlzIG5vZGVcbiAgc3dpdGNoICgganNvbm1sWyAwIF0gKSB7XG4gICAgY2FzZSBcImhlYWRlclwiOlxuICAgICAganNvbm1sWyAwIF0gPSBcImhcIiArIGpzb25tbFsgMSBdLmxldmVsO1xuICAgICAgZGVsZXRlIGpzb25tbFsgMSBdLmxldmVsO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImJ1bGxldGxpc3RcIjpcbiAgICAgIGpzb25tbFsgMCBdID0gXCJ1bFwiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIm51bWJlcmxpc3RcIjpcbiAgICAgIGpzb25tbFsgMCBdID0gXCJvbFwiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImxpc3RpdGVtXCI6XG4gICAgICBqc29ubWxbIDAgXSA9IFwibGlcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJwYXJhXCI6XG4gICAgICBqc29ubWxbIDAgXSA9IFwicFwiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIm1hcmtkb3duXCI6XG4gICAgICBqc29ubWxbIDAgXSA9IFwiaHRtbFwiO1xuICAgICAgaWYgKCBhdHRycyApIGRlbGV0ZSBhdHRycy5yZWZlcmVuY2VzO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImNvZGVfYmxvY2tcIjpcbiAgICAgIGpzb25tbFsgMCBdID0gXCJwcmVcIjtcbiAgICAgIGkgPSBhdHRycyA/IDIgOiAxO1xuICAgICAgdmFyIGNvZGUgPSBbIFwiY29kZVwiIF07XG4gICAgICBjb2RlLnB1c2guYXBwbHkoIGNvZGUsIGpzb25tbC5zcGxpY2UoIGksIGpzb25tbC5sZW5ndGggLSBpICkgKTtcbiAgICAgIGpzb25tbFsgaSBdID0gY29kZTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJpbmxpbmVjb2RlXCI6XG4gICAgICBqc29ubWxbIDAgXSA9IFwiY29kZVwiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImltZ1wiOlxuICAgICAganNvbm1sWyAxIF0uc3JjID0ganNvbm1sWyAxIF0uaHJlZjtcbiAgICAgIGRlbGV0ZSBqc29ubWxbIDEgXS5ocmVmO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImxpbmVicmVha1wiOlxuICAgICAganNvbm1sWyAwIF0gPSBcImJyXCI7XG4gICAgYnJlYWs7XG4gICAgY2FzZSBcImxpbmtcIjpcbiAgICAgIGpzb25tbFsgMCBdID0gXCJhXCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwibGlua19yZWZcIjpcbiAgICAgIGpzb25tbFsgMCBdID0gXCJhXCI7XG5cbiAgICAgIC8vIGdyYWIgdGhpcyByZWYgYW5kIGNsZWFuIHVwIHRoZSBhdHRyaWJ1dGUgbm9kZVxuICAgICAgdmFyIHJlZiA9IHJlZmVyZW5jZXNbIGF0dHJzLnJlZiBdO1xuXG4gICAgICAvLyBpZiB0aGUgcmVmZXJlbmNlIGV4aXN0cywgbWFrZSB0aGUgbGlua1xuICAgICAgaWYgKCByZWYgKSB7XG4gICAgICAgIGRlbGV0ZSBhdHRycy5yZWY7XG5cbiAgICAgICAgLy8gYWRkIGluIHRoZSBocmVmIGFuZCB0aXRsZSwgaWYgcHJlc2VudFxuICAgICAgICBhdHRycy5ocmVmID0gcmVmLmhyZWY7XG4gICAgICAgIGlmICggcmVmLnRpdGxlICkge1xuICAgICAgICAgIGF0dHJzLnRpdGxlID0gcmVmLnRpdGxlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZ2V0IHJpZCBvZiB0aGUgdW5uZWVkZWQgb3JpZ2luYWwgdGV4dFxuICAgICAgICBkZWxldGUgYXR0cnMub3JpZ2luYWw7XG4gICAgICB9XG4gICAgICAvLyB0aGUgcmVmZXJlbmNlIGRvZXNuJ3QgZXhpc3QsIHNvIHJldmVydCB0byBwbGFpbiB0ZXh0XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGF0dHJzLm9yaWdpbmFsO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImltZ19yZWZcIjpcbiAgICAgIGpzb25tbFsgMCBdID0gXCJpbWdcIjtcblxuICAgICAgLy8gZ3JhYiB0aGlzIHJlZiBhbmQgY2xlYW4gdXAgdGhlIGF0dHJpYnV0ZSBub2RlXG4gICAgICB2YXIgcmVmID0gcmVmZXJlbmNlc1sgYXR0cnMucmVmIF07XG5cbiAgICAgIC8vIGlmIHRoZSByZWZlcmVuY2UgZXhpc3RzLCBtYWtlIHRoZSBsaW5rXG4gICAgICBpZiAoIHJlZiApIHtcbiAgICAgICAgZGVsZXRlIGF0dHJzLnJlZjtcblxuICAgICAgICAvLyBhZGQgaW4gdGhlIGhyZWYgYW5kIHRpdGxlLCBpZiBwcmVzZW50XG4gICAgICAgIGF0dHJzLnNyYyA9IHJlZi5ocmVmO1xuICAgICAgICBpZiAoIHJlZi50aXRsZSApIHtcbiAgICAgICAgICBhdHRycy50aXRsZSA9IHJlZi50aXRsZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGdldCByaWQgb2YgdGhlIHVubmVlZGVkIG9yaWdpbmFsIHRleHRcbiAgICAgICAgZGVsZXRlIGF0dHJzLm9yaWdpbmFsO1xuICAgICAgfVxuICAgICAgLy8gdGhlIHJlZmVyZW5jZSBkb2Vzbid0IGV4aXN0LCBzbyByZXZlcnQgdG8gcGxhaW4gdGV4dFxuICAgICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBhdHRycy5vcmlnaW5hbDtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgLy8gY29udmVydCBhbGwgdGhlIGNoaWxkcmVuXG4gIGkgPSAxO1xuXG4gIC8vIGRlYWwgd2l0aCB0aGUgYXR0cmlidXRlIG5vZGUsIGlmIGl0IGV4aXN0c1xuICBpZiAoIGF0dHJzICkge1xuICAgIC8vIGlmIHRoZXJlIGFyZSBrZXlzLCBza2lwIG92ZXIgaXRcbiAgICBmb3IgKCB2YXIga2V5IGluIGpzb25tbFsgMSBdICkge1xuICAgICAgICBpID0gMjtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIC8vIGlmIHRoZXJlIGFyZW4ndCwgcmVtb3ZlIGl0XG4gICAgaWYgKCBpID09PSAxICkge1xuICAgICAganNvbm1sLnNwbGljZSggaSwgMSApO1xuICAgIH1cbiAgfVxuXG4gIGZvciAoIDsgaSA8IGpzb25tbC5sZW5ndGg7ICsraSApIHtcbiAgICBqc29ubWxbIGkgXSA9IGNvbnZlcnRfdHJlZV90b19odG1sKCBqc29ubWxbIGkgXSwgcmVmZXJlbmNlcywgb3B0aW9ucyApO1xuICB9XG5cbiAgcmV0dXJuIGpzb25tbDtcbn1cblxuXG4vLyBtZXJnZXMgYWRqYWNlbnQgdGV4dCBub2RlcyBpbnRvIGEgc2luZ2xlIG5vZGVcbmZ1bmN0aW9uIG1lcmdlX3RleHRfbm9kZXMoIGpzb25tbCApIHtcbiAgLy8gc2tpcCB0aGUgdGFnIG5hbWUgYW5kIGF0dHJpYnV0ZSBoYXNoXG4gIHZhciBpID0gZXh0cmFjdF9hdHRyKCBqc29ubWwgKSA/IDIgOiAxO1xuXG4gIHdoaWxlICggaSA8IGpzb25tbC5sZW5ndGggKSB7XG4gICAgLy8gaWYgaXQncyBhIHN0cmluZyBjaGVjayB0aGUgbmV4dCBpdGVtIHRvb1xuICAgIGlmICggdHlwZW9mIGpzb25tbFsgaSBdID09PSBcInN0cmluZ1wiICkge1xuICAgICAgaWYgKCBpICsgMSA8IGpzb25tbC5sZW5ndGggJiYgdHlwZW9mIGpzb25tbFsgaSArIDEgXSA9PT0gXCJzdHJpbmdcIiApIHtcbiAgICAgICAgLy8gbWVyZ2UgdGhlIHNlY29uZCBzdHJpbmcgaW50byB0aGUgZmlyc3QgYW5kIHJlbW92ZSBpdFxuICAgICAgICBqc29ubWxbIGkgXSArPSBqc29ubWwuc3BsaWNlKCBpICsgMSwgMSApWyAwIF07XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgKytpO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBpZiBpdCdzIG5vdCBhIHN0cmluZyByZWN1cnNlXG4gICAgZWxzZSB7XG4gICAgICBtZXJnZV90ZXh0X25vZGVzKCBqc29ubWxbIGkgXSApO1xuICAgICAgKytpO1xuICAgIH1cbiAgfVxufVxuXG59ICkoIChmdW5jdGlvbigpIHtcbiAgaWYgKCB0eXBlb2YgZXhwb3J0cyA9PT0gXCJ1bmRlZmluZWRcIiApIHtcbiAgICB3aW5kb3cubWFya2Rvd24gPSB7fTtcbiAgICByZXR1cm4gd2luZG93Lm1hcmtkb3duO1xuICB9XG4gIGVsc2Uge1xuICAgIHJldHVybiBleHBvcnRzO1xuICB9XG59ICkoKSApO1xuIiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMgfHxcbiAgZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhvYmopIHtcbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG4gICAgdmFyIGRlc2NyaXB0b3JzID0ge307XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBkZXNjcmlwdG9yc1trZXlzW2ldXSA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXlzW2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIGRlc2NyaXB0b3JzO1xuICB9O1xuXG52YXIgZm9ybWF0UmVnRXhwID0gLyVbc2RqJV0vZztcbmV4cG9ydHMuZm9ybWF0ID0gZnVuY3Rpb24oZikge1xuICBpZiAoIWlzU3RyaW5nKGYpKSB7XG4gICAgdmFyIG9iamVjdHMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgb2JqZWN0cy5wdXNoKGluc3BlY3QoYXJndW1lbnRzW2ldKSk7XG4gICAgfVxuICAgIHJldHVybiBvYmplY3RzLmpvaW4oJyAnKTtcbiAgfVxuXG4gIHZhciBpID0gMTtcbiAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gIHZhciBsZW4gPSBhcmdzLmxlbmd0aDtcbiAgdmFyIHN0ciA9IFN0cmluZyhmKS5yZXBsYWNlKGZvcm1hdFJlZ0V4cCwgZnVuY3Rpb24oeCkge1xuICAgIGlmICh4ID09PSAnJSUnKSByZXR1cm4gJyUnO1xuICAgIGlmIChpID49IGxlbikgcmV0dXJuIHg7XG4gICAgc3dpdGNoICh4KSB7XG4gICAgICBjYXNlICclcyc6IHJldHVybiBTdHJpbmcoYXJnc1tpKytdKTtcbiAgICAgIGNhc2UgJyVkJzogcmV0dXJuIE51bWJlcihhcmdzW2krK10pO1xuICAgICAgY2FzZSAnJWonOlxuICAgICAgICB0cnkge1xuICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShhcmdzW2krK10pO1xuICAgICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgICAgcmV0dXJuICdbQ2lyY3VsYXJdJztcbiAgICAgICAgfVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHg7XG4gICAgfVxuICB9KTtcbiAgZm9yICh2YXIgeCA9IGFyZ3NbaV07IGkgPCBsZW47IHggPSBhcmdzWysraV0pIHtcbiAgICBpZiAoaXNOdWxsKHgpIHx8ICFpc09iamVjdCh4KSkge1xuICAgICAgc3RyICs9ICcgJyArIHg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0ciArPSAnICcgKyBpbnNwZWN0KHgpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gc3RyO1xufTtcblxuXG4vLyBNYXJrIHRoYXQgYSBtZXRob2Qgc2hvdWxkIG5vdCBiZSB1c2VkLlxuLy8gUmV0dXJucyBhIG1vZGlmaWVkIGZ1bmN0aW9uIHdoaWNoIHdhcm5zIG9uY2UgYnkgZGVmYXVsdC5cbi8vIElmIC0tbm8tZGVwcmVjYXRpb24gaXMgc2V0LCB0aGVuIGl0IGlzIGEgbm8tb3AuXG5leHBvcnRzLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKGZuLCBtc2cpIHtcbiAgaWYgKHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiBwcm9jZXNzLm5vRGVwcmVjYXRpb24gPT09IHRydWUpIHtcbiAgICByZXR1cm4gZm47XG4gIH1cblxuICAvLyBBbGxvdyBmb3IgZGVwcmVjYXRpbmcgdGhpbmdzIGluIHRoZSBwcm9jZXNzIG9mIHN0YXJ0aW5nIHVwLlxuICBpZiAodHlwZW9mIHByb2Nlc3MgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGV4cG9ydHMuZGVwcmVjYXRlKGZuLCBtc2cpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgfVxuXG4gIHZhciB3YXJuZWQgPSBmYWxzZTtcbiAgZnVuY3Rpb24gZGVwcmVjYXRlZCgpIHtcbiAgICBpZiAoIXdhcm5lZCkge1xuICAgICAgaWYgKHByb2Nlc3MudGhyb3dEZXByZWNhdGlvbikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobXNnKTtcbiAgICAgIH0gZWxzZSBpZiAocHJvY2Vzcy50cmFjZURlcHJlY2F0aW9uKSB7XG4gICAgICAgIGNvbnNvbGUudHJhY2UobXNnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IobXNnKTtcbiAgICAgIH1cbiAgICAgIHdhcm5lZCA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgcmV0dXJuIGRlcHJlY2F0ZWQ7XG59O1xuXG5cbnZhciBkZWJ1Z3MgPSB7fTtcbnZhciBkZWJ1Z0Vudmlyb247XG5leHBvcnRzLmRlYnVnbG9nID0gZnVuY3Rpb24oc2V0KSB7XG4gIGlmIChpc1VuZGVmaW5lZChkZWJ1Z0Vudmlyb24pKVxuICAgIGRlYnVnRW52aXJvbiA9IHByb2Nlc3MuZW52Lk5PREVfREVCVUcgfHwgJyc7XG4gIHNldCA9IHNldC50b1VwcGVyQ2FzZSgpO1xuICBpZiAoIWRlYnVnc1tzZXRdKSB7XG4gICAgaWYgKG5ldyBSZWdFeHAoJ1xcXFxiJyArIHNldCArICdcXFxcYicsICdpJykudGVzdChkZWJ1Z0Vudmlyb24pKSB7XG4gICAgICB2YXIgcGlkID0gcHJvY2Vzcy5waWQ7XG4gICAgICBkZWJ1Z3Nbc2V0XSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgbXNnID0gZXhwb3J0cy5mb3JtYXQuYXBwbHkoZXhwb3J0cywgYXJndW1lbnRzKTtcbiAgICAgICAgY29uc29sZS5lcnJvcignJXMgJWQ6ICVzJywgc2V0LCBwaWQsIG1zZyk7XG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWJ1Z3Nbc2V0XSA9IGZ1bmN0aW9uKCkge307XG4gICAgfVxuICB9XG4gIHJldHVybiBkZWJ1Z3Nbc2V0XTtcbn07XG5cblxuLyoqXG4gKiBFY2hvcyB0aGUgdmFsdWUgb2YgYSB2YWx1ZS4gVHJ5cyB0byBwcmludCB0aGUgdmFsdWUgb3V0XG4gKiBpbiB0aGUgYmVzdCB3YXkgcG9zc2libGUgZ2l2ZW4gdGhlIGRpZmZlcmVudCB0eXBlcy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqIFRoZSBvYmplY3QgdG8gcHJpbnQgb3V0LlxuICogQHBhcmFtIHtPYmplY3R9IG9wdHMgT3B0aW9uYWwgb3B0aW9ucyBvYmplY3QgdGhhdCBhbHRlcnMgdGhlIG91dHB1dC5cbiAqL1xuLyogbGVnYWN5OiBvYmosIHNob3dIaWRkZW4sIGRlcHRoLCBjb2xvcnMqL1xuZnVuY3Rpb24gaW5zcGVjdChvYmosIG9wdHMpIHtcbiAgLy8gZGVmYXVsdCBvcHRpb25zXG4gIHZhciBjdHggPSB7XG4gICAgc2VlbjogW10sXG4gICAgc3R5bGl6ZTogc3R5bGl6ZU5vQ29sb3JcbiAgfTtcbiAgLy8gbGVnYWN5Li4uXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID49IDMpIGN0eC5kZXB0aCA9IGFyZ3VtZW50c1syXTtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPj0gNCkgY3R4LmNvbG9ycyA9IGFyZ3VtZW50c1szXTtcbiAgaWYgKGlzQm9vbGVhbihvcHRzKSkge1xuICAgIC8vIGxlZ2FjeS4uLlxuICAgIGN0eC5zaG93SGlkZGVuID0gb3B0cztcbiAgfSBlbHNlIGlmIChvcHRzKSB7XG4gICAgLy8gZ290IGFuIFwib3B0aW9uc1wiIG9iamVjdFxuICAgIGV4cG9ydHMuX2V4dGVuZChjdHgsIG9wdHMpO1xuICB9XG4gIC8vIHNldCBkZWZhdWx0IG9wdGlvbnNcbiAgaWYgKGlzVW5kZWZpbmVkKGN0eC5zaG93SGlkZGVuKSkgY3R4LnNob3dIaWRkZW4gPSBmYWxzZTtcbiAgaWYgKGlzVW5kZWZpbmVkKGN0eC5kZXB0aCkpIGN0eC5kZXB0aCA9IDI7XG4gIGlmIChpc1VuZGVmaW5lZChjdHguY29sb3JzKSkgY3R4LmNvbG9ycyA9IGZhbHNlO1xuICBpZiAoaXNVbmRlZmluZWQoY3R4LmN1c3RvbUluc3BlY3QpKSBjdHguY3VzdG9tSW5zcGVjdCA9IHRydWU7XG4gIGlmIChjdHguY29sb3JzKSBjdHguc3R5bGl6ZSA9IHN0eWxpemVXaXRoQ29sb3I7XG4gIHJldHVybiBmb3JtYXRWYWx1ZShjdHgsIG9iaiwgY3R4LmRlcHRoKTtcbn1cbmV4cG9ydHMuaW5zcGVjdCA9IGluc3BlY3Q7XG5cblxuLy8gaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9BTlNJX2VzY2FwZV9jb2RlI2dyYXBoaWNzXG5pbnNwZWN0LmNvbG9ycyA9IHtcbiAgJ2JvbGQnIDogWzEsIDIyXSxcbiAgJ2l0YWxpYycgOiBbMywgMjNdLFxuICAndW5kZXJsaW5lJyA6IFs0LCAyNF0sXG4gICdpbnZlcnNlJyA6IFs3LCAyN10sXG4gICd3aGl0ZScgOiBbMzcsIDM5XSxcbiAgJ2dyZXknIDogWzkwLCAzOV0sXG4gICdibGFjaycgOiBbMzAsIDM5XSxcbiAgJ2JsdWUnIDogWzM0LCAzOV0sXG4gICdjeWFuJyA6IFszNiwgMzldLFxuICAnZ3JlZW4nIDogWzMyLCAzOV0sXG4gICdtYWdlbnRhJyA6IFszNSwgMzldLFxuICAncmVkJyA6IFszMSwgMzldLFxuICAneWVsbG93JyA6IFszMywgMzldXG59O1xuXG4vLyBEb24ndCB1c2UgJ2JsdWUnIG5vdCB2aXNpYmxlIG9uIGNtZC5leGVcbmluc3BlY3Quc3R5bGVzID0ge1xuICAnc3BlY2lhbCc6ICdjeWFuJyxcbiAgJ251bWJlcic6ICd5ZWxsb3cnLFxuICAnYm9vbGVhbic6ICd5ZWxsb3cnLFxuICAndW5kZWZpbmVkJzogJ2dyZXknLFxuICAnbnVsbCc6ICdib2xkJyxcbiAgJ3N0cmluZyc6ICdncmVlbicsXG4gICdkYXRlJzogJ21hZ2VudGEnLFxuICAvLyBcIm5hbWVcIjogaW50ZW50aW9uYWxseSBub3Qgc3R5bGluZ1xuICAncmVnZXhwJzogJ3JlZCdcbn07XG5cblxuZnVuY3Rpb24gc3R5bGl6ZVdpdGhDb2xvcihzdHIsIHN0eWxlVHlwZSkge1xuICB2YXIgc3R5bGUgPSBpbnNwZWN0LnN0eWxlc1tzdHlsZVR5cGVdO1xuXG4gIGlmIChzdHlsZSkge1xuICAgIHJldHVybiAnXFx1MDAxYlsnICsgaW5zcGVjdC5jb2xvcnNbc3R5bGVdWzBdICsgJ20nICsgc3RyICtcbiAgICAgICAgICAgJ1xcdTAwMWJbJyArIGluc3BlY3QuY29sb3JzW3N0eWxlXVsxXSArICdtJztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gc3RyO1xuICB9XG59XG5cblxuZnVuY3Rpb24gc3R5bGl6ZU5vQ29sb3Ioc3RyLCBzdHlsZVR5cGUpIHtcbiAgcmV0dXJuIHN0cjtcbn1cblxuXG5mdW5jdGlvbiBhcnJheVRvSGFzaChhcnJheSkge1xuICB2YXIgaGFzaCA9IHt9O1xuXG4gIGFycmF5LmZvckVhY2goZnVuY3Rpb24odmFsLCBpZHgpIHtcbiAgICBoYXNoW3ZhbF0gPSB0cnVlO1xuICB9KTtcblxuICByZXR1cm4gaGFzaDtcbn1cblxuXG5mdW5jdGlvbiBmb3JtYXRWYWx1ZShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMpIHtcbiAgLy8gUHJvdmlkZSBhIGhvb2sgZm9yIHVzZXItc3BlY2lmaWVkIGluc3BlY3QgZnVuY3Rpb25zLlxuICAvLyBDaGVjayB0aGF0IHZhbHVlIGlzIGFuIG9iamVjdCB3aXRoIGFuIGluc3BlY3QgZnVuY3Rpb24gb24gaXRcbiAgaWYgKGN0eC5jdXN0b21JbnNwZWN0ICYmXG4gICAgICB2YWx1ZSAmJlxuICAgICAgaXNGdW5jdGlvbih2YWx1ZS5pbnNwZWN0KSAmJlxuICAgICAgLy8gRmlsdGVyIG91dCB0aGUgdXRpbCBtb2R1bGUsIGl0J3MgaW5zcGVjdCBmdW5jdGlvbiBpcyBzcGVjaWFsXG4gICAgICB2YWx1ZS5pbnNwZWN0ICE9PSBleHBvcnRzLmluc3BlY3QgJiZcbiAgICAgIC8vIEFsc28gZmlsdGVyIG91dCBhbnkgcHJvdG90eXBlIG9iamVjdHMgdXNpbmcgdGhlIGNpcmN1bGFyIGNoZWNrLlxuICAgICAgISh2YWx1ZS5jb25zdHJ1Y3RvciAmJiB2YWx1ZS5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgPT09IHZhbHVlKSkge1xuICAgIHZhciByZXQgPSB2YWx1ZS5pbnNwZWN0KHJlY3Vyc2VUaW1lcywgY3R4KTtcbiAgICBpZiAoIWlzU3RyaW5nKHJldCkpIHtcbiAgICAgIHJldCA9IGZvcm1hdFZhbHVlKGN0eCwgcmV0LCByZWN1cnNlVGltZXMpO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgLy8gUHJpbWl0aXZlIHR5cGVzIGNhbm5vdCBoYXZlIHByb3BlcnRpZXNcbiAgdmFyIHByaW1pdGl2ZSA9IGZvcm1hdFByaW1pdGl2ZShjdHgsIHZhbHVlKTtcbiAgaWYgKHByaW1pdGl2ZSkge1xuICAgIHJldHVybiBwcmltaXRpdmU7XG4gIH1cblxuICAvLyBMb29rIHVwIHRoZSBrZXlzIG9mIHRoZSBvYmplY3QuXG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXModmFsdWUpO1xuICB2YXIgdmlzaWJsZUtleXMgPSBhcnJheVRvSGFzaChrZXlzKTtcblxuICBpZiAoY3R4LnNob3dIaWRkZW4pIHtcbiAgICBrZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModmFsdWUpO1xuICB9XG5cbiAgLy8gSUUgZG9lc24ndCBtYWtlIGVycm9yIGZpZWxkcyBub24tZW51bWVyYWJsZVxuICAvLyBodHRwOi8vbXNkbi5taWNyb3NvZnQuY29tL2VuLXVzL2xpYnJhcnkvaWUvZHd3NTJzYnQodj12cy45NCkuYXNweFxuICBpZiAoaXNFcnJvcih2YWx1ZSlcbiAgICAgICYmIChrZXlzLmluZGV4T2YoJ21lc3NhZ2UnKSA+PSAwIHx8IGtleXMuaW5kZXhPZignZGVzY3JpcHRpb24nKSA+PSAwKSkge1xuICAgIHJldHVybiBmb3JtYXRFcnJvcih2YWx1ZSk7XG4gIH1cblxuICAvLyBTb21lIHR5cGUgb2Ygb2JqZWN0IHdpdGhvdXQgcHJvcGVydGllcyBjYW4gYmUgc2hvcnRjdXR0ZWQuXG4gIGlmIChrZXlzLmxlbmd0aCA9PT0gMCkge1xuICAgIGlmIChpc0Z1bmN0aW9uKHZhbHVlKSkge1xuICAgICAgdmFyIG5hbWUgPSB2YWx1ZS5uYW1lID8gJzogJyArIHZhbHVlLm5hbWUgOiAnJztcbiAgICAgIHJldHVybiBjdHguc3R5bGl6ZSgnW0Z1bmN0aW9uJyArIG5hbWUgKyAnXScsICdzcGVjaWFsJyk7XG4gICAgfVxuICAgIGlmIChpc1JlZ0V4cCh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBjdHguc3R5bGl6ZShSZWdFeHAucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpLCAncmVnZXhwJyk7XG4gICAgfVxuICAgIGlmIChpc0RhdGUodmFsdWUpKSB7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoRGF0ZS5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSksICdkYXRlJyk7XG4gICAgfVxuICAgIGlmIChpc0Vycm9yKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGZvcm1hdEVycm9yKHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICB2YXIgYmFzZSA9ICcnLCBhcnJheSA9IGZhbHNlLCBicmFjZXMgPSBbJ3snLCAnfSddO1xuXG4gIC8vIE1ha2UgQXJyYXkgc2F5IHRoYXQgdGhleSBhcmUgQXJyYXlcbiAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgYXJyYXkgPSB0cnVlO1xuICAgIGJyYWNlcyA9IFsnWycsICddJ107XG4gIH1cblxuICAvLyBNYWtlIGZ1bmN0aW9ucyBzYXkgdGhhdCB0aGV5IGFyZSBmdW5jdGlvbnNcbiAgaWYgKGlzRnVuY3Rpb24odmFsdWUpKSB7XG4gICAgdmFyIG4gPSB2YWx1ZS5uYW1lID8gJzogJyArIHZhbHVlLm5hbWUgOiAnJztcbiAgICBiYXNlID0gJyBbRnVuY3Rpb24nICsgbiArICddJztcbiAgfVxuXG4gIC8vIE1ha2UgUmVnRXhwcyBzYXkgdGhhdCB0aGV5IGFyZSBSZWdFeHBzXG4gIGlmIChpc1JlZ0V4cCh2YWx1ZSkpIHtcbiAgICBiYXNlID0gJyAnICsgUmVnRXhwLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgfVxuXG4gIC8vIE1ha2UgZGF0ZXMgd2l0aCBwcm9wZXJ0aWVzIGZpcnN0IHNheSB0aGUgZGF0ZVxuICBpZiAoaXNEYXRlKHZhbHVlKSkge1xuICAgIGJhc2UgPSAnICcgKyBEYXRlLnByb3RvdHlwZS50b1VUQ1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgfVxuXG4gIC8vIE1ha2UgZXJyb3Igd2l0aCBtZXNzYWdlIGZpcnN0IHNheSB0aGUgZXJyb3JcbiAgaWYgKGlzRXJyb3IodmFsdWUpKSB7XG4gICAgYmFzZSA9ICcgJyArIGZvcm1hdEVycm9yKHZhbHVlKTtcbiAgfVxuXG4gIGlmIChrZXlzLmxlbmd0aCA9PT0gMCAmJiAoIWFycmF5IHx8IHZhbHVlLmxlbmd0aCA9PSAwKSkge1xuICAgIHJldHVybiBicmFjZXNbMF0gKyBiYXNlICsgYnJhY2VzWzFdO1xuICB9XG5cbiAgaWYgKHJlY3Vyc2VUaW1lcyA8IDApIHtcbiAgICBpZiAoaXNSZWdFeHAodmFsdWUpKSB7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoUmVnRXhwLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSwgJ3JlZ2V4cCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoJ1tPYmplY3RdJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gIH1cblxuICBjdHguc2Vlbi5wdXNoKHZhbHVlKTtcblxuICB2YXIgb3V0cHV0O1xuICBpZiAoYXJyYXkpIHtcbiAgICBvdXRwdXQgPSBmb3JtYXRBcnJheShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLCBrZXlzKTtcbiAgfSBlbHNlIHtcbiAgICBvdXRwdXQgPSBrZXlzLm1hcChmdW5jdGlvbihrZXkpIHtcbiAgICAgIHJldHVybiBmb3JtYXRQcm9wZXJ0eShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLCBrZXksIGFycmF5KTtcbiAgICB9KTtcbiAgfVxuXG4gIGN0eC5zZWVuLnBvcCgpO1xuXG4gIHJldHVybiByZWR1Y2VUb1NpbmdsZVN0cmluZyhvdXRwdXQsIGJhc2UsIGJyYWNlcyk7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0UHJpbWl0aXZlKGN0eCwgdmFsdWUpIHtcbiAgaWYgKGlzVW5kZWZpbmVkKHZhbHVlKSlcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoJ3VuZGVmaW5lZCcsICd1bmRlZmluZWQnKTtcbiAgaWYgKGlzU3RyaW5nKHZhbHVlKSkge1xuICAgIHZhciBzaW1wbGUgPSAnXFwnJyArIEpTT04uc3RyaW5naWZ5KHZhbHVlKS5yZXBsYWNlKC9eXCJ8XCIkL2csICcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoLycvZywgXCJcXFxcJ1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcXFxcIi9nLCAnXCInKSArICdcXCcnO1xuICAgIHJldHVybiBjdHguc3R5bGl6ZShzaW1wbGUsICdzdHJpbmcnKTtcbiAgfVxuICBpZiAoaXNOdW1iZXIodmFsdWUpKVxuICAgIHJldHVybiBjdHguc3R5bGl6ZSgnJyArIHZhbHVlLCAnbnVtYmVyJyk7XG4gIGlmIChpc0Jvb2xlYW4odmFsdWUpKVxuICAgIHJldHVybiBjdHguc3R5bGl6ZSgnJyArIHZhbHVlLCAnYm9vbGVhbicpO1xuICAvLyBGb3Igc29tZSByZWFzb24gdHlwZW9mIG51bGwgaXMgXCJvYmplY3RcIiwgc28gc3BlY2lhbCBjYXNlIGhlcmUuXG4gIGlmIChpc051bGwodmFsdWUpKVxuICAgIHJldHVybiBjdHguc3R5bGl6ZSgnbnVsbCcsICdudWxsJyk7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0RXJyb3IodmFsdWUpIHtcbiAgcmV0dXJuICdbJyArIEVycm9yLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSArICddJztcbn1cblxuXG5mdW5jdGlvbiBmb3JtYXRBcnJheShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLCBrZXlzKSB7XG4gIHZhciBvdXRwdXQgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDAsIGwgPSB2YWx1ZS5sZW5ndGg7IGkgPCBsOyArK2kpIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkodmFsdWUsIFN0cmluZyhpKSkpIHtcbiAgICAgIG91dHB1dC5wdXNoKGZvcm1hdFByb3BlcnR5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsXG4gICAgICAgICAgU3RyaW5nKGkpLCB0cnVlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG91dHB1dC5wdXNoKCcnKTtcbiAgICB9XG4gIH1cbiAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgIGlmICgha2V5Lm1hdGNoKC9eXFxkKyQvKSkge1xuICAgICAgb3V0cHV0LnB1c2goZm9ybWF0UHJvcGVydHkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cyxcbiAgICAgICAgICBrZXksIHRydWUpKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gb3V0cHV0O1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdFByb3BlcnR5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsIGtleSwgYXJyYXkpIHtcbiAgdmFyIG5hbWUsIHN0ciwgZGVzYztcbiAgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodmFsdWUsIGtleSkgfHwgeyB2YWx1ZTogdmFsdWVba2V5XSB9O1xuICBpZiAoZGVzYy5nZXQpIHtcbiAgICBpZiAoZGVzYy5zZXQpIHtcbiAgICAgIHN0ciA9IGN0eC5zdHlsaXplKCdbR2V0dGVyL1NldHRlcl0nLCAnc3BlY2lhbCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHIgPSBjdHguc3R5bGl6ZSgnW0dldHRlcl0nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAoZGVzYy5zZXQpIHtcbiAgICAgIHN0ciA9IGN0eC5zdHlsaXplKCdbU2V0dGVyXScsICdzcGVjaWFsJyk7XG4gICAgfVxuICB9XG4gIGlmICghaGFzT3duUHJvcGVydHkodmlzaWJsZUtleXMsIGtleSkpIHtcbiAgICBuYW1lID0gJ1snICsga2V5ICsgJ10nO1xuICB9XG4gIGlmICghc3RyKSB7XG4gICAgaWYgKGN0eC5zZWVuLmluZGV4T2YoZGVzYy52YWx1ZSkgPCAwKSB7XG4gICAgICBpZiAoaXNOdWxsKHJlY3Vyc2VUaW1lcykpIHtcbiAgICAgICAgc3RyID0gZm9ybWF0VmFsdWUoY3R4LCBkZXNjLnZhbHVlLCBudWxsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0ciA9IGZvcm1hdFZhbHVlKGN0eCwgZGVzYy52YWx1ZSwgcmVjdXJzZVRpbWVzIC0gMSk7XG4gICAgICB9XG4gICAgICBpZiAoc3RyLmluZGV4T2YoJ1xcbicpID4gLTEpIHtcbiAgICAgICAgaWYgKGFycmF5KSB7XG4gICAgICAgICAgc3RyID0gc3RyLnNwbGl0KCdcXG4nKS5tYXAoZnVuY3Rpb24obGluZSkge1xuICAgICAgICAgICAgcmV0dXJuICcgICcgKyBsaW5lO1xuICAgICAgICAgIH0pLmpvaW4oJ1xcbicpLnN1YnN0cigyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdHIgPSAnXFxuJyArIHN0ci5zcGxpdCgnXFxuJykubWFwKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgICAgICAgIHJldHVybiAnICAgJyArIGxpbmU7XG4gICAgICAgICAgfSkuam9pbignXFxuJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc3RyID0gY3R4LnN0eWxpemUoJ1tDaXJjdWxhcl0nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgfVxuICBpZiAoaXNVbmRlZmluZWQobmFtZSkpIHtcbiAgICBpZiAoYXJyYXkgJiYga2V5Lm1hdGNoKC9eXFxkKyQvKSkge1xuICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG4gICAgbmFtZSA9IEpTT04uc3RyaW5naWZ5KCcnICsga2V5KTtcbiAgICBpZiAobmFtZS5tYXRjaCgvXlwiKFthLXpBLVpfXVthLXpBLVpfMC05XSopXCIkLykpIHtcbiAgICAgIG5hbWUgPSBuYW1lLnN1YnN0cigxLCBuYW1lLmxlbmd0aCAtIDIpO1xuICAgICAgbmFtZSA9IGN0eC5zdHlsaXplKG5hbWUsICduYW1lJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5hbWUgPSBuYW1lLnJlcGxhY2UoLycvZywgXCJcXFxcJ1wiKVxuICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFxcXFwiL2csICdcIicpXG4gICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8oXlwifFwiJCkvZywgXCInXCIpO1xuICAgICAgbmFtZSA9IGN0eC5zdHlsaXplKG5hbWUsICdzdHJpbmcnKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmFtZSArICc6ICcgKyBzdHI7XG59XG5cblxuZnVuY3Rpb24gcmVkdWNlVG9TaW5nbGVTdHJpbmcob3V0cHV0LCBiYXNlLCBicmFjZXMpIHtcbiAgdmFyIG51bUxpbmVzRXN0ID0gMDtcbiAgdmFyIGxlbmd0aCA9IG91dHB1dC5yZWR1Y2UoZnVuY3Rpb24ocHJldiwgY3VyKSB7XG4gICAgbnVtTGluZXNFc3QrKztcbiAgICBpZiAoY3VyLmluZGV4T2YoJ1xcbicpID49IDApIG51bUxpbmVzRXN0Kys7XG4gICAgcmV0dXJuIHByZXYgKyBjdXIucmVwbGFjZSgvXFx1MDAxYlxcW1xcZFxcZD9tL2csICcnKS5sZW5ndGggKyAxO1xuICB9LCAwKTtcblxuICBpZiAobGVuZ3RoID4gNjApIHtcbiAgICByZXR1cm4gYnJhY2VzWzBdICtcbiAgICAgICAgICAgKGJhc2UgPT09ICcnID8gJycgOiBiYXNlICsgJ1xcbiAnKSArXG4gICAgICAgICAgICcgJyArXG4gICAgICAgICAgIG91dHB1dC5qb2luKCcsXFxuICAnKSArXG4gICAgICAgICAgICcgJyArXG4gICAgICAgICAgIGJyYWNlc1sxXTtcbiAgfVxuXG4gIHJldHVybiBicmFjZXNbMF0gKyBiYXNlICsgJyAnICsgb3V0cHV0LmpvaW4oJywgJykgKyAnICcgKyBicmFjZXNbMV07XG59XG5cblxuLy8gTk9URTogVGhlc2UgdHlwZSBjaGVja2luZyBmdW5jdGlvbnMgaW50ZW50aW9uYWxseSBkb24ndCB1c2UgYGluc3RhbmNlb2ZgXG4vLyBiZWNhdXNlIGl0IGlzIGZyYWdpbGUgYW5kIGNhbiBiZSBlYXNpbHkgZmFrZWQgd2l0aCBgT2JqZWN0LmNyZWF0ZSgpYC5cbmZ1bmN0aW9uIGlzQXJyYXkoYXIpIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkoYXIpO1xufVxuZXhwb3J0cy5pc0FycmF5ID0gaXNBcnJheTtcblxuZnVuY3Rpb24gaXNCb29sZWFuKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ2Jvb2xlYW4nO1xufVxuZXhwb3J0cy5pc0Jvb2xlYW4gPSBpc0Jvb2xlYW47XG5cbmZ1bmN0aW9uIGlzTnVsbChhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PT0gbnVsbDtcbn1cbmV4cG9ydHMuaXNOdWxsID0gaXNOdWxsO1xuXG5mdW5jdGlvbiBpc051bGxPclVuZGVmaW5lZChhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PSBudWxsO1xufVxuZXhwb3J0cy5pc051bGxPclVuZGVmaW5lZCA9IGlzTnVsbE9yVW5kZWZpbmVkO1xuXG5mdW5jdGlvbiBpc051bWJlcihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdudW1iZXInO1xufVxuZXhwb3J0cy5pc051bWJlciA9IGlzTnVtYmVyO1xuXG5mdW5jdGlvbiBpc1N0cmluZyhhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdzdHJpbmcnO1xufVxuZXhwb3J0cy5pc1N0cmluZyA9IGlzU3RyaW5nO1xuXG5mdW5jdGlvbiBpc1N5bWJvbChhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdzeW1ib2wnO1xufVxuZXhwb3J0cy5pc1N5bWJvbCA9IGlzU3ltYm9sO1xuXG5mdW5jdGlvbiBpc1VuZGVmaW5lZChhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PT0gdm9pZCAwO1xufVxuZXhwb3J0cy5pc1VuZGVmaW5lZCA9IGlzVW5kZWZpbmVkO1xuXG5mdW5jdGlvbiBpc1JlZ0V4cChyZSkge1xuICByZXR1cm4gaXNPYmplY3QocmUpICYmIG9iamVjdFRvU3RyaW5nKHJlKSA9PT0gJ1tvYmplY3QgUmVnRXhwXSc7XG59XG5leHBvcnRzLmlzUmVnRXhwID0gaXNSZWdFeHA7XG5cbmZ1bmN0aW9uIGlzT2JqZWN0KGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ29iamVjdCcgJiYgYXJnICE9PSBudWxsO1xufVxuZXhwb3J0cy5pc09iamVjdCA9IGlzT2JqZWN0O1xuXG5mdW5jdGlvbiBpc0RhdGUoZCkge1xuICByZXR1cm4gaXNPYmplY3QoZCkgJiYgb2JqZWN0VG9TdHJpbmcoZCkgPT09ICdbb2JqZWN0IERhdGVdJztcbn1cbmV4cG9ydHMuaXNEYXRlID0gaXNEYXRlO1xuXG5mdW5jdGlvbiBpc0Vycm9yKGUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KGUpICYmXG4gICAgICAob2JqZWN0VG9TdHJpbmcoZSkgPT09ICdbb2JqZWN0IEVycm9yXScgfHwgZSBpbnN0YW5jZW9mIEVycm9yKTtcbn1cbmV4cG9ydHMuaXNFcnJvciA9IGlzRXJyb3I7XG5cbmZ1bmN0aW9uIGlzRnVuY3Rpb24oYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnZnVuY3Rpb24nO1xufVxuZXhwb3J0cy5pc0Z1bmN0aW9uID0gaXNGdW5jdGlvbjtcblxuZnVuY3Rpb24gaXNQcmltaXRpdmUoYXJnKSB7XG4gIHJldHVybiBhcmcgPT09IG51bGwgfHxcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICdib29sZWFuJyB8fFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ251bWJlcicgfHxcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICdzdHJpbmcnIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnc3ltYm9sJyB8fCAgLy8gRVM2IHN5bWJvbFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ3VuZGVmaW5lZCc7XG59XG5leHBvcnRzLmlzUHJpbWl0aXZlID0gaXNQcmltaXRpdmU7XG5cbmV4cG9ydHMuaXNCdWZmZXIgPSByZXF1aXJlKCcuL3N1cHBvcnQvaXNCdWZmZXInKTtcblxuZnVuY3Rpb24gb2JqZWN0VG9TdHJpbmcobykge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pO1xufVxuXG5cbmZ1bmN0aW9uIHBhZChuKSB7XG4gIHJldHVybiBuIDwgMTAgPyAnMCcgKyBuLnRvU3RyaW5nKDEwKSA6IG4udG9TdHJpbmcoMTApO1xufVxuXG5cbnZhciBtb250aHMgPSBbJ0phbicsICdGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJywgJ0p1bCcsICdBdWcnLCAnU2VwJyxcbiAgICAgICAgICAgICAgJ09jdCcsICdOb3YnLCAnRGVjJ107XG5cbi8vIDI2IEZlYiAxNjoxOTozNFxuZnVuY3Rpb24gdGltZXN0YW1wKCkge1xuICB2YXIgZCA9IG5ldyBEYXRlKCk7XG4gIHZhciB0aW1lID0gW3BhZChkLmdldEhvdXJzKCkpLFxuICAgICAgICAgICAgICBwYWQoZC5nZXRNaW51dGVzKCkpLFxuICAgICAgICAgICAgICBwYWQoZC5nZXRTZWNvbmRzKCkpXS5qb2luKCc6Jyk7XG4gIHJldHVybiBbZC5nZXREYXRlKCksIG1vbnRoc1tkLmdldE1vbnRoKCldLCB0aW1lXS5qb2luKCcgJyk7XG59XG5cblxuLy8gbG9nIGlzIGp1c3QgYSB0aGluIHdyYXBwZXIgdG8gY29uc29sZS5sb2cgdGhhdCBwcmVwZW5kcyBhIHRpbWVzdGFtcFxuZXhwb3J0cy5sb2cgPSBmdW5jdGlvbigpIHtcbiAgY29uc29sZS5sb2coJyVzIC0gJXMnLCB0aW1lc3RhbXAoKSwgZXhwb3J0cy5mb3JtYXQuYXBwbHkoZXhwb3J0cywgYXJndW1lbnRzKSk7XG59O1xuXG5cbi8qKlxuICogSW5oZXJpdCB0aGUgcHJvdG90eXBlIG1ldGhvZHMgZnJvbSBvbmUgY29uc3RydWN0b3IgaW50byBhbm90aGVyLlxuICpcbiAqIFRoZSBGdW5jdGlvbi5wcm90b3R5cGUuaW5oZXJpdHMgZnJvbSBsYW5nLmpzIHJld3JpdHRlbiBhcyBhIHN0YW5kYWxvbmVcbiAqIGZ1bmN0aW9uIChub3Qgb24gRnVuY3Rpb24ucHJvdG90eXBlKS4gTk9URTogSWYgdGhpcyBmaWxlIGlzIHRvIGJlIGxvYWRlZFxuICogZHVyaW5nIGJvb3RzdHJhcHBpbmcgdGhpcyBmdW5jdGlvbiBuZWVkcyB0byBiZSByZXdyaXR0ZW4gdXNpbmcgc29tZSBuYXRpdmVcbiAqIGZ1bmN0aW9ucyBhcyBwcm90b3R5cGUgc2V0dXAgdXNpbmcgbm9ybWFsIEphdmFTY3JpcHQgZG9lcyBub3Qgd29yayBhc1xuICogZXhwZWN0ZWQgZHVyaW5nIGJvb3RzdHJhcHBpbmcgKHNlZSBtaXJyb3IuanMgaW4gcjExNDkwMykuXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gY3RvciBDb25zdHJ1Y3RvciBmdW5jdGlvbiB3aGljaCBuZWVkcyB0byBpbmhlcml0IHRoZVxuICogICAgIHByb3RvdHlwZS5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IHN1cGVyQ3RvciBDb25zdHJ1Y3RvciBmdW5jdGlvbiB0byBpbmhlcml0IHByb3RvdHlwZSBmcm9tLlxuICovXG5leHBvcnRzLmluaGVyaXRzID0gcmVxdWlyZSgnaW5oZXJpdHMnKTtcblxuZXhwb3J0cy5fZXh0ZW5kID0gZnVuY3Rpb24ob3JpZ2luLCBhZGQpIHtcbiAgLy8gRG9uJ3QgZG8gYW55dGhpbmcgaWYgYWRkIGlzbid0IGFuIG9iamVjdFxuICBpZiAoIWFkZCB8fCAhaXNPYmplY3QoYWRkKSkgcmV0dXJuIG9yaWdpbjtcblxuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGFkZCk7XG4gIHZhciBpID0ga2V5cy5sZW5ndGg7XG4gIHdoaWxlIChpLS0pIHtcbiAgICBvcmlnaW5ba2V5c1tpXV0gPSBhZGRba2V5c1tpXV07XG4gIH1cbiAgcmV0dXJuIG9yaWdpbjtcbn07XG5cbmZ1bmN0aW9uIGhhc093blByb3BlcnR5KG9iaiwgcHJvcCkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7XG59XG5cbnZhciBrQ3VzdG9tUHJvbWlzaWZpZWRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyA/IFN5bWJvbCgndXRpbC5wcm9taXNpZnkuY3VzdG9tJykgOiB1bmRlZmluZWQ7XG5cbmV4cG9ydHMucHJvbWlzaWZ5ID0gZnVuY3Rpb24gcHJvbWlzaWZ5KG9yaWdpbmFsKSB7XG4gIGlmICh0eXBlb2Ygb3JpZ2luYWwgIT09ICdmdW5jdGlvbicpXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwib3JpZ2luYWxcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24nKTtcblxuICBpZiAoa0N1c3RvbVByb21pc2lmaWVkU3ltYm9sICYmIG9yaWdpbmFsW2tDdXN0b21Qcm9taXNpZmllZFN5bWJvbF0pIHtcbiAgICB2YXIgZm4gPSBvcmlnaW5hbFtrQ3VzdG9tUHJvbWlzaWZpZWRTeW1ib2xdO1xuICAgIGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcInV0aWwucHJvbWlzaWZ5LmN1c3RvbVwiIGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBGdW5jdGlvbicpO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZm4sIGtDdXN0b21Qcm9taXNpZmllZFN5bWJvbCwge1xuICAgICAgdmFsdWU6IGZuLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IGZhbHNlLCBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gZm47XG4gIH1cblxuICBmdW5jdGlvbiBmbigpIHtcbiAgICB2YXIgcHJvbWlzZVJlc29sdmUsIHByb21pc2VSZWplY3Q7XG4gICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICBwcm9taXNlUmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgICBwcm9taXNlUmVqZWN0ID0gcmVqZWN0O1xuICAgIH0pO1xuXG4gICAgdmFyIGFyZ3MgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgYXJncy5wdXNoKGFyZ3VtZW50c1tpXSk7XG4gICAgfVxuICAgIGFyZ3MucHVzaChmdW5jdGlvbiAoZXJyLCB2YWx1ZSkge1xuICAgICAgaWYgKGVycikge1xuICAgICAgICBwcm9taXNlUmVqZWN0KGVycik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9taXNlUmVzb2x2ZSh2YWx1ZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0cnkge1xuICAgICAgb3JpZ2luYWwuYXBwbHkodGhpcywgYXJncyk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBwcm9taXNlUmVqZWN0KGVycik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb21pc2U7XG4gIH1cblxuICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZm4sIE9iamVjdC5nZXRQcm90b3R5cGVPZihvcmlnaW5hbCkpO1xuXG4gIGlmIChrQ3VzdG9tUHJvbWlzaWZpZWRTeW1ib2wpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmbiwga0N1c3RvbVByb21pc2lmaWVkU3ltYm9sLCB7XG4gICAgdmFsdWU6IGZuLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IGZhbHNlLCBjb25maWd1cmFibGU6IHRydWVcbiAgfSk7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhcbiAgICBmbixcbiAgICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKG9yaWdpbmFsKVxuICApO1xufVxuXG5leHBvcnRzLnByb21pc2lmeS5jdXN0b20gPSBrQ3VzdG9tUHJvbWlzaWZpZWRTeW1ib2xcblxuZnVuY3Rpb24gY2FsbGJhY2tpZnlPblJlamVjdGVkKHJlYXNvbiwgY2IpIHtcbiAgLy8gYCFyZWFzb25gIGd1YXJkIGluc3BpcmVkIGJ5IGJsdWViaXJkIChSZWY6IGh0dHBzOi8vZ29vLmdsL3Q1SVM2TSkuXG4gIC8vIEJlY2F1c2UgYG51bGxgIGlzIGEgc3BlY2lhbCBlcnJvciB2YWx1ZSBpbiBjYWxsYmFja3Mgd2hpY2ggbWVhbnMgXCJubyBlcnJvclxuICAvLyBvY2N1cnJlZFwiLCB3ZSBlcnJvci13cmFwIHNvIHRoZSBjYWxsYmFjayBjb25zdW1lciBjYW4gZGlzdGluZ3Vpc2ggYmV0d2VlblxuICAvLyBcInRoZSBwcm9taXNlIHJlamVjdGVkIHdpdGggbnVsbFwiIG9yIFwidGhlIHByb21pc2UgZnVsZmlsbGVkIHdpdGggdW5kZWZpbmVkXCIuXG4gIGlmICghcmVhc29uKSB7XG4gICAgdmFyIG5ld1JlYXNvbiA9IG5ldyBFcnJvcignUHJvbWlzZSB3YXMgcmVqZWN0ZWQgd2l0aCBhIGZhbHN5IHZhbHVlJyk7XG4gICAgbmV3UmVhc29uLnJlYXNvbiA9IHJlYXNvbjtcbiAgICByZWFzb24gPSBuZXdSZWFzb247XG4gIH1cbiAgcmV0dXJuIGNiKHJlYXNvbik7XG59XG5cbmZ1bmN0aW9uIGNhbGxiYWNraWZ5KG9yaWdpbmFsKSB7XG4gIGlmICh0eXBlb2Ygb3JpZ2luYWwgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgXCJvcmlnaW5hbFwiIGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBGdW5jdGlvbicpO1xuICB9XG5cbiAgLy8gV2UgRE8gTk9UIHJldHVybiB0aGUgcHJvbWlzZSBhcyBpdCBnaXZlcyB0aGUgdXNlciBhIGZhbHNlIHNlbnNlIHRoYXRcbiAgLy8gdGhlIHByb21pc2UgaXMgYWN0dWFsbHkgc29tZWhvdyByZWxhdGVkIHRvIHRoZSBjYWxsYmFjaydzIGV4ZWN1dGlvblxuICAvLyBhbmQgdGhhdCB0aGUgY2FsbGJhY2sgdGhyb3dpbmcgd2lsbCByZWplY3QgdGhlIHByb21pc2UuXG4gIGZ1bmN0aW9uIGNhbGxiYWNraWZpZWQoKSB7XG4gICAgdmFyIGFyZ3MgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgYXJncy5wdXNoKGFyZ3VtZW50c1tpXSk7XG4gICAgfVxuXG4gICAgdmFyIG1heWJlQ2IgPSBhcmdzLnBvcCgpO1xuICAgIGlmICh0eXBlb2YgbWF5YmVDYiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIGxhc3QgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEZ1bmN0aW9uJyk7XG4gICAgfVxuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgY2IgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBtYXliZUNiLmFwcGx5KHNlbGYsIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgICAvLyBJbiB0cnVlIG5vZGUgc3R5bGUgd2UgcHJvY2VzcyB0aGUgY2FsbGJhY2sgb24gYG5leHRUaWNrYCB3aXRoIGFsbCB0aGVcbiAgICAvLyBpbXBsaWNhdGlvbnMgKHN0YWNrLCBgdW5jYXVnaHRFeGNlcHRpb25gLCBgYXN5bmNfaG9va3NgKVxuICAgIG9yaWdpbmFsLmFwcGx5KHRoaXMsIGFyZ3MpXG4gICAgICAudGhlbihmdW5jdGlvbihyZXQpIHsgcHJvY2Vzcy5uZXh0VGljayhjYiwgbnVsbCwgcmV0KSB9LFxuICAgICAgICAgICAgZnVuY3Rpb24ocmVqKSB7IHByb2Nlc3MubmV4dFRpY2soY2FsbGJhY2tpZnlPblJlamVjdGVkLCByZWosIGNiKSB9KTtcbiAgfVxuXG4gIE9iamVjdC5zZXRQcm90b3R5cGVPZihjYWxsYmFja2lmaWVkLCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob3JpZ2luYWwpKTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY2FsbGJhY2tpZmllZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhvcmlnaW5hbCkpO1xuICByZXR1cm4gY2FsbGJhY2tpZmllZDtcbn1cbmV4cG9ydHMuY2FsbGJhY2tpZnkgPSBjYWxsYmFja2lmeTtcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQnVmZmVyKGFyZykge1xuICByZXR1cm4gYXJnICYmIHR5cGVvZiBhcmcgPT09ICdvYmplY3QnXG4gICAgJiYgdHlwZW9mIGFyZy5jb3B5ID09PSAnZnVuY3Rpb24nXG4gICAgJiYgdHlwZW9mIGFyZy5maWxsID09PSAnZnVuY3Rpb24nXG4gICAgJiYgdHlwZW9mIGFyZy5yZWFkVUludDggPT09ICdmdW5jdGlvbic7XG59IiwiaWYgKHR5cGVvZiBPYmplY3QuY3JlYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gIC8vIGltcGxlbWVudGF0aW9uIGZyb20gc3RhbmRhcmQgbm9kZS5qcyAndXRpbCcgbW9kdWxlXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaW5oZXJpdHMoY3Rvciwgc3VwZXJDdG9yKSB7XG4gICAgY3Rvci5zdXBlcl8gPSBzdXBlckN0b3JcbiAgICBjdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDdG9yLnByb3RvdHlwZSwge1xuICAgICAgY29uc3RydWN0b3I6IHtcbiAgICAgICAgdmFsdWU6IGN0b3IsXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICB9XG4gICAgfSk7XG4gIH07XG59IGVsc2Uge1xuICAvLyBvbGQgc2Nob29sIHNoaW0gZm9yIG9sZCBicm93c2Vyc1xuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGluaGVyaXRzKGN0b3IsIHN1cGVyQ3Rvcikge1xuICAgIGN0b3Iuc3VwZXJfID0gc3VwZXJDdG9yXG4gICAgdmFyIFRlbXBDdG9yID0gZnVuY3Rpb24gKCkge31cbiAgICBUZW1wQ3Rvci5wcm90b3R5cGUgPSBzdXBlckN0b3IucHJvdG90eXBlXG4gICAgY3Rvci5wcm90b3R5cGUgPSBuZXcgVGVtcEN0b3IoKVxuICAgIGN0b3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gY3RvclxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9