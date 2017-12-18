import { BookappPage } from './app.po';

describe('bookapp App', () => {
  let page: BookappPage;

  beforeEach(() => {
    page = new BookappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
