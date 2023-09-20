import React, { useEffect, useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import styled from "styled-components";
import { TailSpin } from "react-loader-spinner";

import imageData from "../data/GalleryList";
import { useNavigate } from "react-router-dom";

const GalleryContainer = styled.div`
  max-width: 75rem;
  width: 85%;
  margin-inline: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(19rem, 1fr));
  gap: 2rem;
  cursor: pointer;
  padding: 1.5em 0;

  @media (max-width: 420px) {
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  }
`;

const ImageContainer = styled.div`
  background: var(--bg-colour);
  box-shadow: 0px 4px 3px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  overflow: hidden;
  cursor: grab;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const ImageWrapper = styled.div`
  padding: 1em 1em 2em;
`;

const ImageTitle = styled.p`
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-weight: bold;
  margin: 10px 0;
`;

const TagsList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 8px;
`;

const Tag = styled.li`
  background: #f0f0f0;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8em;
`;


const SearchContainer = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
gap: 20px;
`;


const Image = ({ image, index, moveImage }) => {
  const [, ref] = useDrag({
    type: "image",
    item: { index },
  });

  const [, drop] = useDrop({
    accept: "image",
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveImage(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  return (
    <ImageContainer ref={(node) => ref(drop(node))}>
      <ImageWrapper>
        <img
          src={image.img}
          alt={image.title}
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover",
            display: "block",
          }}
        />
        <ImageTitle>{image.title}</ImageTitle>
        <TagsList>
          {image.tags &&
            (Array.isArray(image.tags) ? (
              image.tags.map((tag, tagIndex) => <Tag key={tagIndex}>{tag}</Tag>)
            ) : (
              <Tag>{image.tags}</Tag>
            ))}
        </TagsList>
      </ImageWrapper>
    </ImageContainer>
  );
};

const Gallery = () => {
  const navigate = useNavigate();
  const [imageOrder, setImageOrder] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const handleNavigateToHome = () => {
    navigate("/");
  };
  useEffect(() => {
    setTimeout(() => {
      setImageOrder([...imageData]);
      setLoading(false);
    }, 2000);
  }, []);

  const Spinner = () => {
    return (
      <TailSpin
        paddingRight="40"
        height="160"
        width="400"
        color="#ff5722"
        ariaLabel="tail-spin-loading"
        radius="1"
        alignItems="center"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    );
  };

  const moveImage = (from, to) => {
    const updatedOrder = [...imageOrder];
    const [movedImage] = updatedOrder.splice(from, 1);
    updatedOrder.splice(to, 0, movedImage);
    setImageOrder(updatedOrder);
  };

  const filteredImages = imageOrder.filter((image) =>
    image.tags.some((tag) => tag.includes(search.toLowerCase()))
  );

  return (
    <>
      <div>
      <SearchContainer>
          <input
            type="text"
            placeholder="Search by tags"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ flex: 1, maxWidth: "50%", padding: "8px", borderRadius: "20px", outline: "none" }}
          />
        <button
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: "#ff5722",
            color: "#fff",
            cursor: "pointer",
            fontSize: "1rem",
            border: "none",
          }}
          onClick={handleNavigateToHome}
        >
          Go Back to Home
        </button>
        </SearchContainer>
      </div>
      <DndProvider backend={HTML5Backend}>
        {loading ? (
          <Spinner />
        ) : (
          <div>
            <GalleryContainer>
              {filteredImages.map((image, index) => (
                <Image
                  key={image.id}
                  index={index}
                  image={image}
                  moveImage={moveImage}
                />
              ))}
            </GalleryContainer>
          </div>
        )}
      </DndProvider>
    </>
  );
};

export default Gallery;