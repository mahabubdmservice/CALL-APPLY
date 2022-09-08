
// কোন একটি অবজেক্ট লিখতে তার মধ্যে এক বা একাধিক ম্যাডক লিখা যায়-
// কোন অবজেক্ট এর মধ্যে ফাংশন থাকলে তাকে মেথড বলে-
// কোন একটা কি এর ভ্যালু বা প্রপার্টি একই কথা অর্থাৎ কি এর ভ্যালু এবং প্রপার্টি একই কথা
// কোন ফাংশনের নাম না থাকলে তাহাকে এনোনিমাছ ফাংশন বলে-
// কোন একটি অবজেক্ট এর মধ্যে ফাংশন লিখে তার কোন একটি প্রপার্টি েএক্সেস করতে হলে তাহাকে দিস.প্রপার্টি লিখতে হয়- 

const normalPerson = {
    firstName: 'Mizanur',
    lastName: 'Rahman',
    salary: 15000,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount, tips, tax){
        console.log(this);
        this.salary = this.salary - amount - tips - tax;
        return this.salary;
    },
}

// call back function হলে- কিভাবে অন্য একটা অবজেক্ট এর মধ্যে কোন একটা মেথডকে কল করা য়ায় :- 
// bind method er baboher :-
// অবজেক্ট এর বাহির হতে কল করতে গেলে নিচের কনসোল লিখতে হবে আর ভেতর থেকে কল করতে গেলে দিস . প্রপার্টি লিখতে হবে- উপরে দেওয়া আছে-

// normalPerson.chargeBill(150);
// normalPerson.chargeBill(3000);
// normalPerson.chargeBill(850);
// console.log(normalPerson.salary);

const heroPerson= {
    firstName: 'Hero',
    lastName: 'Mizan',
    salary: 25000,
}

const friendlyPerson= {
    firstName: 'Zahin',
    lastName: 'Mizan',
    salary: 20000,
}

// normalPerson.chargeBill();

// const heroChargeBill= normalPerson.chargeBill.bind(heroPerson);
// heroChargeBill(2000);
// heroChargeBill(150);
// console.log(heroPerson.salary)

// const friendlyChargeBill = normalPerson.chargeBill.bind(friendlyPerson);
// friendlyChargeBill(1500);

// Call পদ্ধতি :-

// normalPerson.chargeBill.call(heroPerson, 900, 100, 1000);
// normalPerson.chargeBill.call(heroPerson, 1100, 1000, 30);
// console.log(heroPerson.salary);

// normalPerson.chargeBill.call(friendlyPerson, 5000, 500, 50)
// console.log(friendlyPerson.salary);
// console.log(normalPerson.salary);


// Apply পদ্ধতি:
// Array হিসাবে পাঠাতে হবে;

normalPerson.chargeBill.apply(heroPerson, [3000, 300, 30]);
normalPerson.chargeBill.apply(heroPerson, [4000, 200, 10]);
console.log(heroPerson.salary);