import React from 'react';
import './ExploreMenu.css';
import { Health_care } from '../../assets/assets';
import { motion } from 'framer-motion';

const ExploreMenu = () => {
  return (
    <>
      <div className="Explore-Menu" id="Explore-menu">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Health Care
        </motion.h1>

        <motion.p
          className="Explore-Menu-text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit...
        </motion.p>

        <motion.div
          className="Explore-Menu-list"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {Health_care.map((item, index) => (
            <motion.div
              key={index}
              className="Explore-Menu-list-item"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <img
                className="Explore-Menu-icon"
                src={item.menu_image}
                alt=""
              />
              <p>{item.menu_name}</p>
            </motion.div>
          ))}
        </motion.div>
        <hr />
      </div>
    </>
  );
};

export default ExploreMenu;
