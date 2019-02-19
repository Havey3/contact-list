(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const contactComponent = singleContact => {
  return `<div id="attempt">
    <h1>${singleContact.firstName} ${singleContact.lastName}</h1>
    <p>${singleContact.address}</p>
    <p>${singleContact.phone}</p>
    </div>`;
};

var _default = contactComponent;
exports.default = _default;

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const apiManager = {
  contact: () => {
    return fetch("http://localhost:8088/contact").then(contact => contact.json());
  },
  newContact: contact => {
    return fetch("http://localhost:8088/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(contact)
    });
  }
};
var _default = apiManager;
exports.default = _default;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _contactCollection = _interopRequireDefault(require("./contactCollection.js"));

var _objectBuilder = _interopRequireDefault(require("./objectBuilder.js"));

var _contactList = _interopRequireDefault(require("./contactList.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const print = {
  printForm: () => {
    return `
    <section id="contact-form">
    <form id="form">
      <input id="first" type="text" placeholder="FirstName">
      <input id="last" type="text" placeholder="LastName">
      <input id="phone" type="text" placeholder="Phone Number">
      <input id="address" type="text" placeholder="Address">
      <form>
    </section>
    <button id="button">New Contact</button>
    `;
  },
  click: () => {
    document.querySelector("#button").addEventListener("click", () => {
      _contactCollection.default.newContact((0, _objectBuilder.default)(document.querySelector("#first").value, document.querySelector("#last").value, document.querySelector("#address").value, document.querySelector("#phone").value)).then(_contactList.default);
    });
  }
};
var _default = print;
exports.default = _default;

},{"./contactCollection.js":2,"./contactList.js":4,"./objectBuilder.js":6}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _contactCollection = _interopRequireDefault(require("./contactCollection.js"));

var _contact = _interopRequireDefault(require("./contact.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const printContacts = () => {
  _contactCollection.default.contact().then(parsedContacts => {
    document.querySelector("#taco").innerHTML = "";
    parsedContacts.forEach(singleContact => {
      document.querySelector("#taco").innerHTML += (0, _contact.default)(singleContact);
    });
  });
};

var _default = printContacts;
exports.default = _default;

},{"./contact.js":1,"./contactCollection.js":2}],5:[function(require,module,exports){
"use strict";

var _contactList = _interopRequireDefault(require("./contactList.js"));

var _contactForm = _interopRequireDefault(require("./contactForm.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.querySelector("#test").innerHTML += _contactForm.default.printForm();

_contactForm.default.printForm();

_contactForm.default.click();

(0, _contactList.default)();

},{"./contactForm.js":3,"./contactList.js":4}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const objectBuilder = (firstParam, lastParam, addressParam, phoneParam) => {
  return {
    firstName: firstParam,
    lastName: lastParam,
    address: addressParam,
    phone: phoneParam
  };
};

var _default = objectBuilder;
exports.default = _default;

},{}]},{},[5])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2NvbnRhY3QuanMiLCIuLi9zY3JpcHRzL2NvbnRhY3RDb2xsZWN0aW9uLmpzIiwiLi4vc2NyaXB0cy9jb250YWN0Rm9ybS5qcyIsIi4uL3NjcmlwdHMvY29udGFjdExpc3QuanMiLCIuLi9zY3JpcHRzL21haW4uanMiLCIuLi9zY3JpcHRzL29iamVjdEJ1aWxkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FDQUEsTUFBTSxnQkFBZ0IsR0FBSSxhQUFELElBQW1CO0FBQ3hDLFNBQVE7VUFDRixhQUFhLENBQUMsU0FBVSxJQUFHLGFBQWEsQ0FBQyxRQUFTO1NBQ25ELGFBQWEsQ0FBQyxPQUFRO1NBQ3RCLGFBQWEsQ0FBQyxLQUFNO1dBSHpCO0FBS0gsQ0FORDs7ZUFRZSxnQjs7Ozs7Ozs7OztBQ1JmLE1BQU0sVUFBVSxHQUFHO0FBQ2YsRUFBQSxPQUFPLEVBQUUsTUFBTTtBQUNYLFdBQU8sS0FBSyxDQUFDLCtCQUFELENBQUwsQ0FDTixJQURNLENBQ0QsT0FBTyxJQUFJLE9BQU8sQ0FBQyxJQUFSLEVBRFYsQ0FBUDtBQUVILEdBSmM7QUFLZixFQUFBLFVBQVUsRUFBRyxPQUFELElBQWE7QUFDckIsV0FBTyxLQUFLLENBQUMsK0JBQUQsRUFBaUM7QUFDekMsTUFBQSxNQUFNLEVBQUUsTUFEaUM7QUFFekMsTUFBQSxPQUFPLEVBQUU7QUFDTCx3QkFBZ0I7QUFEWCxPQUZnQztBQUt6QyxNQUFBLElBQUksRUFBRSxJQUFJLENBQUMsU0FBTCxDQUFlLE9BQWY7QUFMbUMsS0FBakMsQ0FBWjtBQVVIO0FBaEJjLENBQW5CO2VBbUJlLFU7Ozs7Ozs7Ozs7O0FDbkJmOztBQUNBOztBQUNBOzs7O0FBQ0EsTUFBTSxLQUFLLEdBQUc7QUFDZCxFQUFBLFNBQVMsRUFBRSxNQUFNO0FBQ2IsV0FBUTs7Ozs7Ozs7OztLQUFSO0FBV0gsR0FiYTtBQWVkLEVBQUEsS0FBSyxFQUFFLE1BQU07QUFDVCxJQUFBLFFBQVEsQ0FBQyxhQUFULENBQXVCLFNBQXZCLEVBQWtDLGdCQUFsQyxDQUFtRCxPQUFuRCxFQUE0RCxNQUFLO0FBQ2pFLGlDQUFXLFVBQVgsQ0FBc0IsNEJBQWMsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsUUFBdkIsRUFBaUMsS0FBL0MsRUFBc0QsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsT0FBdkIsRUFBZ0MsS0FBdEYsRUFBNkYsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsVUFBdkIsRUFBbUMsS0FBaEksRUFBdUksUUFBUSxDQUFDLGFBQVQsQ0FBdUIsUUFBdkIsRUFBaUMsS0FBeEssQ0FBdEIsRUFBc00sSUFBdE0sQ0FBMk0sb0JBQTNNO0FBQ0MsS0FGRDtBQUdIO0FBbkJhLENBQWQ7ZUFzQmUsSzs7Ozs7Ozs7Ozs7QUN6QmY7O0FBQ0E7Ozs7QUFFQSxNQUFNLGFBQWEsR0FBRyxNQUFNO0FBQ3hCLDZCQUFXLE9BQVgsR0FDQyxJQURELENBQ00sY0FBYyxJQUFJO0FBRXBCLElBQUEsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsT0FBdkIsRUFBZ0MsU0FBaEMsR0FBNEMsRUFBNUM7QUFFQSxJQUFBLGNBQWMsQ0FBQyxPQUFmLENBQXVCLGFBQWEsSUFBSTtBQUNwQyxNQUFBLFFBQVEsQ0FBQyxhQUFULENBQXVCLE9BQXZCLEVBQWdDLFNBQWhDLElBQTZDLHNCQUFRLGFBQVIsQ0FBN0M7QUFDSCxLQUZEO0FBR0gsR0FSRDtBQVNILENBVkQ7O2VBWWUsYTs7Ozs7O0FDZmY7O0FBQ0E7Ozs7QUFHQSxRQUFRLENBQUMsYUFBVCxDQUF1QixPQUF2QixFQUFnQyxTQUFoQyxJQUE2QyxxQkFBTSxTQUFOLEVBQTdDOztBQUdBLHFCQUFNLFNBQU47O0FBQ0EscUJBQU0sS0FBTjs7QUFDQTs7Ozs7Ozs7OztBQ1RBLE1BQU0sYUFBYSxHQUFHLENBQUMsVUFBRCxFQUFhLFNBQWIsRUFBd0IsWUFBeEIsRUFBc0MsVUFBdEMsS0FBcUQ7QUFDdkUsU0FBTztBQUNILElBQUEsU0FBUyxFQUFFLFVBRFI7QUFFSCxJQUFBLFFBQVEsRUFBRSxTQUZQO0FBR0gsSUFBQSxPQUFPLEVBQUUsWUFITjtBQUlILElBQUEsS0FBSyxFQUFFO0FBSkosR0FBUDtBQU1ILENBUEQ7O2VBUWUsYSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImNvbnN0IGNvbnRhY3RDb21wb25lbnQgPSAoc2luZ2xlQ29udGFjdCkgPT4ge1xyXG4gICAgcmV0dXJuIGA8ZGl2IGlkPVwiYXR0ZW1wdFwiPlxyXG4gICAgPGgxPiR7c2luZ2xlQ29udGFjdC5maXJzdE5hbWV9ICR7c2luZ2xlQ29udGFjdC5sYXN0TmFtZX08L2gxPlxyXG4gICAgPHA+JHtzaW5nbGVDb250YWN0LmFkZHJlc3N9PC9wPlxyXG4gICAgPHA+JHtzaW5nbGVDb250YWN0LnBob25lfTwvcD5cclxuICAgIDwvZGl2PmBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29udGFjdENvbXBvbmVudDsiLCJjb25zdCBhcGlNYW5hZ2VyID0ge1xyXG4gICAgY29udGFjdDogKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC9jb250YWN0XCIpXHJcbiAgICAgICAgLnRoZW4oY29udGFjdCA9PiBjb250YWN0Lmpzb24oKSlcclxuICAgIH0sXHJcbiAgICBuZXdDb250YWN0OiAoY29udGFjdCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC9jb250YWN0XCIse1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShjb250YWN0KVxyXG5cclxuICAgICAgICB9KVxyXG5cclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFwaU1hbmFnZXI7IiwiaW1wb3J0IGFwaU1hbmFnZXIgZnJvbSBcIi4vY29udGFjdENvbGxlY3Rpb24uanNcIlxyXG5pbXBvcnQgb2JqZWN0QnVpbGRlciBmcm9tIFwiLi9vYmplY3RCdWlsZGVyLmpzXCI7XHJcbmltcG9ydCBwcmludENvbnRhY3RzIGZyb20gXCIuL2NvbnRhY3RMaXN0LmpzXCI7XHJcbmNvbnN0IHByaW50ID0ge1xyXG5wcmludEZvcm06ICgpID0+IHtcclxuICAgIHJldHVybiBgXHJcbiAgICA8c2VjdGlvbiBpZD1cImNvbnRhY3QtZm9ybVwiPlxyXG4gICAgPGZvcm0gaWQ9XCJmb3JtXCI+XHJcbiAgICAgIDxpbnB1dCBpZD1cImZpcnN0XCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkZpcnN0TmFtZVwiPlxyXG4gICAgICA8aW5wdXQgaWQ9XCJsYXN0XCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkxhc3ROYW1lXCI+XHJcbiAgICAgIDxpbnB1dCBpZD1cInBob25lXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlBob25lIE51bWJlclwiPlxyXG4gICAgICA8aW5wdXQgaWQ9XCJhZGRyZXNzXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkFkZHJlc3NcIj5cclxuICAgICAgPGZvcm0+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgICA8YnV0dG9uIGlkPVwiYnV0dG9uXCI+TmV3IENvbnRhY3Q8L2J1dHRvbj5cclxuICAgIGBcclxufSxcclxuXHJcbmNsaWNrOiAoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XHJcbiAgICBhcGlNYW5hZ2VyLm5ld0NvbnRhY3Qob2JqZWN0QnVpbGRlcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ZpcnN0XCIpLnZhbHVlLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xhc3RcIikudmFsdWUsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkcmVzc1wiKS52YWx1ZSwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwaG9uZVwiKS52YWx1ZSkpLnRoZW4ocHJpbnRDb250YWN0cylcclxuICAgIH0pXHJcbn1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHJpbnRcclxuXHJcbiIsImltcG9ydCBhcGlNYW5hZ2VyIGZyb20gXCIuL2NvbnRhY3RDb2xsZWN0aW9uLmpzXCJcclxuaW1wb3J0IGNvbnRhY3QgZnJvbSBcIi4vY29udGFjdC5qc1wiXHJcblxyXG5jb25zdCBwcmludENvbnRhY3RzID0gKCkgPT4ge1xyXG4gICAgYXBpTWFuYWdlci5jb250YWN0KClcclxuICAgIC50aGVuKHBhcnNlZENvbnRhY3RzID0+IHtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YWNvXCIpLmlubmVySFRNTCA9IFwiXCJcclxuXHJcbiAgICAgICAgcGFyc2VkQ29udGFjdHMuZm9yRWFjaChzaW5nbGVDb250YWN0ID0+IHtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YWNvXCIpLmlubmVySFRNTCArPSBjb250YWN0KHNpbmdsZUNvbnRhY3QpXHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHByaW50Q29udGFjdHNcclxuXHJcbiIsImltcG9ydCBwcmludENvbnRhY3RzIGZyb20gXCIuL2NvbnRhY3RMaXN0LmpzXCJcclxuaW1wb3J0IHByaW50IGZyb20gXCIuL2NvbnRhY3RGb3JtLmpzXCJcclxuXHJcblxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rlc3RcIikuaW5uZXJIVE1MICs9IHByaW50LnByaW50Rm9ybSgpXHJcblxyXG5cclxucHJpbnQucHJpbnRGb3JtKClcclxucHJpbnQuY2xpY2soKVxyXG5wcmludENvbnRhY3RzKCkiLCJjb25zdCBvYmplY3RCdWlsZGVyID0gKGZpcnN0UGFyYW0sIGxhc3RQYXJhbSwgYWRkcmVzc1BhcmFtLCBwaG9uZVBhcmFtKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGZpcnN0TmFtZTogZmlyc3RQYXJhbSxcclxuICAgICAgICBsYXN0TmFtZTogbGFzdFBhcmFtLFxyXG4gICAgICAgIGFkZHJlc3M6IGFkZHJlc3NQYXJhbSxcclxuICAgICAgICBwaG9uZTogcGhvbmVQYXJhbVxyXG4gICAgfTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBvYmplY3RCdWlsZGVyXHJcblxyXG4iXX0=
