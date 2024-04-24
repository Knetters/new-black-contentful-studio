import { defineComponents } from '@contentful/experiences-sdk-react';
import { Button } from '../lib/components/Button';
import { Message } from '../lib/components/Message';
import { FaqContainer } from '../lib/components/FaqContainer';
import { FaqItem } from '../lib/components/FaqItem';
import { CallToAction } from '../lib/components/CallToAction';
import { ActionBanner } from '../lib/components/ActionBanner';
defineComponents([
  {
    component: Button,
    definition: {
      id: 'button',
      name: 'Button',
      category: 'UI',
      builtInStlyes: ['cfMargin', 'cfPadding', 'cfBackgroundColor', 'cfWidth', 'cfTextColor'],
      variables: {
        text: {
          displayName: 'Text',
          type: 'Text',
          defaultValue: 'Click me!',
        },
        cfBackgroundColor: {
          displayName: 'Background color',
          type: 'Text',
          group: 'style',
          defaultValue: 'white',
        },
        cfWidth: {
          displayName: 'Size',
          type: 'Text',
          group: 'style',
          defaultValue: '100%',
        },
        cfPadding: {
          displayName: 'Padding',
          type: 'Text',
          group: 'style',
          defaultValue: '1rem',
        },
        cfTextColor: {
          displayName: 'Text color',
          type: 'Text',
          group: 'style',
          defaultValue: 'black',
        },
      }
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
  {
    component: ActionBanner,
    definition: {
      id: 'actionbanner',
      name: 'Action Banner',
      category: 'UI',
      builtInStlyes: ['cfMargin', 'cfWidth', 'cfFontSize'],
      variables: {
        title: {
          displayName: 'Title',
          type: 'Text',
          defaultValue: 'Title',
        },
        imageURL: {
          displayName: 'Image',
          type: 'Media',
        },
        cfWidth: {
          displayName: 'Width',
          type: 'Text',
          group: 'style',
          defaultValue: '100%'
        },
        cfHeight: {
          displayName: 'Height',
          type: 'Text',
          group: 'style',
          defaultValue: '30rem'
        },
        cfFontSize: {
          displayName: 'Text size',
          type: 'Text',
          group: 'style',
          defaultValue: 'LG'
        },
      },
      children: true,
    },
    options: { wrapComponent: false },
  },
]);

