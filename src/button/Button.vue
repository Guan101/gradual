<template>
    <button class="g-button" :disabled="disabled" :style="buttonStyle" :class="[buttonTypeClass]" @click="handleClick">
        <g-loading v-if="loading" size="16" class="loadingIcon"></g-loading>
        <div class="text">
          <slot />
        </div>
    </button>
</template>

<script lang="js">
import gLoading from "../loading"
import { computed, defineComponent } from 'vue'

export default defineComponent({
    name: 'gButton',
    components: {
      gLoading,
    },
    props: {
        type: String,
        plain:Boolean,
        hairline:Boolean,
        disabled:Boolean,
        loading:Boolean,
        onClick: {
            type: Function,
        },
    },
    setup(props) {
        const handleClick = (e) => {
            if(props.disabled) return
            props.onClick?.(e)
        }

        const buttonTypeColor = {
            primary: '#1989fa',
            info: '#26bbf1',
            success: '#26cda0',
            warning: '#ffad26',
            danger: '#ee0a24',
        }
        const buttonTypeClass = computed(() => {
            if (props.type) {
                return props.type
            }
        })
        
        const buttonStyle = computed(() => {
          const {plain,type,hairline} = props
          const textColor = buttonTypeColor[type] || '#555';
          const style = {
            background: '#fff',
            color: plain || hairline ? textColor : '#555555',
            border: hairline ? 'none' : `1px solid ${plain ? textColor : '#555555'}`,
            'box-shadow': hairline ? `0 0 0 0.5px ${textColor} !important` : 'none',
          };
          return plain || hairline ? style : {};
        });


        return {
            handleClick,
            buttonTypeClass,
            buttonStyle,
        }
    },
})
</script>

<style lang="less" scoped>
@import './button';
</style>
