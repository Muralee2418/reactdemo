import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AxiosDemo(props) {
    const [userlist,setuserlist]=useState([])
    //request with queryparam
    //let api=axios.create({baseURL:"https://jsonplaceholder.typicode.com",data:{postid:2}})
    //useEffect(()=>{api.get("/comments").then((response)=>{console.log(response.data)
    //setuserlist(response.data)
    //})},[])

    //without query param

    let api=axios.create({baseURL:"https://jsonplaceholder.typicode.com"})
    useEffect(()=>{api.get("/users").then((response)=>{console.log(response.data)
    setuserlist(response.data)})},[])
    let course_object={
        courseID:2750,
        courseName:"REact Framework(MERN)"
    }
     /*let course={
        "courseID": "2610",
        "courseName": "React Framework"
     }*/

     let postdetails=()=>{
        api.post("https://trainingdata-13117.firebaseio.com/courses.json",JSON.stringify(course_object)).
        then((response)=>{if(response.status===200){
            alert("course added sucessfully")
        }})
     }

    return (
        <div>
            <ul>
                {
                    userlist.map((user)=><li>{user.name}</li>)
                }
            </ul>
            <button onClick={postdetails}>add course</button>
        </div>
    );
}

export default AxiosDemo;