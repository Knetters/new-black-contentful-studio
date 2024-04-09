import { defineComponents } from '@contentful/experiences-sdk-react';
import { Button } from '../lib/components/Button';
import { TopLine } from '../lib/components/TopLine';
import { LogoBar } from '../lib/components/LogoBar';
import { Navbar } from '../lib/components/Navbar';
import { Message } from '../lib/components/Message';

defineComponents([
  {
    component: Button,
    definition: {
      id: 'button',
      name: 'Button',
      category: 'UI',
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
  },
  {
    component: LogoBar,
    definition: {
      id: 'logobar',
      name: 'Logo bar',
      category: 'Header',
      variables: {
        text: {
          displayName: 'Text',
          type: 'Text',
          defaultValue: '',
        },
      },
    },
  },
  {
    component: Navbar,
    definition: {
      id: 'navbar',
      name: 'Nav bar',
      category: 'Header',
      variables: {
        text: {
          displayName: 'Text',
          type: 'Text',
          defaultValue: '',
        },
      },
    },
  },
  {
    component: Message,
    definition: {
      id: 'message',
      name: 'message',
      category: 'UI',
      variables: {
        message: {
          displayName: 'Message',
          type: 'Text',
          defaultValue: 'message',
        },
        linkUrl: {
          displayName: 'URL',
          type: 'Text',
          defaultValue: '#',
        },
        linkText: {
          displayName: 'text',
          type: 'Text',
          defaultValue: 'link',
        },
      },
    },
  }
]);