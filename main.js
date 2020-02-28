const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4]
    }
  }, {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5]
    }
  }, {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5]
    }
  }];

function getSubjects(students) {
    let subjects =  Object.keys(students.subjects).map((element) => {
        element = element.replace('_', ' ');
        return element[0].toUpperCase() + element.slice(1);
    })
  return subjects;
};
console.log('subjects: ', getSubjects(students[0]));

function getAverageMark(students) {
    let average = Object.values(students.subjects).flat();
    let numsToSum = average.reduce((a,b)=>(a+b),0);
    let avaregeNum = (numsToSum/average.length).toFixed(2);
    return avaregeNum;
}
console.log('getAverageMark: ', getAverageMark(students[0]));

function getStudentInfo(student) {
    
    let studentInfo = {
        course : student.course,
        name : student.name,
        averageMark : getAverageMark(student)
    }
    return studentInfo;
}
console.log('getStudentInfo: ', getStudentInfo(students[0]));

function getStudentsNames(student) {
    let nameStudents = student.map( element => element.name);
    let nameAbc = nameStudents.sort();
    return nameAbc; 
}
console.log('getStudentsNames: ', getStudentsNames(students));

function getBestStudent(student) {
    let bestStudentMark = 0;
    for (let i = 0; i < student.length; i++) {
        if (getAverageMark(student[i]) > bestStudentMark){
            bestStudentName = student[i];    
        }
    }
    return bestStudentName.name;
}
console.log('getBestStudent: ', getBestStudent(students));

function calculateWordLetters(str) {
        str= str.toLowerCase();
        let result = {};
        for(i=0; i<str.length; i++){
            result[str[i]] = 0;
            for (let j = 0; j < str.length; j++) {
                if (str[i] == str[j]) {
                    result[str[i]]+=1;
                }
            }
        }    
        return result;
}
console.log('calculateWordLetters: ', calculateWordLetters('тест'));