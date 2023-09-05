let d;

d = new Date();

d = d.toString();

d = new Date(2023, 8, 3, 12, 30, 0);

d = new Date("2023-09-03T12:30:00");
d = new Date("09/03/2023 12:30:00");
d = new Date("2023-09-03");
d = new Date("09-03-2023");

d = Date.now();

d = new Date();
d = d.getTime();
d = d.valueOf();

d = new Date(1693771875678);

d = Math.floor(Date.now() / 1000);
console.log(d, typeof d);
