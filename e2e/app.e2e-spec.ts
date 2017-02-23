import { AngularTourOfHeroTutorialPage } from './app.po';

describe('angular-tour-of-hero-tutorial App', () => {
  let page: AngularTourOfHeroTutorialPage;

  beforeEach(() => {
    page = new AngularTourOfHeroTutorialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
