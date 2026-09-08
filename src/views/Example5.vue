<template>
    <div>
        <BlockQuote showLine>
           标题组件
        </BlockQuote>
        <DetailCard title="详情卡片">
            <p>这是详情卡片的内容。</p>
        </DetailCard>
        <DetailCard title="详情卡片" :level="1">
            <p>这是详情卡片的内容。</p>
        </DetailCard>
        <DetailCard title="详情卡片" :level="2">
            <p>这是详情卡片的内容。</p>
        </DetailCard>
    </div>
</template>

<script setup>
import BlockQuote from '../components/BlockQuote.vue';
import DetailCard from '../components/DetailCard.vue';
</script>