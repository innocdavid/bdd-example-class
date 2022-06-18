module.exports = {
  default: '-f @cucumber/pretty-formatter --publish-quiet',
  report: '--format html:./cucumber-report.html',
  project: 'calcFeatures -r calcFeatures/calcSteps',
  calc: 'calcFeatures/calc.feature -r calcFeatures/calcSteps',
  gui: 'calcFeatures/gui.feature -r calcFeatures/calcSteps',
  atm: 'atm-features/ -r atm-features/atm-steps',
  success: '-t @Success',
  withdraw: '-t @Withdraw',
};
