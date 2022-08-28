<script>
  import account from '../account'
  import EmailForm from './EmailForm.svelte'
  import GoogleButton from './GoogleButton.svelte'
</script>

<div class="container">
  <div class="providerlist">
    <h3>Sign In</h3>
    <EmailForm submitLabel="Sign In" on:submit={(ev) => account.signInWithEmail(ev.detail.email, ev.detail.password)} />
    <p>or</p>
    <GoogleButton content="Sign in With Google" on:click={() => account.signInWithGoogle()} />
  </div>
  <div class="divider" />
  <div class="providerlist">
    <h3>Sign Up</h3>
    <EmailForm submitLabel="Create Account" on:submit={(ev) => account.signUpWithEmail(ev.detail.email, ev.detail.password)} />
  </div>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 1rem;
    padding: 1rem;
    background-color: var(--background-1);
    border-radius: var(--border-radius);
    margin: auto;
    max-width: 400px;
  }

  .divider {
    min-width: 1px;
    min-height: 1px;
    background-color: var(--background-2);
  }

  .providerlist {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  p {
    text-align: center;
  }
</style>
