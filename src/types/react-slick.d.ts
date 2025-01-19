// declare module "react-slick" {
//     const Slider: any;
//     export default Slider;
// }
import { ComponentType } from "react";

declare module "react-slick" {
  const Slider: ComponentType<any>; // Use ComponentType to define React components
  export default Slider;
}

