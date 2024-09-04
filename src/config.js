module.exports = {
  email: 'a.laoubi@abl-ing.com',

  socialMedia: [
    {
      name: 'Twitter',
      url: '',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/company/be-lefi/about/?viewAsMember=true',
    },
  ],

  navLinks: [
    {
      name: 'QUI SOMME NOUS',
      url: '/#about',
    },

    {
      name: 'COMPÉTENCES ET MISSION',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  colors: {
    green: '#ff2003',
    navy: '#191970',
    darkNavy: '#191970',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
