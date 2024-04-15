import { defineDesignTokens } from '@contentful/experiences-sdk-react';

// register design tokens
defineDesignTokens({
  color: {
    black: '1d1e1d',
    white: 'f1f1f1',
    gold: 'c4a66f',
    beige: 'f4efe7',
    darkBrown: '1d1e1d',
    creme: 'dbc9af',
    yellow: 'fffad9'
  },
  widths: { XS: '400px', S: '800px', M: '1200px', L: '1980px' },
  fontSize: { XS: '12px', SM: '14px', MD: '16px', LG: '24px', XL: '32px' },
  textColor: { Dark: '#1d1e1d', Light: '#f1f1f1' },
});