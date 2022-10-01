<script lang="ts">
  import axios from 'axios';

  let formValues = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  let errorMsg = '';

  const onContinueClick = async () => {
    errorMsg = '';
    try {
      await axios.post('/api/entry', formValues);
    } catch (e) {
      errorMsg = e.response.data;
    }
  };
</script>

<div class="pt-24 flex items-center justify-center">
  <div class="bg-gray-800 border border-gray-500 rounded-lg">
    <div class="px-8 py-8 text-center">
      <div class="text-gray-400 font-bold text-2xl">Welcome!</div>
      <div class="text-gray-400 text-xs">Please fill in the form</div>
    </div>

    <div class="px-8 mb-8 w-[400px]">
      <div class="flex flex-col mb-4">
        <label class="mb-1">Username:</label>
        <input bind:value="{formValues.username}" type="text" />
      </div>
      <div class="flex flex-col mb-4">
        <label class="mb-1">Email:</label>
        <input bind:value="{formValues.email}" type="text" />
      </div>
      <div class="flex flex-col mb-4">
        <label class="mb-1">Password:</label>
        <input bind:value="{formValues.password}" type="password" />
      </div>
      <div class="flex flex-col mb-4">
        <label class="mb-1">Confirm password:</label>
        <input bind:value="{formValues.confirmPassword}" type="password" />
      </div>

      <button
        on:click="{onContinueClick}"
        class="mt-4 w-full bg-blue-500 py-2 rounded transition-colors duration-300 hover:bg-blue-700 mb-2"
        >Continue</button
      >
      <div class="text-red-600">
        {errorMsg}
      </div>
    </div>
  </div>
</div>

<style>
  input[type='text'],
  input[type='password'] {
    @apply px-2 py-1 bg-gray-700 border border-gray-500 rounded;
  }
</style>
