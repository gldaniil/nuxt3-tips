/**
 * Lifecycle Hooks
 *
 * Выполнение функции обратного вызова через определенные промежутки времени.
 * Таймер запускается, когда компонент монтируется, и очищается, когда компонент демонтируется.
 *
 * @param {() => void} callback функция обратного вызова.
 * @param {number} [interval=1000] время между выполнением каждой функции.
 */
export const useInterval = (callback: () => void, interval: number = 1000) => {
	let timer: ReturnType<typeof setInterval> | null = null;

	const clear = () => {
		if (timer) {
			clearInterval(timer);
			timer = null;
		}
	};

	onMounted(() => {
		if (interval <= 0) return;
		timer = setInterval(callback, interval);
	});

	onBeforeMount(() => {
		clear();
	});
};
