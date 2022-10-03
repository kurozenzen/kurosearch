<script>
  import account from '../account'
  import EmailForm from './EmailForm.svelte'
  import GoogleButton from './GoogleButton.svelte'

  const AUTH_ERROR_MESSAGES = {
    'auth/too-many-requests': 'Too many failed attempts. Try again later.',
    'auth/wrong-password': 'Wrong username or password.',
    'auth/user-not-found': 'Wrong username or password.',
    'auth/email-already-in-use': 'An account with this email already exists.',
    'auth/invalid-email': 'Invalid email address.',
    "auth/password-too-short": "Password to short. Must be at least 8 letters."
  }

  let signInError = ''
  let signUpError = ''

  /**
   *
   * @param {() => Promise<unknown>} authAction
   * @param {(message: string) => void} handleErrorMessage
   */
  const handleAuthError = async (authAction, handleErrorMessage) => {
    try {
      signUpError = ''
      await authAction()
    } catch (err) {
      if (err.code in AUTH_ERROR_MESSAGES) {
        handleErrorMessage(AUTH_ERROR_MESSAGES[err.code])
      } else {
        console.error(err)
        handleErrorMessage(err.message)
      }
    }
  }
</script>

<div class="container">
  <div class="providerlist">
    <h3>Sign In</h3>
    <EmailForm
      submitLabel="Sign In"
      error={signInError}
      on:submit={(ev) =>
        handleAuthError(
          () => account.signInWithEmail(ev.detail.email, ev.detail.password),
          (message) => {
            signInError = message
          }
        )}
    />
    <p>or</p>
    <GoogleButton content="Sign in With Google" on:click={() => account.signInWithGoogle()} />
  </div>
  <div class="divider" />
  <div class="providerlist">
    <h3>Sign Up</h3>
    <EmailForm
      submitLabel="Create Account"
      error={signUpError}
      on:submit={(ev) =>
        handleAuthError(
          () => account.signUpWithEmail(ev.detail.email, ev.detail.password),
          (message) => {
            signUpError = message
          }
        )}
    />
  </div>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: var(--grid-gap);
    margin: auto;
    padding: var(--grid-gap);
    border-radius: var(--border-radius);
    max-width: 400px;
    background-color: var(--background-1);
  }

  .divider {
    height: 1px;
    background-color: var(--background-2);
  }

  .providerlist {
    display: flex;
    flex-direction: column;
    gap: var(--grid-gap);
  }
  p {
    text-align: center;
  }
</style>
