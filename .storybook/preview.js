
import { ThemeProvider } from 'styled-components';

const customViewports = {
  kindleFire2: {
    name: 'Kindle Fire 2',
    styles: {
      width: '600px',
      height: '963px',
    },
  },
  kindleFireHD: {
    name: 'Kindle Fire HD',
    styles: {
      width: '533px',
      height: '801px',
    },
  },
};
export const decorators = [
  (Story) => (
    <ThemeProvider theme={{primy:'default'}}>
      <Story />
    </ThemeProvider>
  ),
];


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
   options: {
    storySort: {
      order: ['Example', ['Header', 'Button'], 'Components'],
    },
  },
  viewport: {defaultViewport: 'iphonex' },
//   backgrounds: {
//     default: 'twitter',
//     values: [
//         { 
//             name: 'twitter', 
//             value: '#00aced'
//         },
//         { 
//             name: 'facebook', 
//             value: '#3b5998' 
//         },
//       ],
// }
}
