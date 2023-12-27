<template>
    <div class="container">
      <div class="profile">
        <div class="profile-image">
          <img src="https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces" alt="">
        </div>
        <div class="profile-user-settings">
          <h1 class="profile-user-name">game_me</h1>
        </div>
        <div class="profile-stats">
          <ul>
            <li><span class="profile-stat-count">164</span> posts</li>
            <li><span class="profile-stat-count">188</span> followers</li>
            <li><span class="profile-stat-count">206</span> following</li>
          </ul>
        </div>
        <div class="profile-bio">
          <p><span class="profile-real-name">Jane Doe</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit 📷✈️🏕️</p>
        </div>
      </div>
      <!-- End of profile section -->
    </div>
    <!-- End of container -->
</template>

<style lang="scss" scoped>
/* Profile Section */

.profile {
  padding: 5rem 0;

  &::after {
    content: "";
    display: block;
    clear: both;
  }

  &-image {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 3rem;

    & img {
      border-radius: 50%;
    }
  }

  &-user-settings,
  &-stats,
  &-bio {
    float: right;
    width: calc(66.666% - 2rem);
  }

  &-user-settings {
  margin-top: 1.1rem;
  }

  &-user-name {
    display: inline-block;
    font-size: 3.2rem;
    font-weight: 300;
  }

  &-stats {
    margin-top: 2.3rem;
  }

  &-stats li {
  display: inline-block;
  font-size: 1.6rem;
  line-height: 1.5;
  margin-right: 4rem;
  cursor: pointer;

    &:last-of-type {
      margin-right: 0;
    }
  }

  &-bio {
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.5;
    margin-top: 2.3rem;
  }

  &-real-name,
  &-stat-count,
  &-edit-btn {
    font-weight: 600;
  }
}
</style>