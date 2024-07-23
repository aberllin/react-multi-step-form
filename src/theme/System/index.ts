import { generateMedia, MediaGenerator } from 'styled-media-query';
import { SystemBreakpoint, SystemSize, SystemBreakpointMap } from './tokens';
import { SystemTokens } from '../index';
import type { SystemColorPalette, SystemFontWeight } from '..';

export default class DesignSystem {
  private ds: SystemTokens;

  public mq: MediaGenerator<SystemBreakpointMap, DesignSystem>;

  constructor(tokens: SystemTokens) {
    this.ds = tokens;
    this.mq = generateMedia(this.ds.breakpoints);
  }

  public fontSize(size: SystemSize): string {
    const currentBp = this.getCurrentBreakpoint();
    const value = this.ds.type.sizes[currentBp][size];

    return value;
  }

  public fontWeight(weight: SystemFontWeight): number {
    return this.ds.type.fontWeight[weight];
  }

  public space(val: SystemSize): string {
    const currentBp = this.getCurrentBreakpoint();
    const value = this.ds.spacing.scale[currentBp][val];

    return value;
  }

  public color(variant: keyof SystemColorPalette): string {
    return this.ds.colors.colorPalette[variant];
  }

  public bp(breakpoint: SystemBreakpoint): string {
    return this.ds.breakpoints[breakpoint];
  }

  public getCurrentBreakpoint(): SystemBreakpoint {
    const breakpoints = this.ds.breakpoints;
    const keys = Object.keys(breakpoints) as Array<SystemBreakpoint>;

    const currentBp = keys.filter(
      key =>
        global.window.matchMedia(`(max-width: ${breakpoints[key]})`).matches,
    );

    return currentBp[0] || keys[keys.length - 1];
  }
}
