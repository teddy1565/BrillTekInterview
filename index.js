const factories = [
    { name: "BR1", employees: ["John", "Alice", "Bob", "Jessie", "Karen","asdf","gg"] },
    { name: "BR2", employees: ["Jessie", "Karen", "John"] },
    { name: "BR3", employees: ["Miles", "Eric", "Henry", "Bob"] },
    { name: "BR4", employees: [] }
  ];
const employeeType = [
    {id: 1, "name": "FullTime", work_begin: "09:00:00", work_end: "17:00:00"},
    {id: 2, "name": "MidTime", work_begin: "12:00:00", work_end: "21:00:00"},
    {id: 3, "name": "HalfTime", work_begin: "20:00:00", work_end: "00:00:00"},
];
const employees = [
      {id: 1, name: "Alice", type: 2},
      {id: 2, name: "Bob", type: 3},
      {id: 3, name: "John", type: 2},
      {id: 4, name: "Karen", type: 1},
      {id: 5, name: "Miles", type: 3},
      {id: 6, name: "Henry", type: 1}
];
const tasks = [
    {id: 1, title: "task01", duration: 60},
    {id: 2, title: "task02", duration: 120},
    {id: 3, title: "task03", duration: 180},
    {id: 4, title: "task04", duration: 360},
    {id: 5, title: "task05", duration: 30},
    {id: 6, title: "task06", duration: 220},
    {id: 7, title: "task07", duration: 640},
    {id: 8, title: "task08", duration: 250},
    {id: 9, title: "task09", duration: 119},
    {id: 10, title: "task10", duration: 560},
    {id: 11, title: "task11", duration: 340},
    {id: 12, title: "task12", duration: 45},
    {id: 13, title: "task13", duration: 86},
    {id: 14, title: "task14", duration: 480},
    {id: 15, title: "task15", duration: 900}
];
/**
 * 1~3.
 * @param {Array} factories 
 * @returns {[Q1,Q2,Q3]} result
 */
function sloution_question_region_1(factories){
    let q1=[];
    factories.forEach((employe)=>{
        q1.push({name:`${employe["name"]}`,count:`${employe["employees"].length}`})
    });
    let q2=[];
    let hotkey="employe"
    factories.forEach((It)=>{
        It["employees"].forEach((employe)=>{
            let result = q2.filter((e)=>e[hotkey]==employe);
            if(result.length==0)q2.push({employe:`${employe}`,count:1});
            else {
                for(let i in q2){
                    if(q2[i][hotkey]==result[0][hotkey]){
                        q2[i].count++;
                        break;
                    }
                }
            }
        });
    });
    let q3=factories;
    q3.forEach((e)=>{
        e["employees"].sort((a,b)=>{
            if(a[0].toUpperCase()>b[0].toUpperCase())return 1;
            else if(a[0].toUpperCase()<b[0].toUpperCase())return -1;
            return 0;
        });
    });
    return [q1,q2,q3]
}

/**
 * 4.
 * @param {array} employees 
 * @returns 
 */
function totalHoursWorked(employees){
    const workType=[8,9,4];
    let total=0;
    employees.forEach((employe)=>{
        total +=(workType[employe.type-1]);
    });
    return total;
}
/**
 * 5.
 * @param {number} time
 * @returns {int}
 */
function howManyEmployeeByTime(time){
    let counter=0;
    if(time<=8||time<=4||time==9)return 1;
    function n(time){
        if(time%9){
            counter++;
            return n(time-=4);
        }
        else return time;
    }
    let result = n(time,counter);
    return (result/9)+(counter%2)+(parseInt(counter/2))
}
/**
 * 6.
 * @param {[{id:number,title:string,duration:int}]} tasks 
 * @returns 
 */
function taskDoneTime(tasks){
    let totalTime = 0;
    tasks.forEach((task)=>{
        totalTime+=task.duration;
    })
    return parseInt(totalTime/60/15)+1;
}