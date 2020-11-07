<template>
    <div class="tabs-heading">
        <ul>
            <TabItem v-for="(item, index) in items"
                     :key="index"
                     :name="item.name || item"
                     :active="localValue === index"
                     @select="setActiveTab(index)"/>
        </ul>
    </div>
</template>

<script>
    import TabItem from './TabsHeading';

    export default {
        name: "Tabs",
        components: {
            TabItem
        },
        props: {
            value: {
                type: [String, Number]
            },
            items: {
                type: Array,
                default: function () {
                    return []
                }
            }
        },
        data() {
            return {
                activeTab: 0,
            }
        },
        computed: {
            localValue: {
                get: function() {
                    return this.activeTab || this.value;
                },
                set: function(value) {
                    this.$emit('input', value);
                }
            }
        },
        methods: {
            setActiveTab(index) {
                 this.activeTab = this.localValue = index;
            }
        }
    }
</script>
