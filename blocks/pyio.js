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

goog.provide('Blockly.Blocks.pyio');

goog.require('Blockly.Blocks');

Blockly.Blocks['python_input'] = {
  init: function() {
    this.appendValueInput("ARG")
        .appendField("input(");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setTypeVecs([
      ["str", "str"],
    ]);
    this.setOutput(true);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['python_print'] = {
  init: function() {
    this.appendDummyInput().
      appendField("print(");
    this.appendValueInput("ARG1");
    this.appendDummyInput("CLOSE")
        .appendField(")");
    this.setInputsInline(true);
    this.setTypeVecs([
      ["any", "none"],
      ["*any", "none"]
    ]);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
    this.parameterCount = 1;
    this.hasEndParameter = false;
  },

  customContextMenu: function(options) {
    var optionRemove = {enabled: this.parameterCount > 0};
    optionRemove.text = "Remove parameter";
    optionRemove.callback = Blockly.ContextMenu.removeInputCallback(this);
    var optionAdd = {enabled: true};
    optionAdd.text = "Add parameter";
    optionAdd.callback = Blockly.ContextMenu.addInputCallback(this);
    var optionEnd = {enabled: true};
    optionEnd.text = this.hasEndParameter ?
        'Remove end="..."' : 'Add end="..."';
    optionEnd.callback =
        Blockly.ContextMenu.finalInputCallback(this, this.hasEndParameter);
    options.unshift(optionAdd, optionRemove, optionEnd);
  },

  mutationToDom: function() {
    var container = document.createElement('mutation');
    container.setAttribute('parameter_count', this.parameterCount);
    container.setAttribute('has_end_parameter', this.hasEndParameter);
    return container;
  },

  domToMutation: function(xmlElement) {
    var parameters = parseInt(xmlElement.getAttribute('parameter_count'));
    for (var i = 1; i < parameters; i++) {
      this.add();
    }
    if (xmlElement.getAttribute('has_end_parameter') == "true") {
      this.addFinal();
    }
  },

  add: function() {
    this.parameterCount++;
    var inputName = 'ARG' + this.parameterCount;
    var input = this.appendValueInput(inputName);
    if (this.parameterCount == 1 && this.hasEndParameter) {
      this.setFieldValue(", end=", "END_KEYWORD");
    }
    else if (this.parameterCount > 1) {
      input.appendField(", ");
    }
    var inputToAdd = this.hasEndParameter ? -2 : -1;
    var length = this.fullTypeVecs.length;
    for (var i = 0; i < length; i++) {
      this.fullTypeVecs[i].splice(inputToAdd, 0, "any");
      var newRow = this.fullTypeVecs[i].slice(0);
      newRow[inputToAdd] = "*any";
      this.fullTypeVecs.push(newRow);
    }
    console.log("PRINT %o", this.fullTypeVecs);
    if (this.hasEndParameter) {
      this.moveInputBefore(inputName, "END");
    }
    else {
      this.moveInputBefore(inputName, "CLOSE");
    }
  },

  remove: function() {
    this.removeInput('ARG' + this.parameterCount);
    this.parameterCount--;
    if (this.parameterCount == 0 && this.hasEndParameter) {
      this.setFieldValue("end=", "END_KEYWORD");
    }
    var inputToRemove = this.hasEndParameter ? -3 : -2;
    this.fullTypeVecs[0].splice(inputToRemove, 1);
    this.fullTypeVecs[1].splice(inputToRemove, 1);
    this.render();
  },

  addFinal: function() {
    this.hasEndParameter = true;
    var input = this.appendValueInput("END");
    if (this.parameterCount > 0) {
      input.appendField(", end=", "END_KEYWORD");
    }
    else {
      input.appendField("end=", "END_KEYWORD");
    }
    this.fullTypeVecs[0].splice(-1, 0, "str");
    this.fullTypeVecs[1].splice(-1, 0, "str");
    this.moveInputBefore("END", "CLOSE");
  },

  removeFinal: function() {
    this.hasEndParameter = false;
    this.removeInput('END');
    this.fullTypeVecs[0].splice(-2, 1);
    this.fullTypeVecs[1].splice(-2, 1);
  }
};
