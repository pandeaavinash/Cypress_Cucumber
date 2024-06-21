
const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "cypress/cucumber-json",
  reportPath: "./cypress/reports/multiple-cucumber-html-report-html",
  metadata: {
    browser: {
      name: "chrome",
      version: "126",
    },
    device: "Local test machine",
    platform: {
      name:"avinash", 
      version: "version"
    },
  },
  customData: {
    title: "Run info",
    data: [
      { label: "Project", value: "Custom project" },
      { label: "Release", value: "1.2.3" },
      { label: "Cycle", value: "B11221.34321" },
      { label: "Execution Start Time", value: new Date().toLocaleTimeString() },
      { label: "Execution End Time", value: new Date().toLocaleString() },
    ],
  },
});