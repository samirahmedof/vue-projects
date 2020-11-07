<template>
    <div class="notifications-settings">
        <FormSwitch v-model="push"
                    label="Push"
                    name="push"
                    class="mb-3"/>

        <FormSwitch v-model="email"
                    label="Email"
                    name="email"
                    class="mb-3"/>
    </div>
</template>

<script>
    import FormSwitch from '../../components/forms/switch'

    export default {
        name: "NotificationsSettings",
        components: {
            FormSwitch
        },
        data() {
            return {
                push: false,
                email: false
            }
        }
    }
</script>
