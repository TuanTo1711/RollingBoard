(function () {
  "use strict";

  angular.module("app").service("Validator", Validator);

  /** @ngInject */
  function Validator() {
    this.validation = validation;

    function getParent(element, selector) {
      while (element.parentElement) {
        if (element.parentElement.matches(selector)) {
          return element.parentElement;
        }
        element = element.parentElement;
      }
    }

    //validation form
    function validation(options) {
      const newLocal = {};
      var selectorRules = newLocal;

      function validate(inputElement, rule) {
        var errorElement = getParent(
          inputElement,
          options.formGroupSelector
        ).querySelector(options.errorSelector);
        var errorMessage;

        var rules = selectorRules[rule.selector];
        for (let i = 0; i < rules.length; ++i) {
          switch (inputElement.type) {
            case "radio":
            case "checkbox":
              errorMessage = rules[i](
                formElement.querySelector(rule.selector + ":checked")
              );
              break;
            default:
              errorMessage = rules[i](inputElement.value);
          }
          if (errorMessage) break;
        }

        //Nếu có trường chưa được nhập (errorMessage != null)
        if (errorMessage) {
          errorElement.innerText = errorMessage;
          //thêm thông báo và dấu thông báo lỗi
          getParent(inputElement, options.formGroupSelector).classList.add(
            "invalid"
          );
          getParent(inputElement, options.formGroupSelector).classList.add(
            "error"
          );
        } else {
          //loại bỏ thông báo và thêm dấu tích xanh
          errorElement.innerText = "";
          getParent(inputElement, options.formGroupSelector).classList.remove(
            "invalid"
          );
          getParent(inputElement, options.formGroupSelector).classList.add(
            "success"
          );
        }

        return !errorMessage;
      }

      // check form
      var formElement = document.querySelector(options.form);
      if (formElement) {
        formElement.onsubmit = function (e) {
          e.preventDefault();

          var isFormValid = true;

          //lặp qua các 'rules' và kiểm tra xem nó 'validate' hay chưa
          options.rules.forEach(function (rule) {
            var inputElement = formElement.querySelector(rule.selector);
            var isValid = validate(inputElement, rule);
            if (!isValid) {
              isFormValid = false;
            }
          });

          if (isFormValid) {
            // Trường hợp submit với javascript
            if (typeof options.onSubmit === "function") {
              var enableInputs = formElement.querySelectorAll("[name]");
              var formValues = Array.from(enableInputs).reduce(function (
                values,
                input
              ) {
                switch (input.type) {
                  case "radio":
                    if (input.matches(":checked")) {
                      values[input.name] = input.value;
                      return values;
                    }
                    break;
                  case "checkbox":
                    if (!Array.isArray(values[input.name])) {
                      values[input.name] = [];
                    }
                    if (!input.matches(":checked")) {
                      return values;
                    }
                    values[input.name].push(input.value);
                    break;
                  default:
                    values[input.name] = input.value;
                }
                return values;
              },
              {});
              options.onSubmit(formValues);
            }
          }
        };

        options.rules.forEach(function (rule) {
          if (Array.isArray(selectorRules[rule.selector])) {
            selectorRules[rule.selector].push(rule.message);
          } else {
            selectorRules[rule.selector] = [rule.message];
          }

          var inputElements = formElement.querySelectorAll(rule.selector);

          Array.from(inputElements).forEach(function (inputElement) {
            // Xử lý trường hợp blur khỏi input
            inputElement.onblur = function () {
              validate(inputElement, rule);
            };
            // Xử lý trường hợp khi nhập vào input
            inputElement.oninput = function () {
              var errorElement = getParent(
                inputElement,
                options.formGroupSelector
              ).querySelector(options.errorSelector);
              errorElement.innerText = "";
              getParent(
                inputElement,
                options.formGroupSelector
              ).classList.remove("invalid");
              getParent(
                inputElement,
                options.formGroupSelector
              ).classList.remove("error");
              getParent(
                inputElement,
                options.formGroupSelector
              ).classList.remove("success");
            };
          });
        });
      }
    }

    this.isRequired = function (selector, message) {
      return {
        selector: selector,
        message: function (value) {
          return value
            ? undefined
            : value
            ? message
            : "Trường này không được để trống";
        },
      };
    };
  }
})();
