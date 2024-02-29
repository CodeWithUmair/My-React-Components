import React, { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import toast from "react-hot-toast";

export default function ImageSlider({ url, page = 1, limit = 5 }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(false);

  async function fetchImages(getUrl) {
    try {
      setLoading(true);

      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (error) {
      toast.error(error);
      setLoading(false);
      console.log(error);
    }
  }

  console.log(images);

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);

  return <div className="container"></div>;
}

// https://picsum.photos/v2/list
