// Swagger UI
type NonBodyParameter = Extract<Parameter, BodyParameter>;

// React
type ChildrenProps<Class> = Parameters<Class["props"]["children"]>[0];
type ChildrenProp<Class, Prop> = ChildrenProps<Class>[Prop];
