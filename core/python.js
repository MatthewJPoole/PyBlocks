/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2013 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Python-specific colours enterDocument
 * @author matthew.j.poole@gmail.com (Matthew Poole)
 */
'use strict';

goog.require('Blockly.Names');

goog.provide('Blockly.Python');

Blockly.Python.COLOUR = {};
Blockly.Python.COLOUR['notype'] = '#8B7D6B';
Blockly.Python.COLOUR['int'] = '#dfdf20';   //yellow
Blockly.Python.COLOUR['float'] = '#FF1919'; // red
Blockly.Python.COLOUR['str'] = '#00CC33';  // green
Blockly.Python.COLOUR['bool'] = '#FF29FF'; // magenta
Blockly.Python.COLOUR['range'] = '#0080FF' ; // blue
Blockly.Python.RAINBOW = ['str', 'int', 'float', 'bool', 'range', 'str'];

Blockly.Python.NEW_VARS = [
    {name: "newIntVariable", type: 'int'},
    {name: "newFloatVariable", type: 'float'},
    {name: "newStringVariable", type: 'str'},
    {name: "newBoolVariable", type: 'bool'}
  ];

Blockly.Python.NEW_LIST_VARS = [
    {name: "newIntListVar", type: '*int'},
    {name: "newFloatListVar", type: '*float'},
    {name: "newStringListVar", type: '*str'},
    {name: "newBoolListVar", type: '*bool'}
  ];

Blockly.Python.RESERVED_WORDS = ['False', 'None', 'True', 'and', 'as', 'assert',
    'break', 'class', 'continue', 'def', 'del', 'elif', 'else', 'except',
    'finally', 'for', 'from', 'global', 'if', 'import', 'in', 'is', 'lambda',
    'nonlocal', 'not', 'or', 'pass', 'raise', 'return', 'try', 'while',
    'with', 'yield'];

Blockly.Python.BUILTIN_MODULES = ['_ast', '_bisect', '_codecs', '_collections',
   '_datetime', '_elementtree', '_functools', '_heapq', '_imp', '_io', '_locale',
   '_md5', '_operator', '_pickle', '_posixsubprocess', '_random', '_sha1',
   '_sha256', '_sha512', '_socket', '_sre', '_stat', '_string', '_struct',
   '_symtable', '_thread', '_tracemalloc', '_warnings', '_weakref', 'array',
   'atexit', 'binascii', 'builtins', 'errno', 'faulthandler', 'fcntl', 'gc',
   'grp', 'itertools', 'marshal', 'math', 'posix', 'pwd', 'pyexpat',
   'select', 'signal', 'spwd', 'sys', 'syslog', 'time', 'unicodedata',
   'xxsubtype', 'zipimport', 'zlib'];

Blockly.Python.BUILIN_FUNCTIONS = ['ArithmeticError', 'AssertionError',
    'AttributeError', 'BaseException', 'BlockingIOError', 'BrokenPipeError',
    'BufferError', 'BytesWarning', 'ChildProcessError',
    'ConnectionAbortedError', 'ConnectionError', 'ConnectionRefusedError',
    'ConnectionResetError', 'DeprecationWarning', 'EOFError', 'Ellipsis',
    'EnvironmentError', 'Exception', 'False', 'FileExistsError',
    'FileNotFoundError', 'FloatingPointError', 'FutureWarning', 'GeneratorExit',
    'IOError', 'ImportError', 'ImportWarning', 'IndentationError', 'IndexError',
    'InterruptedError', 'IsADirectoryError', 'KeyError', 'KeyboardInterrupt',
    'LookupError', 'MemoryError', 'NameError', 'None', 'NotADirectoryError',
    'NotImplemented', 'NotImplementedError', 'OSError', 'OverflowError',
    'PendingDeprecationWarning', 'PermissionError', 'ProcessLookupError',
    'ReferenceError', 'ResourceWarning', 'RuntimeError', 'RuntimeWarning',
    'StopIteration', 'SyntaxError', 'SyntaxWarning', 'SystemError',
    'SystemExit', 'TabError', 'TimeoutError', 'True', 'TypeError',
    'UnboundLocalError', 'UnicodeDecodeError', 'UnicodeEncodeError',
    'UnicodeError', 'UnicodeTranslateError', 'UnicodeWarning', 'UserWarning',
    'ValueError', 'Warning', 'ZeroDivisionError', '_', '__build_class__',
    '__debug__', '__doc__', '__import__', '__loader__', '__name__',
    '__package__', '__spec__', 'abs', 'all', 'any', 'ascii', 'bin', 'bool',
    'bytearray', 'bytes', 'callable', 'chr', 'classmethod', 'compile',
    'complex', 'copyright', 'credits', 'delattr', 'dict', 'dir', 'divmod',
    'enumerate', 'eval', 'exec', 'exit', 'filter', 'float', 'format',
    'frozenset', 'getattr', 'globals', 'hasattr', 'hash', 'help', 'hex',
    'id', 'input', 'int', 'isinstance', 'issubclass', 'iter', 'len', 'license',
    'list', 'locals', 'map', 'max', 'memoryview', 'min', 'next', 'object',
    'oct', 'open', 'ord', 'pow', 'print', 'property', 'quit', 'range', 'repr',
    'reversed', 'round', 'set', 'setattr', 'slice', 'sorted', 'staticmethod',
    'str', 'sum', 'super', 'tuple', 'type', 'vars', 'zip'];


Blockly.Python.RESERVED = Blockly.Python.RESERVED_WORDS.concat(
  Blockly.Python.BUILTIN_MODULES).concat(
    Blockly.Python.BUILIN_FUNCTIONS);

Blockly.Python.variableIn = function(variable, variableList) {
  for (var i = 0; i < variableList.length; i++) {
    if (variable == variableList[i].name) {
      return true;
    }
  }
  return false;
};

Blockly.Python.makeNameUnique = function(name, variableList) {
  // Only need to look at new and reserved words once.
  var newName = name;
  if ((Blockly.Python.RESERVED.indexOf(newName) > -1) ||
      (Blockly.Python.variableIn(newName, variableList)) ||
      (Blockly.Python.variableIn(newName, Blockly.Python.NEW_VARS))) {
    var i = 2;
    newName = name + i;
    console.log("NEWNAME adding a ", i, newName);
    while (Blockly.Python.variableIn(newName, variableList)) {
      i = i + 1;
      newName = name + i;
      console.log("NEWNAME adding a", i, newName);
    }
  }
  return newName;
}
