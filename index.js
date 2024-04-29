require('@g-js-api/g.js');

let bits = 32;
let bin1 = Array(bits).fill(0).map(x => counter(x));
bin1.forEach((x, i) => x.display(30 * i, 105));

let c2 = counter(0);
c2.subtract(2 ** 31 - 1);
let c3 = counter(0);
let c4 = counter(0);
c4.display(45, 45);
// convert signed int to unsigned int binary value
let signed_to_bin = remappable((int) => {
    for (let i = bin1.length - 1; i >= 0; i--) {
        // diff from c2 to int (int will be larger)
        c3.set(2 ** i);
		$.add(item_edit(c2.item, c3.item, c4.item, ITEM, ITEM, ITEM, EQ, ADD));
        let tcond = trigger_function(() => {
            bin1[bits - 1 - i].add(1);
            c2.add(2 ** i);
        });
		compare(c4, LESS_OR_EQ, counter(int, true), tcond);
        c3.reset();
		c4.reset();
    };
});
let real_num = 2 ** 32 - 2;
let it = counter((real_num - 1) - (2 ** 31 - 1));
wait(0.5);
signed_to_bin(it.item);

$.liveEditor({ info: true });
