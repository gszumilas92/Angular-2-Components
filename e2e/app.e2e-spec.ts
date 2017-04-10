import { Design1Page } from './app.po';

describe('design1 App', function() {
  let page: Design1Page;

  beforeEach(() => {
    page = new Design1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
