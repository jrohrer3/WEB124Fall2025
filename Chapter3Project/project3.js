//Joel Rohrer September 22 2025
'use strict';

// 1) A variable to store my full name
const fullName = 'Joel Rohrer';
console.log('fullName:', fullName);

// 2) A variable to store my desired annual salary
const desiredAnnualSalary = 85000; // numeric (dollars per year)
console.log('desiredAnnualSalary:', desiredAnnualSalary);

// 3) A variable to store my veteran status
const isVeteran = false;
console.log('isVeteran:', isVeteran);

// 4) An array to store the names of three of my friends
const friendNames = ['Ava Martinez', 'Samir Patel', 'Casey Nguyen'];
console.log('friendNames:', friendNames);

// 5) An array to store the desired annual salary for my three friends
// The order corresponds to friendNames above.
const friendDesiredSalaries = [72000, 63000, 58000];
console.log('friendDesiredSalaries:', friendDesiredSalaries);

// 6) A literal object to store the first name, last name, and desired annual salary of yet another friend
const anotherFriend = {
  firstName: 'Alex',
  lastName: 'Morgan',
  desiredSalary: 60000
};
console.log('anotherFriend:', anotherFriend);

// --- Small DOM injection so the page shows the answers too (not required by the spec, but helpful) ---
function safeText(elId, text) {
  const el = document.getElementById(elId);
  if (el) el.textContent = text;
}

document.addEventListener('DOMContentLoaded', function () {
  safeText('out-fullname', fullName);
  safeText('out-salary', desiredAnnualSalary.toLocaleString());
  safeText('out-veteran', isVeteran ? 'Yes (Veteran)' : 'No (Not a veteran)');
  safeText('out-friends', friendNames.join(', '));
  safeText('out-friends-salaries', friendDesiredSalaries.map(s => '$' + s.toLocaleString()).join(', '));
  safeText('out-friend-object', `${anotherFriend.firstName} ${anotherFriend.lastName} — $${anotherFriend.desiredSalary.toLocaleString()}`);

  // Also show the source of this JS file inside the <details> so the page is self-contained for review
  const scriptPreview = document.getElementById('script-preview');
  if (scriptPreview) {
    // Fetch is not necessary; we can inline the source as a string but to keep it simple,
    // build a short helpful summary instead.
    scriptPreview.textContent = [
      "// This file (script.js) declares the variables required by the exercise.",
      "// Each declaration is followed by console.log(...).",
      "// The variables declared are: fullName, desiredAnnualSalary, isVeteran,",
      "// friendNames (array), friendDesiredSalaries (array), anotherFriend (object).",
      "",
      "Open the browser console (F12) to see the exact console.log outputs."
    ].join('\n');
  }
});
