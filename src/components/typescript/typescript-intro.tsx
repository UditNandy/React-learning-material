import React, { ReactElement } from "react";
import Accordian from "../shared/accordian/accordian";
import { func } from "prop-types";
export const TypescriptDemo = (): ReactElement | any => {
  return (
    <>
      <Accordian header="Basics">
        <ul>
          <li>It is a superset of js.</li>
          <li>
            Browsers cannot run typescript directly. It needs to be converted to
            js first using typescript compilers.
          </li>
          <li>
            We have a file called tsconfig.json which is a configuration file.
          </li>
          <li>
            tsconfig.json actually have configurations regarding compilation
            process of ts to js, output dir, root dir, etc.
          </li>
          <li>
            Here the variables takes the data type of 1st assigned value if no
            datatype is mentioned explicitly and it will only take that datatype
            values in future.
          </li>
          <li>
            If we donot specify any type to the variable then it will take any.
          </li>
        </ul>
      </Accordian>
      <Accordian header="Type alias">
        <ul>
          <li>
            If we want to allow multiple types we can use union operator
            <div>
              <strong>Syntax : {"let name : string | number = 'Udit';"}</strong>
            </div>
          </li>
          <li>
            <strong>Type alias</strong> : Sometimes using union operator can be
            lengthy so to over come this we can create our own datatype using{" "}
            <strong>type</strong> keyword and assign the types to this variable.
            <div>
              Syntax : <strong>{"type name = string | number;"}</strong>
            </div>
          </li>
          <li>
            Suppose you have a function and want to set the data type of its
            parametes and return type as well in a structured manner then we can
            create a type alias in the following way.
            <div>
              <strong>{"type Sum = (n: number, m: number) => number;"}</strong>
            </div>
          </li>
          <li>
            For rest parameters :
            <strong>{" type Sum = (...n: number[]) => number;"}</strong>
          </li>
          <li>
            For objects :
            <strong>
              {" type Person = { name: string; gender: boolean; dob?: Date };"}
            </strong>
            <div>
              Here <strong>?</strong> means the property is an optional property
            </div>
          </li>
          <li>
            We can also give total valus out of which any on value will be used.
            <div>
              {" "}
              Syntax :<strong>{' type Theme = "light" | "dark";'}</strong>
            </div>
          </li>
          <li>
            We can use <strong>&</strong> operator to merge two types.
          </li>
        </ul>
      </Accordian>
      <Accordian header="Interface">
        <ul>
          <li>It is similar to type aliasing</li>
          <li>
            We can use extends keyword to inherit one interface into another.
          </li>
          <li>
            To make any interface parameter const we can use{" "}
            <strong>readonly</strong> keyword.
          </li>
          <li>
            Syntax{" "}
            <strong>{`interface Person {
              name: string;
              gender: boolean;
              dob?: Date;
            }`}</strong>
          </li>
          <li>
            If we want to create a interface where the keys and values are
            alwasys string then
            <strong>{" interface name {  [key: string]: string;}"}</strong>
          </li>
          <li>
            To get the keys from an interface we can use{" "}
            <strong>keyof operator.</strong>
          </li>
          <li>
            <strong>keyof</strong> operator can only be used to declare the type
            of a variable like in case of a function which gives the value of an
            object and the key we pass in the function must be something from
            that object's interface.
          </li>
        </ul>
      </Accordian>
      <Accordian header="Utility Type">
        <ul>
          <li>
            <strong>{"Partial<Type>"}</strong> : It is used to copy one type
            alias to another but here all the properties can be optional.
          </li>
          <li>
            <strong>{"Required<Type>"}</strong> : Opposite of Partial.
          </li>
          <li>
            <strong>{"Redonly<Type>"}</strong> : As name suggests it makes all
            the parameters readonly.
          </li>
          <li>
            <strong>{"Record<keys,type>"}</strong> : It takes keys (pipe
            seperated) as its first argument and datatype as second argument.
          </li>
          <li>
            <strong>{}</strong>
          </li>
        </ul>
      </Accordian>
      <Accordian header="Generics">
        <ul>
          <li>
            These are basically used when we have a function and we are not sure
            about its return type. So we can use generic type.
          </li>
          <li>
            Syntax :{" "}
            <strong>{"function getData<T>( n:T ) : T { return n }"}</strong>
          </li>
          <li>
            It actually helps us to specify the data type of parameters using
            function calls.
          </li>
        </ul>
      </Accordian>
      <Accordian header="Functions">
        <ul>
          <li></li>
        </ul>
      </Accordian>
      <Accordian header="Classes">
        <ul>
          <li>Classes in Typescript are same as class in JS.</li>
          <li>
            Here we have access specifiers{" "}
            <ul>
              <li>
                <strong>public</strong> : Can be accessed from anywhere
              </li>
              <li>
                <strong>private</strong> : Cant be access outside the class
              </li>
              <li>
                <strong>protected</strong> : If we are inheriting a class into
                other class then protected values will also be inherited.
              </li>
            </ul>
          </li>
          <li>
            To make a class variable constant we can add readonly infront of it.
          </li>
          <li>
            To get any value from a class(especially private and protected) we
            can create getter functions.
            <div>
              <strong>{"get getMyHeight() { return this.height;}"}</strong>
            </div>
            <div>
              In getter functions we dont need to call them using{" "}
              <strong>()</strong> we can simply use it like a variable{" "}
              <strong>{"person.getMyHeight"}</strong>
            </div>
          </li>
          <li>
            To set a variable we have setter functions and these function takes
            exactly one parameter.
            <div>
              Syntax :
              <strong>{" set changeMyHeight(val) {this.height = val;}"}</strong>
            </div>
            <div>
              We dont need to call this as a method we can simply assign the
              parameter to it <strong>{"player.changeMyHeight = 10"}</strong>
            </div>
            <div>
              <strong>*Note</strong> : Here player is an instance of the class.
            </div>
          </li>
          <li>
            We can even use a interface to define the class properties using
            implements keyword.
          </li>
          <li>
            We will be able to use all the properties present inside the
            interface without declaring them in the class again, and add as much
            more properties as we want.
          </li>
        </ul>
      </Accordian>
      <Accordian header="Type Assertion">
        <ul>
          <li>
            It means we are telling typescript to treat a variable as a specific
            type
          </li>
          <li>
            Suppose there is a senario that the returned value might be a
            specific type or null or undefined but we are sure that it will be
            that specific type so in that case we can simply add as datatype to
            make it work.
          </li>
          <li>
            <div>
              <strong>
                {'const root = document.getElementById("root") as HTMLElement;'}
              </strong>
            </div>
            <div>
              <strong>
                {'const btn = <HTMLElement>document.getElementById("root");'}
              </strong>
            </div>
            <div>
              <strong>{'const ele = document.getElementById("root")!;'}</strong>
            </div>
          </li>
          <li>The above 3 ways do the same type assertion</li>
          <li>In this way we donot need to do the optional chaning.</li>
        </ul>
      </Accordian>
      <Accordian header="Interview Question">
        <ul>
          <li>Interface vs type aliasing</li>
        </ul>
      </Accordian>
      <Accordian header="Notes">
        <ul>
          <li>
            We can also declare an array as
            <div>
              <strong>
                {"let array: Array<string | number> = ['Udit',10];"}
              </strong>
            </div>
          </li>
          <li>
            Fixed Size array/typle :{" "}
            <strong>
              {'let tuple: [number, string, number] = [10, "Udit", 1];'}
            </strong>
          </li>
          <li>
            Its advisable to use interface in case of class or objects for some
            performance benifits.
          </li>
          <li>
            In canse of <strong>throw new Error()</strong> we get the return
            type as never.
          </li>
        </ul>
      </Accordian>
    </>
  );
};
