<template>
    <div class="sk-chase" :style="loading_style" v-if="type == 'chase'">
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
    </div>
    <div class="spinner" v-else-if="type == 'spinner'">
        <div class="bounce1"></div>
        <div class="bounce2"></div>
        <div class="bounce3"></div>
    </div>
</template>

<script>
import { computed, defineComponent } from 'vue'
export default {
    name: 'gLoading',
    props: {
        type: {
            type: String,
            default: 'chase',
        },
        loading: {
            type: Boolean,
        },
        size: {
            type: Number || String,
            default: 20,
        },
        color: {
            type: String,
            default: '#3a7afe',
        },
    },
    setup(props) {
        const loading_style = computed(() => {
            return {
                width: props.size + 'px',
                height: props.size + 'px',
                '--loading-background-color': props.color,
            }
        })
        return {
            loading_style,
        }
    },
}
</script>

<style lang="less">
.sk-chase {
    position: relative;
    animation: sk-chase 2.5s infinite linear both;
}

.sk-chase-dot {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    animation: sk-chase-dot 2s infinite ease-in-out both;
}

.sk-chase-dot:before {
    content: '';
    display: block;
    width: 25%;
    height: 25%;
    background-color: var(--loading-background-color);
    border-radius: 100%;
    animation: sk-chase-dot-before 2s infinite ease-in-out both;
}

.sk-chase-dot:nth-child(1) {
    animation-delay: -1.1s;
}
.sk-chase-dot:nth-child(2) {
    animation-delay: -1s;
}
.sk-chase-dot:nth-child(3) {
    animation-delay: -0.9s;
}
.sk-chase-dot:nth-child(4) {
    animation-delay: -0.8s;
}
.sk-chase-dot:nth-child(5) {
    animation-delay: -0.7s;
}
.sk-chase-dot:nth-child(6) {
    animation-delay: -0.6s;
}
.sk-chase-dot:nth-child(1):before {
    animation-delay: -1.1s;
}
.sk-chase-dot:nth-child(2):before {
    animation-delay: -1s;
}
.sk-chase-dot:nth-child(3):before {
    animation-delay: -0.9s;
}
.sk-chase-dot:nth-child(4):before {
    animation-delay: -0.8s;
}
.sk-chase-dot:nth-child(5):before {
    animation-delay: -0.7s;
}
.sk-chase-dot:nth-child(6):before {
    animation-delay: -0.6s;
}

@keyframes sk-chase {
    100% {
        transform: rotate(360deg);
    }
}

@keyframes sk-chase-dot {
    80%,
    100% {
        transform: rotate(360deg);
    }
}

@keyframes sk-chase-dot-before {
    50% {
        transform: scale(0.4);
    }
    100%,
    0% {
        transform: scale(1);
    }
}

.spinner {
    text-align: center;
    border:1px solid black;
}

.spinner > div {
    width: 18px;
    height: 18px;
    background-color: #333;

    border-radius: 100%;
    display: inline-block;
    -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
    animation: sk-bouncedelay 1.4s infinite ease-in-out both;
}

.spinner .bounce1 {
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
}

.spinner .bounce2 {
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
}

@-webkit-keyframes sk-bouncedelay {
    0%,
    80%,
    100% {
        -webkit-transform: scale(0);
    }
    40% {
        -webkit-transform: scale(1);
    }
}

@keyframes sk-bouncedelay {
    0%,
    80%,
    100% {
        -webkit-transform: scale(0);
        transform: scale(0);
    }
    40% {
        -webkit-transform: scale(1);
        transform: scale(1);
    }
}
</style>
