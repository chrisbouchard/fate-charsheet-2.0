export interface HalLinkObject {
  href: string;
}

export class HalObject {
  embedded: Map<string, Array<HalObject>>;
  links: Map<string, Array<HalLinkObject>>;
  resource: any;

  constructor(halJson: any) {
    this.resource = {};

    for (let [key, value] of halJson.entries()) {
      switch (key) {
        case '_embedded':
          /* Propagate HalObject into the embedded objects. We need to make sure we wind up with an Array. */
          this.embedded = new Map(
            value.entries().map(([k, v]) => [k, Array.isArray(v) ? v.map(x => new HalObject(x)) : [new HalObject(v)]])
          );
          break;

        case '_links':
          /* We need to make sure we wind up with an Array. */
          this.links = new Map(
            value.entries().map(([k, v]) => [k, Array.isArray(v) ? v : [v]])
          );
          break;

        default:
          this.resource[key] = value;
          break;
      }
    }

    if (!this.embedded) {
      this.embedded = new Map();
    }

    if (!this.links) {
      this.links = new Map();
    }
  }
}
