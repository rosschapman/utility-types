// Swagger UI
type NonBodyParameter = Extract<Parameter, BodyParameter>;

// React
type ChildrenProps<Props> = Parameters<Props["children"]>[0];
type ChildrenProp<Props, Prop> = ChildrenProps<Props>[Prop];
