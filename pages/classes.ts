abstract class Department {
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {}

  static createEmployee(name: string) {
    return { name: name };
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string): void {
    this.employees.push(employee);
  }

  printEmployeesInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }

  describe() {
    console.log('this is IT Dep');
  }
}

const it = new ITDepartment('d1', ['Dima', 'Vasya', 'Petya']);

it.addEmployee('Josh');
it.addEmployee('Rebecca');
it.addEmployee('Chris');

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No report found.');
  }

  private constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.reports = reports;
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment('d2', []);
    return this.instance;
  }

  describe() {
    console.log('this is Acc Dep' + this.employees);
  }
  addEmployee(employee: string) {
    this.employees.push(`this is our new ${employee}`);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

const accounting = AccountingDepartment.getInstance();

const employee1 = Department.createEmployee('Dima');

accounting.addEmployee('Josh');
accounting.addEmployee('Rebecca');
accounting.addEmployee('Chris');
accounting.addReport('Annual 2023');

accounting.mostRecentReport;

accounting.describe();
it.describe();
