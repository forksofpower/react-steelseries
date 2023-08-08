export type ColorValueHex = `#${string}`;

export enum FrameDesign {
  Anthracite = 'ANTHRACITE',
  BlackMetal = 'BLACK_METAL',
  Brass = 'BRASS',
  Chrome = 'CHROME',
  GlossyMetal = 'GLOSSY_METAL',
  Gold = 'GOLD',
  Metal = 'METAL',
  ShinyMetal = 'SHINY_METAL',
  Steel = 'STEEL',
  TiltedBlack = 'TILTED_BLACK',
  TiltedGray = 'TILTED_GRAY',
}

export enum BackgroundColor {
  Anthracite = 'ANTHRACITE',
  Beige = 'BEIGE',
  Black = 'BLACK',
  Blue = 'BLUE',
  Brown = 'BROWN',
  BrushedMetal = 'BRUSHED_METAL',
  BrushedStainless = 'BRUSHED_STAINLESS',
  Carbon = 'CARBON',
  DarkGray = 'DARK_GRAY',
  Green = 'GREEN',
  LightGray = 'LIGHT_GRAY',
  Mud = 'MUD',
  PunchedSheet = 'PUNCHED_SHEET',
  Red = 'RED',
  SatinGray = 'SATIN_GRAY',
  Stainless = 'STAINLESS',
  Turned = 'TURNED',
  White = 'WHITE',
}

export enum ForegroundType {
  Type1 = 'TYPE1',
  Type2 = 'TYPE2',
  Type3 = 'TYPE3',
  Type4 = 'TYPE4',
  Type5 = 'TYPE5',
}

export enum KnobType {
  Standard = 'STANDARD_KNOB',
  Metal = 'METAL_KNOB',
}

export enum KnobStyle {
  Black = 'BLACK',
  Brass = 'BRASS',
  Silver = 'SILVER',
}

export enum LedColor {
  Blue = 'BLUE_LED',
  Cyan = 'CYAN_LED',
  Green = 'GREEN_LED',
  Magenta = 'MAGENTA_LED',
  Orange = 'ORANGE_LED',
  Red = 'RED_LED',
  White = 'WHITE_LED',
  Yellow = 'YELLOW_LED',
}

export enum LcdColor {
  Amber = 'AMBER',
  Beige = 'BEIGE',
  Black = 'BLACK',
  BlackRed = 'BLACKRED',
  Blue = 'BLUE',
  Blue2 = 'BLUE2',
  BlueBlack = 'BLUE_BLACK',
  BlueBlue = 'BLUE_BLUE',
  BlueDarkblue = 'BLUE_DARKBLUE',
  BlueGray = 'BLUE_GRAY',
  Darkblue = 'DARKBLUE',
  Darkgreen = 'DARKGREEN',
  Gray = 'GRAY',
  Green = 'GREEN',
  Lightblue = 'LIGHTBLUE',
  Lila = 'LILA',
  Orange = 'ORANGE',
  Red = 'RED',
  RedDarkred = 'RED_DARKRED',
  Sections = 'SECTIONS',
  Standard = 'STANDARD',
  StandardGreen = 'STANDARD_GREEN',
  White = 'WHITE',
  Yellow = 'YELLOW',
}

export enum PointerType {
  Type1 = 'TYPE1',
  Type2 = 'TYPE2',
  Type3 = 'TYPE3',
  Type4 = 'TYPE4',
  Type5 = 'TYPE5',
  Type6 = 'TYPE6',
  Type7 = 'TYPE7',
  Type8 = 'TYPE8',
  Type9 = 'TYPE9',
  Type10 = 'TYPE10',
  Type11 = 'TYPE11',
  Type12 = 'TYPE12',
  Type13 = 'TYPE13',
  Type14 = 'TYPE14',
  Type15 = 'TYPE15',
  Type16 = 'TYPE16',
}
export enum ColorDef {
  Black = 'BLACK',
  Blue = 'BLUE',
  Cyan = 'CYAN',
  Gray = 'GRAY',
  Green = 'GREEN',
  GreenLcd = 'GREEN_LCD',
  JugGreen = 'JUG_GREEN',
  Magenta = 'MAGENTA',
  Orange = 'ORANGE',
  Raith = 'RAITH',
  Red = 'RED',
  White = 'WHITE',
  Yellow = 'YELLOW',
}

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
  lcdColor?: LcdColor;
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
