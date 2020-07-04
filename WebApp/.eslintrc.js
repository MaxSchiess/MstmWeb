module.exports = {
    extends: [
      'plugin:@angular-eslint/recommended'
    ],
    rules: {
      // ORIGINAL tslint.json -> "directive-selector": [true, "attribute", "app", "camelCase"],
      '@angular-eslint/directive-selector': [
        'error',
        { type: 'attribute', prefix: 'mstm', style: 'camelCase' },
      ],
  
      // ORIGINAL tslint.json -> "component-selector": [true, "element", "app", "kebab-case"],
      '@angular-eslint/component-selector': [
        'error',
        { type: 'element', prefix: 'mstm', style: 'kebab-case' },
      ],
    },
    
  };