/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html',
  ],
  theme: {
    fontFamily:{
      sans: ['Inter', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        avatar:"url('./image-homepage-profile.png')",
        'tc-blue-gradient': 'linear-gradient(45deg, #1D3B7D 0%, #4370BF 100%)',
        'tc-orange-gradient': 'linear-gradient(45deg, #F5C630 0%, #E36D32 100%)',
        'tc-orange-gradient2': 'linear-gradient(45deg, #E36D32 0%, #F5C630 100%)'
      }
    },
  },
  plugins: [],
}
