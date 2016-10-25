import { Ng2WidgetWizardPage } from './app.po';

describe('ng2-widget-wizard App', function() {
  let page: Ng2WidgetWizardPage;

  beforeEach(() => {
    page = new Ng2WidgetWizardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
