/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      // primary: '#00406c',
      // secondary: '#3a015c',
      // complementary: '#5c162e',
      // accent: '#35012c',
      // background: '#00111c',
      // white: '#ffffff',
      primary: '#1E555C',
      secondary: '#701C5C',
      complementary: '#BD263F',
      accent: '#590B3E',
      background: '#003233',
      white: '#ffffff',
      green: '#4C8C7A',
      red: '#A6213B',
      yellow: '#FFD700',
    },
    // titles: {
    //   'font-family': 'Arial, sans-serif',
    //   'font-style': 'normal',
    //   'font-weight': 600,
    //   'font-size': '34px',
    //   'line-height': '40px'
    // },
    // subtitle: {
    //   'font-family': 'Helvetica, Arial, sans-serif',
    //   'font-style': 'normal',
    //   'font-weight': 600,
    //   'font-size': '28px',
    //   'line-height': '34px'
    // },
    // body: {
    //   'font-family': 'Roboto, Arial, sans-serif',
    //   'font-style': 'normal',
    //   'font-weight': 400,
    //   'font-size': '16px',
    //   'line-height': '24px'
    // },
    // small: {
    //   'font-family': 'Roboto, Arial, sans-serif',
    //   'font-style': 'normal',
    //   'font-weight': 400,
    //   'font-size': '14px',
    //   'line-height': '20px'
    // },
    fontFamily: {
      titles: ['Arial, sans-serif'],
      subtitle: ['Helvetica, Arial, sans-serif'],
      body: ['Roboto, Arial, sans-serif'],
      small: ['Roboto, Arial, sans-serif']
    },


  },
  extend: {},

  plugins: [],
}

