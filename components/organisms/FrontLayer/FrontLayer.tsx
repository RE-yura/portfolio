import React, { useEffect } from "react";
import { inject, observer } from "mobx-react";
import MapModal from "../../molecules/MapModal";
import { FrontView } from "../../../config/FrontView";

interface IProps {
  viewType: FrontView;
}

const FrontLayerController = (props: IProps) => {
  switch (props.viewType) {
    case FrontView.Map:
      return <MapModal />;
    default:
      return null;
  }
};

export default FrontLayerController;
