import React from 'react'
import Card from './Card.jsx'
import './index.css';

const Mergecards = () => {
       const users = [
  {
    fullName: "Aarav Sharma",
    likeCount: 124,
    followCount: 560,
    isFollowed: true,
    isLiked: false,
    designation: "Frontend Developer",
    description: "Passionate about building responsive and interactive web apps.",
    profilePhoto: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    fullName: "Diya Mukherjee",
    likeCount: 342,
    followCount: 1200,
    isFollowed: false,
    isLiked: true,
    designation: "UI/UX Designer",
    description: "Designing clean and user-friendly digital experiences.",
    profilePhoto: "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
    fullName: "Rohan Das",
    likeCount: 98,
    followCount: 430,
    isFollowed: true,
    isLiked: true,
    designation: "Backend Developer",
    description: "Loves APIs, databases, and scalable systems.",
    profilePhoto: "https://randomuser.me/api/portraits/men/3.jpg"
  },
  {
    fullName: "Sneha Roy",
    likeCount: 876,
    followCount: 2340,
    isFollowed: false,
    isLiked: false,
    designation: "Digital Marketer",
    description: "Helping brands grow with creative strategies.",
    profilePhoto: "https://randomuser.me/api/portraits/women/4.jpg"
  },
  {
    fullName: "Kabir Khan",
    likeCount: 210,
    followCount: 780,
    isFollowed: true,
    isLiked: true,
    designation: "Full Stack Developer",
    description: "Turning ideas into functional web applications.",
    profilePhoto: "https://randomuser.me/api/portraits/men/5.jpg"
  },
  {
    fullName: "Ananya Ghosh",
    likeCount: 432,
    followCount: 1540,
    isFollowed: false,
    isLiked: true,
    designation: "Content Writer",
    description: "Crafting engaging stories and digital content.",
    profilePhoto: "https://randomuser.me/api/portraits/women/6.jpg"
  },
  {
    fullName: "Ishaan Verma",
    likeCount: 67,
    followCount: 290,
    isFollowed: false,
    isLiked: false,
    designation: "Software Engineer",
    description: "Exploring cloud technologies and DevOps.",
    profilePhoto: "https://randomuser.me/api/portraits/men/7.jpg"
  },
  {
    fullName: "Meera Chatterjee",
    likeCount: 543,
    followCount: 1980,
    isFollowed: true,
    isLiked: true,
    designation: "Product Manager",
    description: "Bridging the gap between tech and users.",
    profilePhoto: "https://randomuser.me/api/portraits/women/8.jpg"
  },
  {
    fullName: "Aditya Sen",
    likeCount: 159,
    followCount: 620,
    isFollowed: false,
    isLiked: false,
    designation: "Data Analyst",
    description: "Finding insights through data visualization.",
    profilePhoto: "https://randomuser.me/api/portraits/men/9.jpg"
  },
  {
    fullName: "Priya Banerjee",
    likeCount: 999,
    followCount: 3210,
    isFollowed: true,
    isLiked: true,
    designation: "Mobile App Developer",
    description: "Building smooth and scalable mobile apps.",
    profilePhoto: "https://randomuser.me/api/portraits/women/10.jpg"
  }];
  return (
    <div className='flex flex-wrap p-8 gap-8 justify-center' >
        {users.map((user, index) => (
        <Card key={index} fullName={user.fullName} designation={user.designation} description={user.description} profilePhoto={user.profilePhoto} likeCount={user.likeCount} followCount={user.followCount}/>      
      ))}
    </div>
  )
}

export default Mergecards
