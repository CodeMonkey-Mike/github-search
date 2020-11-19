export const mobileScreen = window.matchMedia('(max-width: 600px)');

const screenSize = {
  mobileS: 359,
  mobileM: 479,
  mobileL: 599,
  tabletPortrait: 767,
  tablet: 991,
  laptop: 1199,
  desktop: 1200,
  minMobileS: 360,
  minMobileM: 480,
  minMobileL: 600,
  minTabletPortrait: 768,
  minTabletLand: 992,
  minLaptop: 1200,
};

export const mediaDevice = {
  mobileS: `(max-width: ${screenSize.mobileS / 16}em)`,
  mobileM: `(max-width: ${screenSize.mobileM / 16}em)`,
  mobileL: `(max-width: ${screenSize.mobileL / 16}em)`,
  tabletPortrait: `(max-width: ${screenSize.tabletPortrait / 16}em)`,
  tablet: `(max-width: ${screenSize.tablet / 16}em)`,
  laptop: `(max-width: ${screenSize.laptop / 16}em)`,
  minMobileS: `(min-width: ${screenSize.minMobileS / 16}em)`,
  minMobileM: `(min-width: ${screenSize.minMobileM / 16}em)`,
  minMobileL: `(min-width: ${screenSize.minMobileL / 16}em)`,
  minTabletPortrait: `(min-width: ${screenSize.minTabletPortrait / 16}em)`,
  minTabletLand: `(min-width: ${screenSize.minTabletLand / 16}em)`,
  minLaptop: `(min-width: ${screenSize.minLaptop / 16}em)`,
  desktop: `(min-width: ${screenSize.desktop / 16}em)`,
};
