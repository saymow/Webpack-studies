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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tachyons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var tachyons__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tachyons__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_styles_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mdPreviewer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);




window.onload = function () {
  document.getElementById("editor").addEventListener("submit", _mdPreviewer__WEBPACK_IMPORTED_MODULE_2__["default"].attachPreviewer(document, "source", "preview"));
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90YWNoeW9ucy9jc3MvdGFjaHlvbnMuY3NzIiwid2VicGFjazovLy8uL2Nzcy9zdHlsZXMuY3NzIiwid2VicGFjazovLy8uL3NyYy9tZFByZXZpZXdlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWFya2Rvd24vbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tYXJrZG93bi9saWIvbWFya2Rvd24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V0aWwvdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dGlsL3N1cHBvcnQvaXNCdWZmZXJCcm93c2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dGlsL25vZGVfbW9kdWxlcy9pbmhlcml0cy9pbmhlcml0c19icm93c2VyLmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsIm9ubG9hZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwibWRQcmV2aWV3ZXIiLCJhdHRhY2hQcmV2aWV3ZXIiLCIkZG9jdW1lbnQiLCJzb3VyY2VJZCIsInByZXZpZXdlcklkIiwiZXZlbnQiLCJ0ZXh0IiwidmFsdWUiLCJwcmV2aWV3IiwiaW5uZXJIVE1MIiwibWFya2Rvd24iLCJ0b0hUTUwiLCJwcmV2ZW50RGVmYXVsdCIsImV4cG9ydHMiLCJyZXF1aXJlIiwicGFyc2UiLCJleHBvc2UiLCJNYXJrZG93biIsImRpYWxlY3QiLCJkaWFsZWN0cyIsIkdydWJlciIsIkVycm9yIiwiU3RyaW5nIiwiZW1fc3RhdGUiLCJzdHJvbmdfc3RhdGUiLCJkZWJ1Z19pbmRlbnQiLCJzb3VyY2UiLCJtZCIsInRvVHJlZSIsIm9wdGlvbnMiLCJpbnB1dCIsInRvSFRNTFRyZWUiLCJyZW5kZXJKc29uTUwiLCJhdHRycyIsImV4dHJhY3RfYXR0ciIsInJlZnMiLCJyZWZlcmVuY2VzIiwiaHRtbCIsImNvbnZlcnRfdHJlZV90b19odG1sIiwibWVyZ2VfdGV4dF9ub2RlcyIsIm1rX2Jsb2NrX3RvU291cmNlIiwidW5ldmFsIiwidG9TdHJpbmciLCJ0cmFpbGluZyIsImxpbmVOdW1iZXIiLCJta19ibG9ja19pbnNwZWN0IiwidXRpbCIsImluc3BlY3QiLCJta19ibG9jayIsImJsb2NrIiwidHJhaWwiLCJsaW5lIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwicyIsInRvU291cmNlIiwidW5kZWZpbmVkIiwiY291bnRfbGluZXMiLCJzdHIiLCJuIiwiaSIsImluZGV4T2YiLCJwcm90b3R5cGUiLCJzcGxpdF9ibG9ja3MiLCJzcGxpdEJsb2NrcyIsInN0YXJ0TGluZSIsInJlcGxhY2UiLCJyZSIsImJsb2NrcyIsIm0iLCJsaW5lX25vIiwiZXhlYyIsImxhc3RJbmRleCIsInB1c2giLCJwcm9jZXNzQmxvY2siLCJuZXh0IiwiY2JzIiwib3JkIiwiX19vcmRlcl9fIiwiX19jYWxsX18iLCJjYWxsIiwicmVzIiwiaXNBcnJheSIsImRlYnVnIiwicHJvY2Vzc0lubGluZSIsImlubGluZSIsImN1c3RvbV9yb290IiwiQXJyYXkiLCJvbGRfdHJlZSIsInRyZWUiLCJiIiwic2hpZnQiLCJhcHBseSIsImFyZ3MiLCJzbGljZSIsInVuc2hpZnQiLCJwcmludCIsImNvbnNvbGUiLCJsb2ciLCJsb29wX3JlX292ZXJfYmxvY2siLCJjYiIsInZhbHVlT2YiLCJzdWJzdHIiLCJhdHhIZWFkZXIiLCJtYXRjaCIsImhlYWRlciIsImxldmVsIiwic2V0ZXh0SGVhZGVyIiwiY29kZSIsInJldCIsImxpbmVzIiwiYmxvY2tfc2VhcmNoIiwic3Vic3RyaW5nIiwiam9pbiIsImhvcml6UnVsZSIsImpzb25tbCIsImxpc3RzIiwiYW55X2xpc3QiLCJidWxsZXRfbGlzdCIsIm51bWJlcl9saXN0IiwiaXNfbGlzdF9yZSIsIlJlZ0V4cCIsImluZGVudF9yZSIsInJlZ2V4X2Zvcl9kZXB0aCIsImRlcHRoIiwiZXhwYW5kX3RhYiIsImFkZCIsImxpIiwibG9vc2UiLCJubCIsImNvbmNhdCIsImFkZF90byIsIndoYXQiLCJpc19zdHIiLCJnZXRfY29udGFpbmVkX2Jsb2NrcyIsIngiLCJwYXJhZ3JhcGhpZnkiLCJzdGFjayIsImxpc3QiLCJsYXN0X2xpIiwic3BsaWNlIiwic3VibGlzdCIsInBvcCIsIm1ha2VfbGlzdCIsImluZGVudCIsImxvb3NlX3NlYXJjaCIsInNwbGl0IiwibGlfYWNjdW11bGF0ZSIsInRpZ2h0X3NlYXJjaCIsImwiLCJsaW5lX3JlIiwid2FudGVkX2RlcHRoIiwiTWF0aCIsImZsb29yIiwiZm91bmQiLCJjb250YWluZWQiLCJmb3JFYWNoIiwibmV4dF9ibG9jayIsImhyIiwiYmxvY2txdW90ZSIsInByZXYiLCJhYnV0dGluZyIsInByb2Nlc3NlZEJsb2NrIiwiYXR0ciIsImlzRW1wdHkiLCJyZWZlcmVuY2VEZWZuIiwicmVmIiwidG9Mb3dlckNhc2UiLCJocmVmIiwidGl0bGUiLCJwYXJhIiwiX19vbmVFbGVtZW50X18iLCJvbmVFbGVtZW50IiwicGF0dGVybnNfb3JfcmUiLCJwcmV2aW91c19ub2RlcyIsIl9fcGF0dGVybnNfXyIsImluZGV4IiwicGF0dGVybnMiLCJvdXQiLCJfX2VzY2FwZV9fIiwiZXNjYXBlZCIsImNoYXJBdCIsImltYWdlIiwiYWx0Iiwib3JpZ2luYWwiLCJsaW5rIiwib3JpZyIsIkRpYWxlY3RIZWxwZXJzIiwiaW5saW5lX3VudGlsX2NoYXIiLCJjb25zdW1lZCIsImNoaWxkcmVuIiwidXJsIiwib3Blbl9wYXJlbnMiLCJsZW4iLCJhdXRvTGluayIsImlubGluZUNvZGUiLCJsaW5lQnJlYWsiLCJzdHJvbmdfZW0iLCJ0YWciLCJzdGF0ZV9zbG90Iiwib3RoZXJfc2xvdCIsIkNsb3NlVGFnIiwibGVuX2FmdGVyIiwibmFtZSIsIm9yaWdfbWF0Y2giLCJvdGhlciIsInN0YXRlIiwibGFzdCIsImNoZWNrIiwiYnVpbGRCbG9ja09yZGVyIiwiZCIsImJ1aWxkSW5saW5lUGF0dGVybnMiLCJmbiIsInBhdHRlcm4iLCJ3YW50Iiwibm9kZXMiLCJzdWJjbGFzc0RpYWxlY3QiLCJCbG9jayIsIklubGluZSIsIk1hcnVrdSIsInByb2Nlc3NNZXRhSGFzaCIsIm1ldGFfc3RyaW5nIiwibWV0YSIsInNwbGl0X21ldGFfaGFzaCIsInRlc3QiLCJpZCIsInBhcnRzIiwiaW5fcXVvdGVzIiwibGV0dGVyIiwiZG9jdW1lbnRfbWV0YSIsInBhaXJzIiwicCIsImtleSIsImJsb2NrX21ldGEiLCJoYXNoIiwibm9kZSIsImEiLCJyZXN1bHQiLCJkZWZpbml0aW9uX2xpc3QiLCJ0aWdodCIsInRlcm1zIiwiZGVmbnMiLCJ0YWJsZSIsIl9zcGxpdF9vbl91bmVzY2FwZWQiLCJjaCIsInIiLCJsZWFkaW5nX3BpcGUiLCJub19sZWFkaW5nX3BpcGUiLCJodG1sX2F0dHJzIiwiYWxpZ24iLCJ0cmltIiwicm93IiwiaHRtbF9yb3ciLCJpbmxpbmVfbWV0YSIsIm1hdGNoZXMiLCJiZWZvcmUiLCJrIiwib2JqIiwiT2JqZWN0IiwiYXJyIiwidGhpc3AiLCJoYXNPd25Qcm9wZXJ0eSIsInJvb3QiLCJjb250ZW50IiwicmVuZGVyX3RyZWUiLCJlc2NhcGVIVE1MIiwiYXR0cmlidXRlcyIsInRhZ19hdHRycyIsInByZXByb2Nlc3NUcmVlTm9kZSIsInNyYyIsImdldE93blByb3BlcnR5RGVzY3JpcHRvcnMiLCJrZXlzIiwiZGVzY3JpcHRvcnMiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJmb3JtYXRSZWdFeHAiLCJmb3JtYXQiLCJmIiwiaXNTdHJpbmciLCJvYmplY3RzIiwiTnVtYmVyIiwiSlNPTiIsInN0cmluZ2lmeSIsIl8iLCJpc051bGwiLCJpc09iamVjdCIsImRlcHJlY2F0ZSIsIm1zZyIsInByb2Nlc3MiLCJub0RlcHJlY2F0aW9uIiwid2FybmVkIiwiZGVwcmVjYXRlZCIsInRocm93RGVwcmVjYXRpb24iLCJ0cmFjZURlcHJlY2F0aW9uIiwidHJhY2UiLCJlcnJvciIsImRlYnVncyIsImRlYnVnRW52aXJvbiIsImRlYnVnbG9nIiwic2V0IiwiaXNVbmRlZmluZWQiLCJlbnYiLCJOT0RFX0RFQlVHIiwidG9VcHBlckNhc2UiLCJwaWQiLCJvcHRzIiwiY3R4Iiwic2VlbiIsInN0eWxpemUiLCJzdHlsaXplTm9Db2xvciIsImNvbG9ycyIsImlzQm9vbGVhbiIsInNob3dIaWRkZW4iLCJfZXh0ZW5kIiwiY3VzdG9tSW5zcGVjdCIsInN0eWxpemVXaXRoQ29sb3IiLCJmb3JtYXRWYWx1ZSIsInN0eWxlcyIsInN0eWxlVHlwZSIsInN0eWxlIiwiYXJyYXlUb0hhc2giLCJhcnJheSIsInZhbCIsImlkeCIsInJlY3Vyc2VUaW1lcyIsImlzRnVuY3Rpb24iLCJjb25zdHJ1Y3RvciIsInByaW1pdGl2ZSIsImZvcm1hdFByaW1pdGl2ZSIsInZpc2libGVLZXlzIiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsImlzRXJyb3IiLCJmb3JtYXRFcnJvciIsImlzUmVnRXhwIiwiaXNEYXRlIiwiRGF0ZSIsImJhc2UiLCJicmFjZXMiLCJ0b1VUQ1N0cmluZyIsIm91dHB1dCIsImZvcm1hdEFycmF5IiwibWFwIiwiZm9ybWF0UHJvcGVydHkiLCJyZWR1Y2VUb1NpbmdsZVN0cmluZyIsInNpbXBsZSIsImlzTnVtYmVyIiwiZGVzYyIsImdldCIsIm51bUxpbmVzRXN0IiwicmVkdWNlIiwiY3VyIiwiYXIiLCJhcmciLCJpc051bGxPclVuZGVmaW5lZCIsImlzU3ltYm9sIiwib2JqZWN0VG9TdHJpbmciLCJlIiwiaXNQcmltaXRpdmUiLCJpc0J1ZmZlciIsIm8iLCJwYWQiLCJtb250aHMiLCJ0aW1lc3RhbXAiLCJ0aW1lIiwiZ2V0SG91cnMiLCJnZXRNaW51dGVzIiwiZ2V0U2Vjb25kcyIsImdldERhdGUiLCJnZXRNb250aCIsImluaGVyaXRzIiwib3JpZ2luIiwicHJvcCIsImtDdXN0b21Qcm9taXNpZmllZFN5bWJvbCIsIlN5bWJvbCIsInByb21pc2lmeSIsIlR5cGVFcnJvciIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsIndyaXRhYmxlIiwiY29uZmlndXJhYmxlIiwicHJvbWlzZVJlc29sdmUiLCJwcm9taXNlUmVqZWN0IiwicHJvbWlzZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZXJyIiwic2V0UHJvdG90eXBlT2YiLCJnZXRQcm90b3R5cGVPZiIsImRlZmluZVByb3BlcnRpZXMiLCJjdXN0b20iLCJjYWxsYmFja2lmeU9uUmVqZWN0ZWQiLCJyZWFzb24iLCJuZXdSZWFzb24iLCJjYWxsYmFja2lmeSIsImNhbGxiYWNraWZpZWQiLCJtYXliZUNiIiwic2VsZiIsInRoZW4iLCJuZXh0VGljayIsInJlaiIsIm1vZHVsZSIsImNhY2hlZFNldFRpbWVvdXQiLCJjYWNoZWRDbGVhclRpbWVvdXQiLCJkZWZhdWx0U2V0VGltb3V0IiwiZGVmYXVsdENsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJydW5UaW1lb3V0IiwiZnVuIiwicnVuQ2xlYXJUaW1lb3V0IiwibWFya2VyIiwicXVldWUiLCJkcmFpbmluZyIsImN1cnJlbnRRdWV1ZSIsInF1ZXVlSW5kZXgiLCJjbGVhblVwTmV4dFRpY2siLCJkcmFpblF1ZXVlIiwidGltZW91dCIsInJ1biIsIkl0ZW0iLCJicm93c2VyIiwiYXJndiIsInZlcnNpb24iLCJ2ZXJzaW9ucyIsIm5vb3AiLCJvbiIsImFkZExpc3RlbmVyIiwib25jZSIsIm9mZiIsInJlbW92ZUxpc3RlbmVyIiwicmVtb3ZlQWxsTGlzdGVuZXJzIiwiZW1pdCIsInByZXBlbmRMaXN0ZW5lciIsInByZXBlbmRPbmNlTGlzdGVuZXIiLCJsaXN0ZW5lcnMiLCJiaW5kaW5nIiwiY3dkIiwiY2hkaXIiLCJkaXIiLCJ1bWFzayIsImNvcHkiLCJmaWxsIiwicmVhZFVJbnQ4IiwiY3JlYXRlIiwiY3RvciIs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T3pGLEdBQUcsQ0FBQzBGLElBQVgsS0FBb0IsVUFGbEIsSUFHRixPQUFPMUYsR0FBRyxDQUFDMkYsU0FBWCxLQUF5QixVQUg5QjtBQUlELENBTEQsQzs7Ozs7O0FDQUEsSUFBSSxPQUFPeEwsTUFBTSxDQUFDeUwsTUFBZCxLQUF5QixVQUE3QixFQUF5QztBQUN2QztBQUNBM0MsUUFBTSxDQUFDblksT0FBUCxHQUFpQixTQUFTbVcsUUFBVCxDQUFrQjRFLElBQWxCLEVBQXdCQyxTQUF4QixFQUFtQztBQUNsREQsUUFBSSxDQUFDRSxNQUFMLEdBQWNELFNBQWQ7QUFDQUQsUUFBSSxDQUFDOVgsU0FBTCxHQUFpQm9NLE1BQU0sQ0FBQ3lMLE1BQVAsQ0FBY0UsU0FBUyxDQUFDL1gsU0FBeEIsRUFBbUM7QUFDbER1USxpQkFBVyxFQUFFO0FBQ1g5VCxhQUFLLEVBQUVxYixJQURJO0FBRVhwRSxrQkFBVSxFQUFFLEtBRkQ7QUFHWEMsZ0JBQVEsRUFBRSxJQUhDO0FBSVhDLG9CQUFZLEVBQUU7QUFKSDtBQURxQyxLQUFuQyxDQUFqQjtBQVFELEdBVkQ7QUFXRCxDQWJELE1BYU87QUFDTDtBQUNBc0IsUUFBTSxDQUFDblksT0FBUCxHQUFpQixTQUFTbVcsUUFBVCxDQUFrQjRFLElBQWxCLEVBQXdCQyxTQUF4QixFQUFtQztBQUNsREQsUUFBSSxDQUFDRSxNQUFMLEdBQWNELFNBQWQ7O0FBQ0EsUUFBSUUsUUFBUSxHQUFHLFlBQVksQ0FBRSxDQUE3Qjs7QUFDQUEsWUFBUSxDQUFDalksU0FBVCxHQUFxQitYLFNBQVMsQ0FBQy9YLFNBQS9CO0FBQ0E4WCxRQUFJLENBQUM5WCxTQUFMLEdBQWlCLElBQUlpWSxRQUFKLEVBQWpCO0FBQ0FILFFBQUksQ0FBQzlYLFNBQUwsQ0FBZXVRLFdBQWYsR0FBNkJ1SCxJQUE3QjtBQUNELEdBTkQ7QUFPRCxDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCBcInRhY2h5b25zXCI7XHJcbmltcG9ydCBcIi4uL2Nzcy9zdHlsZXMuY3NzXCI7XHJcblxyXG5pbXBvcnQgbWRQcmV2aWV3ZXIgZnJvbSBcIi4vbWRQcmV2aWV3ZXJcIjtcclxuXHJcbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgZG9jdW1lbnRcclxuICAgIC5nZXRFbGVtZW50QnlJZChcImVkaXRvclwiKVxyXG4gICAgLmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgIFwic3VibWl0XCIsXHJcbiAgICAgIG1kUHJldmlld2VyLmF0dGFjaFByZXZpZXdlcihkb2N1bWVudCwgXCJzb3VyY2VcIiwgXCJwcmV2aWV3XCIpXHJcbiAgICApO1xyXG59O1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgeyBtYXJrZG93biB9IGZyb20gXCJtYXJrZG93blwiO1xyXG5cclxudmFyIGF0dGFjaFByZXZpZXdlciA9ICgkZG9jdW1lbnQsIHNvdXJjZUlkLCBwcmV2aWV3ZXJJZCkgPT4ge1xyXG4gIHJldHVybiAoZXZlbnQpID0+IHtcclxuICAgIGNvbnN0IHRleHQgPSAkZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc291cmNlSWQpLnZhbHVlLFxyXG4gICAgICAgICAgcHJldmlldyA9ICRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwcmV2aWV3ZXJJZCk7XHJcblxyXG4gICAgcHJldmlldy5pbm5lckhUTUwgPSBtYXJrZG93bi50b0hUTUwodGV4dCk7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgYXR0YWNoUHJldmlld2VyLFxyXG59O1xyXG4iLCIvLyBzdXBlciBzaW1wbGUgbW9kdWxlIGZvciB0aGUgbW9zdCBjb21tb24gbm9kZWpzIHVzZSBjYXNlLlxuZXhwb3J0cy5tYXJrZG93biA9IHJlcXVpcmUoXCIuL21hcmtkb3duXCIpO1xuZXhwb3J0cy5wYXJzZSA9IGV4cG9ydHMubWFya2Rvd24udG9IVE1MO1xuIiwiLy8gUmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2Vcbi8vIENvcHlyaWdodCAoYykgMjAwOS0yMDEwIERvbWluaWMgQmFnZ290dFxuLy8gQ29weXJpZ2h0IChjKSAyMDA5LTIwMTAgQXNoIEJlcmxpblxuLy8gQ29weXJpZ2h0IChjKSAyMDExIENocmlzdG9waCBEb3JuIDxjaHJpc3RvcGhAY2hyaXN0b3BoZG9ybi5jb20+IChodHRwOi8vd3d3LmNocmlzdG9waGRvcm4uY29tKVxuXG4vKmpzaGludCBicm93c2VyOnRydWUsIGRldmVsOnRydWUgKi9cblxuKGZ1bmN0aW9uKCBleHBvc2UgKSB7XG5cbi8qKlxuICogIGNsYXNzIE1hcmtkb3duXG4gKlxuICogIE1hcmtkb3duIHByb2Nlc3NpbmcgaW4gSmF2YXNjcmlwdCBkb25lIHJpZ2h0LiBXZSBoYXZlIHZlcnkgcGFydGljdWxhciB2aWV3c1xuICogIG9uIHdoYXQgY29uc3RpdHV0ZXMgJ3JpZ2h0JyB3aGljaCBpbmNsdWRlOlxuICpcbiAqICAtIHByb2R1Y2VzIHdlbGwtZm9ybWVkIEhUTUwgKHRoaXMgbWVhbnMgdGhhdCBlbSBhbmQgc3Ryb25nIG5lc3RpbmcgaXNcbiAqICAgIGltcG9ydGFudClcbiAqXG4gKiAgLSBoYXMgYW4gaW50ZXJtZWRpYXRlIHJlcHJlc2VudGF0aW9uIHRvIGFsbG93IHByb2Nlc3Npbmcgb2YgcGFyc2VkIGRhdGEgKFdlXG4gKiAgICBpbiBmYWN0IGhhdmUgdHdvLCBib3RoIGFzIFtKc29uTUxdOiBhIG1hcmtkb3duIHRyZWUgYW5kIGFuIEhUTUwgdHJlZSkuXG4gKlxuICogIC0gaXMgZWFzaWx5IGV4dGVuc2libGUgdG8gYWRkIG5ldyBkaWFsZWN0cyB3aXRob3V0IGhhdmluZyB0byByZXdyaXRlIHRoZVxuICogICAgZW50aXJlIHBhcnNpbmcgbWVjaGFuaWNzXG4gKlxuICogIC0gaGFzIGEgZ29vZCB0ZXN0IHN1aXRlXG4gKlxuICogIFRoaXMgaW1wbGVtZW50YXRpb24gZnVsZmlsbHMgYWxsIG9mIHRoZXNlIChleGNlcHQgdGhhdCB0aGUgdGVzdCBzdWl0ZSBjb3VsZFxuICogIGRvIHdpdGggZXhwYW5kaW5nIHRvIGF1dG9tYXRpY2FsbHkgcnVuIGFsbCB0aGUgZml4dHVyZXMgZnJvbSBvdGhlciBNYXJrZG93blxuICogIGltcGxlbWVudGF0aW9ucy4pXG4gKlxuICogICMjIyMjIEludGVybWVkaWF0ZSBSZXByZXNlbnRhdGlvblxuICpcbiAqICAqVE9ETyogVGFsayBhYm91dCB0aGlzIDopIEl0cyBKc29uTUwsIGJ1dCBkb2N1bWVudCB0aGUgbm9kZSBuYW1lcyB3ZSB1c2UuXG4gKlxuICogIFtKc29uTUxdOiBodHRwOi8vanNvbm1sLm9yZy8gXCJKU09OIE1hcmt1cCBMYW5ndWFnZVwiXG4gKiovXG52YXIgTWFya2Rvd24gPSBleHBvc2UuTWFya2Rvd24gPSBmdW5jdGlvbihkaWFsZWN0KSB7XG4gIHN3aXRjaCAodHlwZW9mIGRpYWxlY3QpIHtcbiAgICBjYXNlIFwidW5kZWZpbmVkXCI6XG4gICAgICB0aGlzLmRpYWxlY3QgPSBNYXJrZG93bi5kaWFsZWN0cy5HcnViZXI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwib2JqZWN0XCI6XG4gICAgICB0aGlzLmRpYWxlY3QgPSBkaWFsZWN0O1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIGlmICggZGlhbGVjdCBpbiBNYXJrZG93bi5kaWFsZWN0cyApIHtcbiAgICAgICAgdGhpcy5kaWFsZWN0ID0gTWFya2Rvd24uZGlhbGVjdHNbZGlhbGVjdF07XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5rbm93biBNYXJrZG93biBkaWFsZWN0ICdcIiArIFN0cmluZyhkaWFsZWN0KSArIFwiJ1wiKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICB9XG4gIHRoaXMuZW1fc3RhdGUgPSBbXTtcbiAgdGhpcy5zdHJvbmdfc3RhdGUgPSBbXTtcbiAgdGhpcy5kZWJ1Z19pbmRlbnQgPSBcIlwiO1xufTtcblxuLyoqXG4gKiAgcGFyc2UoIG1hcmtkb3duLCBbZGlhbGVjdF0gKSAtPiBKc29uTUxcbiAqICAtIG1hcmtkb3duIChTdHJpbmcpOiBtYXJrZG93biBzdHJpbmcgdG8gcGFyc2VcbiAqICAtIGRpYWxlY3QgKFN0cmluZyB8IERpYWxlY3QpOiB0aGUgZGlhbGVjdCB0byB1c2UsIGRlZmF1bHRzIHRvIGdydWJlclxuICpcbiAqICBQYXJzZSBgbWFya2Rvd25gIGFuZCByZXR1cm4gYSBtYXJrZG93biBkb2N1bWVudCBhcyBhIE1hcmtkb3duLkpzb25NTCB0cmVlLlxuICoqL1xuZXhwb3NlLnBhcnNlID0gZnVuY3Rpb24oIHNvdXJjZSwgZGlhbGVjdCApIHtcbiAgLy8gZGlhbGVjdCB3aWxsIGRlZmF1bHQgaWYgdW5kZWZpbmVkXG4gIHZhciBtZCA9IG5ldyBNYXJrZG93biggZGlhbGVjdCApO1xuICByZXR1cm4gbWQudG9UcmVlKCBzb3VyY2UgKTtcbn07XG5cbi8qKlxuICogIHRvSFRNTCggbWFya2Rvd24sIFtkaWFsZWN0XSAgKSAtPiBTdHJpbmdcbiAqICB0b0hUTUwoIG1kX3RyZWUgKSAtPiBTdHJpbmdcbiAqICAtIG1hcmtkb3duIChTdHJpbmcpOiBtYXJrZG93biBzdHJpbmcgdG8gcGFyc2VcbiAqICAtIG1kX3RyZWUgKE1hcmtkb3duLkpzb25NTCk6IHBhcnNlZCBtYXJrZG93biB0cmVlXG4gKlxuICogIFRha2UgbWFya2Rvd24gKGVpdGhlciBhcyBhIHN0cmluZyBvciBhcyBhIEpzb25NTCB0cmVlKSBhbmQgcnVuIGl0IHRocm91Z2hcbiAqICBbW3RvSFRNTFRyZWVdXSB0aGVuIHR1cm4gaXQgaW50byBhIHdlbGwtZm9ybWF0ZWQgSFRNTCBmcmFnbWVudC5cbiAqKi9cbmV4cG9zZS50b0hUTUwgPSBmdW5jdGlvbiB0b0hUTUwoIHNvdXJjZSAsIGRpYWxlY3QgLCBvcHRpb25zICkge1xuICB2YXIgaW5wdXQgPSBleHBvc2UudG9IVE1MVHJlZSggc291cmNlICwgZGlhbGVjdCAsIG9wdGlvbnMgKTtcblxuICByZXR1cm4gZXhwb3NlLnJlbmRlckpzb25NTCggaW5wdXQgKTtcbn07XG5cbi8qKlxuICogIHRvSFRNTFRyZWUoIG1hcmtkb3duLCBbZGlhbGVjdF0gKSAtPiBKc29uTUxcbiAqICB0b0hUTUxUcmVlKCBtZF90cmVlICkgLT4gSnNvbk1MXG4gKiAgLSBtYXJrZG93biAoU3RyaW5nKTogbWFya2Rvd24gc3RyaW5nIHRvIHBhcnNlXG4gKiAgLSBkaWFsZWN0IChTdHJpbmcgfCBEaWFsZWN0KTogdGhlIGRpYWxlY3QgdG8gdXNlLCBkZWZhdWx0cyB0byBncnViZXJcbiAqICAtIG1kX3RyZWUgKE1hcmtkb3duLkpzb25NTCk6IHBhcnNlZCBtYXJrZG93biB0cmVlXG4gKlxuICogIFR1cm4gbWFya2Rvd24gaW50byBIVE1MLCByZXByZXNlbnRlZCBhcyBhIEpzb25NTCB0cmVlLiBJZiBhIHN0cmluZyBpcyBnaXZlblxuICogIHRvIHRoaXMgZnVuY3Rpb24sIGl0IGlzIGZpcnN0IHBhcnNlZCBpbnRvIGEgbWFya2Rvd24gdHJlZSBieSBjYWxsaW5nXG4gKiAgW1twYXJzZV1dLlxuICoqL1xuZXhwb3NlLnRvSFRNTFRyZWUgPSBmdW5jdGlvbiB0b0hUTUxUcmVlKCBpbnB1dCwgZGlhbGVjdCAsIG9wdGlvbnMgKSB7XG4gIC8vIGNvbnZlcnQgc3RyaW5nIGlucHV0IHRvIGFuIE1EIHRyZWVcbiAgaWYgKCB0eXBlb2YgaW5wdXQgPT09XCJzdHJpbmdcIiApIGlucHV0ID0gdGhpcy5wYXJzZSggaW5wdXQsIGRpYWxlY3QgKTtcblxuICAvLyBOb3cgY29udmVydCB0aGUgTUQgdHJlZSB0byBhbiBIVE1MIHRyZWVcblxuICAvLyByZW1vdmUgcmVmZXJlbmNlcyBmcm9tIHRoZSB0cmVlXG4gIHZhciBhdHRycyA9IGV4dHJhY3RfYXR0ciggaW5wdXQgKSxcbiAgICAgIHJlZnMgPSB7fTtcblxuICBpZiAoIGF0dHJzICYmIGF0dHJzLnJlZmVyZW5jZXMgKSB7XG4gICAgcmVmcyA9IGF0dHJzLnJlZmVyZW5jZXM7XG4gIH1cblxuICB2YXIgaHRtbCA9IGNvbnZlcnRfdHJlZV90b19odG1sKCBpbnB1dCwgcmVmcyAsIG9wdGlvbnMgKTtcbiAgbWVyZ2VfdGV4dF9ub2RlcyggaHRtbCApO1xuICByZXR1cm4gaHRtbDtcbn07XG5cbi8vIEZvciBTcGlkZXJtb25rZXkgYmFzZWQgZW5naW5lc1xuZnVuY3Rpb24gbWtfYmxvY2tfdG9Tb3VyY2UoKSB7XG4gIHJldHVybiBcIk1hcmtkb3duLm1rX2Jsb2NrKCBcIiArXG4gICAgICAgICAgdW5ldmFsKHRoaXMudG9TdHJpbmcoKSkgK1xuICAgICAgICAgIFwiLCBcIiArXG4gICAgICAgICAgdW5ldmFsKHRoaXMudHJhaWxpbmcpICtcbiAgICAgICAgICBcIiwgXCIgK1xuICAgICAgICAgIHVuZXZhbCh0aGlzLmxpbmVOdW1iZXIpICtcbiAgICAgICAgICBcIiApXCI7XG59XG5cbi8vIG5vZGVcbmZ1bmN0aW9uIG1rX2Jsb2NrX2luc3BlY3QoKSB7XG4gIHZhciB1dGlsID0gcmVxdWlyZShcInV0aWxcIik7XG4gIHJldHVybiBcIk1hcmtkb3duLm1rX2Jsb2NrKCBcIiArXG4gICAgICAgICAgdXRpbC5pbnNwZWN0KHRoaXMudG9TdHJpbmcoKSkgK1xuICAgICAgICAgIFwiLCBcIiArXG4gICAgICAgICAgdXRpbC5pbnNwZWN0KHRoaXMudHJhaWxpbmcpICtcbiAgICAgICAgICBcIiwgXCIgK1xuICAgICAgICAgIHV0aWwuaW5zcGVjdCh0aGlzLmxpbmVOdW1iZXIpICtcbiAgICAgICAgICBcIiApXCI7XG5cbn1cblxudmFyIG1rX2Jsb2NrID0gTWFya2Rvd24ubWtfYmxvY2sgPSBmdW5jdGlvbihibG9jaywgdHJhaWwsIGxpbmUpIHtcbiAgLy8gQmUgaGVscGZ1bCBmb3IgZGVmYXVsdCBjYXNlIGluIHRlc3RzLlxuICBpZiAoIGFyZ3VtZW50cy5sZW5ndGggPT0gMSApIHRyYWlsID0gXCJcXG5cXG5cIjtcblxuICB2YXIgcyA9IG5ldyBTdHJpbmcoYmxvY2spO1xuICBzLnRyYWlsaW5nID0gdHJhaWw7XG4gIC8vIFRvIG1ha2UgaXQgY2xlYXIgaXRzIG5vdCBqdXN0IGEgc3RyaW5nXG4gIHMuaW5zcGVjdCA9IG1rX2Jsb2NrX2luc3BlY3Q7XG4gIHMudG9Tb3VyY2UgPSBta19ibG9ja190b1NvdXJjZTtcblxuICBpZiAoIGxpbmUgIT0gdW5kZWZpbmVkIClcbiAgICBzLmxpbmVOdW1iZXIgPSBsaW5lO1xuXG4gIHJldHVybiBzO1xufTtcblxuZnVuY3Rpb24gY291bnRfbGluZXMoIHN0ciApIHtcbiAgdmFyIG4gPSAwLCBpID0gLTE7XG4gIHdoaWxlICggKCBpID0gc3RyLmluZGV4T2YoXCJcXG5cIiwgaSArIDEpICkgIT09IC0xICkgbisrO1xuICByZXR1cm4gbjtcbn1cblxuLy8gSW50ZXJuYWwgLSBzcGxpdCBzb3VyY2UgaW50byByb3VnaCBibG9ja3Ncbk1hcmtkb3duLnByb3RvdHlwZS5zcGxpdF9ibG9ja3MgPSBmdW5jdGlvbiBzcGxpdEJsb2NrcyggaW5wdXQsIHN0YXJ0TGluZSApIHtcbiAgaW5wdXQgPSBpbnB1dC5yZXBsYWNlKC8oXFxyXFxufFxcbnxcXHIpL2csIFwiXFxuXCIpO1xuICAvLyBbXFxzXFxTXSBtYXRjaGVzIF9hbnl0aGluZ18gKG5ld2xpbmUgb3Igc3BhY2UpXG4gIC8vIFteXSBpcyBlcXVpdmFsZW50IGJ1dCBkb2Vzbid0IHdvcmsgaW4gSUVzLlxuICB2YXIgcmUgPSAvKFtcXHNcXFNdKz8pKCR8XFxuI3xcXG4oPzpcXHMqXFxufCQpKykvZyxcbiAgICAgIGJsb2NrcyA9IFtdLFxuICAgICAgbTtcblxuICB2YXIgbGluZV9ubyA9IDE7XG5cbiAgaWYgKCAoIG0gPSAvXihcXHMqXFxuKS8uZXhlYyhpbnB1dCkgKSAhPSBudWxsICkge1xuICAgIC8vIHNraXAgKGJ1dCBjb3VudCkgbGVhZGluZyBibGFuayBsaW5lc1xuICAgIGxpbmVfbm8gKz0gY291bnRfbGluZXMoIG1bMF0gKTtcbiAgICByZS5sYXN0SW5kZXggPSBtWzBdLmxlbmd0aDtcbiAgfVxuXG4gIHdoaWxlICggKCBtID0gcmUuZXhlYyhpbnB1dCkgKSAhPT0gbnVsbCApIHtcbiAgICBpZiAobVsyXSA9PSBcIlxcbiNcIikge1xuICAgICAgbVsyXSA9IFwiXFxuXCI7XG4gICAgICByZS5sYXN0SW5kZXgtLTtcbiAgICB9XG4gICAgYmxvY2tzLnB1c2goIG1rX2Jsb2NrKCBtWzFdLCBtWzJdLCBsaW5lX25vICkgKTtcbiAgICBsaW5lX25vICs9IGNvdW50X2xpbmVzKCBtWzBdICk7XG4gIH1cblxuICByZXR1cm4gYmxvY2tzO1xufTtcblxuLyoqXG4gKiAgTWFya2Rvd24jcHJvY2Vzc0Jsb2NrKCBibG9jaywgbmV4dCApIC0+IHVuZGVmaW5lZCB8IFsgSnNvbk1MLCAuLi4gXVxuICogIC0gYmxvY2sgKFN0cmluZyk6IHRoZSBibG9jayB0byBwcm9jZXNzXG4gKiAgLSBuZXh0IChBcnJheSk6IHRoZSBmb2xsb3dpbmcgYmxvY2tzXG4gKlxuICogUHJvY2VzcyBgYmxvY2tgIGFuZCByZXR1cm4gYW4gYXJyYXkgb2YgSnNvbk1MIG5vZGVzIHJlcHJlc2VudGluZyBgYmxvY2tgLlxuICpcbiAqIEl0IGRvZXMgdGhpcyBieSBhc2tpbmcgZWFjaCBibG9jayBsZXZlbCBmdW5jdGlvbiBpbiB0aGUgZGlhbGVjdCB0byBwcm9jZXNzXG4gKiB0aGUgYmxvY2sgdW50aWwgb25lIGNhbi4gU3VjY2VzZnVsIGhhbmRsaW5nIGlzIGluZGljYXRlZCBieSByZXR1cm5pbmcgYW5cbiAqIGFycmF5ICh3aXRoIHplcm8gb3IgbW9yZSBKc29uTUwgbm9kZXMpLCBmYWlsdXJlIGJ5IGEgZmFsc2UgdmFsdWUuXG4gKlxuICogQmxvY2tzIGhhbmRsZXJzIGFyZSByZXNwb25zaWJsZSBmb3IgY2FsbGluZyBbW01hcmtkb3duI3Byb2Nlc3NJbmxpbmVdXVxuICogdGhlbXNlbHZlcyBhcyBhcHByb3ByaWF0ZS5cbiAqXG4gKiBJZiB0aGUgYmxvY2tzIHdlcmUgc3BsaXQgaW5jb3JyZWN0bHkgb3IgYWRqYWNlbnQgYmxvY2tzIG5lZWQgY29sbGFwc2luZyB5b3VcbiAqIGNhbiBhZGp1c3QgYG5leHRgIGluIHBsYWNlIHVzaW5nIHNoaWZ0L3NwbGljZSBldGMuXG4gKlxuICogSWYgYW55IG9mIHRoaXMgZGVmYXVsdCBiZWhhdmlvdXIgaXMgbm90IHJpZ2h0IGZvciB0aGUgZGlhbGVjdCwgeW91IGNhblxuICogZGVmaW5lIGEgYF9fY2FsbF9fYCBtZXRob2Qgb24gdGhlIGRpYWxlY3QgdGhhdCB3aWxsIGdldCBpbnZva2VkIHRvIGhhbmRsZVxuICogdGhlIGJsb2NrIHByb2Nlc3NpbmcuXG4gKi9cbk1hcmtkb3duLnByb3RvdHlwZS5wcm9jZXNzQmxvY2sgPSBmdW5jdGlvbiBwcm9jZXNzQmxvY2soIGJsb2NrLCBuZXh0ICkge1xuICB2YXIgY2JzID0gdGhpcy5kaWFsZWN0LmJsb2NrLFxuICAgICAgb3JkID0gY2JzLl9fb3JkZXJfXztcblxuICBpZiAoIFwiX19jYWxsX19cIiBpbiBjYnMgKSB7XG4gICAgcmV0dXJuIGNicy5fX2NhbGxfXy5jYWxsKHRoaXMsIGJsb2NrLCBuZXh0KTtcbiAgfVxuXG4gIGZvciAoIHZhciBpID0gMDsgaSA8IG9yZC5sZW5ndGg7IGkrKyApIHtcbiAgICAvL0Q6dGhpcy5kZWJ1ZyggXCJUZXN0aW5nXCIsIG9yZFtpXSApO1xuICAgIHZhciByZXMgPSBjYnNbIG9yZFtpXSBdLmNhbGwoIHRoaXMsIGJsb2NrLCBuZXh0ICk7XG4gICAgaWYgKCByZXMgKSB7XG4gICAgICAvL0Q6dGhpcy5kZWJ1ZyhcIiAgbWF0Y2hlZFwiKTtcbiAgICAgIGlmICggIWlzQXJyYXkocmVzKSB8fCAoIHJlcy5sZW5ndGggPiAwICYmICEoIGlzQXJyYXkocmVzWzBdKSApICkgKVxuICAgICAgICB0aGlzLmRlYnVnKG9yZFtpXSwgXCJkaWRuJ3QgcmV0dXJuIGEgcHJvcGVyIGFycmF5XCIpO1xuICAgICAgLy9EOnRoaXMuZGVidWcoIFwiXCIgKTtcbiAgICAgIHJldHVybiByZXM7XG4gICAgfVxuICB9XG5cbiAgLy8gVWhvaCEgbm8gbWF0Y2ghIFNob3VsZCB3ZSB0aHJvdyBhbiBlcnJvcj9cbiAgcmV0dXJuIFtdO1xufTtcblxuTWFya2Rvd24ucHJvdG90eXBlLnByb2Nlc3NJbmxpbmUgPSBmdW5jdGlvbiBwcm9jZXNzSW5saW5lKCBibG9jayApIHtcbiAgcmV0dXJuIHRoaXMuZGlhbGVjdC5pbmxpbmUuX19jYWxsX18uY2FsbCggdGhpcywgU3RyaW5nKCBibG9jayApICk7XG59O1xuXG4vKipcbiAqICBNYXJrZG93biN0b1RyZWUoIHNvdXJjZSApIC0+IEpzb25NTFxuICogIC0gc291cmNlIChTdHJpbmcpOiBtYXJrZG93biBzb3VyY2UgdG8gcGFyc2VcbiAqXG4gKiAgUGFyc2UgYHNvdXJjZWAgaW50byBhIEpzb25NTCB0cmVlIHJlcHJlc2VudGluZyB0aGUgbWFya2Rvd24gZG9jdW1lbnQuXG4gKiovXG4vLyBjdXN0b21fdHJlZSBtZWFucyBzZXQgdGhpcy50cmVlIHRvIGBjdXN0b21fdHJlZWAgYW5kIHJlc3RvcmUgb2xkIHZhbHVlIG9uIHJldHVyblxuTWFya2Rvd24ucHJvdG90eXBlLnRvVHJlZSA9IGZ1bmN0aW9uIHRvVHJlZSggc291cmNlLCBjdXN0b21fcm9vdCApIHtcbiAgdmFyIGJsb2NrcyA9IHNvdXJjZSBpbnN0YW5jZW9mIEFycmF5ID8gc291cmNlIDogdGhpcy5zcGxpdF9ibG9ja3MoIHNvdXJjZSApO1xuXG4gIC8vIE1ha2UgdHJlZSBhIG1lbWJlciB2YXJpYWJsZSBzbyBpdHMgZWFzaWVyIHRvIG1lc3Mgd2l0aCBpbiBleHRlbnNpb25zXG4gIHZhciBvbGRfdHJlZSA9IHRoaXMudHJlZTtcbiAgdHJ5IHtcbiAgICB0aGlzLnRyZWUgPSBjdXN0b21fcm9vdCB8fCB0aGlzLnRyZWUgfHwgWyBcIm1hcmtkb3duXCIgXTtcblxuICAgIGJsb2NrczpcbiAgICB3aGlsZSAoIGJsb2Nrcy5sZW5ndGggKSB7XG4gICAgICB2YXIgYiA9IHRoaXMucHJvY2Vzc0Jsb2NrKCBibG9ja3Muc2hpZnQoKSwgYmxvY2tzICk7XG5cbiAgICAgIC8vIFJlZmVyZW5jZSBibG9ja3MgYW5kIHRoZSBsaWtlIHdvbid0IHJldHVybiBhbnkgY29udGVudFxuICAgICAgaWYgKCAhYi5sZW5ndGggKSBjb250aW51ZSBibG9ja3M7XG5cbiAgICAgIHRoaXMudHJlZS5wdXNoLmFwcGx5KCB0aGlzLnRyZWUsIGIgKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMudHJlZTtcbiAgfVxuICBmaW5hbGx5IHtcbiAgICBpZiAoIGN1c3RvbV9yb290ICkge1xuICAgICAgdGhpcy50cmVlID0gb2xkX3RyZWU7XG4gICAgfVxuICB9XG59O1xuXG4vLyBOb29wIGJ5IGRlZmF1bHRcbk1hcmtkb3duLnByb3RvdHlwZS5kZWJ1ZyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCggYXJndW1lbnRzKTtcbiAgYXJncy51bnNoaWZ0KHRoaXMuZGVidWdfaW5kZW50KTtcbiAgaWYgKCB0eXBlb2YgcHJpbnQgIT09IFwidW5kZWZpbmVkXCIgKVxuICAgICAgcHJpbnQuYXBwbHkoIHByaW50LCBhcmdzICk7XG4gIGlmICggdHlwZW9mIGNvbnNvbGUgIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIGNvbnNvbGUubG9nICE9PSBcInVuZGVmaW5lZFwiIClcbiAgICAgIGNvbnNvbGUubG9nLmFwcGx5KCBudWxsLCBhcmdzICk7XG59XG5cbk1hcmtkb3duLnByb3RvdHlwZS5sb29wX3JlX292ZXJfYmxvY2sgPSBmdW5jdGlvbiggcmUsIGJsb2NrLCBjYiApIHtcbiAgLy8gRG9udCB1c2UgL2cgcmVnZXhwcyB3aXRoIHRoaXNcbiAgdmFyIG0sXG4gICAgICBiID0gYmxvY2sudmFsdWVPZigpO1xuXG4gIHdoaWxlICggYi5sZW5ndGggJiYgKG0gPSByZS5leGVjKGIpICkgIT0gbnVsbCApIHtcbiAgICBiID0gYi5zdWJzdHIoIG1bMF0ubGVuZ3RoICk7XG4gICAgY2IuY2FsbCh0aGlzLCBtKTtcbiAgfVxuICByZXR1cm4gYjtcbn07XG5cbi8qKlxuICogTWFya2Rvd24uZGlhbGVjdHNcbiAqXG4gKiBOYW1lc3BhY2Ugb2YgYnVpbHQtaW4gZGlhbGVjdHMuXG4gKiovXG5NYXJrZG93bi5kaWFsZWN0cyA9IHt9O1xuXG4vKipcbiAqIE1hcmtkb3duLmRpYWxlY3RzLkdydWJlclxuICpcbiAqIFRoZSBkZWZhdWx0IGRpYWxlY3QgdGhhdCBmb2xsb3dzIHRoZSBydWxlcyBzZXQgb3V0IGJ5IEpvaG4gR3J1YmVyJ3NcbiAqIG1hcmtkb3duLnBsIGFzIGNsb3NlbHkgYXMgcG9zc2libGUuIFdlbGwgYWN0dWFsbHkgd2UgZm9sbG93IHRoZSBiZWhhdmlvdXIgb2ZcbiAqIHRoYXQgc2NyaXB0IHdoaWNoIGluIHNvbWUgcGxhY2VzIGlzIG5vdCBleGFjdGx5IHdoYXQgdGhlIHN5bnRheCB3ZWIgcGFnZVxuICogc2F5cy5cbiAqKi9cbk1hcmtkb3duLmRpYWxlY3RzLkdydWJlciA9IHtcbiAgYmxvY2s6IHtcbiAgICBhdHhIZWFkZXI6IGZ1bmN0aW9uIGF0eEhlYWRlciggYmxvY2ssIG5leHQgKSB7XG4gICAgICB2YXIgbSA9IGJsb2NrLm1hdGNoKCAvXigjezEsNn0pXFxzKiguKj8pXFxzKiMqXFxzKig/OlxcbnwkKS8gKTtcblxuICAgICAgaWYgKCAhbSApIHJldHVybiB1bmRlZmluZWQ7XG5cbiAgICAgIHZhciBoZWFkZXIgPSBbIFwiaGVhZGVyXCIsIHsgbGV2ZWw6IG1bIDEgXS5sZW5ndGggfSBdO1xuICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoaGVhZGVyLCB0aGlzLnByb2Nlc3NJbmxpbmUobVsgMiBdKSk7XG5cbiAgICAgIGlmICggbVswXS5sZW5ndGggPCBibG9jay5sZW5ndGggKVxuICAgICAgICBuZXh0LnVuc2hpZnQoIG1rX2Jsb2NrKCBibG9jay5zdWJzdHIoIG1bMF0ubGVuZ3RoICksIGJsb2NrLnRyYWlsaW5nLCBibG9jay5saW5lTnVtYmVyICsgMiApICk7XG5cbiAgICAgIHJldHVybiBbIGhlYWRlciBdO1xuICAgIH0sXG5cbiAgICBzZXRleHRIZWFkZXI6IGZ1bmN0aW9uIHNldGV4dEhlYWRlciggYmxvY2ssIG5leHQgKSB7XG4gICAgICB2YXIgbSA9IGJsb2NrLm1hdGNoKCAvXiguKilcXG4oWy09XSlcXDJcXDIrKD86XFxufCQpLyApO1xuXG4gICAgICBpZiAoICFtICkgcmV0dXJuIHVuZGVmaW5lZDtcblxuICAgICAgdmFyIGxldmVsID0gKCBtWyAyIF0gPT09IFwiPVwiICkgPyAxIDogMjtcbiAgICAgIHZhciBoZWFkZXIgPSBbIFwiaGVhZGVyXCIsIHsgbGV2ZWwgOiBsZXZlbCB9LCBtWyAxIF0gXTtcblxuICAgICAgaWYgKCBtWzBdLmxlbmd0aCA8IGJsb2NrLmxlbmd0aCApXG4gICAgICAgIG5leHQudW5zaGlmdCggbWtfYmxvY2soIGJsb2NrLnN1YnN0ciggbVswXS5sZW5ndGggKSwgYmxvY2sudHJhaWxpbmcsIGJsb2NrLmxpbmVOdW1iZXIgKyAyICkgKTtcblxuICAgICAgcmV0dXJuIFsgaGVhZGVyIF07XG4gICAgfSxcblxuICAgIGNvZGU6IGZ1bmN0aW9uIGNvZGUoIGJsb2NrLCBuZXh0ICkge1xuICAgICAgLy8gfCAgICBGb29cbiAgICAgIC8vIHxiYXJcbiAgICAgIC8vIHNob3VsZCBiZSBhIGNvZGUgYmxvY2sgZm9sbG93ZWQgYnkgYSBwYXJhZ3JhcGguIEZ1blxuICAgICAgLy9cbiAgICAgIC8vIFRoZXJlIG1pZ2h0IGFsc28gYmUgYWRqYWNlbnQgY29kZSBibG9jayB0byBtZXJnZS5cblxuICAgICAgdmFyIHJldCA9IFtdLFxuICAgICAgICAgIHJlID0gL14oPzogezAsM31cXHR8IHs0fSkoLiopXFxuPy8sXG4gICAgICAgICAgbGluZXM7XG5cbiAgICAgIC8vIDQgc3BhY2VzICsgY29udGVudFxuICAgICAgaWYgKCAhYmxvY2subWF0Y2goIHJlICkgKSByZXR1cm4gdW5kZWZpbmVkO1xuXG4gICAgICBibG9ja19zZWFyY2g6XG4gICAgICBkbyB7XG4gICAgICAgIC8vIE5vdyBwdWxsIG91dCB0aGUgcmVzdCBvZiB0aGUgbGluZXNcbiAgICAgICAgdmFyIGIgPSB0aGlzLmxvb3BfcmVfb3Zlcl9ibG9jayhcbiAgICAgICAgICAgICAgICAgIHJlLCBibG9jay52YWx1ZU9mKCksIGZ1bmN0aW9uKCBtICkgeyByZXQucHVzaCggbVsxXSApOyB9ICk7XG5cbiAgICAgICAgaWYgKCBiLmxlbmd0aCApIHtcbiAgICAgICAgICAvLyBDYXNlIGFsbHVkZWQgdG8gaW4gZmlyc3QgY29tbWVudC4gcHVzaCBpdCBiYWNrIG9uIGFzIGEgbmV3IGJsb2NrXG4gICAgICAgICAgbmV4dC51bnNoaWZ0KCBta19ibG9jayhiLCBibG9jay50cmFpbGluZykgKTtcbiAgICAgICAgICBicmVhayBibG9ja19zZWFyY2g7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIG5leHQubGVuZ3RoICkge1xuICAgICAgICAgIC8vIENoZWNrIHRoZSBuZXh0IGJsb2NrIC0gaXQgbWlnaHQgYmUgY29kZSB0b29cbiAgICAgICAgICBpZiAoICFuZXh0WzBdLm1hdGNoKCByZSApICkgYnJlYWsgYmxvY2tfc2VhcmNoO1xuXG4gICAgICAgICAgLy8gUHVsbCBob3cgaG93IG1hbnkgYmxhbmtzIGxpbmVzIGZvbGxvdyAtIG1pbnVzIHR3byB0byBhY2NvdW50IGZvciAuam9pblxuICAgICAgICAgIHJldC5wdXNoICggYmxvY2sudHJhaWxpbmcucmVwbGFjZSgvW15cXG5dL2csIFwiXCIpLnN1YnN0cmluZygyKSApO1xuXG4gICAgICAgICAgYmxvY2sgPSBuZXh0LnNoaWZ0KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgYnJlYWsgYmxvY2tfc2VhcmNoO1xuICAgICAgICB9XG4gICAgICB9IHdoaWxlICggdHJ1ZSApO1xuXG4gICAgICByZXR1cm4gWyBbIFwiY29kZV9ibG9ja1wiLCByZXQuam9pbihcIlxcblwiKSBdIF07XG4gICAgfSxcblxuICAgIGhvcml6UnVsZTogZnVuY3Rpb24gaG9yaXpSdWxlKCBibG9jaywgbmV4dCApIHtcbiAgICAgIC8vIHRoaXMgbmVlZHMgdG8gZmluZCBhbnkgaHIgaW4gdGhlIGJsb2NrIHRvIGhhbmRsZSBhYnV0dGluZyBibG9ja3NcbiAgICAgIHZhciBtID0gYmxvY2subWF0Y2goIC9eKD86KFtcXHNcXFNdKj8pXFxuKT9bIFxcdF0qKFstXypdKSg/OlsgXFx0XSpcXDIpezIsfVsgXFx0XSooPzpcXG4oW1xcc1xcU10qKSk/JC8gKTtcblxuICAgICAgaWYgKCAhbSApIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgdmFyIGpzb25tbCA9IFsgWyBcImhyXCIgXSBdO1xuXG4gICAgICAvLyBpZiB0aGVyZSdzIGEgbGVhZGluZyBhYnV0dGluZyBibG9jaywgcHJvY2VzcyBpdFxuICAgICAgaWYgKCBtWyAxIF0gKSB7XG4gICAgICAgIGpzb25tbC51bnNoaWZ0LmFwcGx5KCBqc29ubWwsIHRoaXMucHJvY2Vzc0Jsb2NrKCBtWyAxIF0sIFtdICkgKTtcbiAgICAgIH1cblxuICAgICAgLy8gaWYgdGhlcmUncyBhIHRyYWlsaW5nIGFidXR0aW5nIGJsb2NrLCBzdGljayBpdCBpbnRvIG5leHRcbiAgICAgIGlmICggbVsgMyBdICkge1xuICAgICAgICBuZXh0LnVuc2hpZnQoIG1rX2Jsb2NrKCBtWyAzIF0gKSApO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ganNvbm1sO1xuICAgIH0sXG5cbiAgICAvLyBUaGVyZSBhcmUgdHdvIHR5cGVzIG9mIGxpc3RzLiBUaWdodCBhbmQgbG9vc2UuIFRpZ2h0IGxpc3RzIGhhdmUgbm8gd2hpdGVzcGFjZVxuICAgIC8vIGJldHdlZW4gdGhlIGl0ZW1zIChhbmQgcmVzdWx0IGluIHRleHQganVzdCBpbiB0aGUgPGxpPikgYW5kIGxvb3NlIGxpc3RzLFxuICAgIC8vIHdoaWNoIGhhdmUgYW4gZW1wdHkgbGluZSBiZXR3ZWVuIGxpc3QgaXRlbXMsIHJlc3VsdGluZyBpbiAob25lIG9yIG1vcmUpXG4gICAgLy8gcGFyYWdyYXBocyBpbnNpZGUgdGhlIDxsaT4uXG4gICAgLy9cbiAgICAvLyBUaGVyZSBhcmUgYWxsIHNvcnRzIHdlaXJkIGVkZ2UgY2FzZXMgYWJvdXQgdGhlIG9yaWdpbmFsIG1hcmtkb3duLnBsJ3NcbiAgICAvLyBoYW5kbGluZyBvZiBsaXN0czpcbiAgICAvL1xuICAgIC8vICogTmVzdGVkIGxpc3RzIGFyZSBzdXBwb3NlZCB0byBiZSBpbmRlbnRlZCBieSBmb3VyIGNoYXJzIHBlciBsZXZlbC4gQnV0XG4gICAgLy8gICBpZiB0aGV5IGFyZW4ndCwgeW91IGNhbiBnZXQgYSBuZXN0ZWQgbGlzdCBieSBpbmRlbnRpbmcgYnkgbGVzcyB0aGFuXG4gICAgLy8gICBmb3VyIHNvIGxvbmcgYXMgdGhlIGluZGVudCBkb2Vzbid0IG1hdGNoIGFuIGluZGVudCBvZiBhbiBleGlzdGluZyBsaXN0XG4gICAgLy8gICBpdGVtIGluIHRoZSAnbmVzdCBzdGFjaycuXG4gICAgLy9cbiAgICAvLyAqIFRoZSB0eXBlIG9mIHRoZSBsaXN0IChidWxsZXQgb3IgbnVtYmVyKSBpcyBjb250cm9sbGVkIGp1c3QgYnkgdGhlXG4gICAgLy8gICAgZmlyc3QgaXRlbSBhdCB0aGUgaW5kZW50LiBTdWJzZXF1ZW50IGNoYW5nZXMgYXJlIGlnbm9yZWQgdW5sZXNzIHRoZXlcbiAgICAvLyAgICBhcmUgZm9yIG5lc3RlZCBsaXN0c1xuICAgIC8vXG4gICAgbGlzdHM6IChmdW5jdGlvbiggKSB7XG4gICAgICAvLyBVc2UgYSBjbG9zdXJlIHRvIGhpZGUgYSBmZXcgdmFyaWFibGVzLlxuICAgICAgdmFyIGFueV9saXN0ID0gXCJbKistXXxcXFxcZCtcXFxcLlwiLFxuICAgICAgICAgIGJ1bGxldF9saXN0ID0gL1sqKy1dLyxcbiAgICAgICAgICBudW1iZXJfbGlzdCA9IC9cXGQrXFwuLyxcbiAgICAgICAgICAvLyBDYXB0dXJlIGxlYWRpbmcgaW5kZW50IGFzIGl0IG1hdHRlcnMgZm9yIGRldGVybWluaW5nIG5lc3RlZCBsaXN0cy5cbiAgICAgICAgICBpc19saXN0X3JlID0gbmV3IFJlZ0V4cCggXCJeKCB7MCwzfSkoXCIgKyBhbnlfbGlzdCArIFwiKVsgXFx0XStcIiApLFxuICAgICAgICAgIGluZGVudF9yZSA9IFwiKD86IHswLDN9XFxcXHR8IHs0fSlcIjtcblxuICAgICAgLy8gVE9ETzogQ2FjaGUgdGhpcyByZWdleHAgZm9yIGNlcnRhaW4gZGVwdGhzLlxuICAgICAgLy8gQ3JlYXRlIGEgcmVnZXhwIHN1aXRhYmxlIGZvciBtYXRjaGluZyBhbiBsaSBmb3IgYSBnaXZlbiBzdGFjayBkZXB0aFxuICAgICAgZnVuY3Rpb24gcmVnZXhfZm9yX2RlcHRoKCBkZXB0aCApIHtcblxuICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChcbiAgICAgICAgICAvLyBtWzFdID0gaW5kZW50LCBtWzJdID0gbGlzdF90eXBlXG4gICAgICAgICAgXCIoPzpeKFwiICsgaW5kZW50X3JlICsgXCJ7MCxcIiArIGRlcHRoICsgXCJ9IHswLDN9KShcIiArIGFueV9saXN0ICsgXCIpXFxcXHMrKXxcIiArXG4gICAgICAgICAgLy8gbVszXSA9IGNvbnRcbiAgICAgICAgICBcIiheXCIgKyBpbmRlbnRfcmUgKyBcInswLFwiICsgKGRlcHRoLTEpICsgXCJ9WyBdezAsNH0pXCJcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIGV4cGFuZF90YWIoIGlucHV0ICkge1xuICAgICAgICByZXR1cm4gaW5wdXQucmVwbGFjZSggLyB7MCwzfVxcdC9nLCBcIiAgICBcIiApO1xuICAgICAgfVxuXG4gICAgICAvLyBBZGQgaW5saW5lIGNvbnRlbnQgYGlubGluZWAgdG8gYGxpYC4gaW5saW5lIGNvbWVzIGZyb20gcHJvY2Vzc0lubGluZVxuICAgICAgLy8gc28gaXMgYW4gYXJyYXkgb2YgY29udGVudFxuICAgICAgZnVuY3Rpb24gYWRkKGxpLCBsb29zZSwgaW5saW5lLCBubCkge1xuICAgICAgICBpZiAoIGxvb3NlICkge1xuICAgICAgICAgIGxpLnB1c2goIFsgXCJwYXJhXCIgXS5jb25jYXQoaW5saW5lKSApO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBIbW1tLCBzaG91bGQgdGhpcyBiZSBhbnkgYmxvY2sgbGV2ZWwgZWxlbWVudCBvciBqdXN0IHBhcmFzP1xuICAgICAgICB2YXIgYWRkX3RvID0gbGlbbGkubGVuZ3RoIC0xXSBpbnN0YW5jZW9mIEFycmF5ICYmIGxpW2xpLmxlbmd0aCAtIDFdWzBdID09IFwicGFyYVwiXG4gICAgICAgICAgICAgICAgICAgPyBsaVtsaS5sZW5ndGggLTFdXG4gICAgICAgICAgICAgICAgICAgOiBsaTtcblxuICAgICAgICAvLyBJZiB0aGVyZSBpcyBhbHJlYWR5IHNvbWUgY29udGVudCBpbiB0aGlzIGxpc3QsIGFkZCB0aGUgbmV3IGxpbmUgaW5cbiAgICAgICAgaWYgKCBubCAmJiBsaS5sZW5ndGggPiAxICkgaW5saW5lLnVuc2hpZnQobmwpO1xuXG4gICAgICAgIGZvciAoIHZhciBpID0gMDsgaSA8IGlubGluZS5sZW5ndGg7IGkrKyApIHtcbiAgICAgICAgICB2YXIgd2hhdCA9IGlubGluZVtpXSxcbiAgICAgICAgICAgICAgaXNfc3RyID0gdHlwZW9mIHdoYXQgPT0gXCJzdHJpbmdcIjtcbiAgICAgICAgICBpZiAoIGlzX3N0ciAmJiBhZGRfdG8ubGVuZ3RoID4gMSAmJiB0eXBlb2YgYWRkX3RvW2FkZF90by5sZW5ndGgtMV0gPT0gXCJzdHJpbmdcIiApIHtcbiAgICAgICAgICAgIGFkZF90b1sgYWRkX3RvLmxlbmd0aC0xIF0gKz0gd2hhdDtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBhZGRfdG8ucHVzaCggd2hhdCApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBjb250YWluZWQgbWVhbnMgaGF2ZSBhbiBpbmRlbnQgZ3JlYXRlciB0aGFuIHRoZSBjdXJyZW50IG9uZS4gT25cbiAgICAgIC8vICpldmVyeSogbGluZSBpbiB0aGUgYmxvY2tcbiAgICAgIGZ1bmN0aW9uIGdldF9jb250YWluZWRfYmxvY2tzKCBkZXB0aCwgYmxvY2tzICkge1xuXG4gICAgICAgIHZhciByZSA9IG5ldyBSZWdFeHAoIFwiXihcIiArIGluZGVudF9yZSArIFwie1wiICsgZGVwdGggKyBcIn0uKj9cXFxcbj8pKiRcIiApLFxuICAgICAgICAgICAgcmVwbGFjZSA9IG5ldyBSZWdFeHAoXCJeXCIgKyBpbmRlbnRfcmUgKyBcIntcIiArIGRlcHRoICsgXCJ9XCIsIFwiZ21cIiksXG4gICAgICAgICAgICByZXQgPSBbXTtcblxuICAgICAgICB3aGlsZSAoIGJsb2Nrcy5sZW5ndGggPiAwICkge1xuICAgICAgICAgIGlmICggcmUuZXhlYyggYmxvY2tzWzBdICkgKSB7XG4gICAgICAgICAgICB2YXIgYiA9IGJsb2Nrcy5zaGlmdCgpLFxuICAgICAgICAgICAgICAgIC8vIE5vdyByZW1vdmUgdGhhdCBpbmRlbnRcbiAgICAgICAgICAgICAgICB4ID0gYi5yZXBsYWNlKCByZXBsYWNlLCBcIlwiKTtcblxuICAgICAgICAgICAgcmV0LnB1c2goIG1rX2Jsb2NrKCB4LCBiLnRyYWlsaW5nLCBiLmxpbmVOdW1iZXIgKSApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgfVxuXG4gICAgICAvLyBwYXNzZWQgdG8gc3RhY2suZm9yRWFjaCB0byB0dXJuIGxpc3QgaXRlbXMgdXAgdGhlIHN0YWNrIGludG8gcGFyYXNcbiAgICAgIGZ1bmN0aW9uIHBhcmFncmFwaGlmeShzLCBpLCBzdGFjaykge1xuICAgICAgICB2YXIgbGlzdCA9IHMubGlzdDtcbiAgICAgICAgdmFyIGxhc3RfbGkgPSBsaXN0W2xpc3QubGVuZ3RoLTFdO1xuXG4gICAgICAgIGlmICggbGFzdF9saVsxXSBpbnN0YW5jZW9mIEFycmF5ICYmIGxhc3RfbGlbMV1bMF0gPT0gXCJwYXJhXCIgKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICggaSArIDEgPT0gc3RhY2subGVuZ3RoICkge1xuICAgICAgICAgIC8vIExhc3Qgc3RhY2sgZnJhbWVcbiAgICAgICAgICAvLyBLZWVwIHRoZSBzYW1lIGFycmF5LCBidXQgcmVwbGFjZSB0aGUgY29udGVudHNcbiAgICAgICAgICBsYXN0X2xpLnB1c2goIFtcInBhcmFcIl0uY29uY2F0KCBsYXN0X2xpLnNwbGljZSgxLCBsYXN0X2xpLmxlbmd0aCAtIDEpICkgKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB2YXIgc3VibGlzdCA9IGxhc3RfbGkucG9wKCk7XG4gICAgICAgICAgbGFzdF9saS5wdXNoKCBbXCJwYXJhXCJdLmNvbmNhdCggbGFzdF9saS5zcGxpY2UoMSwgbGFzdF9saS5sZW5ndGggLSAxKSApLCBzdWJsaXN0ICk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIG1hdGNoZXIgZnVuY3Rpb25cbiAgICAgIHJldHVybiBmdW5jdGlvbiggYmxvY2ssIG5leHQgKSB7XG4gICAgICAgIHZhciBtID0gYmxvY2subWF0Y2goIGlzX2xpc3RfcmUgKTtcbiAgICAgICAgaWYgKCAhbSApIHJldHVybiB1bmRlZmluZWQ7XG5cbiAgICAgICAgZnVuY3Rpb24gbWFrZV9saXN0KCBtICkge1xuICAgICAgICAgIHZhciBsaXN0ID0gYnVsbGV0X2xpc3QuZXhlYyggbVsyXSApXG4gICAgICAgICAgICAgICAgICAgPyBbXCJidWxsZXRsaXN0XCJdXG4gICAgICAgICAgICAgICAgICAgOiBbXCJudW1iZXJsaXN0XCJdO1xuXG4gICAgICAgICAgc3RhY2sucHVzaCggeyBsaXN0OiBsaXN0LCBpbmRlbnQ6IG1bMV0gfSApO1xuICAgICAgICAgIHJldHVybiBsaXN0O1xuICAgICAgICB9XG5cblxuICAgICAgICB2YXIgc3RhY2sgPSBbXSwgLy8gU3RhY2sgb2YgbGlzdHMgZm9yIG5lc3RpbmcuXG4gICAgICAgICAgICBsaXN0ID0gbWFrZV9saXN0KCBtICksXG4gICAgICAgICAgICBsYXN0X2xpLFxuICAgICAgICAgICAgbG9vc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIHJldCA9IFsgc3RhY2tbMF0ubGlzdCBdLFxuICAgICAgICAgICAgaTtcblxuICAgICAgICAvLyBMb29wIHRvIHNlYXJjaCBvdmVyIGJsb2NrIGxvb2tpbmcgZm9yIGlubmVyIGJsb2NrIGVsZW1lbnRzIGFuZCBsb29zZSBsaXN0c1xuICAgICAgICBsb29zZV9zZWFyY2g6XG4gICAgICAgIHdoaWxlICggdHJ1ZSApIHtcbiAgICAgICAgICAvLyBTcGxpdCBpbnRvIGxpbmVzIHByZXNlcnZpbmcgbmV3IGxpbmVzIGF0IGVuZCBvZiBsaW5lXG4gICAgICAgICAgdmFyIGxpbmVzID0gYmxvY2suc3BsaXQoIC8oPz1cXG4pLyApO1xuXG4gICAgICAgICAgLy8gV2UgaGF2ZSB0byBncmFiIGFsbCBsaW5lcyBmb3IgYSBsaSBhbmQgY2FsbCBwcm9jZXNzSW5saW5lIG9uIHRoZW1cbiAgICAgICAgICAvLyBvbmNlIGFzIHRoZXJlIGFyZSBzb21lIGlubGluZSB0aGluZ3MgdGhhdCBjYW4gc3BhbiBsaW5lcy5cbiAgICAgICAgICB2YXIgbGlfYWNjdW11bGF0ZSA9IFwiXCI7XG5cbiAgICAgICAgICAvLyBMb29wIG92ZXIgdGhlIGxpbmVzIGluIHRoaXMgYmxvY2sgbG9va2luZyBmb3IgdGlnaHQgbGlzdHMuXG4gICAgICAgICAgdGlnaHRfc2VhcmNoOlxuICAgICAgICAgIGZvciAoIHZhciBsaW5lX25vID0gMDsgbGluZV9ubyA8IGxpbmVzLmxlbmd0aDsgbGluZV9ubysrICkge1xuICAgICAgICAgICAgdmFyIG5sID0gXCJcIixcbiAgICAgICAgICAgICAgICBsID0gbGluZXNbbGluZV9ub10ucmVwbGFjZSgvXlxcbi8sIGZ1bmN0aW9uKG4pIHsgbmwgPSBuOyByZXR1cm4gXCJcIjsgfSk7XG5cbiAgICAgICAgICAgIC8vIFRPRE86IHJlYWxseSBzaG91bGQgY2FjaGUgdGhpc1xuICAgICAgICAgICAgdmFyIGxpbmVfcmUgPSByZWdleF9mb3JfZGVwdGgoIHN0YWNrLmxlbmd0aCApO1xuXG4gICAgICAgICAgICBtID0gbC5tYXRjaCggbGluZV9yZSApO1xuICAgICAgICAgICAgLy9wcmludCggXCJsaW5lOlwiLCB1bmV2YWwobCksIFwiXFxubGluZSBtYXRjaDpcIiwgdW5ldmFsKG0pICk7XG5cbiAgICAgICAgICAgIC8vIFdlIGhhdmUgYSBsaXN0IGl0ZW1cbiAgICAgICAgICAgIGlmICggbVsxXSAhPT0gdW5kZWZpbmVkICkge1xuICAgICAgICAgICAgICAvLyBQcm9jZXNzIHRoZSBwcmV2aW91cyBsaXN0IGl0ZW0sIGlmIGFueVxuICAgICAgICAgICAgICBpZiAoIGxpX2FjY3VtdWxhdGUubGVuZ3RoICkge1xuICAgICAgICAgICAgICAgIGFkZCggbGFzdF9saSwgbG9vc2UsIHRoaXMucHJvY2Vzc0lubGluZSggbGlfYWNjdW11bGF0ZSApLCBubCApO1xuICAgICAgICAgICAgICAgIC8vIExvb3NlIG1vZGUgd2lsbCBoYXZlIGJlZW4gZGVhbHQgd2l0aC4gUmVzZXQgaXRcbiAgICAgICAgICAgICAgICBsb29zZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGxpX2FjY3VtdWxhdGUgPSBcIlwiO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgbVsxXSA9IGV4cGFuZF90YWIoIG1bMV0gKTtcbiAgICAgICAgICAgICAgdmFyIHdhbnRlZF9kZXB0aCA9IE1hdGguZmxvb3IobVsxXS5sZW5ndGgvNCkrMTtcbiAgICAgICAgICAgICAgLy9wcmludCggXCJ3YW50OlwiLCB3YW50ZWRfZGVwdGgsIFwic3RhY2s6XCIsIHN0YWNrLmxlbmd0aCk7XG4gICAgICAgICAgICAgIGlmICggd2FudGVkX2RlcHRoID4gc3RhY2subGVuZ3RoICkge1xuICAgICAgICAgICAgICAgIC8vIERlZXAgZW5vdWdoIGZvciBhIG5lc3RlZCBsaXN0IG91dHJpZ2h0XG4gICAgICAgICAgICAgICAgLy9wcmludCAoIFwibmV3IG5lc3RlZCBsaXN0XCIgKTtcbiAgICAgICAgICAgICAgICBsaXN0ID0gbWFrZV9saXN0KCBtICk7XG4gICAgICAgICAgICAgICAgbGFzdF9saS5wdXNoKCBsaXN0ICk7XG4gICAgICAgICAgICAgICAgbGFzdF9saSA9IGxpc3RbMV0gPSBbIFwibGlzdGl0ZW1cIiBdO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFdlIGFyZW4ndCBkZWVwIGVub3VnaCB0byBiZSBzdHJpY3RseSBhIG5ldyBsZXZlbC4gVGhpcyBpc1xuICAgICAgICAgICAgICAgIC8vIHdoZXJlIE1kLnBsIGdvZXMgbnV0cy4gSWYgdGhlIGluZGVudCBtYXRjaGVzIGEgbGV2ZWwgaW4gdGhlXG4gICAgICAgICAgICAgICAgLy8gc3RhY2ssIHB1dCBpdCB0aGVyZSwgZWxzZSBwdXQgaXQgb25lIGRlZXBlciB0aGVuIHRoZVxuICAgICAgICAgICAgICAgIC8vIHdhbnRlZF9kZXB0aCBkZXNlcnZlcy5cbiAgICAgICAgICAgICAgICB2YXIgZm91bmQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBmb3IgKCBpID0gMDsgaSA8IHN0YWNrLmxlbmd0aDsgaSsrICkge1xuICAgICAgICAgICAgICAgICAgaWYgKCBzdGFja1sgaSBdLmluZGVudCAhPSBtWzFdICkgY29udGludWU7XG4gICAgICAgICAgICAgICAgICBsaXN0ID0gc3RhY2tbIGkgXS5saXN0O1xuICAgICAgICAgICAgICAgICAgc3RhY2suc3BsaWNlKCBpKzEsIHN0YWNrLmxlbmd0aCAtIChpKzEpICk7XG4gICAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIWZvdW5kKSB7XG4gICAgICAgICAgICAgICAgICAvL3ByaW50KFwibm90IGZvdW5kLiBsOlwiLCB1bmV2YWwobCkpO1xuICAgICAgICAgICAgICAgICAgd2FudGVkX2RlcHRoKys7XG4gICAgICAgICAgICAgICAgICBpZiAoIHdhbnRlZF9kZXB0aCA8PSBzdGFjay5sZW5ndGggKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YWNrLnNwbGljZSh3YW50ZWRfZGVwdGgsIHN0YWNrLmxlbmd0aCAtIHdhbnRlZF9kZXB0aCk7XG4gICAgICAgICAgICAgICAgICAgIC8vcHJpbnQoXCJEZXNpcmVkIGRlcHRoIG5vd1wiLCB3YW50ZWRfZGVwdGgsIFwic3RhY2s6XCIsIHN0YWNrLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgIGxpc3QgPSBzdGFja1t3YW50ZWRfZGVwdGgtMV0ubGlzdDtcbiAgICAgICAgICAgICAgICAgICAgLy9wcmludChcImxpc3Q6XCIsIHVuZXZhbChsaXN0KSApO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vcHJpbnQgKFwibWFkZSBuZXcgc3RhY2sgZm9yIG1lc3N5IGluZGVudFwiKTtcbiAgICAgICAgICAgICAgICAgICAgbGlzdCA9IG1ha2VfbGlzdChtKTtcbiAgICAgICAgICAgICAgICAgICAgbGFzdF9saS5wdXNoKGxpc3QpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vcHJpbnQoIHVuZXZhbChsaXN0KSwgXCJsYXN0XCIsIGxpc3QgPT09IHN0YWNrW3N0YWNrLmxlbmd0aC0xXS5saXN0ICk7XG4gICAgICAgICAgICAgICAgbGFzdF9saSA9IFsgXCJsaXN0aXRlbVwiIF07XG4gICAgICAgICAgICAgICAgbGlzdC5wdXNoKGxhc3RfbGkpO1xuICAgICAgICAgICAgICB9IC8vIGVuZCBkZXB0aCBvZiBzaGVuZWdhaW5zXG4gICAgICAgICAgICAgIG5sID0gXCJcIjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQWRkIGNvbnRlbnRcbiAgICAgICAgICAgIGlmICggbC5sZW5ndGggPiBtWzBdLmxlbmd0aCApIHtcbiAgICAgICAgICAgICAgbGlfYWNjdW11bGF0ZSArPSBubCArIGwuc3Vic3RyKCBtWzBdLmxlbmd0aCApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gLy8gdGlnaHRfc2VhcmNoXG5cbiAgICAgICAgICBpZiAoIGxpX2FjY3VtdWxhdGUubGVuZ3RoICkge1xuICAgICAgICAgICAgYWRkKCBsYXN0X2xpLCBsb29zZSwgdGhpcy5wcm9jZXNzSW5saW5lKCBsaV9hY2N1bXVsYXRlICksIG5sICk7XG4gICAgICAgICAgICAvLyBMb29zZSBtb2RlIHdpbGwgaGF2ZSBiZWVuIGRlYWx0IHdpdGguIFJlc2V0IGl0XG4gICAgICAgICAgICBsb29zZSA9IGZhbHNlO1xuICAgICAgICAgICAgbGlfYWNjdW11bGF0ZSA9IFwiXCI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gTG9vayBhdCB0aGUgbmV4dCBibG9jayAtIHdlIG1pZ2h0IGhhdmUgYSBsb29zZSBsaXN0LiBPciBhbiBleHRyYVxuICAgICAgICAgIC8vIHBhcmFncmFwaCBmb3IgdGhlIGN1cnJlbnQgbGlcbiAgICAgICAgICB2YXIgY29udGFpbmVkID0gZ2V0X2NvbnRhaW5lZF9ibG9ja3MoIHN0YWNrLmxlbmd0aCwgbmV4dCApO1xuXG4gICAgICAgICAgLy8gRGVhbCB3aXRoIGNvZGUgYmxvY2tzIG9yIHByb3Blcmx5IG5lc3RlZCBsaXN0c1xuICAgICAgICAgIGlmICggY29udGFpbmVkLmxlbmd0aCA+IDAgKSB7XG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgYWxsIGxpc3RpdGVtcyB1cCB0aGUgc3RhY2sgYXJlIHBhcmFncmFwaHNcbiAgICAgICAgICAgIGZvckVhY2goIHN0YWNrLCBwYXJhZ3JhcGhpZnksIHRoaXMpO1xuXG4gICAgICAgICAgICBsYXN0X2xpLnB1c2guYXBwbHkoIGxhc3RfbGksIHRoaXMudG9UcmVlKCBjb250YWluZWQsIFtdICkgKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgbmV4dF9ibG9jayA9IG5leHRbMF0gJiYgbmV4dFswXS52YWx1ZU9mKCkgfHwgXCJcIjtcblxuICAgICAgICAgIGlmICggbmV4dF9ibG9jay5tYXRjaChpc19saXN0X3JlKSB8fCBuZXh0X2Jsb2NrLm1hdGNoKCAvXiAvICkgKSB7XG4gICAgICAgICAgICBibG9jayA9IG5leHQuc2hpZnQoKTtcblxuICAgICAgICAgICAgLy8gQ2hlY2sgZm9yIGFuIEhSIGZvbGxvd2luZyBhIGxpc3Q6IGZlYXR1cmVzL2xpc3RzL2hyX2FidXR0aW5nXG4gICAgICAgICAgICB2YXIgaHIgPSB0aGlzLmRpYWxlY3QuYmxvY2suaG9yaXpSdWxlKCBibG9jaywgbmV4dCApO1xuXG4gICAgICAgICAgICBpZiAoIGhyICkge1xuICAgICAgICAgICAgICByZXQucHVzaC5hcHBseShyZXQsIGhyKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSBhbGwgbGlzdGl0ZW1zIHVwIHRoZSBzdGFjayBhcmUgcGFyYWdyYXBoc1xuICAgICAgICAgICAgZm9yRWFjaCggc3RhY2ssIHBhcmFncmFwaGlmeSwgdGhpcyk7XG5cbiAgICAgICAgICAgIGxvb3NlID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbnRpbnVlIGxvb3NlX3NlYXJjaDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH0gLy8gbG9vc2Vfc2VhcmNoXG5cbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgIH07XG4gICAgfSkoKSxcblxuICAgIGJsb2NrcXVvdGU6IGZ1bmN0aW9uIGJsb2NrcXVvdGUoIGJsb2NrLCBuZXh0ICkge1xuICAgICAgaWYgKCAhYmxvY2subWF0Y2goIC9ePi9tICkgKVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuXG4gICAgICB2YXIganNvbm1sID0gW107XG5cbiAgICAgIC8vIHNlcGFyYXRlIG91dCB0aGUgbGVhZGluZyBhYnV0dGluZyBibG9jaywgaWYgYW55LiBJLmUuIGluIHRoaXMgY2FzZTpcbiAgICAgIC8vXG4gICAgICAvLyAgYVxuICAgICAgLy8gID4gYlxuICAgICAgLy9cbiAgICAgIGlmICggYmxvY2tbIDAgXSAhPSBcIj5cIiApIHtcbiAgICAgICAgdmFyIGxpbmVzID0gYmxvY2suc3BsaXQoIC9cXG4vICksXG4gICAgICAgICAgICBwcmV2ID0gW10sXG4gICAgICAgICAgICBsaW5lX25vID0gYmxvY2subGluZU51bWJlcjtcblxuICAgICAgICAvLyBrZWVwIHNoaWZ0aW5nIGxpbmVzIHVudGlsIHlvdSBmaW5kIGEgY3JvdGNoZXRcbiAgICAgICAgd2hpbGUgKCBsaW5lcy5sZW5ndGggJiYgbGluZXNbIDAgXVsgMCBdICE9IFwiPlwiICkge1xuICAgICAgICAgICAgcHJldi5wdXNoKCBsaW5lcy5zaGlmdCgpICk7XG4gICAgICAgICAgICBsaW5lX25vKys7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgYWJ1dHRpbmcgPSBta19ibG9jayggcHJldi5qb2luKCBcIlxcblwiICksIFwiXFxuXCIsIGJsb2NrLmxpbmVOdW1iZXIgKTtcbiAgICAgICAganNvbm1sLnB1c2guYXBwbHkoIGpzb25tbCwgdGhpcy5wcm9jZXNzQmxvY2soIGFidXR0aW5nLCBbXSApICk7XG4gICAgICAgIC8vIHJlYXNzZW1ibGUgbmV3IGJsb2NrIG9mIGp1c3QgYmxvY2sgcXVvdGVzIVxuICAgICAgICBibG9jayA9IG1rX2Jsb2NrKCBsaW5lcy5qb2luKCBcIlxcblwiICksIGJsb2NrLnRyYWlsaW5nLCBsaW5lX25vICk7XG4gICAgICB9XG5cblxuICAgICAgLy8gaWYgdGhlIG5leHQgYmxvY2sgaXMgYWxzbyBhIGJsb2NrcXVvdGUgbWVyZ2UgaXQgaW5cbiAgICAgIHdoaWxlICggbmV4dC5sZW5ndGggJiYgbmV4dFsgMCBdWyAwIF0gPT0gXCI+XCIgKSB7XG4gICAgICAgIHZhciBiID0gbmV4dC5zaGlmdCgpO1xuICAgICAgICBibG9jayA9IG1rX2Jsb2NrKCBibG9jayArIGJsb2NrLnRyYWlsaW5nICsgYiwgYi50cmFpbGluZywgYmxvY2subGluZU51bWJlciApO1xuICAgICAgfVxuXG4gICAgICAvLyBTdHJpcCBvZmYgdGhlIGxlYWRpbmcgXCI+IFwiIGFuZCByZS1wcm9jZXNzIGFzIGEgYmxvY2suXG4gICAgICB2YXIgaW5wdXQgPSBibG9jay5yZXBsYWNlKCAvXj4gPy9nbSwgXCJcIiApLFxuICAgICAgICAgIG9sZF90cmVlID0gdGhpcy50cmVlLFxuICAgICAgICAgIHByb2Nlc3NlZEJsb2NrID0gdGhpcy50b1RyZWUoIGlucHV0LCBbIFwiYmxvY2txdW90ZVwiIF0gKSxcbiAgICAgICAgICBhdHRyID0gZXh0cmFjdF9hdHRyKCBwcm9jZXNzZWRCbG9jayApO1xuXG4gICAgICAvLyBJZiBhbnkgbGluayByZWZlcmVuY2VzIHdlcmUgZm91bmQgZ2V0IHJpZCBvZiB0aGVtXG4gICAgICBpZiAoIGF0dHIgJiYgYXR0ci5yZWZlcmVuY2VzICkge1xuICAgICAgICBkZWxldGUgYXR0ci5yZWZlcmVuY2VzO1xuICAgICAgICAvLyBBbmQgdGhlbiByZW1vdmUgdGhlIGF0dHJpYnV0ZSBvYmplY3QgaWYgaXQncyBlbXB0eVxuICAgICAgICBpZiAoIGlzRW1wdHkoIGF0dHIgKSApIHtcbiAgICAgICAgICBwcm9jZXNzZWRCbG9jay5zcGxpY2UoIDEsIDEgKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBqc29ubWwucHVzaCggcHJvY2Vzc2VkQmxvY2sgKTtcbiAgICAgIHJldHVybiBqc29ubWw7XG4gICAgfSxcblxuICAgIHJlZmVyZW5jZURlZm46IGZ1bmN0aW9uIHJlZmVyZW5jZURlZm4oIGJsb2NrLCBuZXh0KSB7XG4gICAgICB2YXIgcmUgPSAvXlxccypcXFsoLio/KVxcXTpcXHMqKFxcUyspKD86XFxzKyg/OihbJ1wiXSkoLio/KVxcM3xcXCgoLio/KVxcKSkpP1xcbj8vO1xuICAgICAgLy8gaW50ZXJlc3RpbmcgbWF0Y2hlcyBhcmUgWyAsIHJlZl9pZCwgdXJsLCAsIHRpdGxlLCB0aXRsZSBdXG5cbiAgICAgIGlmICggIWJsb2NrLm1hdGNoKHJlKSApXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG5cbiAgICAgIC8vIG1ha2UgYW4gYXR0cmlidXRlIG5vZGUgaWYgaXQgZG9lc24ndCBleGlzdFxuICAgICAgaWYgKCAhZXh0cmFjdF9hdHRyKCB0aGlzLnRyZWUgKSApIHtcbiAgICAgICAgdGhpcy50cmVlLnNwbGljZSggMSwgMCwge30gKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGF0dHJzID0gZXh0cmFjdF9hdHRyKCB0aGlzLnRyZWUgKTtcblxuICAgICAgLy8gbWFrZSBhIHJlZmVyZW5jZXMgaGFzaCBpZiBpdCBkb2Vzbid0IGV4aXN0XG4gICAgICBpZiAoIGF0dHJzLnJlZmVyZW5jZXMgPT09IHVuZGVmaW5lZCApIHtcbiAgICAgICAgYXR0cnMucmVmZXJlbmNlcyA9IHt9O1xuICAgICAgfVxuXG4gICAgICB2YXIgYiA9IHRoaXMubG9vcF9yZV9vdmVyX2Jsb2NrKHJlLCBibG9jaywgZnVuY3Rpb24oIG0gKSB7XG5cbiAgICAgICAgaWYgKCBtWzJdICYmIG1bMl1bMF0gPT0gXCI8XCIgJiYgbVsyXVttWzJdLmxlbmd0aC0xXSA9PSBcIj5cIiApXG4gICAgICAgICAgbVsyXSA9IG1bMl0uc3Vic3RyaW5nKCAxLCBtWzJdLmxlbmd0aCAtIDEgKTtcblxuICAgICAgICB2YXIgcmVmID0gYXR0cnMucmVmZXJlbmNlc1sgbVsxXS50b0xvd2VyQ2FzZSgpIF0gPSB7XG4gICAgICAgICAgaHJlZjogbVsyXVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmICggbVs0XSAhPT0gdW5kZWZpbmVkIClcbiAgICAgICAgICByZWYudGl0bGUgPSBtWzRdO1xuICAgICAgICBlbHNlIGlmICggbVs1XSAhPT0gdW5kZWZpbmVkIClcbiAgICAgICAgICByZWYudGl0bGUgPSBtWzVdO1xuXG4gICAgICB9ICk7XG5cbiAgICAgIGlmICggYi5sZW5ndGggKVxuICAgICAgICBuZXh0LnVuc2hpZnQoIG1rX2Jsb2NrKCBiLCBibG9jay50cmFpbGluZyApICk7XG5cbiAgICAgIHJldHVybiBbXTtcbiAgICB9LFxuXG4gICAgcGFyYTogZnVuY3Rpb24gcGFyYSggYmxvY2ssIG5leHQgKSB7XG4gICAgICAvLyBldmVyeXRoaW5nJ3MgYSBwYXJhIVxuICAgICAgcmV0dXJuIFsgW1wicGFyYVwiXS5jb25jYXQoIHRoaXMucHJvY2Vzc0lubGluZSggYmxvY2sgKSApIF07XG4gICAgfVxuICB9XG59O1xuXG5NYXJrZG93bi5kaWFsZWN0cy5HcnViZXIuaW5saW5lID0ge1xuXG4gICAgX19vbmVFbGVtZW50X186IGZ1bmN0aW9uIG9uZUVsZW1lbnQoIHRleHQsIHBhdHRlcm5zX29yX3JlLCBwcmV2aW91c19ub2RlcyApIHtcbiAgICAgIHZhciBtLFxuICAgICAgICAgIHJlcyxcbiAgICAgICAgICBsYXN0SW5kZXggPSAwO1xuXG4gICAgICBwYXR0ZXJuc19vcl9yZSA9IHBhdHRlcm5zX29yX3JlIHx8IHRoaXMuZGlhbGVjdC5pbmxpbmUuX19wYXR0ZXJuc19fO1xuICAgICAgdmFyIHJlID0gbmV3IFJlZ0V4cCggXCIoW1xcXFxzXFxcXFNdKj8pKFwiICsgKHBhdHRlcm5zX29yX3JlLnNvdXJjZSB8fCBwYXR0ZXJuc19vcl9yZSkgKyBcIilcIiApO1xuXG4gICAgICBtID0gcmUuZXhlYyggdGV4dCApO1xuICAgICAgaWYgKCFtKSB7XG4gICAgICAgIC8vIEp1c3QgYm9yaW5nIHRleHRcbiAgICAgICAgcmV0dXJuIFsgdGV4dC5sZW5ndGgsIHRleHQgXTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKCBtWzFdICkge1xuICAgICAgICAvLyBTb21lIHVuLWludGVyZXN0aW5nIHRleHQgbWF0Y2hlZC4gUmV0dXJuIHRoYXQgZmlyc3RcbiAgICAgICAgcmV0dXJuIFsgbVsxXS5sZW5ndGgsIG1bMV0gXTtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlcztcbiAgICAgIGlmICggbVsyXSBpbiB0aGlzLmRpYWxlY3QuaW5saW5lICkge1xuICAgICAgICByZXMgPSB0aGlzLmRpYWxlY3QuaW5saW5lWyBtWzJdIF0uY2FsbChcbiAgICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgICB0ZXh0LnN1YnN0ciggbS5pbmRleCApLCBtLCBwcmV2aW91c19ub2RlcyB8fCBbXSApO1xuICAgICAgfVxuICAgICAgLy8gRGVmYXVsdCBmb3Igbm93IHRvIG1ha2UgZGV2IGVhc2llci4ganVzdCBzbHVycCBzcGVjaWFsIGFuZCBvdXRwdXQgaXQuXG4gICAgICByZXMgPSByZXMgfHwgWyBtWzJdLmxlbmd0aCwgbVsyXSBdO1xuICAgICAgcmV0dXJuIHJlcztcbiAgICB9LFxuXG4gICAgX19jYWxsX186IGZ1bmN0aW9uIGlubGluZSggdGV4dCwgcGF0dGVybnMgKSB7XG5cbiAgICAgIHZhciBvdXQgPSBbXSxcbiAgICAgICAgICByZXM7XG5cbiAgICAgIGZ1bmN0aW9uIGFkZCh4KSB7XG4gICAgICAgIC8vRDpzZWxmLmRlYnVnKFwiICBhZGRpbmcgb3V0cHV0XCIsIHVuZXZhbCh4KSk7XG4gICAgICAgIGlmICggdHlwZW9mIHggPT0gXCJzdHJpbmdcIiAmJiB0eXBlb2Ygb3V0W291dC5sZW5ndGgtMV0gPT0gXCJzdHJpbmdcIiApXG4gICAgICAgICAgb3V0WyBvdXQubGVuZ3RoLTEgXSArPSB4O1xuICAgICAgICBlbHNlXG4gICAgICAgICAgb3V0LnB1c2goeCk7XG4gICAgICB9XG5cbiAgICAgIHdoaWxlICggdGV4dC5sZW5ndGggPiAwICkge1xuICAgICAgICByZXMgPSB0aGlzLmRpYWxlY3QuaW5saW5lLl9fb25lRWxlbWVudF9fLmNhbGwodGhpcywgdGV4dCwgcGF0dGVybnMsIG91dCApO1xuICAgICAgICB0ZXh0ID0gdGV4dC5zdWJzdHIoIHJlcy5zaGlmdCgpICk7XG4gICAgICAgIGZvckVhY2gocmVzLCBhZGQgKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gb3V0O1xuICAgIH0sXG5cbiAgICAvLyBUaGVzZSBjaGFyYWN0ZXJzIGFyZSBpbnRlcnN0aW5nIGVsc2V3aGVyZSwgc28gaGF2ZSBydWxlcyBmb3IgdGhlbSBzbyB0aGF0XG4gICAgLy8gY2h1bmtzIG9mIHBsYWluIHRleHQgYmxvY2tzIGRvbid0IGluY2x1ZGUgdGhlbVxuICAgIFwiXVwiOiBmdW5jdGlvbiAoKSB7fSxcbiAgICBcIn1cIjogZnVuY3Rpb24gKCkge30sXG5cbiAgICBfX2VzY2FwZV9fIDogL15cXFxcW1xcXFxgXFwqX3t9XFxbXFxdKCkjXFwrLiFcXC1dLyxcblxuICAgIFwiXFxcXFwiOiBmdW5jdGlvbiBlc2NhcGVkKCB0ZXh0ICkge1xuICAgICAgLy8gWyBsZW5ndGggb2YgaW5wdXQgcHJvY2Vzc2VkLCBub2RlL2NoaWxkcmVuIHRvIGFkZC4uLiBdXG4gICAgICAvLyBPbmx5IGVzYWNhcGU6IFxcIGAgKiBfIHsgfSBbIF0gKCApICMgKiArIC0gLiAhXG4gICAgICBpZiAoIHRoaXMuZGlhbGVjdC5pbmxpbmUuX19lc2NhcGVfXy5leGVjKCB0ZXh0ICkgKVxuICAgICAgICByZXR1cm4gWyAyLCB0ZXh0LmNoYXJBdCggMSApIF07XG4gICAgICBlbHNlXG4gICAgICAgIC8vIE5vdCBhbiBlc2FjcGVcbiAgICAgICAgcmV0dXJuIFsgMSwgXCJcXFxcXCIgXTtcbiAgICB9LFxuXG4gICAgXCIhW1wiOiBmdW5jdGlvbiBpbWFnZSggdGV4dCApIHtcblxuICAgICAgLy8gVW5saWtlIGltYWdlcywgYWx0IHRleHQgaXMgcGxhaW4gdGV4dCBvbmx5LiBubyBvdGhlciBlbGVtZW50cyBhcmVcbiAgICAgIC8vIGFsbG93ZWQgaW4gdGhlcmVcblxuICAgICAgLy8gIVtBbHQgdGV4dF0oL3BhdGgvdG8vaW1nLmpwZyBcIk9wdGlvbmFsIHRpdGxlXCIpXG4gICAgICAvLyAgICAgIDEgICAgICAgICAgMiAgICAgICAgICAgIDMgICAgICAgNCAgICAgICAgIDwtLS0gY2FwdHVyZXNcbiAgICAgIHZhciBtID0gdGV4dC5tYXRjaCggL14hXFxbKC4qPylcXF1bIFxcdF0qXFwoWyBcXHRdKihbXlwiKV0qPykoPzpbIFxcdF0rKFtcIiddKSguKj8pXFwzKT9bIFxcdF0qXFwpLyApO1xuXG4gICAgICBpZiAoIG0gKSB7XG4gICAgICAgIGlmICggbVsyXSAmJiBtWzJdWzBdID09IFwiPFwiICYmIG1bMl1bbVsyXS5sZW5ndGgtMV0gPT0gXCI+XCIgKVxuICAgICAgICAgIG1bMl0gPSBtWzJdLnN1YnN0cmluZyggMSwgbVsyXS5sZW5ndGggLSAxICk7XG5cbiAgICAgICAgbVsyXSA9IHRoaXMuZGlhbGVjdC5pbmxpbmUuX19jYWxsX18uY2FsbCggdGhpcywgbVsyXSwgL1xcXFwvIClbMF07XG5cbiAgICAgICAgdmFyIGF0dHJzID0geyBhbHQ6IG1bMV0sIGhyZWY6IG1bMl0gfHwgXCJcIiB9O1xuICAgICAgICBpZiAoIG1bNF0gIT09IHVuZGVmaW5lZClcbiAgICAgICAgICBhdHRycy50aXRsZSA9IG1bNF07XG5cbiAgICAgICAgcmV0dXJuIFsgbVswXS5sZW5ndGgsIFsgXCJpbWdcIiwgYXR0cnMgXSBdO1xuICAgICAgfVxuXG4gICAgICAvLyAhW0FsdCB0ZXh0XVtpZF1cbiAgICAgIG0gPSB0ZXh0Lm1hdGNoKCAvXiFcXFsoLio/KVxcXVsgXFx0XSpcXFsoLio/KVxcXS8gKTtcblxuICAgICAgaWYgKCBtICkge1xuICAgICAgICAvLyBXZSBjYW4ndCBjaGVjayBpZiB0aGUgcmVmZXJlbmNlIGlzIGtub3duIGhlcmUgYXMgaXQgbGlrZWx5IHdvbnQgYmVcbiAgICAgICAgLy8gZm91bmQgdGlsbCBhZnRlci4gQ2hlY2sgaXQgaW4gbWQgdHJlZS0+aG10bCB0cmVlIGNvbnZlcnNpb25cbiAgICAgICAgcmV0dXJuIFsgbVswXS5sZW5ndGgsIFsgXCJpbWdfcmVmXCIsIHsgYWx0OiBtWzFdLCByZWY6IG1bMl0udG9Mb3dlckNhc2UoKSwgb3JpZ2luYWw6IG1bMF0gfSBdIF07XG4gICAgICB9XG5cbiAgICAgIC8vIEp1c3QgY29uc3VtZSB0aGUgJyFbJ1xuICAgICAgcmV0dXJuIFsgMiwgXCIhW1wiIF07XG4gICAgfSxcblxuICAgIFwiW1wiOiBmdW5jdGlvbiBsaW5rKCB0ZXh0ICkge1xuXG4gICAgICB2YXIgb3JpZyA9IFN0cmluZyh0ZXh0KTtcbiAgICAgIC8vIElubGluZSBjb250ZW50IGlzIHBvc3NpYmxlIGluc2lkZSBgbGluayB0ZXh0YFxuICAgICAgdmFyIHJlcyA9IE1hcmtkb3duLkRpYWxlY3RIZWxwZXJzLmlubGluZV91bnRpbF9jaGFyLmNhbGwoIHRoaXMsIHRleHQuc3Vic3RyKDEpLCBcIl1cIiApO1xuXG4gICAgICAvLyBObyBjbG9zaW5nICddJyBmb3VuZC4gSnVzdCBjb25zdW1lIHRoZSBbXG4gICAgICBpZiAoICFyZXMgKSByZXR1cm4gWyAxLCBcIltcIiBdO1xuXG4gICAgICB2YXIgY29uc3VtZWQgPSAxICsgcmVzWyAwIF0sXG4gICAgICAgICAgY2hpbGRyZW4gPSByZXNbIDEgXSxcbiAgICAgICAgICBsaW5rLFxuICAgICAgICAgIGF0dHJzO1xuXG4gICAgICAvLyBBdCB0aGlzIHBvaW50IHRoZSBmaXJzdCBbLi4uXSBoYXMgYmVlbiBwYXJzZWQuIFNlZSB3aGF0IGZvbGxvd3MgdG8gZmluZFxuICAgICAgLy8gb3V0IHdoaWNoIGtpbmQgb2YgbGluayB3ZSBhcmUgKHJlZmVyZW5jZSBvciBkaXJlY3QgdXJsKVxuICAgICAgdGV4dCA9IHRleHQuc3Vic3RyKCBjb25zdW1lZCApO1xuXG4gICAgICAvLyBbbGluayB0ZXh0XSgvcGF0aC90by9pbWcuanBnIFwiT3B0aW9uYWwgdGl0bGVcIilcbiAgICAgIC8vICAgICAgICAgICAgICAgICAxICAgICAgICAgICAgMiAgICAgICAzICAgICAgICAgPC0tLSBjYXB0dXJlc1xuICAgICAgLy8gVGhpcyB3aWxsIGNhcHR1cmUgdXAgdG8gdGhlIGxhc3QgcGFyZW4gaW4gdGhlIGJsb2NrLiBXZSB0aGVuIHB1bGxcbiAgICAgIC8vIGJhY2sgYmFzZWQgb24gaWYgdGhlcmUgYSBtYXRjaGluZyBvbmVzIGluIHRoZSB1cmxcbiAgICAgIC8vICAgIChbaGVyZV0oL3VybC8odGVzdCkpXG4gICAgICAvLyBUaGUgcGFyZW5zIGhhdmUgdG8gYmUgYmFsYW5jZWRcbiAgICAgIHZhciBtID0gdGV4dC5tYXRjaCggL15cXHMqXFwoWyBcXHRdKihbXlwiJ10qKSg/OlsgXFx0XSsoW1wiJ10pKC4qPylcXDIpP1sgXFx0XSpcXCkvICk7XG4gICAgICBpZiAoIG0gKSB7XG4gICAgICAgIHZhciB1cmwgPSBtWzFdO1xuICAgICAgICBjb25zdW1lZCArPSBtWzBdLmxlbmd0aDtcblxuICAgICAgICBpZiAoIHVybCAmJiB1cmxbMF0gPT0gXCI8XCIgJiYgdXJsW3VybC5sZW5ndGgtMV0gPT0gXCI+XCIgKVxuICAgICAgICAgIHVybCA9IHVybC5zdWJzdHJpbmcoIDEsIHVybC5sZW5ndGggLSAxICk7XG5cbiAgICAgICAgLy8gSWYgdGhlcmUgaXMgYSB0aXRsZSB3ZSBkb24ndCBoYXZlIHRvIHdvcnJ5IGFib3V0IHBhcmVucyBpbiB0aGUgdXJsXG4gICAgICAgIGlmICggIW1bM10gKSB7XG4gICAgICAgICAgdmFyIG9wZW5fcGFyZW5zID0gMTsgLy8gT25lIG9wZW4gdGhhdCBpc24ndCBpbiB0aGUgY2FwdHVyZVxuICAgICAgICAgIGZvciAoIHZhciBsZW4gPSAwOyBsZW4gPCB1cmwubGVuZ3RoOyBsZW4rKyApIHtcbiAgICAgICAgICAgIHN3aXRjaCAoIHVybFtsZW5dICkge1xuICAgICAgICAgICAgY2FzZSBcIihcIjpcbiAgICAgICAgICAgICAgb3Blbl9wYXJlbnMrKztcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiKVwiOlxuICAgICAgICAgICAgICBpZiAoIC0tb3Blbl9wYXJlbnMgPT0gMCkge1xuICAgICAgICAgICAgICAgIGNvbnN1bWVkIC09IHVybC5sZW5ndGggLSBsZW47XG4gICAgICAgICAgICAgICAgdXJsID0gdXJsLnN1YnN0cmluZygwLCBsZW4pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFByb2Nlc3MgZXNjYXBlcyBvbmx5XG4gICAgICAgIHVybCA9IHRoaXMuZGlhbGVjdC5pbmxpbmUuX19jYWxsX18uY2FsbCggdGhpcywgdXJsLCAvXFxcXC8gKVswXTtcblxuICAgICAgICBhdHRycyA9IHsgaHJlZjogdXJsIHx8IFwiXCIgfTtcbiAgICAgICAgaWYgKCBtWzNdICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgYXR0cnMudGl0bGUgPSBtWzNdO1xuXG4gICAgICAgIGxpbmsgPSBbIFwibGlua1wiLCBhdHRycyBdLmNvbmNhdCggY2hpbGRyZW4gKTtcbiAgICAgICAgcmV0dXJuIFsgY29uc3VtZWQsIGxpbmsgXTtcbiAgICAgIH1cblxuICAgICAgLy8gW0FsdCB0ZXh0XVtpZF1cbiAgICAgIC8vIFtBbHQgdGV4dF0gW2lkXVxuICAgICAgbSA9IHRleHQubWF0Y2goIC9eXFxzKlxcWyguKj8pXFxdLyApO1xuXG4gICAgICBpZiAoIG0gKSB7XG5cbiAgICAgICAgY29uc3VtZWQgKz0gbVsgMCBdLmxlbmd0aDtcblxuICAgICAgICAvLyBbbGlua3NdW10gdXNlcyBsaW5rcyBhcyBpdHMgcmVmZXJlbmNlXG4gICAgICAgIGF0dHJzID0geyByZWY6ICggbVsgMSBdIHx8IFN0cmluZyhjaGlsZHJlbikgKS50b0xvd2VyQ2FzZSgpLCAgb3JpZ2luYWw6IG9yaWcuc3Vic3RyKCAwLCBjb25zdW1lZCApIH07XG5cbiAgICAgICAgbGluayA9IFsgXCJsaW5rX3JlZlwiLCBhdHRycyBdLmNvbmNhdCggY2hpbGRyZW4gKTtcblxuICAgICAgICAvLyBXZSBjYW4ndCBjaGVjayBpZiB0aGUgcmVmZXJlbmNlIGlzIGtub3duIGhlcmUgYXMgaXQgbGlrZWx5IHdvbnQgYmVcbiAgICAgICAgLy8gZm91bmQgdGlsbCBhZnRlci4gQ2hlY2sgaXQgaW4gbWQgdHJlZS0+aG10bCB0cmVlIGNvbnZlcnNpb24uXG4gICAgICAgIC8vIFN0b3JlIHRoZSBvcmlnaW5hbCBzbyB0aGF0IGNvbnZlcnNpb24gY2FuIHJldmVydCBpZiB0aGUgcmVmIGlzbid0IGZvdW5kLlxuICAgICAgICByZXR1cm4gWyBjb25zdW1lZCwgbGluayBdO1xuICAgICAgfVxuXG4gICAgICAvLyBbaWRdXG4gICAgICAvLyBPbmx5IGlmIGlkIGlzIHBsYWluIChubyBmb3JtYXR0aW5nLilcbiAgICAgIGlmICggY2hpbGRyZW4ubGVuZ3RoID09IDEgJiYgdHlwZW9mIGNoaWxkcmVuWzBdID09IFwic3RyaW5nXCIgKSB7XG5cbiAgICAgICAgYXR0cnMgPSB7IHJlZjogY2hpbGRyZW5bMF0udG9Mb3dlckNhc2UoKSwgIG9yaWdpbmFsOiBvcmlnLnN1YnN0ciggMCwgY29uc3VtZWQgKSB9O1xuICAgICAgICBsaW5rID0gWyBcImxpbmtfcmVmXCIsIGF0dHJzLCBjaGlsZHJlblswXSBdO1xuICAgICAgICByZXR1cm4gWyBjb25zdW1lZCwgbGluayBdO1xuICAgICAgfVxuXG4gICAgICAvLyBKdXN0IGNvbnN1bWUgdGhlIFwiW1wiXG4gICAgICByZXR1cm4gWyAxLCBcIltcIiBdO1xuICAgIH0sXG5cblxuICAgIFwiPFwiOiBmdW5jdGlvbiBhdXRvTGluayggdGV4dCApIHtcbiAgICAgIHZhciBtO1xuXG4gICAgICBpZiAoICggbSA9IHRleHQubWF0Y2goIC9ePCg/OigoaHR0cHM/fGZ0cHxtYWlsdG8pOltePl0rKXwoLio/QC4qP1xcLlthLXpBLVpdKykpPi8gKSApICE9IG51bGwgKSB7XG4gICAgICAgIGlmICggbVszXSApIHtcbiAgICAgICAgICByZXR1cm4gWyBtWzBdLmxlbmd0aCwgWyBcImxpbmtcIiwgeyBocmVmOiBcIm1haWx0bzpcIiArIG1bM10gfSwgbVszXSBdIF07XG5cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICggbVsyXSA9PSBcIm1haWx0b1wiICkge1xuICAgICAgICAgIHJldHVybiBbIG1bMF0ubGVuZ3RoLCBbIFwibGlua1wiLCB7IGhyZWY6IG1bMV0gfSwgbVsxXS5zdWJzdHIoXCJtYWlsdG86XCIubGVuZ3RoICkgXSBdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgICByZXR1cm4gWyBtWzBdLmxlbmd0aCwgWyBcImxpbmtcIiwgeyBocmVmOiBtWzFdIH0sIG1bMV0gXSBdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gWyAxLCBcIjxcIiBdO1xuICAgIH0sXG5cbiAgICBcImBcIjogZnVuY3Rpb24gaW5saW5lQ29kZSggdGV4dCApIHtcbiAgICAgIC8vIElubGluZSBjb2RlIGJsb2NrLiBhcyBtYW55IGJhY2t0aWNrcyBhcyB5b3UgbGlrZSB0byBzdGFydCBpdFxuICAgICAgLy8gQWx3YXlzIHNraXAgb3ZlciB0aGUgb3BlbmluZyB0aWNrcy5cbiAgICAgIHZhciBtID0gdGV4dC5tYXRjaCggLyhgKykoKFtcXHNcXFNdKj8pXFwxKS8gKTtcblxuICAgICAgaWYgKCBtICYmIG1bMl0gKVxuICAgICAgICByZXR1cm4gWyBtWzFdLmxlbmd0aCArIG1bMl0ubGVuZ3RoLCBbIFwiaW5saW5lY29kZVwiLCBtWzNdIF0gXTtcbiAgICAgIGVsc2Uge1xuICAgICAgICAvLyBUT0RPOiBObyBtYXRjaGluZyBlbmQgY29kZSBmb3VuZCAtIHdhcm4hXG4gICAgICAgIHJldHVybiBbIDEsIFwiYFwiIF07XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiICBcXG5cIjogZnVuY3Rpb24gbGluZUJyZWFrKCB0ZXh0ICkge1xuICAgICAgcmV0dXJuIFsgMywgWyBcImxpbmVicmVha1wiIF0gXTtcbiAgICB9XG5cbn07XG5cbi8vIE1ldGEgSGVscGVyL2dlbmVyYXRvciBtZXRob2QgZm9yIGVtIGFuZCBzdHJvbmcgaGFuZGxpbmdcbmZ1bmN0aW9uIHN0cm9uZ19lbSggdGFnLCBtZCApIHtcblxuICB2YXIgc3RhdGVfc2xvdCA9IHRhZyArIFwiX3N0YXRlXCIsXG4gICAgICBvdGhlcl9zbG90ID0gdGFnID09IFwic3Ryb25nXCIgPyBcImVtX3N0YXRlXCIgOiBcInN0cm9uZ19zdGF0ZVwiO1xuXG4gIGZ1bmN0aW9uIENsb3NlVGFnKGxlbikge1xuICAgIHRoaXMubGVuX2FmdGVyID0gbGVuO1xuICAgIHRoaXMubmFtZSA9IFwiY2xvc2VfXCIgKyBtZDtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoIHRleHQsIG9yaWdfbWF0Y2ggKSB7XG5cbiAgICBpZiAoIHRoaXNbc3RhdGVfc2xvdF1bMF0gPT0gbWQgKSB7XG4gICAgICAvLyBNb3N0IHJlY2VudCBlbSBpcyBvZiB0aGlzIHR5cGVcbiAgICAgIC8vRDp0aGlzLmRlYnVnKFwiY2xvc2luZ1wiLCBtZCk7XG4gICAgICB0aGlzW3N0YXRlX3Nsb3RdLnNoaWZ0KCk7XG5cbiAgICAgIC8vIFwiQ29uc3VtZVwiIGV2ZXJ5dGhpbmcgdG8gZ28gYmFjayB0byB0aGUgcmVjcnVzaW9uIGluIHRoZSBlbHNlLWJsb2NrIGJlbG93XG4gICAgICByZXR1cm5bIHRleHQubGVuZ3RoLCBuZXcgQ2xvc2VUYWcodGV4dC5sZW5ndGgtbWQubGVuZ3RoKSBdO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIC8vIFN0b3JlIGEgY2xvbmUgb2YgdGhlIGVtL3N0cm9uZyBzdGF0ZXNcbiAgICAgIHZhciBvdGhlciA9IHRoaXNbb3RoZXJfc2xvdF0uc2xpY2UoKSxcbiAgICAgICAgICBzdGF0ZSA9IHRoaXNbc3RhdGVfc2xvdF0uc2xpY2UoKTtcblxuICAgICAgdGhpc1tzdGF0ZV9zbG90XS51bnNoaWZ0KG1kKTtcblxuICAgICAgLy9EOnRoaXMuZGVidWdfaW5kZW50ICs9IFwiICBcIjtcblxuICAgICAgLy8gUmVjdXJzZVxuICAgICAgdmFyIHJlcyA9IHRoaXMucHJvY2Vzc0lubGluZSggdGV4dC5zdWJzdHIoIG1kLmxlbmd0aCApICk7XG4gICAgICAvL0Q6dGhpcy5kZWJ1Z19pbmRlbnQgPSB0aGlzLmRlYnVnX2luZGVudC5zdWJzdHIoMik7XG5cbiAgICAgIHZhciBsYXN0ID0gcmVzW3Jlcy5sZW5ndGggLSAxXTtcblxuICAgICAgLy9EOnRoaXMuZGVidWcoXCJwcm9jZXNzSW5saW5lIGZyb21cIiwgdGFnICsgXCI6IFwiLCB1bmV2YWwoIHJlcyApICk7XG5cbiAgICAgIHZhciBjaGVjayA9IHRoaXNbc3RhdGVfc2xvdF0uc2hpZnQoKTtcbiAgICAgIGlmICggbGFzdCBpbnN0YW5jZW9mIENsb3NlVGFnICkge1xuICAgICAgICByZXMucG9wKCk7XG4gICAgICAgIC8vIFdlIG1hdGNoZWQhIEh1enphaC5cbiAgICAgICAgdmFyIGNvbnN1bWVkID0gdGV4dC5sZW5ndGggLSBsYXN0Lmxlbl9hZnRlcjtcbiAgICAgICAgcmV0dXJuIFsgY29uc3VtZWQsIFsgdGFnIF0uY29uY2F0KHJlcykgXTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICAvLyBSZXN0b3JlIHRoZSBzdGF0ZSBvZiB0aGUgb3RoZXIga2luZC4gV2UgbWlnaHQgaGF2ZSBtaXN0YWtlbmx5IGNsb3NlZCBpdC5cbiAgICAgICAgdGhpc1tvdGhlcl9zbG90XSA9IG90aGVyO1xuICAgICAgICB0aGlzW3N0YXRlX3Nsb3RdID0gc3RhdGU7XG5cbiAgICAgICAgLy8gV2UgY2FuJ3QgcmV1c2UgdGhlIHByb2Nlc3NlZCByZXN1bHQgYXMgaXQgY291bGQgaGF2ZSB3cm9uZyBwYXJzaW5nIGNvbnRleHRzIGluIGl0LlxuICAgICAgICByZXR1cm4gWyBtZC5sZW5ndGgsIG1kIF07XG4gICAgICB9XG4gICAgfVxuICB9OyAvLyBFbmQgcmV0dXJuZWQgZnVuY3Rpb25cbn1cblxuTWFya2Rvd24uZGlhbGVjdHMuR3J1YmVyLmlubGluZVtcIioqXCJdID0gc3Ryb25nX2VtKFwic3Ryb25nXCIsIFwiKipcIik7XG5NYXJrZG93bi5kaWFsZWN0cy5HcnViZXIuaW5saW5lW1wiX19cIl0gPSBzdHJvbmdfZW0oXCJzdHJvbmdcIiwgXCJfX1wiKTtcbk1hcmtkb3duLmRpYWxlY3RzLkdydWJlci5pbmxpbmVbXCIqXCJdICA9IHN0cm9uZ19lbShcImVtXCIsIFwiKlwiKTtcbk1hcmtkb3duLmRpYWxlY3RzLkdydWJlci5pbmxpbmVbXCJfXCJdICA9IHN0cm9uZ19lbShcImVtXCIsIFwiX1wiKTtcblxuXG4vLyBCdWlsZCBkZWZhdWx0IG9yZGVyIGZyb20gaW5zZXJ0aW9uIG9yZGVyLlxuTWFya2Rvd24uYnVpbGRCbG9ja09yZGVyID0gZnVuY3Rpb24oZCkge1xuICB2YXIgb3JkID0gW107XG4gIGZvciAoIHZhciBpIGluIGQgKSB7XG4gICAgaWYgKCBpID09IFwiX19vcmRlcl9fXCIgfHwgaSA9PSBcIl9fY2FsbF9fXCIgKSBjb250aW51ZTtcbiAgICBvcmQucHVzaCggaSApO1xuICB9XG4gIGQuX19vcmRlcl9fID0gb3JkO1xufTtcblxuLy8gQnVpbGQgcGF0dGVybnMgZm9yIGlubGluZSBtYXRjaGVyXG5NYXJrZG93bi5idWlsZElubGluZVBhdHRlcm5zID0gZnVuY3Rpb24oZCkge1xuICB2YXIgcGF0dGVybnMgPSBbXTtcblxuICBmb3IgKCB2YXIgaSBpbiBkICkge1xuICAgIC8vIF9fZm9vX18gaXMgcmVzZXJ2ZWQgYW5kIG5vdCBhIHBhdHRlcm5cbiAgICBpZiAoIGkubWF0Y2goIC9eX18uKl9fJC8pICkgY29udGludWU7XG4gICAgdmFyIGwgPSBpLnJlcGxhY2UoIC8oW1xcXFwuKis/fCgpXFxbXFxde31dKS9nLCBcIlxcXFwkMVwiIClcbiAgICAgICAgICAgICAucmVwbGFjZSggL1xcbi8sIFwiXFxcXG5cIiApO1xuICAgIHBhdHRlcm5zLnB1c2goIGkubGVuZ3RoID09IDEgPyBsIDogXCIoPzpcIiArIGwgKyBcIilcIiApO1xuICB9XG5cbiAgcGF0dGVybnMgPSBwYXR0ZXJucy5qb2luKFwifFwiKTtcbiAgZC5fX3BhdHRlcm5zX18gPSBwYXR0ZXJucztcbiAgLy9wcmludChcInBhdHRlcm5zOlwiLCB1bmV2YWwoIHBhdHRlcm5zICkgKTtcblxuICB2YXIgZm4gPSBkLl9fY2FsbF9fO1xuICBkLl9fY2FsbF9fID0gZnVuY3Rpb24odGV4dCwgcGF0dGVybikge1xuICAgIGlmICggcGF0dGVybiAhPSB1bmRlZmluZWQgKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGlzLCB0ZXh0LCBwYXR0ZXJuKTtcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoaXMsIHRleHQsIHBhdHRlcm5zKTtcbiAgICB9XG4gIH07XG59O1xuXG5NYXJrZG93bi5EaWFsZWN0SGVscGVycyA9IHt9O1xuTWFya2Rvd24uRGlhbGVjdEhlbHBlcnMuaW5saW5lX3VudGlsX2NoYXIgPSBmdW5jdGlvbiggdGV4dCwgd2FudCApIHtcbiAgdmFyIGNvbnN1bWVkID0gMCxcbiAgICAgIG5vZGVzID0gW107XG5cbiAgd2hpbGUgKCB0cnVlICkge1xuICAgIGlmICggdGV4dC5jaGFyQXQoIGNvbnN1bWVkICkgPT0gd2FudCApIHtcbiAgICAgIC8vIEZvdW5kIHRoZSBjaGFyYWN0ZXIgd2Ugd2VyZSBsb29raW5nIGZvclxuICAgICAgY29uc3VtZWQrKztcbiAgICAgIHJldHVybiBbIGNvbnN1bWVkLCBub2RlcyBdO1xuICAgIH1cblxuICAgIGlmICggY29uc3VtZWQgPj0gdGV4dC5sZW5ndGggKSB7XG4gICAgICAvLyBObyBjbG9zaW5nIGNoYXIgZm91bmQuIEFib3J0LlxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIHJlcyA9IHRoaXMuZGlhbGVjdC5pbmxpbmUuX19vbmVFbGVtZW50X18uY2FsbCh0aGlzLCB0ZXh0LnN1YnN0ciggY29uc3VtZWQgKSApO1xuICAgIGNvbnN1bWVkICs9IHJlc1sgMCBdO1xuICAgIC8vIEFkZCBhbnkgcmV0dXJuZWQgbm9kZXMuXG4gICAgbm9kZXMucHVzaC5hcHBseSggbm9kZXMsIHJlcy5zbGljZSggMSApICk7XG4gIH1cbn1cblxuLy8gSGVscGVyIGZ1bmN0aW9uIHRvIG1ha2Ugc3ViLWNsYXNzaW5nIGEgZGlhbGVjdCBlYXNpZXJcbk1hcmtkb3duLnN1YmNsYXNzRGlhbGVjdCA9IGZ1bmN0aW9uKCBkICkge1xuICBmdW5jdGlvbiBCbG9jaygpIHt9XG4gIEJsb2NrLnByb3RvdHlwZSA9IGQuYmxvY2s7XG4gIGZ1bmN0aW9uIElubGluZSgpIHt9XG4gIElubGluZS5wcm90b3R5cGUgPSBkLmlubGluZTtcblxuICByZXR1cm4geyBibG9jazogbmV3IEJsb2NrKCksIGlubGluZTogbmV3IElubGluZSgpIH07XG59O1xuXG5NYXJrZG93bi5idWlsZEJsb2NrT3JkZXIgKCBNYXJrZG93bi5kaWFsZWN0cy5HcnViZXIuYmxvY2sgKTtcbk1hcmtkb3duLmJ1aWxkSW5saW5lUGF0dGVybnMoIE1hcmtkb3duLmRpYWxlY3RzLkdydWJlci5pbmxpbmUgKTtcblxuTWFya2Rvd24uZGlhbGVjdHMuTWFydWt1ID0gTWFya2Rvd24uc3ViY2xhc3NEaWFsZWN0KCBNYXJrZG93bi5kaWFsZWN0cy5HcnViZXIgKTtcblxuTWFya2Rvd24uZGlhbGVjdHMuTWFydWt1LnByb2Nlc3NNZXRhSGFzaCA9IGZ1bmN0aW9uIHByb2Nlc3NNZXRhSGFzaCggbWV0YV9zdHJpbmcgKSB7XG4gIHZhciBtZXRhID0gc3BsaXRfbWV0YV9oYXNoKCBtZXRhX3N0cmluZyApLFxuICAgICAgYXR0ciA9IHt9O1xuXG4gIGZvciAoIHZhciBpID0gMDsgaSA8IG1ldGEubGVuZ3RoOyArK2kgKSB7XG4gICAgLy8gaWQ6ICNmb29cbiAgICBpZiAoIC9eIy8udGVzdCggbWV0YVsgaSBdICkgKSB7XG4gICAgICBhdHRyLmlkID0gbWV0YVsgaSBdLnN1YnN0cmluZyggMSApO1xuICAgIH1cbiAgICAvLyBjbGFzczogLmZvb1xuICAgIGVsc2UgaWYgKCAvXlxcLi8udGVzdCggbWV0YVsgaSBdICkgKSB7XG4gICAgICAvLyBpZiBjbGFzcyBhbHJlYWR5IGV4aXN0cywgYXBwZW5kIHRoZSBuZXcgb25lXG4gICAgICBpZiAoIGF0dHJbXCJjbGFzc1wiXSApIHtcbiAgICAgICAgYXR0cltcImNsYXNzXCJdID0gYXR0cltcImNsYXNzXCJdICsgbWV0YVsgaSBdLnJlcGxhY2UoIC8uLywgXCIgXCIgKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBhdHRyW1wiY2xhc3NcIl0gPSBtZXRhWyBpIF0uc3Vic3RyaW5nKCAxICk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGF0dHJpYnV0ZTogZm9vPWJhclxuICAgIGVsc2UgaWYgKCAvXFw9Ly50ZXN0KCBtZXRhWyBpIF0gKSApIHtcbiAgICAgIHZhciBzID0gbWV0YVsgaSBdLnNwbGl0KCAvXFw9LyApO1xuICAgICAgYXR0clsgc1sgMCBdIF0gPSBzWyAxIF07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGF0dHI7XG59XG5cbmZ1bmN0aW9uIHNwbGl0X21ldGFfaGFzaCggbWV0YV9zdHJpbmcgKSB7XG4gIHZhciBtZXRhID0gbWV0YV9zdHJpbmcuc3BsaXQoIFwiXCIgKSxcbiAgICAgIHBhcnRzID0gWyBcIlwiIF0sXG4gICAgICBpbl9xdW90ZXMgPSBmYWxzZTtcblxuICB3aGlsZSAoIG1ldGEubGVuZ3RoICkge1xuICAgIHZhciBsZXR0ZXIgPSBtZXRhLnNoaWZ0KCk7XG4gICAgc3dpdGNoICggbGV0dGVyICkge1xuICAgICAgY2FzZSBcIiBcIiA6XG4gICAgICAgIC8vIGlmIHdlJ3JlIGluIGEgcXVvdGVkIHNlY3Rpb24sIGtlZXAgaXRcbiAgICAgICAgaWYgKCBpbl9xdW90ZXMgKSB7XG4gICAgICAgICAgcGFydHNbIHBhcnRzLmxlbmd0aCAtIDEgXSArPSBsZXR0ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLy8gb3RoZXJ3aXNlIG1ha2UgYSBuZXcgcGFydFxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBwYXJ0cy5wdXNoKCBcIlwiICk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiJ1wiIDpcbiAgICAgIGNhc2UgJ1wiJyA6XG4gICAgICAgIC8vIHJldmVyc2UgdGhlIHF1b3RlcyBhbmQgbW92ZSBzdHJhaWdodCBvblxuICAgICAgICBpbl9xdW90ZXMgPSAhaW5fcXVvdGVzO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJcXFxcXCIgOlxuICAgICAgICAvLyBzaGlmdCBvZmYgdGhlIG5leHQgbGV0dGVyIHRvIGJlIHVzZWQgc3RyYWlnaHQgYXdheS5cbiAgICAgICAgLy8gaXQgd2FzIGVzY2FwZWQgc28gd2UnbGwga2VlcCBpdCB3aGF0ZXZlciBpdCBpc1xuICAgICAgICBsZXR0ZXIgPSBtZXRhLnNoaWZ0KCk7XG4gICAgICBkZWZhdWx0IDpcbiAgICAgICAgcGFydHNbIHBhcnRzLmxlbmd0aCAtIDEgXSArPSBsZXR0ZXI7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYXJ0cztcbn1cblxuTWFya2Rvd24uZGlhbGVjdHMuTWFydWt1LmJsb2NrLmRvY3VtZW50X21ldGEgPSBmdW5jdGlvbiBkb2N1bWVudF9tZXRhKCBibG9jaywgbmV4dCApIHtcbiAgLy8gd2UncmUgb25seSBpbnRlcmVzdGVkIGluIHRoZSBmaXJzdCBibG9ja1xuICBpZiAoIGJsb2NrLmxpbmVOdW1iZXIgPiAxICkgcmV0dXJuIHVuZGVmaW5lZDtcblxuICAvLyBkb2N1bWVudF9tZXRhIGJsb2NrcyBjb25zaXN0IG9mIG9uZSBvciBtb3JlIGxpbmVzIG9mIGBLZXk6IFZhbHVlXFxuYFxuICBpZiAoICEgYmxvY2subWF0Y2goIC9eKD86XFx3KzouKlxcbikqXFx3KzouKiQvICkgKSByZXR1cm4gdW5kZWZpbmVkO1xuXG4gIC8vIG1ha2UgYW4gYXR0cmlidXRlIG5vZGUgaWYgaXQgZG9lc24ndCBleGlzdFxuICBpZiAoICFleHRyYWN0X2F0dHIoIHRoaXMudHJlZSApICkge1xuICAgIHRoaXMudHJlZS5zcGxpY2UoIDEsIDAsIHt9ICk7XG4gIH1cblxuICB2YXIgcGFpcnMgPSBibG9jay5zcGxpdCggL1xcbi8gKTtcbiAgZm9yICggcCBpbiBwYWlycyApIHtcbiAgICB2YXIgbSA9IHBhaXJzWyBwIF0ubWF0Y2goIC8oXFx3Kyk6XFxzKiguKikkLyApLFxuICAgICAgICBrZXkgPSBtWyAxIF0udG9Mb3dlckNhc2UoKSxcbiAgICAgICAgdmFsdWUgPSBtWyAyIF07XG5cbiAgICB0aGlzLnRyZWVbIDEgXVsga2V5IF0gPSB2YWx1ZTtcbiAgfVxuXG4gIC8vIGRvY3VtZW50X21ldGEgcHJvZHVjZXMgbm8gY29udGVudCFcbiAgcmV0dXJuIFtdO1xufTtcblxuTWFya2Rvd24uZGlhbGVjdHMuTWFydWt1LmJsb2NrLmJsb2NrX21ldGEgPSBmdW5jdGlvbiBibG9ja19tZXRhKCBibG9jaywgbmV4dCApIHtcbiAgLy8gY2hlY2sgaWYgdGhlIGxhc3QgbGluZSBvZiB0aGUgYmxvY2sgaXMgYW4gbWV0YSBoYXNoXG4gIHZhciBtID0gYmxvY2subWF0Y2goIC8oXnxcXG4pIHswLDN9XFx7OlxccyooKD86XFxcXFxcfXxbXlxcfV0pKilcXHMqXFx9JC8gKTtcbiAgaWYgKCAhbSApIHJldHVybiB1bmRlZmluZWQ7XG5cbiAgLy8gcHJvY2VzcyB0aGUgbWV0YSBoYXNoXG4gIHZhciBhdHRyID0gdGhpcy5kaWFsZWN0LnByb2Nlc3NNZXRhSGFzaCggbVsgMiBdICk7XG5cbiAgdmFyIGhhc2g7XG5cbiAgLy8gaWYgd2UgbWF0Y2hlZCBeIHRoZW4gd2UgbmVlZCB0byBhcHBseSBtZXRhIHRvIHRoZSBwcmV2aW91cyBibG9ja1xuICBpZiAoIG1bIDEgXSA9PT0gXCJcIiApIHtcbiAgICB2YXIgbm9kZSA9IHRoaXMudHJlZVsgdGhpcy50cmVlLmxlbmd0aCAtIDEgXTtcbiAgICBoYXNoID0gZXh0cmFjdF9hdHRyKCBub2RlICk7XG5cbiAgICAvLyBpZiB0aGUgbm9kZSBpcyBhIHN0cmluZyAocmF0aGVyIHRoYW4gSnNvbk1MKSwgYmFpbFxuICAgIGlmICggdHlwZW9mIG5vZGUgPT09IFwic3RyaW5nXCIgKSByZXR1cm4gdW5kZWZpbmVkO1xuXG4gICAgLy8gY3JlYXRlIHRoZSBhdHRyaWJ1dGUgaGFzaCBpZiBpdCBkb2Vzbid0IGV4aXN0XG4gICAgaWYgKCAhaGFzaCApIHtcbiAgICAgIGhhc2ggPSB7fTtcbiAgICAgIG5vZGUuc3BsaWNlKCAxLCAwLCBoYXNoICk7XG4gICAgfVxuXG4gICAgLy8gYWRkIHRoZSBhdHRyaWJ1dGVzIGluXG4gICAgZm9yICggYSBpbiBhdHRyICkge1xuICAgICAgaGFzaFsgYSBdID0gYXR0clsgYSBdO1xuICAgIH1cblxuICAgIC8vIHJldHVybiBub3RoaW5nIHNvIHRoZSBtZXRhIGhhc2ggaXMgcmVtb3ZlZFxuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIC8vIHB1bGwgdGhlIG1ldGEgaGFzaCBvZmYgdGhlIGJsb2NrIGFuZCBwcm9jZXNzIHdoYXQncyBsZWZ0XG4gIHZhciBiID0gYmxvY2sucmVwbGFjZSggL1xcbi4qJC8sIFwiXCIgKSxcbiAgICAgIHJlc3VsdCA9IHRoaXMucHJvY2Vzc0Jsb2NrKCBiLCBbXSApO1xuXG4gIC8vIGdldCBvciBtYWtlIHRoZSBhdHRyaWJ1dGVzIGhhc2hcbiAgaGFzaCA9IGV4dHJhY3RfYXR0ciggcmVzdWx0WyAwIF0gKTtcbiAgaWYgKCAhaGFzaCApIHtcbiAgICBoYXNoID0ge307XG4gICAgcmVzdWx0WyAwIF0uc3BsaWNlKCAxLCAwLCBoYXNoICk7XG4gIH1cblxuICAvLyBhdHRhY2ggdGhlIGF0dHJpYnV0ZXMgdG8gdGhlIGJsb2NrXG4gIGZvciAoIGEgaW4gYXR0ciApIHtcbiAgICBoYXNoWyBhIF0gPSBhdHRyWyBhIF07XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuTWFya2Rvd24uZGlhbGVjdHMuTWFydWt1LmJsb2NrLmRlZmluaXRpb25fbGlzdCA9IGZ1bmN0aW9uIGRlZmluaXRpb25fbGlzdCggYmxvY2ssIG5leHQgKSB7XG4gIC8vIG9uZSBvciBtb3JlIHRlcm1zIGZvbGxvd2VkIGJ5IG9uZSBvciBtb3JlIGRlZmluaXRpb25zLCBpbiBhIHNpbmdsZSBibG9ja1xuICB2YXIgdGlnaHQgPSAvXigoPzpbXlxcczpdLipcXG4pKyk6XFxzKyhbXFxzXFxTXSspJC8sXG4gICAgICBsaXN0ID0gWyBcImRsXCIgXSxcbiAgICAgIGksIG07XG5cbiAgLy8gc2VlIGlmIHdlJ3JlIGRlYWxpbmcgd2l0aCBhIHRpZ2h0IG9yIGxvb3NlIGJsb2NrXG4gIGlmICggKCBtID0gYmxvY2subWF0Y2goIHRpZ2h0ICkgKSApIHtcbiAgICAvLyBwdWxsIHN1YnNlcXVlbnQgdGlnaHQgREwgYmxvY2tzIG91dCBvZiBgbmV4dGBcbiAgICB2YXIgYmxvY2tzID0gWyBibG9jayBdO1xuICAgIHdoaWxlICggbmV4dC5sZW5ndGggJiYgdGlnaHQuZXhlYyggbmV4dFsgMCBdICkgKSB7XG4gICAgICBibG9ja3MucHVzaCggbmV4dC5zaGlmdCgpICk7XG4gICAgfVxuXG4gICAgZm9yICggdmFyIGIgPSAwOyBiIDwgYmxvY2tzLmxlbmd0aDsgKytiICkge1xuICAgICAgdmFyIG0gPSBibG9ja3NbIGIgXS5tYXRjaCggdGlnaHQgKSxcbiAgICAgICAgICB0ZXJtcyA9IG1bIDEgXS5yZXBsYWNlKCAvXFxuJC8sIFwiXCIgKS5zcGxpdCggL1xcbi8gKSxcbiAgICAgICAgICBkZWZucyA9IG1bIDIgXS5zcGxpdCggL1xcbjpcXHMrLyApO1xuXG4gICAgICAvLyBwcmludCggdW5ldmFsKCBtICkgKTtcblxuICAgICAgZm9yICggaSA9IDA7IGkgPCB0ZXJtcy5sZW5ndGg7ICsraSApIHtcbiAgICAgICAgbGlzdC5wdXNoKCBbIFwiZHRcIiwgdGVybXNbIGkgXSBdICk7XG4gICAgICB9XG5cbiAgICAgIGZvciAoIGkgPSAwOyBpIDwgZGVmbnMubGVuZ3RoOyArK2kgKSB7XG4gICAgICAgIC8vIHJ1biBpbmxpbmUgcHJvY2Vzc2luZyBvdmVyIHRoZSBkZWZpbml0aW9uXG4gICAgICAgIGxpc3QucHVzaCggWyBcImRkXCIgXS5jb25jYXQoIHRoaXMucHJvY2Vzc0lubGluZSggZGVmbnNbIGkgXS5yZXBsYWNlKCAvKFxcbilcXHMrLywgXCIkMVwiICkgKSApICk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGVsc2Uge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICByZXR1cm4gWyBsaXN0IF07XG59O1xuXG4vLyBzcGxpdHMgb24gdW5lc2NhcGVkIGluc3RhbmNlcyBvZiBAY2guIElmIEBjaCBpcyBub3QgYSBjaGFyYWN0ZXIgdGhlIHJlc3VsdFxuLy8gY2FuIGJlIHVucHJlZGljdGFibGVcblxuTWFya2Rvd24uZGlhbGVjdHMuTWFydWt1LmJsb2NrLnRhYmxlID0gZnVuY3Rpb24gdGFibGUgKGJsb2NrLCBuZXh0KSB7XG5cbiAgICB2YXIgX3NwbGl0X29uX3VuZXNjYXBlZCA9IGZ1bmN0aW9uKHMsIGNoKSB7XG4gICAgICAgIGNoID0gY2ggfHwgJ1xcXFxzJztcbiAgICAgICAgaWYgKGNoLm1hdGNoKC9eW1xcXFx8XFxbXFxde30/Ki4rXiRdJC8pKSB7IGNoID0gJ1xcXFwnICsgY2g7IH1cbiAgICAgICAgdmFyIHJlcyA9IFsgXSxcbiAgICAgICAgICAgIHIgPSBuZXcgUmVnRXhwKCdeKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcJyArIGNoICsgJ10pKiknICsgY2ggKyAnKC4qKScpLFxuICAgICAgICAgICAgbTtcbiAgICAgICAgd2hpbGUobSA9IHMubWF0Y2gocikpIHtcbiAgICAgICAgICAgIHJlcy5wdXNoKG1bMV0pO1xuICAgICAgICAgICAgcyA9IG1bMl07XG4gICAgICAgIH1cbiAgICAgICAgcmVzLnB1c2gocyk7XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfVxuXG4gICAgdmFyIGxlYWRpbmdfcGlwZSA9IC9eIHswLDN9XFx8KC4rKVxcbiB7MCwzfVxcfFxccyooW1xcLTpdK1tcXC18IDpdKilcXG4oKD86XFxzKlxcfC4qKD86XFxufCQpKSopKD89XFxufCQpLyxcbiAgICAgICAgLy8gZmluZCBhdCBsZWFzdCBhbiB1bmVzY2FwZWQgcGlwZSBpbiBlYWNoIGxpbmVcbiAgICAgICAgbm9fbGVhZGluZ19waXBlID0gL14gezAsM30oXFxTKD86XFxcXC58W15cXFxcfF0pKlxcfC4qKVxcbiB7MCwzfShbXFwtOl0rXFxzKlxcfFtcXC18IDpdKilcXG4oKD86KD86XFxcXC58W15cXFxcfF0pKlxcfC4qKD86XFxufCQpKSopKD89XFxufCQpLyxcbiAgICAgICAgaSwgbTtcbiAgICBpZiAobSA9IGJsb2NrLm1hdGNoKGxlYWRpbmdfcGlwZSkpIHtcbiAgICAgICAgLy8gcmVtb3ZlIGxlYWRpbmcgcGlwZXMgaW4gY29udGVudHNcbiAgICAgICAgLy8gKGhlYWRlciBhbmQgaG9yaXpvbnRhbCBydWxlIGFscmVhZHkgaGF2ZSB0aGUgbGVhZGluZyBwaXBlIGxlZnQgb3V0KVxuICAgICAgICBtWzNdID0gbVszXS5yZXBsYWNlKC9eXFxzKlxcfC9nbSwgJycpO1xuICAgIH0gZWxzZSBpZiAoISAoIG0gPSBibG9jay5tYXRjaChub19sZWFkaW5nX3BpcGUpKSkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHZhciB0YWJsZSA9IFsgXCJ0YWJsZVwiLCBbIFwidGhlYWRcIiwgWyBcInRyXCIgXSBdLCBbIFwidGJvZHlcIiBdIF07XG5cbiAgICAvLyByZW1vdmUgdHJhaWxpbmcgcGlwZXMsIHRoZW4gc3BsaXQgb24gcGlwZXNcbiAgICAvLyAobm8gZXNjYXBlZCBwaXBlcyBhcmUgYWxsb3dlZCBpbiBob3Jpem9udGFsIHJ1bGUpXG4gICAgbVsyXSA9IG1bMl0ucmVwbGFjZSgvXFx8XFxzKiQvLCAnJykuc3BsaXQoJ3wnKTtcblxuICAgIC8vIHByb2Nlc3MgYWxpZ25tZW50XG4gICAgdmFyIGh0bWxfYXR0cnMgPSBbIF07XG4gICAgZm9yRWFjaCAobVsyXSwgZnVuY3Rpb24gKHMpIHtcbiAgICAgICAgaWYgKHMubWF0Y2goL15cXHMqLSs6XFxzKiQvKSkgICAgICAgaHRtbF9hdHRycy5wdXNoKHthbGlnbjogXCJyaWdodFwifSk7XG4gICAgICAgIGVsc2UgaWYgKHMubWF0Y2goL15cXHMqOi0rXFxzKiQvKSkgIGh0bWxfYXR0cnMucHVzaCh7YWxpZ246IFwibGVmdFwifSk7XG4gICAgICAgIGVsc2UgaWYgKHMubWF0Y2goL15cXHMqOi0rOlxccyokLykpIGh0bWxfYXR0cnMucHVzaCh7YWxpZ246IFwiY2VudGVyXCJ9KTtcbiAgICAgICAgZWxzZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxfYXR0cnMucHVzaCh7fSk7XG4gICAgfSk7XG5cbiAgICAvLyBub3cgZm9yIHRoZSBoZWFkZXIsIGF2b2lkIGVzY2FwZWQgcGlwZXNcbiAgICBtWzFdID0gX3NwbGl0X29uX3VuZXNjYXBlZChtWzFdLnJlcGxhY2UoL1xcfFxccyokLywgJycpLCAnfCcpO1xuICAgIGZvciAoaSA9IDA7IGkgPCBtWzFdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRhYmxlWzFdWzFdLnB1c2goWyd0aCcsIGh0bWxfYXR0cnNbaV0gfHwge31dLmNvbmNhdChcbiAgICAgICAgICAgIHRoaXMucHJvY2Vzc0lubGluZShtWzFdW2ldLnRyaW0oKSkpKTtcbiAgICB9XG5cbiAgICAvLyBub3cgZm9yIGJvZHkgY29udGVudHNcbiAgICBmb3JFYWNoIChtWzNdLnJlcGxhY2UoL1xcfFxccyokL21nLCAnJykuc3BsaXQoJ1xcbicpLCBmdW5jdGlvbiAocm93KSB7XG4gICAgICAgIHZhciBodG1sX3JvdyA9IFsndHInXTtcbiAgICAgICAgcm93ID0gX3NwbGl0X29uX3VuZXNjYXBlZChyb3csICd8Jyk7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCByb3cubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGh0bWxfcm93LnB1c2goWyd0ZCcsIGh0bWxfYXR0cnNbaV0gfHwge31dLmNvbmNhdCh0aGlzLnByb2Nlc3NJbmxpbmUocm93W2ldLnRyaW0oKSkpKTtcbiAgICAgICAgfVxuICAgICAgICB0YWJsZVsyXS5wdXNoKGh0bWxfcm93KTtcbiAgICB9LCB0aGlzKTtcblxuICAgIHJldHVybiBbdGFibGVdO1xufVxuXG5NYXJrZG93bi5kaWFsZWN0cy5NYXJ1a3UuaW5saW5lWyBcIns6XCIgXSA9IGZ1bmN0aW9uIGlubGluZV9tZXRhKCB0ZXh0LCBtYXRjaGVzLCBvdXQgKSB7XG4gIGlmICggIW91dC5sZW5ndGggKSB7XG4gICAgcmV0dXJuIFsgMiwgXCJ7OlwiIF07XG4gIH1cblxuICAvLyBnZXQgdGhlIHByZWNlZWRpbmcgZWxlbWVudFxuICB2YXIgYmVmb3JlID0gb3V0WyBvdXQubGVuZ3RoIC0gMSBdO1xuXG4gIGlmICggdHlwZW9mIGJlZm9yZSA9PT0gXCJzdHJpbmdcIiApIHtcbiAgICByZXR1cm4gWyAyLCBcIns6XCIgXTtcbiAgfVxuXG4gIC8vIG1hdGNoIGEgbWV0YSBoYXNoXG4gIHZhciBtID0gdGV4dC5tYXRjaCggL15cXHs6XFxzKigoPzpcXFxcXFx9fFteXFx9XSkqKVxccypcXH0vICk7XG5cbiAgLy8gbm8gbWF0Y2gsIGZhbHNlIGFsYXJtXG4gIGlmICggIW0gKSB7XG4gICAgcmV0dXJuIFsgMiwgXCJ7OlwiIF07XG4gIH1cblxuICAvLyBhdHRhY2ggdGhlIGF0dHJpYnV0ZXMgdG8gdGhlIHByZWNlZWRpbmcgZWxlbWVudFxuICB2YXIgbWV0YSA9IHRoaXMuZGlhbGVjdC5wcm9jZXNzTWV0YUhhc2goIG1bIDEgXSApLFxuICAgICAgYXR0ciA9IGV4dHJhY3RfYXR0ciggYmVmb3JlICk7XG5cbiAgaWYgKCAhYXR0ciApIHtcbiAgICBhdHRyID0ge307XG4gICAgYmVmb3JlLnNwbGljZSggMSwgMCwgYXR0ciApO1xuICB9XG5cbiAgZm9yICggdmFyIGsgaW4gbWV0YSApIHtcbiAgICBhdHRyWyBrIF0gPSBtZXRhWyBrIF07XG4gIH1cblxuICAvLyBjdXQgb3V0IHRoZSBzdHJpbmcgYW5kIHJlcGxhY2UgaXQgd2l0aCBub3RoaW5nXG4gIHJldHVybiBbIG1bIDAgXS5sZW5ndGgsIFwiXCIgXTtcbn07XG5cbk1hcmtkb3duLmRpYWxlY3RzLk1hcnVrdS5pbmxpbmUuX19lc2NhcGVfXyA9IC9eXFxcXFtcXFxcYFxcKl97fVxcW1xcXSgpI1xcKy4hXFwtfDpdLztcblxuTWFya2Rvd24uYnVpbGRCbG9ja09yZGVyICggTWFya2Rvd24uZGlhbGVjdHMuTWFydWt1LmJsb2NrICk7XG5NYXJrZG93bi5idWlsZElubGluZVBhdHRlcm5zKCBNYXJrZG93bi5kaWFsZWN0cy5NYXJ1a3UuaW5saW5lICk7XG5cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbihvYmopIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopID09IFwiW29iamVjdCBBcnJheV1cIjtcbn07XG5cbnZhciBmb3JFYWNoO1xuLy8gRG9uJ3QgbWVzcyB3aXRoIEFycmF5LnByb3RvdHlwZS4gSXRzIG5vdCBmcmllbmRseVxuaWYgKCBBcnJheS5wcm90b3R5cGUuZm9yRWFjaCApIHtcbiAgZm9yRWFjaCA9IGZ1bmN0aW9uKCBhcnIsIGNiLCB0aGlzcCApIHtcbiAgICByZXR1cm4gYXJyLmZvckVhY2goIGNiLCB0aGlzcCApO1xuICB9O1xufVxuZWxzZSB7XG4gIGZvckVhY2ggPSBmdW5jdGlvbihhcnIsIGNiLCB0aGlzcCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjYi5jYWxsKHRoaXNwIHx8IGFyciwgYXJyW2ldLCBpLCBhcnIpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgaXNFbXB0eSA9IGZ1bmN0aW9uKCBvYmogKSB7XG4gIGZvciAoIHZhciBrZXkgaW4gb2JqICkge1xuICAgIGlmICggaGFzT3duUHJvcGVydHkuY2FsbCggb2JqLCBrZXkgKSApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gZXh0cmFjdF9hdHRyKCBqc29ubWwgKSB7XG4gIHJldHVybiBpc0FycmF5KGpzb25tbClcbiAgICAgICYmIGpzb25tbC5sZW5ndGggPiAxXG4gICAgICAmJiB0eXBlb2YganNvbm1sWyAxIF0gPT09IFwib2JqZWN0XCJcbiAgICAgICYmICEoIGlzQXJyYXkoanNvbm1sWyAxIF0pIClcbiAgICAgID8ganNvbm1sWyAxIF1cbiAgICAgIDogdW5kZWZpbmVkO1xufVxuXG5cblxuLyoqXG4gKiAgcmVuZGVySnNvbk1MKCBqc29ubWxbLCBvcHRpb25zXSApIC0+IFN0cmluZ1xuICogIC0ganNvbm1sIChBcnJheSk6IEpzb25NTCBhcnJheSB0byByZW5kZXIgdG8gWE1MXG4gKiAgLSBvcHRpb25zIChPYmplY3QpOiBvcHRpb25zXG4gKlxuICogIENvbnZlcnRzIHRoZSBnaXZlbiBKc29uTUwgaW50byB3ZWxsLWZvcm1lZCBYTUwuXG4gKlxuICogIFRoZSBvcHRpb25zIGN1cnJlbnRseSB1bmRlcnN0b29kIGFyZTpcbiAqXG4gKiAgLSByb290IChCb29sZWFuKTogd2V0aGVyIG9yIG5vdCB0aGUgcm9vdCBub2RlIHNob3VsZCBiZSBpbmNsdWRlZCBpbiB0aGVcbiAqICAgIG91dHB1dCwgb3IganVzdCBpdHMgY2hpbGRyZW4uIFRoZSBkZWZhdWx0IGBmYWxzZWAgaXMgdG8gbm90IGluY2x1ZGUgdGhlXG4gKiAgICByb290IGl0c2VsZi5cbiAqL1xuZXhwb3NlLnJlbmRlckpzb25NTCA9IGZ1bmN0aW9uKCBqc29ubWwsIG9wdGlvbnMgKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAvLyBpbmNsdWRlIHRoZSByb290IGVsZW1lbnQgaW4gdGhlIHJlbmRlcmVkIG91dHB1dD9cbiAgb3B0aW9ucy5yb290ID0gb3B0aW9ucy5yb290IHx8IGZhbHNlO1xuXG4gIHZhciBjb250ZW50ID0gW107XG5cbiAgaWYgKCBvcHRpb25zLnJvb3QgKSB7XG4gICAgY29udGVudC5wdXNoKCByZW5kZXJfdHJlZSgganNvbm1sICkgKTtcbiAgfVxuICBlbHNlIHtcbiAgICBqc29ubWwuc2hpZnQoKTsgLy8gZ2V0IHJpZCBvZiB0aGUgdGFnXG4gICAgaWYgKCBqc29ubWwubGVuZ3RoICYmIHR5cGVvZiBqc29ubWxbIDAgXSA9PT0gXCJvYmplY3RcIiAmJiAhKCBqc29ubWxbIDAgXSBpbnN0YW5jZW9mIEFycmF5ICkgKSB7XG4gICAgICBqc29ubWwuc2hpZnQoKTsgLy8gZ2V0IHJpZCBvZiB0aGUgYXR0cmlidXRlc1xuICAgIH1cblxuICAgIHdoaWxlICgganNvbm1sLmxlbmd0aCApIHtcbiAgICAgIGNvbnRlbnQucHVzaCggcmVuZGVyX3RyZWUoIGpzb25tbC5zaGlmdCgpICkgKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29udGVudC5qb2luKCBcIlxcblxcblwiICk7XG59O1xuXG5mdW5jdGlvbiBlc2NhcGVIVE1MKCB0ZXh0ICkge1xuICByZXR1cm4gdGV4dC5yZXBsYWNlKCAvJi9nLCBcIiZhbXA7XCIgKVxuICAgICAgICAgICAgIC5yZXBsYWNlKCAvPC9nLCBcIiZsdDtcIiApXG4gICAgICAgICAgICAgLnJlcGxhY2UoIC8+L2csIFwiJmd0O1wiIClcbiAgICAgICAgICAgICAucmVwbGFjZSggL1wiL2csIFwiJnF1b3Q7XCIgKVxuICAgICAgICAgICAgIC5yZXBsYWNlKCAvJy9nLCBcIiYjMzk7XCIgKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyX3RyZWUoIGpzb25tbCApIHtcbiAgLy8gYmFzaWMgY2FzZVxuICBpZiAoIHR5cGVvZiBqc29ubWwgPT09IFwic3RyaW5nXCIgKSB7XG4gICAgcmV0dXJuIGVzY2FwZUhUTUwoIGpzb25tbCApO1xuICB9XG5cbiAgdmFyIHRhZyA9IGpzb25tbC5zaGlmdCgpLFxuICAgICAgYXR0cmlidXRlcyA9IHt9LFxuICAgICAgY29udGVudCA9IFtdO1xuXG4gIGlmICgganNvbm1sLmxlbmd0aCAmJiB0eXBlb2YganNvbm1sWyAwIF0gPT09IFwib2JqZWN0XCIgJiYgISgganNvbm1sWyAwIF0gaW5zdGFuY2VvZiBBcnJheSApICkge1xuICAgIGF0dHJpYnV0ZXMgPSBqc29ubWwuc2hpZnQoKTtcbiAgfVxuXG4gIHdoaWxlICgganNvbm1sLmxlbmd0aCApIHtcbiAgICBjb250ZW50LnB1c2goIHJlbmRlcl90cmVlKCBqc29ubWwuc2hpZnQoKSApICk7XG4gIH1cblxuICB2YXIgdGFnX2F0dHJzID0gXCJcIjtcbiAgZm9yICggdmFyIGEgaW4gYXR0cmlidXRlcyApIHtcbiAgICB0YWdfYXR0cnMgKz0gXCIgXCIgKyBhICsgJz1cIicgKyBlc2NhcGVIVE1MKCBhdHRyaWJ1dGVzWyBhIF0gKSArICdcIic7XG4gIH1cblxuICAvLyBiZSBjYXJlZnVsIGFib3V0IGFkZGluZyB3aGl0ZXNwYWNlIGhlcmUgZm9yIGlubGluZSBlbGVtZW50c1xuICBpZiAoIHRhZyA9PSBcImltZ1wiIHx8IHRhZyA9PSBcImJyXCIgfHwgdGFnID09IFwiaHJcIiApIHtcbiAgICByZXR1cm4gXCI8XCIrIHRhZyArIHRhZ19hdHRycyArIFwiLz5cIjtcbiAgfVxuICBlbHNlIHtcbiAgICByZXR1cm4gXCI8XCIrIHRhZyArIHRhZ19hdHRycyArIFwiPlwiICsgY29udGVudC5qb2luKCBcIlwiICkgKyBcIjwvXCIgKyB0YWcgKyBcIj5cIjtcbiAgfVxufVxuXG5mdW5jdGlvbiBjb252ZXJ0X3RyZWVfdG9faHRtbCggdHJlZSwgcmVmZXJlbmNlcywgb3B0aW9ucyApIHtcbiAgdmFyIGk7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gIC8vIHNoYWxsb3cgY2xvbmVcbiAgdmFyIGpzb25tbCA9IHRyZWUuc2xpY2UoIDAgKTtcblxuICBpZiAoIHR5cGVvZiBvcHRpb25zLnByZXByb2Nlc3NUcmVlTm9kZSA9PT0gXCJmdW5jdGlvblwiICkge1xuICAgICAganNvbm1sID0gb3B0aW9ucy5wcmVwcm9jZXNzVHJlZU5vZGUoanNvbm1sLCByZWZlcmVuY2VzKTtcbiAgfVxuXG4gIC8vIENsb25lIGF0dHJpYnV0ZXMgaWYgdGhleSBleGlzdFxuICB2YXIgYXR0cnMgPSBleHRyYWN0X2F0dHIoIGpzb25tbCApO1xuICBpZiAoIGF0dHJzICkge1xuICAgIGpzb25tbFsgMSBdID0ge307XG4gICAgZm9yICggaSBpbiBhdHRycyApIHtcbiAgICAgIGpzb25tbFsgMSBdWyBpIF0gPSBhdHRyc1sgaSBdO1xuICAgIH1cbiAgICBhdHRycyA9IGpzb25tbFsgMSBdO1xuICB9XG5cbiAgLy8gYmFzaWMgY2FzZVxuICBpZiAoIHR5cGVvZiBqc29ubWwgPT09IFwic3RyaW5nXCIgKSB7XG4gICAgcmV0dXJuIGpzb25tbDtcbiAgfVxuXG4gIC8vIGNvbnZlcnQgdGhpcyBub2RlXG4gIHN3aXRjaCAoIGpzb25tbFsgMCBdICkge1xuICAgIGNhc2UgXCJoZWFkZXJcIjpcbiAgICAgIGpzb25tbFsgMCBdID0gXCJoXCIgKyBqc29ubWxbIDEgXS5sZXZlbDtcbiAgICAgIGRlbGV0ZSBqc29ubWxbIDEgXS5sZXZlbDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJidWxsZXRsaXN0XCI6XG4gICAgICBqc29ubWxbIDAgXSA9IFwidWxcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJudW1iZXJsaXN0XCI6XG4gICAgICBqc29ubWxbIDAgXSA9IFwib2xcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJsaXN0aXRlbVwiOlxuICAgICAganNvbm1sWyAwIF0gPSBcImxpXCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwicGFyYVwiOlxuICAgICAganNvbm1sWyAwIF0gPSBcInBcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJtYXJrZG93blwiOlxuICAgICAganNvbm1sWyAwIF0gPSBcImh0bWxcIjtcbiAgICAgIGlmICggYXR0cnMgKSBkZWxldGUgYXR0cnMucmVmZXJlbmNlcztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJjb2RlX2Jsb2NrXCI6XG4gICAgICBqc29ubWxbIDAgXSA9IFwicHJlXCI7XG4gICAgICBpID0gYXR0cnMgPyAyIDogMTtcbiAgICAgIHZhciBjb2RlID0gWyBcImNvZGVcIiBdO1xuICAgICAgY29kZS5wdXNoLmFwcGx5KCBjb2RlLCBqc29ubWwuc3BsaWNlKCBpLCBqc29ubWwubGVuZ3RoIC0gaSApICk7XG4gICAgICBqc29ubWxbIGkgXSA9IGNvZGU7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiaW5saW5lY29kZVwiOlxuICAgICAganNvbm1sWyAwIF0gPSBcImNvZGVcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJpbWdcIjpcbiAgICAgIGpzb25tbFsgMSBdLnNyYyA9IGpzb25tbFsgMSBdLmhyZWY7XG4gICAgICBkZWxldGUganNvbm1sWyAxIF0uaHJlZjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJsaW5lYnJlYWtcIjpcbiAgICAgIGpzb25tbFsgMCBdID0gXCJiclwiO1xuICAgIGJyZWFrO1xuICAgIGNhc2UgXCJsaW5rXCI6XG4gICAgICBqc29ubWxbIDAgXSA9IFwiYVwiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImxpbmtfcmVmXCI6XG4gICAgICBqc29ubWxbIDAgXSA9IFwiYVwiO1xuXG4gICAgICAvLyBncmFiIHRoaXMgcmVmIGFuZCBjbGVhbiB1cCB0aGUgYXR0cmlidXRlIG5vZGVcbiAgICAgIHZhciByZWYgPSByZWZlcmVuY2VzWyBhdHRycy5yZWYgXTtcblxuICAgICAgLy8gaWYgdGhlIHJlZmVyZW5jZSBleGlzdHMsIG1ha2UgdGhlIGxpbmtcbiAgICAgIGlmICggcmVmICkge1xuICAgICAgICBkZWxldGUgYXR0cnMucmVmO1xuXG4gICAgICAgIC8vIGFkZCBpbiB0aGUgaHJlZiBhbmQgdGl0bGUsIGlmIHByZXNlbnRcbiAgICAgICAgYXR0cnMuaHJlZiA9IHJlZi5ocmVmO1xuICAgICAgICBpZiAoIHJlZi50aXRsZSApIHtcbiAgICAgICAgICBhdHRycy50aXRsZSA9IHJlZi50aXRsZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGdldCByaWQgb2YgdGhlIHVubmVlZGVkIG9yaWdpbmFsIHRleHRcbiAgICAgICAgZGVsZXRlIGF0dHJzLm9yaWdpbmFsO1xuICAgICAgfVxuICAgICAgLy8gdGhlIHJlZmVyZW5jZSBkb2Vzbid0IGV4aXN0LCBzbyByZXZlcnQgdG8gcGxhaW4gdGV4dFxuICAgICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBhdHRycy5vcmlnaW5hbDtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJpbWdfcmVmXCI6XG4gICAgICBqc29ubWxbIDAgXSA9IFwiaW1nXCI7XG5cbiAgICAgIC8vIGdyYWIgdGhpcyByZWYgYW5kIGNsZWFuIHVwIHRoZSBhdHRyaWJ1dGUgbm9kZVxuICAgICAgdmFyIHJlZiA9IHJlZmVyZW5jZXNbIGF0dHJzLnJlZiBdO1xuXG4gICAgICAvLyBpZiB0aGUgcmVmZXJlbmNlIGV4aXN0cywgbWFrZSB0aGUgbGlua1xuICAgICAgaWYgKCByZWYgKSB7XG4gICAgICAgIGRlbGV0ZSBhdHRycy5yZWY7XG5cbiAgICAgICAgLy8gYWRkIGluIHRoZSBocmVmIGFuZCB0aXRsZSwgaWYgcHJlc2VudFxuICAgICAgICBhdHRycy5zcmMgPSByZWYuaHJlZjtcbiAgICAgICAgaWYgKCByZWYudGl0bGUgKSB7XG4gICAgICAgICAgYXR0cnMudGl0bGUgPSByZWYudGl0bGU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBnZXQgcmlkIG9mIHRoZSB1bm5lZWRlZCBvcmlnaW5hbCB0ZXh0XG4gICAgICAgIGRlbGV0ZSBhdHRycy5vcmlnaW5hbDtcbiAgICAgIH1cbiAgICAgIC8vIHRoZSByZWZlcmVuY2UgZG9lc24ndCBleGlzdCwgc28gcmV2ZXJ0IHRvIHBsYWluIHRleHRcbiAgICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gYXR0cnMub3JpZ2luYWw7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgfVxuXG4gIC8vIGNvbnZlcnQgYWxsIHRoZSBjaGlsZHJlblxuICBpID0gMTtcblxuICAvLyBkZWFsIHdpdGggdGhlIGF0dHJpYnV0ZSBub2RlLCBpZiBpdCBleGlzdHNcbiAgaWYgKCBhdHRycyApIHtcbiAgICAvLyBpZiB0aGVyZSBhcmUga2V5cywgc2tpcCBvdmVyIGl0XG4gICAgZm9yICggdmFyIGtleSBpbiBqc29ubWxbIDEgXSApIHtcbiAgICAgICAgaSA9IDI7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICAvLyBpZiB0aGVyZSBhcmVuJ3QsIHJlbW92ZSBpdFxuICAgIGlmICggaSA9PT0gMSApIHtcbiAgICAgIGpzb25tbC5zcGxpY2UoIGksIDEgKTtcbiAgICB9XG4gIH1cblxuICBmb3IgKCA7IGkgPCBqc29ubWwubGVuZ3RoOyArK2kgKSB7XG4gICAganNvbm1sWyBpIF0gPSBjb252ZXJ0X3RyZWVfdG9faHRtbCgganNvbm1sWyBpIF0sIHJlZmVyZW5jZXMsIG9wdGlvbnMgKTtcbiAgfVxuXG4gIHJldHVybiBqc29ubWw7XG59XG5cblxuLy8gbWVyZ2VzIGFkamFjZW50IHRleHQgbm9kZXMgaW50byBhIHNpbmdsZSBub2RlXG5mdW5jdGlvbiBtZXJnZV90ZXh0X25vZGVzKCBqc29ubWwgKSB7XG4gIC8vIHNraXAgdGhlIHRhZyBuYW1lIGFuZCBhdHRyaWJ1dGUgaGFzaFxuICB2YXIgaSA9IGV4dHJhY3RfYXR0cigganNvbm1sICkgPyAyIDogMTtcblxuICB3aGlsZSAoIGkgPCBqc29ubWwubGVuZ3RoICkge1xuICAgIC8vIGlmIGl0J3MgYSBzdHJpbmcgY2hlY2sgdGhlIG5leHQgaXRlbSB0b29cbiAgICBpZiAoIHR5cGVvZiBqc29ubWxbIGkgXSA9PT0gXCJzdHJpbmdcIiApIHtcbiAgICAgIGlmICggaSArIDEgPCBqc29ubWwubGVuZ3RoICYmIHR5cGVvZiBqc29ubWxbIGkgKyAxIF0gPT09IFwic3RyaW5nXCIgKSB7XG4gICAgICAgIC8vIG1lcmdlIHRoZSBzZWNvbmQgc3RyaW5nIGludG8gdGhlIGZpcnN0IGFuZCByZW1vdmUgaXRcbiAgICAgICAganNvbm1sWyBpIF0gKz0ganNvbm1sLnNwbGljZSggaSArIDEsIDEgKVsgMCBdO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgICsraTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gaWYgaXQncyBub3QgYSBzdHJpbmcgcmVjdXJzZVxuICAgIGVsc2Uge1xuICAgICAgbWVyZ2VfdGV4dF9ub2RlcygganNvbm1sWyBpIF0gKTtcbiAgICAgICsraTtcbiAgICB9XG4gIH1cbn1cblxufSApKCAoZnVuY3Rpb24oKSB7XG4gIGlmICggdHlwZW9mIGV4cG9ydHMgPT09IFwidW5kZWZpbmVkXCIgKSB7XG4gICAgd2luZG93Lm1hcmtkb3duID0ge307XG4gICAgcmV0dXJuIHdpbmRvdy5tYXJrZG93bjtcbiAgfVxuICBlbHNlIHtcbiAgICByZXR1cm4gZXhwb3J0cztcbiAgfVxufSApKCkgKTtcbiIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzIHx8XG4gIGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcnMob2JqKSB7XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuICAgIHZhciBkZXNjcmlwdG9ycyA9IHt9O1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgZGVzY3JpcHRvcnNba2V5c1tpXV0gPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5c1tpXSk7XG4gICAgfVxuICAgIHJldHVybiBkZXNjcmlwdG9ycztcbiAgfTtcblxudmFyIGZvcm1hdFJlZ0V4cCA9IC8lW3NkaiVdL2c7XG5leHBvcnRzLmZvcm1hdCA9IGZ1bmN0aW9uKGYpIHtcbiAgaWYgKCFpc1N0cmluZyhmKSkge1xuICAgIHZhciBvYmplY3RzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIG9iamVjdHMucHVzaChpbnNwZWN0KGFyZ3VtZW50c1tpXSkpO1xuICAgIH1cbiAgICByZXR1cm4gb2JqZWN0cy5qb2luKCcgJyk7XG4gIH1cblxuICB2YXIgaSA9IDE7XG4gIHZhciBhcmdzID0gYXJndW1lbnRzO1xuICB2YXIgbGVuID0gYXJncy5sZW5ndGg7XG4gIHZhciBzdHIgPSBTdHJpbmcoZikucmVwbGFjZShmb3JtYXRSZWdFeHAsIGZ1bmN0aW9uKHgpIHtcbiAgICBpZiAoeCA9PT0gJyUlJykgcmV0dXJuICclJztcbiAgICBpZiAoaSA+PSBsZW4pIHJldHVybiB4O1xuICAgIHN3aXRjaCAoeCkge1xuICAgICAgY2FzZSAnJXMnOiByZXR1cm4gU3RyaW5nKGFyZ3NbaSsrXSk7XG4gICAgICBjYXNlICclZCc6IHJldHVybiBOdW1iZXIoYXJnc1tpKytdKTtcbiAgICAgIGNhc2UgJyVqJzpcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoYXJnc1tpKytdKTtcbiAgICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICAgIHJldHVybiAnW0NpcmN1bGFyXSc7XG4gICAgICAgIH1cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB4O1xuICAgIH1cbiAgfSk7XG4gIGZvciAodmFyIHggPSBhcmdzW2ldOyBpIDwgbGVuOyB4ID0gYXJnc1srK2ldKSB7XG4gICAgaWYgKGlzTnVsbCh4KSB8fCAhaXNPYmplY3QoeCkpIHtcbiAgICAgIHN0ciArPSAnICcgKyB4O1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHIgKz0gJyAnICsgaW5zcGVjdCh4KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN0cjtcbn07XG5cblxuLy8gTWFyayB0aGF0IGEgbWV0aG9kIHNob3VsZCBub3QgYmUgdXNlZC5cbi8vIFJldHVybnMgYSBtb2RpZmllZCBmdW5jdGlvbiB3aGljaCB3YXJucyBvbmNlIGJ5IGRlZmF1bHQuXG4vLyBJZiAtLW5vLWRlcHJlY2F0aW9uIGlzIHNldCwgdGhlbiBpdCBpcyBhIG5vLW9wLlxuZXhwb3J0cy5kZXByZWNhdGUgPSBmdW5jdGlvbihmbiwgbXNnKSB7XG4gIGlmICh0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgcHJvY2Vzcy5ub0RlcHJlY2F0aW9uID09PSB0cnVlKSB7XG4gICAgcmV0dXJuIGZuO1xuICB9XG5cbiAgLy8gQWxsb3cgZm9yIGRlcHJlY2F0aW5nIHRoaW5ncyBpbiB0aGUgcHJvY2VzcyBvZiBzdGFydGluZyB1cC5cbiAgaWYgKHR5cGVvZiBwcm9jZXNzID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBleHBvcnRzLmRlcHJlY2F0ZShmbiwgbXNnKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG4gIH1cblxuICB2YXIgd2FybmVkID0gZmFsc2U7XG4gIGZ1bmN0aW9uIGRlcHJlY2F0ZWQoKSB7XG4gICAgaWYgKCF3YXJuZWQpIHtcbiAgICAgIGlmIChwcm9jZXNzLnRocm93RGVwcmVjYXRpb24pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1zZyk7XG4gICAgICB9IGVsc2UgaWYgKHByb2Nlc3MudHJhY2VEZXByZWNhdGlvbikge1xuICAgICAgICBjb25zb2xlLnRyYWNlKG1zZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKG1zZyk7XG4gICAgICB9XG4gICAgICB3YXJuZWQgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIHJldHVybiBkZXByZWNhdGVkO1xufTtcblxuXG52YXIgZGVidWdzID0ge307XG52YXIgZGVidWdFbnZpcm9uO1xuZXhwb3J0cy5kZWJ1Z2xvZyA9IGZ1bmN0aW9uKHNldCkge1xuICBpZiAoaXNVbmRlZmluZWQoZGVidWdFbnZpcm9uKSlcbiAgICBkZWJ1Z0Vudmlyb24gPSBwcm9jZXNzLmVudi5OT0RFX0RFQlVHIHx8ICcnO1xuICBzZXQgPSBzZXQudG9VcHBlckNhc2UoKTtcbiAgaWYgKCFkZWJ1Z3Nbc2V0XSkge1xuICAgIGlmIChuZXcgUmVnRXhwKCdcXFxcYicgKyBzZXQgKyAnXFxcXGInLCAnaScpLnRlc3QoZGVidWdFbnZpcm9uKSkge1xuICAgICAgdmFyIHBpZCA9IHByb2Nlc3MucGlkO1xuICAgICAgZGVidWdzW3NldF0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIG1zZyA9IGV4cG9ydHMuZm9ybWF0LmFwcGx5KGV4cG9ydHMsIGFyZ3VtZW50cyk7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJyVzICVkOiAlcycsIHNldCwgcGlkLCBtc2cpO1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVidWdzW3NldF0gPSBmdW5jdGlvbigpIHt9O1xuICAgIH1cbiAgfVxuICByZXR1cm4gZGVidWdzW3NldF07XG59O1xuXG5cbi8qKlxuICogRWNob3MgdGhlIHZhbHVlIG9mIGEgdmFsdWUuIFRyeXMgdG8gcHJpbnQgdGhlIHZhbHVlIG91dFxuICogaW4gdGhlIGJlc3Qgd2F5IHBvc3NpYmxlIGdpdmVuIHRoZSBkaWZmZXJlbnQgdHlwZXMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iaiBUaGUgb2JqZWN0IHRvIHByaW50IG91dC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIE9wdGlvbmFsIG9wdGlvbnMgb2JqZWN0IHRoYXQgYWx0ZXJzIHRoZSBvdXRwdXQuXG4gKi9cbi8qIGxlZ2FjeTogb2JqLCBzaG93SGlkZGVuLCBkZXB0aCwgY29sb3JzKi9cbmZ1bmN0aW9uIGluc3BlY3Qob2JqLCBvcHRzKSB7XG4gIC8vIGRlZmF1bHQgb3B0aW9uc1xuICB2YXIgY3R4ID0ge1xuICAgIHNlZW46IFtdLFxuICAgIHN0eWxpemU6IHN0eWxpemVOb0NvbG9yXG4gIH07XG4gIC8vIGxlZ2FjeS4uLlxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+PSAzKSBjdHguZGVwdGggPSBhcmd1bWVudHNbMl07XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID49IDQpIGN0eC5jb2xvcnMgPSBhcmd1bWVudHNbM107XG4gIGlmIChpc0Jvb2xlYW4ob3B0cykpIHtcbiAgICAvLyBsZWdhY3kuLi5cbiAgICBjdHguc2hvd0hpZGRlbiA9IG9wdHM7XG4gIH0gZWxzZSBpZiAob3B0cykge1xuICAgIC8vIGdvdCBhbiBcIm9wdGlvbnNcIiBvYmplY3RcbiAgICBleHBvcnRzLl9leHRlbmQoY3R4LCBvcHRzKTtcbiAgfVxuICAvLyBzZXQgZGVmYXVsdCBvcHRpb25zXG4gIGlmIChpc1VuZGVmaW5lZChjdHguc2hvd0hpZGRlbikpIGN0eC5zaG93SGlkZGVuID0gZmFsc2U7XG4gIGlmIChpc1VuZGVmaW5lZChjdHguZGVwdGgpKSBjdHguZGVwdGggPSAyO1xuICBpZiAoaXNVbmRlZmluZWQoY3R4LmNvbG9ycykpIGN0eC5jb2xvcnMgPSBmYWxzZTtcbiAgaWYgKGlzVW5kZWZpbmVkKGN0eC5jdXN0b21JbnNwZWN0KSkgY3R4LmN1c3RvbUluc3BlY3QgPSB0cnVlO1xuICBpZiAoY3R4LmNvbG9ycykgY3R4LnN0eWxpemUgPSBzdHlsaXplV2l0aENvbG9yO1xuICByZXR1cm4gZm9ybWF0VmFsdWUoY3R4LCBvYmosIGN0eC5kZXB0aCk7XG59XG5leHBvcnRzLmluc3BlY3QgPSBpbnNwZWN0O1xuXG5cbi8vIGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQU5TSV9lc2NhcGVfY29kZSNncmFwaGljc1xuaW5zcGVjdC5jb2xvcnMgPSB7XG4gICdib2xkJyA6IFsxLCAyMl0sXG4gICdpdGFsaWMnIDogWzMsIDIzXSxcbiAgJ3VuZGVybGluZScgOiBbNCwgMjRdLFxuICAnaW52ZXJzZScgOiBbNywgMjddLFxuICAnd2hpdGUnIDogWzM3LCAzOV0sXG4gICdncmV5JyA6IFs5MCwgMzldLFxuICAnYmxhY2snIDogWzMwLCAzOV0sXG4gICdibHVlJyA6IFszNCwgMzldLFxuICAnY3lhbicgOiBbMzYsIDM5XSxcbiAgJ2dyZWVuJyA6IFszMiwgMzldLFxuICAnbWFnZW50YScgOiBbMzUsIDM5XSxcbiAgJ3JlZCcgOiBbMzEsIDM5XSxcbiAgJ3llbGxvdycgOiBbMzMsIDM5XVxufTtcblxuLy8gRG9uJ3QgdXNlICdibHVlJyBub3QgdmlzaWJsZSBvbiBjbWQuZXhlXG5pbnNwZWN0LnN0eWxlcyA9IHtcbiAgJ3NwZWNpYWwnOiAnY3lhbicsXG4gICdudW1iZXInOiAneWVsbG93JyxcbiAgJ2Jvb2xlYW4nOiAneWVsbG93JyxcbiAgJ3VuZGVmaW5lZCc6ICdncmV5JyxcbiAgJ251bGwnOiAnYm9sZCcsXG4gICdzdHJpbmcnOiAnZ3JlZW4nLFxuICAnZGF0ZSc6ICdtYWdlbnRhJyxcbiAgLy8gXCJuYW1lXCI6IGludGVudGlvbmFsbHkgbm90IHN0eWxpbmdcbiAgJ3JlZ2V4cCc6ICdyZWQnXG59O1xuXG5cbmZ1bmN0aW9uIHN0eWxpemVXaXRoQ29sb3Ioc3RyLCBzdHlsZVR5cGUpIHtcbiAgdmFyIHN0eWxlID0gaW5zcGVjdC5zdHlsZXNbc3R5bGVUeXBlXTtcblxuICBpZiAoc3R5bGUpIHtcbiAgICByZXR1cm4gJ1xcdTAwMWJbJyArIGluc3BlY3QuY29sb3JzW3N0eWxlXVswXSArICdtJyArIHN0ciArXG4gICAgICAgICAgICdcXHUwMDFiWycgKyBpbnNwZWN0LmNvbG9yc1tzdHlsZV1bMV0gKyAnbSc7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHN0cjtcbiAgfVxufVxuXG5cbmZ1bmN0aW9uIHN0eWxpemVOb0NvbG9yKHN0ciwgc3R5bGVUeXBlKSB7XG4gIHJldHVybiBzdHI7XG59XG5cblxuZnVuY3Rpb24gYXJyYXlUb0hhc2goYXJyYXkpIHtcbiAgdmFyIGhhc2ggPSB7fTtcblxuICBhcnJheS5mb3JFYWNoKGZ1bmN0aW9uKHZhbCwgaWR4KSB7XG4gICAgaGFzaFt2YWxdID0gdHJ1ZTtcbiAgfSk7XG5cbiAgcmV0dXJuIGhhc2g7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0VmFsdWUoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzKSB7XG4gIC8vIFByb3ZpZGUgYSBob29rIGZvciB1c2VyLXNwZWNpZmllZCBpbnNwZWN0IGZ1bmN0aW9ucy5cbiAgLy8gQ2hlY2sgdGhhdCB2YWx1ZSBpcyBhbiBvYmplY3Qgd2l0aCBhbiBpbnNwZWN0IGZ1bmN0aW9uIG9uIGl0XG4gIGlmIChjdHguY3VzdG9tSW5zcGVjdCAmJlxuICAgICAgdmFsdWUgJiZcbiAgICAgIGlzRnVuY3Rpb24odmFsdWUuaW5zcGVjdCkgJiZcbiAgICAgIC8vIEZpbHRlciBvdXQgdGhlIHV0aWwgbW9kdWxlLCBpdCdzIGluc3BlY3QgZnVuY3Rpb24gaXMgc3BlY2lhbFxuICAgICAgdmFsdWUuaW5zcGVjdCAhPT0gZXhwb3J0cy5pbnNwZWN0ICYmXG4gICAgICAvLyBBbHNvIGZpbHRlciBvdXQgYW55IHByb3RvdHlwZSBvYmplY3RzIHVzaW5nIHRoZSBjaXJjdWxhciBjaGVjay5cbiAgICAgICEodmFsdWUuY29uc3RydWN0b3IgJiYgdmFsdWUuY29uc3RydWN0b3IucHJvdG90eXBlID09PSB2YWx1ZSkpIHtcbiAgICB2YXIgcmV0ID0gdmFsdWUuaW5zcGVjdChyZWN1cnNlVGltZXMsIGN0eCk7XG4gICAgaWYgKCFpc1N0cmluZyhyZXQpKSB7XG4gICAgICByZXQgPSBmb3JtYXRWYWx1ZShjdHgsIHJldCwgcmVjdXJzZVRpbWVzKTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIC8vIFByaW1pdGl2ZSB0eXBlcyBjYW5ub3QgaGF2ZSBwcm9wZXJ0aWVzXG4gIHZhciBwcmltaXRpdmUgPSBmb3JtYXRQcmltaXRpdmUoY3R4LCB2YWx1ZSk7XG4gIGlmIChwcmltaXRpdmUpIHtcbiAgICByZXR1cm4gcHJpbWl0aXZlO1xuICB9XG5cbiAgLy8gTG9vayB1cCB0aGUga2V5cyBvZiB0aGUgb2JqZWN0LlxuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlKTtcbiAgdmFyIHZpc2libGVLZXlzID0gYXJyYXlUb0hhc2goa2V5cyk7XG5cbiAgaWYgKGN0eC5zaG93SGlkZGVuKSB7XG4gICAga2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHZhbHVlKTtcbiAgfVxuXG4gIC8vIElFIGRvZXNuJ3QgbWFrZSBlcnJvciBmaWVsZHMgbm9uLWVudW1lcmFibGVcbiAgLy8gaHR0cDovL21zZG4ubWljcm9zb2Z0LmNvbS9lbi11cy9saWJyYXJ5L2llL2R3dzUyc2J0KHY9dnMuOTQpLmFzcHhcbiAgaWYgKGlzRXJyb3IodmFsdWUpXG4gICAgICAmJiAoa2V5cy5pbmRleE9mKCdtZXNzYWdlJykgPj0gMCB8fCBrZXlzLmluZGV4T2YoJ2Rlc2NyaXB0aW9uJykgPj0gMCkpIHtcbiAgICByZXR1cm4gZm9ybWF0RXJyb3IodmFsdWUpO1xuICB9XG5cbiAgLy8gU29tZSB0eXBlIG9mIG9iamVjdCB3aXRob3V0IHByb3BlcnRpZXMgY2FuIGJlIHNob3J0Y3V0dGVkLlxuICBpZiAoa2V5cy5sZW5ndGggPT09IDApIHtcbiAgICBpZiAoaXNGdW5jdGlvbih2YWx1ZSkpIHtcbiAgICAgIHZhciBuYW1lID0gdmFsdWUubmFtZSA/ICc6ICcgKyB2YWx1ZS5uYW1lIDogJyc7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoJ1tGdW5jdGlvbicgKyBuYW1lICsgJ10nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgICBpZiAoaXNSZWdFeHAodmFsdWUpKSB7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoUmVnRXhwLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSwgJ3JlZ2V4cCcpO1xuICAgIH1cbiAgICBpZiAoaXNEYXRlKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpLCAnZGF0ZScpO1xuICAgIH1cbiAgICBpZiAoaXNFcnJvcih2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBmb3JtYXRFcnJvcih2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGJhc2UgPSAnJywgYXJyYXkgPSBmYWxzZSwgYnJhY2VzID0gWyd7JywgJ30nXTtcblxuICAvLyBNYWtlIEFycmF5IHNheSB0aGF0IHRoZXkgYXJlIEFycmF5XG4gIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIGFycmF5ID0gdHJ1ZTtcbiAgICBicmFjZXMgPSBbJ1snLCAnXSddO1xuICB9XG5cbiAgLy8gTWFrZSBmdW5jdGlvbnMgc2F5IHRoYXQgdGhleSBhcmUgZnVuY3Rpb25zXG4gIGlmIChpc0Z1bmN0aW9uKHZhbHVlKSkge1xuICAgIHZhciBuID0gdmFsdWUubmFtZSA/ICc6ICcgKyB2YWx1ZS5uYW1lIDogJyc7XG4gICAgYmFzZSA9ICcgW0Z1bmN0aW9uJyArIG4gKyAnXSc7XG4gIH1cblxuICAvLyBNYWtlIFJlZ0V4cHMgc2F5IHRoYXQgdGhleSBhcmUgUmVnRXhwc1xuICBpZiAoaXNSZWdFeHAodmFsdWUpKSB7XG4gICAgYmFzZSA9ICcgJyArIFJlZ0V4cC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIH1cblxuICAvLyBNYWtlIGRhdGVzIHdpdGggcHJvcGVydGllcyBmaXJzdCBzYXkgdGhlIGRhdGVcbiAgaWYgKGlzRGF0ZSh2YWx1ZSkpIHtcbiAgICBiYXNlID0gJyAnICsgRGF0ZS5wcm90b3R5cGUudG9VVENTdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIH1cblxuICAvLyBNYWtlIGVycm9yIHdpdGggbWVzc2FnZSBmaXJzdCBzYXkgdGhlIGVycm9yXG4gIGlmIChpc0Vycm9yKHZhbHVlKSkge1xuICAgIGJhc2UgPSAnICcgKyBmb3JtYXRFcnJvcih2YWx1ZSk7XG4gIH1cblxuICBpZiAoa2V5cy5sZW5ndGggPT09IDAgJiYgKCFhcnJheSB8fCB2YWx1ZS5sZW5ndGggPT0gMCkpIHtcbiAgICByZXR1cm4gYnJhY2VzWzBdICsgYmFzZSArIGJyYWNlc1sxXTtcbiAgfVxuXG4gIGlmIChyZWN1cnNlVGltZXMgPCAwKSB7XG4gICAgaWYgKGlzUmVnRXhwKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKFJlZ0V4cC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSksICdyZWdleHAnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKCdbT2JqZWN0XScsICdzcGVjaWFsJyk7XG4gICAgfVxuICB9XG5cbiAgY3R4LnNlZW4ucHVzaCh2YWx1ZSk7XG5cbiAgdmFyIG91dHB1dDtcbiAgaWYgKGFycmF5KSB7XG4gICAgb3V0cHV0ID0gZm9ybWF0QXJyYXkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cywga2V5cyk7XG4gIH0gZWxzZSB7XG4gICAgb3V0cHV0ID0ga2V5cy5tYXAoZnVuY3Rpb24oa2V5KSB7XG4gICAgICByZXR1cm4gZm9ybWF0UHJvcGVydHkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cywga2V5LCBhcnJheSk7XG4gICAgfSk7XG4gIH1cblxuICBjdHguc2Vlbi5wb3AoKTtcblxuICByZXR1cm4gcmVkdWNlVG9TaW5nbGVTdHJpbmcob3V0cHV0LCBiYXNlLCBicmFjZXMpO1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdFByaW1pdGl2ZShjdHgsIHZhbHVlKSB7XG4gIGlmIChpc1VuZGVmaW5lZCh2YWx1ZSkpXG4gICAgcmV0dXJuIGN0eC5zdHlsaXplKCd1bmRlZmluZWQnLCAndW5kZWZpbmVkJyk7XG4gIGlmIChpc1N0cmluZyh2YWx1ZSkpIHtcbiAgICB2YXIgc2ltcGxlID0gJ1xcJycgKyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkucmVwbGFjZSgvXlwifFwiJC9nLCAnJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8nL2csIFwiXFxcXCdcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXFxcXCIvZywgJ1wiJykgKyAnXFwnJztcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoc2ltcGxlLCAnc3RyaW5nJyk7XG4gIH1cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSlcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoJycgKyB2YWx1ZSwgJ251bWJlcicpO1xuICBpZiAoaXNCb29sZWFuKHZhbHVlKSlcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoJycgKyB2YWx1ZSwgJ2Jvb2xlYW4nKTtcbiAgLy8gRm9yIHNvbWUgcmVhc29uIHR5cGVvZiBudWxsIGlzIFwib2JqZWN0XCIsIHNvIHNwZWNpYWwgY2FzZSBoZXJlLlxuICBpZiAoaXNOdWxsKHZhbHVlKSlcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoJ251bGwnLCAnbnVsbCcpO1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdEVycm9yKHZhbHVlKSB7XG4gIHJldHVybiAnWycgKyBFcnJvci5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgKyAnXSc7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0QXJyYXkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cywga2V5cykge1xuICB2YXIgb3V0cHV0ID0gW107XG4gIGZvciAodmFyIGkgPSAwLCBsID0gdmFsdWUubGVuZ3RoOyBpIDwgbDsgKytpKSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5KHZhbHVlLCBTdHJpbmcoaSkpKSB7XG4gICAgICBvdXRwdXQucHVzaChmb3JtYXRQcm9wZXJ0eShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLFxuICAgICAgICAgIFN0cmluZyhpKSwgdHJ1ZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvdXRwdXQucHVzaCgnJyk7XG4gICAgfVxuICB9XG4gIGtleXMuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICBpZiAoIWtleS5tYXRjaCgvXlxcZCskLykpIHtcbiAgICAgIG91dHB1dC5wdXNoKGZvcm1hdFByb3BlcnR5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsXG4gICAgICAgICAga2V5LCB0cnVlKSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIG91dHB1dDtcbn1cblxuXG5mdW5jdGlvbiBmb3JtYXRQcm9wZXJ0eShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLCBrZXksIGFycmF5KSB7XG4gIHZhciBuYW1lLCBzdHIsIGRlc2M7XG4gIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHZhbHVlLCBrZXkpIHx8IHsgdmFsdWU6IHZhbHVlW2tleV0gfTtcbiAgaWYgKGRlc2MuZ2V0KSB7XG4gICAgaWYgKGRlc2Muc2V0KSB7XG4gICAgICBzdHIgPSBjdHguc3R5bGl6ZSgnW0dldHRlci9TZXR0ZXJdJywgJ3NwZWNpYWwnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RyID0gY3R4LnN0eWxpemUoJ1tHZXR0ZXJdJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKGRlc2Muc2V0KSB7XG4gICAgICBzdHIgPSBjdHguc3R5bGl6ZSgnW1NldHRlcl0nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgfVxuICBpZiAoIWhhc093blByb3BlcnR5KHZpc2libGVLZXlzLCBrZXkpKSB7XG4gICAgbmFtZSA9ICdbJyArIGtleSArICddJztcbiAgfVxuICBpZiAoIXN0cikge1xuICAgIGlmIChjdHguc2Vlbi5pbmRleE9mKGRlc2MudmFsdWUpIDwgMCkge1xuICAgICAgaWYgKGlzTnVsbChyZWN1cnNlVGltZXMpKSB7XG4gICAgICAgIHN0ciA9IGZvcm1hdFZhbHVlKGN0eCwgZGVzYy52YWx1ZSwgbnVsbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdHIgPSBmb3JtYXRWYWx1ZShjdHgsIGRlc2MudmFsdWUsIHJlY3Vyc2VUaW1lcyAtIDEpO1xuICAgICAgfVxuICAgICAgaWYgKHN0ci5pbmRleE9mKCdcXG4nKSA+IC0xKSB7XG4gICAgICAgIGlmIChhcnJheSkge1xuICAgICAgICAgIHN0ciA9IHN0ci5zcGxpdCgnXFxuJykubWFwKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgICAgICAgIHJldHVybiAnICAnICsgbGluZTtcbiAgICAgICAgICB9KS5qb2luKCdcXG4nKS5zdWJzdHIoMik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3RyID0gJ1xcbicgKyBzdHIuc3BsaXQoJ1xcbicpLm1hcChmdW5jdGlvbihsaW5lKSB7XG4gICAgICAgICAgICByZXR1cm4gJyAgICcgKyBsaW5lO1xuICAgICAgICAgIH0pLmpvaW4oJ1xcbicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0ciA9IGN0eC5zdHlsaXplKCdbQ2lyY3VsYXJdJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gIH1cbiAgaWYgKGlzVW5kZWZpbmVkKG5hbWUpKSB7XG4gICAgaWYgKGFycmF5ICYmIGtleS5tYXRjaCgvXlxcZCskLykpIHtcbiAgICAgIHJldHVybiBzdHI7XG4gICAgfVxuICAgIG5hbWUgPSBKU09OLnN0cmluZ2lmeSgnJyArIGtleSk7XG4gICAgaWYgKG5hbWUubWF0Y2goL15cIihbYS16QS1aX11bYS16QS1aXzAtOV0qKVwiJC8pKSB7XG4gICAgICBuYW1lID0gbmFtZS5zdWJzdHIoMSwgbmFtZS5sZW5ndGggLSAyKTtcbiAgICAgIG5hbWUgPSBjdHguc3R5bGl6ZShuYW1lLCAnbmFtZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBuYW1lID0gbmFtZS5yZXBsYWNlKC8nL2csIFwiXFxcXCdcIilcbiAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcXFxcIi9nLCAnXCInKVxuICAgICAgICAgICAgICAgICAucmVwbGFjZSgvKF5cInxcIiQpL2csIFwiJ1wiKTtcbiAgICAgIG5hbWUgPSBjdHguc3R5bGl6ZShuYW1lLCAnc3RyaW5nJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5hbWUgKyAnOiAnICsgc3RyO1xufVxuXG5cbmZ1bmN0aW9uIHJlZHVjZVRvU2luZ2xlU3RyaW5nKG91dHB1dCwgYmFzZSwgYnJhY2VzKSB7XG4gIHZhciBudW1MaW5lc0VzdCA9IDA7XG4gIHZhciBsZW5ndGggPSBvdXRwdXQucmVkdWNlKGZ1bmN0aW9uKHByZXYsIGN1cikge1xuICAgIG51bUxpbmVzRXN0Kys7XG4gICAgaWYgKGN1ci5pbmRleE9mKCdcXG4nKSA+PSAwKSBudW1MaW5lc0VzdCsrO1xuICAgIHJldHVybiBwcmV2ICsgY3VyLnJlcGxhY2UoL1xcdTAwMWJcXFtcXGRcXGQ/bS9nLCAnJykubGVuZ3RoICsgMTtcbiAgfSwgMCk7XG5cbiAgaWYgKGxlbmd0aCA+IDYwKSB7XG4gICAgcmV0dXJuIGJyYWNlc1swXSArXG4gICAgICAgICAgIChiYXNlID09PSAnJyA/ICcnIDogYmFzZSArICdcXG4gJykgK1xuICAgICAgICAgICAnICcgK1xuICAgICAgICAgICBvdXRwdXQuam9pbignLFxcbiAgJykgK1xuICAgICAgICAgICAnICcgK1xuICAgICAgICAgICBicmFjZXNbMV07XG4gIH1cblxuICByZXR1cm4gYnJhY2VzWzBdICsgYmFzZSArICcgJyArIG91dHB1dC5qb2luKCcsICcpICsgJyAnICsgYnJhY2VzWzFdO1xufVxuXG5cbi8vIE5PVEU6IFRoZXNlIHR5cGUgY2hlY2tpbmcgZnVuY3Rpb25zIGludGVudGlvbmFsbHkgZG9uJ3QgdXNlIGBpbnN0YW5jZW9mYFxuLy8gYmVjYXVzZSBpdCBpcyBmcmFnaWxlIGFuZCBjYW4gYmUgZWFzaWx5IGZha2VkIHdpdGggYE9iamVjdC5jcmVhdGUoKWAuXG5mdW5jdGlvbiBpc0FycmF5KGFyKSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KGFyKTtcbn1cbmV4cG9ydHMuaXNBcnJheSA9IGlzQXJyYXk7XG5cbmZ1bmN0aW9uIGlzQm9vbGVhbihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdib29sZWFuJztcbn1cbmV4cG9ydHMuaXNCb29sZWFuID0gaXNCb29sZWFuO1xuXG5mdW5jdGlvbiBpc051bGwoYXJnKSB7XG4gIHJldHVybiBhcmcgPT09IG51bGw7XG59XG5leHBvcnRzLmlzTnVsbCA9IGlzTnVsbDtcblxuZnVuY3Rpb24gaXNOdWxsT3JVbmRlZmluZWQoYXJnKSB7XG4gIHJldHVybiBhcmcgPT0gbnVsbDtcbn1cbmV4cG9ydHMuaXNOdWxsT3JVbmRlZmluZWQgPSBpc051bGxPclVuZGVmaW5lZDtcblxuZnVuY3Rpb24gaXNOdW1iZXIoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnbnVtYmVyJztcbn1cbmV4cG9ydHMuaXNOdW1iZXIgPSBpc051bWJlcjtcblxuZnVuY3Rpb24gaXNTdHJpbmcoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnc3RyaW5nJztcbn1cbmV4cG9ydHMuaXNTdHJpbmcgPSBpc1N0cmluZztcblxuZnVuY3Rpb24gaXNTeW1ib2woYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnc3ltYm9sJztcbn1cbmV4cG9ydHMuaXNTeW1ib2wgPSBpc1N5bWJvbDtcblxuZnVuY3Rpb24gaXNVbmRlZmluZWQoYXJnKSB7XG4gIHJldHVybiBhcmcgPT09IHZvaWQgMDtcbn1cbmV4cG9ydHMuaXNVbmRlZmluZWQgPSBpc1VuZGVmaW5lZDtcblxuZnVuY3Rpb24gaXNSZWdFeHAocmUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHJlKSAmJiBvYmplY3RUb1N0cmluZyhyZSkgPT09ICdbb2JqZWN0IFJlZ0V4cF0nO1xufVxuZXhwb3J0cy5pc1JlZ0V4cCA9IGlzUmVnRXhwO1xuXG5mdW5jdGlvbiBpc09iamVjdChhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdvYmplY3QnICYmIGFyZyAhPT0gbnVsbDtcbn1cbmV4cG9ydHMuaXNPYmplY3QgPSBpc09iamVjdDtcblxuZnVuY3Rpb24gaXNEYXRlKGQpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KGQpICYmIG9iamVjdFRvU3RyaW5nKGQpID09PSAnW29iamVjdCBEYXRlXSc7XG59XG5leHBvcnRzLmlzRGF0ZSA9IGlzRGF0ZTtcblxuZnVuY3Rpb24gaXNFcnJvcihlKSB7XG4gIHJldHVybiBpc09iamVjdChlKSAmJlxuICAgICAgKG9iamVjdFRvU3RyaW5nKGUpID09PSAnW29iamVjdCBFcnJvcl0nIHx8IGUgaW5zdGFuY2VvZiBFcnJvcik7XG59XG5leHBvcnRzLmlzRXJyb3IgPSBpc0Vycm9yO1xuXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ2Z1bmN0aW9uJztcbn1cbmV4cG9ydHMuaXNGdW5jdGlvbiA9IGlzRnVuY3Rpb247XG5cbmZ1bmN0aW9uIGlzUHJpbWl0aXZlKGFyZykge1xuICByZXR1cm4gYXJnID09PSBudWxsIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnYm9vbGVhbicgfHxcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICdudW1iZXInIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnc3RyaW5nJyB8fFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ3N5bWJvbCcgfHwgIC8vIEVTNiBzeW1ib2xcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICd1bmRlZmluZWQnO1xufVxuZXhwb3J0cy5pc1ByaW1pdGl2ZSA9IGlzUHJpbWl0aXZlO1xuXG5leHBvcnRzLmlzQnVmZmVyID0gcmVxdWlyZSgnLi9zdXBwb3J0L2lzQnVmZmVyJyk7XG5cbmZ1bmN0aW9uIG9iamVjdFRvU3RyaW5nKG8pIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKTtcbn1cblxuXG5mdW5jdGlvbiBwYWQobikge1xuICByZXR1cm4gbiA8IDEwID8gJzAnICsgbi50b1N0cmluZygxMCkgOiBuLnRvU3RyaW5nKDEwKTtcbn1cblxuXG52YXIgbW9udGhzID0gWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsXG4gICAgICAgICAgICAgICdPY3QnLCAnTm92JywgJ0RlYyddO1xuXG4vLyAyNiBGZWIgMTY6MTk6MzRcbmZ1bmN0aW9uIHRpbWVzdGFtcCgpIHtcbiAgdmFyIGQgPSBuZXcgRGF0ZSgpO1xuICB2YXIgdGltZSA9IFtwYWQoZC5nZXRIb3VycygpKSxcbiAgICAgICAgICAgICAgcGFkKGQuZ2V0TWludXRlcygpKSxcbiAgICAgICAgICAgICAgcGFkKGQuZ2V0U2Vjb25kcygpKV0uam9pbignOicpO1xuICByZXR1cm4gW2QuZ2V0RGF0ZSgpLCBtb250aHNbZC5nZXRNb250aCgpXSwgdGltZV0uam9pbignICcpO1xufVxuXG5cbi8vIGxvZyBpcyBqdXN0IGEgdGhpbiB3cmFwcGVyIHRvIGNvbnNvbGUubG9nIHRoYXQgcHJlcGVuZHMgYSB0aW1lc3RhbXBcbmV4cG9ydHMubG9nID0gZnVuY3Rpb24oKSB7XG4gIGNvbnNvbGUubG9nKCclcyAtICVzJywgdGltZXN0YW1wKCksIGV4cG9ydHMuZm9ybWF0LmFwcGx5KGV4cG9ydHMsIGFyZ3VtZW50cykpO1xufTtcblxuXG4vKipcbiAqIEluaGVyaXQgdGhlIHByb3RvdHlwZSBtZXRob2RzIGZyb20gb25lIGNvbnN0cnVjdG9yIGludG8gYW5vdGhlci5cbiAqXG4gKiBUaGUgRnVuY3Rpb24ucHJvdG90eXBlLmluaGVyaXRzIGZyb20gbGFuZy5qcyByZXdyaXR0ZW4gYXMgYSBzdGFuZGFsb25lXG4gKiBmdW5jdGlvbiAobm90IG9uIEZ1bmN0aW9uLnByb3RvdHlwZSkuIE5PVEU6IElmIHRoaXMgZmlsZSBpcyB0byBiZSBsb2FkZWRcbiAqIGR1cmluZyBib290c3RyYXBwaW5nIHRoaXMgZnVuY3Rpb24gbmVlZHMgdG8gYmUgcmV3cml0dGVuIHVzaW5nIHNvbWUgbmF0aXZlXG4gKiBmdW5jdGlvbnMgYXMgcHJvdG90eXBlIHNldHVwIHVzaW5nIG5vcm1hbCBKYXZhU2NyaXB0IGRvZXMgbm90IHdvcmsgYXNcbiAqIGV4cGVjdGVkIGR1cmluZyBib290c3RyYXBwaW5nIChzZWUgbWlycm9yLmpzIGluIHIxMTQ5MDMpLlxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGN0b3IgQ29uc3RydWN0b3IgZnVuY3Rpb24gd2hpY2ggbmVlZHMgdG8gaW5oZXJpdCB0aGVcbiAqICAgICBwcm90b3R5cGUuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBzdXBlckN0b3IgQ29uc3RydWN0b3IgZnVuY3Rpb24gdG8gaW5oZXJpdCBwcm90b3R5cGUgZnJvbS5cbiAqL1xuZXhwb3J0cy5pbmhlcml0cyA9IHJlcXVpcmUoJ2luaGVyaXRzJyk7XG5cbmV4cG9ydHMuX2V4dGVuZCA9IGZ1bmN0aW9uKG9yaWdpbiwgYWRkKSB7XG4gIC8vIERvbid0IGRvIGFueXRoaW5nIGlmIGFkZCBpc24ndCBhbiBvYmplY3RcbiAgaWYgKCFhZGQgfHwgIWlzT2JqZWN0KGFkZCkpIHJldHVybiBvcmlnaW47XG5cbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhhZGQpO1xuICB2YXIgaSA9IGtleXMubGVuZ3RoO1xuICB3aGlsZSAoaS0tKSB7XG4gICAgb3JpZ2luW2tleXNbaV1dID0gYWRkW2tleXNbaV1dO1xuICB9XG4gIHJldHVybiBvcmlnaW47XG59O1xuXG5mdW5jdGlvbiBoYXNPd25Qcm9wZXJ0eShvYmosIHByb3ApIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApO1xufVxuXG52YXIga0N1c3RvbVByb21pc2lmaWVkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgPyBTeW1ib2woJ3V0aWwucHJvbWlzaWZ5LmN1c3RvbScpIDogdW5kZWZpbmVkO1xuXG5leHBvcnRzLnByb21pc2lmeSA9IGZ1bmN0aW9uIHByb21pc2lmeShvcmlnaW5hbCkge1xuICBpZiAodHlwZW9mIG9yaWdpbmFsICE9PSAnZnVuY3Rpb24nKVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcIm9yaWdpbmFsXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEZ1bmN0aW9uJyk7XG5cbiAgaWYgKGtDdXN0b21Qcm9taXNpZmllZFN5bWJvbCAmJiBvcmlnaW5hbFtrQ3VzdG9tUHJvbWlzaWZpZWRTeW1ib2xdKSB7XG4gICAgdmFyIGZuID0gb3JpZ2luYWxba0N1c3RvbVByb21pc2lmaWVkU3ltYm9sXTtcbiAgICBpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgXCJ1dGlsLnByb21pc2lmeS5jdXN0b21cIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24nKTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGZuLCBrQ3VzdG9tUHJvbWlzaWZpZWRTeW1ib2wsIHtcbiAgICAgIHZhbHVlOiBmbiwgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiBmYWxzZSwgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIGZuO1xuICB9XG5cbiAgZnVuY3Rpb24gZm4oKSB7XG4gICAgdmFyIHByb21pc2VSZXNvbHZlLCBwcm9taXNlUmVqZWN0O1xuICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgcHJvbWlzZVJlc29sdmUgPSByZXNvbHZlO1xuICAgICAgcHJvbWlzZVJlamVjdCA9IHJlamVjdDtcbiAgICB9KTtcblxuICAgIHZhciBhcmdzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyZ3MucHVzaChhcmd1bWVudHNbaV0pO1xuICAgIH1cbiAgICBhcmdzLnB1c2goZnVuY3Rpb24gKGVyciwgdmFsdWUpIHtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgcHJvbWlzZVJlamVjdChlcnIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvbWlzZVJlc29sdmUodmFsdWUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdHJ5IHtcbiAgICAgIG9yaWdpbmFsLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcHJvbWlzZVJlamVjdChlcnIpO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9taXNlO1xuICB9XG5cbiAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGZuLCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob3JpZ2luYWwpKTtcblxuICBpZiAoa0N1c3RvbVByb21pc2lmaWVkU3ltYm9sKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZm4sIGtDdXN0b21Qcm9taXNpZmllZFN5bWJvbCwge1xuICAgIHZhbHVlOiBmbiwgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiBmYWxzZSwgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoXG4gICAgZm4sXG4gICAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhvcmlnaW5hbClcbiAgKTtcbn1cblxuZXhwb3J0cy5wcm9taXNpZnkuY3VzdG9tID0ga0N1c3RvbVByb21pc2lmaWVkU3ltYm9sXG5cbmZ1bmN0aW9uIGNhbGxiYWNraWZ5T25SZWplY3RlZChyZWFzb24sIGNiKSB7XG4gIC8vIGAhcmVhc29uYCBndWFyZCBpbnNwaXJlZCBieSBibHVlYmlyZCAoUmVmOiBodHRwczovL2dvby5nbC90NUlTNk0pLlxuICAvLyBCZWNhdXNlIGBudWxsYCBpcyBhIHNwZWNpYWwgZXJyb3IgdmFsdWUgaW4gY2FsbGJhY2tzIHdoaWNoIG1lYW5zIFwibm8gZXJyb3JcbiAgLy8gb2NjdXJyZWRcIiwgd2UgZXJyb3Itd3JhcCBzbyB0aGUgY2FsbGJhY2sgY29uc3VtZXIgY2FuIGRpc3Rpbmd1aXNoIGJldHdlZW5cbiAgLy8gXCJ0aGUgcHJvbWlzZSByZWplY3RlZCB3aXRoIG51bGxcIiBvciBcInRoZSBwcm9taXNlIGZ1bGZpbGxlZCB3aXRoIHVuZGVmaW5lZFwiLlxuICBpZiAoIXJlYXNvbikge1xuICAgIHZhciBuZXdSZWFzb24gPSBuZXcgRXJyb3IoJ1Byb21pc2Ugd2FzIHJlamVjdGVkIHdpdGggYSBmYWxzeSB2YWx1ZScpO1xuICAgIG5ld1JlYXNvbi5yZWFzb24gPSByZWFzb247XG4gICAgcmVhc29uID0gbmV3UmVhc29uO1xuICB9XG4gIHJldHVybiBjYihyZWFzb24pO1xufVxuXG5mdW5jdGlvbiBjYWxsYmFja2lmeShvcmlnaW5hbCkge1xuICBpZiAodHlwZW9mIG9yaWdpbmFsICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwib3JpZ2luYWxcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24nKTtcbiAgfVxuXG4gIC8vIFdlIERPIE5PVCByZXR1cm4gdGhlIHByb21pc2UgYXMgaXQgZ2l2ZXMgdGhlIHVzZXIgYSBmYWxzZSBzZW5zZSB0aGF0XG4gIC8vIHRoZSBwcm9taXNlIGlzIGFjdHVhbGx5IHNvbWVob3cgcmVsYXRlZCB0byB0aGUgY2FsbGJhY2sncyBleGVjdXRpb25cbiAgLy8gYW5kIHRoYXQgdGhlIGNhbGxiYWNrIHRocm93aW5nIHdpbGwgcmVqZWN0IHRoZSBwcm9taXNlLlxuICBmdW5jdGlvbiBjYWxsYmFja2lmaWVkKCkge1xuICAgIHZhciBhcmdzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyZ3MucHVzaChhcmd1bWVudHNbaV0pO1xuICAgIH1cblxuICAgIHZhciBtYXliZUNiID0gYXJncy5wb3AoKTtcbiAgICBpZiAodHlwZW9mIG1heWJlQ2IgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBsYXN0IGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBGdW5jdGlvbicpO1xuICAgIH1cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIGNiID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gbWF5YmVDYi5hcHBseShzZWxmLCBhcmd1bWVudHMpO1xuICAgIH07XG4gICAgLy8gSW4gdHJ1ZSBub2RlIHN0eWxlIHdlIHByb2Nlc3MgdGhlIGNhbGxiYWNrIG9uIGBuZXh0VGlja2Agd2l0aCBhbGwgdGhlXG4gICAgLy8gaW1wbGljYXRpb25zIChzdGFjaywgYHVuY2F1Z2h0RXhjZXB0aW9uYCwgYGFzeW5jX2hvb2tzYClcbiAgICBvcmlnaW5hbC5hcHBseSh0aGlzLCBhcmdzKVxuICAgICAgLnRoZW4oZnVuY3Rpb24ocmV0KSB7IHByb2Nlc3MubmV4dFRpY2soY2IsIG51bGwsIHJldCkgfSxcbiAgICAgICAgICAgIGZ1bmN0aW9uKHJlaikgeyBwcm9jZXNzLm5leHRUaWNrKGNhbGxiYWNraWZ5T25SZWplY3RlZCwgcmVqLCBjYikgfSk7XG4gIH1cblxuICBPYmplY3Quc2V0UHJvdG90eXBlT2YoY2FsbGJhY2tpZmllZCwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG9yaWdpbmFsKSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNhbGxiYWNraWZpZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGdldE93blByb3BlcnR5RGVzY3JpcHRvcnMob3JpZ2luYWwpKTtcbiAgcmV0dXJuIGNhbGxiYWNraWZpZWQ7XG59XG5leHBvcnRzLmNhbGxiYWNraWZ5ID0gY2FsbGJhY2tpZnk7XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0J1ZmZlcihhcmcpIHtcbiAgcmV0dXJuIGFyZyAmJiB0eXBlb2YgYXJnID09PSAnb2JqZWN0J1xuICAgICYmIHR5cGVvZiBhcmcuY29weSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICYmIHR5cGVvZiBhcmcuZmlsbCA9PT0gJ2Z1bmN0aW9uJ1xuICAgICYmIHR5cGVvZiBhcmcucmVhZFVJbnQ4ID09PSAnZnVuY3Rpb24nO1xufSIsImlmICh0eXBlb2YgT2JqZWN0LmNyZWF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAvLyBpbXBsZW1lbnRhdGlvbiBmcm9tIHN0YW5kYXJkIG5vZGUuanMgJ3V0aWwnIG1vZHVsZVxuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGluaGVyaXRzKGN0b3IsIHN1cGVyQ3Rvcikge1xuICAgIGN0b3Iuc3VwZXJfID0gc3VwZXJDdG9yXG4gICAgY3Rvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ3Rvci5wcm90b3R5cGUsIHtcbiAgICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICAgIHZhbHVlOiBjdG9yLFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgfVxuICAgIH0pO1xuICB9O1xufSBlbHNlIHtcbiAgLy8gb2xkIHNjaG9vbCBzaGltIGZvciBvbGQgYnJvd3NlcnNcbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpbmhlcml0cyhjdG9yLCBzdXBlckN0b3IpIHtcbiAgICBjdG9yLnN1cGVyXyA9IHN1cGVyQ3RvclxuICAgIHZhciBUZW1wQ3RvciA9IGZ1bmN0aW9uICgpIHt9XG4gICAgVGVtcEN0b3IucHJvdG90eXBlID0gc3VwZXJDdG9yLnByb3RvdHlwZVxuICAgIGN0b3IucHJvdG90eXBlID0gbmV3IFRlbXBDdG9yKClcbiAgICBjdG9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IGN0b3JcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==