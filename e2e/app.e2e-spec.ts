import { ChaiWallahPage } from './app.po';

describe('chai-wallah App', () => {
  let page: ChaiWallahPage;

  beforeEach(() => {
    page = new ChaiWallahPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
