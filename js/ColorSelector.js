import React from 'react';

import { select } from '@wordpress/data';
import { ColorPalette } from '@wordpress/components';

export function createColorClass(slug, prop) {
  if (!slug || !prop) {
    return null;
  }
  return "has-" + slug + "-" + prop;
}

export class ColorSelector extends React.Component {
  constructor(props) {
    super(props);
    this.label = props.label;
    this.allowGradients = Boolean(props.allowGradients); // TODO
    this.callback = props.onChange; // {value, slug = null} => {}

    this.state = {
      value: props.value,
    }
  }

  render() {
    let settings = select("core/block-editor").getSettings();

    return (
      <>
        <p>{ this.label }</p>
        <ColorPalette
          colors = { settings.colors }
          disableCustomColors = { settings.disableCustomColors }
          clearable = { !settings.disableCustomColors }
          value = { this.state.value }
          onChange = { (c) => {
            let color = settings.colors.filter( (obj) => obj.color === c)[0];
            this.setState( { value: c } );
            this.callback( {
              color: c,
              slug: color ? color.slug : null,
            } );
          }}
        />
      </>
    );
  }
}