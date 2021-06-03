/**
 * @jest-environment jsdom
 */

import { localstorage1,Createlist1,Createtask1,deletetasklogic,checkboxfalse,checkboxtrue } from './src/logic';

describe("Creating tasks and lists",()=>{ 

    test('List Creation', () => {
    const newlist = new Createlist1('Newlist') 
    expect(newlist.list).toBe('Newlist');
    });

    test('Task Creation', () => {
        const task = new Createtask1('12-05-2021','Newtask','Nothing','High',false) 
        expect(task.date).toBe('12-05-2021');
        expect(task.task).toBe('Newtask');
        expect(task.description).toBe('Nothing');
        expect(task.priority).toBe('High');
        expect(task.status).toBeFalsy();


    })
});

describe("Setting localstorage up using json values",()=>{ 

test('set localstorage up without an element and comparing',() => {
    const liststasks = []
    expect(localstorage1()).toEqual(liststasks);
    })

test('set localstorage up with an element and strigify it',() => {
    const liststasks = [1,2]
    localStorage.setItem('liststore', JSON.stringify(liststasks));
    expect(localstorage1()).toEqual(liststasks);
    localStorage.clear()
    })
})


describe ("Setting localstorage up and using multiple operations on the same",()=>{ 



test('test & splice the first element in the objects array',() => {

 
let liststasks = [{ todos: [{description:"sjs",priority: "Medium",status: false},
                  {description:"none",priority: "Medium",status: true},
                  {description:"sjs",priority: "Medium",status: false}]}]

            let liststasksupdated = [{ todos: [{description:"none",priority: "Medium",status: true},
            {description:"sjs",priority: "Medium",status: false}]}]

            deletetasklogic(0, 0, liststasks)

            expect(liststasks).toEqual(liststasksupdated);
                
        })

 test('Change status which was false to true',() => {

 
            let liststasks = [{ todos: [{description:"sjs",priority: "Medium",status: false}]}]

            let liststasksupdated = [{ todos: [{description:"sjs",priority: "Medium",status: true}]}]


            checkboxtrue(liststasks,0,0)

            expect(liststasks).toEqual(liststasksupdated);
                
    })

    test('Change status which was true to false',() => {

 
            let liststasks = [{ todos: [{description:"sjs",priority: "Medium",status: true}]}]

            let liststasksupdated = [{ todos: [{description:"sjs",priority: "Medium",status: false}]}]


            checkboxfalse(liststasks,0,0)

            expect(liststasks).toEqual(liststasksupdated);
                
    })

// test('set localstorage up with an element and strigify it',() => {
//     const liststasks = [1,2]
//     localStorage.setItem('liststore', JSON.stringify(liststasks));
//     expect(localstorage1()).toEqual(liststasks);
//     localStorage.clear()
//     })
})
