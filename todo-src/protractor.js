var switchElem = element(by.css('[ng-switch]'));
var select = element(by.model('selection'));

it('should start in low', function () {
  expect(switchElem.getText()).toMatch(/someday/);
});
it('should change to medium', function () {
  select.all(by.css('option')).get(1).click();
  expect(switchElem.getText()).toMatch(/tomorrow/);
});
it('should change to top', function () {
  select.all(by.css('option')).get(2).click();
  expect(switchElem.getText()).toMatch(/now/);
});
it('should select default', function () {
  select.all(by.css('option')).get(3).click();
  expect(switchElem.getText()).toMatch(/default/);
});