import { configure } from '@storybook/react';

function loadStories() {
  require('../App/Components/Stories');
}

configure(loadStories, module);
