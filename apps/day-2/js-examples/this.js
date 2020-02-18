console.log('this:', this);

function sayHi() {
  console.log('sayHi() this:', this);
}

sayHi();

const person = {
  name: 'Ram',
  email: 'ram@gmail.com',

  show: function () {
    console.log('person.show() this:', this);
    console.log('name:', this.name);

    // arrow function
    const changeName = () => {
      console.log('changeName() this:', this);
      this.name = 'Hari';
    }

    changeName();

    // es5 function expression
    // const changeName = function () {
    //   console.log('changeName() this:', this);
    //   this.name = 'Hari';
    // }

    // changeName.call(this);
    // const newFn = changeName.bind(this);
    // newFn();

    console.log('after changeName() call name:', this.name);
  }
};

person.show();
