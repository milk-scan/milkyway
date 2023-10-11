

<template>
    <Form v-slot="{ handleSubmit }" as="div">
        <form @submit="handleSubmit($event, onSubmit)">
            <div class="grid grid-cols-10 gap-6">
                <template
                    v-for="{ name, label, variation, type, children, placeholder, validateSuccess, successMessage, disabled, colPlacement, ...attrs } in schema.fields"
                    :key="name">
                    <div :class="colPlacement">
                        <Field :id="name" :name="name" v-bind="attrs" v-slot="{ field }">
                            <MilkInput :type="type" :label="label" :placeholder="placeholder"
                                :validateSuccess="validateSuccess" :disabled="disabled" :success-message="successMessage"
                                :variation="variation" v-bind="field"/>

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
            <div class="col-span-10 mt-3">
                <button type="submit" class="h-[62px] px-[215px] py-5 text-white bg-blue-900 rounded-[10px] border border-blue-900 justify-center items-center gap-2.5 inline-flex w-full">Entrar</button>
            </div>
        </form>
    </Form>
</template>
  
<script lang="ts" setup>
import { Form, Field } from 'vee-validate';
import { Schema } from './constants';

defineProps<{
    schema: Schema
}>()

type ValueOfFieldSchema = { [key: string]: string };
// const emit = defineEmits(['submittedForm'])

const onSubmit = (values: ValueOfFieldSchema) => {
    console.log('aaaa', values)
    /* emit('submittedForm', values) */
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
