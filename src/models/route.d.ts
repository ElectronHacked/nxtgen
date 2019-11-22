export interface IRoute {
  name: string;
  icon: string;
  linkTo: string;
  displayName: string;
  hide?: boolean;
  children?: IRoute[];
}
