/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2012 Google Inc.
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
 * @fileoverview Variable blocks for Blockly.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.Blocks.pystrings');

goog.require('Blockly.Blocks');

Blockly.Blocks['python_string_const'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("\" \""), "VALUE");
    this.setInputsInline(true);
    this.setTypeVecs([["str"]]);
    this.setOutput(true);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
    this.getField('VALUE').setChangeHandler(
        Blockly.FieldTextInput.stringValidator);
  }
};



Blockly.Blocks['python_string_concat'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("", "LPAR");
    this.appendValueInput("LHS");
    this.appendValueInput("RHS")
        .appendField(" + ");
    this.appendDummyInput()
        .appendField("", "RPAR");
    this.setOperator(11);
    this.setInputsInline(true);
    this.setTypeVecs([["str", "str", "str"]]);
    this.setOutput(true);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['python_string_repeat'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("", "LPAR");
    this.appendValueInput("LHS");
    this.appendValueInput("RHS")
        .appendField(" * ");
    this.appendDummyInput()
        .appendField("", "RPAR");
    this.setOperator(12);
    this.setInputsInline(true);
    this.setTypeVecs([
      ["str", "int", "str"],
      ["int", "str", "str"],
    ]);
    this.setOutput(true);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['python_string_index'] = {
  init: function() {
    this.appendValueInput("ARG1");
    this.appendValueInput("ARG2")
        .appendField("[");
    this.appendDummyInput()
        .appendField("]");
    this.setOperator(16);
    this.setInputsInline(true);
    this.setTypeVecs([
      ["str", "int", "str"],
    ]);
    this.setOutput(true);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['python_string_slice12'] = {
  init: function() {
    this.appendValueInput("ARG1");
    this.appendValueInput("ARG2")
        .appendField("[");
    this.appendValueInput("ARG3")
        .appendField(":");
    this.appendDummyInput()
        .appendField("]");
    this.setOperator(16);
    this.setInputsInline(true);
    this.setTypeVecs([
      ["str", "int", "int", "str"],
    ]);
    this.setOutput(true);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['python_string_slice1'] = {
  init: function() {
    this.appendValueInput("ARG1");
    this.appendValueInput("ARG2")
        .appendField("[");
    this.appendDummyInput()
        .appendField(":");
    this.appendDummyInput()
        .appendField("]");
    this.setOperator(16);
    this.setInputsInline(true);
    this.setTypeVecs([
      ["str", "int", "str"],
    ]);
    this.setOutput(true);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['python_string_slice2'] = {
  init: function() {
    this.appendValueInput("ARG1");
    this.appendDummyInput()
        .appendField("[");
    this.appendValueInput("ARG3")
        .appendField(":");
    this.appendDummyInput()
        .appendField("]");
    this.setOperator(16);
    this.setInputsInline(true);
    this.setTypeVecs([
      ["str", "int", "str"],
    ]);
    this.setOutput(true);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['python_string_len'] = {
  init: function() {
    this.appendValueInput("ARG")
        .appendField("len(");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setTypeVecs([
      ["str", "int"]
    ]);
    this.setOutput(true);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['python_string_in'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("", "LPAR");
    this.appendValueInput("LHS");
    this.appendValueInput("RHS")
        .appendField(" in ");
    this.appendDummyInput()
        .appendField("", "RPAR");
    this.setOperator(6);
    this.setInputsInline(true);
    this.setTypeVecs([
      ["str", "str", "bool"]
    ]);
    this.setOutput(true);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['python_isdigit'] = {
  init: function() {
    this.appendValueInput("ARG");
    this.appendDummyInput()
        .appendField(".isdigit()");
    this.setInputsInline(true);
    this.setOperator(16);
    this.setTypeVecs([
      ["str", "bool"]
    ]);
    this.setOutput(true);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['python_isalpha'] = {
  init: function() {
    this.appendValueInput("ARG");
    this.appendDummyInput()
        .appendField(".isalpha()");
    this.setInputsInline(true);
    this.setOperator(16);
    this.setTypeVecs([
      ["str", "bool"]
    ]);
    this.setOutput(true);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['python_isspace'] = {
  init: function() {
    this.appendValueInput("ARG");
    this.appendDummyInput()
        .appendField(".isspace()");
    this.setOperator(16);
    this.setInputsInline(true);
    this.setTypeVecs([
      ["str", "bool"]
    ]);
    this.setOutput(true);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['python_lower'] = {
  init: function() {
    this.appendValueInput("ARG");
    this.appendDummyInput()
        .appendField(".lower()");
    this.setOperator(16);
    this.setInputsInline(true);
    this.setTypeVecs([
      ["str", "str"]
    ]);
    this.setOutput(true);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['python_upper'] = {
  init: function() {
    this.appendValueInput("ARG");
    this.appendDummyInput()
        .appendField(".upper()");
    this.setOperator(16);
    this.setInputsInline(true);
    this.setTypeVecs([
      ["str", "str"]
    ]);
    this.setOutput(true);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['python_find'] = {
  init: function() {
    this.appendValueInput("ARG1");
    this.appendValueInput("ARG2")
        .appendField(".find(");
    this.appendDummyInput()
        .appendField(")");
    this.setOperator(16);
    this.setInputsInline(true);
    this.setTypeVecs([
      ["str", "str", "int"]
    ]);
    this.setOutput(true);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['python_index_method'] = {
  init: function() {
    this.appendValueInput("ARG1");
    this.appendValueInput("ARG2")
        .appendField(".index(");
    this.appendDummyInput()
        .appendField(")");
    this.setOperator(16);
    this.setInputsInline(true);
    this.setTypeVecs([
      ["str", "str", "int"]
    ]);
    this.setOutput(true);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['python_string_count'] = {
  init: function() {
    this.appendValueInput("ARG1");
    this.appendValueInput("ARG2")
        .appendField(".count(");
    this.appendDummyInput()
        .appendField(")");
    this.setOperator(16);
    this.setInputsInline(true);
    this.setTypeVecs([
      ["str", "str", "int"]
    ]);
    this.setOutput(true);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['python_split'] = {
  init: function() {
    this.appendValueInput("ARG");
    this.appendDummyInput()
        .appendField(".split(");
    this.appendDummyInput("CLOSE")
        .appendField(")");
    this.setOperator(16);
    this.setInputsInline(true);
    this.setTypeVecs([
      ["str", "*str"]
    ]);
    this.setOutput(true);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
    this.hasSepParameter = false;
  },

  customContextMenu: function(options) {
    var optionSep = {enabled: true};
    optionSep.text = this.hasSepParameter ?
        'Remove separator parameter' : 'Add separator parameter';
    optionSep.callback =
        Blockly.ContextMenu.finalInputCallback(this, this.hasSepParameter);
    options.unshift(optionSep);
  },

  mutationToDom: function() {
    var container = document.createElement('mutation');
    container.setAttribute('has_sep_parameter', this.hasSepParameter);
    return container;
  },

  domToMutation: function(xmlElement) {
    if (xmlElement.getAttribute('has_sep_parameter') == "true") {
      this.addFinal();
    }
  },

  addFinal: function() {
    this.hasSepParameter = true;
    this.appendValueInput("SEP");
    this.fullTypeVecs[0].splice(-1, 0, "str");
    this.moveInputBefore("SEP", "CLOSE");
  },

  removeFinal: function() {
    this.hasSepParameter = false;
    this.removeInput('SEP');
    this.fullTypeVecs[0].splice(-2, 1);
  }

};
