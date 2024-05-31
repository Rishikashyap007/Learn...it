
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function CourseVideo() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get(`https://learn-it-zl9y.onrender.com/api/users/enrolledCourse/${id}`);
        setCourse(response.data);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchCourse();
  }, [id]);

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!course) {
    return <p>Loading...</p>;
  }

  const { video } = course;
  const isYouTubeVideo = video && (video.videoUrl.includes("youtube.com") || video.videoUrl.includes("youtu.be"));

  return (
    <div className="flex justify-center items-center md:h-screen">
      <div className="flex flex-col md:flex-row md:h-[80vh] md:w-[90vw] gap-4 p-4 bg-white shadow-md rounded-lg">
        <div className="flex-1 border-2 p-4 flex flex-col gap-4">
          <p className="text-2xl font-semibold">{course.title}</p>
          <p className="text-xl font-normal">{course.description}</p>
        </div>
        <div className="flex-1 border-2 p-4">
          {isYouTubeVideo ? (
            <iframe
              width="100%"
              height="100%"
              src={video.videoUrl.replace("watch?v=", "embed/")}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            video && (
              <video className="w-full h-full" controls>
                <source src={video.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )
          )}
        </div>
      </div>
    </div>
  );
}
