import { configure } from '@storybook/react';

function loadStories() {
  require('../src/Components/Stories');
}

configure(loadStories, module);
