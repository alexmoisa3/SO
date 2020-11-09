import { browser, element, by } from 'protractor';

describe('Two-way binding e2e tests', () => {

  beforeEach(() => {
    browser.get('');
  });

  const minusButton = element.all(by.css('button')).get(0);
  const plusButton = element.all(by.css('button')).get(1);
  const minus2Button = element.all(by.css('button')).get(2);
  const plus2Button = element.all(by.css('button')).get(3);

  it('should display Two-way Binding', () => {
    expect(element(by.css('h1')).getText()).toEqual('Two-way Binding');
  });

  it('should display four buttons', () => {
    expect(minusButton.getText()).toBe('-');
    expect(plusButton.getText()).toBe('+');
    expect(minus2Button.getText()).toBe('-');
    expect(plus2Button.getText()).toBe('+');
  });

  it('should change font size labels', async () => {
    await minusButton.click();
    expect(element.all(by.css('label')).get(0).getText()).toEqual('FontSize: 15px');
    expect(element.all(by.css('input')).get(0).getAttribute('value')).toEqual('15');

    await plusButton.click();
    expect(element.all(by.css('label')).get(0).getText()).toEqual('FontSize: 16px');
    expect(element.all(by.css('input')).get(0).getAttribute('value')).toEqual('16');

    await minus2Button.click();
    await expect(element.all(by.css('label')).get(2).getText()).toEqual('FontSize: 15px');
  });

  it('should display De-sugared two-way binding', () => {
    expect(element(by.css('h2')).getText()).toEqual('De-sugared two-way binding');
  });

});
