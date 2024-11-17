## Ember UI

A modern, lightweight design system built with Lit and Web Components.

### Installation

```bash
npm install @emberui/core
```

### Usage in React

1. First, install the required dependencies:

```bash
npm install @emberui/core @lit-labs/react
```

2. Create a wrapper to use Ember UI components in React:

```tsx
// src/components/ember-ui.tsx
import { createComponent } from '@lit-labs/react';
import React from 'react';
import {
  DsButton,
  DsInput,
  DsCard,
  DsBadge,
  DsTooltip,
  DsModal,
  DsSelect,
  DsSwitch
} from '@emberui/core';

export const Button = createComponent({
  tagName: 'ds-button',
  elementClass: DsButton,
  react: React,
  events: {
    onClick: 'click',
  },
});

export const Input = createComponent({
  tagName: 'ds-input',
  elementClass: DsInput,
  react: React,
  events: {
    onChange: 'change',
  },
});

export const Card = createComponent({
  tagName: 'ds-card',
  elementClass: DsCard,
  react: React,
});

export const Badge = createComponent({
  tagName: 'ds-badge',
  elementClass: DsBadge,
  react: React,
});

export const Tooltip = createComponent({
  tagName: 'ds-tooltip',
  elementClass: DsTooltip,
  react: React,
});

export const Modal = createComponent({
  tagName: 'ds-modal',
  elementClass: DsModal,
  react: React,
  events: {
    onClose: 'close',
  },
});

export const Select = createComponent({
  tagName: 'ds-select',
  elementClass: DsSelect,
  react: React,
  events: {
    onChange: 'change',
  },
});

export const Switch = createComponent({
  tagName: 'ds-switch',
  elementClass: DsSwitch,
  react: React,
  events: {
    onChange: 'change',
  },
});
```

3. Use the components in your React application:

```tsx
// src/App.tsx
import React, { useState } from 'react';
import {
  Button,
  Input,
  Card,
  Badge,
  Tooltip,
  Modal,
  Select,
  Switch
} from './components/ember-ui';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [switchChecked, setSwitchChecked] = useState(false);

  return (
    <div className="app">
      <h1>Ember UI Demo</h1>
      
      <div className="section">
        <h2>Buttons</h2>
        <Button>Primary Button</Button>
        <Button variant="secondary">Secondary Button</Button>
        <Button variant="outlined">Outlined Button</Button>
      </div>

      <div className="section">
        <h2>Form Controls</h2>
        <Input 
          label="Username" 
          placeholder="Enter username"
          onChange={(e) => console.log(e.detail.value)} 
        />
        
        <Select
          label="Choose option"
          options={[
            { value: '1', label: 'Option 1' },
            { value: '2', label: 'Option 2' }
          ]}
          onChange={(e) => console.log(e.detail.value)}
        />

        <Switch
          label="Enable feature"
          checked={switchChecked}
          onChange={(e) => setSwitchChecked(e.detail.checked)}
        />
      </div>

      <div className="section">
        <h2>Components</h2>
        <Badge>New</Badge>
        
        <Tooltip text="Helpful information">
          <Button>Hover me</Button>
        </Tooltip>

        <Button onClick={() => setIsModalOpen(true)}>Open Modal</Button>
        <Modal 
          open={isModalOpen} 
          title="Example Modal"
          onClose={() => setIsModalOpen(false)}
        >
          <p>Modal content goes here</p>
          <div slot="footer">
            <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
              Close
            </Button>
            <Button>Confirm</Button>
          </div>
        </Modal>
      </div>

      <div className="section">
        <h2>Cards</h2>
        <Card 
          title="Feature Card"
          subtitle="A brief description"
        >
          <p>Card content goes here</p>
          <div slot="footer">
            <Button>Learn More</Button>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default App;
```

### Features

- 🎨 Modern, clean design
- 🌙 Dark mode support
- ♿️ Accessible components
- 📱 Responsive and mobile-friendly
- 🎯 TypeScript support
- ⚡️ Lightweight and performant
- 🔧 Customizable via CSS variables

### Available Components

- Button
- Input
- Card
- Badge
- Tooltip
- Modal
- Select
- Switch

### Customization

You can customize the design system using CSS variables. Example:

```css
:root {
  --ds-color-primary: #ff0000;
  --ds-color-primary-hover: #cc0000;
  --ds-font-family: 'Your Font', sans-serif;
}
```

### Browser Support

Ember UI works in all modern browsers that support Web Components.