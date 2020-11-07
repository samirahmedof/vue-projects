<template>
    <b-col cols="switch-wrapper">
        <b-row>
            <b-col v-if="label">
                <label :for="`${name}-switch`" class="mb-0">{{label}}</label>
            </b-col>
            <b-col class="d-flex justify-content-center">
                <b-form-checkbox v-model="localValue"
                                 class="form-switch"
                                 :class="localVariant"
                                 :name="`${name}-switch`"
                                 :id="`${name}-switch`"
                                 size="lg"
                                 switch />
            </b-col>
        </b-row>
    </b-col>
</template>

<script>
    export default {
        name: "switch",
        props: {
            value: {
                type: Boolean,

            },
            label: {
                type: String
            },
            name: {
                type: String,
                required: true
            },
            variant: {
                type: String,
                default: 'outline'
            }
        },
        computed: {
            localValue: {
                get: function() {
                    return this.value;
                },
                set: function(value) {
                    this.$emit('input', value);
                }
            },
            localVariant() {
                if (!this.variant) return '';

                return 'form-switch--' + this.variant;
            }
        },
    }
</script>
