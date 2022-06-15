<script setup lang="ts">
import { teamMembers } from '../contributors'
</script>

<template>
  <div class="content">
    <div class="content-container">
      <main class="main">
        <div class="vp-doc" flex flex-col items-center mt-10>
          <h2 id="meet-the-team" op50 font-normal p="t-10 b-2">
            Meet The Team
          </h2>
          <div grid="~ cols-1 md:cols-2 lg:cols-3 gap-x-10 gap-y-10 items-center" p-10>
            <TeamMember
              v-for="c of teamMembers"
              :key="c.github"
              v-bind="c"
            />
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
