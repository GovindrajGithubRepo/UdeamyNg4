import { UdemyNg4Page } from './app.po';

describe('udemy-ng4 App', () => {
  let page: UdemyNg4Page;

  beforeEach(() => {
    page = new UdemyNg4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
