
<script lang="ts">
	export let showModal: Boolean; 

	let dialog: HTMLDialogElement; 

	$: if (dialog && showModal) dialog.showModal();
  $: if (dialog && !showModal) dialog.close();
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<dialog
	bind:this={dialog}
	on:close={() => (showModal = false)}
	on:click|self={() => dialog.close()}
  class="bg-gray-600"
>
	<div on:click|stopPropagation>
		<slot />
		<hr />
		<!-- svelte-ignore a11y-autofocus -->
	</div>
</dialog>

<style>
  dialog::backdrop{
    background: rgb(0, 0, 0, 0.40);
  }
</style>
