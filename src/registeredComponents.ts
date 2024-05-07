import { defineComponents } from '@contentful/experiences-sdk-react';
import { Button } from '../lib/components/Button';
import { Message } from '../lib/components/Message';
import { FaqContainer } from '../lib/components/FaqContainer';
import { FaqItem } from '../lib/components/FaqItem';
import { CallToAction } from '../lib/components/CallToAction';
import { ActionBanner } from '../lib/components/ActionBanner';
import { FeaturedProduct } from '../lib/components/FeaturedProduct';
import { FeaturedProductGrid } from '../lib/components/FeaturedProductGrid';
import { ProductGrid } from '../lib/components/ProductGrid';

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
      },
    },
    options: { wrapComponent: false }
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
          defaultValue: '40rem'
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
  {
    component: FeaturedProduct,
    definition: {
      id: 'featuredproduct',
      name: 'Featured Product',
      category: 'UI',
      builtInStlyes: ['cfMargin', 'cfWidth', 'cfBackgroundColor', 'cfImageAsset', 'cfImageOptions'],
      variables: {
        title: {
          displayName: 'Title',
          type: 'Text',
          defaultValue: 'Title',
        },
        slug: {
          displayName: 'Slug',
          type: 'Text',
          defaultValue: 'slug',
        },
        imageURL: {
          displayName: 'Image',
          type: 'Media',
        },
        cfImageAsset: {
          displayName: 'Product Image',
          type: 'Media',
          defaultValue: '',
        },
        price: {
          displayName: 'Price',
          type: 'Number',
          defaultValue: '0.00',
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
          defaultValue: '40rem'
        },
      },
    },
    options: { wrapComponent: false },
  },
  {
    component: FeaturedProductGrid,
    definition: {
      id: 'featuredproductgrid',
      name: 'Featured Product Grid',
      category: 'UI',
      builtInStlyes: ['cfMargin', 'cfWidth', 'cfBackgroundColor' ],
      variables: {
        title: {
          displayName: 'Title',
          type: 'Text',
          defaultValue: 'Title',
        },
        cfWidth: {
          displayName: 'Width',
          type: 'Text',
          group: 'style',
          defaultValue: '100%'
        }
      },
      children: true,
    },
    options: { wrapComponent: false },
  },
  {
    component: ProductGrid,
    definition: {
      id: 'productgrid',
      name: 'Product Grid',
      category: 'UI',
      builtInStlyes: ['cfMargin', 'cfWidth', 'cfBackgroundColor' ],
      variables: {
        title: {
          displayName: 'Title',
          type: 'Text',
          defaultValue: 'Product grid',
        },
        slug: {
          displayName: 'Slug',
          type: 'Text',
        },
        productList: {
          displayName: 'Product list',
          type: 'Text',
        },
        cfWidth: {
          displayName: 'Width',
          type: 'Text',
          group: 'style',
          defaultValue: '100%'
        }
      },
      children: true,
    },
    options: { wrapComponent: false },
  },
]);

