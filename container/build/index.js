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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../js/ColorSelector.js":
/*!******************************!*\
  !*** ../js/ColorSelector.js ***!
  \******************************/
/*! exports provided: fromColorAttribute, createColorClass, createColorStyle, ColorSelector, verifyColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromColorAttribute", function() { return fromColorAttribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createColorClass", function() { return createColorClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createColorStyle", function() { return createColorStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorSelector", function() { return ColorSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verifyColor", function() { return verifyColor; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);



 // Adds className and style properties to a color loaded from DB

function fromColorAttribute(attr, bg = false) {
  let customColor = attr.slug ? null : attr.color;

  if (bg) {
    return Object.assign({}, attr, {
      className: createColorClass(attr.slug, "background-color"),
      style: {
        backgroundColor: customColor,
        ["--palette-bg-color"]: customColor
      }
    });
  }

  return Object.assign({}, attr, {
    className: createColorClass(attr.slug, "color"),
    style: {
      color: customColor,
      ["--palette-color"]: customColor
    }
  });
}
function createColorClass(slug, prop) {
  if (!slug || !prop) {
    return null;
  }

  return "has-" + slug + "-" + prop;
} // creates a style dictionary suitable for inline styling of custom colors

/* input format:
  [
    { color: attrs.bgColor,
      props: [ "background-color", "--palette-bg-color"],
    },
    { color: attrs.textColor,
      props: [ "color", "--palette-color" ],
    },
  ]
*/

function createColorStyle(attributes) {
  let style = {};

  for (let attr of attributes) {
    if (!attr.color) {
      continue;
    }

    let color = attr.color.slug ? null : attr.color.color;

    for (let prop of attr.props) {
      style[prop] = color;
    }
  }

  return style;
}
class ColorSelector extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  render() {
    let label = this.props.label;
    let allowGradients = this.props.allowGradients; // TODO

    let value = this.props.value;
    let onChange = this.props.onChange;
    let settings = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__["select"])("core/block-editor").getSettings();
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, label), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ColorPalette"], {
      colors: settings.colors,
      disableCustomColors: settings.disableCustomColors,
      value: value,
      onChange: c => {
        let color = settings.colors.filter(obj => obj.color === c)[0];
        onChange({
          color: c,
          slug: color ? color.slug : null
        });
      }
    }));
  }

}
function verifyColor(color) {
  let colors = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__["select"])("core/block-editor").getSettings().colors;
  return getColorBySlug(color.slug, colors);
}

function getColorBySlug(slug, colors) {
  let color = colors.filter(obj => obj.slug === slug)[0];
  return color ? color.color : null;
}

/***/ }),

/***/ "../js/SelectControls.js":
/*!*******************************!*\
  !*** ../js/SelectControls.js ***!
  \*******************************/
/*! exports provided: OptionsControl, OptionControl, OptionGroup, CheckboxGroup, SliderControl, UnitControl, PhoneControl, EmailControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionsControl", function() { return OptionsControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionControl", function() { return OptionControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionGroup", function() { return OptionGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxGroup", function() { return CheckboxGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderControl", function() { return SliderControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitControl", function() { return UnitControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhoneControl", function() { return PhoneControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailControl", function() { return EmailControl; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "../node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);




 // Dev note: OptionsControl doesn't use multi-select SelectControls.
// This is because WordPress's styling and implementation of it is terrible.
// Creates inspector controls for selecting options via
// radios, multi-select boxes, and range selects.
// Implements functions for getting the default option, custom marks, etc

/*
  Option object format

  {
    attribute: <string>, // should be unique in the options array
    label: <string>,
    help: <string>,
    choices: <array of {value, label}> | null, (null for boolean)

    ( min, max, step required for sliders, choices must be null )
    min: <number>,
    max: <number>,
    step: <number>,
    markStep: <number>,
    markRender: (number) => string,
    tooltipRender: (number) => string,

    multiple: <boolean> | false, ( checkboxgroup instead of radios )
    invertValue: <boolean> | false, (inverts displayed value for booleans)
    default: <value> | <array of value>, (arrays used for multiselects)
    value: [value] | <array of value>,
    disabled: <boolean> | false,
    onChange: [value] => [value], (pre-processing hook before returning state object)
  }

*/

/*
  --- Example Usage ---
  this.state = {
    doToggle: true,
    attr1: null,
    attr2: null,
    maxWidth: null,
    minWidth: {
      useMinWidth: false,
      unit: "%",
      value: 20,
      asString: "20%",
    },
  }


  let options = [
    {
      attribute: 'doToggle',
      label: 'Toggle test',
      default: false,
      value: this.state.doToggle,
    },
    {
      attribute: 'attr1',
      label: 'Attribute one',
      help: 'This is help text',
      choices: [
        { value: 'val1', label: 'Value one' },
        { value: 'val2', label: 'Value two' },
      ],
      value: this.state.attr1,
    },
    {
      attribute: 'attr2',
      label: 'Attribute two',
      choices: [
        { value: 'a', label: 'A' },
        { value: 'b', label: 'B' },
        { value: 'c', label: 'C' },
      ],
      multiple: true,
      default: 'c',
      value: this.state.attr2,
    },
    {
      attribute: 'maxWidth',
      label: 'Max width',
      help: 'SliderControl test',
      min: 10,
      max: 50,
      step: 5,
      markStep: 10,
      markRender: (v) => String(v) + 'ch',
      default: 30,
      value: this.state.maxWidth,
    },
  ];

  let units = [
    {
      value: "%",
      label: "%",
      min: 0,
      max: 100,
      step: 1,
      markStep: 10,
    },
    {
      value: "vw",
      label: "vw",
      min: 0,
      max: 100,
      step: 1,
      markStep: 10,
    },
    {
      value: "ch",
      label: "ch",
      min: 10,
      max: 50,
      step: 5,
    },
  ];

  render() {
    <OptionsControl
      options = { options }
      onChange = { (v) => { this.setState(v) } }
    />
    <UnitControl
      label = "Mininum Width"
      help = "UnitControl test"
      toggleSelector = {{
        attribute: "useMinWidth",
        label: "Use min width",
        help: "toggleSelector",
        value: this.state.minWidth.useMinWidth,
      }}
      unitSelector = {{
        label: "Units",
        value: this.state.minWidth.unit,
        units: units,
      }}
      slider = {{
        label: "Value",
        value: this.state.minWidth.value,
      }}
      onChange = { (v) => { this.setState( { minWidth: v } ) } }
    />
  }

*/

/*
Handles enumerable selections
(ToggleControl, CheckboxControl, SelectControl, RadioControl, RangeControl)

Props (* denotes required props):
  options*
    array of option objects, format for which is above.

  onChange
    Callback, typically used to set state in the parent.
    The callback is passed an object of `attribute: value` pairs

  maxRadioOptions
    max enumerable options before a SelectControl is used instead of
    RadioControl/CheckboxControl, default 5.
*/

class OptionsControl extends react__WEBPACK_IMPORTED_MODULE_3___default.a.Component {
  // Returns attr: value pairs currently selected
  getChoices(options) {
    let choices = [];
    options.forEach((o, i) => {
      choices[i] = {
        attribute: o.attribute,
        value: o.value || o.default
      };
    });
    return choices;
  } // returns choice from choices with the given attribute


  getChoice(attribute, choices) {
    for (let c of choices) {
      if (c.attribute === attribute) {
        return c;
      }
    }
  }

  render() {
    let maxRadioOptions = this.props.maxRadioOptions || 5;
    let options = this.props.options;
    let onChange = this.props.onChange; // array of {attribute: attr, value: val}}

    let choices = this.getChoices(options);
    let optionControls = [...Array(options.length).keys()].map(i => Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(OptionControl, {
      key: i,
      maxRadioOptions: maxRadioOptions,
      label: options[i].label,
      help: options[i].help,
      choices: options[i].choices,
      multiple: options[i].multiple,
      invertValue: options[i].invertValue,
      min: options[i].min,
      max: options[i].max,
      step: options[i].step,
      markStep: options[i].markStep,
      markRender: options[i].markRender,
      tooltipRender: options[i].tooltipRender,
      value: this.getChoice(options[i].attribute, choices).value,
      disabled: options[i].disabled,
      callback: v => {
        // allows for option-specific onChange hooks
        if (typeof options[i].onChange === "function") {
          v = options[i].onChange(v);
        }

        onChange({
          [options[i].attribute]: v
        }); // callback
      }
    }));
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, optionControls);
  }

}
class OptionControl extends react__WEBPACK_IMPORTED_MODULE_3___default.a.Component {
  render() {
    let maxRadioOptions = this.props.maxRadioOptions;
    let value = this.props.value;
    let label = this.props.label;
    let help = this.props.help;
    let choices = this.props.choices;
    let min = this.props.min;
    let max = this.props.max;
    let step = this.props.step;
    let markStep = this.props.markStep;
    let markRender = this.props.markRender;
    let tooltipRender = this.props.tooltipRender;
    let multiple = this.props.multiple;
    let invertValue = this.props.invertValue || false;
    let disabled = this.props.disabled;
    let callback = this.props.callback;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, Array.isArray(value) ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(OptionGroup, this.props) : !choices ? !(isNaN(min) || isNaN(max) || isNaN(step)) ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(SliderControl, {
      label: label,
      help: help,
      value: value,
      min: min,
      max: max,
      step: step,
      markStep: markStep,
      markRender: markRender,
      tooltipRender: tooltipRender,
      disabled: disabled,
      callback: callback
    }) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ToggleControl"], {
      label: label,
      help: help,
      checked: invertValue != Boolean(value) // != <-> XOR
      ,
      onChange: b => callback(invertValue != b),
      disabled: disabled
    }) : multiple ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(CheckboxGroup, {
      label: label,
      help: help,
      options: choices,
      value: value,
      callback: callback,
      disabled: disabled
    }) : choices.length <= maxRadioOptions ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RadioControl"], {
      label: label,
      help: help,
      selected: value,
      onChange: callback,
      options: choices,
      disabled: disabled
    }) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"], {
      label: label,
      help: help,
      value: value,
      onChange: callback,
      options: choices,
      disabled: disabled
    }));
  }

} // a group of option controls that accepts array props and returns
// an array of values

class OptionGroup extends react__WEBPACK_IMPORTED_MODULE_3___default.a.Component {
  // Returns correct properties for a given Option index
  getProps(props, i) {
    var out = { ...props
    };

    for (let [k, v] of Object.entries(out)) {
      if (Array.isArray(v)) {
        out[k] = v[i];
      }
    }

    return out;
  }

  render() {
    let values = this.props.value;
    let callback = this.props.callback;
    let options = [...Array(values.length).keys()].map(i => Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(OptionControl, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, this.getProps(this.props, i), {
      key: i,
      callback: v => {
        let vs = [...values];
        vs[i] = v;
        callback(vs);
      }
    })));
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, options);
  }

} // Creates multiple CheckboxControls from a group of attributes

class CheckboxGroup extends react__WEBPACK_IMPORTED_MODULE_3___default.a.Component {
  constructor(props) {
    super(props);
    this.id = "ncs4-components-checkboxgroup-" + String(document.getElementsByClassName("ncs4-components-checkboxgroup").length);
  }

  render() {
    let label = this.props.label;
    let help = this.props.help;
    let value = this.props.value;
    let options = this.props.options;
    let disabled = this.props.disabled;
    let callback = this.props.callback;
    let boxes = [...Array(options.length).keys()].map(i => Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["CheckboxControl"], {
      key: i,
      label: options[i].label,
      checked: value.includes(options[i].value),
      disabled: disabled,
      name: this.id,
      onChange: b => {
        var choice = [...value];

        if (b) {
          choice.push(options[i].value);
        } else {
          let j = choice.indexOf(options[i].value);

          if (j > -1) {
            choice.splice(j, 1);
          }
        }

        callback(choice);
      }
    }));
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
      className: "ncs4-components-checkboxgroup"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("label", {
      className: "components-base-control__label css-pezhm9-StyledLabel e1puf3u2",
      for: this.id
    }, label), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("p", {
      className: "components-base-control__help css-1gbp77-StyledHelp e1puf3u3"
    }, help), boxes);
  }

} // Handles number selects (RangeControl)

class SliderControl extends react__WEBPACK_IMPORTED_MODULE_3___default.a.Component {
  createMarks(min, max, step, render) {
    var marks = Array(Math.floor((max - min) / step) + 1);

    for (let i = 0; i < marks.length; i++) {
      marks[i] = {
        value: min,
        label: render(min)
      };
      min += step;
    }

    return marks;
  }

  render() {
    let label = this.props.label;
    let help = this.props.help;
    let value = this.props.value;
    let min = this.props.min;
    let max = this.props.max;
    let step = this.props.step || 1;
    let markStep = this.props.markStep || step;

    let markRender = this.props.markRender || (v => String(v));

    let disabled = this.props.disabled;
    let tooltipRender = this.props.tooltipRender || markRender;
    let callback = this.props.callback;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"], {
      label: label,
      help: help,
      value: value,
      min: min,
      max: max,
      step: step,
      marks: this.createMarks(min, max, markStep, markRender),
      renderTooltipContent: tooltipRender,
      disabled: disabled,
      onChange: callback
    });
  }

} // Handles unit selection
// Toggle (optional)
// unit selector
// Range

class UnitControl extends react__WEBPACK_IMPORTED_MODULE_3___default.a.Component {
  clamp(x, min, max) {
    return Math.min(Math.max(x, min), max);
  }

  getUnitSettings(props) {
    for (let unit of props.units) {
      if (unit.value === props.value) {
        return unit;
      }
    }
  }

  render() {
    let label = this.props.label;
    let help = this.props.help;
    let disabled = this.props.disabled;
    let onChange = this.props.onChange;
    let toggleProps = this.props.toggleSelector; // may be undefined

    let unitProps = this.props.unitSelector;
    let sliderProps = this.props.slider;
    let toggleAttr = toggleProps && toggleProps.attribute;
    let toggleValue = !toggleProps || toggleProps.value || toggleProps.default;
    let unitValue = unitProps.value || unitProps.default;
    let sliderValue = !isNaN(sliderProps.value) ? sliderProps.value : sliderProps.default; // Set default values

    if (toggleProps && typeof toggleProps.value === "undefined" || typeof unitProps.value === "undefined" || isNaN(sliderProps.value)) {
      onChange({
        [toggleAttr]: toggleValue,
        unit: unitValue,
        value: sliderValue,
        asString: String(sliderValue) + unitValue
      });
    }

    let selectorsDisabled = disabled || !toggleValue;
    let unitSettings = this.getUnitSettings(unitProps);
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, label && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("p", {
      className: "components-base-control__label css-pezhm9-StyledLabel e1puf3u2"
    }, label), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelRow"], null, toggleAttr && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(OptionControl, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, toggleProps, {
      value: toggleValue,
      callback: v => onChange({
        [toggleAttr]: v,
        unit: unitValue,
        value: sliderValue,
        asString: String(sliderValue) + unitValue
      })
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(OptionControl, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, unitProps, {
      multiple: false,
      choices: unitProps.units,
      disabled: disabled || !toggleValue,
      callback: v => {
        let props = { ...unitProps,
          value: v
        };
        let unitSettings = this.getUnitSettings(props);
        onChange({
          [toggleAttr]: toggleValue,
          unit: v,
          value: this.clamp(sliderValue, unitSettings.min, unitSettings.max),
          asString: this.clamp(sliderValue, unitSettings.min, unitSettings.max) + v
        });
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(SliderControl, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, sliderProps, {
      value: sliderValue,
      min: unitSettings.min,
      max: unitSettings.max,
      step: unitSettings.step,
      markStep: unitSettings.markStep || unitSettings.step,
      tooltipRender: v => String(v) + (unitSettings.label || unitSettings.value),
      disabled: disabled || !toggleValue,
      callback: v => onChange({
        [toggleAttr]: toggleValue,
        unit: unitValue,
        value: this.clamp(v, unitSettings.min, unitSettings.max),
        asString: this.clamp(v, unitSettings.min, unitSettings.max) + unitValue
      })
    })), help && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("p", {
      className: "components-base-control__help css-1gbp77-StyledHelp e1puf3u3"
    }, help));
  }

}
class PhoneControl extends react__WEBPACK_IMPORTED_MODULE_3___default.a.Component {
  validateNumber(num) {
    return !Boolean(num) || PhoneControl.reg.test(num);
  }

  render() {
    let valid = this.validateNumber(this.props.value);
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["TextControl"], {
      value: this.props.value,
      onChange: n => {
        this.props.onChange(n);
      },
      label: "Phone",
      help: valid ? null : "Unrecognized phone number format (perhaps you've made a typo?)"
    });
  }

}

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(PhoneControl, "reg", /^(\+?[0-9]{1,4})?[ \-.]*[0-9]{3}[ \-.]*[0-9]{3}[ \-.]*[0-9]{4}$/);

class EmailControl extends react__WEBPACK_IMPORTED_MODULE_3___default.a.Component {
  // https://stackoverflow.com/a/201378
  validateEmail(s) {
    return !Boolean(s) || EmailControl.reg.test(s);
  }

  render() {
    let valid = this.validateEmail(this.props.value);
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["TextControl"], {
      value: this.props.value,
      onChange: e => {
        this.props.onChange(e); // set state

        if (this.validateEmail(e)) {
          this.props.onChangeComplete(e); // set attribute
        }
      },
      label: "Email",
      help: valid ? null : "Invalid email address"
    });
  }

}

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(EmailControl, "reg", /^(?:[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-zA-Z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/);

/***/ }),

/***/ "../js/edit-component.js":
/*!*******************************!*\
  !*** ../js/edit-component.js ***!
  \*******************************/
/*! exports provided: default, colorToAttribute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Interface; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorToAttribute", function() { return colorToAttribute; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "../node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _SelectControls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SelectControls */ "../js/SelectControls.js");
/* harmony import */ var _ColorSelector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ColorSelector */ "../js/ColorSelector.js");



/* High-level abstraction for common block patterns
 * Assumes that the edit block calls the save block for markup
 * and just adds on some backend logic and controls for handling attributes
 */




/* Example usage:

export default function Edit(props) {
  let [state, setAttribute, setState] = withAttributes(
    props.attributes,
    props.setAttributes,
    { ...props.attributes },
    {
      "text": s => s.trim(),
      "link": (s, attrs) => verifyLink(s) ? s : attrs.link,
    },
  );

  return (
    <Interface
      { ...props }
      state = { state }
      setAttribute = { setAttribute }
      controlPanels = { [
        {
          label: "Panel Label",
          controls: [
            {
              type: "text",
              label: "Text input",
              attribute: "textAttr",
              placeholder: "Type here...",
            },
            {
              type: "unit",
              label: "Unit input",
              help: "Use the slider below to... "
              attribute: "unitAttr",
              useToggle: true,
              toggleLabel: "Use unit",
              toggleHelp: "Help text",
              selectorLabel: "Units",
              selectorChoices: [
                { value: "%", label: "%", min: 0, max: 100, step: 1, markStep: 10 },
              ],
              sliderLabel: "Value",
              sliderHelp: "Help text",
            },
            {
              type: "choice",
              label: "Enumerable input",
              attribute: "choiceAttr",
              min: 2,
              max: 10,
              step: 1, // defaults to 1
            },
            {
              type: "choice",
              label: "Enumerable input 2",
              attribute: "choiceAttr2",
              choices: [
                { value: "1fr", label: "Equal Width" },
                { value: "auto", label: "Auto Width" },
              ],
              multiple: false,
            },
            {
              type: "choice", // creates a toggle option
              label: "Enumerable input 3",
              attribute: "choiceAttr3",
              default: false,
              invertValue: false,
            },
          ],
        },
        {
          label: "Panel 2",
          controls: [
            ...
          ],
        },
      ] }
    />
  );

}

*/

function Interface(props) {
  let Save = props.save;

  if (!Save) {
    console.error("Prop 'save' is null or undefined. React component expected");
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    style: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center"
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Save, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
    style: { ...props.style,
      flex: "0 1 840px"
    },
    attributes: props.state,
    blockProps: props.blockProps,
    backend: true
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["InspectorControls"], null, props.controlPanels.map((panel, key) => Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ControlPanel, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, panel, {
    state: props.state,
    setAttribute: props.setAttribute,
    key: key
  })))));
} // removes extra editor-side color data

function colorToAttribute(colorObj) {
  return {
    color: colorObj.color,
    slug: colorObj.slug
  };
}

function ControlPanel(props) {
  let initialOpen = props.initialOpen != null ? props.initialOpen : true;
  let setAttribute = props.setAttribute;
  let state = props.state;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelBody"], {
    title: props.label,
    initialOpen: initialOpen
  }, props.controls.map((control, key) => {
    switch (control.type) {
      case "text":
        {
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["TextControl"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, control, {
            key: key,
            value: state[control.attribute],
            onChange: setAttribute(control.attribute)
          }));
          break;
        }

      case "unit":
        {
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_SelectControls__WEBPACK_IMPORTED_MODULE_4__["UnitControl"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, control, {
            key: key,
            toggleSelector: control.useToggle ? {
              attribute: "enabled",
              label: control.toggleLabel,
              help: control.toggleHelp,
              value: state[control.attribute.enabled]
            } : {},
            unitSelector: {
              label: control.selectorLabel,
              value: state[control.attribute.unit],
              units: control.selectorChoices
            },
            slider: {
              label: control.sliderLabel,
              help: control.sliderHelp,
              value: state[control.attribute.value]
            },
            onChange: obj => setAttribute(control.attribute)(obj[control.attribute])
          }));
          break;
        }

      case "color":
        {
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_ColorSelector__WEBPACK_IMPORTED_MODULE_5__["ColorSelector"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, control, {
            key: key,
            value: state[control.attribute].color,
            onChange: setAttribute(control.attribute)
          }));
          break;
        }

      case "choice":
        {
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_SelectControls__WEBPACK_IMPORTED_MODULE_4__["OptionsControl"], {
            options: [{ ...control,
              value: state[control.attribute]
            }],
            key: key,
            type: control.type,
            onChange: obj => setAttribute(control.attribute)(obj[control.attribute])
          });
        }

      default:
        {
          console.error("ControlPanel: Invalid control type '" + control.type + "'");
        }
    }
  }));
}

/***/ }),

/***/ "../js/hooks.js":
/*!**********************!*\
  !*** ../js/hooks.js ***!
  \**********************/
/*! exports provided: useToggle, useStore, withAttributes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useToggle", function() { return useToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStore", function() { return useStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withAttributes", function() { return withAttributes; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const toggler = state => !state;

function useToggle(initialState = false) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.useReducer(toggler, initialState);
}

const storeSetter = (state, setState) => attr => value => setState(Object.assign({}, state, {
  [attr]: value
}));

function useStore(initialState = {}) {
  let [state, setState] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialState);
  return [state, storeSetter(state, setState)];
} // functions as useStore/useState but updates attributes at the same time
// Takes an optional "reducer" function for any attribute.
// The reducer takes the current attributes and a value and should return a new
// value to be written to the attribute, the state will always be written directly.

function withAttributes(attributes, setAttributes, initialState = {}, reducers = {}) {
  let [state, setState] = useStore(initialState);

  let setAttribute = attr => value => {
    setState(attr)(value);
    storeSetter({}, setAttributes)(attr)(typeof reducers[attr] === "function" && reducers[attr].length <= 2 ? reducers[attr](value, attributes) : value);
  };

  return [state, setAttribute, newState => {
    for (let attr in newState) {
      setAttribute(attr)(newState[attr]);
    }
  }];
}

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/defineProperty.js":
/*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/extends.js":
/*!*********************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/extends.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _extends.apply(this, arguments);
}

module.exports = _extends;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Edit; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "../node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _save_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save.js */ "./src/save.js");
/* harmony import */ var _js_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../js/edit-component */ "../js/edit-component.js");
/* harmony import */ var _js_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../js/hooks */ "../js/hooks.js");





function Edit(props) {
  let [state, setAttribute, setState] = Object(_js_hooks__WEBPACK_IMPORTED_MODULE_4__["withAttributes"])(props.attributes, props.setAttributes, { ...props.attributes
  }, {});
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_js_edit_component__WEBPACK_IMPORTED_MODULE_3__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
    save: _save_js__WEBPACK_IMPORTED_MODULE_2__["default"],
    state: state,
    setAttribute: setAttribute,
    controlPanels: [{
      label: "General",
      controls: [{
        type: "choice",
        label: ["Margin Top (rem)", "Margin Right (rem)", "Margin Bottom (rem)", "Margin Left (rem)"],
        attribute: "margin",
        min: 0,
        max: 5,
        step: 0.5,
        toolTipRender: v => String(v) + "rem"
      }, {
        type: "choice",
        label: ["Padding Top (rem)", "Padding Right (rem)", "Padding Bottom (rem)", "Padding Left (rem)"],
        attribute: "padding",
        min: 0,
        max: 5,
        step: 0.5,
        toolTipRender: v => String(v) + "rem"
      }, {
        type: "color",
        label: "Background color",
        attribute: "bgColor"
      }, {
        type: "color",
        label: "Text color",
        attribute: "color"
      }]
    }]
  }));
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "../node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _edit_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit.js */ "./src/edit.js");
/* harmony import */ var _save_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./save.js */ "./src/save.js");






Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__["registerBlockType"])('ncs4-custom-blocks/container', {
  apiVersion: 2,
  title: 'Container',
  icon: 'editor-table',
  category: 'layout',
  attributes: {
    margin: {
      type: "array",
      default: [0, 0, 0, 0]
    },
    padding: {
      type: "array",
      default: [0, 0, 0, 0]
    },
    color: {
      type: "object",
      default: {
        color: "#171717",
        slug: "secondary-1c"
      }
    },
    bgColor: {
      type: "object",
      default: {
        color: null,
        slug: null
      }
    }
  },
  edit: props => Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_edit_js__WEBPACK_IMPORTED_MODULE_4__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
    blockProps: Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["useBlockProps"])()
  })),
  save: props => Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_save_js__WEBPACK_IMPORTED_MODULE_5__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
    blockProps: _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["useBlockProps"].save()
  }))
});

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Save; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "../node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _js_ColorSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../js/ColorSelector */ "../js/ColorSelector.js");




function Save(props) {
  let blockProps = props.blockProps;
  let attributes = props.attributes;
  let bgColor = Object(_js_ColorSelector__WEBPACK_IMPORTED_MODULE_3__["fromColorAttribute"])(attributes.bgColor, true);
  let textColor = Object(_js_ColorSelector__WEBPACK_IMPORTED_MODULE_3__["fromColorAttribute"])(attributes.color);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, blockProps, {
    "data-backend": props.backend ? "true" : null,
    style: { ...props.style,
      ...bgColor.style,
      ...textColor.style,
      margin: attributes.margin.map(v => String(v) + "rem").join(" "),
      padding: attributes.padding.map(v => String(v) + "rem").join(" ")
    },
    className: ["ncs4-container", bgColor.className, textColor.className, blockProps.className].join(' ')
  }), props.backend ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["InnerBlocks"], null) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["InnerBlocks"].Content, null));
}

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["data"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["React"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map