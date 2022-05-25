<template>
  <div class="flex justify-between max-w-2xl px-4 py-4 mx-auto sm:px-8 items-center">
    <img id="site-logo" src="/logo_text.svg" alt="logo" class="w-40">
    <!-- Navigation -->
    <div class="text-gray-700 dark:text-gray-200">
      <ContentNavigation v-slot="{ navigation }">
        <NuxtLink
          v-for="link of navigation"
          :key="link._path"
          :to="link._path"
          active-class="font-bold"
          class="mr-4"
        >
          {{ link.navTitle || link.title }}
        </NuxtLink>
      </ContentNavigation>
    </div>
    <!-- Social icons & Color Mode -->
    <div class="space-x-3 text-gray-500 transition">
      <a href="https://thinkactivelabs.co.uk" title="Think Active Labs" class="hover:text-gray-700 dark:hover:text-gray-300"><Icon name="line-md:laptop-twotone" /></a>
      <a href="https://twitter.com/think-active-labs" title="Twitter" class="hover:text-gray-700 dark:hover:text-gray-300"><Icon name="line-md:twitter-twotone" /></a>
      <a href="https://github.com/think-active-labs" title="GitHub" class="hover:text-gray-700 dark:hover:text-gray-300"><Icon name="line-md:github-loop" /></a>
      <ColorModeSwitch class="hover:text-gray-700 dark:hover:text-gray-300" />
    </div>
  </div>
</template>
