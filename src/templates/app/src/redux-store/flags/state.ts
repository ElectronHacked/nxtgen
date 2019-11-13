export type IFlagProgressFlags = 'fetchPosts';
export type IFlagSucceededFlags = 'fetchPosts';
export type IFlagFailedFlags = 'fetchPosts';
export type IFlagActionedFlags = 'fetchPosts';

export interface IFlagsState {
  readonly isInProgress?: { [key in IFlagProgressFlags]?: boolean };
  readonly succeeded?: { [key in IFlagSucceededFlags]?: boolean };
  readonly failed?: { [key in IFlagFailedFlags]?: boolean };
  readonly actioned?: { [key in IFlagActionedFlags]?: boolean };
}
