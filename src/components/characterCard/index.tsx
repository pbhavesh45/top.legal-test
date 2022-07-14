import React, { useState } from "react";

import CardField from "../cardField";
import StatusIndicator from "../statusIndicator";
import { Character } from "../../models/common/types";

import "./styles.scss";

const rootClassName = "rick-morty-character-card";
interface Props {
  character: Character;
}

const CharacterCard = (props: Props) => {

  return (
    <div className={rootClassName}>
      <div className={`${rootClassName}__image-wrapper`}>
        <img
          src={props.character.image}
          alt={props.character.name}
          data-testid="character-card-image"
        />
      </div>
      <div className={`${rootClassName}__details`}>
        <div
          className={`${rootClassName}__name`}
          title={props.character.name}
          data-testid="character-card-name"
        >
          {props.character.name}
        </div>
        <div
          className={`${rootClassName}__value`}
          data-testid="character-card-species"
        >
          <StatusIndicator status={props.character.status} />
          {props.character.species}
        </div>
        <CardField label="Origin" value={props.character.origin.name} />
        <CardField
          label="Last location"
          value={props.character.location.name}
          title="Click for more info on location"
        />
        <CardField
          label="Appears on"
          value={`${props.character.episode.length} chapters`}
          title="Click for more info on episodes"
        />
      </div>
    </div>
  );
};

export default CharacterCard;
