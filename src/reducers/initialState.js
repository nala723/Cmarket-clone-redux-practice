export const initialState = 
{
    "items" : [
    {
      "id" : 1,
      "name": "방 청소 좀 하자",
      "img": "../images/cleaning.jpg",
      "point": 50  
    },
    {
        "id" : 2,
        "name": "치맥은 진리",
        "img": "../images/chickbeer.jpg",
        "point": 20   
     },
     {
        "id" : 3,
        "name": "내일부터는 진짜 다이어트!",
        "img": "../images/diet.png",
        "point": 70 
      },
      {
        "id" : 4,
        "name": "운동해야되는데",
        "img": "../images/exercise.jpg",
        "point": 100  
      },
      {
        "id" : 5,
        "name": "카톡",
        "img": "../images/kakao.png",
        "point": 5  
      },
      {
        "id" : 6,
        "name": "고양이",
        "img": "../images/cat.jpg",
        "point": 200
      },
      {
        "id" : 7,
        "name": "일찍일어나는 새",
        "img": "../images/alarm.jpg",
        "point": 20
      }
    ],
    "todos" : [
        {
          "itemId" :  5,
          "quantity" : 1 
        },
        {
          "itemId" :  6,
          "quantity" : 1 
        }

    ],
    "notTodos" :[
        {
            "itemId" : 2,
            "quantity" : 1    
         }
    ],
    "notifications" : [

    ]

}