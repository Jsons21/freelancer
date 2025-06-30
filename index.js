/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

const $average = document.createElement(`table`);
document.querySelector(`#app`).appendChild($average);

const $table = document.createElement(`table`);
document.querySelector("#app").appendChild($table);

let salarySum = 0;
let freelancerCount = 0;

const averageRow = document.createElement(`tr`);
$table.appendChild(averageRow);
const averageLabel = document.createElement(`td`);
averageLabel.innerText = `Average Salary`;
const averageValue = document.createElement(`td`);
averageValue.innerText = `$0.00`;
averageRow.appendChild(averageValue);
averageRow.appendChild(averageLabel);
$average.appendChild(averageRow);

const freelancerInfo = (Freelancer) => {
  salarySum += Freelancer.salary;
  freelancerCount++;
  const average = salarySum / freelancerCount;

  const tableRow = document.createElement(`tr`);
  const nameData = document.createElement(`td`);
  const occupationData = document.createElement(`td`);
  const priceData = document.createElement(`td`);

  nameData.innerText = Freelancer.worker;
  occupationData.innerText = Freelancer.job;
  priceData.innerText = Freelancer.salary;

  tableRow.appendChild(nameData);
  tableRow.appendChild(occupationData);
  tableRow.appendChild(priceData);
  $table.appendChild(tableRow);

  averageValue.innerText = `$${average.toFixed(2)}`;
};

const Freelancer = () => {
  const worker = NAMES[Math.floor(Math.random() * NAMES.length)];
  const job = OCCUPATIONS[Math.floor(Math.random() * OCCUPATIONS.length)];
  const salary =
    Math.floor(Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min + 1)) +
    PRICE_RANGE.min;
  let Freelancer = {
    worker: worker,
    job: job,
    salary: salary,
  };
  return Freelancer;
};

setInterval(() => freelancerInfo(Freelancer()), 5000);
