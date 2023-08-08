/* eslint-disable no-prototype-builtins */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import 'steelseries';
import type {
  AltimeterProps,
  BatteryProps,
  CompassProps,
  HorizonProps,
  LevelProps,
  LightBulbProps,
  LightLedProps,
  OdometerProps,
  StopWatchProps,
  TrafficLightProps,
  WindDirectionProps,
} from './types';

/**
 * __create a react component from a web component__
 * - filters out props with falsy values
 * @param tag the web component tag
 * @returns a react component
 */
export function wrap<T>(tag: string) {
  const component: React.FC<T> = props => {
    const filteredProps: any = {};
    for (const key in props) {
      if ((props as any).hasOwnProperty(key)) {
        const element = props[key];
        if (element !== undefined && element !== null && element !== false) {
          filteredProps[key] = element;
        }
      }
    }
    return React.createElement(tag, filteredProps as React.Attributes);
  };
  return component;
}

export const Steelseries = {
  Altimeter: wrap<AltimeterProps>('steelseries-altimeter'),
  Battery: wrap<BatteryProps>('steelseries-battery'),
  Compass: wrap<CompassProps>('steelseries-compass'),
  Horizon: wrap<HorizonProps>('steelseries-horizon'),
  Level: wrap<LevelProps>('steelseries-level'),
  LightBulb: wrap<LightBulbProps>('steelseries-lightbulb'),
  LightLed: wrap<LightLedProps>('steelseries-led'),
  Odometer: wrap<OdometerProps>('steelseries-odometer'),
  StopWatch: wrap<StopWatchProps>('steelseries-stopwatch'),
  TrafficLight: wrap<TrafficLightProps>('steelseries-trafficlight'),
  WindDirection: wrap<WindDirectionProps>('steelseries-wind-direction'),
};

export default Steelseries;
