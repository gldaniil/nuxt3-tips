/**
 * Stateful Logic
 *
 * Выполняет асинхронный запрос для получения информации о пользователе.
 *
 * @returns {Object} Объект с данными пользователя и методами.
 */
export const useUser = (): object => {
	const user = ref<{ note?: string } | null>(null);
	const note = computed<string>(() => user.value?.note ?? '');

	async function fetchUser(): Promise<void> {
		const response = await fetch('/api/user');
		if (response.ok) {
			user.value = await response.json();
		}
	}

	return {
		user: readonly(user),
		fetchUser,
		note,
	};
};
