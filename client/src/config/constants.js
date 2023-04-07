import { swatch, fileIcon, ai, logoShirt, stylishShirt,download } from "../assets";
import {faArrowsToDot} from  '@fortawesome/free-solid-svg-icons';
import { faArrowRotateForward } from "@fortawesome/free-solid-svg-icons";
import { faArrowRotateBackward } from "@fortawesome/free-solid-svg-icons";
export const EditorTabs = [
  {
    name: "colorpicker",
    icon: swatch,
  },
  {
    name: "filepicker",
    icon: fileIcon,
  },
  {
    name: "aipicker",
    icon: ai,
  },

];
export const DownloadTabData=  
    {name:"download",
    icon:download }

export const FilterTabs = [
  {
    name: "logoShirt",
    icon: logoShirt,
  },
  {
    name: "stylishShirt",
    icon: stylishShirt,
  },
  
];
export const DirectionTabs=[
  {name:"left",
  icon: faArrowRotateBackward,
  },
  {
    name:"center",
    icon: faArrowsToDot,
  },
  {name:"right",
  icon: faArrowRotateForward,}
]

export const DecalTypes = {
  logo: {
    stateProperty: "logoDecal",
    filterTab: "logoShirt",
  },
  full: {
    stateProperty: "fullDecal",
    filterTab: "stylishShirt",
  },
};
