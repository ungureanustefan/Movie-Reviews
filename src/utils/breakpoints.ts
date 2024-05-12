// breakpoints: width
const width = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tabletS: "540px",
  tabletM: "768px",
  tabletL: "824px",
  laptop: "1024px",
  laptopM: "1280px",
  laptopL: "1440px",
  desktop: "2560px",

  navBar: "620px", // needs to be updated when adding new elements to the navBar
};

// breakpoints: deviceMaxWidth
export const deviceMaxWidth = {
  mobileS: `(max-width: ${width.mobileS})`,
  mobileM: `(max-width: ${width.mobileM})`,
  mobileL: `(max-width: ${width.mobileL})`,
  tabletS: `(max-width: ${width.tabletS})`,
  tabletM: `(max-width: ${width.tabletM})`,
  tabletL: `(max-width: ${width.tabletL})`,
  laptop: `(max-width: ${width.laptop})`,
  laptopM: `(max-width: ${width.laptopM})`,
  laptopL: `(max-width: ${width.laptopL})`,
  desktop: `(max-width: ${width.desktop})`,
  navBar: `(max-width: ${width.navBar})`,
};

// breakpoints: deviceMinWidth
export const deviceMinWidth = {
  mobileS: `(min-width: ${width.mobileS})`,
  mobileM: `(min-width: ${width.mobileM})`,
  mobileL: `(min-width: ${width.mobileL})`,
  tabletS: `(min-width: ${width.tabletS})`,
  tabletM: `(min-width: ${width.tabletM})`,
  tabletL: `(min-width: ${width.tabletL})`,
  laptop: `(min-width: ${width.laptop})`,
  laptopM: `(min-width: ${width.laptopM})`,
  laptopL: `(min-width: ${width.laptopL})`,
  desktop: `(min-width: ${width.desktop})`,
  navBar: `(min-width: ${width.navBar})`,
};
