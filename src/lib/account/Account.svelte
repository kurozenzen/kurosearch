<script>
  import Button from "../common/Button.svelte";
  import account from "./account";
</script>

{#if $account.loggedIn}
  <div class="account-view">
    <div>
      <h2>Signed in as</h2>
      <div class="overview">
        <img
          class="profile-picture"
          src={$account.user.photoURL}
          alt="Profile"
        />
        <div class="name-area">
          <span>{$account.user.displayName}</span>
          <Button
            icon="sign-out"
            text="Sign out"
            title="Click to sign out"
            on:click={() => account.signOut()}
          />
        </div>

        <span>{$account.user.email}</span>
      </div>
    </div>

    <div>
      <h2>Your supertags</h2>
      <div class="supertags" />
    </div>
  </div>
{:else}
  <div>
    <p>You are currently not signed in.</p>
    <br />
    <Button
      icon="sign-in"
      text="Sign in with Google"
      title="Click to sign in with your Google account"
      on:click={() => account.signInWithGoogle()}
    />
    <!-- <Button
    icon="sign-in"
    text="Sign in with Email"
    title="Click to sign in"
    on:click={() => account.signInWithEmail()}
  />
  <p>Sign up:</p>
  <Button
    icon="sign-in"
    text="Sign up with email"
    title="Click to create a new account"
    on:click={() =>
      account.signUpWithEmail("nico.kandut@gmail.com", "asdfjkl;asdfjkl;")}
  /> -->
  </div>
{/if}

<style>
  .overview {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto auto;
    column-gap: 1em;
  }

  .profile-picture {
    border-radius: 50%;
    height: 4em;
    grid-area: 1/1/3/2;
  }

  .account-view {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .name-area {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .name-area span {
    font-weight: bold;
  }
</style>
