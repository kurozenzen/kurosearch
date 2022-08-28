<script>
  import Button from '../common/Button.svelte'
  import Supertag from '../supertags/Supertag.svelte'
  import account from './account'
  import SignUp from './signup/SignUp.svelte'
  import userdata from './userdata'
  import defaultUser from "./default-user.png"
</script>

{#if $account.loggedIn}
  <div class="account-view">
    <div>
      <h2>Signed in as</h2>
      <div class="overview">
        <img class="profile-picture" src={$account.user.photoURL ?? defaultUser} alt="Profile" />
        <div class="name-area">
          <span>{$account.user.displayName ?? "Anonymous"}</span>
          <Button text="Sign out" title="Click to sign out" on:click={() => account.signOut()} />
        </div>
        <span>{$account.user.email}</span>
      </div>
    </div>
    <div>
      <h2>Your supertags</h2>
      <div class="supertags" />
      {#if $userdata.supertags.length === 0}
        <span>You don't have any supertags yet. You can create them when you have more than one tag active.</span>
      {/if}
      <ul>
        {#each $userdata.supertags as supertag}
          <Supertag {supertag} on:remove={(ev) => userdata.deleteSupertag(ev.detail)} />
        {/each}
      </ul>
    </div>
  </div>
{:else}
  <SignUp />
{/if}

<style>
  .overview {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto auto;
    column-gap: 1em;
    background-color: var(--background-1);
    border-radius: var(--border-radius);
    padding: 0.5rem;
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

  ul {
    display: flex;
    flex-direction: column;
    background-color: var(--background-1);
    border-radius: var(--border-radius);
  }
</style>
