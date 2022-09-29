<div class="pt-24 flex items-center justify-center">
  <div class="bg-gray-800 border border-gray-500 rounded-lg">
    <div class="px-8 py-8 text-center">
      <div class="text-gray-400 font-bold text-2xl">Welcome!</div>
      <div class="text-gray-400 text-xs">Please fill in the form</div>
    </div>

    <div class="px-8 mb-8 w-[400px]">
      <div class="flex flex-col mb-4">
        <label class="mb-1">Username:</label>
        <input type="text" />
      </div>
      <div class="flex flex-col mb-4">
        <label class="mb-1">Email:</label>
        <input type="text" />
      </div>
      <div class="flex flex-col mb-4">
        <label class="mb-1">Password:</label>
        <input type="password" />
      </div>
      <div class="flex flex-col mb-4">
        <label class="mb-1">Confirm password:</label>
        <input type="password" />
      </div>
    </div>

    <div class="px-8 mb-8">
      <button class="w-full bg-blue-500 py-2 rounded transition-colors duration-300 hover:bg-blue-700">Continue</button>
    </div>
  </div>
</div>

<style>
  input[type='text'],
  input[type='password'] {
    @apply px-2 py-1 bg-gray-700 border border-gray-500 rounded;
  }
</style>
