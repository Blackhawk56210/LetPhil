/** @type {import('tailwindcss').Config} */
module.exports = {
    theme: {
      screens: {
        'mobile': '576px',
        // => @media (min-width: 576px) { ... }
  
        'tablet': '960px',
        // => @media (min-width: 960px) { ... }
  
        'computer': '1440px',
        // => @media (min-width: 1440px) { ... }
      },
    }
  }