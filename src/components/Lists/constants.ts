interface CommonAttributes {
  label: string;
  color: string;
}

export type ListVariation = {
  variation: string;
} & CommonAttributes

export type ListTag = {} & CommonAttributes

export type ListItem = {} & CommonAttributes

export type MilkRowConfig = {
  component: string,
  props: Object
}

