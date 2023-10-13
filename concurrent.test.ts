

test.concurrent('Test 1', () => {
    console.info('"test 1 start')
	expect(1 + 2).toBe(3);
    console.info('"test 1 end')
});

test.concurrent('Test 2', () => {
    console.info('"test 2 start')
	expect(2 + 2).toBe(4);
    console.info('"test 2 end')
});