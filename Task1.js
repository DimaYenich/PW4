const students =
[
  {name: "Дмитро",
  surname: "Єніч",
  yearOfBr: 2004,
  disciplines: [["Хмарні технології",3],
                ["ІЗВП",5],
                ["ПКІ",4]],
  },
  {name: "Віталій",
  surname: "Ісаєнко",
  yearOfBr: 2004,
  disciplines: [["Хмарні технології",2],
                ["ІЗВП",4],
                ["ПКІ",5]],
  },
  {name: "Павло",
  surname: "Жданюк",
  yearOfBr: 2004,
  disciplines: [["Хмарні технології",2],
                ["ІЗВП",5],
                ["ПКІ",3]],
  }
]


function getStudents(students)
{ 
   for(var i=0 in students)
   {
      var average = 0
      for(var j=0 in students)
      {
        average += (students[i].disciplines[j][1])
      }
      console.log(students[i].name,students[i].surname,", рік народження",
                  students[i].yearOfBr,", середній бал: ", (average/Array.from(students[i].disciplines).length).toFixed(2))
   }
}


function getRating(students, discipline)
{
  var ratingOfDiscipline = []
  for(var i=0 in students)
  {
    if(discipline == students[0].disciplines[i][0])
      for(var j=0 in students)
      {
        ratingOfDiscipline.push([students[j].name +" "+ students[j].surname,students[j].disciplines[i][1]])
      }
  }
  ratingOfDiscipline.sort(function(a,b)
                          {return b[1]-a[1]})

  console.log("Рейтинг студентів по предмету",discipline)
  for(var i=0 in ratingOfDiscipline)
  {
    console.log(ratingOfDiscipline[i][0], ratingOfDiscipline[i][1])
  }
}


function ratingNumber(number)
{
  for(var i=0 in students)
  {
    var average = 0
    for(var j=0 in students)
      average += (students[i].disciplines[j][1])
    if((average/Array.from(students[i].disciplines).length).toFixed(2) >= number)
      console.log("Студент з середнімм балом більше ніж "+number+": "
                  +students[i].name, students[i].surname,"-",
                  (average/Array.from(students[i].disciplines).length).toFixed(2))
  }
}


function myFunction() {
  getStudents(students)
  getRating(students, "ІЗВП")
  ratingNumber(3)
}
