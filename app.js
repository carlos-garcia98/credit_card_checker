// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [
  valid1,
  valid2,
  valid3,
  valid4,
  valid5,
  invalid1,
  invalid2,
  invalid3,
  invalid4,
  invalid5,
  mystery1,
  mystery2,
  mystery3,
  mystery4,
  mystery5,
];

// Add your functions below:
// Step 1: Validate the credit card number, return true if valid, false if invalid
const validateCred = (arr) => {
  const copyOfArr = [];

  arr.forEach((elm) => {
    copyOfArr.push(elm);
  });

  const checkDigit = copyOfArr.pop();
  const reverseArr = copyOfArr.reverse();
  const doubledArr = [];

  for (let i = 0; i < reverseArr.length; i++) {
    if (i % 2 == 0) {
      let doubled = reverseArr[i] * 2;
      if (doubled > 9) {
        doubled -= 9;
        doubledArr.push(doubled);
      } else {
        doubledArr.push(doubled);
      }
    } else {
      doubledArr.push(reverseArr[i]);
    }
  }

  const sumOfAll = doubledArr.reduce((acc, currVal) => acc + currVal);

  return (sumOfAll + checkDigit) % 10 === 0;
};

// Step 2: Find invalid cards and return an array of invalid cards
const findInvalidCards = (nesteadArr) => {
  const invalidCardNums = nesteadArr.filter((arr) => {
    let isValid = validateCred(arr);
    if (!isValid) {
      return arr;
    }
  });
  return invalidCardNums;
};

// Step 3: Find the companies that have issued invalid cards. Returns an array of companies. If no company is found, return "Company not found". If there are multiple invalid cards from the same company, only return the company once.
const idInvalidCardCompanies = (neastedArr) => {
  const companies = [];
  const companiesInfo = [
    {
      name: "Amex",
      id: 3,
    },
    {
      name: "Visa",
      id: 4,
    },
    {
      name: "Mastercard",
      id: 5,
    },
    {
      name: "Discover",
      id: 6,
    },
  ];

  for (let i = 0; i < neastedArr.length; i++) {
    if (neastedArr[i][0] == companiesInfo[0].id) {
      if (!companies.includes(companiesInfo[0].name)) {
        companies.push(companiesInfo[0].name);
      }
    } else if (neastedArr[i][0] == companiesInfo[1].id) {
      if (!companies.includes(companiesInfo[1].name)) {
        companies.push(companiesInfo[1].name);
      }
    } else if (neastedArr[i][0] == companiesInfo[2].id) {
      if (!companies.includes(companiesInfo[2].name)) {
        companies.push(companiesInfo[2].name);
      }
    } else if (neastedArr[i][0] == companiesInfo[3].id) {
      if (!companies.includes(companiesInfo[3].name)) {
        companies.push(companiesInfo[3].name);
      }
    } else {
      console.log("Company not found");
    }
  }

  return companies;
};

// Output:
const invalidCards = findInvalidCards(batch);
console.log(idInvalidCardCompanies(invalidCards));