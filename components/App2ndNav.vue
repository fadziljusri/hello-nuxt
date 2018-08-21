<template>
  <section class="nd-nav">
    <div class="nav-scroller bg-white shadow-sm">
      <nav class="nav nav-underline">
        <a class="nav-link active" href @click.prevent>Main</a>
        <a class="nav-link" href @click.prevent>
          Friends
          <span class="badge badge-pill bg-light align-text-bottom">27</span>
        </a>
        <a class="nav-link" href @click.prevent>Explore</a>
        <a class="nav-link" href @click.prevent>Suggestions</a>
        <a class="nav-link" href @click.prevent>Link</a>
        <a class="nav-link" href @click.prevent>Link</a>
        <a class="nav-link" href @click.prevent>Link</a>
        <a class="nav-link" href @click.prevent>Link</a>
        <a class="nav-link" href @click.prevent>Link</a>
      </nav>
    </div>
  </section>
</template>

<style>
  section.nd-nav {
    margin-top: 56px !important;
  }

  .nav-scroller {
    position: relative;
    z-index: 2;
    height: 2.75rem;
    overflow-y: hidden;
  }

  .nav-scroller .nav {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    padding-bottom: 1rem;
    margin-top: -1px;
    overflow-x: auto;
    color: rgba(255, 255, 255, 0.75);
    text-align: center;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
  }

  .nav-underline .nav-link {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    font-size: 0.875rem;
    color: #6c757d;
  }

  .nav-underline .nav-link:hover {
    color: #007bff;
  }

  .nav-underline .active {
    font-weight: 500;
    color: #343a40;
  }

</style>
