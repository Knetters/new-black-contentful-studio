import { defineComponents } from '@contentful/experiences-sdk-react';
import { Button } from '../lib/components/Button';

defineComponents([
  {
    component: Button,
    definition: {
      id: 'button',
      name: 'Button',
      category: 'UI elements',
      variables: {
        text: {
          displayName: 'Text',
          type: 'Text',
          defaultValue: 'Click me!',
        },
      },
    },
  }
]);