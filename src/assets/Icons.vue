<template>
  <div class="icons">
    <svg xmlns="http://www.w3.org/2000/svg">
      <symbol
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        stroke-width="1.75"
        stroke-linecap="round"
        stroke-linejoin="round"
        viewBox="0 0 24 24"
        id="close"
      >
        <path d="M18 6 6 18"></path>
        <path d="m6 6 12 12"></path>
      </symbol>

      <symbol
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        stroke-width="1.75"
        stroke-linecap="round"
        stroke-linejoin="round"
        viewBox="0 0 24 24"
        id="face-smiling"
      >
        <path d="M15 10V9"></path>
        <path d="M16.472 15a6 6 0 01-8.943 0"></path>
        <path d="M9 10V9"></path>
        <circle cx="12" cy="12" r="10"></circle>
      </symbol>

      <symbol
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        stroke-width="1.75"
        stroke-linecap="round"
        stroke-linejoin="round"
        viewBox="0 0 24 24"
        id="chevron-down"
      >
        <path d="m6 9 6 6 6-6"></path>
      </symbol>

      <symbol
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        stroke-width="1.75"
        stroke-linecap="round"
        stroke-linejoin="round"
        viewBox="0 0 24 24"
        id="circle-check"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <path d="m9 12 2 2 4-4"></path>
      </symbol>

      <symbol
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        stroke-width="1.75"
        stroke-linecap="round"
        stroke-linejoin="round"
        viewBox="0 0 24 24"
        id="circle-alert"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" x2="12" y1="8" y2="12"></line>
        <line x1="12" x2="12.01" y1="16" y2="16"></line>
      </symbol>

      <symbol
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        stroke-width="1.75"
        stroke-linecap="round"
        stroke-linejoin="round"
        viewBox="0 0 24 24"
        id="info"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M12 16v-4"></path>
        <path d="M12 8h.01"></path>
      </symbol>

      <symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 20" id="vue">
        <g clip-path="url(#clip0_718_476)">
          <path d="M14.775 0L12 4.61818L9.225 0H0L12 20L24 0H14.775Z" fill="var(--accent)"></path>
          <path d="M14.6979 0L12 4.61818L9.30208 0H5L12 12L19 0H14.6979Z" fill="var(--text)"></path>
        </g>
        <defs>
          <clipPath id="clip0_718_476">
            <rect width="24" height="20" fill="white"></rect>
          </clipPath>
        </defs>
      </symbol>
    </svg>
  </div>
</template>

<style scoped lang="scss">
.icons {
  position: absolute;
  top: -1px;
  left: -1px;
  display: block;
  width: 1px;
  height: 1px;
  overflow: hidden;
  opacity: 0;

  svg {
    fill: transparent;
  }
}
</style>
