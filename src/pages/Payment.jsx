import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCcVisa,
  faCcMastercard,
  faCcAmex,
  faCcDiscover,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCircleQuestion,
  faCircleXmark,
  faCreditCard,
} from "@fortawesome/free-solid-svg-icons";

const Payment = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    cardNumber: "",
    email: "",
    postalCode: "",
    expiry: "",
    cvv: "",
    saveCard: true,
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = "Payment - RideClassy";
  }, []);

  const detectCardType = (number) => {
    if (/^4/.test(number)) return faCcVisa;
    if (/^5[1-5]/.test(number)) return faCcMastercard;
    if (/^3[47]/.test(number)) return faCcAmex;
    if (/^6/.test(number)) return faCcDiscover;
    return faCreditCard;
  };

  const isFutureExpiry = (expiry) => {
    const [month, year] = expiry.split("/").map((v) => parseInt(v));
    if (!month || !year || month < 1 || month > 12) return false;
    const now = new Date();
    const currentYear = now.getFullYear() % 100;
    const currentMonth = now.getMonth() + 1;
    return (
      year > currentYear || (year === currentYear && month >= currentMonth)
    );
  };

  const validateField = (name, value) => {
    switch (name) {
      case "firstName":
        return value.trim() === "" ? "Please enter your first name" : "";
      case "lastName":
        return value.trim() === "" ? "Please enter your last name" : "";
      case "cardNumber":
        return /^\d{4} \d{4} \d{4} \d{4}$/.test(value)
          ? ""
          : "Card number must be 16 digits";
      case "email":
        return /\S+@\S+\.\S+/.test(value) ? "" : "Please enter a valid email";
      case "postalCode":
        return value.trim() === "" ? "Please enter your ZIP (postal) Code" : "";
      case "expiry":
        return /^\d{2}\/\d{2}$/.test(value) && isFutureExpiry(value)
          ? ""
          : "Enter a valid future date (MM/YY)";
      case "cvv":
        return /^\d{3,4}$/.test(value) ? "" : "CVV must be 3 or 4 digits";
      default:
        return "";
    }
  };

  const handleExpiryKeyDown = (e) => {
    const { selectionStart } = e.target;

    // If user presses backspace
    if (e.key === "Backspace") {
      // If slash is at current position
      if (formData.expiry[selectionStart - 1] === "/") {
        e.preventDefault(); // prevent default backspace
        const raw = formData.expiry.replace("/", "");
        const updated =
          raw.slice(0, selectionStart - 2) + raw.slice(selectionStart - 1);
        setFormData((prev) => ({ ...prev, expiry: updated }));
      }
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    let newValue = type === "checkbox" ? checked : value;

    // Card number formatting
    if (name === "cardNumber") {
      const input = e.target;
      const cursorPos = input.selectionStart;
      const rawDigits = value.replace(/\D/g, "").slice(0, 16);
      let formatted = "";

      for (let i = 0; i < rawDigits.length; i++) {
        if (i > 0 && i % 4 === 0) formatted += " ";
        formatted += rawDigits[i];
      }

      setFormData((prev) => ({ ...prev, cardNumber: formatted }));

      setTimeout(() => {
        const inputEl = document.querySelector("input[name='cardNumber']");
        if (inputEl) {
          let adjustedPos = cursorPos;
          if (value.length < formatted.length && value[cursorPos - 1] !== " ") {
            adjustedPos++;
          }
          inputEl.setSelectionRange(adjustedPos, adjustedPos);
        }
      }, 0);

      if (submitted) {
        const errorMessage = validateField(name, formatted);
        setErrors((prev) => ({ ...prev, [name]: errorMessage }));
      }
      return;
    }

    // CVV formatting
    if (name === "cvv") {
      newValue = value.replace(/[^0-9]/g, "").slice(0, 4);
    }

    // Expiry formatting with intelligent "/" and backspace handling
    if (name === "expiry") {
      const prev = formData.expiry;
      const isDeleting = prev.length > value.length;
      let raw = value.replace(/[^0-9]/g, "");

      if (isDeleting && prev.includes("/") && !value.includes("/")) {
        raw = prev.replace("/", "").slice(0, 3);
      }

      let formatted = "";

      if (raw.length === 0) {
        formatted = "";
      } else if (raw.length === 1) {
        if (parseInt(raw) > 1) {
          formatted = "0" + raw + "/";
        } else {
          formatted = raw;
        }
      } else if (raw.length === 2) {
        const month = parseInt(raw);
        if (month >= 1 && month <= 12) {
          formatted = (month < 10 ? "0" + month : month) + "/";
        } else {
          formatted = "01/" + raw[1];
        }
      } else if (raw.length === 3) {
        const month = parseInt(raw.slice(0, 2));
        const yearDigit = raw[2];
        if (month >= 1 && month <= 12) {
          formatted = (month < 10 ? "0" + month : month) + "/" + yearDigit;
        } else {
          formatted = "01/" + yearDigit;
        }
      } else {
        const month = parseInt(raw.slice(0, 2));
        const year = raw.slice(2, 4);
        if (month >= 1 && month <= 12) {
          formatted = (month < 10 ? "0" + month : month) + "/" + year;
        } else {
          formatted = "01/" + year;
        }
      }

      newValue = formatted;
    }

    setFormData((prev) => ({ ...prev, [name]: newValue }));

    if (submitted) {
      const errorMessage = validateField(name, newValue);
      setErrors((prev) => ({ ...prev, [name]: errorMessage }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const newErrors = {};
    Object.keys(formData).forEach((field) => {
      const error = validateField(field, formData[field]);
      if (error) newErrors[field] = error;
    });
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert(
        `Thank you ${formData.firstName}, your payment is being processed.`
      );
    }
  };

  const cardTypeIcon = detectCardType(formData.cardNumber.replace(/\s/g, ""));
  const getInputClasses = (field) =>
    `border rounded-lg outline-none px-3 py-2 w-full transition-all duration-150 
     placeholder-[#455660] ${
       submitted && errors[field]
         ? "border-red-500 text-red-600 placeholder-red-500"
         : "border-gray-700 text-black"
     } focus:border-blue-600 hover:border-blue-600`;

  const renderError = (field) => (
    <div className="min-h-[1.25rem] mt-1 flex items-center gap-1">
      {submitted && errors[field] ? (
        <>
          <FontAwesomeIcon
            icon={faCircleXmark}
            className="text-red-500 text-xs"
          />
          <p className="text-red-500 text-xs">{errors[field]}</p>
        </>
      ) : (
        <p className="invisible text-xs">placeholder</p>
      )}
    </div>
  );

  return (
    <div>
      <div className="bg-white border-t-2 border-gray-300 min-h-[92vh] md:min-h-screen flex md:items-center justify-center px-2  ">
        <div className="w-full max-w-xl md:scale-95 bg-white text-black rounded-lg shadow-md border-t-[1px] border-gray-200 p-8 ">
          <div className="flex justify-between items-center mb-6">
            <img
              src="assets/images/fg-images/web-logo.png"
              alt="Ride Classy"
              className="h-5"
            />
            <span className="text-gray-500 text-xs font-medium">
              Billing details
            </span>
          </div>

          <h2 className="text-2xl font-bold mb-6 text-[#1a2025]">
            Select your payment method
          </h2>

          <form onSubmit={handleSubmit}>
            {/* First & Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={getInputClasses("firstName")}
                />
                {renderError("firstName")}
              </div>
              <div>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={getInputClasses("lastName")}
                />
                {renderError("lastName")}
              </div>
            </div>

            {/* Card Number */}
            <div className="mb-4 relative">
              <input
                type="text"
                name="cardNumber"
                placeholder="Card Number"
                value={formData.cardNumber}
                onChange={handleChange}
                className={getInputClasses("cardNumber")}
              />
              {formData.cardNumber.replace(/\s/g, "").length === 0 ? (
                <div className="absolute right-3 top-1/3 -translate-y-1/2 flex gap-2 text-lg text-gray-400 transition-all duration-200">
                  <FontAwesomeIcon icon={faCcVisa} />
                  <FontAwesomeIcon icon={faCcMastercard} />
                  <FontAwesomeIcon icon={faCcAmex} />
                  <FontAwesomeIcon icon={faCcDiscover} />
                </div>
              ) : (
                cardTypeIcon && (
                  <div className="absolute right-3 top-1/3 -translate-y-1/2 flex gap-2 text-lg text-gray-700 transition-all duration-200">
                    <FontAwesomeIcon icon={cardTypeIcon} />
                  </div>
                )
              )}
              {renderError("cardNumber")}
            </div>

            {/* Expiry & CVV */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <input
                  type="text"
                  name="expiry"
                  placeholder="MM/YY"
                  value={formData.expiry}
                  onChange={handleChange}
                  onKeyDown={handleExpiryKeyDown}
                  className={getInputClasses("expiry")}
                  maxLength={5}
                />
                {renderError("expiry")}
              </div>
              <div>
                <input
                  type="text"
                  name="cvv"
                  placeholder="CVV"
                  value={formData.cvv}
                  onChange={handleChange}
                  className={getInputClasses("cvv")}
                  maxLength={4}
                />
                {renderError("cvv")}
              </div>
            </div>

            {/* Email & Postal Code */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={getInputClasses("email")}
                />
                {renderError("email")}
              </div>
              <div>
                <input
                  type="text"
                  name="postalCode"
                  placeholder="Postal Code"
                  value={formData.postalCode}
                  onChange={handleChange}
                  className={getInputClasses("postalCode")}
                />
                {renderError("postalCode")}
              </div>
            </div>

            {/* Save Card */}
            <div className="flex items-start mb-6">
              <input
                type="checkbox"
                name="saveCard"
                checked={formData.saveCard}
                onChange={handleChange}
                className="mr-2 mt-1"
              />
              <div>
                <label className="font-semibold">Save Card</label>
                <p className="text-sm text-gray-500">
                  We will save this card for your convenience.
                </p>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-[#EFA765] text-white font-semibold py-2 rounded hover:bg-[#d68a47] transition"
            >
              Pay Now
            </button>
          </form>
        </div>
      </div>
      <div className="bg-[#1a2025] h-16 flex items-center justify-end pe-8 md:pe-20 ">
        <div className="flex items-center gap-2">
          <FontAwesomeIcon
            icon={faCircleQuestion}
            className="text-white text-sm"
          />
          <a className="text-white underline text-[10px]" href="">
            Need help?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Payment;
