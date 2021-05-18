import { getEmployees, getOrders } from './database.js';

// Get copy of state for use in this module
const employees = getEmployees();
const orders = getOrders();

export const Employees = () => {
  let html = '<ul>';

  for (const employee of employees) {
    html += `<li id="employee--${employee.id}">${employee.name}</li>`;
  }

  html += '</ul>';

  return html;
};

document.addEventListener(
  'click',
  (clickEvent) => {
    const itemClicked = clickEvent.target;
    if (itemClicked.id.startsWith('employee')) {
      const [, employeeId] = itemClicked.id.split('--');

      for (const employee of employees) {
        if (employee.id === parseInt(employeeId)) {

          const employeeOrders = orders.filter(  //the filter method outputs an array that includes true orders for that employee
            (order) => { //order as parameter
              if (order.employeeId === employee.id) { //if employee id in order strictly equals employee id
                return true; //return true which will then push that order into an array for that specific employee
              }
            }
          );
          let count = employeeOrders.length; //can place count below for total orders or can place employeeOrders.length
          window.alert(` ${employee.name} sold ${count} products `);
        }
      }
    }
  }
);

//ADD PRODUCTS SOLD AND GIVE TOTAL
// ----------------------------------
//FIND THE EMPLOYEE
//FIND ALL ORDER EMPLOYEEID MATCHES
//PLACE ALL ORDERS FROM THAT EMPLOYEEID MATCH INTO AN ARRAY
//RETURN TOTAL ARRAY LENGTH

// const totalSold = () => {
//   let countSold;
//   let employeeSold = [];

//   for (const employee of employees) {
//     if (employee.id === orders.employeeId) {
//       employeeSold.push(orders);
//     }
//   }
//   countSold = employeeSold.length;
//   return countSold; //#
// };