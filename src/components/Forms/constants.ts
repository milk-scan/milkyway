type SchemaFields = {
    as: string,
    name: string,
    label: string,
    type: string,
    variation: 'regular',
    children: Array<{ 
        tag: string, 
        text: string, 
        childAttrs: Object 
    }>
    attrs: Object | any,
    placeholder?: string,
    validateSuccess: boolean,
    successMessage: string | undefined,
    disabled: boolean | undefined,
    colPlacement: string,
}

export type Schema = {
    formId?: string;
    fields: Array<SchemaFields>
}