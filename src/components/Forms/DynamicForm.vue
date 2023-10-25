

<template>
    <Form v-slot="{ handleSubmit }" @submit="onSubmit" id="zodForm">
        <form id="zodForm" @submit="handleSubmit($event, onSubmit)">
            <div class="grid grid-cols-4 gap-6">
                <template
                    v-for="{ name, label, variation, type, children, placeholder, validateSuccess, successMessage, disabled, colPlacement, ...attrs } in schema.fields"
                    :key="name">
                    <div :class="colPlacement">
                        <Field :validate-on-input="false" :id="name" :name="name" v-bind="attrs" v-slot="{ field }">
                            <MilkInput :type="type" :label="label" :placeholder="placeholder"
                                :validateSuccess="validateSuccess" :disabled="disabled" :success-message="successMessage"
                                :variation="variation" v-bind="field" />

                            <template v-if="children && children.length">
                                <component v-for="({ tag, text, ...childAttrs }, idx) in children" :key="idx" :is="tag"
                                    v-bind="childAttrs">
                                    {{ text }}
                                </component>
                            </template>
                        </Field>
                    </div>
                </template>
            </div>
        </form>
    </Form>
</template>
  
<script lang="ts" setup>
import { Form, Field, configure } from 'vee-validate';
import { Schema } from './constants';

defineProps<{
    schema: Schema,
    validationSchema: Object
}>()

type ValueOfFieldSchema = { [key: string]: string };

configure({
    validateOnInput: false,
});

const emits = defineEmits(["submittedForm"])
const onSubmit = (values: ValueOfFieldSchema) => {
    emits("submittedForm", values);
}






/* 
import { useSubmitForm } from 'vee-validate';
const submitForm = async () => {
    console.log("helou?", useSubmitForm, veeForm)
    const submit = useSubmitForm((values, actions) => {
        // Send data to your api ...
        console.log("submitformmmm", values);
        // You can perform any of the form actions using the actions object
        // set a single field value

        // reset the form
        actions.resetForm();
    });

    submit();


}

defineExpose({
    submitForm,
}) */
</script>
