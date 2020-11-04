import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CaretRightOutlined, CaretLeftOutlined } from "@ant-design/icons";
import Card from "./Card";

const Slider = () => {
  const [page, setPage] = useState(0); // Pagina actual del carrusel
  const [direction, setDirection] = useState(0); // direccion del carrusel

  // Productos de prueba
  const productos = [
    <Card titulo="test" precio="999" imagen={"/product-placeholder.svg"} />,
    <Card titulo="test2" precio="999" imagen={"/product-placeholder.svg"} />,
    <Card titulo="test3" precio="999" imagen={"/product-placeholder.svg"} />,
  ];

  const swipeConfidenceThreshold = 300;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  /**
   *
   * @param {Number} newPage
   * @param {Number} newDirection
   *
   * Actualiza los datos del carrusel para darle movimiento
   */
  const paginate = (newPage, newDirection) => {
    if (newPage < 0) {
      setPage(productos.length - 1);
    } else if (newPage > productos.length - 1) {
      setPage(0);
    } else {
      setPage(newPage);
    }
    setDirection(newDirection);
  };

  /**
   * Variantes de la animación del carrusel
   */
  const variants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 30 : -30,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 30 : -30,
        opacity: 0,
      };
    },
  };

  return (
    <div className="slider">
      <motion.button
        key="previous"
        onClick={() => paginate(page - 1, -1)}
        className="carousel-btn btn-left ant-btn ant-btn-circle ant-btn-lg ant-btn-icon-only"
      >
        <CaretLeftOutlined />
      </motion.button>
      <AnimatePresence exitBeforeEnter custom={direction}>
        <motion.div
          key={page}
          variants={variants}
          custom={direction}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(page + 1, 1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(page - 1, -1);
            }
          }}
        >
          {productos[page]}
        </motion.div>
      </AnimatePresence>
      <motion.button
        key="next"
        onClick={() => paginate(page + 1, 1)}
        className="carousel-btn btn-right ant-btn ant-btn-circle ant-btn-lg ant-btn-icon-only"
      >
        <CaretRightOutlined />
      </motion.button>
    </div>
  );
};

export default Slider;
