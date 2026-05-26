export const broadcast = (...functions: Array<() => void>) => () =>{
	for (const f of functions) {
		f();
	}
};
