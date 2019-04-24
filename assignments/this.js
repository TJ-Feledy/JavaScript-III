/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. - window binding/ GLOBAL binding: Refers to 'this' as being the global object. If I were to use "this" in the global binding, "this" would refer to the actual JavaScript code/object.
* 2. - Implicit binding: "this" refers to the object a method is being called on... me.toUpperCase() - this would refer to 'me'.
* 3. - New binding: In a new binding 'this' is referenced to the variable the new binding is being assigned to... const me = new Child(), 'this refers to the 'me' variable.
* 4. - Explicit binding: 'this' would refer to the object being bound... me.call(you), 'this' is refering to 'you' in this instance.
*
* write out a code example of each explanation above
*/

// Principle 1

function hello (name) {
    return name + this;
}

// Principle 2

const we = {
    first: 'me',
    second: 'us',
    third: function youAndI(name) {
        return `${this.first} and ${name} makes "We"`;
    }
};
we.third('Joe');


// Principle 3

function WhoIsTalking(name) {
    this.name = name;
    this.mood = function () {
        return `${this.name} Hangery!`;
    }
}
const tj = new WhoIsTalking('TJ');
const bret = new WhoIsTalking('Bret');
bret.mood();
tj.mood();

// Principle 4

console.log(bret.mood.call(tj))