<template>
  <div id="app">
    <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir" class="scroll-smooth">
      <Head>
        <Title>{{ title }}</Title>
        <template v-for="meta in head.meta" :key="meta.id">
          <Meta :id="meta.id" :property="meta.property" :content="meta.content" />
        </template>
        <template v-for="link in head.link" :key="link.id">
          <Link :id="link.id" :rel="link.rel" :href="link.href" :hreflang="link.hreflang" />
        </template>
      </Head>
      <Body>
        <slot />
      </Body>
    </Html>
  </div>
</template>

<script setup>
const route = useRoute();
const { t } = useI18n();
const head = useLocaleHead({
  identifierAttribute: 'id',
  addDirAttribute: true,
  addSeoAttributes: true,
});
const title = computed(() => (route.meta.title ? t(route.meta.title) + ' | ' : '') + 'PrivacyPRO');
</script>
