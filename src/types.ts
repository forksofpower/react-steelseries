export type ColorValueHex = `#${string}`;

export type FrameDesign =
  | 'ANTHRACITE'
  | 'BLACK_METAL'
  | 'BRASS'
  | 'CHROME'
  | 'GLOSSY_METAL'
  | 'GOLD'
  | 'METAL'
  | 'SHINY_METAL'
  | 'STEEL'
  | 'TILTED_BLACK'
  | 'TILTED_GRAY';

export type BackgroundColor =
  | 'ANTHRACITE'
  | 'BEIGE'
  | 'BLACK'
  | 'BLUE'
  | 'BROWN'
  | 'BRUSHED_METAL'
  | 'BRUSHED_STAINLESS'
  | 'CARBON'
  | 'DARK_GRAY'
  | 'GREEN'
  | 'LIGHT_GRAY'
  | 'MUD'
  | 'PUNCHED_SHEET'
  | 'RED'
  | 'SATIN_GRAY'
  | 'STAINLESS'
  | 'TURNED'
  | 'WHITE';

export type ForegroundType = 'TYPE1' | 'TYPE2' | 'TYPE3' | 'TYPE4' | 'TYPE5';
export type KnobType = 'STANDARD_KNOB' | 'METAL_KNOB';
export type KnobStyle = 'BLACK' | 'BRASS' | 'SILVER';
export type LedColor =
  | 'BLUE_LED'
  | 'CYAN_LED'
  | 'GREEN_LED'
  | 'MAGENTA_LED'
  | 'ORANGE_LED'
  | 'RED_LED'
  | 'WHITE_LED'
  | 'YELLOW_LED';

export type LCDColor =
  | 'AMBER'
  | 'BEIGE'
  | 'BLACK'
  | 'BLACKRED'
  | 'BLUE'
  | 'BLUE2'
  | 'BLUE_BLACK'
  | 'BLUE_BLUE'
  | 'BLUE_DARKBLUE'
  | 'BLUE_GRAY'
  | 'DARKBLUE'
  | 'DARKGREEN'
  | 'GRAY'
  | 'GREEN'
  | 'LIGHTBLUE'
  | 'LILA'
  | 'ORANGE'
  | 'RED'
  | 'RED_DARKRED'
  | 'SECTIONS'
  | 'STANDARD'
  | 'STANDARD_GREEN'
  | 'WHITE'
  | 'YELLOW';

export type PointerType =
  | 'TYPE1'
  | 'TYPE2'
  | 'TYPE3'
  | 'TYPE4'
  | 'TYPE5'
  | 'TYPE6'
  | 'TYPE7'
  | 'TYPE8'
  | 'TYPE9'
  | 'TYPE10'
  | 'TYPE11'
  | 'TYPE12'
  | 'TYPE13'
  | 'TYPE14'
  | 'TYPE15'
  | 'TYPE16';

export type ColorDef =
  | 'BLACK'
  | 'BLUE'
  | 'CYAN'
  | 'GRAY'
  | 'GREEN'
  | 'GREEN_LCD'
  | 'JUG_GREEN'
  | 'MAGENTA'
  | 'ORANGE'
  | 'RAITH'
  | 'RED'
  | 'WHITE'
  | 'YELLOW';

// common types
export interface Knob {
  knobStyle?: KnobStyle;
  knobType?: KnobType;
}
export interface Pointer {
  pointerColor?: ColorDef;
  pointerType?: PointerType;
}
export interface Lcd {
  digitalFont?: boolean;
  lcdColor?: LCDColor;
  lcdDecimals?: number;
  noLcdVisible?: boolean;
}
export interface Frame {
  backgroundColor?: BackgroundColor;
  foregroundType?: ForegroundType;
  frameDesign?: FrameDesign;
  noBackgroundVisible?: boolean;
  noForegroundVisible?: boolean;
  noFrameVisible?: boolean;
}
export interface TransitionTime {
  transitionTime?: number;
}

// prop types
export interface AltimeterProps extends Frame, Knob, Omit<Lcd, 'lcdDecimals'>, TransitionTime {
  size?: number;
  titleString?: string;
  unitAltPos?: boolean;
  unitString?: string;
  value?: number;
}
export interface BatteryProps extends TransitionTime {
  size?: number;
  value?: number;
}

export interface CompassProps extends Frame, Knob, Pointer, TransitionTime {
  degreeScale?: boolean;
  noPointSymbolsVisible?: boolean;
  noRoseVisible?: boolean;
  pointSymbols?: string[];
  rotateFace?: boolean;
  size?: number;
  value?: number;
}

export interface HorizonProps extends Omit<Frame, 'noBackgroundVisible' | 'backgroundColor'>, TransitionTime {
  pitch?: number;
  pointerColor?: ColorDef;
  roll?: number;
  size?: number;
}

export interface WindDirectionProps
  extends Frame,
    Knob,
    Omit<Lcd, 'lcdDecimals'>,
    Omit<Pointer, 'pointerType'>,
    TransitionTime {
  degreeScaleHalf?: boolean;
  lcdTitleStrings?: string[];
  noDegreeScale?: boolean;
  noPointSymbolsVisible?: boolean;
  pointSymbols?: string[];
  pointerColorAverage?: ColorDef;
  pointerTypeAverage?: PointerType;
  pointerTypeLatest?: PointerType;
  roseVisible?: boolean;
  size?: number;
  titleString?: string;
  transitionTime?: number;
  useColorLabels?: boolean;
  valueAverage?: number;
  valueLatest?: number;
}

export interface LightBulbProps {
  width?: number;
  height?: number;
  glowColor?: ColorValueHex;
  lightOn?: boolean;
}

export interface LightLedProps {
  size?: number;
  ledColor?: LedColor;
  ledOn?: boolean;
}

export interface OdometerProps extends TransitionTime {
  decimalBackColor?: ColorValueHex;
  decimalForeColor?: ColorValueHex;
  decimals?: number;
  digits?: number;
  font?: string;
  height?: number;
  value?: number;
  valueBackColor?: ColorValueHex;
  valueForeColor?: ColorValueHex;
}

export interface StopWatchProps extends Frame {
  pointerColor?: ColorDef;
  running?: boolean;
  seconds?: number;
  size?: number;
}

export interface TrafficLightProps {
  greenOn?: boolean;
  height?: number;
  redOn?: boolean;
  width?: number;
  yellowOn?: boolean;
}

export interface LevelProps extends Frame, TransitionTime {
  decimalsVisible?: boolean;
  pointerColor?: ColorDef;
  rotateFace?: boolean;
  size?: number;
  textOrientationFixed?: boolean;
  value?: number;
}
