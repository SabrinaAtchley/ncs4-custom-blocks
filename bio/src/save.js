import { InnerBlocks } from '@wordpress/block-editor';

import { ImageSave } from '../../js/ImageControl.js';
import Popup from '../../popup/src/popup.js';

export default function Save(props) {
  let blockProps = props.blockProps;
  let attributes = props.attributes;

  return (
    <div {...blockProps }
      className = {
        [
          "ncs4-bio",
          Popup.className,
          blockProps.className,
        ].join(' ')
      }
      style = {{
        textAlign: (attributes.alignment != "none") ? attributes.alignment : null,
      }}
    >
      <BioProfile
        img = { attributes.img }
        //name = { attributes.name }
        name = { attributes.fullName }
        position = { attributes.position }
        credentials = { attributes.credentials }
        //phone = { attributes.phone }
        //email = { attributes.email }
        alignment = { attributes.alignment }
      />
      <Popup
        attributes = { attributes }
        backend = { props.backend }
      >
        <Popup.Header>
          <BioHeader
            img = { attributes.img }
            name = { attributes.fullName }
            position = { attributes.position }
            credentials = { attributes.credentials }
            phone = { attributes.phone }
            email = { attributes.email }
          />
        </Popup.Header>
        <Popup.Body>
          { !props.backend &&
            <InnerBlocks.Content/>
          }
        </Popup.Body>
      </Popup>
      { props.backend &&
        <InnerBlocks/>
      }
    </div>
  );
}


function BioProfile(props) {

  return (
    <>
      <div className = "ncs4-bio-col ncs4-bio-col1">
        <ImageSave
          className = "ncs4-bio-img"
          img = { props.img }
          align = { (props.alignment == "none") ? "left" : props.alignment }
          style = {{
            marginLeft: (props.alignment == "left" || props.alignment == "none")
              ? 0 : "auto",
            marginRight: (props.alignment == "right") ? 0 : "auto"
          }}
        />
      </div>
      <div className = "ncs4-bio-col ncs4-bio-col2">
        <h5 className = "ncs4-bio-name">
          <strong>{ props.name }
            { props.credentials && (
              <>, { props.credentials }</>
            )}
          </strong>
        </h5>
        <p className = "ncs4-bio-position">
          { props.position }
        </p>
        { (props.phone || props.email) && (
          <p className = "ncs4-bio-contact-info">
            { props.phone && (
              <a
                className = "ncs4-bio-phone"
                href = { "tel:" + props.phone }
              >
                { props.phone }
              </a>
            )}
            { props.phone && props.email && (
              <> | </>
            )}
            { props.email && (
              <a
                className = "ncs4-bio-email"
                href = { "mailto:" + props.email }
              >
                { props.email }
              </a>
            )}
          </p>
        )}
      </div>
    </>
  );
}

function BioHeader(props) {

  return (
    <>
      <div className = "ncs4-bio-header">
        <BioProfile {...props}/>
      </div>
      <hr class="ncs4-bio-header-seperator"/>
    </>
  );
}
