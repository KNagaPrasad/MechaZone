module.exports = {
    // You can include various Jest configuration options here
  
    // Transform JavaScript and JSX files using Babel
    transform: {
      '^.+\\.(js|jsx)$': 'babel-jest',
    },
    transformIgnorePatterns: [
      '/node_modules/',
      '\\.(css|less|scss|png|jpg|jpeg|gif|svg)$', // Add image file extensions as needed
    ],
    moduleNameMapper: {
      '\\.(css|less|scss)$': '<rootDir>/mockCSS.js', // Use <rootDir> to refer to the project root
      '\\.(png|jpg|jpeg|gif|svg)$': '<rootDir>/mockImage.js',
      "\\.(css|less|scss|sass)$": "identity-obj-proxy" 
    },
    
    testEnvironment: "jsdom",
    
    // You can specify test patterns, file paths, and more
    testRegex: '(/_tests_/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?|cjs)$',
  
  };