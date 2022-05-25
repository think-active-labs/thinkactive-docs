<script setup lang="ts">
const { path } = useRoute()
</script>

<template>
  <div>
    <ContentList :path="path">
      <template #default="{ list }">
        <ul class="p-0">
          <li
            v-for="(link, index) of list"
            :key="index"
            class="flex space-x-2"
          >
            <Icon
              name="line-md:external-link-rounded"
              class="flex-shrink-0 w-6 h-6 mt-1 text-emerald-500"
            />
            <span>
              <NuxtLink
                :key="link._path"
                :to="link._path"
                active-class="font-bold"
                class="mr-4"
              >
                {{ link.navTitle || link.title }}
              </NuxtLink>
            </span>
          </li>
        </ul>
      </template>
      <template #not-found>
        No content found
      </template>
    </ContentList>
  </div>
</template>
