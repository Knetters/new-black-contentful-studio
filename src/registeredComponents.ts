import { defineComponents } from '@contentful/experiences-sdk-react';
import { Button } from '../lib/components/Button';
import { TopLine } from '../lib/components/TopLine';
import { LogoBar } from '../lib/components/LogoBar';
import { Navbar } from '../lib/components/Navbar';
import { Message } from '../lib/components/Message';
import { TextBlock } from '../lib/components/TextBlock';
import { FaqContainer } from '../lib/components/FaqContainer';
import { FaqItem } from '../lib/components/FaqItem';
import { Footer } from '../lib/components/Footer';
import { CallToAction } from '../lib/components/CallToAction';

defineComponents([
  {
    component: Button,
    definition: {
      id: 'button',
      name: 'Button',
      category: 'UI',
      builtInStlyes: ['cfMargin', 'cfPadding', 'cfBackgroundColor'],
      variables: {
        text: {
          displayName: 'Text',
          type: 'Text',
          defaultValue: 'Click me!',
        },
        cfBackgroundColor: {
          displayName: 'Background',
          type: 'Text',
          defaultValue: 'creme',
          group: 'style',
        }
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
        links: {
          displayName: 'Links',
          type: 'Object',
          defaultValue: [{
            label: 'Veelgestelde vragen',
            url: '/faq'
          },{
            label: 'test',
            url: '/test'
          }],
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
          defaultValue: '/',
        },
        linkText: {
          displayName: 'text',
          type: 'Text',
          defaultValue: 'link',
        },
      },
    },
  },
  {
    component: TextBlock,
    definition: {
      id: 'textblock',
      name: 'TextBlock',
      category: 'Essentials',
      variables: {
        title: {
          displayName: 'Title',
          type: 'Text',
          defaultValue: 'Title',
        },
        content: {
          displayName: 'Content',
          type: 'Text',
          defaultValue: 'Content',
        }
      },
    },
  },
  {
    component: FaqContainer,
    definition: {
      id: 'faqcontainer',
      name: 'FaqContainer',
      category: 'UI',
      builtInStlyes: ['cfMargin', 'cfWidth'],
      variables: {
        title: {
          displayName: 'Title',
          type: 'Text',
          defaultValue: 'Title',
        },
        label: {
          displayName: 'Label',
          type: 'Text',
          defaultValue: '',
        },
        url: {
          displayName: 'URL',
          type: 'Text',
          defaultValue: '/',
        },
        cfWidth: {
          displayName: 'Size',
          type: 'Text',
          group: 'style',
          defaultValue: '100%'
        }
      },
      children: true,
    },
    options: { wrapComponent: false }
  },
  {
    component: FaqItem,
    definition: {
      id: 'faqitem',
      name: 'FaqItem',
      category: 'UI',
      variables: {
        question: {
          displayName: 'Question',
          type: 'Text',
          defaultValue: 'Question',
        },
        answer: {
          displayName: 'Answer',
          type: 'Text',
          defaultValue: 'Answer',
        }
      },
    },
    options: { wrapComponent: false }
  },
  {
    component: Footer,
    definition: {
      id: 'footer',
      name: 'Footer',
      category: 'Footer',
      variables: {
        title: {
          displayName: 'Title',
          type: 'Text',
          defaultValue: 'Title',
        },
        content: {
          displayName: 'Content',
          type: 'Text',
          defaultValue: 'Content',
        }
      },
    },
  },
  {
    component: CallToAction,
    definition: {
      id: 'calltoaction',
      name: 'Call to action',
      category: 'UI',
      builtInStlyes: ['cfMargin', 'cfWidth', 'cfBackgroundColor'],
      variables: {
        title: {
          displayName: 'Title',
          type: 'Text',
          defaultValue: 'Title',
        },
        message: {
          displayName: 'Message',
          type: 'Text',
          defaultValue: 'Message',
        },
        label: {
          displayName: 'Label',
          type: 'Text',
          defaultValue: 'Label',
        },
        url: {
          displayName: 'URL',
          type: 'Text',
          defaultValue: '/',
        },
        cfWidth: {
          displayName: 'Size',
          type: 'Text',
          group: 'style',
          defaultValue: '100%'
        },
        cfBackgroundColor: {
          displayName: 'Background',
          type: 'Text',
          defaultValue: 'yellow',
          group: 'style',
        }
      },
      children: true,
    },
    options: { wrapComponent: false }
  },
]);