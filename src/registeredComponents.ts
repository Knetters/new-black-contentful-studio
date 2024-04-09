import { defineComponents } from '@contentful/experiences-sdk-react';
import { Button } from '../lib/components/Button';
import { TopLine } from '../lib/components/TopLine';

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
  },
  {
    component: TopLine,
    definition: {
      id: 'topline',
      name: 'Top line',
      category: 'Header',
      variables: {
        text: {
          displayName: 'Text',
          type: 'Text',
          defaultValue: 'Gratis standaard verzending vanaf €50 | Retourneren binnen 30 dagen',
        },
      },
    },
  }
]);